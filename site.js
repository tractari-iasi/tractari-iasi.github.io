(function(){
'use strict';
var path=window.location.pathname;
var isBlog=path.indexOf('/blog')===0;
var isHome=path==='/'||path==='/index.html';
function cur(href){
  if(href==='/blog/'&&isBlog)return ' cur';
  if(href==='/'&&isHome)return ' cur';
  return '';
}
var header=document.getElementById('site-header');
if(header){
  header.innerHTML=
    '<div class="topbar"><span>Dispecerat activ non-stop 24/7 \u2014 <a href="tel:+40742261216">0742 261 216</a> \u2014 Platforme RAR \u00b7 CMR \u00b7 Factur\u0103 fiscal\u0103</span></div>'+
    '<header>'+
      '<div class="header-top">'+
        '<a class="logo" href="/">Centrul de Tract\u0103ri <em>Auto</em> <span class="logo-sub">Ia\u0219i</span></a>'+
        '<button class="mob-toggle" id="site-mob-toggle" aria-label="Meniu"><span></span><span></span><span></span></button>'+
        '<div class="header-phone">'+
          '<div class="live-badge"><span class="live-dot"></span> Dispecerat activ</div>'+
          '<a class="phone-link" href="tel:+40742261216">0742 261 216</a>'+
        '</div>'+
      '</div>'+
      '<nav id="site-nav"><div class="nav-inner">'+
        '<a class="nav-link'+cur('/')+'\" href="/">Acas\u0103</a>'+
        '<a class="nav-link" href="/#zone">Zone</a>'+
        '<a class="nav-link" href="/#servicii">Servicii</a>'+
        '<a class="nav-link'+cur('/blog/')+'\" href="/blog/">Blog</a>'+
        '<div class="nav-spacer"></div>'+
        '<a class="nav-cta" href="tel:+40742261216">&#9742; 0742 261 216</a>'+
      '</div></nav>'+
    '</header>'+
    '<div class="hero-rule"></div>';
}
var footer=document.getElementById('site-footer');
if(footer){
  footer.innerHTML=
    '<footer><div class="footer-grid">'+
      '<div>'+
        '<div class="footer-brand">Centrul de <span>Tract\u0103ri Auto</span> Ia\u0219i</div>'+
        '<p class="footer-desc">Dispecerat tract\u0103ri auto \u00een Ia\u0219i \u0219i jude\u021b, non-stop 24/7. Platforme RAR, asigurare CMR, factur\u0103 fiscal\u0103.</p>'+
        '<a href="tel:+40742261216" style="font-family:var(--D);font-weight:900;font-size:1.2rem;letter-spacing:3px;color:var(--amber2);font-style:normal;display:block">&#9742; 0742 261 216</a>'+
      '</div>'+
      '<div><h4>Zone Ia\u0219i</h4>'+
        '<a href="/copou.html">Tract\u0103ri Copou</a>'+
        '<a href="/nicolina.html">Tract\u0103ri Nicolina</a>'+
        '<a href="/tatarasi.html">Tract\u0103ri T\u0103t\u0103ra\u0219i</a>'+
        '<a href="/pacurari.html">Tract\u0103ri P\u0103curari</a>'+
        '<a href="/alexandru-cel-bun.html">Tract\u0103ri Alexandru cel Bun</a>'+
        '<a href="/bucium.html">Tract\u0103ri Bucium</a>'+
        '<a href="/cug.html">Tract\u0103ri CUG</a>'+
        '<a href="/dacia.html">Tract\u0103ri Dacia</a>'+
      '</div>'+
      '<div><h4>Zone Jude\u021b</h4>'+
        '<a href="/vaslui.html">Tract\u0103ri Vaslui</a>'+
        '<a href="/targu-frumos.html">Tract\u0103ri T\u00e2rgu Frumos</a>'+
        '<a href="/letcani.html">Tract\u0103ri Le\u021bcani</a>'+
        '<a href="/miroslava.html">Tract\u0103ri Miroslava</a>'+
        '<a href="/metalurgie.html">Tract\u0103ri Metalurgie</a>'+
        '<a href="/moara-de-vant.html">Tract\u0103ri Moara de V\u00e2nt</a>'+
        '<a href="/frumoasa.html">Tract\u0103ri Frumoasa</a>'+
        '<a href="/blog/">Blog</a>'+
      '</div>'+
    '</div>'+
    '<div class="footer-bottom">'+
      '<span>&copy; 2025 Centrul de Tract\u0103ri Auto Ia\u0219i</span>'+
      '<span>Non-stop 24/7 \u00b7 0742 261 216</span>'+
    '</div></footer>'+
    '<a class="fab" href="tel:+40742261216">&#9742; Sun\u0103 acum</a>'+
    '<button class="stb" id="site-stb" aria-label="Sus">&#8593;</button>';
}
document.addEventListener('click',function(e){
  var btn=document.getElementById('site-mob-toggle');
  var nav=document.getElementById('site-nav');
  if(!btn||!nav)return;
  if(btn===e.target||btn.contains(e.target)){btn.classList.toggle('open');nav.classList.toggle('open');}
  else if(nav.classList.contains('open')&&!nav.contains(e.target)){btn.classList.remove('open');nav.classList.remove('open');}
});
window.addEventListener('scroll',function(){
  var b=document.getElementById('site-stb');
  if(b)b.classList.toggle('vis',window.scrollY>300);
});
document.addEventListener('click',function(e){
  if(e.target&&e.target.id==='site-stb')window.scrollTo({top:0,behavior:'smooth'});
});
})();
