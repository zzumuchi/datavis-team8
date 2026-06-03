// ══════════════════════════ DATA (Part 3 + Conclusion) ══════════════════
const LINE_D=[{year:2022,aiPct:8,empM:153.0,ai:100.0,emp:100.0},{year:2023,aiPct:18,empM:156.0,ai:225.0,emp:102.0},{year:2024,aiPct:28,empM:158.0,ai:350.0,emp:103.3},{year:2025,aiPct:37,empM:159.4,ai:462.5,emp:104.2}];
const BUBBLE_DATA={cognitive:[{x:133080,y:15.8,r:15.2,o:"Software developers"},{x:81680,y:4.6,r:14.7,o:"Accountants and auditors"},{x:81270,y:3.0,r:12.9,o:"Business operations specialists, a"},{x:101190,y:8.8,r:12.1,o:"Management analysts"},{x:100750,y:5.6,r:12.0,o:"Project management specialists"},{x:72910,y:6.2,r:11.4,o:"Human resources specialists"},{x:76950,y:6.7,r:11.4,o:"Market research analysts and marke"},{x:151160,y:4.1,r:10.9,o:"Lawyers"},{x:60340,y:-3.7,r:10.0,o:"Computer user support specialists"},{x:75650,y:5.8,r:8.5,o:"Buyers and purchasing agents"},{x:103790,y:8.7,r:8.5,o:"Computer systems analysts"},{x:108970,y:8.2,r:8.0,o:"Computer occupations, all other"},{x:65850,y:10.8,r:7.9,o:"Training and development specialis"},{x:78420,y:3.0,r:7.6,o:"Compliance officers"},{x:61010,y:0.2,r:7.2,o:"Paralegals and legal assistants"},{x:99590,y:5.0,r:7.1,o:"Civil engineers"},{x:101350,y:5.7,r:7.1,o:"Financial and investment analysts"},{x:76790,y:-5.1,r:7.0,o:"Claims adjusters, examiners, and i"},{x:101140,y:11.0,r:6.9,o:"Industrial engineers"},{x:96800,y:-4.2,r:6.7,o:"Network and computer systems admin"},{x:102140,y:9.6,r:6.7,o:"Personal financial advisors"},{x:74180,y:1.7,r:6.4,o:"Loan officers"},{x:112590,y:33.5,r:5.8,o:"Data scientists"},{x:124910,y:28.5,r:5.0,o:"Information security analysts"},{x:91290,y:21.5,r:3.9,o:"Operations research analysts"},{x:90400,y:18.5,r:3,o:"Financial examiners"},{x:140910,y:19.7,r:3,o:"Computer and information research "},{x:125770,y:21.8,r:3,o:"Actuaries"}],care:[{x:34900,y:17.0,r:24,o:"Home health and personal care aide"},{x:93600,y:4.9,r:21.6,o:"Registered nurses"},{x:39530,y:2.3,r:14.1,o:"Nursing assistants"},{x:44200,y:12.5,r:10.5,o:"Medical assistants"},{x:62340,y:2.6,r:9.5,o:"Licensed practical and licensed vo"},{x:43460,y:6.4,r:8.2,o:"Pharmacy technicians"},{x:59190,y:16.8,r:8.1,o:"Substance abuse, behavioral disord"},{x:45120,y:6.4,r:7.9,o:"Social and human service assistant"},{x:58570,y:3.4,r:7.4,o:"Child, family, and school social w"},{x:47300,y:6.4,r:7.2,o:"Dental assistants"},{x:65140,y:3.5,r:7.2,o:"Educational, guidance, and career "},{x:61890,y:1.7,r:6.9,o:"Clinical laboratory technologists "},{x:137480,y:4.6,r:6.8,o:"Pharmacists"},{x:129210,y:40.1,r:6.6,o:"Nurse practitioners"},{x:133260,y:20.4,r:4.7,o:"Physician assistants"},{x:42590,y:20.0,r:4.5,o:"Psychiatric technicians"},{x:65510,y:22.0,r:3.9,o:"Physical therapist assistants"},{x:44080,y:19.8,r:3.3,o:"Ophthalmic medical technicians"},{x:68340,y:19.2,r:3,o:"Occupational therapy assistants"},{x:61560,y:18.4,r:3,o:"Hearing aid specialists"}],routine:[{x:34580,y:-0.5,r:23.2,o:"Retail salespersons"},{x:31190,y:-9.9,r:20.8,o:"Cashiers"},{x:42830,y:-5.5,r:19.6,o:"Customer service representatives"},{x:43630,y:-6.7,r:19.1,o:"Office clerks, general"},{x:46290,y:-1.6,r:16.3,o:"Secretaries and administrative ass"},{x:49210,y:-5.8,r:14.9,o:"Bookkeeping, accounting, and audit"},{x:66140,y:-0.3,r:14.6,o:"First-line supervisors of office a"},{x:42210,y:-0.1,r:14.2,o:"Miscellaneous assemblers and fabri"},{x:47320,y:-5.0,r:14.0,o:"First-line supervisors of retail s"},{x:66780,y:0.3,r:13.4,o:"Sales representatives, wholesale a"},{x:66260,y:3.1,r:13.0,o:"Sales representatives of services,"},{x:37230,y:0.0,r:11.8,o:"Receptionists and information cler"},{x:43190,y:-7.7,r:10.9,o:"Shipping, receiving, and inventory"},{x:44640,y:4.2,r:10.8,o:"Medical secretaries and administra"},{x:71190,y:1.2,r:9.8,o:"First-line supervisors of producti"},{x:47460,y:0.0,r:9.1,o:"Inspectors, testers, sorters, samp"},{x:60370,y:3.7,r:8.8,o:"Insurance sales agents"},{x:78140,y:3.3,r:8.4,o:"Securities, commodities, and finan"},{x:74260,y:-1.6,r:8.3,o:"Executive secretaries and executiv"},{x:51000,y:2.2,r:7.9,o:"Welders, cutters, solderers, and b"},{x:47170,y:-0.4,r:7.7,o:"Billing and posting clerks"},{x:56320,y:3.1,r:7.6,o:"Real estate sales agents"},{x:38540,y:3.2,r:7.5,o:"Counter and rental clerks"},{x:57770,y:-1.8,r:7.3,o:"Production, planning, and expediti"},{x:40900,y:4.5,r:7.2,o:"Packaging and filling machine oper"},{x:39340,y:-12.9,r:6.9,o:"Tellers"},{x:84130,y:0.0,r:6.6,o:"First-line supervisors of non-reta"},{x:57490,y:-3.5,r:6.6,o:"Postal service mail carriers"},{x:100070,y:1.9,r:6.4,o:"Sales representatives, wholesale a"},{x:39850,y:-25.9,r:4.4,o:"Data entry keyers"},{x:34410,y:-22.1,r:3.0,o:"Telemarketers"},{x:47850,y:-36.1,r:3,o:"Word processors and typists"},{x:52540,y:-21.1,r:3,o:"Engine and other machine assembler"},{x:38370,y:-26.3,r:3,o:"Switchboard operators, including a"},{x:45700,y:-25.9,r:3,o:"Foundry mold and coremakers"},{x:41690,y:-21.2,r:3,o:"Grinding and polishing workers, ha"},{x:49240,y:-18.9,r:3,o:"Forging machine setters, operators"},{x:38800,y:-18.1,r:3,o:"Cutters and trimmers, hand"},{x:46630,y:-19.6,r:3,o:"Drilling and boring machine tool s"},{x:39130,y:-27.5,r:3,o:"Telephone operators"},{x:62700,y:-18.2,r:3,o:"Model makers, metal and plastic"},{x:54540,y:-24.4,r:3,o:"Patternmakers, metal and plastic"}],other:[{x:30480,y:6.1,r:22.8,o:"Fast food and counter workers"},{x:102950,y:4.4,r:22.6,o:"General and operations managers"},{x:38940,y:1.5,r:20.2,o:"Laborers and freight, stock, and m"},{x:37090,y:8.5,r:19.5,o:"Stockers and order fillers"},{x:35930,y:2.0,r:18.3,o:"Janitors and cleaners, except maid"},{x:33760,y:-0.7,r:17.9,o:"Waiters and waitresses"},{x:57440,y:4.0,r:17.5,o:"Heavy and tractor-trailer truck dr"},{x:48620,y:3.8,r:15.0,o:"Maintenance and repair workers, ge"},{x:36830,y:14.9,r:14.2,o:"Cooks, restaurant"},{x:46730,y:7.3,r:14.1,o:"Construction laborers"},{x:35240,y:-1.5,r:14.0,o:"Teaching assistants, except postse"},{x:62340,y:-2.0,r:14.0,o:"Elementary school teachers, except"},{x:34660,y:0.4,r:13.6,o:"Maids and housekeeping cleaners"},{x:136550,y:4.5,r:13.5,o:"Managers, all other"},{x:38370,y:0.4,r:13.2,o:"Security guards"},{x:42010,y:6.0,r:12.9,o:"First-line supervisors of food pre"},{x:38090,y:3.6,r:12.8,o:"Landscaping and groundskeeping wor"},{x:64580,y:-1.6,r:12.3,o:"Secondary school teachers, except "},{x:44140,y:7.3,r:12.2,o:"Light truck drivers"},{x:32050,y:-2.9,r:11.7,o:"Childcare workers"},{x:59310,y:4.5,r:11.5,o:"Carpenters"},{x:78690,y:5.3,r:11.2,o:"First-line supervisors of construc"},{x:34220,y:-3.4,r:11.1,o:"Food preparation workers"},{x:161700,y:14.8,r:10.9,o:"Financial managers"},{x:87980,y:-1.3,r:10.7,o:"Farmers, ranchers, and other agric"},{x:62350,y:9.5,r:10.6,o:"Electricians"},{x:49670,y:4.2,r:10.5,o:"Automotive service technicians and"},{x:46390,y:1.1,r:10.4,o:"Industrial truck and tractor opera"},{x:33530,y:5.9,r:10.2,o:"Bartenders"},{x:76290,y:3.1,r:9.8,o:"Police and sheriff's patrol office"},{x:30160,y:-13.5,r:9.6,o:"Cooks, fast food"},{x:171200,y:15.2,r:9.6,o:"Computer and information systems m"},{x:62970,y:-2.0,r:9.3,o:"Middle school teachers, except spe"},{x:138060,y:4.7,r:9.2,o:"Sales managers"},{x:78300,y:3.1,r:9.2,o:"First-line supervisors of mechanic"},{x:117960,y:23.2,r:9.2,o:"Medical and health services manage"},{x:61890,y:3.7,r:9.1,o:"First-line supervisors of transpor"},{x:35580,y:-5.4,r:9.0,o:"Packers and packagers, hand"},{x:35250,y:5.6,r:8.9,o:"Hairdressers, hairstylists, and co"},{x:37120,y:4.1,r:8.7,o:"Preschool teachers, except special"},{x:106980,y:8.7,r:8.7,o:"Construction managers"},{x:32670,y:6.3,r:8.5,o:"Dining room and cafeteria attendan"},{x:38470,y:1.6,r:8.4,o:"Substitute teachers, short-term"},{x:35690,y:-3.3,r:8.3,o:"Farmworkers and laborers, crop, nu"},{x:62970,y:4.5,r:8.3,o:"Plumbers, pipefitters, and steamfi"},{x:58710,y:3.6,r:8.2,o:"Operating engineers and other cons"},{x:33670,y:0.2,r:8.1,o:"Dishwashers"},{x:66700,y:3.6,r:8.0,o:"Property, real estate, and communi"},{x:36450,y:2.0,r:8.0,o:"Cooks, institution and cafeteria"},{x:37130,y:8.8,r:7.9,o:"Driver/sales workers"},{x:63760,y:16.1,r:7.8,o:"Industrial machinery mechanics"},{x:30380,y:-1.5,r:7.7,o:"Hosts and hostesses, restaurant, l"},{x:59810,y:8.1,r:7.6,o:"Heating, air conditioning, and ref"},{x:45590,y:3.7,r:7.6,o:"Self-enrichment teachers"},{x:35270,y:3.9,r:7.5,o:"Cleaners of vehicles and equipment"},{x:161030,y:6.6,r:7.5,o:"Marketing managers"},{x:30490,y:3.4,r:7.3,o:"Amusement and recreation attendant"},{x:33470,y:12.1,r:7.3,o:"Animal caretakers"},{x:57970,y:-7.8,r:7.3,o:"Correctional officers and jailers"},{x:47040,y:0.2,r:7.3,o:"Bus drivers, school"},{x:46180,y:11.9,r:7.1,o:"Exercise trainers and group fitnes"},{x:65310,y:6.4,r:7.0,o:"Food service managers"},{x:59530,y:3.4,r:6.9,o:"Firefighters"},{x:48660,y:3.8,r:6.9,o:"Painters, construction and mainten"},{x:104070,y:-1.5,r:6.8,o:"Education administrators, kinderga"},{x:35380,y:4.1,r:6.7,o:"Recreation workers"},{x:60640,y:2.4,r:6.6,o:"Bus and truck mechanics and diesel"},{x:69780,y:4.8,r:6.6,o:"Public relations specialists"},{x:206420,y:4.3,r:6.5,o:"Chief executives"},{x:45920,y:6.4,r:6.5,o:"Coaches and scouts"},{x:51860,y:42.1,r:3,o:"Solar photovoltaic installers"},{x:62580,y:49.9,r:3,o:"Wind turbine service technicians"},{x:68860,y:-22.3,r:3,o:"Loading and moving machine operato"},{x:76640,y:-34.2,r:3,o:"Roof bolters, mining"}]};
// Full 974-occupation dataset from BLS/O*NET (5. conclusion.html)
// Format: [group_idx, name, auto_chance%, ai_exposure, auto_task%, aug_task%, watch_task%, stable_task%, [auto_tasks], [aug_tasks]]
const DIAG_GROUPS=["Architecture & Engineering", "Arts & Media", "Building & Grounds", "Business & Finance", "Community & Social Services", "Computer & Math", "Construction", "Education & Library", "Farming & Forestry", "Food Service", "Healthcare", "Healthcare Support", "Installation & Repair", "Legal", "Life & Social Sciences", "Management", "Office & Admin", "Personal Care", "Production", "Protective Services", "Sales", "Transportation"];
const DIAG_JOBS_ALL=[
[0,"Architects, Except Landscape and Naval",1.8,1.047,0,12,0,88,[],["Develop marketing materials", "Prepare contract documents", "Prepare information regarding design"]],
[0,"Cartographers and Photogrammetrists",88,0.817,14,0,86,0,["Determine guidelines", "Determine map content and layout"],[]],
[0,"Geodetic Surveyors",38,0.146,0,0,0,100,[],[]],
[0,"Landscape Architects",5,1.034,0,11,0,89,[],["Develop marketing materials", "Present project plans or designs"]],
[0,"Surveyors",38,0.146,0,9,0,91,[],["Analyze survey objectives and specifications", "Develop criteria"]],
[0,"Aerospace Engineers",1.7,1.339,0,6,0,94,[],["Write technical reports or other"]],
[0,"Agricultural Engineers",49,0.941,0,7,0,93,[],["Conduct educational programs"]],
[0,"Biomedical Engineers",4,0.987,0,11,0,89,[],["Teach biomedical engineering or disseminate", "Conduct research"]],
[0,"Chemical Engineers",1.7,1.341,0,8,0,92,[],["Troubleshoot problems with chemical manufacturing"]],
[0,"Civil Engineers",1.9,1.283,0,0,0,100,[],[]],
[0,"Computer Hardware Engineers",22,1.142,0,22,0,78,[],["Analyze information", "Store retrieve", "Write detailed functional specifications"]],
[0,"Electrical Engineers",10,1.127,0,27,0,73,[],["Investigate customer or public complaints", "Conduct field surveys or study", "Integrate electrical systems with renewable"]],
[0,"Electronics Engineers, Except Computer",3,0.665,0,14,0,86,[],["Design electronic components", "Analyze electronics system requirements", "Prepare necessary criteria"]],
[0,"Environmental Engineers",1.8,1.344,0,0,0,100,[],[]],
[0,"Radio Frequency Identification Device Specialists",3,0.665,0,0,0,100,[],[]],
[0,"Transportation Engineers",1.9,1.283,0,8,0,92,[],["Investigate test specific construction project", "Model transportation scenarios"]],
[0,"Water/Wastewater Engineers",1.8,1.344,0,0,0,100,[],[]],
[0,"Automotive Engineers",1.1,1.005,0,12,0,88,[],["Write review", "Develop calibration methodologies", "Prepare present technical or project"]],
[0,"Biochemical Engineers",1.4,0.788,0,11,0,89,[],["Prepare technical reports", "Read current scientific or trade", "Modify control biological systems"]],
[0,"Energy Engineers",1.4,0.788,0,10,0,90,[],["Analyze interpret", "Promote awareness or use of"]],
[0,"Fire-Prevention and Protection Engineers",3,0.995,0,0,0,100,[],[]],
[0,"Fuel Cell Engineers",1.1,1.005,0,0,0,100,[],[]],
[0,"Human Factors Engineers and Ergonomists",3,1.138,0,19,0,81,[],["Investigate theoretical or conceptual issues", "Analyze complex systems", "Operate testing equipment"]],
[0,"Industrial Engineers",3,1.138,0,0,0,100,[],[]],
[0,"Industrial Safety and Health Engineers",3,0.995,0,0,0,100,[],[]],
[0,"Manufacturing Engineers",1.4,0.788,0,0,0,100,[],[]],
[0,"Marine Architects",1,0.547,0,0,0,100,[],[]],
[0,"Marine Engineers",1,0.547,0,9,0,91,[],["Prepare plans", "Confer with research personnel"]],
[0,"Materials Engineers",2,1.037,0,0,0,100,[],[]],
[0,"Mechanical Engineers",1.1,1.005,0,4,0,96,[],["Research analyze customer design proposals"]],
[0,"Mechatronics Engineers",1.4,0.788,0,13,0,87,[],["Analyze existing development or manufacturing", "Design engineering systems", "Provide consultation or training"]],
[0,"Microsystems Engineers",1.4,0.788,0,16,0,84,[],["Investigate characteristics such as cost", "Conduct experimental or virtual studies", "Develop validate specialized materials characterization"]],
[0,"Mining and Geological Engineers, Including Mining Safety Engineers",14,1.347,0,0,0,100,[],[]],
[0,"Nanosystems Engineers",1.4,0.788,0,16,0,84,[],["Write proposals", "Prepare reports", "Provide scientific or technical guidance"]],
[0,"Nuclear Engineers",7,1.303,0,15,0,85,[],["Synthesize analyses of test results", "Design direct nuclear research projects", "Analyze available data and consult"]],
[0,"Petroleum Engineers",16,1.248,0,0,0,100,[],[]],
[0,"Photonics Engineers",1.4,0.788,0,12,0,88,[],["Analyze system performance or operational", "Write reports or research proposals", "Document design processes including objectives"]],
[0,"Product Safety Engineers",3,0.995,0,0,0,100,[],[]],
[0,"Robotics Engineers",1.4,0.788,0,12,0,88,[],["Debug robotics programs", "Write algorithms or programming code", "Review approve designs"]],
[0,"Solar Energy Systems Engineers",1.4,0.788,0,0,0,100,[],[]],
[0,"Validation Engineers",1.4,0.788,0,5,0,95,[],["Create populate"]],
[0,"Wind Energy Engineers",1.4,0.788,0,0,0,100,[],[]],
[0,"Aerospace Engineering and Operations Technicians",48,0.391,0,0,0,100,[],[]],
[0,"Architectural Drafters",52,0.923,6,0,94,0,["Prepare cost estimates"],[]],
[0,"Automotive Engineering Technicians",38,-0.119,0,11,0,89,[],["Document test results,", "Set up mechanical"]],
[0,"Civil Drafters",52,0.923,7,0,93,0,["Explain drawings"],[]],
[0,"Civil Engineering Technicians",75,0.932,15,0,85,0,["Conduct materials test and analysis", "Prepare reports and document project"],[]],
[0,"Electrical Drafters",81,0.91,12,0,88,0,["Review completed construction drawings and", "Explain drawings"],[]],
[0,"Electrical Engineering Technicians",0,0.352,0,8,0,92,[],["Write engineering specifications", "Build calibrate"]],
[0,"Electrical Engineering Technologists",24,0.194,0,5,0,95,[],["Diagnose test"]],
[0,"Electro-Mechanical Technicians",81,-0.304,8,0,92,0,["Test performance of electromechanical assemblies,"],[]],
[0,"Electromechanical Engineering Technologists",24,0.194,0,12,0,88,[],["Select use laboratory", "Conduct statistical studies"]],
[0,"Electronic Drafters",81,0.91,14,0,86,0,["Key program specified commands and", "Review work orders and procedural"],[]],
[0,"Electronics Engineering Technicians",0,0.352,0,26,0,74,[],["Write computer or microprocessor software", "Write reports or record data", "Read blueprints"]],
[0,"Electronics Engineering Technologists",24,0.194,0,22,0,78,[],["Set up and operate specialized", "Modify maintain", "Prepare maintain design"]],
[0,"Environmental Engineering Technicians",25,0.044,0,8,0,92,[],["Review technical documents", "Record laboratory or field data"]],
[0,"Fuel Cell Technicians",24,0.194,0,0,0,100,[],[]],
[0,"Industrial Engineering Technicians",3,0.611,0,0,0,100,[],[]],
[0,"Industrial Engineering Technologists",24,0.194,0,4,0,96,[],["Conduct statistical studies"]],
[0,"Manufacturing Engineering Technologists",24,0.194,0,0,0,100,[],[]],
[0,"Manufacturing Production Technicians",24,0.194,0,3,0,97,[],["Calibrate adjust equipment"]],
[0,"Mapping Technicians",96,0.085,0,0,100,0,[],[]],
[0,"Mechanical Drafters",68,0.841,7,0,93,0,["Review analyze specifications"],[]],
[0,"Mechanical Engineering Technicians",38,-0.119,0,6,0,94,[],["Record test procedures and results"]],
[0,"Mechanical Engineering Technologists",24,0.194,0,10,0,90,[],["Test machines", "Conduct statistical studies"]],
[0,"Nanotechnology Engineering Technicians",24,0.194,0,5,0,95,[],["Produce detailed images or measurement"]],
[0,"Nanotechnology Engineering Technologists",24,0.194,0,6,0,94,[],["Prepare detailed verbal or written"]],
[0,"Non-Destructive Testing Specialists",24,0.194,0,12,0,88,[],["Document non-destructive testing (NDT) methods", "Evaluate material properties,"]],
[0,"Photonics Technicians",24,0.194,0,0,0,100,[],[]],
[0,"Robotics Technicians",81,-0.304,4,0,96,0,["Modify computer-controlled robot movements"],[]],
[0,"Surveying Technicians",96,0.085,0,0,100,0,[],[]],
[1,"Art Directors",2,1.023,0,31,0,69,[],["Create custom illustrations or other", "Confer with clients", "Mark up"]],
[1,"Commercial and Industrial Designers",4,0.867,0,24,0,76,[],["Read publications", "Advise corporations on issues involving", "Present designs and reports"]],
[1,"Craft Artists",4,-0.93,0,20,0,80,[],["Develop concepts or creative ideas", "Create functional or decorative objects", "Confer with customers"]],
[1,"Fashion Designers",2,0.58,0,10,0,90,[],["Read scripts and consult directors", "Sketch rough and detailed drawings"]],
[1,"Fine Artists, Including Painters, Sculptors, and Illustrators",4,-0.569,0,23,0,77,[],["Integrate develop visual elements", "Monitor events", "Create finished art work as"]],
[1,"Floral Designers",5,-0.272,0,0,0,100,[],[]],
[1,"Graphic Designers",8,0.716,0,18,0,82,[],["Determine size and arrangement of", "Create designs", "Use computer software"]],
[1,"Interior Designers",2,1.122,0,9,0,91,[],["Advise client on interior design"]],
[1,"Merchandise Displayers and Window Trimmers",48,-1.001,0,0,0,100,[],[]],
[1,"Multimedia Artists and Animators",1.5,0.706,0,21,0,79,[],["Use models", "Develop briefings", "Design complex graphics and animation,"]],
[1,"Set and Exhibit Designers",0.6,-0.052,0,4,0,96,[],["Examine objects"]],
[1,"Actors",37,0.159,0,42,0,58,[],["Write original or adapted material", "Portray interpret roles,", "Perform humorous and serious interpretations"]],
[1,"Athletes and Sports Competitors",28,-1.814,0,0,0,100,[],[]],
[1,"Choreographers",0.4,-1.576,0,0,0,100,[],[]],
[1,"Coaches and Scouts",1.3,0.117,0,4,0,96,[],["Explain enforce safety rules and"]],
[1,"Dancers",13,-2.67,0,0,0,100,[],[]],
[1,"Directors- Stage, Motion Pictures, Television, and Radio",2,0.939,0,24,0,76,[],["Compile scripts", "Consult with writers", "Select plays or scripts"]],
[1,"Music Composers and Arrangers",1.5,0.883,0,23,0,77,[],["Write changes directly into compositions", "Study films or scripts", "Create original musical forms"]],
[1,"Music Directors",1.5,0.883,0,0,0,100,[],[]],
[1,"Musicians, Instrumental",7,-0.004,0,7,0,93,[],["Compose original music such as"]],
[1,"Producers",2,0.939,0,12,0,88,[],["Compose edit scripts or provide", "Write edit news stories from", "Research production topics"]],
[1,"Program Directors",2,0.939,0,0,0,100,[],[]],
[1,"Singers",7,-0.004,0,15,0,85,[],["Interpret modify music", "Compose songs or create vocal"]],
[1,"Talent Directors",2,0.939,0,0,0,100,[],[]],
[1,"Technical Directors/Managers",2,0.939,0,0,0,100,[],[]],
[1,"Umpires, Referees, and Other Sports Officials",98,-0.033,0,0,100,0,[],[]],
[1,"Broadcast News Analysts",7,1.164,0,25,0,75,[],["Select material most pertinent", "Analyze interpret news and information"]],
[1,"Copy Writers",4,0.988,0,50,0,50,[],["Edit rewrite existing copy as", "Write advertising copy", "Write articles"]],
[1,"Editors",6,1.128,0,35,0,65,[],["Prepare rewrite and edit copy", "Read evaluate and edit manuscripts", "Develop story or content ideas"]],
[1,"Interpreters and Translators",38,1.111,0,35,0,65,[],["Read written materials", "Check original texts or confer", "Translate messages simultaneously or consecutively"]],
[1,"Poets, Lyricists and Creative Writers",4,0.988,0,56,0,44,[],["Develop factors such as themes", "Write narrative", "Write humorous material"]],
[1,"Public Address System and Other Announcers",72,0.665,0,0,100,0,[],[]],
[1,"Public Relations Specialists",18,1.285,0,50,0,50,[],["Prepare edit organizational publications", "Write press releases or other", "Study the objectives"]],
[1,"Radio and Television Announcers",10,0.849,0,5,0,95,[],["Select program content"]],
[1,"Reporters and Correspondents",11,1.187,0,30,0,70,[],["Write reviews of literary", "Communicate with readers", "Review written"]],
[1,"Technical Writers",89,1.184,40,0,60,0,["Edit standardize", "Organize material and complete writing", "Review published materials and recommend"],[]],
[1,"Audio and Video Equipment Technicians",55,-0.012,17,0,83,0,["Determine formats", "Develop manuals", "Produce rough and finished graphics"],[]],
[1,"Broadcast Technicians",74,0.122,3,0,97,0,["Prepare reports outlining past and"],[]],
[1,"Camera Operators, Television, Video, and Motion Picture",60,-0.447,0,0,100,0,[],[]],
[1,"Film and Video Editors",31,0.986,0,17,0,83,[],["Study scripts", "Program computerized graphic effects", "Confer with producers and directors"]],
[1,"Photographers",2,-0.168,0,7,0,93,[],["Determine desired images and picture", "Manipulate enhance scanned or digital"]],
[1,"Radio Operators",98,0.926,0,0,100,0,[],[]],
[1,"Sound Engineering Technicians",13,0.472,0,0,0,100,[],[]],
[2,"First-Line Supervisors of Housekeeping and Janitorial Workers",94,-0.585,8,0,92,0,["Recommend changes", "Select the most suitable cleaning"],[]],
[2,"First-Line Supervisors of Landscaping, Lawn Service, and Groundskeeping Workers",0,-0.555,0,4,0,96,[],["Answer inquiries from current or"]],
[2,"Janitors and Cleaners, Except Maids and Housekeeping Cleaners",66,-1.436,0,0,100,0,[],[]],
[2,"Maids and Housekeeping Cleaners",69,-1.481,4,0,96,0,["Care for children or elderly"],[]],
[2,"Pest Control Workers",66,-0.726,0,0,100,0,[],[]],
[2,"Landscaping and Groundskeeping Workers",95,-1.824,0,0,100,0,[],[]],
[2,"Pesticide Handlers, Sprayers, and Applicators, Vegetation",97,-0.885,0,0,100,0,[],[]],
[2,"Tree Trimmers and Pruners",77,-1.727,0,0,100,0,[],[]],
[3,"Agents and Business Managers of Artists, Performers, and Athletes",24,1.069,0,23,0,77,[],["Confer with clients", "Keep informed of industry trends", "Advise clients on financial and"]],
[3,"Buyers and Purchasing Agents, Farm Products",87,0.769,0,0,100,0,[],[]],
[3,"Claims Examiners, Property and Casualty Insurance",98,1.274,0,0,100,0,[],[]],
[3,"Coroners",8,0.698,0,0,0,100,[],[]],
[3,"Cost Estimators",57,1.368,8,0,92,0,["Consult with clients"],[]],
[3,"Environmental Compliance Inspectors",8,0.698,0,0,0,100,[],[]],
[3,"Equal Opportunity Representatives and Officers",8,0.698,0,5,0,95,[],["Provide information"]],
[3,"Farm Labor Contractors",97,-0.435,0,0,100,0,[],[]],
[3,"Government Property Inspectors and Investigators",8,0.698,0,17,0,83,[],["Examine records", "Prepare correspondence"]],
[3,"Human Resources Specialists",0,1.36,0,24,0,76,[],["Contact job applicants", "Interpret explain human resources policies", "Evaluate recruitment or selection criteria"]],
[3,"Insurance Adjusters, Examiners, and Investigators",98,1.274,8,0,92,0,["Analyze information gathered"],[]],
[3,"Insurance Appraisers, Auto Damage",98,0.663,0,0,100,0,[],[]],
[3,"Labor Relations Specialists",0,1.335,0,4,0,96,[],["Prepare reports or presentations"]],
[3,"Licensing Examiners and Inspectors",8,0.698,0,0,0,100,[],[]],
[3,"Logisticians",1.2,1.297,0,24,0,76,[],["Develop an understanding of customers'", "Explain proposed solutions", "Develop implement technical project management"]],
[3,"Logistics Analysts",1.2,1.297,0,13,0,87,[],["Develop maintain payment systems", "Analyze logistics data,", "Interpret data on logistics elements"]],
[3,"Logistics Engineers",1.2,1.297,0,13,0,87,[],["Analyze interpret logistics data involving", "Develop maintain cost estimates", "Evaluate the use of technologies"]],
[3,"Purchasing Agents, Except Wholesale, Retail, and Farm Products",77,1.509,11,0,89,0,["Monitor changes affecting supply and", "Analyze price proposals"],[]],
[3,"Regulatory Affairs Specialists",8,0.698,0,9,0,91,[],["Interpret regulatory rules or rule", "Prepare responses", "Review clinical protocols"]],
[3,"Wholesale and Retail Buyers, Except Farm Products",29,0.819,0,5,0,95,[],["Monitor analyze sales records"]],
[3,"Business Continuity Planners",23,1.048,0,24,0,76,[],["Interpret government regulations and applicable", "Analyze corporate intelligence data", "Design implement products and services"]],
[3,"Compensation, Benefits, and Job Analysis Specialists",47,1.441,0,17,0,83,[],["Analyze organizational", "Plan develop curricula and materials", "Plan develop"]],
[3,"Customs Brokers",23,1.048,0,9,0,91,[],["Stay abreast of changes in", "Provide advice on transportation options"]],
[3,"Energy Auditors",23,1.048,0,5,0,95,[],["Analyze technical feasibility of energy"]],
[3,"Fundraisers",0,1.243,0,7,0,93,[],["Compile develop materials", "Write speeches"]],
[3,"Management Analysts",13,1.432,0,36,0,64,[],["Document findings of study and", "Plan study of work problems", "Recommend purchase of storage equipment"]],
[3,"Market Research Analysts and Marketing Specialists",61,1.427,54,0,46,0,["Prepare reports of findings", "Collect analyze data on customer", "Measure the effectiveness of marketing"],[]],
[3,"Meeting, Convention, and Event Planners",4,0.374,0,14,0,86,[],["Monitor event activities", "Consult with customers", "Plan develop programs"]],
[3,"Online Merchants",23,1.048,0,26,0,74,[],["Compose descriptions of merchandise", "Implement security practices", "Investigate products or markets"]],
[3,"Security Management Specialists",23,1.048,0,42,0,58,[],["Provide system design and integration", "Design security policies", "Perform risk analyses so"]],
[3,"Sustainability Specialists",23,1.048,0,7,0,93,[],["Create marketing or outreach media"]],
[3,"Training and Development Specialists",1.4,1.198,0,10,0,90,[],["Present information", "Design plan"]],
[3,"Accountants",94,1.482,12,0,88,0,["Develop accounting systems", "Analyze business operations"],[]],
[3,"Appraisers, Real Estate",90,0.841,0,0,100,0,[],[]],
[3,"Assessors",90,0.841,5,0,95,0,["Analyze trends in sales prices"],[]],
[3,"Auditors",94,1.482,20,0,80,0,["Prepare analyze", "Produce up-to-the-minute information,", "Review data about material assets"],[]],
[3,"Budget Analysts",94,1.503,8,0,92,0,["Perform cost-benefit analyses"],[]],
[3,"Credit Analysts",98,1.345,10,0,90,0,["Analyze credit data and financial"],[]],
[3,"Credit Counselors",4,1.385,0,35,0,65,[],["Explain general financial topics", "Recommend strategies", "Create debt management plans"]],
[3,"Financial Analysts",23,1.381,0,33,0,67,[],["Present oral or written reports", "Monitor fundamental economic", "Draw charts and graphs,"]],
[3,"Financial Examiners",17,1.526,0,6,0,94,[],["Review analyze new"]],
[3,"Financial Quantitative Analysts",33,1.361,0,38,0,62,[],["Interpret results of financial analysis", "Research develop analytical tools", "Apply mathematical or statistical techniques"]],
[3,"Fraud Examiners, Investigators and Analysts",33,1.361,0,17,0,83,[],["Maintain knowledge of current events", "Analyze financial data", "Conduct in-depth investigations of suspicious"]],
[3,"Insurance Underwriters",99,1.327,0,0,100,0,[],[]],
[3,"Investment Underwriters",33,1.361,0,32,0,68,[],["Analyze financial or operational performance", "Structure negotiate deals", "Employ financial models"]],
[3,"Loan Counselors",4,1.385,0,11,0,89,[],["Counsel clients on personal and", "Calculate amount of debt and", "Assist in selection of financial"]],
[3,"Loan Officers",98,1.386,13,0,87,0,["Explain to customers the different", "Market bank products", "Work with clients"],[]],
[3,"Personal Financial Advisors",58,1.401,33,0,67,0,["Analyze financial information obtained from", "Answer clients' questions about the", "Prepare interpret"],[]],
[3,"Risk Management Specialists",33,1.361,0,21,0,79,[],["Develop implement risk-assessment models or", "Produce reports or presentations", "Conduct statistical analyses"]],
[3,"Tax Examiners and Collectors, and Revenue Agents",93,1.367,4,0,96,0,["Maintain knowledge of tax code"],[]],
[3,"Tax Preparers",99,1.294,27,0,73,0,["Explain federal and state tax", "Furnish taxpayers with sufficient information", "Check data input or verify"],[]],
[4,"Child, Family, and School Social Workers",3,0.776,0,0,0,100,[],[]],
[4,"Community Health Workers",0,0.037,0,3,0,97,[],["Provide feedback"]],
[4,"Educational, Guidance, School, and Vocational Counselors",0.9,0.974,0,24,0,76,[],["Instruct individuals in career development", "Counsel individuals", "Counsel students regarding educational issues"]],
[4,"Health Educators",5,0.692,0,12,0,88,[],["Develop educational materials and programs", "Prepare distribute health education materials"]],
[4,"Healthcare Social Workers",0.4,0.934,0,6,0,94,[],["Monitor evaluate"]],
[4,"Marriage and Family Therapists",1.4,1.367,0,12,0,88,[],["Encourage individuals and family members", "Provide public education and consultation"]],
[4,"Mental Health and Substance Abuse Social Workers",0.3,1.119,0,15,0,85,[],["Modify treatment plans according", "Monitor evaluate"]],
[4,"Mental Health Counselors",0.5,1.342,0,15,0,85,[],["Guide clients in the development", "Collect information about clients", "Plan organize"]],
[4,"Probation Officers and Correctional Treatment Specialists",25,0.527,0,0,0,100,[],[]],
[4,"Rehabilitation Counselors",0.9,0.503,0,0,0,100,[],[]],
[4,"Social and Human Service Assistants",13,0.465,0,0,0,100,[],[]],
[4,"Substance Abuse and Behavioral Disorder Counselors",3,1.031,0,13,0,87,[],["Instruct others in program methods", "Provide clients or family members", "Review evaluate clients' progress in"]],
[4,"Clergy",0.8,1.283,0,29,0,71,[],["Read from sacred texts such", "Share information about religious issues", "Counsel individuals or groups concerning"]],
[4,"Directors, Religious Activities and Education",3,1.211,0,11,0,89,[],["Interpret religious education activities", "Counsel individuals regarding interpersonal"]],
[5,"Business Intelligence Analysts",22,1.233,0,59,0,41,[],["Generate standard or custom reports", "Create business intelligence tools or", "Synthesize current business intelligence or"]],
[5,"Computer and Information Research Scientists",1.5,1.154,0,27,0,73,[],["Conduct logical analyses of business", "Consult with users", "Analyze problems"]],
[5,"Computer Network Architects",21,0.58,0,21,0,79,[],["Prepare detailed network specifications", "Monitor analyze network performance and", "Maintain networks"]],
[5,"Computer Network Support Specialists",0,0.786,0,27,0,73,[],["Troubleshoot network or connectivity problems", "Configure security settings or access", "Analyze report computer network security"]],
[5,"Computer Programmers",48,1.272,0,60,0,40,[],["Correct errors", "Write analyze", "Write update"]],
[5,"Computer Systems Analysts",0.7,1.198,0,43,0,57,[],["Review analyze computer printouts and", "Confer with clients regarding the", "Test maintain"]],
[5,"Computer Systems Engineers/Architects",22,1.233,0,54,0,46,[],["Provide technical guidance or support", "Configure servers", "Complete models and simulations,"]],
[5,"Computer User Support Specialists",0,0.299,0,31,0,69,[],["Modify customize commercial programs", "Set up equipment", "Read technical manuals"]],
[5,"Data Warehousing Specialists",22,1.233,0,56,0,44,[],["Write new programs or modify", "Create supporting documentation", "Design implement warehouse database structures"]],
[5,"Database Administrators",3,1.285,0,56,0,44,[],["Modify existing databases and database", "Test programs or databases", "Develop standards and guidelines"]],
[5,"Database Architects",22,1.233,0,61,0,39,[],["Design databases", "Collaborate with system architects", "Design database applications"]],
[5,"Document Management Specialists",22,1.233,0,35,0,65,[],["Analyze interpret", "Document technical functions and specifications", "Search electronic sources"]],
[5,"Geographic Information Systems Technicians",22,1.233,0,16,0,84,[],["Perform geospatial data building", "Select cartographic elements needed", "Recommend procedures or equipment or"]],
[5,"Geospatial Information Scientists and Technologists",22,1.233,0,8,0,92,[],["Create analyze", "Create visual representations of geospatial"]],
[5,"Informatics Nurse Specialists",0.7,1.198,0,24,0,76,[],["Design develop", "Develop implement policies or practices", "Analyze interpret patient"]],
[5,"Information Security Analysts",21,1.25,0,58,0,42,[],["Coordinate implementation of computer system", "Perform risk assessments and execute", "Document computer security and emergency"]],
[5,"Information Technology Project Managers",22,1.233,0,10,0,90,[],["Prepare project status reports", "Develop update project plans"]],
[5,"Network and Computer Systems Administrators",3,0.79,0,35,0,65,[],["Diagnose troubleshoot", "Plan coordinate", "Design configure"]],
[5,"Search Marketing Strategists",22,1.233,0,39,0,61,[],["Develop transactional Web applications,", "Create content strategies", "Identify methods"]],
[5,"Software Developers, Applications",4,1.201,0,60,0,40,[],["Modify existing software", "Analyze user needs and software", "Store retrieve"]],
[5,"Software Developers, Systems Software",13,1.283,0,58,0,42,[],["Modify existing software", "Store retrieve", "Design develop software systems,"]],
[5,"Software Quality Assurance Engineers and Testers",22,1.233,0,36,0,64,[],["Perform initial debugging procedures", "Review software documentation", "Provide feedback and recommendations"]],
[5,"Telecommunications Engineering Specialists",21,0.58,0,19,0,81,[],["Implement controls", "Manage user access", "Document procedures"]],
[5,"Video Game Designers",22,1.233,0,21,0,79,[],["Determine supplementary virtual features", "Consult with multiple stakeholders", "Develop maintain design level documentation"]],
[5,"Web Administrators",22,1.233,0,26,0,74,[],["Determine sources of web page", "Evaluate recommend server hardware or", "Review update web page content"]],
[5,"Web Developers",21,1.089,0,41,0,59,[],["Design build", "Write supporting code", "Write design"]],
[5,"Actuaries",21,1.516,0,21,0,79,[],["Determine help determine company policy", "Provide advice", "Explain changes in contract provisions"]],
[5,"Biostatisticians",22,1.383,0,16,0,84,[],["Draw conclusions or make predictions", "Write detailed analysis plans and", "Write program code"]],
[5,"Clinical Data Managers",22,1.383,0,38,0,62,[],["Prepare appropriate formatting", "Read technical literature and participate", "Contribute to the compilation"]],
[5,"Mathematical Technicians",99,0.756,33,0,67,0,["Translate data into numbers", "Process data"],[]],
[5,"Mathematicians",5,1.472,0,45,0,55,[],["Address the relationships of quantities", "Develop new principles and new", "Develop mathematical or statistical models"]],
[5,"Operations Research Analysts",4,1.4,0,64,0,36,[],["Break systems into their component", "Study analyze information about alternative", "Analyze information obtained from management"]],
[5,"Statisticians",22,1.383,0,61,0,39,[],["Evaluate sources of information", "Identify relationships and trends in", "Report results of statistical analyses"]],
[6,"First-Line Supervisors of Construction Trades and Extraction Workers",17,-0.305,0,13,0,87,[],["Confer with managerial or technical", "Record information such as personnel"]],
[6,"Solar Energy Installation Managers",17,-0.305,0,0,0,100,[],[]],
[6,"Boilermakers",68,-1.098,0,0,100,0,[],[]],
[6,"Brickmasons and Blockmasons",82,-1.754,0,0,100,0,[],[]],
[6,"Carpet Installers",87,-1.565,0,0,100,0,[],[]],
[6,"Cement Masons and Concrete Finishers",94,-1.777,4,0,96,0,["Monitor how the wind"],[]],
[6,"Construction Carpenters",72,-1.324,0,0,100,0,[],[]],
[6,"Construction Laborers",88,-1.623,0,0,100,0,[],[]],
[6,"Drywall and Ceiling Tile Installers",79,-1.648,4,0,96,0,["Read blueprints or other specifications"],[]],
[6,"Floor Layers, Except Carpet, Wood, and Hard Tiles",79,-1.301,0,0,100,0,[],[]],
[6,"Floor Sanders and Finishers",87,-1.749,0,0,100,0,[],[]],
[6,"Operating Engineers and Other Construction Equipment Operators",95,-0.882,0,0,100,0,[],[]],
[6,"Paving, Surfacing, and Tamping Equipment Operators",83,-1.185,0,0,100,0,[],[]],
[6,"Pile-Driver Operators",82,-1.22,0,0,100,0,[],[]],
[6,"Rough Carpenters",72,-1.324,0,0,100,0,[],[]],
[6,"Stonemasons",89,-1.715,0,0,100,0,[],[]],
[6,"Tapers",62,-1.541,0,0,100,0,[],[]],
[6,"Terrazzo Workers and Finishers",88,-1.776,0,0,100,0,[],[]],
[6,"Tile and Marble Setters",75,-1.225,4,0,96,0,["Study blueprints and examine surface"],[]],
[6,"Electricians",15,-0.78,0,0,0,100,[],[]],
[6,"Glaziers",73,-1.389,0,0,100,0,[],[]],
[6,"Insulation Workers, Floor, Ceiling, and Wall",83,-1.619,0,0,100,0,[],[]],
[6,"Insulation Workers, Mechanical",64,-1.269,0,0,100,0,[],[]],
[6,"Painters, Construction and Maintenance",75,-1.588,0,0,100,0,[],[]],
[6,"Paperhangers",87,-1.728,0,0,100,0,[],[]],
[6,"Pipe Fitters and Steamfitters",35,-1.121,0,5,0,95,[],["Prepare cost estimates"]],
[6,"Pipelayers",62,-1.226,0,0,100,0,[],[]],
[6,"Plasterers and Stucco Masons",84,-1.756,0,0,100,0,[],[]],
[6,"Plumbers",35,-1.121,0,9,0,91,[],["Review blueprints", "Inspect structures"]],
[6,"Reinforcing Iron and Rebar Workers",90,-1.971,0,0,100,0,[],[]],
[6,"Roofers",90,-1.753,0,0,100,0,[],[]],
[6,"Sheet Metal Workers",82,-1.175,4,0,96,0,["Inspect individual parts"],[]],
[6,"Solar Photovoltaic Installers",0,-0.944,0,12,0,88,[],["Measure analyze system performance and", "Check electrical installation", "Determine connection interfaces"]],
[6,"Structural Iron and Steel Workers",83,-1.78,0,0,100,0,[],[]],
[6,"Helpers--Brickmasons, Blockmasons, Stonemasons, and Tile and Marble Setters",0,-1.942,0,0,0,100,[],[]],
[6,"Helpers--Carpenters",92,-1.425,0,0,100,0,[],[]],
[6,"Helpers--Electricians",74,-1.507,0,0,100,0,[],[]],
[6,"Helpers--Painters, Paperhangers, Plasterers, and Stucco Masons",94,-2.045,0,0,100,0,[],[]],
[6,"Helpers--Pipelayers, Plumbers, Pipefitters, and Steamfitters",57,-1.679,0,0,100,0,[],[]],
[6,"Helpers--Roofers",72,-1.898,0,0,100,0,[],[]],
[6,"Construction and Building Inspectors",63,0.286,5,0,95,0,["Review interpret plans"],[]],
[6,"Elevator Installers and Repairers",39,-0.86,0,0,0,100,[],[]],
[6,"Fence Erectors",92,-1.902,0,0,100,0,[],[]],
[6,"Hazardous Materials Removal Workers",53,-0.689,0,0,100,0,[],[]],
[6,"Highway Maintenance Workers",87,-1.279,0,0,100,0,[],[]],
[6,"Rail-Track Laying and Maintenance Equipment Operators",89,-1.399,0,0,100,0,[],[]],
[6,"Segmental Pavers",83,-0.983,0,0,100,0,[],[]],
[6,"Septic Tank Servicers and Sewer Pipe Cleaners",83,-1.211,0,0,100,0,[],[]],
[6,"Solar Thermal Installers and Technicians",71,-0.873,0,0,100,0,[],[]],
[6,"Weatherization Installers and Technicians",71,-0.873,6,0,94,0,["Explain recommendations"],[]],
[6,"Continuous Mining Machine Operators",54,-1.165,0,0,100,0,[],[]],
[6,"Derrick Operators, Oil and Gas",80,-1.415,0,0,100,0,[],[]],
[6,"Earth Drillers, Except Oil and Gas",85,-0.702,0,0,100,0,[],[]],
[6,"Explosives Workers, Ordnance Handling Experts, and Blasters",48,-0.773,0,0,0,100,[],[]],
[6,"Helpers--Extraction Workers",37,-1.543,0,0,0,100,[],[]],
[6,"Mine Cutting and Channeling Machine Operators",59,-1.2,0,0,100,0,[],[]],
[6,"Rock Splitters, Quarry",96,-1.763,0,0,100,0,[],[]],
[6,"Roof Bolters, Mining",49,-1.619,0,0,0,100,[],[]],
[6,"Rotary Drill Operators, Oil and Gas",53,-0.774,0,0,100,0,[],[]],
[6,"Roustabouts, Oil and Gas",68,-1.519,0,0,100,0,[],[]],
[6,"Service Unit Operators, Oil, Gas, and Mining",93,-0.972,5,0,95,0,["Interpret instrument readings"],[]],
[7,"Agricultural Sciences Teachers, Postsecondary",0,0.755,0,61,0,39,[],["Plan evaluate", "Provide professional consulting services", "Compile administer"]],
[7,"Anthropology and Archeology Teachers, Postsecondary",0,1.322,0,62,0,38,[],["Evaluate grade students' class work", "Plan evaluate", "Provide professional consulting services"]],
[7,"Architecture Teachers, Postsecondary",0,1.222,0,59,0,41,[],["Plan evaluate", "Provide professional consulting services", "Compile administer"]],
[7,"Area, Ethnic, and Cultural Studies Teachers, Postsecondary",0,1.309,0,57,0,43,[],["Plan evaluate", "Evaluate grade students' class work", "Provide professional consulting services"]],
[7,"Atmospheric, Earth, Marine, and Space Sciences Teachers, Postsecondary",0,1.306,0,62,0,38,[],["Evaluate grade students' class work", "Plan evaluate", "Provide professional consulting services"]],
[7,"Biological Science Teachers, Postsecondary",0,1.228,0,58,0,42,[],["Assist students who need extra", "Plan evaluate", "Provide professional consulting services"]],
[7,"Business Teachers, Postsecondary",0,1.349,0,50,0,50,[],["Evaluate grade students' class work", "Plan evaluate", "Provide professional consulting services"]],
[7,"Chemistry Teachers, Postsecondary",0,1.334,0,50,0,50,[],["Plan evaluate", "Provide professional consulting services", "Compile administer"]],
[7,"Computer Science Teachers, Postsecondary",0,1.278,0,56,0,44,[],["Plan evaluate", "Provide professional consulting services", "Initiate facilitate"]],
[7,"Economics Teachers, Postsecondary",0,1.319,0,64,0,36,[],["Plan evaluate", "Evaluate grade students' class work", "Provide professional consulting services"]],
[7,"Education Teachers, Postsecondary",0,1.193,0,62,0,38,[],["Plan evaluate", "Evaluate grade students' class work", "Provide professional consulting services"]],
[7,"Engineering Teachers, Postsecondary",0,1.351,0,61,0,39,[],["Plan evaluate", "Provide professional consulting services", "Compile administer"]],
[7,"Environmental Science Teachers, Postsecondary",0,1.348,0,62,0,38,[],["Plan evaluate", "Provide professional consulting services", "Compile administer"]],
[7,"Forestry and Conservation Science Teachers, Postsecondary",0,1.26,0,60,0,40,[],["Evaluate grade students' class work", "Plan evaluate", "Provide professional consulting services"]],
[7,"Geography Teachers, Postsecondary",0,1.319,0,56,0,44,[],["Plan evaluate", "Evaluate grade students' class work", "Provide professional consulting services"]],
[7,"Health Specialties Teachers, Postsecondary",0,0.925,0,61,0,39,[],["Plan evaluate", "Evaluate grade students' class work", "Provide professional consulting services"]],
[7,"Library Science Teachers, Postsecondary",0,1.386,0,54,0,46,[],["Plan evaluate", "Evaluate grade students' class work", "Provide professional consulting services"]],
[7,"Mathematical Science Teachers, Postsecondary",0,1.339,0,64,0,36,[],["Evaluate grade students' class work", "Plan evaluate", "Provide professional consulting services"]],
[7,"Nursing Instructors and Teachers, Postsecondary",0,0.517,0,46,0,54,[],["Plan evaluate", "Provide professional consulting services", "Compile administer"]],
[7,"Physics Teachers, Postsecondary",0,1.044,0,62,0,38,[],["Prepare deliver lectures", "Plan evaluate", "Provide professional consulting services"]],
[7,"Political Science Teachers, Postsecondary",0,1.368,0,64,0,36,[],["Plan evaluate", "Evaluate grade students' class work", "Provide professional consulting services"]],
[7,"Psychology Teachers, Postsecondary",0,1.334,0,59,0,41,[],["Plan evaluate", "Prepare deliver lectures", "Provide professional consulting services"]],
[7,"Sociology Teachers, Postsecondary",0,1.349,0,61,0,39,[],["Plan evaluate", "Evaluate grade students' class work", "Provide professional consulting services"]],
[7,"Art, Drama, and Music Teachers, Postsecondary",0,0.758,0,56,0,44,[],["Plan evaluate", "Provide professional consulting services", "Compile administer"]],
[7,"Communications Teachers, Postsecondary",0,1.347,0,59,0,41,[],["Plan evaluate", "Evaluate grade students' class work", "Provide professional consulting services"]],
[7,"Criminal Justice and Law Enforcement Teachers, Postsecondary",0,1.39,0,64,0,36,[],["Plan evaluate", "Evaluate grade students' class work", "Provide professional consulting services"]],
[7,"English Language and Literature Teachers, Postsecondary",0,1.418,0,60,0,40,[],["Plan evaluate", "Assist students who need extra", "Provide assistance"]],
[7,"Foreign Language and Literature Teachers, Postsecondary",0,1.334,0,58,0,42,[],["Prepare deliver lectures", "Plan evaluate", "Evaluate grade students' class work"]],
[7,"Graduate Teaching Assistants",0,1.111,0,21,0,79,[],["Develop teaching materials", "Evaluate grade examinations", "Assist faculty members or staff"]],
[7,"History Teachers, Postsecondary",0,1.437,0,60,0,40,[],["Plan evaluate", "Evaluate grade students' class work", "Compile administer"]],
[7,"Home Economics Teachers, Postsecondary",0,1.212,0,64,0,36,[],["Plan evaluate", "Provide professional consulting services", "Compile administer"]],
[7,"Law Teachers, Postsecondary",0,1.356,0,61,0,39,[],["Plan evaluate", "Provide professional consulting services", "Compile administer"]],
[7,"Philosophy and Religion Teachers, Postsecondary",0,1.364,0,65,0,35,[],["Plan evaluate", "Evaluate grade students' class work", "Provide professional consulting services"]],
[7,"Recreation and Fitness Studies Teachers, Postsecondary",0,1.165,0,65,0,35,[],["Plan evaluate", "Prepare deliver lectures", "Evaluate grade students' class work"]],
[7,"Social Work Teachers, Postsecondary",0,1.347,0,61,0,39,[],["Plan evaluate", "Evaluate grade students' class work", "Provide professional consulting services"]],
[7,"Vocational Education Teachers, Postsecondary",0,0.162,0,25,0,75,[],["Observe evaluate students' work", "Develop teaching aids such as", "Develop curricula and plan course"]],
[7,"Adapted Physical Education Specialists",0,-0.663,0,11,0,89,[],["Write reports", "Communicate behavioral observations and student"]],
[7,"Career/Technical Education Teachers, Middle School",26,0.52,0,23,0,77,[],["Adapt teaching methods and instructional", "Plan conduct activities", "Prepare administer"]],
[7,"Career/Technical Education Teachers, Secondary School",0.9,0.373,0,24,0,76,[],["Plan conduct activities", "Instruct students in the knowledge", "Guide counsel students with adjustment"]],
[7,"Elementary School Teachers, Except Special Education",0.4,0.887,0,24,0,76,[],["Adapt teaching methods and instructional", "Plan conduct activities", "Guide counsel students with adjustment"]],
[7,"Kindergarten Teachers, Except Special Education",15,0.364,0,11,0,89,[],["Plan conduct activities", "Organize lead activities designed", "Use computers"]],
[7,"Middle School Teachers, Except Special and Career/Technical Education",0,1.286,0,23,0,77,[],["Instruct through lectures", "Adapt teaching methods and instructional", "Plan conduct activities"]],
[7,"Preschool Teachers, Except Special Education",0.7,0.031,0,9,0,91,[],["Adapt teaching methods and instructional", "Plan conduct activities", "Collaborate with other teachers and"]],
[7,"Secondary School Teachers, Except Special and Career/Technical Education",0,1.191,0,25,0,75,[],["Instruct through lectures", "Adapt teaching methods and instructional", "Plan conduct activities"]],
[7,"Special Education Teachers, Kindergarten and Elementary School",0,0.736,0,10,0,90,[],["Present information in audio-visual or", "Observe evaluate students' performance", "Prepare objectives"]],
[7,"Special Education Teachers, Middle School",1.6,1.296,0,20,0,80,[],["Instruct through lectures", "Plan conduct activities", "Guide counsel students with adjustment"]],
[7,"Special Education Teachers, Preschool",0,0.375,0,11,0,89,[],["Present information in audio-visual or", "Prepare objectives", "Observe evaluate students' performance"]],
[7,"Special Education Teachers, Secondary School",0.8,0.959,0,20,0,80,[],["Instruct through lectures", "Plan conduct activities", "Guide counsel students with adjustment"]],
[7,"Adult Basic and Secondary Education and Literacy Teachers and Instructors",19,1.349,0,21,0,79,[],["Review instructional content", "Conduct classes", "Observe evaluate students' work"]],
[7,"Self-Enrichment Education Teachers",13,0.526,0,23,0,77,[],["Review instructional content", "Adapt teaching methods and instructional", "Conduct classes"]],
[7,"Tutors",1,1.325,0,53,0,47,[],["Review class material with students", "Provide private instruction", "Develop teaching or training materials"]],
[7,"Archivists",76,0.677,31,0,69,0,["Select edit documents", "Create maintain accessible", "Provide reference services and assistance"],[]],
[7,"Curators",0.7,0.737,0,40,0,60,[],["Study examine", "Plan organize the acquisition", "Provide information from the institution's"]],
[7,"Librarians",65,1.037,14,0,86,0,["Design information storage and retrieval", "Search standard reference materials", "Analyze patrons' requests"],[]],
[7,"Library Technicians",99,0.038,18,0,82,0,["Compose explanatory summaries of contents", "Retrieve information from central databases", "Conduct reference searches,"],[]],
[7,"Museum Technicians and Conservators",59,-0.091,4,0,96,0,["Study object documentation or conduct"],[]],
[7,"Audio-Visual and Multimedia Collections Specialists",39,0.451,0,33,0,67,[],["Develop preproduction ideas and incorporate", "Produce rough and finished graphics", "Instruct users in the selection"]],
[7,"Farm and Home Management Advisors",0.8,0.86,0,20,0,80,[],["Maintain records of services provided", "Advise farmers and demonstrate techniques", "Research information requested"]],
[7,"Instructional Coordinators",0.4,1.302,0,21,0,79,[],["Develop instructional materials", "Research evaluate", "Organize production and design of"]],
[7,"Instructional Designers and Technologists",0.4,1.302,0,74,0,26,[],["Edit instructional materials", "Develop instructional materials", "Adapt instructional content or delivery"]],
[7,"Teacher Assistants",56,0.452,12,0,88,0,["Tutor assist children individually or", "Plan prepare", "Conduct demonstrations"],[]],
[8,"First-Line Supervisors of Agricultural Crop and Horticultural Workers",57,-0.479,0,0,100,0,[],[]],
[8,"First-Line Supervisors of Animal Husbandry and Animal Care Workers",57,-0.479,0,0,100,0,[],[]],
[8,"First-Line Supervisors of Aquacultural Workers",57,-0.479,0,0,100,0,[],[]],
[8,"First-Line Supervisors of Logging Workers",57,-0.479,0,0,100,0,[],[]],
[8,"Agricultural Equipment Operators",0,-1.145,0,0,0,100,[],[]],
[8,"Agricultural Inspectors",94,0.17,5,0,95,0,["Advise farmers or growers of"],[]],
[8,"Animal Breeders",95,-1.044,0,0,100,0,[],[]],
[8,"Farmworkers and Laborers, Crop",0,-1.601,0,0,0,100,[],[]],
[8,"Farmworkers, Farm, Ranch, and Aquacultural Animals",0,-1.108,0,0,0,100,[],[]],
[8,"Graders and Sorters, Agricultural Products",41,-1.371,0,0,0,100,[],[]],
[8,"Nursery Workers",0,-1.601,0,4,0,96,[],["Provide information and advice"]],
[8,"Fishers and Related Fishing Workers",83,-1.513,0,0,100,0,[],[]],
[8,"Hunters and Trappers",77,-1.305,0,0,100,0,[],[]],
[8,"Fallers",76,-1.795,0,0,100,0,[],[]],
[8,"Forest and Conservation Workers",87,-1.064,0,0,100,0,[],[]],
[8,"Log Graders and Scalers",97,-0.477,0,0,100,0,[],[]],
[8,"Logging Equipment Operators",79,-1.004,0,0,100,0,[],[]],
[9,"Chefs and Head Cooks",10,-0.268,0,10,0,90,[],["Estimate amounts and costs of", "Plan direct"]],
[9,"First-Line Supervisors of Food Preparation and Serving Workers",63,-0.258,0,0,100,0,[],[]],
[9,"Cooks, Fast Food",81,-0.713,5,0,95,0,["Read food order slips or"],[]],
[9,"Cooks, Institution and Cafeteria",83,-0.636,0,0,100,0,[],[]],
[9,"Cooks, Private Household",30,-0.787,0,0,0,100,[],[]],
[9,"Cooks, Restaurant",96,-0.742,20,0,80,0,["Weigh measure", "Plan price menu items", "Bake roast"],[]],
[9,"Cooks, Short Order",94,-0.593,0,0,100,0,[],[]],
[9,"Food Preparation Workers",87,-1.226,3,0,97,0,["Store food in designated containers"],[]],
[9,"Baristas",96,-0.485,0,0,100,0,[],[]],
[9,"Bartenders",77,-0.616,10,0,90,0,["Create drink recipes", "Mix ingredients"],[]],
[9,"Combined Food Preparation and Serving Workers, Including Fast Food",92,-0.531,5,0,95,0,["Communicate with customers regarding orders"],[]],
[9,"Counter Attendants, Cafeteria, Food Concession, and Coffee Shop",96,-0.485,6,0,94,0,["Cook food or prepare food"],[]],
[9,"Food Servers, Nonrestaurant",86,-0.727,0,0,100,0,[],[]],
[9,"Waiters and Waitresses",94,-0.948,4,0,96,0,["Describe recommend wines"],[]],
[9,"Dining Room and Cafeteria Attendants and Bartender Helpers",91,-1.927,0,0,100,0,[],[]],
[9,"Dishwashers",77,-1.739,0,0,100,0,[],[]],
[9,"Hosts and Hostesses, Restaurant, Lounge, and Coffee Shop",97,-0.057,9,0,91,0,["Plan parties or other special", "Maintain contact with kitchen staff"],[]],
[10,"Allergists and Immunologists",0,0.709,0,19,0,81,[],["Develop individualized treatment plans", "Interpret diagnostic test results", "Educate patients about diagnoses"]],
[10,"Anesthesiologist Assistants",14,0.106,0,0,0,100,[],[]],
[10,"Anesthesiologists",0,0.235,0,0,0,100,[],[]],
[10,"Chiropractors",3,-0.191,0,9,0,91,[],["Counsel patients about nutrition"]],
[10,"Dentists, General",0.4,-0.181,0,5,0,95,[],["Advise instruct patients regarding preventive"]],
[10,"Dermatologists",0,0.709,0,0,0,100,[],[]],
[10,"Dietitians and Nutritionists",0.4,1.343,0,22,0,78,[],["Counsel individuals and groups", "Write research reports and other", "Develop curriculum and prepare manuals"]],
[10,"Family and General Practitioners",0,1.032,0,27,0,73,[],["Explain procedures and discuss test", "Monitor patients' conditions and progress", "Plan implement"]],
[10,"Hospitalists",0,0.709,0,8,0,92,[],["Refer patients"]],
[10,"Internists, General",0,1.046,0,16,0,84,[],["Analyze records", "Explain procedures and discuss test", "Monitor patients' conditions and progress"]],
[10,"Neurologists",0,0.709,0,0,0,100,[],[]],
[10,"Nuclear Medicine Physicians",0,0.709,0,8,0,92,[],["Prepare comprehensive interpretive reports of", "Interpret imaging data and confer"]],
[10,"Obstetricians and Gynecologists",0,0.28,0,20,0,80,[],["Analyze records", "Explain procedures and discuss test", "Monitor patients' conditions and progress"]],
[10,"Ophthalmologists",0,0.709,0,0,0,100,[],[]],
[10,"Optometrists",14,0.504,0,10,0,90,[],["Analyze test results and develop"]],
[10,"Oral and Maxillofacial Surgeons",0.4,-0.239,0,0,0,100,[],[]],
[10,"Orthodontists",2,0.162,0,0,0,100,[],[]],
[10,"Pathologists",0,0.709,0,16,0,84,[],["Analyze interpret results from tests", "Diagnose diseases or study medical", "Examine microscopic samples"]],
[10,"Pediatricians, General",0,1.126,0,19,0,81,[],["Monitor patients' conditions and progress", "Plan implement", "Explain procedures and discuss test"]],
[10,"Pharmacists",1.2,0.606,0,20,0,80,[],["Provide information and advice", "Assess the identity", "Plan implement"]],
[10,"Physical Medicine and Rehabilitation Physicians",0,0.709,0,0,0,100,[],[]],
[10,"Physician Assistants",14,0.106,0,8,0,92,[],["Interpret diagnostic test results"]],
[10,"Podiatrists",0.5,0.628,0,0,0,100,[],[]],
[10,"Preventive Medicine Physicians",0,0.709,0,7,0,93,[],["Document review comprehensive patients' histories"]],
[10,"Prosthodontists",6,-0.156,0,0,0,100,[],[]],
[10,"Psychiatrists",0,1.281,0,17,0,83,[],["Design individualized care plans,", "Teach take continuing education classes"]],
[10,"Radiologists",0,0.709,0,17,0,83,[],["Prepare comprehensive interpretive reports of", "Communicate examination results or diagnostic", "Document the performance"]],
[10,"Sports Medicine Physicians",0,0.709,0,0,0,100,[],[]],
[10,"Surgeons",0,-0.05,0,0,0,100,[],[]],
[10,"Urologists",0,0.709,0,0,0,100,[],[]],
[10,"Acupuncturists",2,0.711,0,6,0,94,[],["Evaluate treatment outcomes and recommend"]],
[10,"Acute Care Nurses",0.9,0.229,0,7,0,93,[],["Discuss illnesses and treatments with", "Document data related"]],
[10,"Advanced Practice Psychiatric Nurses",0.9,0.229,0,12,0,88,[],["Educate patients and family members", "Direct provide home health services", "Interpret diagnostic or laboratory tests"]],
[10,"Art Therapists",0.3,0.219,0,12,0,88,[],["Communicate client assessment findings and", "Review research or literature in", "Write treatment plans"]],
[10,"Audiologists",0.3,0.633,0,0,0,100,[],[]],
[10,"Clinical Nurse Specialists",0.9,0.229,0,14,0,86,[],["Design patient education programs", "Present clients with information required", "Make clinical recommendations"]],
[10,"Critical Care Nurses",0.9,0.229,0,3,0,97,[],["Compile analyze data obtained from"]],
[10,"Exercise Physiologists",0,-0.033,0,20,0,80,[],["Develop exercise programs", "Teach courses or seminars related", "Recommend methods"]],
[10,"Low Vision Therapists, Orientation and Mobility Specialists, and Vision Rehabilitation Therapists",0.4,0.115,0,5,0,95,[],["Provide consultation"]],
[10,"Music Therapists",0.3,0.219,0,13,0,87,[],["Communicate client assessment findings and", "Communicate with clients", "Analyze synthesize client data"]],
[10,"Naturopathic Physicians",2,0.711,0,15,0,85,[],["Treat minor cuts", "Administer dispense", "Administer treatments or therapies"]],
[10,"Nurse Anesthetists",0,0.241,0,0,0,100,[],[]],
[10,"Nurse Midwives",0,0.197,0,5,0,95,[],["Write information in medical records"]],
[10,"Nurse Practitioners",0,0.19,0,15,0,85,[],["Analyze interpret patients' histories", "Counsel patients about drug regimens", "Develop treatment plans based"]],
[10,"Occupational Therapists",0.4,0.115,0,6,0,94,[],["Select activities"]],
[10,"Orthoptists",2,0.711,0,0,0,100,[],[]],
[10,"Physical Therapists",2,-0.358,0,8,0,92,[],["Provide educational information about physical", "Plan prepare"]],
[10,"Radiation Therapists",34,-0.219,0,0,0,100,[],[]],
[10,"Recreational Therapists",0.3,0.219,0,10,0,90,[],["Develop treatment plan"]],
[10,"Registered Nurses",0.9,0.229,0,0,0,100,[],[]],
[10,"Respiratory Therapists",7,-0.188,0,9,0,91,[],["Explain treatment procedures", "Educate patients and their families"]],
[10,"Speech-Language Pathologists",0.6,1.146,0,5,0,95,[],["Monitor patients' progress and adjust"]],
[10,"Veterinarians",4,-0.075,0,4,0,96,[],["Advise animal owners regarding sanitary"]],
[10,"Cardiovascular Technologists and Technicians",23,-0.091,0,0,0,100,[],[]],
[10,"Cytogenetic Technologists",90,0.282,0,0,100,0,[],[]],
[10,"Cytotechnologists",90,0.282,14,0,86,0,["Examine cell samples", "Examine specimens"],[]],
[10,"Dental Hygienists",68,-0.417,0,0,100,0,[],[]],
[10,"Diagnostic Medical Sonographers",35,-0.264,0,0,0,100,[],[]],
[10,"Dietetic Technicians",13,-0.126,0,8,0,92,[],["Plan menus or diets or"]],
[10,"Emergency Medical Technicians and Paramedics",5,-0.686,0,0,0,100,[],[]],
[10,"Hearing Aid Specialists",0,0.565,0,0,0,100,[],[]],
[10,"Histotechnologists and Histologic Technicians",90,0.282,7,0,93,0,["Identify tissue structures or cell"],[]],
[10,"Licensed Practical and Licensed Vocational Nurses",6,-0.514,0,0,0,100,[],[]],
[10,"Magnetic Resonance Imaging Technologists",0,-0.073,0,4,0,96,[],["Write reports or notes"]],
[10,"Medical and Clinical Laboratory Technicians",47,-0.127,0,13,0,87,[],["Analyze record test data", "Prepare standard volumetric solutions or"]],
[10,"Medical and Clinical Laboratory Technologists",90,0.282,12,0,88,0,["Analyze laboratory findings", "Develop standardize"],[]],
[10,"Medical Records and Health Information Technicians",91,0.574,25,0,75,0,["Review records", "Plan develop", "Compile maintain patients' medical records"],[]],
[10,"Neurodiagnostic Technologists",40,-0.284,0,0,0,100,[],[]],
[10,"Nuclear Medicine Technologists",13,0.086,0,6,0,94,[],["Record process results of procedures"]],
[10,"Ophthalmic Medical Technicians",0,0.079,0,0,0,100,[],[]],
[10,"Ophthalmic Medical Technologists",40,-0.284,0,0,0,100,[],[]],
[10,"Opticians, Dispensing",71,0.101,0,0,100,0,[],[]],
[10,"Orthotists and Prosthetists",0.4,0.067,0,0,0,100,[],[]],
[10,"Pharmacy Technicians",92,0.007,0,0,100,0,[],[]],
[10,"Psychiatric Technicians",4,-0.22,0,0,0,100,[],[]],
[10,"Radiologic Technicians",40,-0.284,0,0,0,100,[],[]],
[10,"Radiologic Technologists",0,-0.556,0,0,0,100,[],[]],
[10,"Respiratory Therapy Technicians",10,-0.106,0,0,0,100,[],[]],
[10,"Surgical Assistants",40,-0.284,0,0,0,100,[],[]],
[10,"Surgical Technologists",34,-0.483,0,0,0,100,[],[]],
[10,"Veterinary Technologists and Technicians",3,-0.362,0,0,0,100,[],[]],
[10,"Athletic Trainers",0.7,-0.331,0,0,0,100,[],[]],
[10,"Genetic Counselors",0,1.528,0,11,0,89,[],["Interpret laboratory results and communicate", "Evaluate make recommendations"]],
[10,"Midwives",6,0.23,0,6,0,94,[],["Recommend the use of vitamin", "Provide information about the physical"]],
[10,"Occupational Health and Safety Specialists",17,0.835,0,0,0,100,[],[]],
[10,"Occupational Health and Safety Technicians",25,0.4,0,0,0,100,[],[]],
[11,"Home Health Aides",39,-0.645,0,0,0,100,[],[]],
[11,"Nursing Assistants",0,-0.904,0,3,0,97,[],["Explain medical instructions"]],
[11,"Orderlies",0,-1.679,0,0,0,100,[],[]],
[11,"Psychiatric Aides",47,-0.497,0,0,0,100,[],[]],
[11,"Occupational Therapy Aides",27,-0.773,0,0,0,100,[],[]],
[11,"Occupational Therapy Assistants",3,-0.315,0,5,0,95,[],["Teach patients how"]],
[11,"Physical Therapist Aides",61,-0.882,0,0,100,0,[],[]],
[11,"Physical Therapist Assistants",1.8,-0.531,0,0,0,100,[],[]],
[11,"Dental Assistants",51,-0.527,0,0,100,0,[],[]],
[11,"Endoscopy Technicians",63,0.166,0,0,100,0,[],[]],
[11,"Massage Therapists",54,-1.41,8,0,92,0,["Provide clients with guidance and"],[]],
[11,"Medical Assistants",30,0.15,0,0,0,100,[],[]],
[11,"Medical Equipment Preparers",78,-0.731,0,0,100,0,[],[]],
[11,"Medical Transcriptionists",89,1.063,20,0,80,0,["Produce medical reports", "Review edit transcribed reports or", "Translate medical jargon and abbreviations"],[]],
[11,"Pharmacy Aides",72,-0.155,6,0,94,0,["Provide customers with information"],[]],
[11,"Phlebotomists",0,-0.278,0,4,0,96,[],["Document route of specimens from"]],
[11,"Speech-Language Pathology Assistants",63,0.166,0,0,100,0,[],[]],
[11,"Veterinary Assistants and Laboratory Animal Caretakers",86,-0.774,7,0,93,0,["Write reports", "Educate advise clients on animal"],[]],
[12,"First-Line Supervisors of Mechanics, Installers, and Repairers",0.3,-0.021,0,5,0,95,[],["Examine objects"]],
[12,"Avionics Technicians",70,-0.173,0,0,100,0,[],[]],
[12,"Computer, Automated Teller, and Office Machine Repairers",74,-0.346,20,0,80,0,["Reinstall software programs or adjust", "Install configure new equipment", "Read specifications"],[]],
[12,"Electric Motor, Power Tool, and Related Repairers",76,-0.811,3,0,97,0,["Measure velocity"],[]],
[12,"Electrical and Electronics Installers and Repairers, Transportation Equipment",91,-0.83,7,0,93,0,["Inspect test electrical systems and"],[]],
[12,"Electrical and Electronics Repairers, Commercial and Industrial Equipment",0,-0.463,0,10,0,90,[],["Calibrate testing instruments and installed", "Advise management regarding customer satisfaction"]],
[12,"Electrical and Electronics Repairers, Powerhouse, Substation, and Relay",0,-0.552,0,0,0,100,[],[]],
[12,"Electronic Equipment Installers and Repairers, Motor Vehicles",61,-0.792,0,0,100,0,[],[]],
[12,"Electronic Home Entertainment Equipment Installers and Repairers",65,-0.571,18,0,82,0,["Install service", "Read interpret electronic circuit diagrams"],[]],
[12,"Radio Mechanics",0,-0.634,0,0,0,100,[],[]],
[12,"Radio, Cellular, and Tower Equipment Installers and Repairers",0,-0.634,0,0,0,100,[],[]],
[12,"Security and Fire Alarm Systems Installers",82,-0.693,6,0,94,0,["Consult with clients"],[]],
[12,"Telecommunications Equipment Installers and Repairers, Except Line Installers",36,-0.853,0,2,0,98,[],["Perform database verifications,"]],
[12,"Aircraft Mechanics and Service Technicians",71,-0.655,3,0,97,0,["Read interpret maintenance manuals"],[]],
[12,"Automotive Body and Related Repairers",91,-1.181,0,0,100,0,[],[]],
[12,"Automotive Glass Installers and Repairers",55,-1.202,0,0,100,0,[],[]],
[12,"Automotive Master Mechanics",59,-0.955,0,0,100,0,[],[]],
[12,"Automotive Specialty Technicians",59,-0.955,0,0,100,0,[],[]],
[12,"Bicycle Repairers",94,-0.923,0,0,100,0,[],[]],
[12,"Bus and Truck Mechanics and Diesel Engine Specialists",73,-1.01,4,0,96,0,["Inspect verify dimensions and clearances"],[]],
[12,"Farm Equipment Mechanics and Service Technicians",75,-1.207,0,0,100,0,[],[]],
[12,"Mobile Heavy Equipment Mechanics, Except Engines",40,-1.17,0,0,0,100,[],[]],
[12,"Motorboat Mechanics and Service Technicians",66,-0.886,0,0,100,0,[],[]],
[12,"Motorcycle Mechanics",79,-0.764,0,0,100,0,[],[]],
[12,"Outdoor Power Equipment and Other Small Engine Mechanics",93,-0.894,0,0,100,0,[],[]],
[12,"Rail Car Repairers",88,-1.448,0,0,100,0,[],[]],
[12,"Recreational Vehicle Service Technicians",59,-0.924,0,0,100,0,[],[]],
[12,"Tire Repairers and Changers",70,-1.551,0,0,100,0,[],[]],
[12,"Camera and Photographic Equipment Repairers",97,0.055,13,0,87,0,["Test equipment performance", "Measure parts"],[]],
[12,"Coin, Vending, and Amusement Machine Servicers and Repairers",94,-0.723,0,0,100,0,[],[]],
[12,"Commercial Divers",18,-1.103,0,0,0,100,[],[]],
[12,"Control and Valve Installers and Repairers, Except Mechanical Door",63,-0.761,0,0,100,0,[],[]],
[12,"Electrical Power-Line Installers and Repairers",10,-1.081,0,0,0,100,[],[]],
[12,"Fabric Menders, Except Garment",96,-1.373,0,0,100,0,[],[]],
[12,"Geothermal Technicians",50,-0.59,0,0,100,0,[],[]],
[12,"Heating and Air Conditioning Mechanics and Installers",65,-0.849,4,0,96,0,["Study blueprints"],[]],
[12,"Helpers--Installation, Maintenance, and Repair Workers",79,-1.347,0,0,100,0,[],[]],
[12,"Home Appliance Repairers",72,-0.97,0,0,100,0,[],[]],
[12,"Industrial Machinery Mechanics",67,-1.133,13,0,87,0,["Enter codes and instructions", "Analyze test results"],[]],
[12,"Locksmiths and Safe Repairers",77,-0.866,0,0,100,0,[],[]],
[12,"Maintenance and Repair Workers, General",64,-1.014,3,0,97,0,["Diagnose mechanical problems and determine"],[]],
[12,"Maintenance Workers, Machinery",86,-0.974,0,0,100,0,[],[]],
[12,"Manufactured Building and Mobile Home Installers",18,-1.414,0,0,0,100,[],[]],
[12,"Mechanical Door Repairers",91,-1.383,0,0,100,0,[],[]],
[12,"Medical Equipment Repairers",27,-0.277,0,5,0,95,[],["Test calibrate components or equipment"]],
[12,"Millwrights",59,-1.266,0,0,100,0,[],[]],
[12,"Musical Instrument Repairers and Tuners",91,-0.531,0,0,100,0,[],[]],
[12,"Refractory Materials Repairers, Except Brickmasons",82,-1.237,0,0,100,0,[],[]],
[12,"Refrigeration Mechanics and Installers",65,-0.849,0,0,100,0,[],[]],
[12,"Riggers",89,-1.222,0,0,100,0,[],[]],
[12,"Signal and Track Switch Repairers",90,-0.858,0,0,100,0,[],[]],
[12,"Telecommunications Line Installers and Repairers",49,-1.084,0,0,0,100,[],[]],
[12,"Watch Repairers",99,-0.212,0,0,100,0,[],[]],
[12,"Wind Turbine Service Technicians",0,-0.971,0,0,0,100,[],[]],
[13,"Administrative Law Judges, Adjudicators, and Hearing Officers",64,1.375,23,0,77,0,["Determine existence and amount of", "Research analyze laws", "Prepare written opinions and decisions"],[]],
[13,"Arbitrators, Mediators, and Conciliators",6,1.432,0,25,0,75,[],["Use mediation techniques", "Confer with disputants", "Prepare written opinions or decisions"]],
[13,"Judges, Magistrate Judges, and Magistrates",40,1.496,0,15,0,85,[],["Write decisions on cases", "Research legal issues and write", "Provide information regarding the judicial"]],
[13,"Judicial Law Clerks",41,1.463,0,21,0,79,[],["Research laws", "Prepare briefs", "Draft proofread judicial opinions"]],
[13,"Lawyers",4,1.329,0,18,0,82,[],["Interpret laws", "Analyze the probable outcomes of", "Advise clients concerning business transactions"]],
[13,"Court Reporters",50,0.835,18,0,82,0,["Transcribe recorded proceedings in accordance", "Record symbols on computer storage"],[]],
[13,"Paralegals and Legal Assistants",94,1.292,8,0,92,0,["Prepare legal documents"],[]],
[13,"Title Examiners, Abstractors, and Searchers",99,1.28,6,0,94,0,["Prepare real estate closing statements,"],[]],
[14,"Animal Scientists",6,1.041,0,0,0,100,[],[]],
[14,"Biochemists and Biophysicists",3,0.906,0,22,0,78,[],["Prepare reports or recommendations", "Teach advise undergraduate or graduate", "Investigate the nature"]],
[14,"Bioinformatics Scientists",1.5,1.01,0,35,0,65,[],["Develop new software applications or", "Analyze large molecular datasets such", "Develop data models and databases"]],
[14,"Biologists",0,0.752,0,9,0,91,[],["Study basic principles of plant", "Study aquatic plants and animals"]],
[14,"Epidemiologists",20,1.436,0,13,0,87,[],["Consult with and advise physicians", "Teach principles of medicine and"]],
[14,"Food Scientists and Technologists",8,0.794,0,15,0,85,[],["Study the structure and composition", "Study methods"]],
[14,"Foresters",0.8,-0.184,0,0,0,100,[],[]],
[14,"Geneticists",1.5,1.01,0,17,0,83,[],["Create use statistical models", "Search scientific literature", "Evaluate genetic data"]],
[14,"Medical Scientists, Except Epidemiologists",0.5,1.28,0,8,0,92,[],["Teach principles of medicine and"]],
[14,"Microbiologists",1.2,0.696,0,14,0,86,[],["Prepare technical reports and recommendations", "Examine physiological"]],
[14,"Molecular and Cellular Biologists",1.5,1.01,0,5,0,95,[],["Prepare reports"]],
[14,"Park Naturalists",1.6,0.069,0,0,0,100,[],[]],
[14,"Range Managers",1.6,0.069,0,0,0,100,[],[]],
[14,"Soil and Plant Scientists",2,0.632,0,11,0,89,[],["Communicate research or project results", "Conduct research", "Provide information or recommendations"]],
[14,"Soil and Water Conservationists",1.6,0.069,0,3,0,97,[],["Review grant applications or make"]],
[14,"Zoologists and Wildlife Biologists",30,0.318,0,7,0,93,[],["Analyze characteristics of animals"]],
[14,"Astronomers",4,1.374,0,57,0,43,[],["Analyze research data", "Review scientific proposals and research", "Develop theories based on personal"]],
[14,"Atmospheric and Space Scientists",67,1.374,12,0,88,0,["Interpret data", "Prepare weather reports or maps", "Gather data from sources such"],[]],
[14,"Chemists",10,0.501,0,23,0,77,[],["Analyze organic or inorganic compounds", "Confer with scientists or engineers", "Study effects of various methods"]],
[14,"Climate Change Analysts",3,1.014,0,21,0,79,[],["Propose new or modified policies", "Prepare study reports", "Review existing policies or legislation"]],
[14,"Environmental Restoration Planners",3,1.014,0,0,0,100,[],[]],
[14,"Environmental Scientists and Specialists, Including Health",3,1.014,0,14,0,86,[],["Plan develop research models,", "Communicate scientific or technical information", "Determine data collection methods"]],
[14,"Geoscientists, Except Hydrologists and Geographers",63,0.714,3,0,97,0,["Locate review research articles or"],[]],
[14,"Hydrologists",1.4,0.641,0,8,0,92,[],["Prepare written and oral reports", "Review applications"]],
[14,"Industrial Ecologists",3,1.014,0,5,0,95,[],["Examine societal issues and their", "Analyze changes designed"]],
[14,"Materials Scientists",2,1.033,0,20,0,80,[],["Prepare reports", "Perform experiments and computer modeling", "Confer with customers"]],
[14,"Physicists",10,1.346,0,13,0,87,[],["Perform complex calculations as part", "Design computer simulations"]],
[14,"Remote Sensing Scientists and Technologists",43,1.14,0,4,0,96,[],["Compile format image data"]],
[14,"Anthropologists",0.8,0.697,0,32,0,68,[],["Write about and present research", "Explain the origins and physical", "Formulate general rules"]],
[14,"Archeologists",0.8,0.697,0,19,0,81,[],["Write present", "Record the exact locations and", "Study objects and structures recovered"]],
[14,"Clinical Psychologists",0.5,1.456,0,19,0,81,[],["Interact with clients", "Provide occupational", "Discuss the treatment of problems"]],
[14,"Counseling Psychologists",0.5,1.456,0,15,0,85,[],["Analyze data such as interview", "Advise clients on how they"]],
[14,"Economists",43,1.404,0,33,0,67,[],["Compile analyze", "Provide advice and consultation", "Formulate recommendations"]],
[14,"Environmental Economists",43,1.404,0,11,0,89,[],["Write technical documents or academic", "Develop economic models"]],
[14,"Geographers",25,1.436,0,17,0,83,[],["Study the economic", "Write present reports of research"]],
[14,"Historians",44,1.099,0,67,0,33,[],["Organize information", "Research the history of a", "Gather historical data from sources"]],
[14,"Industrial-Organizational Psychologists",1.2,1.402,0,40,0,60,[],["Counsel workers about job and", "Write reports on research findings", "Advise management concerning personnel"]],
[14,"Neuropsychologists and Clinical Neuropsychologists",0.4,1.39,0,0,0,100,[],[]],
[14,"Political Scientists",4,1.419,0,58,0,42,[],["Interpret analyze policies", "Develop test theories,", "Identify issues"]],
[14,"School Psychologists",0.5,1.456,0,5,0,95,[],["Collect analyze data"]],
[14,"Sociologists",6,1.411,0,42,0,58,[],["Analyze interpret data", "Develop approaches", "Develop problem intervention procedures,"]],
[14,"Survey Researchers",23,1.427,0,27,0,73,[],["Prepare present summaries and analyses", "Analyze data from surveys", "Review classify"]],
[14,"Transportation Planners",4,1.328,0,14,0,86,[],["Prepare review engineering studies or", "Review development plans", "Prepare reports or recommendations"]],
[14,"Urban and Regional Planners",13,1.228,0,11,0,89,[],["Advise planning officials on project", "Recommend approval"]],
[14,"Agricultural Technicians",97,0.096,8,0,92,0,["Respond to general inquiries or", "Prepare data summaries"],[]],
[14,"Biological Technicians",30,0.301,0,6,0,94,[],["Analyze experimental data and interpret"]],
[14,"Chemical Technicians",57,0.063,25,0,75,0,["Compile interpret results of tests", "Set up and conduct chemical", "Write technical reports or prepare"],[]],
[14,"City and Regional Planning Aides",65,1.205,8,0,92,0,["Research compile"],[]],
[14,"Environmental Science and Protection Technicians, Including Health",77,0.017,4,0,96,0,["Record test data and prepare"],[]],
[14,"Food Science Technicians",97,0.096,20,0,80,0,["Compute moisture or salt content", "Examine chemical or biological samples", "Monitor control temperature of products"],[]],
[14,"Forensic Science Technicians",1,0.24,0,0,0,100,[],[]],
[14,"Forest and Conservation Technicians",42,-0.667,0,5,0,95,[],["Develop maintain computer databases"]],
[14,"Geological Sample Test Technicians",91,0.083,12,0,88,0,["Compile log", "Test analyze samples"],[]],
[14,"Geophysical Data Technicians",91,0.083,0,0,100,0,[],[]],
[14,"Nuclear Equipment Operation Technicians",85,0.17,0,0,100,0,[],[]],
[14,"Nuclear Monitoring Technicians",85,0.17,0,0,100,0,[],[]],
[14,"Precision Agriculture Technicians",61,0.45,0,0,100,0,[],[]],
[14,"Quality Control Analysts",61,0.45,4,0,96,0,["Compile laboratory test data and"],[]],
[14,"Remote Sensing Technicians",61,0.45,18,0,82,0,["Document methods used and write", "Prepare documentation or presentations", "Calibrate data collection equipment"],[]],
[14,"Social Science Research Assistants",65,1.205,22,0,78,0,["Prepare tables", "Prepare manipulate", "Present research findings"],[]],
[15,"Chief Executives",1.5,1.334,0,23,0,77,[],["Analyze operations", "Interpret explain policies", "Confer with board members"]],
[15,"Chief Sustainability Officers",1.5,1.334,0,0,0,100,[],[]],
[15,"General and Operations Managers",16,0.575,0,12,0,88,[],["Review financial statements", "Set prices or credit terms"]],
[15,"Legislators",0,0,0,0,0,100,[],[]],
[15,"Advertising and Promotions Managers",4,1.294,0,20,0,80,[],["Plan prepare advertising and promotional", "Monitor analyze sales promotion results", "Gather organize information"]],
[15,"Green Marketers",4,1.294,0,25,0,75,[],["Develop communications materials", "Analyze the effectiveness of marketing", "Devise evaluate methods and procedures"]],
[15,"Marketing Managers",1.4,1.315,0,15,0,85,[],["Formulate direct", "Advise business or other groups", "Identify develop"]],
[15,"Public Relations and Fundraising Managers",1.5,1.294,0,32,0,68,[],["Develop maintain the company's corporate", "Establish maintain effective working relationships", "Write interesting and effective press"]],
[15,"Sales Managers",1.3,1.266,0,12,0,88,[],["Resolve customer complaints regarding sales", "Determine price schedules and discount"]],
[15,"Administrative Services Managers",73,0.74,0,0,100,0,[],[]],
[15,"Biofuels Production Managers",3,0.509,0,0,0,100,[],[]],
[15,"Biomass Power Plant Managers",3,0.509,0,6,0,94,[],["Evaluate power production or demand"]],
[15,"Computer and Information Systems Managers",4,1.06,0,29,0,71,[],["Consult with users", "Evaluate the organization's technology use", "Develop interpret organizational goals"]],
[15,"Financial Managers, Branch or Department",7,1.446,0,29,0,71,[],["Develop analyze information", "Analyze classify risks and investments", "Evaluate financial reporting systems"]],
[15,"Geothermal Production Managers",3,0.509,0,0,0,100,[],[]],
[15,"Hydroelectric Production Managers",3,0.509,0,0,0,100,[],[]],
[15,"Industrial Production Managers",3,0.509,0,7,0,93,[],["Review operations and confer with"]],
[15,"Logistics Managers",59,0.891,10,0,90,0,["Analyze all aspects of corporate", "Plan implement improvements", "Resolve problems concerning transportation"],[]],
[15,"Methane/Landfill Gas Collection System Operators",3,0.509,0,0,0,100,[],[]],
[15,"Purchasing Managers",3,1.423,0,18,0,82,[],["Administer online purchasing systems", "Develop implement purchasing and contract", "Prepare reports"]],
[15,"Quality Control Systems Managers",3,0.509,0,0,0,100,[],[]],
[15,"Storage and Distribution Managers",59,0.891,3,0,97,0,["Prepare direct preparation of correspondence"],[]],
[15,"Transportation Managers",59,0.891,7,0,93,0,["Analyze expenditures and other financial", "Collaborate with other managers or"],[]],
[15,"Treasurers and Controllers",7,1.446,0,18,0,82,[],["Maintain current knowledge of organizational", "Analyze the financial details of", "Receive record"]],
[15,"Compensation and Benefits Managers",96,1.298,17,0,83,0,["Direct preparation and distribution of", "Analyze statistical data and reports", "Analyze compensation policies"],[]],
[15,"Human Resources Managers",0.6,1.32,0,12,0,88,[],["Analyze statistical data and reports", "Provide current and prospective employees", "Advise managers on organizational policy"]],
[15,"Training and Development Managers",0.6,1.284,0,33,0,67,[],["Plan develop", "Analyze training needs", "Evaluate instructor performance and the"]],
[15,"Aquacultural Managers",5,-0.144,0,5,0,95,[],["Identify environmental requirements of a"]],
[15,"Architectural and Engineering Managers",1.7,0.837,0,10,0,90,[],["Present explain proposals", "Consult negotiate with clients"]],
[15,"Biofuels/Biodiesel Technology and Product Development Managers",1.7,0.837,0,0,0,100,[],[]],
[15,"Construction Managers",7,1.029,0,16,0,84,[],["Interpret explain plans and contract", "Confer with supervisory personnel", "Plan organize"]],
[15,"Distance Learning Coordinators",0,0.354,0,4,0,96,[],["Analyze data"]],
[15,"Education Administrators, Elementary and Secondary School",0.5,1.049,0,23,0,77,[],["Write articles", "Plan develop instructional methods and", "Evaluate curricula"]],
[15,"Education Administrators, Postsecondary",1,1.461,0,4,0,96,[],["Establish operational policies and procedures"]],
[15,"Education Administrators, Preschool and Childcare Center/Program",1.5,0.838,0,24,0,76,[],["Write articles", "Inform businesses", "Collect analyze survey data"]],
[15,"Farm and Ranch Managers",5,-0.144,0,0,0,100,[],[]],
[15,"Fitness and Wellness Coordinators",0,0.354,0,9,0,91,[],["Provide individual support or counseling", "Use computer skills and software"]],
[15,"Food Service Managers",8,-0.121,0,7,0,93,[],["Estimate food", "Review menus and analyze recipes"]],
[15,"Funeral Service Managers",0,0.372,0,14,0,86,[],["Review financial statements", "Conduct market research and analyze", "Explain goals"]],
[15,"Gaming Managers",9,0.83,0,5,0,95,[],["Resolve customer complaints regarding problems"]],
[15,"Lodging Managers",0.4,0.402,0,4,0,96,[],["Develop implement policies and procedures"]],
[15,"Nursery and Greenhouse Managers",5,-0.144,0,10,0,90,[],["Determine plant growing conditions", "Explain enforce safety regulations and"]],
[15,"Brownfield Redevelopment Specialists and Site Managers",25,0.965,0,0,0,100,[],[]],
[15,"Clinical Research Coordinators",1.8,1.328,0,12,0,88,[],["Code evaluate", "Review proposed study protocols", "Prepare study-related documentation such as"]],
[15,"Compliance Managers",25,0.965,0,3,0,97,[],["Keep informed regarding pending industry"]],
[15,"Emergency Management Directors",0.3,1.031,0,0,0,100,[],[]],
[15,"Investment Fund Managers",25,0.965,0,25,0,75,[],["Present investment information", "Monitor financial or operational performance", "Perform evaluate research"]],
[15,"Loss Prevention Managers",25,0.965,0,4,0,96,[],["Identify potential"]],
[15,"Medical and Health Services Managers",0.7,1.26,0,22,0,78,[],["Develop instructional materials and conduct", "Develop maintain computerized record management", "Develop implement organizational policies and"]],
[15,"Natural Sciences Managers",1.8,1.328,0,25,0,75,[],["Review project activities and prepare", "Advise assist in obtaining patents", "Develop client relationships and communicate"]],
[15,"Postmasters and Mail Superintendents",75,0.823,0,0,100,0,[],[]],
[15,"Property, Real Estate, and Community Association Managers",81,1.215,15,0,85,0,["Maintain records of sales", "Manage oversee operations", "Negotiate the sale"],[]],
[15,"Regulatory Affairs Managers",25,0.965,0,11,0,89,[],["Establish procedures or systems", "Represent organizations before domestic or", "Provide regulatory guidance"]],
[15,"Security Managers",25,0.965,0,33,0,67,[],["Analyze evaluate security operations", "Identify investigate", "Assess risks"]],
[15,"Social and Community Service Managers",0.7,1.156,0,6,0,94,[],["Research analyze member or community"]],
[15,"Supply Chain Managers",25,0.965,0,3,0,97,[],["Document physical supply chain processes"]],
[15,"Water Resource Specialists",1.8,1.328,0,0,0,100,[],[]],
[15,"Wind Energy Operations Managers",25,0.965,0,6,0,94,[],["Develop relationships and communicate with"]],
[15,"Wind Energy Project Managers",25,0.965,0,7,0,93,[],["Provide verbal or written project"]],
[16,"First-Line Supervisors of Office and Administrative Support Workers",1.4,1.039,0,21,0,79,[],["Participate in the work of", "Resolve customer complaints or answer", "Analyze financial activities of establishments"]],
[16,"Switchboard Operators, Including Answering Service",96,0.983,5,0,95,0,["Record messages"],[]],
[16,"Telephone Operators",97,1.02,0,0,100,0,[],[]],
[16,"Bill and Account Collectors",95,1.272,13,0,87,0,["Advise customers of necessary actions", "Sort file correspondence and perform"],[]],
[16,"Billing, Cost, and Rate Clerks",96,1.333,6,0,94,0,["Resolve discrepancies in accounting records"],[]],
[16,"Bookkeeping, Accounting, and Auditing Clerks",98,1.04,20,0,80,0,["Classify record", "Perform financial calculations", "Compile statistical"],[]],
[16,"Gaming Cage Workers",39,0.403,0,0,0,100,[],[]],
[16,"Payroll and Timekeeping Clerks",97,1.258,0,0,100,0,[],[]],
[16,"Procurement Clerks",98,1.488,0,0,100,0,[],[]],
[16,"Statement Clerks",96,1.333,0,0,100,0,[],[]],
[16,"Tellers",98,0.473,0,0,100,0,[],[]],
[16,"Brokerage Clerks",98,1.145,10,0,90,0,["Document security transactions"],[]],
[16,"Correspondence Clerks",86,1.15,29,0,71,0,["Compose letters in reply", "Complete form letters in response", "Gather records pertinent"],[]],
[16,"Court Clerks",46,1.166,0,13,0,87,[],["Explain procedures or forms", "Examine legal documents submitted", "Answer inquiries from the general"]],
[16,"Credit Authorizers",97,1.44,0,0,100,0,[],[]],
[16,"Credit Checkers",97,1.44,29,0,71,0,["Relay credit report information", "Prepare reports of findings and"],[]],
[16,"Customer Service Representatives",55,0.956,27,0,73,0,["Confer with customers", "Resolve customers' service or billing", "Review insurance policy terms"],[]],
[16,"Eligibility Interviewers, Government Programs",70,1.226,18,0,82,0,["Interpret explain information such as", "Answer applicants' questions about benefits", "Provide applicants with assistance in"],[]],
[16,"File Clerks",97,0.284,5,0,95,0,["Answer questions about records or"],[]],
[16,"Hotel, Motel, and Resort Desk Clerks",94,0.606,5,0,95,0,["Answer inquiries pertaining"],[]],
[16,"License Clerks",46,1.166,0,10,0,90,[],["Conduct score oral", "Verify the authenticity of documents"]],
[16,"Municipal Clerks",46,1.166,0,13,0,87,[],["Respond to requests", "Prepare meeting agendas or packets", "Collaborate with other staff"]],
[16,"Patient Representatives",55,0.956,38,0,62,0,["Explain policies", "Coordinate communication between patients", "Develop distribute newsletters"],[]],
[16,"Human Resources Assistants, Except Payroll and Timekeeping",90,1.353,33,0,67,0,["Process review employment applications", "Arrange for advertising or posting", "Process verify"],[]],
[16,"Interviewers, Except Eligibility and Loan",94,1.297,19,0,81,0,["Identify report problems in obtaining", "Compile record", "Ask questions in accordance with"],[]],
[16,"Library Assistants, Clerical",95,0.204,6,0,94,0,["Classify catalog items according", "Locate library materials"],[]],
[16,"Loan Interviewers and Clerks",92,1.364,11,0,89,0,["Assemble compile documents", "Calculate review"],[]],
[16,"New Accounts Clerks",99,1.175,0,0,100,0,[],[]],
[16,"Order Clerks",98,0.839,0,0,100,0,[],[]],
[16,"Receptionists and Information Clerks",96,1.013,26,0,74,0,["Analyze data", "Transmit information or documents", "Calculate quote rates"],[]],
[16,"Reservation and Transportation Ticket Agents and Travel Clerks",61,0.227,14,0,86,0,["Answer inquiries regarding information such", "Provide customers with travel suggestions", "Make confirm reservations"],[]],
[16,"Cargo and Freight Agents",99,1.405,0,0,100,0,[],[]],
[16,"Couriers and Messengers",94,-0.959,6,0,94,0,["Plan follow the most efficient"],[]],
[16,"Dispatchers, Except Police, Fire, and Ambulance",96,1.235,0,0,100,0,[],[]],
[16,"Freight Forwarders",99,1.405,3,0,97,0,["Inform clients of factors such"],[]],
[16,"Marking Clerks",64,-0.789,0,0,100,0,[],[]],
[16,"Meter Readers, Utilities",85,-0.972,0,0,100,0,[],[]],
[16,"Order Fillers, Wholesale and Retail Sales",64,-0.789,0,0,100,0,[],[]],
[16,"Police, Fire, and Ambulance Dispatchers",49,0.907,0,11,0,89,[],["Read effectively interpret small-scale maps", "Maintain access to"]],
[16,"Postal Service Clerks",95,-0.519,0,0,100,0,[],[]],
[16,"Postal Service Mail Carriers",68,-1.065,0,0,100,0,[],[]],
[16,"Postal Service Mail Sorters, Processors, and Processing Machine Operators",0,-1.185,0,0,0,100,[],[]],
[16,"Production, Planning, and Expediting Clerks",88,0.7,6,0,94,0,["Calculate figures"],[]],
[16,"Shipping, Receiving, and Traffic Clerks",98,-0.746,0,0,100,0,[],[]],
[16,"Stock Clerks- Stockroom, Warehouse, or Storage Yard",64,-0.789,0,0,100,0,[],[]],
[16,"Stock Clerks, Sales Floor",64,-0.789,8,0,92,0,["Answer customers' questions about merchandise"],[]],
[16,"Weighers, Measurers, Checkers, and Samplers, Recordkeeping",95,-0.186,5,0,95,0,["Prepare measurement tables and conversion"],[]],
[16,"Executive Secretaries and Executive Administrative Assistants",86,1.08,18,0,82,0,["Prepare responses", "Review operating practices and procedures", "Conduct research"],[]],
[16,"Legal Secretaries",98,1.015,0,0,100,0,[],[]],
[16,"Medical Secretaries",81,1.218,0,0,100,0,[],[]],
[16,"Secretaries and Administrative Assistants, Except Legal, Medical, and Executive",96,1.099,22,0,78,0,["Create maintain", "Conduct searches", "Develop maintain internal or external"],[]],
[16,"Computer Operators",78,0.704,33,0,67,0,["Help programmers and systems analysts", "Respond to program error messages", "Record information such as computer"],[]],
[16,"Data Entry Keyers",99,0.311,11,0,89,0,["Compile sort and verify the"],[]],
[16,"Desktop Publishers",16,0.344,0,22,0,78,[],["Position text and art elements", "Enter text into computer keyboard", "Convert various types of files"]],
[16,"Insurance Claims Clerks",98,1.24,9,0,91,0,["Enter claims information into database"],[]],
[16,"Insurance Policy Processing Clerks",98,1.24,12,0,88,0,["Compose business correspondence", "Process prepare"],[]],
[16,"Mail Clerks and Mail Machine Operators, Except Postal Service",94,-0.818,0,0,100,0,[],[]],
[16,"Office Clerks, General",96,0.989,29,0,71,0,["Troubleshoot problems involving office equipment", "Process prepare documents", "Communicate with customers"],[]],
[16,"Office Machine Operators, Except Computer",92,-0.517,6,0,94,0,["Compute prices"],[]],
[16,"Proofreaders and Copy Markers",84,1.288,12,0,88,0,["Mark copy"],[]],
[16,"Word Processors and Typists",81,0.622,32,0,68,0,["Reformat documents", "Check completed work", "Type correspondence"],[]],
[16,"Bioinformatics Technicians",66,1.39,53,0,47,0,["Perform routine system administrative functions", "Develop apply data mining and", "Monitor database performance and perform"],[]],
[16,"Statistical Assistants",66,1.39,29,0,71,0,["Compile reports", "Compute analyze data,", "Discuss data presentation requirements with"],[]],
[17,"First-Line Supervisors of Personal Service Workers",8,0.43,0,0,0,100,[],[]],
[17,"Gaming Supervisors",28,1.128,0,0,0,100,[],[]],
[17,"Slot Supervisors",54,-0.137,0,0,100,0,[],[]],
[17,"Spa Managers",8,0.43,0,10,0,90,[],["Develop implement marketing strategies", "Respond to customer inquiries or"]],
[17,"Animal Trainers",10,-0.917,0,0,0,100,[],[]],
[17,"Nonfarm Animal Caretakers",82,-0.889,0,0,100,0,[],[]],
[17,"Amusement and Recreation Attendants",72,-0.525,5,0,95,0,["Provide information about facilities"],[]],
[17,"Costume Attendants",61,-0.453,0,0,100,0,[],[]],
[17,"Gaming and Sports Book Writers and Runners",91,0.465,0,0,100,0,[],[]],
[17,"Gaming Dealers",96,0.061,0,0,100,0,[],[]],
[17,"Locker Room, Coatroom, and Dressing Room Attendants",43,-0.345,0,4,0,96,[],["Answer customer inquiries or explain"]],
[17,"Motion Picture Projectionists",97,-0.379,0,0,100,0,[],[]],
[17,"Ushers, Lobby Attendants, and Ticket Takers",96,-0.242,0,0,100,0,[],[]],
[17,"Embalmers",54,-0.731,0,0,100,0,[],[]],
[17,"Funeral Attendants",37,-0.545,0,0,0,100,[],[]],
[17,"Morticians, Undertakers, and Funeral Directors",20,-0.19,0,5,0,95,[],["Offer counsel and comfort"]],
[17,"Barbers",80,-0.729,0,0,100,0,[],[]],
[17,"Hairdressers, Hairstylists, and Cosmetologists",11,-0.682,0,5,0,95,[],["Analyze patrons' hair and other"]],
[17,"Makeup Artists, Theatrical and Performance",1,-0.46,0,0,0,100,[],[]],
[17,"Manicurists and Pedicurists",95,0.034,0,0,100,0,[],[]],
[17,"Shampooers",79,-0.905,0,0,100,0,[],[]],
[17,"Skincare Specialists",29,-0.263,0,0,0,100,[],[]],
[17,"Baggage Porters and Bellhops",83,-1.272,6,0,94,0,["Supply guests or travelers with"],[]],
[17,"Concierges",21,0.856,0,7,0,93,[],["Provide information about local features"]],
[17,"Tour Guides and Escorts",91,0.357,5,0,95,0,["Speak foreign languages"],[]],
[17,"Travel Guides",6,0.608,0,12,0,88,[],["Plan tour itineraries", "Resolve any problems with itineraries"]],
[17,"Childcare Workers",8,-0.383,0,8,0,92,[],["Communicate with children's parents or", "Create developmentally appropriate lesson plans"]],
[17,"Fitness Trainers and Aerobics Instructors",9,-2.112,0,0,0,100,[],[]],
[17,"Nannies",8,-0.383,0,0,0,100,[],[]],
[17,"Personal Care Aides",74,-0.574,9,0,91,0,["Provide clients with communication assistance"],[]],
[17,"Recreation Workers",0.6,-0.244,0,0,0,100,[],[]],
[17,"Residential Advisors",6,0.475,0,3,0,97,[],["Develop program plans"]],
[18,"First-Line Supervisors of Production and Operating Workers",1.6,-0.085,0,0,0,100,[],[]],
[18,"Aircraft Structure, Surfaces, Rigging, and Systems Assemblers",79,-0.868,3,0,97,0,["Layout mark reference points and"],[]],
[18,"Coil Winders, Tapers, and Finishers",73,-0.829,0,0,100,0,[],[]],
[18,"Electrical and Electronic Equipment Assemblers",95,-0.625,0,0,100,0,[],[]],
[18,"Electromechanical Equipment Assemblers",97,-0.498,0,0,100,0,[],[]],
[18,"Engine and Other Machine Assemblers",82,-0.956,8,0,92,0,["Verify conformance of parts"],[]],
[18,"Fiberglass Laminators and Fabricators",93,-1.216,0,0,100,0,[],[]],
[18,"Structural Metal Fabricators and Fitters",41,-1.076,0,0,0,100,[],[]],
[18,"Team Assemblers",97,-0.831,0,0,100,0,[],[]],
[18,"Timing Device Assemblers and Adjusters",98,-0.255,0,0,100,0,[],[]],
[18,"Bakers",89,-0.385,17,0,83,0,["Adapt the quantity of ingredients", "Develop new recipes", "Measure weigh flour or other"],[]],
[18,"Butchers and Meat Cutters",93,-0.971,0,0,100,0,[],[]],
[18,"Food and Tobacco Roasting, Baking, and Drying Machine Operators and Tenders",0,-0.759,0,0,0,100,[],[]],
[18,"Food Batchmakers",70,-0.379,8,0,92,0,["Follow recipes", "Formulate modify recipes"],[]],
[18,"Food Cooking Machine Operators and Tenders",61,-0.556,0,0,100,0,[],[]],
[18,"Meat, Poultry, and Fish Cutters and Trimmers",94,-1.106,0,0,100,0,[],[]],
[18,"Slaughterers and Meat Packers",60,-1.835,0,0,100,0,[],[]],
[18,"Computer Numerically Controlled Machine Tool Programmers, Metal and Plastic",0,-0.024,0,20,0,80,[],["Modify existing programs", "Write programs in the language", "Revise programs or tapes"]],
[18,"Computer-Controlled Machine Tool Operators, Metal and Plastic",86,-0.674,15,0,85,0,["Implement changes", "Measure dimensions of finished workpieces", "Enter commands or load control"],[]],
[18,"Cutting, Punching, and Press Machine Setters, Operators, and Tenders, Metal and Plastic",78,-1.037,0,0,100,0,[],[]],
[18,"Drilling and Boring Machine Tool Setters, Operators, and Tenders, Metal and Plastic",0,-0.76,0,0,0,100,[],[]],
[18,"Extruding and Drawing Machine Setters, Operators, and Tenders, Metal and Plastic",91,-1.234,0,0,100,0,[],[]],
[18,"Forging Machine Setters, Operators, and Tenders, Metal and Plastic",93,-0.805,0,0,100,0,[],[]],
[18,"Foundry Mold and Coremakers",67,-1.74,0,0,100,0,[],[]],
[18,"Grinding, Lapping, Polishing, and Buffing Machine Tool Setters, Operators, and Tenders, Metal and Plastic",0,-0.99,0,0,0,100,[],[]],
[18,"Lathe and Turning Machine Tool Setters, Operators, and Tenders, Metal and Plastic",84,-1.067,0,0,100,0,[],[]],
[18,"Machinists",65,-0.868,3,0,97,0,["Calculate dimensions or tolerances,"],[]],
[18,"Metal-Refining Furnace Operators and Tenders",88,-1.167,0,0,100,0,[],[]],
[18,"Milling and Planing Machine Setters, Operators, and Tenders, Metal and Plastic",0,-0.87,0,0,0,100,[],[]],
[18,"Model Makers, Metal and Plastic",93,-0.742,0,0,100,0,[],[]],
[18,"Molding, Coremaking, and Casting Machine Setters, Operators, and Tenders, Metal and Plastic",0,-1.146,0,0,0,100,[],[]],
[18,"Multiple Machine Tool Setters, Operators, and Tenders, Metal and Plastic",0,-0.743,0,5,0,95,[],["Compute data such as gear"]],
[18,"Patternmakers, Metal and Plastic",90,-0.613,7,0,93,0,["Verify conformance of patterns or"],[]],
[18,"Pourers and Casters, Metal",87,-1.009,0,0,100,0,[],[]],
[18,"Rolling Machine Setters, Operators, and Tenders, Metal and Plastic",83,-1.089,0,0,100,0,[],[]],
[18,"Heat Treating Equipment Setters, Operators, and Tenders, Metal and Plastic",0,-1.092,0,0,0,100,[],[]],
[18,"Layout Workers, Metal and Plastic",84,-0.722,0,0,100,0,[],[]],
[18,"Plating and Coating Machine Setters, Operators, and Tenders, Metal and Plastic",0,-0.9,0,0,0,100,[],[]],
[18,"Solderers and Brazers",94,-1.198,0,0,100,0,[],[]],
[18,"Tool and Die Makers",84,-0.532,6,0,94,0,["Verify dimensions"],[]],
[18,"Tool Grinders, Filers, and Sharpeners",88,-0.881,0,0,100,0,[],[]],
[18,"Welders, Cutters, and Welder Fitters",94,-1.198,0,0,100,0,[],[]],
[18,"Welding, Soldering, and Brazing Machine Setters, Operators, and Tenders",0,-1.002,0,0,0,100,[],[]],
[18,"Prepress Technicians and Workers",97,0.411,3,0,97,0,["Enter position"],[]],
[18,"Print Binding and Finishing Workers",95,-0.906,0,0,100,0,[],[]],
[18,"Printing Press Operators",83,-0.709,0,0,100,0,[],[]],
[18,"Extruding and Forming Machine Setters, Operators, and Tenders, Synthetic and Glass Fibers",0,-0.86,0,0,0,100,[],[]],
[18,"Fabric and Apparel Patternmakers",0.5,-0.083,0,0,0,100,[],[]],
[18,"Laundry and Dry-Cleaning Workers",71,-1.054,0,0,100,0,[],[]],
[18,"Pressers, Textile, Garment, and Related Materials",81,-1.95,0,0,100,0,[],[]],
[18,"Sewers, Hand",99,-0.599,0,0,100,0,[],[]],
[18,"Sewing Machine Operators",89,-0.964,0,0,100,0,[],[]],
[18,"Shoe and Leather Workers and Repairers",52,-0.991,0,0,100,0,[],[]],
[18,"Shoe Machine Operators and Tenders",97,-1.03,0,0,100,0,[],[]],
[18,"Tailors, Dressmakers, and Custom Sewers",84,-0.431,5,0,95,0,["Develop copy"],[]],
[18,"Textile Bleaching and Dyeing Machine Operators and Tenders",97,-0.861,4,0,96,0,["Key in processing instructions"],[]],
[18,"Textile Cutting Machine Setters, Operators, and Tenders",95,-1.023,6,0,94,0,["Program electronic equipment"],[]],
[18,"Textile Knitting and Weaving Machine Setters, Operators, and Tenders",73,-1.242,5,0,95,0,["Program electronic equipment"],[]],
[18,"Textile Winding, Twisting, and Drawing Out Machine Setters, Operators, and Tenders",0,-1.393,0,0,0,100,[],[]],
[18,"Upholsterers",39,-1.314,0,0,0,100,[],[]],
[18,"Cabinetmakers and Bench Carpenters",92,-1.327,0,0,100,0,[],[]],
[18,"Furniture Finishers",87,-1.198,0,0,100,0,[],[]],
[18,"Model Makers, Wood",96,-0.728,7,0,93,0,["Verify dimensions and contours of"],[]],
[18,"Patternmakers, Wood",91,-1.058,10,0,90,0,["Compute dimensions", "Verify dimensions of completed patterns,"],[]],
[18,"Sawing Machine Setters, Operators, and Tenders, Wood",86,-1.165,0,0,100,0,[],[]],
[18,"Woodworking Machine Setters, Operators, and Tenders, Except Sawing",97,-1.13,0,0,100,0,[],[]],
[18,"Biofuels Processing Technicians",86,-0.67,0,0,100,0,[],[]],
[18,"Biomass Plant Technicians",86,-0.67,0,0,100,0,[],[]],
[18,"Chemical Plant and System Operators",85,-0.383,0,0,100,0,[],[]],
[18,"Gas Plant Operators",78,-0.298,0,0,100,0,[],[]],
[18,"Hydroelectric Plant Technicians",86,-0.67,0,0,100,0,[],[]],
[18,"Methane/Landfill Gas Generation System Technicians",86,-0.67,6,0,94,0,["Analyze the layout"],[]],
[18,"Nuclear Power Reactor Operators",95,0.771,0,0,100,0,[],[]],
[18,"Petroleum Pump System Operators, Refinery Operators, and Gaugers",71,-0.37,8,0,92,0,["Calculate test result values,", "Record compile operating data"],[]],
[18,"Power Distributors and Dispatchers",64,0.501,13,0,87,0,["Control monitor", "Distribute regulate the flow of"],[]],
[18,"Power Plant Operators",85,-0.348,4,0,96,0,["Record compile operational data"],[]],
[18,"Stationary Engineers and Boiler Operators",89,-0.503,0,0,100,0,[],[]],
[18,"Water and Wastewater Treatment Plant and System Operators",61,-0.445,0,0,100,0,[],[]],
[18,"Chemical Equipment Operators and Tenders",76,-0.512,0,0,100,0,[],[]],
[18,"Crushing, Grinding, and Polishing Machine Setters, Operators, and Tenders",0,-1.043,0,0,0,100,[],[]],
[18,"Cutters and Trimmers, Hand",64,-0.948,0,0,100,0,[],[]],
[18,"Cutting and Slicing Machine Setters, Operators, and Tenders",86,-1.079,4,0,96,0,["Review work orders"],[]],
[18,"Dental Laboratory Technicians",97,0.001,0,0,100,0,[],[]],
[18,"Extruding, Forming, Pressing, and Compacting Machine Setters, Operators, and Tenders",0,-1.042,0,0,0,100,[],[]],
[18,"Furnace, Kiln, Oven, Drier, and Kettle Operators and Tenders",37,-0.958,0,0,0,100,[],[]],
[18,"Gem and Diamond Workers",95,-0.156,0,0,100,0,[],[]],
[18,"Grinding and Polishing Workers, Hand",97,-1.147,0,0,100,0,[],[]],
[18,"Inspectors, Testers, Sorters, Samplers, and Weighers",98,-0.029,6,0,94,0,["Analyze test data", "Measure dimensions of products"],[]],
[18,"Jewelers",95,-0.156,2,0,98,0,["Compute costs of labor and"],[]],
[18,"Medical Appliance Technicians",45,-0.495,0,0,0,100,[],[]],
[18,"Mixing and Blending Machine Setters, Operators, and Tenders",83,-0.82,0,0,100,0,[],[]],
[18,"Ophthalmic Laboratory Technicians",97,-0.597,0,0,100,0,[],[]],
[18,"Precious Metal Workers",95,-0.156,3,0,97,0,["Design silver articles"],[]],
[18,"Separating, Filtering, Clarifying, Precipitating, and Still Machine Setters, Operators, and Tenders",0,-0.938,0,0,0,100,[],[]],
[18,"Adhesive Bonding Machine Operators and Tenders",95,-1.311,0,0,100,0,[],[]],
[18,"Cleaning, Washing, and Metal Pickling Equipment Operators and Tenders",0,-1.142,0,0,0,100,[],[]],
[18,"Coating, Painting, and Spraying Machine Setters, Operators, and Tenders",0,-1.121,0,0,0,100,[],[]],
[18,"Cooling and Freezing Equipment Operators and Tenders",93,-0.96,0,0,100,0,[],[]],
[18,"Etchers and Engravers",98,-0.64,0,0,100,0,[],[]],
[18,"Glass Blowers, Molders, Benders, and Finishers",90,-1.183,0,0,100,0,[],[]],
[18,"Helpers--Production Workers",66,-1.411,0,0,100,0,[],[]],
[18,"Molding and Casting Workers",90,-1.183,4,0,96,0,["Verify dimensions of products,"],[]],
[18,"Packaging and Filling Machine Operators and Tenders",98,-0.979,0,0,100,0,[],[]],
[18,"Painters, Transportation Equipment",69,-1.448,0,0,100,0,[],[]],
[18,"Painting, Coating, and Decorating Workers",92,-0.971,0,0,100,0,[],[]],
[18,"Paper Goods Machine Setters, Operators, and Tenders",67,-0.874,0,0,100,0,[],[]],
[18,"Photographic Process Workers and Processing Machine Operators",99,-0.362,3,0,97,0,["Examine drawings"],[]],
[18,"Potters, Manufacturing",90,-1.183,0,0,100,0,[],[]],
[18,"Recycling and Reclamation Workers",92,-1.291,0,0,100,0,[],[]],
[18,"Semiconductor Processors",88,-0.637,0,0,100,0,[],[]],
[18,"Stone Cutters and Carvers, Manufacturing",90,-1.183,0,0,100,0,[],[]],
[18,"Tire Builders",94,-1.611,0,0,100,0,[],[]],
[19,"First-Line Supervisors of Correctional Officers",3,-0.558,0,0,0,100,[],[]],
[19,"First-Line Supervisors of Police and Detectives",0.4,-0.192,0,0,0,100,[],[]],
[19,"Forest Fire Fighting and Prevention Supervisors",0.4,-0.593,0,0,0,100,[],[]],
[19,"Municipal Fire Fighting and Prevention Supervisors",0.4,-0.593,0,0,0,100,[],[]],
[19,"Fire Inspectors",48,0.063,0,0,0,100,[],[]],
[19,"Fire Investigators",48,0.063,0,0,0,100,[],[]],
[19,"Forest Fire Inspectors and Prevention Specialists",5,-0.214,0,0,0,100,[],[]],
[19,"Forest Firefighters",17,-1.32,0,0,0,100,[],[]],
[19,"Municipal Firefighters",17,-1.32,0,0,0,100,[],[]],
[19,"Bailiffs",36,-0.51,0,0,0,100,[],[]],
[19,"Correctional Officers and Jailers",60,-0.888,4,0,96,0,["Use nondisciplinary tools and equipment"],[]],
[19,"Criminal Investigators and Special Agents",34,0.226,0,5,0,95,[],["Manage security programs designed"]],
[19,"Fish and Game Wardens",8,-0.459,0,0,0,100,[],[]],
[19,"Immigration and Customs Inspectors",34,0.226,0,9,0,91,[],["Examine immigration applications"]],
[19,"Intelligence Analysts",34,0.226,0,17,0,83,[],["Prepare comprehensive written reports", "Validate known intelligence with data", "Gather intelligence information"]],
[19,"Parking Enforcement Workers",84,-0.624,0,0,100,0,[],[]],
[19,"Police Detectives",34,0.226,0,3,0,97,[],["Analyze completed police reports"]],
[19,"Police Identification and Records Officers",34,0.226,0,0,0,100,[],[]],
[19,"Police Patrol Officers",0,-0.668,0,15,0,85,[],["Record facts", "Provide road information", "Review facts of incidents"]],
[19,"Sheriffs and Deputy Sheriffs",0,-0.668,0,0,0,100,[],[]],
[19,"Transit and Railroad Police",57,-0.821,0,0,100,0,[],[]],
[19,"Animal Control Workers",21,-0.595,0,0,0,100,[],[]],
[19,"Crossing Guards",49,-0.57,0,0,0,100,[],[]],
[19,"Gaming Surveillance Officers and Gaming Investigators",95,0.728,0,0,100,0,[],[]],
[19,"Lifeguards, Ski Patrol, and Other Recreational Protective Service Workers",0,-0.472,0,0,0,100,[],[]],
[19,"Private Detectives and Investigators",31,0.748,0,0,0,100,[],[]],
[19,"Retail Loss Prevention Specialists",0,0.076,0,5,0,95,[],["Implement monitor processes"]],
[19,"Security Guards",84,-0.391,0,0,100,0,[],[]],
[19,"Transportation Security Screeners",0,-0.507,0,0,0,100,[],[]],
[20,"First-Line Supervisors of Non-Retail Sales Workers",8,1.316,0,11,0,89,[],["Listen to and resolve customer", "Confer with company officials"]],
[20,"First-Line Supervisors of Retail Sales Workers",28,0.019,0,14,0,86,[],["Confer with company officials", "Plan coordinate advertising campaigns and", "Provide customer service"]],
[20,"Cashiers",97,-0.248,11,0,89,0,["Answer customers' questions", "Receive payment", "Greet customers entering establishments"],[]],
[20,"Counter and Rental Clerks",97,0.078,12,0,88,0,["Recommend provide advice on a", "Explain rental fees"],[]],
[20,"Gaming Change Persons and Booth Cashiers",83,-0.05,0,0,100,0,[],[]],
[20,"Parts Salespersons",98,-0.118,5,0,95,0,["Receive payment or obtain credit"],[]],
[20,"Retail Salespersons",92,0.087,17,0,83,0,["Recommend select", "Greet customers and ascertain what", "Describe merchandise and explain use"],[]],
[20,"Advertising Sales Agents",54,1.163,15,0,85,0,["Explain to customers how specific", "Write copy as part of", "Obtain study information about clients'"],[]],
[20,"Energy Brokers",0,1.303,0,6,0,94,[],["Explain contracts or related documents"]],
[20,"Insurance Sales Agents",92,1.341,5,0,95,0,["Customize insurance programs"],[]],
[20,"Sales Agents, Financial Services",1.6,1.256,0,25,0,75,[],["Contact prospective customers", "Evaluate costs and revenue of"]],
[20,"Sales Agents, Securities and Commodities",1.6,1.256,0,47,0,53,[],["Explain stock market terms or", "Analyze", "Prepare documents needed"]],
[20,"Securities and Commodities Traders",1.6,1.256,0,23,0,77,[],["Analyze target companies or investment", "Devise trading", "Track analyze factors"]],
[20,"Travel Agents",10,1.134,0,29,0,71,[],["Plan describe", "Converse with customer"]],
[20,"Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific Products",85,0.822,10,0,90,0,["Monitor", "Answer customers' questions about products"],[]],
[20,"Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products",0,0.891,0,22,0,78,[],["Study documentation or other information", "Answer customers' questions about products", "Select assist customers in selecting"]],
[20,"Solar Sales Representatives and Assessors",0,0.891,0,8,0,92,[],["Provide technical information about solar"]],
[20,"Demonstrators and Product Promoters",51,0.124,17,0,83,0,["Prepare alter presentation contents", "Suggest specific product purchases", "Learn about competitors' products or"],[]],
[20,"Door-To-Door Sales Workers, News and Street Vendors, and Related Workers",0,1.107,0,17,0,83,[],["Answer questions about product features", "Explain products or services and"]],
[20,"Models",98,-1.122,0,0,100,0,[],[]],
[20,"Real Estate Brokers",97,1.15,16,0,84,0,["Act as an intermediary in", "Maintain knowledge of real estate", "Maintain working knowledge of various"],[]],
[20,"Real Estate Sales Agents",86,0.865,25,0,75,0,["Advise clients", "Evaluate mortgage options", "Promote sales of properties"],[]],
[20,"Sales Engineers",0.4,1.145,0,20,0,80,[],["Develop present", "Research identify potential customers", "Confer with customers and engineers"]],
[20,"Telemarketers",99,1.118,8,0,92,0,["Explain products or services and"],[]],
[21,"Aircraft Cargo Handling Supervisors",7,-0.709,0,0,0,100,[],[]],
[21,"First-Line Supervisors of Helpers, Laborers, and Material Movers, Hand",0,0.116,0,8,0,92,[],["Participate in the hiring process", "Check specifications of materials loaded"]],
[21,"First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators",0,0.147,0,0,0,100,[],[]],
[21,"Recycling Coordinators",0,0.116,0,0,0,100,[],[]],
[21,"Air Traffic Controllers",11,1.153,0,4,0,96,[],["Review records or reports"]],
[21,"Airfield Operations Specialists",71,0.485,0,0,100,0,[],[]],
[21,"Airline Pilots, Copilots, and Flight Engineers",18,-0.207,0,4,0,96,[],["Plan formulate flight activities and"]],
[21,"Commercial Pilots",55,-0.182,4,0,96,0,["Plan formulate flight activities and"],[]],
[21,"Flight Attendants",35,-0.762,0,0,0,100,[],[]],
[21,"Ambulance Drivers and Attendants, Except Emergency Medical Technicians",25,-0.83,0,0,0,100,[],[]],
[21,"Bus Drivers, School or Special Client",89,-0.298,7,0,93,0,["Read maps and follow written"],[]],
[21,"Bus Drivers, Transit and Intercity",67,-0.605,0,0,100,0,[],[]],
[21,"Driver/Sales Workers",98,-0.729,8,0,92,0,["Listen to and resolve customers'"],[]],
[21,"Heavy and Tractor-Trailer Truck Drivers",79,-1.149,3,0,97,0,["Plan adjust routes based"],[]],
[21,"Light Truck or Delivery Services Drivers",69,-1.121,0,0,100,0,[],[]],
[21,"Taxi Drivers and Chauffeurs",89,-0.632,0,0,100,0,[],[]],
[21,"Locomotive Engineers",96,-0.498,0,0,100,0,[],[]],
[21,"Locomotive Firers",93,-0.771,0,0,100,0,[],[]],
[21,"Rail Yard Engineers, Dinkey Operators, and Hostlers",91,-0.832,4,0,96,0,["Receive relay"],[]],
[21,"Railroad Brake, Signal, and Switch Operators",83,-1.218,0,0,100,0,[],[]],
[21,"Railroad Conductors and Yardmasters",83,-0.466,0,0,100,0,[],[]],
[21,"Subway and Streetcar Operators",86,-0.616,8,0,92,0,["Greet passengers"],[]],
[21,"Mates- Ship, Boat, and Barge",27,-0.428,0,0,0,100,[],[]],
[21,"Motorboat Operators",62,-0.887,0,0,100,0,[],[]],
[21,"Pilots, Ship",27,-0.428,0,0,0,100,[],[]],
[21,"Sailors and Marine Oilers",83,-1.15,0,0,100,0,[],[]],
[21,"Ship and Boat Captains",27,-0.428,0,0,0,100,[],[]],
[21,"Ship Engineers",4,-0.526,0,0,0,100,[],[]],
[21,"Automotive and Watercraft Service Attendants",83,-1.221,6,0,94,0,["Test charge batteries"],[]],
[21,"Aviation Inspectors",90,-0.184,0,0,100,0,[],[]],
[21,"Bridge and Lock Tenders",97,-0.632,0,0,100,0,[],[]],
[21,"Freight and Cargo Inspectors",90,-0.184,0,0,100,0,[],[]],
[21,"Parking Lot Attendants",87,-0.835,0,0,100,0,[],[]],
[21,"Traffic Technicians",90,0.4,0,0,100,0,[],[]],
[21,"Transportation Attendants, Except Flight Attendants",75,-0.375,0,0,100,0,[],[]],
[21,"Transportation Vehicle, Equipment and Systems Inspectors, Except Aviation",90,-0.184,0,0,100,0,[],[]],
[21,"Cleaners of Vehicles and Equipment",37,-1.63,0,0,0,100,[],[]],
[21,"Conveyor Operators and Tenders",93,-0.755,4,0,96,0,["Read production and delivery schedules"],[]],
[21,"Crane and Tower Operators",90,-1.031,0,0,100,0,[],[]],
[21,"Dredge Operators",92,-1.017,0,0,100,0,[],[]],
[21,"Excavating and Loading Machine and Dragline Operators",94,-1.144,6,0,94,0,["Measure verify levels of rock"],[]],
[21,"Gas Compressor and Gas Pumping Station Operators",91,-0.691,0,0,100,0,[],[]],
[21,"Hoist and Winch Operators",65,-0.978,0,0,100,0,[],[]],
[21,"Industrial Truck and Tractor Operators",93,-1.399,0,0,100,0,[],[]],
[21,"Laborers and Freight, Stock, and Material Movers, Hand",85,-1.709,0,0,100,0,[],[]],
[21,"Loading Machine Operators, Underground Mining",50,-1.263,0,0,100,0,[],[]],
[21,"Machine Feeders and Offbearers",93,-1.037,0,0,100,0,[],[]],
[21,"Packers and Packagers, Hand",38,-1.514,0,0,0,100,[],[]],
[21,"Pump Operators, Except Wellhead Pumpers",90,-0.842,0,0,100,0,[],[]],
[21,"Refuse and Recyclable Material Collectors",93,-1.283,0,0,100,0,[],[]],
[21,"Wellhead Pumpers",84,-1.091,0,0,100,0,[],[]],
[21,"Mine Shuttle Car Operators",37,-1.352,0,0,0,100,[],[]],
[21,"Tank Car, Truck, and Ship Loaders",72,-1.388,0,0,100,0,[],[]]
];

