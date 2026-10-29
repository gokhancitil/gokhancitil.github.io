(() => {
 'use strict';
 const rain=document.getElementById('matrix'),fx=document.getElementById('energy');
 const rc=rain.getContext('2d'),c=fx.getContext('2d');
 if(!rc||!c)return;
 const mobile=matchMedia('(max-width:767px) and (pointer:coarse)');
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const glyphs='ZZZ012789アイウエカキク';
 let w=0,h=0,dpr=1,streams=[],frame=0,last=null,t=0;
 const particles=Array.from({length:100},()=>({angle:Math.random()*Math.PI*2,r:Math.random(),speed:.1+Math.random()*.25,phase:Math.random()*6.28}));
 function stream(i,cols){
  const len=20+Math.floor(Math.random()*25),sw=25,sh=len*15+22;
  const sprite=document.createElement('canvas');sprite.width=sw*dpr;sprite.height=sh*dpr;
  const p=sprite.getContext('2d');p.scale(dpr,dpr);p.font='11px monospace';
  const brightness=i<cols?.65:.2;
  for(let j=len-1;j>=0;j--){
   p.fillStyle=j===0?'rgba(170,255,219,.95)':`rgba(0,245,150,${brightness*Math.pow(1-j/len,.65)})`;
   p.shadowColor='#00ff9d';p.shadowBlur=j<2?6:0;
   p.fillText(glyphs[Math.floor(Math.random()*glyphs.length)],7,sh-10-j*15);
  }
  return {sprite,x:(i%cols)*18-5,y:Math.random()*(h+sh),sw,sh,speed:24+Math.random()*52};
 }
 function resize(){
  const nextW=innerWidth,nextH=innerHeight;
  if(nextW===w&&nextH===h)return;
  w=nextW;h=nextH;dpr=Math.min(devicePixelRatio||1,1.75);
  for(const [canvas,ctx] of [[rain,rc],[fx,c]]){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);}
  if(mobile.matches){const cols=Math.ceil(w/18);streams=Array.from({length:cols*2},(_,i)=>stream(i,cols));render(0);}
 }
 function matrix(dt){
  rc.clearRect(0,0,w,h);
  for(const s of streams){s.y+=s.speed*dt;if(s.y-s.sh>h)s.y=-20;rc.drawImage(s.sprite,s.x,s.y-s.sh,s.sw,s.sh);}
 }
 function ring(){
  const cx=w/2,cy=h*.53,r=Math.min(w*.205,h*.137);
  c.save();c.translate(cx,cy);
  // Soft halo is a gradient rather than a large per-frame blur.
  const glow=c.createRadialGradient(0,0,r*.68,0,0,r*1.43);
  glow.addColorStop(0,'#00ff9d00');glow.addColorStop(.48,'#00ff9d18');glow.addColorStop(.62,'#00ff9d36');glow.addColorStop(1,'#00ff9d00');
  c.fillStyle=glow;c.fillRect(-r*1.5,-r*1.5,r*3,r*3);
  c.rotate(t*.075);
  for(let j=0;j<9;j++){
   c.beginPath();c.strokeStyle=`rgba(0,239,133,${j%3===0?.5:.18})`;c.lineWidth=j%3===0?.7:.35;
   const rr=r*(1.08+j*.045);c.arc(0,0,rr,j*.7,j*.7+Math.PI*(1.4+.5*Math.sin(j)));c.stroke();
  }
  for(let j=0;j<80;j++){
   const a=j*Math.PI*2/80,rr=r*(j%4===0?1.39:1.3);
   c.beginPath();c.strokeStyle=j%4===0?'#00c68080':'#00c68030';c.lineWidth=.6;
   c.moveTo(Math.cos(a)*rr,Math.sin(a)*rr);c.lineTo(Math.cos(a)*(rr+3),Math.sin(a)*(rr+3));c.stroke();
  }
  for(let layer=0;layer<22;layer++){
   c.beginPath();
   for(let k=0;k<=160;k++){
    const a=k*Math.PI*2/160;
    const warp=Math.sin(a*3+t*.62+layer*.15)*Math.sin(a*2-t*.31)*.105;
    const rr=r*(.86+layer*.005+warp+Math.sin(a*5-t*.38+layer*.22)*.025);
    const x=Math.cos(a)*rr,y=Math.sin(a)*rr;
    if(k===0)c.moveTo(x,y);else c.lineTo(x,y);
   }
   c.closePath();c.strokeStyle=`rgba(0,255,172,${.17+layer*.012})`;c.lineWidth=.55;c.stroke();
  }
  for(const p of particles){
   const a=p.angle+t*p.speed,rr=r*(.2+p.r*1.18),alpha=.15+.5*(.5+.5*Math.sin(t*.8+p.phase));
   c.fillStyle=`rgba(30,255,177,${alpha})`;c.fillRect(Math.cos(a)*rr,Math.sin(a)*rr,.8,.8);
  }
  c.beginPath();c.arc(0,0,r*(1+.008*Math.sin(t*.7)),0,Math.PI*2);c.strokeStyle='#00f6a2';c.lineWidth=2.4;c.shadowColor='#00ffb3';c.shadowBlur=9;c.stroke();
  c.shadowBlur=0;c.strokeStyle='#c0fff0';c.lineWidth=.65;c.stroke();
  c.restore();
 }
 function waveform(){
  const count=37,step=Math.min(w*.78/36,10),cy=h*.765,center=(count-1)/2;
  c.save();c.lineCap='round';
  for(let i=0;i<count;i++){
   const x=w/2+(i-center)*step,envelope=Math.exp(-Math.pow((i-center)/8,2));
   const rhythm=.52+.22*Math.sin(t*2.1+i*.72)+.16*Math.sin(t*1.37-i*.44)+.1*Math.sin(t*3.11+i*.29);
   const amplitude=1+envelope*Math.min(h*.047,35)*rhythm;
   c.beginPath();c.moveTo(x,cy-amplitude);c.lineTo(x,cy+amplitude);
   c.strokeStyle='#00eda6';c.lineWidth=4;c.globalAlpha=.2;c.stroke();
   c.strokeStyle='#77ffcf';c.lineWidth=1.9;c.globalAlpha=.94;c.shadowBlur=5;c.shadowColor='#00ffb3';c.stroke();c.shadowBlur=0;
  }
  c.restore();
  // Subtle horizontal floor reflections, echoing the reference.
  const floor=h*.86;
  const glow=c.createLinearGradient(0,floor,0,h);glow.addColorStop(0,'#00ff9900');glow.addColorStop(.35,'#00ff990b');glow.addColorStop(1,'#00ff9900');c.fillStyle=glow;c.fillRect(0,floor,w,h-floor);
  for(let i=0;i<18;i++){
   const y=floor+i*i*.37,alpha=.025+.025*Math.sin(t*.45+i);
   c.fillStyle=`rgba(0,240,154,${alpha})`;
   c.fillRect(w*.1+Math.sin(i*7+t*.13)*w*.15,y,w*(.5+.3*Math.sin(i*3)),.6);
  }
 }
 function render(dt){t+=dt;matrix(dt);c.clearRect(0,0,w,h);ring();waveform();}
 function tick(now){const dt=last===null?0:Math.min((now-last)/1000,.05);last=now;render(dt);frame=requestAnimationFrame(tick);}
 function sync(){cancelAnimationFrame(frame);frame=0;last=null;if(document.hidden||!mobile.matches)return;resize();if(reduced.matches)render(0);else frame=requestAnimationFrame(tick);}
 addEventListener('resize',()=>{resize();sync();});
 document.addEventListener('visibilitychange',sync);mobile.addEventListener('change',sync);reduced.addEventListener('change',sync);
 resize();sync();
})();
