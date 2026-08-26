/* Ortak site davranışları — Gökhan ÇİTİL */
(function(){
  var hdr=document.getElementById('site-header'), nav=document.getElementById('nav'), bg=document.getElementById('burger');
  if(hdr) addEventListener('scroll',function(){hdr.classList.toggle('scrolled',scrollY>20);});
  if(bg&&nav){
    bg.onclick=function(){nav.classList.toggle('open');};
    nav.querySelectorAll('a').forEach(function(a){a.onclick=function(){nav.classList.remove('open');};});
  }

  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
  });},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});

  document.querySelectorAll('.card').forEach(function(c){
    c.addEventListener('mousemove',function(e){
      var r=c.getBoundingClientRect();
      c.style.setProperty('--mx',(e.clientX-r.left)+'px');
      c.style.setProperty('--my',(e.clientY-r.top)+'px');
    });
  });

  if(matchMedia('(hover:hover) and (pointer:fine)').matches){
    var dot=document.querySelector('.cursor-dot'), ring=document.querySelector('.cursor-ring');
    if(dot&&ring){
      var mx=0,my=0,rx=0,ry=0;
      addEventListener('mousemove',function(e){
        mx=e.clientX;my=e.clientY;
        dot.style.opacity=ring.style.opacity=1;
        dot.style.transform='translate('+mx+'px,'+my+'px) translate(-50%,-50%)';
      });
      addEventListener('mouseout',function(){dot.style.opacity=ring.style.opacity=0;});
      document.querySelectorAll('a,button,.btn,.card').forEach(function(el){
        el.addEventListener('mouseenter',function(){ring.classList.add('hot');});
        el.addEventListener('mouseleave',function(){ring.classList.remove('hot');});
      });
      (function loop(){rx+=(mx-rx)*0.18;ry+=(my-ry)*0.18;
        ring.style.transform='translate('+rx+'px,'+ry+'px) translate(-50%,-50%)';
        requestAnimationFrame(loop);})();
    }
  }

  var KEY='gc_consent', box=document.getElementById('cookie');
  function loadGtag(){
    if(window.__gtagLoaded) return; window.__gtagLoaded=true;
    var s=document.createElement('script');
    s.async=true; s.src='https://www.googletagmanager.com/gtag/js?id=AW-18382035228';
    document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){dataLayer.push(arguments);};
    gtag('js',new Date()); gtag('config','AW-18382035228');
    gtag('event','conversion',{'send_to':'AW-18382035228/3zlyCNHXrt8cEJyynr1E','value':1.0,'currency':'TRY'});
  }
  var saved=null; try{saved=localStorage.getItem(KEY);}catch(e){}
  if(saved==='all'){loadGtag();}
  else if(saved!=='necessary'&&box){setTimeout(function(){box.classList.add('show');},2600);}
  if(box){
    document.getElementById('ck-yes').onclick=function(){try{localStorage.setItem(KEY,'all');}catch(e){}box.classList.remove('show');loadGtag();};
    document.getElementById('ck-no').onclick=function(){try{localStorage.setItem(KEY,'necessary');}catch(e){}box.classList.remove('show');};
  }
})();