// ══════════════════════════ CHART CODE ═══════════════════════════════════
// ══════════════════════════ LINE CHART ═════════════════════════════════════
(function(){
  let drawn=false;
  function drawSingleChart(svgId,yKey,color,yDomain,yTicks,yFmt,animDelay){
    const svgEl=document.getElementById(svgId);
    if(!svgEl)return;
    const W=svgEl.parentElement.clientWidth||400,H=svgEl.parentElement.clientHeight||300;
    svgEl.setAttribute('width',W);svgEl.setAttribute('height',H);
    const mg={top:16,right:24,bottom:32,left:46};
    const iW=W-mg.left-mg.right,iH=H-mg.top-mg.bottom;
    const xs=d3.scaleLinear().domain([2022,2025]).range([0,iW]);
    const ys=d3.scaleLinear().domain(yDomain).range([iH,0]);
    const g=d3.select(svgEl).html('').append('g').attr('transform',`translate(${mg.left},${mg.top})`);
    g.append('rect').attr('width',iW).attr('height',iH).attr('fill','#13141a');
    // grid + y-axis ticks
    yTicks.forEach(v=>{
      g.append('line').attr('x1',0).attr('y1',ys(v)).attr('x2',iW).attr('y2',ys(v)).attr('stroke','rgba(255,255,255,0.05)').attr('stroke-width',1);
      g.append('text').attr('x',-6).attr('y',ys(v)+4).attr('text-anchor','end').attr('fill',color).attr('opacity',0.7).attr('font-family','IBM Plex Mono,monospace').attr('font-size',9).text(yFmt(v));
    });
    // x-axis
    LINE_D.forEach(d=>{
      g.append('text').attr('x',xs(d.year)).attr('y',iH+18).attr('text-anchor','middle').attr('fill','#475569').attr('font-family','IBM Plex Mono,monospace').attr('font-size',10).text(d.year);
    });
    // area fill
    g.append('path').datum(LINE_D)
      .attr('d',d3.area().x(d=>xs(d.year)).y0(iH).y1(d=>ys(d[yKey])).curve(d3.curveMonotoneX))
      .attr('fill',color).attr('opacity',0.07);
    // line
    const path=g.append('path').datum(LINE_D)
      .attr('d',d3.line().x(d=>xs(d.year)).y(d=>ys(d[yKey])).curve(d3.curveMonotoneX))
      .attr('fill','none').attr('stroke',color).attr('stroke-width',2.5);
    const len=path.node().getTotalLength();
    path.attr('stroke-dasharray',len).attr('stroke-dashoffset',len)
      .transition().duration(1400).delay(animDelay).attr('stroke-dashoffset',0);
    // dots + value labels
    LINE_D.forEach((d,i)=>{
      g.append('circle').attr('cx',xs(d.year)).attr('cy',ys(d[yKey])).attr('r',4)
        .attr('fill',color).attr('opacity',0)
        .transition().delay(animDelay+800+i*120).attr('opacity',1);
      g.append('text').attr('x',xs(d.year)).attr('y',ys(d[yKey])-10).attr('text-anchor','middle')
        .attr('fill',color).attr('font-family','IBM Plex Mono,monospace').attr('font-size',9)
        .text(yFmt(d[yKey])).attr('opacity',0)
        .transition().delay(animDelay+900+i*120).attr('opacity',1);
    });
  }
  function drawLine(){
    drawSingleChart('line-svg-ai','aiPct','#F97316',[0,42],[0,10,20,30,40],v=>v+'%',0);
    drawSingleChart('line-svg-emp','empM','#3B82F6',[130,170],[130,140,150,160,170],v=>v+'M',200);
  }
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting&&!drawn){drawn=true;drawLine();}});},{threshold:0.2});
  io.observe(document.getElementById('s11'));
  window.addEventListener('resize',()=>{drawn=false;drawLine();});
})();

