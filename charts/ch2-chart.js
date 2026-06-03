// ══════════════════════════ DATA (Part 2) ══════════════════════════════════
// Source: Anthropic Economic Index (Feb 2025) × O*NET Task Statements
const TREE={children:[
  {name:'CS & Math',children:[{name:'Software Debugging',value:19.1609},{name:'Other Tasks',value:4.5332},{name:'Writing & Content',value:2.4383},{name:'System Troubleshooting',value:1.9301},{name:'Inspection & Eval',value:1.8241},{name:'Documentation',value:1.5927},{name:'Other',value:6.0679}]},
  {name:'Education & Library',children:[{name:'Teaching & Course Prep',value:11.3015},{name:'Other Tasks',value:3.8991},{name:'Consulting & Info',value:3.5893},{name:'Research & Organizing',value:3.2139},{name:'Inspection & Eval',value:3.011},{name:'Document Editing',value:1.558},{name:'Other',value:3.1106}]},
  {name:'Arts & Media',children:[{name:'Writing & Content',value:4.3457},{name:'Other Tasks',value:1.3416},{name:'Document Editing',value:1.2522},{name:'Planning & Scheduling',value:0.9415},{name:'Design & Layout',value:0.6354},{name:'Material Creation',value:0.4065},{name:'Other',value:1.3131}]},
  {name:'Admin & Office',children:[{name:'System Troubleshooting',value:1.9507},{name:'Other Tasks',value:1.311},{name:'Documentation',value:0.6507},{name:'Inspection & Eval',value:0.6356},{name:'Model & Algorithm Dev',value:0.628},{name:'Writing & Content',value:0.6111},{name:'Other',value:2.0419}]},
  {name:'Science',children:[{name:'Writing & Content',value:1.1244},{name:'Other Tasks',value:0.9739},{name:'Data Analysis',value:0.7506},{name:'Research & Organizing',value:0.7277},{name:'Teaching & Course Prep',value:0.6429},{name:'Planning & Scheduling',value:0.4956},{name:'Other',value:1.6568}]},
  {name:'Business & Finance',children:[{name:'Other Tasks',value:1.2779},{name:'Data Analysis',value:0.8362},{name:'Consulting & Info',value:0.7961},{name:'Inspection & Eval',value:0.6017},{name:'Planning & Scheduling',value:0.4877},{name:'Finance & Accounting',value:0.4744},{name:'Other',value:1.4284}]},
  {name:'Engineering',children:[{name:'Inspection & Eval',value:1.163},{name:'Other Tasks',value:0.8938},{name:'Data Analysis',value:0.6234},{name:'Writing & Content',value:0.5979},{name:'Documentation',value:0.3548},{name:'Research & Organizing',value:0.2757},{name:'Other',value:0.8475}]},
  {name:'Management',children:[{name:'Planning & Scheduling',value:0.6},{name:'Other Tasks',value:0.5578},{name:'Inspection & Eval',value:0.5304},{name:'Consulting & Info',value:0.4413},{name:'Planning & Development',value:0.3673},{name:'Teaching & Course Prep',value:0.3101},{name:'Other',value:1.677}]}
]};
const GROUP_COLORS={'CS & Math':'#3B82F6','Education & Library':'#60A5FA','Arts & Media':'#A78BFA','Admin & Office':'#FBBF24','Science':'#34D399','Business & Finance':'#F97316','Engineering':'#10B981','Management':'#64748B'};
const DIV=[
  {m:'aut',label:'Document Editing',u:2.318},
  {m:'aut',label:'Inspection & Eval',u:2.2217},
  {m:'aut',label:'System Troubleshooting',u:1.9978},
  {m:'aut',label:'Consulting & Info',u:1.412},
  {m:'aut',label:'Planning & Scheduling',u:1.4053},
  {m:'aut',label:'Writing & Content',u:1.3119},
  {m:'aut',label:'Data Analysis',u:0.8843},
  {m:'aug',label:'Software Debugging',u:13.9173},
  {m:'aug',label:'Writing & Content',u:7.8703},
  {m:'aug',label:'Teaching & Course Prep',u:5.5052},
  {m:'aug',label:'Inspection & Eval',u:4.6212},
  {m:'aug',label:'Consulting & Info',u:3.2624},
  {m:'aug',label:'Data Analysis',u:2.8344},
  {m:'aug',label:'Planning & Development',u:2.523},
];

