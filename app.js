(function(){
  'use strict';

 // --- Clickjacking defence ----------------------------------------------------
 // GitHub Pages cannot send X-Frame-Options, and frame-ancestors is ignored when
 // CSP is delivered via a <meta> tag, so we defend against UI-redress here: if we
 // are framed by a different origin, hide the page and try to break out.
 try{
     if(window.top!==window.self){
           var sameOrigin=false;
           try{ sameOrigin=(window.top.location.hostname===window.location.hostname); }catch(_){ sameOrigin=false; }
           if(!sameOrigin){
                   document.documentElement.style.display='none';
                   try{ window.top.location=window.self.location.href; }catch(_){ /* top-nav blocked: stay hidden */ }
           }
     }
 }catch(e){ /* never let the guard break the page */ }

 const T={
   en:{
       nav:['Home','Services','About','Contact'],
       eye:'Premium Digital Agency — London',
       h1:'Think Digital.', h2:'Scale Smarter.',
       hp:'We simplify, automate, and manage the digital side of your business, so you can focus entirely on decision making.',
       hb1:'View Services', hb2:'Why Choose Us', hb3:'Get in Touch', scroll:'Scroll',
       tr1:'Strategy, automation, and growth — under one roof',
       tr2:'You work directly with the people doing the work',
       tr3:'Every consultation is free, with no obligation',
       svclbl:'What We Do', svcH:'Six ways we <em>grow your business.</em>',
       svcp:'Every service is built to save time, reduce friction, and deliver measurable results.',
       svcHint:'Click any card to learn more',
       s:[
             ['Process Automation','Replace manual tasks with intelligent, time-saving workflows.',
                   'We identify your most repetitive processes and automate them from start to finish. CRM updates, email sequences, document handling and reporting are all handled by software, freeing your team to focus on what actually matters.','AI · Automation · Efficiency'],
             ['Marketing Strategy','Data-led campaigns built to convert and scale revenue.',
                   'We design and manage full-funnel marketing strategies grounded in data. Audience research, paid media, email marketing and conversion optimisation are all tied to clear KPIs and monthly reporting, so you always know what is working.','Paid Media · Funnels · Growth'],
             ['Web Design','Fast, modern websites that turn visitors into customers.',
                   'We build websites from strategy through to launch, covering UX, visual design and development. Every site is mobile-first, SEO-optimised and performance-tuned, whether it is a landing page or a full platform.','UX · Development · SEO'],
             ['Social Media','Consistent content that builds your audience and brand authority.',
                   'We manage your social presence from start to finish, covering content calendars, creative production, scheduling and community management across Instagram, LinkedIn, TikTok and X. You stay visible without the overhead.','Content · Brand · Community'],
             ['Market Research','Clear intelligence to sharpen your positioning and strategy.',
                   'We deliver structured competitor and market analysis, identifying gaps, trends and positioning opportunities. Outputs include written reports, pricing benchmarks and customer persona profiles, designed to inform real decisions.','Intelligence · Research · Strategy'],
             ['Business Analytics','Dashboards and reporting that make your numbers actionable.',
                   'We build custom analytics frameworks and live dashboards connected to your existing tools. Revenue, CAC, churn and conversion rates are surfaced clearly so you can act quickly, with no spreadsheet archaeology required.','Dashboards · KPIs · Reporting'],
           ],
       ablbl:'Who We Are', abH:'A focused team. A <em>clear purpose.</em>',
       abp:'Galan Solutions is a small, specialist digital agency based in Canary Wharf, London. We work directly with business owners and operators to design, build, and manage the digital infrastructure that keeps their businesses running efficiently.',
       abp2:"We keep our team small by design. Every client works with the people making the decisions, not account managers. That means faster execution, cleaner communication, and outcomes that actually reflect your goals.",
       fc1t:'London, UK', fc1d:'Based in Canary Wharf, working with clients across the UK and internationally',
       fc2t:'Hands-On Delivery', fc2d:'Strategy and execution handled by the same team, start to finish',
       fc3t:'Multi-Sector Experience', fc3d:'Exposure across retail, finance, tech, services, and B2B',
       whylbl:'Why Choose Us', whyH:'Built different. <em>Delivered better.</em>',
       whyHint:'Click any card to learn more',
       w:[
             ['Small Team, Direct Access','No layers between you and the people doing the work.','You work with the people doing the work. No layers, no handoffs, no miscommunication between what was agreed and what gets built. Every decision is made by the same people executing it.'],
             ['End-to-End Ownership','One point of contact. Complete accountability at every stage.','We take full responsibility for strategy, execution, and results. One point of contact, complete accountability, clear deliverables at every stage. You always know where things stand and what comes next.'],
             ['Technology Built In','AI and automation are part of every solution, not bolt-ons.','AI, automation, and smart systems are part of how we work, not extras we add on request. Every solution is designed to scale without proportional cost increases, so growth does not mean hiring more people to manage more tools.'],
             ['Free Consultation','We assess your situation before asking for any commitment.','Every engagement starts with a no-cost consultation. We assess your situation, outline what we can do, and only move forward if there is a genuine fit. No pressure, no obligation, just clarity on whether we are the right team for you.'],
           ],
       ctlbl:'Get in Touch', ctH:"Let's build something <em>great.</em>",
       ctp:"Tell us about your business and what you're looking to achieve. We'll come back with a clear view of how we can help.",
       free:'Consultations are free', el:'Email', ll:'Location', loc:'Canary Wharf, London, UK',
       fln:'Your Name', fle:'Email Address', flc:'Company', flm:'Tell us about your project',
       sub:'Send Message', fokt:'Message sent!', fokd:"We'll be in touch within 24 hours.",
       fttag:'Digital strategy, automation, and growth services for businesses that want to operate smarter.',
       ftcopy:'© 2025 Galan Solutions. All rights reserved.',
       ftdisclaimer:'Galan Solutions is a trading name. All consultations are provided free of charge with no obligation.',
       ftnav:['Home','Services','About','Contact'],
       ftNavTitle:'Navigation', ftContactTitle:'Contact', ftloc:'Canary Wharf, London, UK',
       ailbl:'AI by the numbers', aiH:'The data behind <em>the shift</em>',
       aip:'AI adoption is accelerating across every business size. The gap between early movers and the rest is already measurable.',
       c1hd:'EU enterprises using AI by size class',
       c1sh:'% of enterprises · 2024 vs 2025 · Eurostat (isoc_eb_ai)',
       c1all:'All enterprises', c1sm:'Small', c1md:'Medium', c1lg:'Large',
       c2hd:'Benefits of AI in the development workflow',
       c2sh:'% of developers worldwide · 2024 · Stack Overflow / Statista',
       c2r1:'Increase productivity', c2r2:'Speed up learning', c2r3:'Greater efficiency',
       c2r4:'Improve accuracy', c2r5:'Manageable workload', c2r6:'Improve collaboration',
       aiquote:'"Sophisticated AI use emerges when people learn how to frame problems clearly, guide model reasoning, evaluate outputs critically, and apply AI flexibly across their work."',
       aicite:'— Nick Hallman, Zach Kowaleski, Anu Puvvada, and Jaime J. Schmidt, <em>What the Best AI Users Do Differently—and How to Level Up All of Your Employees</em>, Harvard Business Review, March 19, 2026.',
   },
   es:{
       nav:['Inicio','Servicios','Nosotros','Contacto'],
       eye:'Agencia Digital Premium — Londres',
       h1:'Piensa Digital.', h2:'Crece con Inteligencia.',
       hp:'Simplificamos, automatizamos y gestionamos el lado digital de tu negocio — para que puedas centrarte en la toma de decisiones.',
       hb1:'Ver Servicios', hb2:'¿Por qué elegirnos?', hb3:'Contáctanos', scroll:'Scroll',
       tr1:'Estrategia, automatización y crecimiento — bajo un mismo techo',
       tr2:'Trabajas directamente con las personas que hacen el trabajo',
       tr3:'Cada consulta es gratuita y sin compromiso',
       svclbl:'Qué Hacemos', svcH:'Seis formas de <em>hacer crecer tu negocio.</em>',
       svcp:'Cada servicio está diseñado para ahorrar tiempo, reducir fricciones y generar resultados medibles.',
       svcHint:'Haz clic en una tarjeta para saber más',
       s:[
             ['Automatización de Procesos','Sustituye tareas manuales por flujos de trabajo inteligentes.',
                   'Identificamos tus procesos más repetitivos y los automatizamos de principio a fin. Desde actualizaciones de CRM y secuencias de email hasta gestión documental e informes, tu equipo deja de hacer lo que el software puede manejar.','IA · Automatización · Eficiencia'],
             ['Estrategia de Marketing','Campañas basadas en datos para convertir y escalar ingresos.',
                   'Diseñamos y gestionamos estrategias de marketing de embudo completo basadas en datos. Investigación de audiencias, medios de pago, email marketing y optimización de conversiones — todo vinculado a KPIs claros y reporting mensual.','Medios Pagados · Embudos · Crecimiento'],
             ['Diseño Web','Webs rápidas y modernas que convierten visitas en clientes.',
                   'Construimos webs desde la estrategia hasta el lanzamiento, cubriendo UX, diseño visual y desarrollo. Cada sitio es mobile-first, optimizado para SEO y de alto rendimiento.','UX · Desarrollo · SEO'],
             ['Redes Sociales','Contenido consistente que hace crecer tu audiencia y autoridad de marca.',
                   'Gestionamos tu presencia en redes de principio a fin — calendarios de contenido, producción creativa, programación y gestión de comunidades. Activos en Instagram, LinkedIn, TikTok y X.','Contenido · Marca · Comunidad'],
             ['Investigación de Mercado','Inteligencia clara para afinar tu posicionamiento y estrategia.',
                   'Entregamos análisis estructurados de mercado y competencia — identificando brechas, tendencias y oportunidades. Los resultados incluyen informes escritos, benchmarks de precios y perfiles de cliente.','Inteligencia · Investigación · Estrategia'],
             ['Análisis de Negocio','Dashboards e informes que hacen tus números accionables.',
                   'Construimos marcos de analítica personalizados y dashboards en tiempo real conectados a tus herramientas actuales. Ingresos, CAC, churn, tasas de conversión — presentados con claridad para que puedas actuar rápido.','Dashboards · KPIs · Reporting'],
           ],
       ablbl:'Quiénes Somos', abH:'Un equipo enfocado. Un <em>propósito claro.</em>',
       abp:'Galan Solutions es una agencia digital especializada con sede en Canary Wharf, Londres. Trabajamos directamente con propietarios y operadores de negocios para diseñar, construir y gestionar la infraestructura digital que mantiene sus empresas funcionando de forma eficiente.',
       abp2:'Mantenemos el equipo pequeño por diseño. Cada cliente trabaja con las personas que toman las decisiones, no con gestores de cuentas. Eso significa ejecución más rápida, comunicación más clara y resultados que realmente reflejan tus objetivos.',
       fc1t:'Londres, Reino Unido', fc1d:'Con sede en Canary Wharf, trabajando con clientes en el Reino Unido e internacionalmente',
       fc2t:'Entrega Directa', fc2d:'Estrategia y ejecución gestionadas por el mismo equipo, de principio a fin',
       fc3t:'Experiencia Multisectorial', fc3d:'Exposición en retail, finanzas, tecnología, servicios y B2B',
       whylbl:'Por Qué Elegirnos', whyH:'Pensados diferente. <em>Entregados mejor.</em>',
       whyHint:'Haz clic en una tarjeta para saber más',
       w:[
             ['Equipo Pequeño, Acceso Directo','Sin intermediarios entre tú y quienes hacen el trabajo.','Trabajas con las personas que hacen el trabajo. Sin capas intermedias, sin malentendidos entre lo acordado y lo entregado. Cada decisión la toman las mismas personas que la ejecutan.'],
             ['Responsabilidad Total','Un único punto de contacto. Rendición de cuentas en cada etapa.','Asumimos la responsabilidad completa de estrategia, ejecución y resultados. Un único punto de contacto, rendición de cuentas total y entregables claros en cada etapa. Siempre sabes en qué punto estamos y qué viene después.'],
             ['Tecnología Integrada','La IA y la automatización forman parte de cada solución.','La IA, la automatización y los sistemas inteligentes son parte de cómo trabajamos, no extras añadidos. Cada solución está diseñada para escalar sin aumentos proporcionales de coste, de modo que crecer no significa contratar más personas para gestionar más herramientas.'],
             ['Consulta Gratuita','Evaluamos tu situación antes de pedir cualquier compromiso.','Todo compromiso comienza con una consulta sin coste. Evaluamos tu situación, detallamos lo que podemos hacer y solo avanzamos si hay un encaje real. Sin presión, sin obligación, solo claridad sobre si somos el equipo adecuado para ti.'],
           ],
       ctlbl:'Contáctanos', ctH:'Construyamos algo <em>grande.</em>',
       ctp:'Cuéntanos tu negocio y lo que quieres conseguir. Te responderemos con una visión clara de cómo podemos ayudarte.',
       free:'Las consultas son gratuitas', el:'Email', ll:'Ubicación', loc:'Canary Wharf, Londres, Reino Unido',
       fln:'Tu Nombre', fle:'Correo Electrónico', flc:'Empresa', flm:'Cuéntanos tu proyecto',
       sub:'Enviar Mensaje', fokt:'¡Mensaje enviado!', fokd:'Te responderemos en menos de 24 horas.',
       fttag:'Estrategia digital, automatización y servicios de crecimiento para empresas que quieren operar de forma más inteligente.',
       ftcopy:'© 2025 Galan Solutions. Todos los derechos reservados.',
       ftdisclaimer:'Galan Solutions es un nombre comercial. Todas las consultas son gratuitas y sin compromiso.',
       ftnav:['Inicio','Servicios','Nosotros','Contacto'],
       ftNavTitle:'Navegación', ftContactTitle:'Contacto', ftloc:'Canary Wharf, Londres, Reino Unido',
       ailbl:'La IA en cifras', aiH:'Los datos detrás de <em>la transformación</em>',
       aip:'La adopción de la IA se acelera en empresas de todos los tamaños. La brecha entre quienes ya actúan y el resto es hoy perfectamente medible.',
       c1hd:'Empresas europeas que utilizan IA por tamaño',
       c1sh:'% de empresas · 2024 vs 2025 · Eurostat (isoc_eb_ai)',
       c1all:'Todas las empresas', c1sm:'Pequeñas', c1md:'Medianas', c1lg:'Grandes',
       c2hd:'Beneficios de la IA en el flujo de trabajo de desarrollo',
       c2sh:'% de desarrolladores a nivel mundial · 2024 · Stack Overflow / Statista',
       c2r1:'Mayor productividad', c2r2:'Aprendizaje más rápido', c2r3:'Mayor eficiencia',
       c2r4:'Mayor precisión', c2r5:'Carga de trabajo manejable', c2r6:'Mejor colaboración',
       aiquote:'"El uso sofisticado de la IA surge cuando las personas aprenden a formular problemas con claridad, a guiar el razonamiento del modelo, a evaluar los resultados de forma crítica y a aplicar la IA con flexibilidad en su trabajo."',
       aicite:'— Nick Hallman, Zach Kowaleski, Anu Puvvada y Jaime J. Schmidt, <em>Lo que los mejores usuarios de IA hacen diferente — y cómo elevar el nivel de todos tus empleados</em>, Harvard Business Review, 19 de marzo de 2026.',
   }};

 // --- Safe storage helpers: allow-list validated, private-mode safe ----------
 function readStored(key,allow,def){
     try{var v=localStorage.getItem(key);return allow.indexOf(v)>-1?v:def;}catch(e){return def;}
 }
  function writeStored(key,val){try{localStorage.setItem(key,val);}catch(e){/* storage unavailable */}}

 let lang=readStored('gs_lang',['en','es'],'en');
  let theme=readStored('gs_theme',['dark','light'],'dark');

 function g(id){return document.getElementById(id)}
  function tx(id,v){const e=g(id);if(e)e.textContent=v}
  // Safe replacement for the old innerHTML helper. Renders plain text and ONLY
 // honors a literal <em>...</em> emphasis token; everything else is inserted as a
 // text node, so embedded markup or scripts can never be parsed or executed.
 function ht(id,v){
     const e=g(id);if(!e)return;
     while(e.firstChild)e.removeChild(e.firstChild);
     const re=/<em>([\s\S]*?)<\/em>/gi;
     let last=0,m;
     while((m=re.exec(v))){
           if(m.index>last)e.appendChild(document.createTextNode(v.slice(last,m.index)));
           const em=document.createElement('em');em.textContent=m[1];e.appendChild(em);
           last=re.lastIndex;
     }
     if(last<v.length)e.appendChild(document.createTextNode(v.slice(last)));
 }

 function setTheme(t){
     if(t!=='dark'&&t!=='light')t='dark';
     theme=t;
     document.documentElement.setAttribute('data-theme',t);
     writeStored('gs_theme',t);
 }

 function setLang(l){
     if(l!=='en'&&l!=='es')l='en';
     lang=l;writeStored('gs_lang',l);document.documentElement.lang=l;
     const t=T[l];
     const sk=['home','services','about','contact'];
     document.querySelectorAll('[data-sec]').forEach(el=>{const i=sk.indexOf(el.dataset.sec);if(i>-1)el.textContent=t.nav[i];});
     document.querySelectorAll('.ft-lnk').forEach((el,i)=>{el.textContent=t.ftnav[i]});
     document.querySelectorAll('.lbtn').forEach(b=>b.classList.toggle('on',b.dataset.lang===l));
     tx('h-l1',t.h1);tx('h-l2',t.h2);tx('h-p',t.hp);
     tx('h-b1',t.hb1);tx('h-b2',t.hb2);tx('h-b3',t.hb3);tx('scroll-lbl',t.scroll);
     const eyeEl=g('hero-eye');if(eyeEl)eyeEl.childNodes[eyeEl.childNodes.length-1].textContent=' '+t.eye;
     tx('tr1',t.tr1);tx('tr2',t.tr2);tx('tr3',t.tr3);
     tx('svc-lbl',t.svclbl);ht('svc-h',t.svcH);tx('svc-p',t.svcp);tx('svc-hint',t.svcHint);
     t.s.forEach((s,i)=>{tx('s'+i+'n',s[0]);tx('s'+i+'s',s[1]);tx('s'+i+'d',s[2]);tx('s'+i+'t',s[3]);});
     tx('ab-lbl',t.ablbl);ht('ab-h',t.abH);tx('ab-p',t.abp);tx('ab-p2',t.abp2);
     tx('fc1t',t.fc1t);tx('fc1d',t.fc1d);tx('fc2t',t.fc2t);tx('fc2d',t.fc2d);tx('fc3t',t.fc3t);tx('fc3d',t.fc3d);
     tx('why-lbl',t.whylbl);ht('why-h',t.whyH);tx('why-hint',t.whyHint);
     t.w.forEach((w,i)=>{tx('w'+(i+1)+'t',w[0]);tx('w'+(i+1)+'s',w[1]);tx('w'+(i+1)+'d',w[2]);});
     tx('ct-lbl',t.ctlbl);ht('ct-h',t.ctH);tx('ct-p',t.ctp);
     tx('free-t',t.free);tx('ct-el',t.el);tx('ct-ll',t.ll);tx('ct-loc',t.loc);
     tx('fl-n',t.fln);tx('fl-e',t.fle);tx('fl-c',t.flc);tx('fl-m',t.flm);
     tx('sub-btn',t.sub);tx('fok-t',t.fokt);tx('fok-d',t.fokd);
     tx('ft-tag',t.fttag);tx('ft-copy',t.ftcopy);tx('ft-disclaimer',t.ftdisclaimer);
     tx('ft-nav-title',t.ftNavTitle);tx('ft-contact-title',t.ftContactTitle);tx('ft-loc',t.ftloc);
     tx('ai-lbl',t.ailbl);ht('ai-h',t.aiH);tx('ai-p',t.aip);
     tx('c1-hd',t.c1hd);tx('c1-sh',t.c1sh);
     tx('c1-all',t.c1all);tx('c1-sm',t.c1sm);tx('c1-md',t.c1md);tx('c1-lg',t.c1lg);
     tx('c2-hd',t.c2hd);tx('c2-sh',t.c2sh);
     tx('c2-r1',t.c2r1);tx('c2-r2',t.c2r2);tx('c2-r3',t.c2r3);
     tx('c2-r4',t.c2r4);tx('c2-r5',t.c2r5);tx('c2-r6',t.c2r6);
     tx('ai-quote',t.aiquote);ht('ai-cite',t.aicite);
 }

 function initReveal(){
     const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');obs.unobserve(x.target);}});},{threshold:.07,rootMargin:'0px 0px -28px 0px'});
     document.querySelectorAll('.rv').forEach(el=>obs.observe(el));
 }

 function initActiveNav(){
     const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)document.querySelectorAll('[data-sec]').forEach(a=>a.classList.toggle('cur',a.dataset.sec===x.target.id));});},{threshold:.25});
     ['home','services','about','contact'].forEach(id=>{const el=g(id);if(el)obs.observe(el);});
 }

 function initGlow(){
     document.querySelectorAll('.card').forEach(c=>{
           c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');c.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%');});
     });
 }

 function initExpandCards(selector){
     const cards=document.querySelectorAll(selector);
     cards.forEach(card=>{
           card.addEventListener('click',()=>{
                   const open=card.classList.contains('open');
                   cards.forEach(c=>{c.classList.remove('open');c.setAttribute('aria-expanded','false');});
                   if(!open){card.classList.add('open');card.setAttribute('aria-expanded','true');}
           });
     });
     document.addEventListener('click',e=>{
           if(!e.target.closest(selector)){
                   cards.forEach(c=>{c.classList.remove('open');c.setAttribute('aria-expanded','false');});
           }
     });
 }

 function initForm(){
     const form=g('contact-form'),ok=g('form-ok'),errEl=g('form-err');
     if(!form||!ok) return;

    const EMAIL_RE=/^[^\s@]{1,64}@[^\s@.]+(?:\.[^\s@.]+)+$/;
     function isValid(name,email,msg){
           return name.length>=1&&name.length<=100
               && email.length>=3&&email.length<=254&&EMAIL_RE.test(email)
               && msg.length>=1&&msg.length<=2000;
     }
     function showErr(msg){ if(errEl){errEl.textContent=msg;errEl.hidden=false;} }

    let sending=false;
     form.addEventListener('submit',async function(e){
           e.preventDefault();
           if(sending) return;
           if(errEl) errEl.hidden=true;

                               const hp=g('company-url');
           if(hp&&hp.value!==''){ form.style.display='none'; ok.classList.add('show'); return; }

                               const name=g('fn').value.trim().slice(0,100);
           const email=g('fe').value.trim().slice(0,254);
           const company=g('fc-inp').value.trim().slice(0,100);
           const phone=g('fph').value.trim().slice(0,40);
           const msg=g('fm').value.trim().slice(0,2000);
           if(!isValid(name,email,msg)){
                   showErr(lang==='es'
                                   ? 'Revisa el formulario: nombre, un email válido y un mensaje son obligatorios.'
                                   : 'Please check the form: a name, a valid email and a message are required.');
                   return;
           }

                               const btn=g('sub-btn'),orig=btn.textContent;
           sending=true;
           btn.textContent=(lang==='es')?'Enviando…':'Sending…';btn.style.opacity='.7';btn.disabled=true;

                               const FORM_ID='1FAIpQLSd_6_UtoeeYuwAeU0uyCxOF9xhLvhWWf105ejGIHL0OowZ6Cg';
           const body=new URLSearchParams({
                   'entry.462677815': name,
                   'entry.1432944088': email,
                   'entry.1521080484': company,
                   'entry.946331430': phone,
                   'entry.343648168': msg
           });

                               const ctrl=new AbortController();
           const timer=setTimeout(()=>ctrl.abort(),12000);
           try{
                   await fetch('https://docs.google.com/forms/d/e/'+encodeURIComponent(FORM_ID)+'/formResponse',{
                             method:'POST',mode:'no-cors',referrerPolicy:'no-referrer',
                             headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},
                             body:body.toString(),signal:ctrl.signal
                   });
                   form.style.display='none';
                   ok.classList.add('show');
           }catch(err){
                   sending=false;
                   btn.textContent=orig;btn.style.opacity='1';btn.disabled=false;
                   showErr(lang==='es'
                                   ? 'No se pudo enviar. Escríbenos a SolutionsGalan@outlook.com'
                                   : 'Could not send. Please email us at SolutionsGalan@outlook.com');
           }finally{
                   clearTimeout(timer);
           }
     });
 }

 function initHam(){
     const ham=g('ham'),mob=g('mob-nav');
     if(!ham||!mob) return;
     ham.addEventListener('click',()=>{const o=mob.classList.toggle('open');ham.classList.toggle('open',o);ham.setAttribute('aria-expanded',String(o));});
     mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mob.classList.remove('open');ham.classList.remove('open');ham.setAttribute('aria-expanded','false');}));
     document.addEventListener('click',e=>{if(!e.target.closest('#nav')&&!e.target.closest('#mob-nav')){mob.classList.remove('open');ham.classList.remove('open');}});
 }

 function initSmoothLinks(){
     document.addEventListener('click',function(e){
           const a=e.target.closest('a[href^="#"]');
           if(!a) return;
           const id=a.getAttribute('href').slice(1);
           if(!id) return;
           const el=document.getElementById(id);
           if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}
     });
 }

 document.addEventListener('DOMContentLoaded',()=>{
     setTheme(theme);setLang(lang);
     initReveal();initActiveNav();initGlow();
     initExpandCards('#services .svc-card');
     initExpandCards('#about .svc-card');
     initForm();initHam();initSmoothLinks();
     ['theme-btn','theme-btn-m'].forEach(id=>{const el=g(id);if(el)el.addEventListener('click',()=>setTheme(theme==='dark'?'light':'dark'));});
     document.querySelectorAll('.lbtn').forEach(btn=>{btn.addEventListener('click',()=>setLang(btn.dataset.lang));});
     setTimeout(()=>{const ov=g('overlay');if(ov)ov.classList.add('gone');},40);
 });
})();