// ══════════════════════════ BUBBLE ═════════════════════════════════════════
(function(){
  let ch=null;
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting&&!ch){
    const cmap={cognitive:'#3B82F6',care:'#A78BFA',routine:'#F97316',other:'#475569'};
    const cleg={cognitive:'Analytical / High-Skill',care:'Care & Interpersonal',routine:'Routine & Clerical',other:'Physical & Other'};
    const datasets=Object.keys(BUBBLE_DATA).map(k=>({label:cleg[k],data:BUBBLE_DATA[k].map(p=>({x:p.x,y:p.y,r:Math.max(3,p.r),o:p.o})),backgroundColor:cmap[k]+'99',borderColor:cmap[k],borderWidth:0.5}));
    const refPl={id:'ref',beforeDatasetsDraw(c){const{ctx:cx,chartArea:a,scales:s}=c;const xm=s.x.getPixelForValue(59300),y0=s.y.getPixelForValue(0);cx.save();cx.setLineDash([4,4]);cx.strokeStyle='rgba(255,255,255,0.08)';cx.lineWidth=1;cx.beginPath();cx.moveTo(xm,a.top);cx.lineTo(xm,a.bottom);cx.moveTo(a.left,y0);cx.lineTo(a.right,y0);cx.stroke();cx.restore();}};
    ch=new Chart(document.getElementById('bubble-canvas').getContext('2d'),{type:'bubble',data:{datasets},plugins:[refPl],options:{responsive:true,maintainAspectRatio:false,layout:{padding:10},plugins:{legend:{display:false},tooltip:{backgroundColor:'#1a1b23',borderColor:'rgba(255,255,255,0.1)',borderWidth:1,titleColor:'#E2E8F0',bodyColor:'#94A3B8',callbacks:{label:i=>`${i.raw.o} · $${i.raw.x.toLocaleString()} · ${i.raw.y>=0?'+':''}${i.raw.y}%`}}},scales:{x:{type:'linear',min:25000,max:215000,title:{display:true,text:'2024 Median Wage ($)',color:'#475569',font:{family:'IBM Plex Mono',size:10}},ticks:{callback:v=>'$'+(v/1000)+'k',color:'#475569',font:{family:'IBM Plex Mono',size:10}},grid:{color:'rgba(255,255,255,0.05)'},border:{color:'rgba(255,255,255,0.07)'}},y:{min:-45,max:55,title:{display:true,text:'Employment Growth 2024–34 (%)',color:'#475569',font:{family:'IBM Plex Mono',size:10}},ticks:{callback:v=>v+'%',color:'#475569',font:{family:'IBM Plex Mono',size:10}},grid:{color:'rgba(255,255,255,0.05)'},border:{color:'rgba(255,255,255,0.07)'}}}}}); }});},{threshold:0.2});
  io.observe(document.getElementById('s12'));
})();

