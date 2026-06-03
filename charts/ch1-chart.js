// ══════════════════════════ DATA (Part 1) ══════════════════════════════════
// Full 25-job × 30-task heatmap data (O*NET 25.0)
const HM_Y=["Registered Nurses","Accountants and Auditors","Nuclear Power Reactor Operators","Management Analysts","Data Entry Keyers","Architects","Market Research Analysts and Marketing Specialists","Tax Preparers","Civil Engineers","Lawyers","Software Developers","Billing and Posting Clerks","Payroll and Timekeeping Clerks","Psychiatrists","Airline Pilots","Bookkeeping","Tellers","Electricians","Graphic Designers","Construction Laborers","Elementary School Teachers","Plumbers","Roofers","Clergy","Writers and Authors"];
const HM_X=["Get Info","Process Info","Eval Compliance","Document","Admin","Computers","Schedule","Organize/Plan","Monitor","Comm Internal","Comm External","Relationships","Care/Assist","Sell/Influence","Negotiate","Public","Teach/Train","Coach","Consult","Physical","Move Objects","Machines","Vehicles/Equip","Repair Mech","Repair Elec","Creative","Analyze","Decisions","Strategy","Interpret"];
const HM_Z=[[4.76,3.72,4.51,4.86,3.14,4.38,3.36,4.51,4.15,4.6,3.41,4.4,4.94,2.18,3.7,3.69,3.81,3.87,3.47,4.57,4.09,2.86,2.25,1.73,1.77,3.83,3.93,4.54,3.39,4.13],[4.46,4.19,4.36,4.27,3.74,4.45,3.49,4.17,3.62,4.42,3.8,4.14,2.44,2.75,3.2,2.42,3.68,3.44,3.31,1.56,1.61,1.56,1.33,1.16,1.28,3.33,4.13,4.17,3.31,3.72],[4.52,4.29,4.73,4.39,3.48,3.64,2.95,3.58,4.52,4.33,2.5,3.29,1.94,1.41,2.3,1.54,3.51,3.09,2.68,2.29,1.94,4.14,2.21,2.17,2.26,2.58,3.94,4.18,2.36,3.27],[4.7,4.15,3.9,4.05,3.19,4.29,3.4,4.29,3.86,4.65,4.33,4.65,2.48,3.95,3.95,2.9,3.76,3.76,4.45,1.71,1.71,1.57,1.67,1.24,1.33,4.14,4.4,4.62,4.38,4.38],[4.25,4.5,4.1,4.41,3.91,4.71,2.58,3.85,3.34,4.27,3.28,3.56,2.38,1.85,2.44,2.68,3.28,2.55,2.26,2.54,2.42,2.39,1.55,1.65,1.65,2.9,3.55,4.21,2.69,3.15],[4.38,3.76,4.05,4.29,3.14,4.67,4.05,4.1,3.19,4.24,4.24,4.1,2.95,3.0,3.57,2.9,3.76,3.57,3.43,2.29,1.9,1.7,1.81,1.24,1.65,4.48,3.81,4.4,3.6,3.75],[4.86,4.64,2.95,3.87,3.09,4.61,3.45,4.32,3.35,4.09,4.22,4.22,1.65,3.68,2.83,2.74,2.83,3.0,3.91,1.32,1.26,1.52,1.22,1.09,1.39,4.14,4.78,4.55,4.13,4.7],[4.57,4.24,3.95,4.24,3.24,4.67,3.43,3.86,2.9,3.48,3.38,3.76,2.79,2.0,3.05,3.48,3.14,2.57,3.33,1.43,1.62,2.14,1.29,1.0,1.75,2.7,3.89,3.86,2.62,3.81],[4.57,4.05,4.14,3.67,2.68,4.1,4.05,3.95,3.3,4.29,4.05,3.62,1.76,2.62,3.19,3.0,3.29,3.33,3.5,2.0,1.57,1.48,1.57,1.29,1.57,3.57,3.9,4.45,2.9,3.29],[4.62,4.08,4.51,3.97,3.11,4.0,3.26,4.09,2.73,4.59,4.24,4.35,3.1,3.42,4.49,3.22,2.94,3.09,4.13,1.69,1.67,1.56,1.87,1.12,1.44,3.87,3.72,4.57,3.86,4.43],[4.04,4.38,3.94,3.78,2.32,4.61,3.32,4.06,3.7,4.23,2.52,3.54,2.28,1.61,2.39,1.12,2.83,2.71,3.27,1.67,1.2,2.28,1.12,1.06,1.65,4.33,4.2,4.34,3.76,3.61],[4.53,4.28,3.9,3.6,3.75,4.67,2.54,3.72,2.86,4.28,3.79,2.73,2.6,1.53,2.78,2.17,2.54,2.43,2.27,1.6,2.11,1.63,1.49,1.24,1.31,2.48,3.24,3.39,2.28,2.85],[4.25,4.32,3.73,3.86,4.19,4.37,2.49,3.65,2.95,4.0,2.81,3.59,2.9,1.63,2.7,1.66,2.8,1.77,2.32,1.69,1.78,1.86,1.43,1.33,1.36,2.73,3.45,3.62,2.25,3.02],[4.8,3.8,3.61,4.38,3.25,3.46,3.03,3.64,3.74,4.34,3.36,4.65,4.96,2.65,3.77,3.17,4.01,3.13,3.89,2.01,1.45,1.65,1.44,1.09,1.43,3.5,3.86,4.66,3.49,3.9],[4.66,4.46,4.69,3.52,1.97,3.54,2.41,3.52,4.71,4.0,2.72,2.89,2.57,1.53,3.21,2.7,2.97,3.21,2.36,2.04,2.73,4.3,4.65,1.72,2.15,2.64,3.97,4.73,2.71,3.73],[4.26,3.72,3.34,4.05,3.68,4.46,2.64,3.71,3.33,3.82,3.57,3.97,2.16,1.6,3.01,3.08,2.41,2.19,2.47,1.65,1.79,1.89,1.27,1.13,1.17,2.43,3.13,3.48,2.57,2.75],[4.06,3.98,4.16,3.65,2.75,4.28,3.19,3.47,3.55,4.16,3.26,4.2,3.32,3.67,3.93,4.32,2.7,2.62,2.55,2.51,2.52,2.89,1.77,1.75,2.42,2.8,3.7,3.92,2.81,3.32],[4.46,3.54,3.86,3.38,2.55,2.36,3.65,4.5,4.43,4.63,3.72,4.32,2.71,2.59,3.37,2.95,3.91,3.3,3.2,4.71,4.28,3.21,3.97,3.63,3.49,3.74,3.67,4.15,3.27,3.49],[4.6,3.45,3.0,3.0,2.72,4.75,3.45,4.2,2.8,4.2,3.95,4.2,2.45,3.25,3.05,2.65,3.21,3.0,3.65,1.65,1.79,2.4,1.75,1.55,1.9,4.9,2.65,4.21,3.5,3.6],[4.38,3.27,3.46,3.4,2.46,2.25,3.38,4.14,4.38,3.82,3.51,3.44,2.66,2.83,3.01,3.36,3.73,2.91,3.54,3.71,4.06,4.36,4.06,3.98,2.91,3.54,3.88,4.15,3.82,3.39],[3.58,3.02,2.79,3.39,3.07,4.12,3.78,3.7,3.22,3.86,3.44,4.09,4.14,1.71,3.72,3.41,4.48,4.09,2.71,2.58,2.37,1.38,1.42,1.06,1.42,3.87,3.08,3.92,3.76,3.33],[4.22,3.43,3.13,2.81,2.41,2.4,3.63,3.82,3.77,3.81,2.89,3.12,2.51,2.25,2.82,2.58,3.5,2.86,2.51,3.94,3.92,3.81,3.86,3.48,2.45,3.34,2.74,3.98,2.73,2.7],[4.0,3.03,3.4,2.77,2.55,2.16,3.12,3.46,4.06,3.85,3.25,3.12,2.71,3.02,3.45,2.93,3.49,3.62,2.37,4.3,4.22,3.39,3.61,3.39,2.32,3.31,2.46,3.61,2.91,3.23],[4.21,2.44,2.88,2.82,2.68,3.33,3.3,3.52,2.68,3.95,3.05,4.34,4.33,2.94,3.81,3.58,3.52,3.56,3.19,1.73,1.66,1.69,1.86,1.47,1.48,3.69,2.62,3.76,3.6,3.07],[4.46,2.39,2.15,2.28,2.35,3.41,3.23,3.57,2.03,4.02,4.16,3.69,2.31,4.03,2.47,2.16,2.75,2.75,2.52,1.34,1.33,1.06,1.55,1.0,1.1,3.83,2.12,3.57,3.5,3.0]];

