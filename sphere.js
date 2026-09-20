
    import * as THREE from 'three';

    const canvas=document.getElementById('webgl');
    const holder=canvas.parentElement;
    const isMobile=matchMedia('(max-width:900px)').matches;

    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(50,1,0.1,100);
    camera.position.set(0,0,12);

    const renderer=new THREE.WebGLRenderer({canvas,antialias:!isMobile,alpha:true,powerPreference:'high-performance'});
    renderer.setPixelRatio(Math.min(devicePixelRatio,isMobile?1.5:2));
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure=1.1;

    scene.add(new THREE.HemisphereLight(0xffffff,0x080808,0.65));

    const keyLight=new THREE.DirectionalLight(0xffffff,1.1);
    keyLight.position.set(3,5,8); scene.add(keyLight);

    const warmLight=new THREE.DirectionalLight(0xffffff,0.6);
    warmLight.position.set(-6,3,4); scene.add(warmLight);

    const rimLight=new THREE.DirectionalLight(0xffffff,1.8);
    rimLight.position.set(-4,-3,-6); scene.add(rimLight);

    /* ---------- "G" FORMASYON HEDEFİ ---------- */
    // Ortam haritası: taşların parlak yansımaları buradan gelir
    (async()=>{
      try{
        const {RoomEnvironment}=await import('./vendor/RoomEnvironment.js');
        const pmrem=new THREE.PMREMGenerator(renderer);
        scene.environment=pmrem.fromScene(new RoomEnvironment(),0.04).texture;
      }catch(e){ console.warn('env map yuklenemedi',e); }
    })();

    const group=new THREE.Group(); scene.add(group);

    const COUNT=isMobile?1000:2400;
    const RADIUS=3.2;
    const geo=new THREE.OctahedronGeometry(1,0);
    geo.scale(1,1.6,1);   // uzatılmış kristal şard
    const mat=new THREE.MeshStandardMaterial({color:0xffffff,metalness:0.82,roughness:0.28,flatShading:true,envMapIntensity:1.2});
    const mesh=new THREE.InstancedMesh(geo,mat,COUNT);
    const COL_VIOLET=0x222222, COL_BLUE=0x777777, COL_CYAN=0xdddddd;
    const cTmp=new THREE.Color();
    const dummy=new THREE.Object3D();
    const seeds=[];

    const golden=Math.PI*(3-Math.sqrt(5));
    for(let i=0;i<COUNT;i++){
        // tamamen rastgele küresel dağılım (spiral dikiş bırakmaz)
        const uu=Math.random(), vv=Math.random();
        const th2=Math.acos(2*uu-1), ph2=2*Math.PI*vv;
        const dir=new THREE.Vector3(
            Math.sin(th2)*Math.cos(ph2),
            Math.cos(th2),
            Math.sin(th2)*Math.sin(ph2)
        );
        const edge=Math.random()<0.16;
        const rOff=edge?(1.03+Math.pow(Math.random(),1.7)*0.30):1;
        seeds.push({ edge, rOff,
            dir, scale:0.05+0.09*Math.random()*Math.random(),
            phase:Math.random()*6.283, spin:0.25+Math.random()*0.55,
            rot:new THREE.Euler(Math.random()*6.283,Math.random()*6.283,Math.random()*6.283)
        });
    }
    for(let i=0;i<COUNT;i++){
        if(Math.random()<0.08) cTmp.setHex(COL_BLUE).lerp(new THREE.Color(COL_CYAN),0.45);
        else cTmp.setHex(COL_VIOLET).lerp(new THREE.Color(COL_BLUE),Math.random());
        mesh.setColorAt(i,cTmp);
    }
    mesh.instanceColor.needsUpdate=true;

    group.add(mesh);

    const mouse={x:0,y:0}, target={x:0,y:0};
    addEventListener('mousemove',e=>{
        target.x=(e.clientX/innerWidth)*2-1;
        target.y=(e.clientY/innerHeight)*2-1;
    });
    addEventListener('scroll',()=>{ if(isMobile) target.y=(scrollY/innerHeight)*0.9-0.45; },{passive:true});

    function resize(){
        const w=holder.clientWidth,h=holder.clientHeight;
        if(!w||!h) return;
        camera.aspect=w/h;

        // küre + saçılan taşlar kadraja TAM sığsın (kırpılma yok)
        const halfV=Math.tan((camera.fov/2)*Math.PI/180);
        const need=RADIUS*1.52;
        camera.position.z=Math.max(need/halfV, need/(halfV*camera.aspect));
        camera.updateProjectionMatrix();

        renderer.setSize(w,h,false);
    }
    addEventListener('resize',resize); resize();

    /* fare etkileşimi */
    const rayc=new THREE.Raycaster();
    const plane=new THREE.Plane(new THREE.Vector3(0,0,1),0);
    const hitPt=new THREE.Vector3();
    const mouse3=new THREE.Vector3(1e3,1e3,1e3);
    const pushV=new THREE.Vector3();
    const INF=1.5, FORCE=1.1;
    let overCanvas=false, burst=0;

    canvas.style.pointerEvents='auto';
    // fare konumu CANVAS'a göre hesaplanır (pencereye göre değil)
    const cn={x:0,y:0};
    canvas.addEventListener('pointermove',function(e){
        const r=canvas.getBoundingClientRect();
        cn.x=((e.clientX-r.left)/r.width)*2-1;
        cn.y=-(((e.clientY-r.top)/r.height)*2-1);
        overCanvas=true;
    });
    canvas.addEventListener('mouseenter',()=>{overCanvas=true;});
    canvas.addEventListener('mouseleave',()=>{overCanvas=false;});
    canvas.addEventListener('pointerdown',()=>{ burst=1; });

    const clock=new THREE.Clock();
    let visible=true;
    const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
    let inView=true;
    new IntersectionObserver(([entry])=>{inView=entry.isIntersecting;}).observe(holder);
    document.addEventListener('visibilitychange',()=>{visible=!document.hidden;});

    function animate(){
        requestAnimationFrame(animate);
        if(!visible || !inView) return;
        const t=reducedMotion.matches?0:clock.getElapsedTime();
        if(reducedMotion.matches){target.x=0;target.y=0;overCanvas=false;burst=0;}

        burst*=0.94;

        // farenin sahnedeki karşılığı
        if(overCanvas && !isMobile){
            rayc.setFromCamera(cn,camera);
            if(rayc.ray.intersectPlane(plane,hitPt)) group.worldToLocal(mouse3.copy(hitPt));
        } else mouse3.set(1e3,1e3,1e3);

        mouse.x+=(target.x-mouse.x)*0.07;
        mouse.y+=(target.y-mouse.y)*0.07;

        group.rotation.y=t*0.07+mouse.x*0.1;
        group.rotation.x=Math.sin(t*0.25)*0.08+mouse.y*0.1;
        group.position.x=mouse.x*(isMobile?0.1:0.35);
        group.position.y=-mouse.y*(isMobile?0.1:0.25)+Math.sin(t*0.8)*0.1;

        for(let i=0;i<COUNT;i++){
            const s=seeds[i];
            const wave=Math.sin(t*1.1+s.phase)*0.05;
            const pulse=(RADIUS+wave+Math.sin(t*2.2+s.phase)*0.09)*s.rOff;
            dummy.position.copy(s.dir).multiplyScalar(pulse);

            // fareden kaç + tıklama dalgası
            pushV.copy(dummy.position).sub(mouse3);
            const dd=pushV.length();
            if(dd<INF+burst*2.4){
                const f=1-dd/(INF+burst*2.4);
                dummy.position.addScaledVector(pushV.normalize(), f*f*(FORCE+burst*2.6));
            }
            dummy.rotation.set(s.rot.x+t*s.spin, s.rot.y+t*s.spin*0.9, s.rot.z+t*s.spin*0.5);
            dummy.scale.setScalar(s.scale*(s.edge?0.7:1));
            dummy.updateMatrix();
            mesh.setMatrixAt(i,dummy.matrix);
        }
        mesh.instanceMatrix.needsUpdate=true;


        renderer.render(scene,camera);
    }
    animate();
    holder.classList.add('scene-ready');
    