// ══════════════════════════ DIAGNOSTIC ═════════════════════════════════════
(function(){
  // J[i] = [group_idx, name, chance, exposure, auto%, aug%, watch%, stable%, [auto_tasks], [aug_tasks]]
  const J = DIAG_JOBS_ALL;
  const G = DIAG_GROUPS;

  // Risk color per automation chance
  function riskColor(chance){
    if(chance>=60) return '#EF4444';
    if(chance>=35) return '#FBBF24';
    if(chance>=15) return '#60A5FA';
    return '#10B981';
  }
  function riskLabel(chance){
    if(chance>=60) return 'High Risk';
    if(chance>=35) return 'Watch';
    if(chance>=15) return 'Moderate';
    return 'Low Risk';
  }

  const listEl    = document.getElementById('d15-list');
  const countEl   = document.getElementById('d15-count');
  const searchEl  = document.getElementById('d15-search');
  const groupSel  = document.getElementById('d15-group');
  const placeholder = document.getElementById('d15-placeholder');
  const detailEl  = document.getElementById('d15-detail');

  // Populate group dropdown
  G.forEach((g,i)=>{
    const o=document.createElement('option');o.value=i;o.textContent=g;groupSel.appendChild(o);
  });

  let filtered = [];
  let selIdx = -1;

  function render(items){
    filtered = items;
    listEl.innerHTML='';
    items.forEach((ji,li)=>{
      const j=J[ji];
      const btn=document.createElement('button');
      btn.className='d15-item'+(selIdx===ji?' sel':'');
      const dot=document.createElement('span');
      dot.className='d15-dot';
      dot.style.background=riskColor(j[2]);
      const nm=document.createElement('span');
      nm.className='d15-item-name';
      nm.textContent=j[1];
      btn.appendChild(dot);btn.appendChild(nm);
      btn.title=j[1]+' — Automation risk: '+j[2]+'%';
      btn.addEventListener('click',()=>selectJob(ji));
      listEl.appendChild(btn);
    });
    countEl.textContent=items.length+' / '+J.length+' occupations';
  }

  function filter(){
    const q=searchEl.value.trim().toLowerCase();
    const gi=groupSel.value===''?-1:parseInt(groupSel.value);
    const items=[];
    J.forEach((j,i)=>{
      if(gi>=0&&j[0]!==gi)return;
      if(q&&!j[1].toLowerCase().includes(q))return;
      items.push(i);
    });
    render(items);
  }

  searchEl.addEventListener('input',filter);
  groupSel.addEventListener('change',filter);

  function selectJob(ji){
    selIdx=ji;
    const j=J[ji];
    // [group_idx, name, chance, exposure, auto%, aug%, watch%, stable%, [auto_tasks], [aug_tasks]]
    const [gi,name,chance,exposure,auto_t,aug_t,watch_t,stable_t,tasks_auto,tasks_aug]=j;

    placeholder.style.display='none';
    detailEl.style.display='flex';
    detailEl.style.flexDirection='column';
    detailEl.style.gap='14px';

    document.getElementById('d15-group-lbl').textContent=G[gi];
    document.getElementById('d15-job-name').textContent=name;

    // Badges
    const bEl=document.getElementById('d15-badges');
    const col=riskColor(chance);
    bEl.innerHTML=`
      <span class="d15-badge" style="color:${col};border-color:${col};background:${col}18;">${riskLabel(chance)} — ${chance}% automation chance</span>
      <span class="d15-badge" style="color:var(--muted);border-color:var(--border);">AI Exposure: ${exposure.toFixed(2)}</span>
    `;

    // Bar (4 segments: auto, watch, aug, stable)
    document.getElementById('d15-s-auto').style.width=auto_t+'%';
    document.getElementById('d15-s-watch').style.width=watch_t+'%';
    document.getElementById('d15-s-aug').style.width=aug_t+'%';
    document.getElementById('d15-s-stbl').style.width=stable_t+'%';

    // Update legend percentages inline
    document.getElementById('d15-p-auto').textContent  = auto_t+'%';
    document.getElementById('d15-p-watch').textContent = watch_t+'%';
    document.getElementById('d15-p-aug').textContent   = aug_t+'%';
    document.getElementById('d15-p-stbl').textContent  = stable_t+'%';

    // Tasks columns
    const colA=document.getElementById('d15-tasks-auto');
    const colG=document.getElementById('d15-tasks-aug');
    // Remove previous task items (keep header)
    colA.querySelectorAll('.d15-task-item').forEach(e=>e.remove());
    colG.querySelectorAll('.d15-task-item').forEach(e=>e.remove());

    if(tasks_auto.length){
      tasks_auto.forEach(t=>{
        const d=document.createElement('div');
        d.className='d15-task-item';
        d.style.borderLeftColor='#EF4444';
        d.textContent=t;
        colA.appendChild(d);
      });
    } else {
      const d=document.createElement('div');
      d.className='d15-task-item';
      d.style.borderLeftColor='var(--dim)';
      d.style.color='var(--dim)';
      d.textContent='No high-risk tasks identified';
      colA.appendChild(d);
    }

    if(tasks_aug.length){
      tasks_aug.forEach(t=>{
        const d=document.createElement('div');
        d.className='d15-task-item';
        d.style.borderLeftColor='#3B82F6';
        d.textContent=t;
        colG.appendChild(d);
      });
    } else {
      const d=document.createElement('div');
      d.className='d15-task-item';
      d.style.borderLeftColor='var(--dim)';
      d.style.color='var(--dim)';
      d.textContent='No augmentation tasks identified';
      colG.appendChild(d);
    }

    // Insight
    let insight='';
    if(chance>=60){
      insight=`${name} has a high automation chance (${chance}%). ${auto_t}% of tasks are at risk. Focus on developing skills that require human judgment and interpersonal connection.`;
    } else if(aug_t>20){
      insight=`${name} is well-positioned for AI augmentation — ${aug_t}% of tasks will be enhanced by AI tools. Investing in these areas will amplify your productivity and value.`;
    } else if(watch_t>50){
      insight=`${name} is in a transitional zone — ${watch_t}% of tasks are under active transformation. Monitor which tasks shift toward automation or augmentation over the next 2–3 years.`;
    } else {
      insight=`${name} shows low AI disruption signals (${chance}% automation chance). The core of this role remains human-driven for now.`;
    }
    document.getElementById('d15-insight').textContent=insight;

    // Update list selection
    listEl.querySelectorAll('.d15-item').forEach(btn=>{
      btn.classList.toggle('sel',filtered.indexOf(ji)>=0&&filtered[Array.from(listEl.children).indexOf(btn)]===ji);
    });
    // Simpler: re-render to reflect selection
    const fi=[...filtered];
    selIdx=ji;
    render(fi);
  }

  // Init: show all
  filter();
  // Pre-select first item
  if(J.length>0) selectJob(0);
})();
