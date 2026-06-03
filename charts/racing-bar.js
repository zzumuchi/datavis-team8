// ══════════════════════════ DATA ═══════════════════════════════════════════
const SERIES=[
  {id:'agri',label:'Agriculture & Mining',color:'#64748B'},
  {id:'mfg',label:'Manufacturing',color:'#10B981'},
  {id:'const',label:'Construction',color:'#34D399'},
  {id:'retail',label:'Retail & Trade',color:'#3B82F6'},
  {id:'info',label:'Transport, Info & Education',color:'#F97316'},
  {id:'pbs_ex',label:'Professional Services (ex-IT)',color:'#FBBF24'},
  {id:'it',label:'IT & Software',color:'#A78BFA'},
];
const STEPS=[
  {year:1800,insight:'<strong>Three in four Americans</strong> worked the land',data:{agri:1405,mfg:85,info:45,pbs_ex:40}},
  {year:1820,insight:'Agriculture still reigns — but <span style="color:#10B981">Manufacturing</span> is stirring',data:{agri:2484,mfg:513,info:70,pbs_ex:110}},
  {year:1840,insight:'Railroads arrive. <span style="color:#10B981">Construction and trade</span> enter the picture',data:{agri:3594,mfg:532,const:290,retail:350,info:160,pbs_ex:240}},
  {year:1860,insight:'Northern industrialization <span style="color:#10B981">doubles manufacturing</span>',data:{agri:5911,mfg:1706,const:520,retail:890,info:420,pbs_ex:600}},
  {year:1880,insight:'<strong>The Second Industrial Revolution</strong> lifts factories and trade',data:{agri:8961,mfg:3570,const:900,retail:1930,info:771,pbs_ex:1130}},
  {year:1900,insight:'Industry peaks. <span style="color:#10B981">Manufacturing</span> closes in on agriculture',data:{agri:11749,mfg:6532,const:1665,retail:3970,info:1581,pbs_ex:1800}},
  {year:1920,insight:'The assembly line tips the balance: <span style="color:#10B981">Manufacturing</span> overtakes farming',data:{agri:10843,mfg:12370,const:1233,retail:5845,info:3148,pbs_ex:1660}},
  {year:1940,insight:'A brief pause — most sectors tread water',data:{agri:9540,mfg:11460,const:1070,retail:7580,info:5890,pbs_ex:3480}},
  {year:1950,insight:'Postwar boom. <span style="color:#10B981">Manufacturing</span> crosses 14 million',data:{agri:7160,mfg:14170,const:2390,retail:9870,info:7110,pbs_ex:5640}},
  {year:1960,insight:'The service era begins. <span style="color:#3B82F6">Trade and services</span> surge',data:{agri:5540,mfg:16690,const:2930,retail:11140,info:9870,pbs_ex:8010}},
  {year:1970,insight:'The information age. <span style="color:#F97316">Professional services</span> lead the charge',data:{agri:3410,mfg:19367,const:3588,retail:14260,info:12190,pbs_ex:11820}},
  {year:1980,insight:'<span style="color:#10B981">Manufacturing</span> hits 18.7M — its all-time peak',data:{agri:3360,mfg:18730,const:4455,retail:17130,info:14260,pbs_ex:16880}},
  {year:1990,insight:'Software enters the workforce. <span style="color:#A78BFA">IT jobs</span> appear on the map',data:{agri:3290,mfg:16880,const:5285,retail:19490,info:17340,pbs_ex:22830,it:1500}},
  {year:2000,insight:'Dot-com boom. <span style="color:#A78BFA">IT</span> more than doubles. Manufacturing shrinks.',data:{agri:2470,mfg:17260,const:6787,retail:22730,info:18700,pbs_ex:27800,it:1728}},
  {year:2010,insight:'Financial crisis hammers manufacturing. <span style="color:#A78BFA">IT</span> holds its ground.',data:{agri:2200,mfg:11530,const:5510,retail:20520,info:16990,pbs_ex:26390,it:2680}},
  {year:2020,insight:'The pandemic accelerates <span style="color:#A78BFA">everything digital</span>',data:{agri:2470,mfg:12350,const:7270,retail:22310,info:17130,pbs_ex:30170,it:3690}},
  {year:2024,insight:'The <strong>AI era</strong>. <span style="color:#A78BFA">IT·Data</span> jobs at all-time high.',data:{agri:2460,mfg:12970,const:8080,retail:23400,info:17520,pbs_ex:32700,it:3101}},
];

// ══════════════════════════ UTILS ══════════════════════════════════════════
function lerp(a,b,t){return a+(b-a)*t;}
function ease(t){return t<0.5?2*t*t:-1+(4-2*t)*t;}