// ══════════════════════════ TREEMAP (S7) ═══════════════════════════════════
(function(){
  let done=false, zoomed=null;

  const tip=document.createElement('div');
  tip.style.cssText='position:fixed;pointer-events:none;background:#1a1b23;border:1px solid rgba(255,255,255,0.1);color:#E2E8F0;padding:10px 14px;border-radius:6px;font-family:IBM Plex Mono,monospace;font-size:11px;line-height:1.7;opacity:0;transition:opacity .12s;z-index:9999;max-width:220px;box-shadow:0 8px 24px rgba(0,0,0,.5);';
  document.body.appendChild(tip);
  function showTip(e,html){tip.innerHTML=html;tip.style.opacity='1';posTip(e);}
  function posTip(e){
    const x=e.clientX+16, y=e.clientY-10;
    tip.style.left=Math.min(x,window.innerWidth-240)+'px';
    tip.style.top=Math.max(8,y)+'px';
  }
  function hideTip(){tip.style.opacity='0';}

  function drawTM(zoomGroup){
    const svgEl=document.getElementById('treemap-svg');
    const W=svgEl.parentElement.clientWidth||1100;
    const H=svgEl.parentElement.clientHeight||460;
    svgEl.setAttribute('width',W);svgEl.setAttribute('height',H);

    const svg=d3.select(svgEl).html('');

    if(zoomGroup){
      const grpData=TREE.children.find(c=>c.name===zoomGroup);
      const col=GROUP_COLORS[zoomGroup]||'#475569';
      const topPad=42;

      const back=svg.append('g').attr('cursor','pointer')
        .on('click',()=>{zoomed=null;drawTM(null);hideTip();});
      back.append('rect').attr('x',0).attr('y',0).attr('width',W).attr('height',topPad-2)
        .attr('fill','rgba(255,255,255,0.04)');
      back.append('text').attr('x',14).attr('y',15)
        .text('← All groups')
        .attr('fill','#94A3B8').attr('font-family','IBM Plex Mono,monospace').attr('font-size',10);
      back.append('rect').attr('x',0).attr('y',20).attr('width',W).attr('height',20)
        .attr('fill',col).attr('opacity',0.9);
      back.append('text').attr('x',7).attr('y',33)
        .text(zoomGroup)
        .attr('fill','#0f1117').attr('font-family','IBM Plex Mono,monospace').attr('font-size',10).attr('font-weight',600).attr('pointer-events','none');

      const zRoot=d3.hierarchy({name:zoomGroup,children:grpData.children})
        .sum(d=>d.value).sort((a,b)=>b.value-a.value);
      d3.treemap().size([W,H-topPad]).padding(2).paddingTop(0)(zRoot);

      const g=svg.append('g').attr('transform',`translate(0,${topPad})`);
      const maxV=d3.max(zRoot.leaves(),d=>d.value);

      zRoot.leaves().forEach((lf,i)=>{
        const op=0.3+0.65*(lf.value/maxV);
        const tw=lf.x1-lf.x0, th=lf.y1-lf.y0;
        const cell=g.append('g').attr('cursor','default');

        cell.append('rect')
          .attr('x',lf.x0).attr('y',lf.y0).attr('height',th)
          .attr('fill',col).attr('opacity',op)
          .attr('stroke','#13141a').attr('stroke-width',1).attr('rx',1)
          .attr('width',0)
          .transition().duration(650).delay(i*5)
          .attr('width',Math.max(0,tw));

        if(tw>30&&th>14){
          const mc=Math.max(1,Math.floor(tw/6.5)-1);
          const txt=lf.data.name.length>mc?lf.data.name.substring(0,mc)+'…':lf.data.name;
          cell.append('text').attr('x',lf.x0+5).attr('y',lf.y0+14)
            .text(txt).attr('fill','rgba(255,255,255,0.9)')
            .attr('font-family','IBM Plex Mono,monospace').attr('font-size',9.5).attr('pointer-events','none');
        }
        if(tw>50&&th>28){
          cell.append('text').attr('x',lf.x0+5).attr('y',lf.y0+27)
            .text(lf.data.value.toFixed(2)+'%')
            .attr('fill','rgba(255,255,255,0.5)')
            .attr('font-family','IBM Plex Mono,monospace').attr('font-size',9).attr('pointer-events','none');
        }

        cell.on('mousemove',function(e){
          d3.select(this).select('rect').attr('opacity',Math.min(1,op+0.2));
          showTip(e,`<div style="color:${col};font-size:9px;margin-bottom:3px;">${zoomGroup}</div><div style="font-weight:600;margin-bottom:5px;">${lf.data.name}</div><div style="color:#64748B;font-size:9px;">AI usage share</div><div style="font-size:15px;font-weight:700;color:${col};">${lf.data.value.toFixed(2)}<span style="font-size:10px;">%</span></div>`);
          posTip(e);
        }).on('mouseleave',function(){
          d3.select(this).select('rect').attr('opacity',op);
          hideTip();
        });
      });
      return;
    }

    const root=d3.hierarchy(TREE).sum(d=>d.value).sort((a,b)=>b.value-a.value);
    d3.treemap().size([W,H-18]).padding(2).paddingTop(20)(root);

    const g=svg.append('g');

    root.children.forEach(grp=>{
      const col=GROUP_COLORS[grp.data.name]||'#475569';
      const hdrG=g.append('g').attr('cursor','pointer');

      hdrG.append('rect')
        .attr('x',grp.x0).attr('y',grp.y0)
        .attr('width',grp.x1-grp.x0).attr('height',20)
        .attr('fill',col).attr('opacity',0.9);
      hdrG.append('text')
        .attr('x',grp.x0+4).attr('y',grp.y0+13)
        .text(grp.data.name)
        .attr('fill','#0f1117').attr('font-family','IBM Plex Mono,monospace')
        .attr('font-size',9.5).attr('font-weight',500).attr('pointer-events','none');

      hdrG.on('click',()=>{zoomed=grp.data.name;drawTM(grp.data.name);hideTip();})
        .on('mousemove',(e)=>{
          showTip(e,`<div style="color:${col};font-weight:600;">${grp.data.name}</div><div style="color:#64748B;font-size:9px;margin-top:3px;">Click to zoom in ↗</div>`);
          posTip(e);
        }).on('mouseleave',hideTip);
    });

    const maxV=d3.max(root.leaves(),d=>d.value);
    root.leaves().forEach((lf,i)=>{
      const col=GROUP_COLORS[lf.parent.data.name]||'#475569';
      const op=0.28+0.62*(lf.value/maxV);
      const tw=lf.x1-lf.x0, th=lf.y1-lf.y0;
      const cell=g.append('g').attr('cursor','default');

      cell.append('rect')
        .attr('x',lf.x0).attr('y',lf.y0).attr('height',th)
        .attr('fill',col).attr('opacity',op)
        .attr('stroke','#13141a').attr('stroke-width',1).attr('rx',1)
        .attr('width',0)
        .transition().duration(900).delay(i*4)
        .attr('width',Math.max(0,tw));

      if(tw>34&&th>15){
        const mc=Math.max(1,Math.floor(tw/6)-1);
        const txt=lf.data.name.length>mc?lf.data.name.substring(0,mc)+'…':lf.data.name;
        cell.append('text').attr('x',lf.x0+4).attr('y',lf.y0+13).text(txt)
          .attr('fill','rgba(255,255,255,0.85)').attr('font-family','IBM Plex Mono,monospace')
          .attr('font-size',8.5).attr('pointer-events','none');
      }
      if(tw>48&&th>28){
        cell.append('text').attr('x',lf.x0+4).attr('y',lf.y0+25)
          .text(lf.data.value.toFixed(1)+'%')
          .attr('fill','rgba(255,255,255,0.4)').attr('font-family','IBM Plex Mono,monospace')
          .attr('font-size',8).attr('pointer-events','none');
      }

      cell.on('mousemove',function(e){
        d3.select(this).select('rect').attr('opacity',Math.min(1,op+0.2));
        showTip(e,`<div style="color:${col};font-size:9px;margin-bottom:3px;">${lf.parent.data.name}</div><div style="font-weight:600;margin-bottom:5px;">${lf.data.name}</div><div style="color:#64748B;font-size:9px;">AI usage share</div><div style="font-size:15px;font-weight:700;color:${col};">${lf.data.value.toFixed(2)}<span style="font-size:10px;">%</span></div>`);
        posTip(e);
      }).on('mouseleave',function(){
        d3.select(this).select('rect').attr('opacity',op);
        hideTip();
      });
    });

    svg.append('text')
      .attr('x',W-8).attr('y',H-4)
      .attr('text-anchor','end')
      .attr('fill','rgba(255,255,255,0.18)')
      .attr('font-family','IBM Plex Mono,monospace').attr('font-size',9)
      .attr('pointer-events','none')
      .text('Click group header to zoom in ↗');
  }

  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting&&!done){done=true;drawTM(null);}});},{threshold:0.1});
  io.observe(document.getElementById('s7'));
  window.addEventListener('resize',()=>{if(done)drawTM(zoomed);});
})();

