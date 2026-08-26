/* gokhancitil.com — Site içi AI asistan (kural tabanlı, sunucusuz) */
(function(){
  "use strict";

  var KB = [
    { k:["kimdir","kimsin","kim ","hakkinda","hakkında","tanit","tanıt","ozgecmis","özgeçmiş","biyografi","cv"],
      a:"<b>Gökhan Çitil</b>, yapay zeka ve yazılım geliştirme alanında çalışan bir AI &amp; Software Developer'dır. İnönü Üniversitesi İİBF İşletme Bölümü mezunudur.<br><br>2023 yılından itibaren yazılım alanında çalışıyor. Çok kiracılı (multi-tenant) SaaS sistemleri, e-ticaret altyapıları, kurumsal web siteleri ve süreç otomasyonları geliştiriyor; mevcut sistemlere yapay zeka entegrasyonları sağlıyor.",
      l:[["Hakkımda sayfası","hakkimda.html"]] },

    { k:["hizmet","neler yap","ne yapiyor","ne yapıyor","yapabil","cozum","çözüm","is yap","iş yap"],
      a:"Şu hizmetleri veriyorum:<br>• <b>Yapay zeka entegrasyonu</b> — chatbot, içerik üretimi, veri analizi<br>• <b>SaaS bulut çözümleri</b> — multi-tenant mimari, abonelik, sanal POS<br>• <b>Mobil uygulama</b> — iOS/Android geliştirme, App Store &amp; Google Play yayını<br>• <b>Kurumsal web tasarım</b> — yönetim panelli, mobil uyumlu<br>• <b>E-ticaret sitesi yapımı</b> — anahtar teslim<br>• <b>SEO &amp; GEO optimizasyonu</b> — AI aramalarında görünürlük<br>• <b>Süreç otomasyonu</b> — tekrarlayan işleri ortadan kaldırma",
      l:[["Hizmetler","hizmetlerimiz.html"],["Teklif al","iletisim.html"]] },

    { k:["teknoloji","dil","python","javascript","c#","stack","yazilim dili","yazılım dili","laravel","docker","hangi araç"],
      a:"Ağırlıklı olarak <b>Python, JavaScript ve C#</b> kullanıyorum. Altyapıda Laravel, PostgreSQL, Redis, Docker ve Nginx; ödeme tarafında Stripe, Iyzico ve PayTR entegrasyonları geliştiriyorum.",
      l:[["Uzmanlıklar","uzmanliklar.html"]] },

    { k:["yapay zeka","ai ","chatbot","asistan","llm","gpt","otomasyon","robot"],
      a:"İş süreçlerinize yapay zeka entegre ediyorum: <b>7/24 çalışan AI chatbot</b> (soru cevaplama, randevu, sipariş takibi), içerik üretimi, veri analizi ve karar destek sistemleri. Ayrıca tekrarlayan işleri ortadan kaldıran özel otomasyon yazılımları geliştiriyorum.",
      l:[["Hizmetler","hizmetlerimiz.html"],["Konuşalım","iletisim.html"]] },

    { k:["mobil","uygulama","app","android","ios","google play","app store","telefon uygulama","magaza","mağaza"],
      a:"iOS ve Android için <b>mobil uygulama geliştiriyorum</b>. Sadece kodlama değil; <b>App Store ve Google Play yayın süreçlerini</b> de baştan sona yönetiyorum — geliştirici hesabı kurulumu, mağaza listesi hazırlığı, sürüm yönetimi ve sonraki güncellemeler dahil.",
      l:[["Hizmetler","hizmetlerimiz.html"],["Konuşalım","iletisim.html"]] },

    { k:["e-ticaret","eticaret","satis sitesi","satış sitesi","magaza","mağaza","online satis","online satış"],
      a:"Anahtar teslim <b>e-ticaret altyapısı</b> kuruyorum: ürün yönetimi, sanal POS, kargo entegrasyonu, kampanya ve indirim sistemi, sipariş takibi. Iyzico, PayTR ve Stripe ile çalışıyorum.",
      l:[["Detaylar","hizmetlerimiz.html"],["Teklif al","iletisim.html"]] },

    { k:["web site","web tasar","kurumsal site","site yap","internet sitesi"],
      a:"İşletmenize özel <b>kurumsal web sitesi</b> tasarlıyorum. Modern görünüm, hızlı açılma, tam mobil uyumluluk ve SEO/GEO altyapısı standart olarak geliyor. Yönetim paneli ile içeriklerinizi kendiniz güncelleyebilirsiniz.",
      l:[["Hizmetler","hizmetlerimiz.html"]] },

    { k:["seo","geo","google","arama","gorunur","görünür","siralama","sıralama"],
      a:"Yaptığım her site <b>Schema markup</b> ve <b>GEO (AI arama motoru optimizasyonu)</b> altyapısıyla geliyor. Amaç sadece Google'da değil; ChatGPT, Gemini ve Perplexity gibi yapay zekâlarda da firmanızın referans gösterilmesi.",
      l:[["SEO/GEO hizmeti","hizmetlerimiz.html"]] },

    { k:["saas","bulut","multi-tenant","multi tenant","abonelik","olcek","ölçek"],
      a:"<b>Multi-tenant SaaS mimarileri</b> kuruyorum: tek sistemden binlerce müşteriye izole ve güvenli hizmet, abonelik ve sanal POS entegrasyonu, fatura otomasyonu, trafik arttığında otomatik ölçekleme.",
      l:[["Detaylar","hizmetlerimiz.html"]] },

    { k:["fiyat","ucret","ücret","maliyet","kac para","kaç para","butce","bütçe","teklif"],
      a:"Fiyat tamamen projenin kapsamına göre belirleniyor — bir kurumsal site ile özel bir SaaS sistemi çok farklı ölçeklerde. En doğrusu ihtiyacınızı anlatmanız; size net bir teklif ve yol haritası çıkarıyorum. <b>İlk görüşme ücretsiz.</b>",
      l:[["Teklif iste","iletisim.html"]] },

    { k:["sure","süre","ne zaman","teslim","kac gun","kaç gün","kac hafta","kaç hafta"],
      a:"Tipik süreler: <b>kurumsal web sitesi 1–3 hafta</b>, <b>e-ticaret 3–6 hafta</b>, <b>özel SaaS projeleri 2–4 ay</b>. Net süreyi ilk görüşmede kapsamı netleştirerek paylaşıyorum.",
      l:[["İletişim","iletisim.html"]] },

    { k:["iletisim","iletişim","ulas","ulaş","mail","e-posta","eposta","telefon","yaz"],
      a:"Bana <b>gokhancitil@gmail.com</b> adresinden veya iletişim sayfasındaki formdan ulaşabilirsiniz. LinkedIn ve GitHub'da <b>gokhancitil</b> kullanıcı adıyla yer alıyorum.",
      l:[["İletişim formu","iletisim.html"],["E-posta gönder","mailto:gokhancitil@gmail.com"]] },

    { k:["nerede","sehir","şehir","konum","turkiye","türkiye","uzaktan","remote"],
      a:"Türkiye genelinde ve <b>uzaktan</b> çalışıyorum. Proje süreçlerini çevrim içi yürütüyor, düzenli olarak ilerleme paylaşıyorum.",
      l:[["İletişim","iletisim.html"]] },

    { k:["proje","referans","ornek","örnek","is yapt","iş yapt","portfoy","portföy","deneyim","tecrube","tecrübe"],
      a:"Geliştirdiğim sistemlerden biri, poliçe yönetimi ve müşteri portföyü süreçlerini tek panelde toplayan <b>çok kiracılı bir sigorta acentesi platformu</b>. Bunun yanında işletmelere özel kurumsal web sistemleri ve süreç otomasyonları geliştiriyorum.",
      l:[["Hakkımda","hakkimda.html"]] },

    { k:["destek","bakim","bakım","sonrasi","sonrası","garanti"],
      a:"Teslim sonrası <b>7/24 teknik destek</b> veriyorum. Hata giderme, güncelleme ve iyileştirme taleplerinizi proje sonrasında da karşılıyorum.",
      l:[["İletişim","iletisim.html"]] },

    { k:["merhaba","selam","slm","hey","gunaydin","günaydın","iyi gunler","iyi günler"],
      a:"Merhaba! 👋 Ben Gökhan Çitil'in site asistanıyım. Hizmetler, teknolojiler, süreler veya iletişim hakkında soru sorabilirsiniz." }
  ];

  var FALLBACK = "Bunu tam olarak bilmiyorum 🤔 Ama Gökhan'a doğrudan sorabilirsiniz — genelde aynı gün dönüş yapıyor.<br><br>Şunları deneyebilirsiniz: <i>“Gökhan Çitil kimdir?”</i>, <i>“Hangi hizmetleri veriyorsunuz?”</i>, <i>“Bir site ne kadar sürede biter?”</i>";
  var FALLBACK_L = [["İletişime geç","iletisim.html"],["E-posta gönder","mailto:gokhancitil@gmail.com"]];

  var CHIPS = ["Gökhan Çitil kimdir?","Hangi hizmetleri veriyorsunuz?","Fiyatlar nasıl belirleniyor?","Ne kadar sürede teslim edilir?"];

  function norm(t){
    return t.toLowerCase()
      .replace(/ı/g,'i').replace(/İ/g,'i').replace(/ş/g,'s').replace(/ğ/g,'g')
      .replace(/ü/g,'u').replace(/ö/g,'o').replace(/ç/g,'c')
      .replace(/\s+/g,' ').trim();
  }
  function answer(q){
    var n=norm(q), best=null, score=0;
    KB.forEach(function(e){
      var sc=0;
      e.k.forEach(function(key){ if(n.indexOf(norm(key))>-1) sc+=norm(key).length; });
      if(sc>score){score=sc;best=e;}
    });
    return best ? {a:best.a,l:best.l||[]} : {a:FALLBACK,l:FALLBACK_L};
  }

  var CSS = ''
  +'#gc-fab{position:fixed;right:22px;bottom:22px;z-index:9500;width:58px;height:58px;border:0;border-radius:50%;cursor:pointer;'
  +'background:linear-gradient(135deg,#3b82f6,#8b5cf6);box-shadow:0 14px 34px -10px rgba(139,92,246,.95);'
  +'display:grid;place-items:center;font-size:23px;color:#fff;transition:transform .28s,opacity .28s;}'
  +'#gc-fab:hover{transform:scale(1.08) translateY(-2px);}'
  +'#gc-fab::after{content:"";position:absolute;inset:-4px;border-radius:50%;border:1px solid rgba(139,92,246,.55);animation:gcping 2.4s ease-out infinite;}'
  +'@keyframes gcping{0%{transform:scale(1);opacity:.8;}100%{transform:scale(1.45);opacity:0;}}'
  +'#gc-fab.hide{opacity:0;pointer-events:none;transform:scale(.6);}'
  +'#gc-panel{position:fixed;right:22px;bottom:22px;z-index:9600;width:min(390px,calc(100vw - 32px));'
  +'height:min(560px,calc(100vh - 110px));display:flex;flex-direction:column;border-radius:18px;overflow:hidden;'
  +'border:1px solid rgba(139,92,246,.32);background:linear-gradient(170deg,#0a1030,#060b21 70%);'
  +'box-shadow:0 40px 90px -26px rgba(0,0,0,.92);opacity:0;transform:translateY(24px) scale(.96);'
  +'pointer-events:none;transition:opacity .35s,transform .35s cubic-bezier(.16,1,.3,1);'
  +'font-family:Inter,system-ui,sans-serif;}'
  +'#gc-panel.open{opacity:1;transform:none;pointer-events:auto;}'
  +'#gc-head{display:flex;align-items:center;gap:11px;padding:15px 16px;background:rgba(255,255,255,.04);'
  +'border-bottom:1px solid rgba(255,255,255,.07);flex:none;}'
  +'#gc-head .orb{width:34px;height:34px;border-radius:11px;flex:none;display:grid;place-items:center;font-size:16px;'
  +'background:linear-gradient(140deg,#3b82f6,#8b5cf6);box-shadow:0 0 18px -4px rgba(139,92,246,.9);}'
  +'#gc-head b{display:block;font-size:13.5px;color:#fff;letter-spacing:-.2px;}'
  +'#gc-head small{font-size:11px;color:#22d3ee;display:flex;align-items:center;gap:5px;}'
  +'#gc-head small::before{content:"";width:5px;height:5px;border-radius:50%;background:#22d3ee;box-shadow:0 0 8px #22d3ee;}'
  +'#gc-close{margin-left:auto;background:none;border:0;color:#7c88ab;font-size:20px;cursor:pointer;line-height:1;padding:6px;}'
  +'#gc-close:hover{color:#fff;}'
  +'#gc-log{flex:1;overflow-y:auto;padding:18px 16px;display:flex;flex-direction:column;gap:12px;scrollbar-width:thin;}'
  +'#gc-log::-webkit-scrollbar{width:5px;}#gc-log::-webkit-scrollbar-thumb{background:rgba(139,92,246,.4);border-radius:4px;}'
  +'.gc-msg{max-width:88%;padding:12px 15px;border-radius:14px;font-size:13.4px;line-height:1.68;font-weight:300;}'
  +'.gc-msg.me{align-self:flex-end;border-bottom-right-radius:5px;color:#fff;background:linear-gradient(100deg,rgba(59,130,246,.9),rgba(139,92,246,.9));}'
  +'.gc-msg.ai{align-self:flex-start;border-bottom-left-radius:5px;color:#a8b3d4;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);}'
  +'.gc-msg.ai b{color:#fff;font-weight:600;}.gc-msg.ai i{color:#c7d2fe;}'
  +'.gc-links{display:flex;gap:7px;flex-wrap:wrap;margin-top:11px;}'
  +'.gc-links a{font-size:11.5px;font-weight:600;text-decoration:none;color:#c4b5fd;padding:6px 12px;border-radius:7px;'
  +'background:rgba(139,92,246,.16);border:1px solid rgba(139,92,246,.32);transition:.25s;}'
  +'.gc-links a:hover{background:rgba(139,92,246,.3);color:#fff;}'
  +'.gc-typing{align-self:flex-start;display:flex;gap:5px;padding:14px 16px;border-radius:14px;border-bottom-left-radius:5px;'
  +'background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);}'
  +'.gc-typing i{width:6px;height:6px;border-radius:50%;background:#a78bfa;animation:gcdot 1.3s ease-in-out infinite;}'
  +'.gc-typing i:nth-child(2){animation-delay:.18s;}.gc-typing i:nth-child(3){animation-delay:.36s;}'
  +'@keyframes gcdot{0%,60%,100%{opacity:.25;transform:translateY(0);}30%{opacity:1;transform:translateY(-4px);}}'
  +'#gc-chips{display:flex;gap:7px;flex-wrap:wrap;padding:0 16px 12px;flex:none;}'
  +'#gc-chips button{font-family:inherit;font-size:11.5px;color:#a8b3d4;background:rgba(255,255,255,.04);'
  +'border:1px solid rgba(255,255,255,.09);border-radius:100px;padding:7px 13px;cursor:pointer;transition:.25s;}'
  +'#gc-chips button:hover{border-color:rgba(139,92,246,.5);color:#fff;}'
  +'#gc-form{display:flex;gap:8px;padding:12px 14px;background:rgba(255,255,255,.03);'
  +'border-top:1px solid rgba(255,255,255,.07);flex:none;}'
  +'#gc-in{flex:1;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);border-radius:10px;'
  +'padding:12px 14px;color:#fff;font-family:inherit;font-size:13.4px;outline:none;transition:border-color .25s;}'
  +'#gc-in:focus{border-color:rgba(139,92,246,.6);}'
  +'#gc-in::placeholder{color:#5d6a91;}'
  +'#gc-send{width:44px;border:0;border-radius:10px;cursor:pointer;color:#fff;font-size:16px;'
  +'background:linear-gradient(135deg,#3b82f6,#8b5cf6);transition:transform .22s;}'
  +'#gc-send:hover{transform:translateY(-2px);}'
  +'#gc-note{font-size:10px;color:#5d6a91;text-align:center;padding:0 16px 10px;flex:none;}'
  +'@media (hover:hover) and (pointer:fine){#gc-fab,#gc-close,#gc-send,#gc-chips button,#gc-in,.gc-links a{cursor:none;}}'
  +'#gc-tip{position:fixed;right:92px;bottom:34px;z-index:9450;max-width:230px;padding:12px 15px;border-radius:14px;'
  +'border:1px solid rgba(139,92,246,.4);background:rgba(10,16,48,.96);backdrop-filter:blur(12px);'
  +'box-shadow:0 20px 46px -14px rgba(0,0,0,.9);font-family:Inter,system-ui,sans-serif;font-size:12.8px;'
  +'line-height:1.55;color:#cbd5e1;font-weight:300;opacity:0;transform:translateX(14px) scale(.94);'
  +'pointer-events:none;transition:opacity .5s,transform .5s cubic-bezier(.16,1,.3,1);}'
  +'#gc-tip.show{opacity:1;transform:none;pointer-events:auto;cursor:pointer;}'
  +'#gc-tip b{color:#fff;font-weight:600;display:block;margin-bottom:3px;font-size:13px;}'
  +'#gc-tip::after{content:"";position:absolute;right:-7px;bottom:20px;width:12px;height:12px;'
  +'background:rgba(10,16,48,.96);border-right:1px solid rgba(139,92,246,.4);'
  +'border-top:1px solid rgba(139,92,246,.4);transform:rotate(45deg);}'
  +'#gc-tip .x{position:absolute;top:5px;right:8px;font-size:15px;color:#5d6a91;line-height:1;}'
  +'#gc-tip .x:hover{color:#fff;}'
  +'#gc-fab.ring{animation:gcshake 1.1s ease-in-out 2;}'
  +'@keyframes gcshake{0%,100%{transform:none;}25%{transform:rotate(-11deg) scale(1.07);}75%{transform:rotate(11deg) scale(1.07);}}'
  +'@media (max-width:520px){#gc-tip{right:76px;bottom:24px;max-width:180px;font-size:12px;padding:10px 13px;}}'
  +'@media (max-width:520px){#gc-panel{right:10px;left:10px;bottom:10px;width:auto;height:min(76vh,540px);}'
  +'#gc-fab{right:14px;bottom:14px;width:52px;height:52px;font-size:21px;}}';

  function build(){
    var st=document.createElement('style'); st.textContent=CSS; document.head.appendChild(st);

    var fab=document.createElement('button');
    fab.id='gc-fab'; fab.setAttribute('aria-label','AI asistanı aç'); fab.innerHTML='✦';
    document.body.appendChild(fab);

    var p=document.createElement('div');
    p.id='gc-panel'; p.setAttribute('role','dialog'); p.setAttribute('aria-label','AI asistan');
    p.innerHTML=''
      +'<div id="gc-head"><div class="orb">✦</div><div><b>AI Asistan</b><small>çevrimiçi</small></div>'
      +'<button id="gc-close" aria-label="Kapat">×</button></div>'
      +'<div id="gc-log"></div>'
      +'<div id="gc-chips"></div>'
      +'<form id="gc-form"><input id="gc-in" type="text" placeholder="Sorunuzu yazın…" autocomplete="off"><button id="gc-send" type="submit" aria-label="Gönder">➤</button></form>'
      +'<div id="gc-note">Bu asistan site içeriğinden otomatik yanıt verir.</div>';
    document.body.appendChild(p);

    var tip=document.createElement('div');
    tip.id='gc-tip';
    tip.innerHTML='<span class="x">×</span><b>Bir sorunuz mu var?</b>Gökhan Çitil kimdir, hangi hizmetleri veriyor — hemen sorun, anında cevaplayayım.';
    document.body.appendChild(tip);

    var log=p.querySelector('#gc-log'), chips=p.querySelector('#gc-chips'),
        form=p.querySelector('#gc-form'), input=p.querySelector('#gc-in');

    function scroll(){ log.scrollTop=log.scrollHeight; }
    function push(cls,html,links){
      var d=document.createElement('div');
      d.className='gc-msg '+cls; d.innerHTML=html;
      if(links&&links.length){
        var w=document.createElement('div'); w.className='gc-links';
        links.forEach(function(l){
          var a=document.createElement('a'); a.href=l[1]; a.textContent=l[0];
          if(l[1].indexOf('mailto:')!==0) a.rel='noopener';
          w.appendChild(a);
        });
        d.appendChild(w);
      }
      log.appendChild(d); scroll(); return d;
    }
    function ask(q){
      push('me',q.replace(/</g,'&lt;'));
      chips.innerHTML='';
      var t=document.createElement('div');
      t.className='gc-typing'; t.innerHTML='<i></i><i></i><i></i>';
      log.appendChild(t); scroll();
      setTimeout(function(){
        t.remove();
        var r=answer(q);
        push('ai',r.a,r.l);
        renderChips();
      }, 520+Math.random()*420);
    }
    function renderChips(){
      chips.innerHTML='';
      CHIPS.forEach(function(c){
        var b=document.createElement('button'); b.type='button'; b.textContent=c;
        b.onclick=function(){ ask(c); };
        chips.appendChild(b);
      });
    }

    var started=false;
    function hideTip(){ tip.classList.remove('show'); }

    function open(){
      hideTip();
      p.classList.add('open'); fab.classList.add('hide');
      if(!started){
        started=true;
        push('ai',"Merhaba! 👋 Ben <b>Gökhan Çitil</b>'in site asistanıyım. Hizmetler, teknolojiler, süreler veya iletişim hakkında merak ettiklerinizi sorabilirsiniz.");
        renderChips();
      }
      if(matchMedia('(min-width:620px)').matches) setTimeout(function(){input.focus();},380);
    }
    function close(){ p.classList.remove('open'); fab.classList.remove('hide'); }

    tip.onclick=function(e){
      if(e.target.className==='x'){ e.stopPropagation(); hideTip(); try{sessionStorage.setItem('gc_tip','0');}catch(err){} return; }
      open();
    };

    var seen=null; try{seen=sessionStorage.getItem('gc_tip');}catch(e){}
    if(seen!=='0'){
      setTimeout(function(){
        if(p.classList.contains('open')) return;
        tip.classList.add('show');
        fab.classList.add('ring');
        setTimeout(function(){fab.classList.remove('ring');},2400);
        setTimeout(hideTip,14000);
      },4500);
    }

    fab.onclick=open;
    p.querySelector('#gc-close').onclick=close;
    addEventListener('keydown',function(e){ if(e.key==='Escape'&&p.classList.contains('open')) close(); });
    form.onsubmit=function(e){
      e.preventDefault();
      var v=input.value.trim();
      if(!v) return;
      input.value=''; ask(v);
    };
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',build);
  else build();
})();