// ══════════════════════════ WORD CLOUD (S4) ════════════════════════════════
(function(){
  const words=[
    {t:'Analyze Data',sz:27,col:'#3B82F6',x:22,y:16},{t:'Research',sz:18,col:'#60A5FA',x:54,y:9},
    {t:'Communicate',sz:22,col:'#3B82F6',x:71,y:23},{t:'Write Reports',sz:16,col:'#94A3B8',x:11,y:36},
    {t:'Problem-Solve',sz:24,col:'#FBBF24',x:40,y:31},{t:'Teach & Train',sz:20,col:'#60A5FA',x:64,y:43},
    {t:'Care for Others',sz:25,col:'#A78BFA',x:27,y:52},{t:'Process Info',sz:15,col:'#475569',x:77,y:53},
    {t:'Monitor Systems',sz:14,col:'#475569',x:7,y:62},{t:'Creative Work',sz:22,col:'#FBBF24',x:49,y:60},
    {t:'Make Decisions',sz:20,col:'#3B82F6',x:33,y:70},{t:'Physical Tasks',sz:18,col:'#94A3B8',x:70,y:69},
    {t:'Schedule',sz:14,col:'#475569',x:17,y:80},{t:'Negotiate',sz:16,col:'#60A5FA',x:55,y:79},
    {t:'Document',sz:14,col:'#475569',x:82,y:37},{t:'Consult',sz:18,col:'#3B82F6',x:85,y:16},
    {t:'Compute',sz:20,col:'#60A5FA',x:5,y:26},{t:'Design',sz:22,col:'#A78BFA',x:45,y:19},
    {t:'Evaluate',sz:16,col:'#94A3B8',x:29,y:11},{t:'Coordinate',sz:18,col:'#3B82F6',x:61,y:64},
    {t:'Interpret',sz:20,col:'#FBBF24',x:15,y:69},{t:'Repair',sz:16,col:'#94A3B8',x:88,y:58},
    {t:'Organize',sz:14,col:'#475569',x:78,y:81},{t:'Advise',sz:18,col:'#60A5FA',x:42,y:87},
  ];
  const c=document.getElementById('wc-area');
  words.forEach((w,i)=>{
    const el=document.createElement('div');el.className='wrd';
    el.style.cssText=`left:${w.x}%;top:${w.y}%;font-size:${w.sz}px;color:${w.col};transition-delay:${i*40}ms;`;
    el.textContent=w.t;c.appendChild(el);
  });
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)c.querySelectorAll('.wrd').forEach(el=>{el.style.opacity='1';});});},{threshold:0.2});
  io.observe(document.getElementById('s4'));
})();