// ══════════════════════════ DIVERGING BAR (S8, S9) ═════════════════════════
const _divTip=(()=>{
  const t=document.createElement('div');
  t.style.cssText='position:fixed;pointer-events:none;background:#1a1b23;border:1px solid rgba(255,255,255,0.1);color:#E2E8F0;padding:10px 14px;border-radius:6px;font-family:IBM Plex Mono,monospace;font-size:11px;line-height:1.7;opacity:0;transition:opacity .12s;z-index:9999;max-width:220px;box-shadow:0 8px 24px rgba(0,0,0,.5);';
  document.body.appendChild(t);
  return t;
})();

function drawDiv(svgId,highlight){
  const svgEl=document.getElementById(svgId);
  const wrap=svgEl.parentElement;
  const W=wrap.clientWidth||900,H=wrap.clientHeight||400;
  svgEl.setAttribute('width',W);svgEl.setAttribute('height',H);
  const autR=DIV.filter(d=>d.m==='aut'),augR=DIV.filter(d=>d.m==='aug');
  const labels=[...new Set(DIV.map(d=>d.label))];
  const cx=W/2,maxU=d3.max(DIV,d=>d.u),bMax=cx-120;
  const n=labels.length,rowH=Math.min(42,(H-20)/n),sy=(H-n*rowH)/2;
  const g=d3.select(svgEl).html('').append('g');

  g.append('line').attr('x1',cx).attr('y1',10).attr('x2',cx).attr('y2',H-10)
    .attr('stroke','rgba(255,255,255,0.1)').attr('stroke-width',1);

  labels.forEach((label,i)=>{
    const y=sy+i*rowH,cy2=y+rowH/2,bh=rowH*0.48;
    const ar=autR.find(d=>d.label===label);
    const augr=augR.find(d=>d.label===label);
    const rowG=g.append('g').attr('class','div-row');

    rowG.append('rect')
      .attr('x',0).attr('y',y).attr('width',W).attr('height',rowH)
      .attr('fill','transparent').attr('cursor','default');

    rowG.append('text').attr('x',cx).attr('y',cy2+4).attr('text-anchor','middle')
      .attr('fill','#475569').attr('font-family','IBM Plex Mono,monospace').attr('font-size',9)
      .text(label.length>13?label.substring(0,13)+'…':label).attr('pointer-events','none');

    if(ar){
      const bw=(ar.u/maxU)*bMax;
      rowG.append('rect').attr('x',cx-52-bw).attr('y',cy2-bh/2).attr('width',bw).attr('height',bh)
        .attr('fill','#F97316').attr('rx',2).attr('opacity',highlight?0.18:0.88).attr('pointer-events','none');
      rowG.append('text').attr('x',cx-56-bw).attr('y',cy2+4).attr('text-anchor','end')
        .attr('fill',highlight?'rgba(249,115,22,0.25)':'#F97316')
        .attr('font-family','IBM Plex Mono,monospace').attr('font-size',8.5)
        .text(ar.u.toFixed(1)+'h').attr('pointer-events','none');
    }

    if(augr){
      const bw=(augr.u/maxU)*bMax;
      rowG.append('rect').attr('x',cx+52).attr('y',cy2-bh/2).attr('width',bw).attr('height',bh)
        .attr('fill','#3B82F6').attr('rx',2).attr('opacity',0.9).attr('pointer-events','none');
      rowG.append('text').attr('x',cx+56+bw).attr('y',cy2+4).attr('text-anchor','start')
        .attr('fill','#3B82F6').attr('font-family','IBM Plex Mono,monospace').attr('font-size',8.5)
        .text(augr.u.toFixed(1)+'h').attr('pointer-events','none');
    }

    rowG.on('mousemove',function(e){
      g.selectAll('.div-row').attr('opacity',0.18);
      d3.select(this).attr('opacity',1);

      let html=`<div style="font-weight:600;margin-bottom:7px;">${label}</div>`;
      if(ar)  html+=`<div style="color:#F97316;margin-bottom:3px;"><span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#F97316;margin-right:6px;vertical-align:middle;"></span>Automation &nbsp; <strong>${ar.u.toFixed(2)}h</strong></div>`;
      if(augr) html+=`<div style="color:#3B82F6;"><span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#3B82F6;margin-right:6px;vertical-align:middle;"></span>Augmentation &nbsp; <strong>${augr.u.toFixed(2)}h</strong></div>`;
      if(!ar)  html+=`<div style="color:#475569;font-size:9px;margin-top:4px;">Augmentation-only task</div>`;
      if(!augr) html+=`<div style="color:#475569;font-size:9px;margin-top:4px;">Automation-only task</div>`;

      _divTip.innerHTML=html;
      _divTip.style.opacity='1';
      _divTip.style.left=Math.min(e.clientX+16,window.innerWidth-240)+'px';
      _divTip.style.top=Math.max(8,e.clientY-10)+'px';
    }).on('mouseleave',function(){
      g.selectAll('.div-row').attr('opacity',1);
      _divTip.style.opacity='0';
    });
  });
}
(function(){
  let doneA=false,doneB=false;
  const ioA=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting&&!doneA){doneA=true;drawDiv('div-svg-a',false);}});},{threshold:0.1});
  ioA.observe(document.getElementById('s8'));
  const ioB=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting&&!doneB){doneB=true;drawDiv('div-svg-b',true);}});},{threshold:0.1});
  ioB.observe(document.getElementById('s9'));
  window.addEventListener('resize',()=>{drawDiv('div-svg-a',false);drawDiv('div-svg-b',true);});
})();