// ══════════════════════════ RACING BAR ═════════════════════════════════════
(function(){
  const svgEl=document.getElementById('racing-svg');
  const barsWrap=document.getElementById('racing-bars');
  const tlFill=document.getElementById('tl-fill');
  const tlTrack=document.getElementById('tl-track');
  let stepIdx=0,playing=false,stepMs=2000,timer=null,raf=null;
  let cur={},tgt={};
  SERIES.forEach(s=>{cur[s.id]=0;tgt[s.id]=0;});

  const leg=document.getElementById('racing-legend');
  SERIES.forEach(s=>{const d=document.createElement('div');d.className='leg-item';d.innerHTML=`<div class="leg-dot" style="background:${s.color}"></div>${s.label}`;leg.appendChild(d);});

  [{year:1920,lbl:'Ford Assembly Line'},{year:1980,lbl:'PC Revolution'},{year:2022,lbl:'ChatGPT'}].forEach(ev=>{
    const ni=STEPS.findIndex(s=>s.year>=ev.year);
    const pct=(ni/(STEPS.length-1))*100;
    const m=document.createElement('div');m.className='tl-mk';m.style.left=pct+'%';
    const l=document.createElement('div');l.className='tl-mk-lbl';l.textContent=ev.lbl;
    if(pct>85) l.style.transform='translateX(-100%)';
    else if(pct<15) l.style.transform='translateX(-12%)';
    m.appendChild(l);tlTrack.parentNode.appendChild(m);
  });

  let gmax=0;
  STEPS.forEach(s=>{SERIES.forEach(r=>{const v=s.data[r.id]||0;if(v>gmax)gmax=v;});});

  function render(){
    const W=barsWrap.clientWidth||700,H=barsWrap.clientHeight||280;
    svgEl.setAttribute('width',W);svgEl.setAttribute('height',H);
    const PL=188,PR=82,barW=W-PL-PR;
    const sorted=SERIES.map(s=>({...s,val:cur[s.id]||0})).sort((a,b)=>b.val-a.val);
    const ROW_H=Math.min(38,(H-10)/SERIES.length);
    const offsetY=(H-SERIES.length*ROW_H)/2;
    let h='';
    sorted.forEach((s,i)=>{
      const y=offsetY+i*ROW_H;
      const bw=Math.max(0,(s.val/gmax)*barW);
      h+=`<g>
        <text x="${PL-7}" y="${y+ROW_H/2+4}" text-anchor="end" fill="#94A3B8" font-family="IBM Plex Mono,monospace" font-size="10">${s.label}</text>
        <rect x="${PL}" y="${y+3}" width="${bw}" height="${ROW_H-6}" fill="${s.color}" rx="2" opacity="0.88"/>
        <text x="${PL+bw+5}" y="${y+ROW_H/2+4}" fill="#475569" font-family="IBM Plex Mono,monospace" font-size="9.5">${s.val>0?Math.round(s.val).toLocaleString()+'K':''}</text>
      </g>`;
    });
    svgEl.innerHTML=h;
  }

  function goTo(idx,instant){
    const step=STEPS[idx];
    SERIES.forEach(s=>{tgt[s.id]=step.data[s.id]||0;});
    tlFill.style.width=((idx/(STEPS.length-1))*100)+'%';
    document.getElementById('year-display').textContent=step.year;
    document.getElementById('racing-insight').innerHTML=step.insight;
    if(instant){SERIES.forEach(s=>{cur[s.id]=tgt[s.id];});render();return;}
    const start={};SERIES.forEach(s=>{start[s.id]=cur[s.id];});
    const t0=performance.now(),dur=600;
    if(raf)cancelAnimationFrame(raf);
    function anim(now){
      const t=Math.min(1,(now-t0)/dur);
      SERIES.forEach(s=>{cur[s.id]=lerp(start[s.id],tgt[s.id],ease(t));});
      render();
      if(t<1)raf=requestAnimationFrame(anim);else raf=null;
    }
    raf=requestAnimationFrame(anim);
  }

  const btnPlay=document.getElementById('btn-play');
  const btnSpeed=document.getElementById('btn-speed');
  function autoStep(){if(!playing)return;timer=setTimeout(()=>{stepIdx++;if(stepIdx>=STEPS.length){stopPlay();btnPlay.textContent='↺ Replay';return;}goTo(stepIdx,false);autoStep();},stepMs);}
  function startPlay(){playing=true;btnPlay.textContent='⏸ Pause';autoStep();}
  function stopPlay(){playing=false;clearTimeout(timer);if(btnPlay.textContent==='⏸ Pause')btnPlay.textContent='▶ Play';}
  btnPlay.addEventListener('click',()=>{if(playing)stopPlay();else{if(stepIdx>=STEPS.length-1){stepIdx=0;goTo(0,true);}startPlay();}});
  const speeds=[2000,1000,500];let si=0;
  btnSpeed.addEventListener('click',()=>{si=(si+1)%speeds.length;stepMs=speeds[si];btnSpeed.textContent=si===0?'1x':si===1?'2x':'4x';});

  goTo(0,true);render();
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting&&!playing){if(stepIdx>=STEPS.length-1){stepIdx=0;goTo(0,true);}startPlay();}else if(!e.isIntersecting&&playing)stopPlay();});},{threshold:0.4});
  io.observe(document.getElementById('s2'));
  window.addEventListener('resize',render);
})();