// ══════════════════════════ HEATMAP CONFIG ═════════════════════════════════
const HM_COLORSCALE=[[0.0,"#0F172A"],[0.25,"#1E3A5F"],[0.5,"#3B82F6"],[0.75,"#F59E0B"],[1.0,"#EF4444"]];
const HM_LAYOUT_BASE={
  paper_bgcolor:"#13141a",
  plot_bgcolor:"#13141a",
  font:{family:"IBM Plex Mono, monospace",color:"#F1F5F9"},
  margin:{l:280,r:10,t:30,b:120},
  xaxis:{tickfont:{color:"#94A3B8",size:9},tickangle:-40,side:"bottom",color:"#94A3B8"},
  yaxis:{tickfont:{color:"#F1F5F9",size:10},color:"#F1F5F9",autorange:"reversed"},
  shapes:[
    {type:"line",x0:8.5,x1:8.5,y0:-0.5,y1:24.5,line:{color:"#13141a",width:3}},
    {type:"line",x0:18.5,x1:18.5,y0:-0.5,y1:24.5,line:{color:"#13141a",width:3}},
    {type:"line",x0:24.5,x1:24.5,y0:-0.5,y1:24.5,line:{color:"#13141a",width:3}}
  ],
  annotations:[
    {text:"<b>PREDICTABLE</b>",x:4.0,y:25.3,yref:"y",showarrow:false,font:{color:"#A78BFA",size:11}},
    {text:"<b>HUMAN</b>",x:13.5,y:25.3,yref:"y",showarrow:false,font:{color:"#3B82F6",size:11}},
    {text:"<b>PHYSICAL</b>",x:21.5,y:25.3,yref:"y",showarrow:false,font:{color:"#94A3B8",size:11}},
    {text:"<b>CREATIVE</b>",x:27.0,y:25.3,yref:"y",showarrow:false,font:{color:"#10B981",size:11}}
  ]
};
const PLOTLY_CONFIG={displayModeBar:false,responsive:true};

function hmTrace(selRow){
  return {
    type:"heatmap",
    x:HM_X, y:HM_Y, z:HM_Z,
    colorscale:HM_COLORSCALE, zmin:1, zmax:5, xgap:1, ygap:1,
    hovertemplate:"<b>%{y}</b><br>%{x}<br>Score: <b>%{z:.2f}</b><extra></extra>",
    colorbar:{title:{text:"Importance<br>(1–5)",font:{color:"#F1F5F9",size:10}},tickfont:{color:"#F1F5F9",size:9},outlinecolor:"#334155",len:0.9},
    selectedpoints: selRow!=null ? [selRow] : undefined,
  };
}

function plotlyHM(divId, selRow, onClickFn) {
  const el = document.getElementById(divId);
  const W = el.offsetWidth || 700;
  const H = el.offsetHeight || 500;
  const shapes = [...HM_LAYOUT_BASE.shapes];
  if (selRow != null) {
    shapes.push({
      type:"rect", x0:-0.5, x1:29.5,
      y0:selRow-0.5, y1:selRow+0.5,
      fillcolor:"rgba(251,191,36,0.08)",
      line:{color:"#FBBF24",width:2},
      layer:"above"
    });
  }
  const fullLayout = {...HM_LAYOUT_BASE, shapes, width:W, height:H};
  Plotly.newPlot(divId, [hmTrace(selRow)], fullLayout, {...PLOTLY_CONFIG,responsive:false});
  if (onClickFn) {
    el.on('plotly_click', function(data) {
      if (!data.points || !data.points.length) return;
      const jobName = data.points[0].y;
      const ji = HM_Y.indexOf(jobName);
      if (ji >= 0) onClickFn(ji);
    });
  }
}

// ══════════════════════════ STORY HEATMAP (S5) ═════════════════════════════
(function(){
  let done=false;
  function renderS5(){
    const el=document.getElementById('hm-div-story');
    const layout5={...HM_LAYOUT_BASE, margin:{l:280,r:100,t:30,b:120},
      width:el.offsetWidth, height:el.offsetHeight||500};
    Plotly.newPlot('hm-div-story',[hmTrace(null)],layout5,{...PLOTLY_CONFIG,responsive:false});
  }
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting&&!done){done=true;
    setTimeout(renderS5,120);
  }});},{threshold:0.1});
  io.observe(document.getElementById('s5'));
  window.addEventListener('resize',()=>{if(done){setTimeout(renderS5,50);}});
})();

// ══════════════════════════ INTERACTIVE HEATMAP + RADAR (S6) ═══════════════
// Radar dimension mapping:
// 0=GetInfo,1=ProcessInfo,2=EvalCompliance,3=Document,4=Admin,
// 5=Computers,6=Schedule,7=OrganizePlan,8=Monitor,9=CommInternal,
// 10=CommExternal,11=Relationships,12=CareAssist,13=SellInfluence,
// 14=Negotiate,15=Public,16=TeachTrain,17=Coach,18=Consult,
// 19=Physical,20=MoveObjects,21=Machines,22=VehiclesEquip,
// 23=RepairMech,24=RepairElec,25=Creative,26=Analyze,
// 27=Decisions,28=Strategy,29=Interpret
let radarCh=null, selJ=0;
function getRadVals(ji){
  const z=HM_Z[ji];
  return [
    (z[0]+z[1]+z[26])/3,
    z[25],
    z[27],
    (z[18]+z[29])/2,
    z[12],
    (z[9]+z[10]+z[15])/3,
    z[5],
    (z[19]+z[20])/2,
    (z[21]+z[22]+z[23]+z[24])/4,
  ];
}
function updateRadar(ji){
  selJ=ji;
  document.getElementById('s6-job-lbl').textContent=HM_Y[ji];
  plotlyHM('hm-div-interactive', ji, updateRadar);
  if(radarCh){
    radarCh.data.datasets[0].data=getRadVals(ji);
    radarCh.data.datasets[0].label=HM_Y[ji];
    radarCh.update();
  }
}
(function(){
  let done=false;
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting&&!done){done=true;setTimeout(()=>{
    plotlyHM('hm-div-interactive', selJ, updateRadar);
    document.getElementById('s6-job-lbl').textContent=HM_Y[selJ];
    radarCh=new Chart(document.getElementById('radar-canvas').getContext('2d'),{
      type:'radar',
      data:{
        labels:['Data Analysis','Creative Thinking','Decision Making','Consulting/Advising','Care & Support','Public Interaction','Computer Use','Physical Work','Machine Operation'],
        datasets:[{
          label:HM_Y[selJ],data:getRadVals(selJ),
          backgroundColor:'rgba(59,130,246,0.15)',borderColor:'#3B82F6',
          borderWidth:2,pointBackgroundColor:'#3B82F6',pointRadius:4
        }]
      },
      options:{responsive:true,maintainAspectRatio:false,
        scales:{r:{min:0,max:5,ticks:{display:false},
          grid:{color:'rgba(255,255,255,0.08)'},
          angleLines:{color:'rgba(255,255,255,0.1)'},
          pointLabels:{color:'#94A3B8',font:{family:'IBM Plex Mono',size:10}}
        }},
        plugins:{legend:{display:false}}
      }
    });
  },80);}});},{threshold:0.12});
  io.observe(document.getElementById('s6'));
  window.addEventListener('resize',()=>{if(done)plotlyHM('hm-div-interactive',selJ,updateRadar);});
})();
