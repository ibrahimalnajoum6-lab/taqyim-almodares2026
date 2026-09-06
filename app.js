/* =========================================================
   البيانات الثابتة: المدارس، الموجهون، بنود التقييم
   ========================================================= */

let SCHOOLS = [
  {id:1,  name:"الثانوية الخسروية",                                  address:"بجانب القلعة",                                             gender:"mixed"},
  {id:2,  name:"الثانوية الشرعية الأولى (العرقوب)",                   address:"العرقوب",                                                   gender:"mixed"},
  {id:3,  name:"ثانوية صلاح الدين",                                   address:"صلاح الدين",                                                gender:"mixed"},
  {id:4,  name:"ثانوية الصاخور الشرعية للبنين",                       address:"الصاخور",                                                    gender:"boys"},
  {id:5,  name:"ثانوية الصاخور الشرعية للبنات",                       address:"الصاخور",                                                    gender:"girls"},
  {id:6,  name:"الثانوية النعمانية الشرعية للبنين",                   address:"جمعية الزهراء",                                              gender:"boys"},
  {id:7,  name:"الثانوية النعمانية الشرعية للبنات",                   address:"جمعية الزهراء",                                              gender:"girls"},
  {id:8,  name:"ثانوية هارون الرشيد الشرعية للبنين",                  address:"الشارع الرئيسي (الراموسة - صلاح الدين)",                     gender:"boys"},
  {id:9,  name:"ثانوية هارون الرشيد الشرعية للبنات",                  address:"الشارع الرئيسي (الراموسة - صلاح الدين)",                     gender:"girls"},
  {id:10, name:"ثانوية معروف الكرخي للبنين",                          address:"الشيخ مقصود",                                                gender:"boys"},
  {id:11, name:"ثانوية معروف الكرخي للبنات",                          address:"الشيخ مقصود",                                                gender:"girls"},
  {id:12, name:"ثانوية المنصورة الشرعية للبنين",                      address:"المنصورة",                                                   gender:"boys"},
  {id:13, name:"ثانوية المنصورة الشرعية للبنات",                      address:"المنصورة",                                                   gender:"girls"},
  {id:14, name:"ثانوية الإرث النبوي للبنين",                          address:"باب النيرب",                                                 gender:"boys"},
  {id:15, name:"ثانوية الإرث النبوي للبنات",                          address:"المدرسة العلمية",                                            gender:"girls"},
  {id:16, name:"ثانوية الحمدانية الشرعية للبنين",                     address:"الحمدانية (الحي الأول)",                                     gender:"boys"},
  {id:17, name:"ثانوية ابن الجوزي الشرعية للبنين",                    address:"جمعية الريادة",                                              gender:"boys"},
  {id:18, name:"ثانوية ابن الجوزي الشرعية للبنات",                    address:"جمعية الريادة",                                              gender:"girls"},
  {id:19, name:"ثانوية عز العلماء للبنين",                            address:"المشارقة",                                                   gender:"boys"},
  {id:20, name:"ثانوية زين العابدين الشرعية للبنات",                  address:"حلب الجديدة",                                                gender:"girls"},
  {id:21, name:"الثانوية الشرعية للبنين في النيرب",                   address:"النيرب",                                                     gender:"boys"},
  {id:22, name:"الثانوية الشرعية للبنات في النيرب",                   address:"النيرب",                                                     gender:"girls"},
];

const INITIAL_PASSWORD_RECORDS = [
  {username:"m1",salt:"df4b25733c13c0f04dc5853355035ecb",hash:"1d89193000dd77973da57fb431e7e84d03c59eebde62d7a275b051a6cfca5417"},
  {username:"m2",salt:"fa5175b2145cf537a3cd7069c5e42d6a",hash:"bf6f005c75a57d479f5c6b224c7003c68ee41b1c9e09f496da50f8c80eb50fe4"},
  {username:"m3",salt:"c7191f450c9b6c65bc783f9d9b8e3818",hash:"c08aedbd4e1aec78dd280427baeadeb1f860a2698c3670d9e93cc8dc2af921c6"},
  {username:"m4",salt:"76e7ff13f7fde1f4523de744539f26e6",hash:"45b3e898b41fb2b195c545ea598cfe70c2f444e3d7215365dd247298db49e949"},
  {username:"m5",salt:"3591f8a2815cea8df896fe6841b09bf2",hash:"06601ae90d6fe0f66181e1d55657aed7e33c4ffca1dc9805cac0b36d6fa9b34e"},
  {username:"m6",salt:"7b733af86986a9491ca15abadf0233b3",hash:"78f7d3d50fc5eeb5ae342fc5b871ed678c7592c866edb1daf45e17831c3f9b24"},
  {username:"m7",salt:"3026ed8a9393bce442f25e5c64cba955",hash:"fe75ddc91ab3dd36b8a6de642939521412b709c6bef69cf60df4ac21904acebc"},
  {username:"m8",salt:"1e9a3c1583cb5fd57621d397baeea639",hash:"190a8533a76cae4916f4a07e92aeb01c8750c73e7d5400134497cb2537753b2a"},
  {username:"m9",salt:"e58aaef91b983089c88483bf5f55a6f9",hash:"87fab34210b165fcc905e11f64c739cc1dc8e8d780d74844985793602ada7f09"},
  {username:"m10",salt:"c3f54f9cbfca246b498616666b7b5d39",hash:"544767e6c9a3bb9d64cc55150ca04e2ae9e3affab5debe43e1fe838a0ebfd09c"},
  {username:"m11",salt:"7b34c9064747015625bf0c1bfc9c8157",hash:"dbb820f2bf9b42d9818f5d14850a67804bfa08f6e4720ccba29e287ee28d79ff"},
  {username:"m12",salt:"f7488e0f7593a644ef395d2de27c300a",hash:"1f8765d1050e825bebfc8485ac53c7e821c20d837ffaec60331d2e5d012bdcf8"},
  {username:"m13",salt:"a0e2bdf66058fa1b95d5b87af5e59e0a",hash:"f3ba52130d668415501f3e4d0d6441148bbc30106c1077f8cbb7190d7f7f99d0"},
  {username:"m14",salt:"e31543a381727ac86031229d37a1db7f",hash:"ef32585a9adcd3281a4ecde207c2ab6d5ffb907771513532a0ade6d7d513ee3f"},
  {username:"m15",salt:"2905a59fce63f3488a1ae29c2a2ff40b",hash:"e5dc73ae7a8fcb68763b5a3e6a39a836eed4352aee2e03ac2e69c9159150d836"},
  {username:"m16",salt:"1029959e8e6a2da97e51f21f245bd666",hash:"c65c57a37ec80be28fc7ab5e29af22c10457449e5d6c1287eae02674287bb71c"},
  {username:"m17",salt:"2578c332c6588c7344d875d8e99d047f",hash:"15e12e8a04f08ff1e1ad5e597849a2ea590f448ca050237152ff9f033a75b3ea"},
  {username:"m18",salt:"dc4c8b3b9dd97b3c2147978fc07c14b6",hash:"183b1bef08d2bd086b852b52a870ee0a4a22d4866296971257b1648f96487ef8"},
  {username:"m19",salt:"49abb28bd3bb0697acb95b69779e19b0",hash:"f6cb5a4aff01967c6a8414f21c35de978b897bf67450cf7a460b12585901f38b"},
  {username:"m20",salt:"2453217db1b92c08b45a44db1f095e22",hash:"77ed3a5157fe6fddb8c03e15c0e24c1186dffe3062a0afe0831abf20d5861594"},
  {username:"m21",salt:"69ba34569ca7a18f355e550869538f0a",hash:"6de01d32bfe274c6d75a37edf73894f52b730d3bbb932a7b09b535ee652a5214"},
  {username:"m22",salt:"50c7bdd54de7fe8dd8a1f1652233fdf7",hash:"6ee622a1f57cd54662d929be0413ebb64f4d87706174eab1f7042dada6332870"},
  {username:"m23",salt:"ef92382c9cc0a83f7ea114e5c9fedc9a",hash:"a3732315a7244f0132f2e68f7b26c9bc53f1855122f9121e4cf7dcbe8e5fd17e"},
  {username:"m24",salt:"1c10f621601bbf20a920a8ca599d4e51",hash:"687411066eee859406d52827ef0150c8dd0b0d4d379c32fc97be71669719a482"},
  {username:"m25",salt:"f6b1f932f45f6883c2618d058d2aca0b",hash:"aba1358c19463505b44031131932feb0ea143a627f6ba1a42ed35b22160b9854"}
];
const INITIAL_ADMIN_PASSWORD = {salt:"bfe20109c4d23f00e0705e87114cffe8", hash:"1811a89b84e51808a56f77022b6b090625daa296705ad9b9cdcbb309dc32123f"};

const SUPERVISORS = [
  {n:"محمد مصطفى المصطفى الشعبو", s:"شريعة"},
  {n:"شادي أحمد حلاق", s:"شريعة"},
  {n:"محمد حسن الحوت", s:"شريعة"},
  {n:"عبد الله عارف", s:"شريعة"},
  {n:"محمد محي الدين محمد", s:"شريعة"},
  {n:"وضاح محمد لمعت مخللاتي", s:"شريعة"},
  {n:"أمينة يوسف العبد الله", s:"شريعة"},
  {n:"منى جمعة الحسن", s:"شريعة"},
  {n:"حسناء حسن الحاج إبراهيم", s:"شريعة"},
  {n:"منى حسن الحاج إبراهيم", s:"شريعة"},
  {n:"عبد القادر محمد شحادة الأحمد", s:"لغة عربية"},
  {n:"ربى ماهر مكتبي", s:"لغة عربية"},
  {n:"المثنى محمود الدياب الحماده", s:"رياضيات"},
  {n:"براءه محمد جهاد سيلم", s:"رياضيات"},
  {n:"محمد حسين مسطو", s:"علم أحياء"},
  {n:"رنا عبد الحميد معرستاوي", s:"علم أحياء"},
  {n:"محمد أمين عبد الله عمران", s:"فيزياء وكيمياء"},
  {n:"بشرى محمود عيد", s:"فيزياء وكيمياء"},
  {n:"حسام عمر رسلان", s:"فلسفة"},
  {n:"آية أنور زيتاني", s:"فلسفة"},
  {n:"عبد الرحيم محمد دلو", s:"جغرافيا"},
  {n:"شهلا محمد شيخوني", s:"جغرافيا"},
  {n:"محمد مصطفى الرجب", s:"تاريخ"},
  {n:"إبراهيم احمد النجوم", s:"لغة إنكليزية"},
  {n:"نفيسة فارس الفارس", s:"لغة إنكليزية"},
]
  .map((x,i)=>{
    const rec=INITIAL_PASSWORD_RECORDS[i];
    return {id:i+1, username:"m"+(i+1), passwordHash:rec.hash, passwordSalt:rec.salt, name:x.n, specialty:x.s, role:"user", mustChangePassword:true};
  });

const CRITERIA = [
 {id:1, domain:"التخطيط", text:"يلتزم بتوزيع المنهاج", max:3, notesGroup:1},
 {id:2, domain:"التخطيط", text:"يخطط لتهيئة محفزة تراعي فيها المعلومات السابقة وتمهد للدرس الجديد", max:3, notesGroup:1},
 {id:3, domain:"التخطيط", text:"يصوغ الأهداف صياغة صحيحة للمجالات الثلاثة (المعرفي - المهاري - الوجداني)", max:4, notesGroup:1},
 {id:4, domain:"التخطيط", text:"يحدد استراتيجيات التدريس والأنشطة المناسبة لها", max:3, notesGroup:1},
 {id:5, domain:"التخطيط", text:"يحدد الوسائط المتعددة والبدائل التعليمية المناسبة", max:2, notesGroup:1},
 {id:6, domain:"التخطيط", text:"يخطط لتقويم لمراحله المختلفة (المرحلي - النهائي)", max:4, notesGroup:1},
 {id:7, domain:"التنفيذ (سير الدرس)", text:"يستثير دافعية المتعلمين نحو التعلم", max:4, notesGroup:1},
 {id:8, domain:"التنفيذ (سير الدرس)", text:"يوظف طرائق التدريس والأنشطة والوسائط بصورة مناسبة لمستويات المتعلمين وأهداف الدرس", max:6, notesGroup:1},
 {id:9, domain:"التنفيذ (سير الدرس)", text:"يستخدم السبورة بالشكل الأمثل للمحتوى التعليمي", max:4, notesGroup:1},
 {id:10, domain:"التنفيذ (سير الدرس)", text:"يراعي تنوع أهداف الدرس في التقويم وتنوع الأسئلة", max:4, notesGroup:1},
 {id:11, domain:"التنفيذ (سير الدرس)", text:"يعزز المتعلمين في الوقت المناسب وبالطريقة المناسبة", max:4, notesGroup:2},
 {id:12, domain:"التنفيذ (سير الدرس)", text:"يخصص الوقت المناسب لكل مرحلة من مراحل الدرس", max:3, notesGroup:2},
 {id:13, domain:"التنفيذ (سير الدرس)", text:"ينفذ ختاماً مناسباً للدرس", max:3, notesGroup:2},
 {id:14, domain:"الإدارة الصفية", text:"يهيئ بيئة صفية مادية ونفسية مريحة ومناسبة للمتعلمين", max:3, notesGroup:2},
 {id:15, domain:"الإدارة الصفية", text:"يوزع الاهتمام بين المتعلمين ويتعامل معهم بطريقة عادلة", max:3, notesGroup:2},
 {id:16, domain:"الإدارة الصفية", text:"يتبع قواعد صفية تنظم تفاعل وأنشطة المتعلمين بما يحقق أهداف الدرس", max:3, notesGroup:2},
 {id:17, domain:"الإدارة الصفية", text:"يراعي الفروق الفردية (فجوات الفاقد التعليمي) ويوزع الاهتمام بين المتعلمين", max:4, notesGroup:2},
 {id:18, domain:"الشخصية التربوية", text:"يلتزم بالسمت الشرعي والمظهر اللائق", max:5, notesGroup:2},
 {id:19, domain:"الشخصية التربوية", text:"يستخدم اللغة السليمة ويتنوع في نبرات الصوت ويستخدم لغة الجسد المناسبة", max:4, notesGroup:2},
 {id:20, domain:"الشخصية التربوية", text:"يتسم بالحيوية والنشاط داخل الصف", max:3, notesGroup:3},
 {id:21, domain:"الشخصية التربوية", text:"يركز على الجانب القيمي للطلاب ويستثمر الأمثلة لتعزيز القيم والأخلاق الحسنة", max:5, notesGroup:3},
 {id:22, domain:"الشخصية التربوية", text:"يتصف بالاتزان الانفعالي والذكاء العاطفي ويتقبل الملاحظات اللازمة للتطوير", max:3, notesGroup:3},
 {id:23, domain:"الكفاءة العلمية والثقافية", text:"يربط المادة العلمية بالواقع والحياة العملية ويحقق الترابط والتكامل مع المواد الأخرى", max:4, notesGroup:3},
 {id:24, domain:"الكفاءة العلمية والثقافية", text:"يراعي التدرج والتسلسل المنطقي للمادة والانتقال الصحيح", max:4, notesGroup:3},
 {id:25, domain:"الكفاءة العلمية والثقافية", text:"يظهر تمكناً من المادة العلمية التي يقدمها", max:12, notesGroup:3},
];
const NOTES_LABELS = {1:"نقاط التميز", 2:"نقاط التطوير", 3:"المقترحات"};
const MAX_TOTAL = CRITERIA.reduce((s,c)=>s+c.max,0); // 100

function domainSpans(){
  const spans=[]; let last=null;
  CRITERIA.forEach(c=>{
    if(c.domain!==last){ spans.push({domain:c.domain,start:c.id,count:1}); last=c.domain; }
    else spans[spans.length-1].count++;
  });
  return spans;
}
function notesSpans(){
  const spans=[]; let last=null;
  CRITERIA.forEach(c=>{
    if(c.notesGroup!==last){ spans.push({group:c.notesGroup,start:c.id,count:1}); last=c.notesGroup; }
    else spans[spans.length-1].count++;
  });
  return spans;
}
function ratingOf(total){
  if(total>=90) return {label:"ممتاز", cls:"badge-excellent"};
  if(total>=80) return {label:"جيد جداً", cls:"badge-vgood"};
  if(total>=70) return {label:"جيد", cls:"badge-good"};
  if(total>=50) return {label:"مقبول", cls:"badge-pass"};
  return {label:"ضعيف", cls:"badge-weak"};
}
/* =========================================================
   طبقة التخزين المحلي (يعمل أونلاين وأوفلاين) + إعداد Google Drive
   ========================================================= */

// ضع هنا معرف عميل Google OAuth الخاص بك (Client ID) لتفعيل المزامنة
// راجع ملف README.md لمعرفة كيفية الحصول عليه مجاناً من Google Cloud Console
const GOOGLE_CONFIG = {
  DRIVE_FOLDER_ID: "1yx75toC_P9BGhMmtprl2Q9H_GflrjKso"
};

// =========================================================
// رابط ويب أبليكيشن Google Apps Script (الطريقة الموصى بها لإرسال
// الاستمارات تلقائياً إلى Drive بترتيب: المجلد الرئيسي ← الشهر ← المدرسة
// ← ملف باسم المدرس، فور الضغط على "حفظ الاستمارة"، وبدون أي تسجيل دخول
// Google من داخل التطبيق (تسجيل دخول Google لا يعمل من داخل WebView
// المضمّن داخل تطبيق أندرويد — وهذا سبب فشل زر "نسخ احتياطي إلى Drive"
// القديم). راجع ملف APPSCRIPT-SETUP.md لخطوات النشر والحصول على الرابط.
// =========================================================
const APPS_SCRIPT_CONFIG = {
  APP_TOKEN: "mGsbUGxWhAqK54kvLh4KyAsKeQJrsVVeqhi47hYXLAA",
  BOOTSTRAP_KEY: "TQ-CENTRAL-BOOTSTRAP-2026",
  WEB_APP_URL: "https://script.google.com/macros/s/AKfycbyb3QPNIn2dOBouhBZG7zPgETIZzF3S8F7p64uuMBb3yidFRaXDLODAzrgVpB5z7_tA/exec" // الصق هنا رابط النشر الذي ينتهي بـ /exec بعد نشر السكربت
};

const DB_KEYS = { USERS:"tq_users_v1", FORMS:"tq_forms_v1", DRAFTS:"tq_drafts_v1", TRASH:"tq_trash_v1", SESSION:"tq_session_v1", SEEDED:"tq_seeded_v1", SCHOOLS:"tq_schools_v1" };

function loadDB(key, fallback){
  try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
  catch(e){ return fallback; }
}
function saveDB(key, val){ localStorage.setItem(key, JSON.stringify(val)); }

function seedIfNeeded(){
  if(localStorage.getItem(DB_KEYS.SEEDED)) return;
  const admin = {id:0, username:"admin", passwordHash:INITIAL_ADMIN_PASSWORD.hash, passwordSalt:INITIAL_ADMIN_PASSWORD.salt, name:"مدير النظام", specialty:"إدارة", role:"admin", mustChangePassword:true};
  saveDB(DB_KEYS.USERS, [admin, ...SUPERVISORS]);
  saveDB(DB_KEYS.FORMS, []);
  localStorage.setItem(DB_KEYS.SEEDED, "1");
}
seedIfNeeded();

const PASSWORD_ITERATIONS = 120000;
function bytesToHex(bytes){ return Array.from(new Uint8Array(bytes)).map(b=>b.toString(16).padStart(2,"0")).join(""); }
function hexToBytes(hex){ const out=new Uint8Array(hex.length/2); for(let i=0;i<out.length;i++) out[i]=parseInt(hex.slice(i*2,i*2+2),16); return out; }
async function hashPassword(password, saltHex){
  const salt = saltHex ? hexToBytes(saltHex) : crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(String(password)), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({name:"PBKDF2", salt, iterations:PASSWORD_ITERATIONS, hash:"SHA-256"}, key, 256);
  return {salt:bytesToHex(salt), hash:bytesToHex(bits)};
}
async function verifyPassword(password, user){
  if(!user || !user.passwordHash || !user.passwordSalt) return false;
  const r=await hashPassword(password,user.passwordSalt);
  return r.hash===user.passwordHash;
}

const PURGED_IDS_KEY = "taqyim_purged_record_ids_v1";
function purgedRecordIds(){ try{return JSON.parse(localStorage.getItem(PURGED_IDS_KEY)||"[]").map(String);}catch(_){return [];} }
function markPurgedRecordIds(ids){ const s=new Set(purgedRecordIds()); (ids||[]).forEach(id=>s.add(String(id))); localStorage.setItem(PURGED_IDS_KEY,JSON.stringify(Array.from(s).slice(-5000))); }

// عمليات الحذف المركزية المؤجلة: لا نجمد واجهة التطبيق بسبب بطء الشبكة.
const PENDING_DELETE_KEY = "taqyim_pending_central_delete_v1";
function pendingCentralDeletes(){ try{return JSON.parse(localStorage.getItem(PENDING_DELETE_KEY)||"[]");}catch(_){return [];} }
function savePendingCentralDeletes(items){ localStorage.setItem(PENDING_DELETE_KEY, JSON.stringify(Array.isArray(items)?items.slice(-5000):[])); }
function queueCentralDelete(type, ids){
  const all=pendingCentralDeletes(); const map=new Map(all.map(x=>[String(x.key||((x.type||"")+":"+(x.id||""))),x]));
  (ids||[]).filter(Boolean).forEach(id=>{ const key=String(type)+":"+String(id); map.set(key,{key,type:String(type),id:String(id),queuedAt:new Date().toISOString(),attempts:0}); });
  savePendingCentralDeletes(Array.from(map.values()));
}
function removePendingCentralDelete(type, ids){
  const keys=new Set((ids||[]).filter(Boolean).map(id=>String(type)+":"+String(id)));
  savePendingCentralDeletes(pendingCentralDeletes().filter(x=>!keys.has(String(x.key))));
}
let _pendingDeleteSyncPromise=null;
async function flushPendingCentralDeletes(silent=true){
  if(_pendingDeleteSyncPromise) return _pendingDeleteSyncPromise;
  _pendingDeleteSyncPromise=(async()=>{
    if(!navigator.onLine || !CentralSync.isConfigured()) return;
    const queue=pendingCentralDeletes(); if(!queue.length) return;
    const remaining=[];
    for(const op of queue){
      try{
        let r=null;
        if(op.type==="delete") r=await CentralSync.delete(op.id);
        else if(op.type==="restore") r=await CentralSync.restore(op.id);
        else if(op.type==="purge") r=await CentralSync.purge(op.id);
        else if(op.type==="empty") r=await CentralSync.emptyTrash([op.id]);
        if(r && r.ok===true){
          if(op.type==="purge" || op.type==="empty") markPurgedRecordIds([op.id]);
          continue;
        }
        remaining.push({...op,attempts:Number(op.attempts||0)+1,lastError:"تعذر تنفيذ العملية المركزية"});
      }catch(e){ remaining.push({...op,attempts:Number(op.attempts||0)+1,lastError:e.message||"sync-failed",lastAttemptAt:new Date().toISOString()}); }
    }
    savePendingCentralDeletes(remaining);
    if(remaining.length && !silent) toast("بعض عمليات الحذف ستعاد تلقائياً عند تحسن الاتصال",true);
    if(!remaining.length && !silent) toast("تم تثبيت عمليات الحذف المركزية بنجاح");
  })().finally(()=>{_pendingDeleteSyncPromise=null;});
  return _pendingDeleteSyncPromise;
}
window.addEventListener("online",()=>{ setTimeout(()=>flushPendingCentralDeletes(true),500); });
setTimeout(()=>flushPendingCentralDeletes(true),1500);
const Store = {
  trash(){ return loadDB(DB_KEYS.TRASH, []); },
  saveTrash(v){ saveDB(DB_KEYS.TRASH, v); },
  addTrash(item){ const all=this.trash(); item.deletedAt=item.deletedAt||new Date().toISOString(); all.unshift(item); this.saveTrash(all); return item; },
  restoreTrash(id){ const all=this.trash(); const i=all.findIndex(x=>String(x.id)===String(id)); if(i<0)return null; const item=all[i]; this.saveTrash(all.filter(x=>String(x.id)!==String(id))); if(item.kind==="draft"){ const ds=this.drafts(); ds.unshift(item.data); this.saveDrafts(ds); } else { const fs=this.forms(); fs.unshift(item.data); this.saveForms(fs); } return item.data; },
  purgeTrash(id){ this.saveTrash(this.trash().filter(x=>String(x.id)!==String(id))); },
  clearTrash(){ this.saveTrash([]); },
  users(){ return loadDB(DB_KEYS.USERS, []); },
  saveUsers(u){ saveDB(DB_KEYS.USERS, u); },
  forms(){ return loadDB(DB_KEYS.FORMS, []); },
  saveForms(f){ saveDB(DB_KEYS.FORMS, f); },
  session(){ return loadDB(DB_KEYS.SESSION, null); },
  setSession(s){ saveDB(DB_KEYS.SESSION, s); },
  clearSession(){ localStorage.removeItem(DB_KEYS.SESSION); },

  findUser(username){ return this.users().find(u=>u.username===username); },
  addUser(u){
    const all=this.users();
    u.id = u.id || ("u_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,10));
    all.push(u); this.saveUsers(all); return u;
  },
  updateUser(id, patch){ const all=this.users(); const i=all.findIndex(u=>String(u.id)===String(id)); if(i>-1){ all[i]={...all[i],...patch}; this.saveUsers(all); return all[i]; } return null; },
  deleteUser(id){ this.saveUsers(this.users().filter(u=>String(u.id)!==String(id))); },

  addForm(f){ const all=this.forms(); f.id = "f_"+Date.now()+"_"+Math.floor(Math.random()*9999); all.unshift(f); this.saveForms(all); return f; },
  updateForm(id, patch){ const all=this.forms(); const i=all.findIndex(x=>x.id===id); if(i>-1){ all[i]={...all[i],...patch, updatedAt:new Date().toISOString()}; this.saveForms(all);} return all[i]; },
  deleteForm(id){ const f=this.getForm(id); if(f){ this.addTrash({id:"form:"+id,kind:"form",data:{...f}}); } this.saveForms(this.forms().filter(f=>f.id!==id)); },
  getForm(id){ return this.forms().find(f=>f.id===id); },
  drafts(){ return loadDB(DB_KEYS.DRAFTS, []); },
  saveDrafts(d){ saveDB(DB_KEYS.DRAFTS, d); },
  addDraft(d){ const all=this.drafts(); d.id=d.id||("d_"+Date.now()+"_"+Math.floor(Math.random()*9999)); all.unshift(d); this.saveDrafts(all); return d; },
  updateDraft(id,patch){ const all=this.drafts(); const i=all.findIndex(x=>x.id===id); if(i>-1){ all[i]={...all[i],...patch,updatedAt:new Date().toISOString()}; this.saveDrafts(all); return all[i]; } return null; },
  deleteDraft(id){ const d=this.getDraft(id); if(d){ this.addTrash({id:"draft:"+id,kind:"draft",data:{...d}}); } this.saveDrafts(this.drafts().filter(d=>d.id!==id)); },
  getDraft(id){ return this.drafts().find(d=>d.id===id); },
  schools(){ return loadDB(DB_KEYS.SCHOOLS, []); },
  saveSchools(s){ saveDB(DB_KEYS.SCHOOLS, s); },
  addSchool(s){
    const all=this.schools();
    // إذا أعاد الخادم معرفاً، يجب الاحتفاظ به؛ لا ننشئ معرفاً محلياً بديلاً.
    if(!s.id) s.id="school_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,8);
    all.push(s); this.saveSchools(all); return s;
  },
  updateSchool(id,patch){ const all=this.schools(); const i=all.findIndex(x=>String(x.id)===String(id)); if(i>-1){all[i]={...all[i],...patch};this.saveSchools(all);return all[i];} },
  deleteSchool(id){ this.saveSchools(this.schools().filter(x=>String(x.id)!==String(id))); }
};

// تنظيف نسخة المستخدمين المحلية القديمة: يمنع ظهور حسابات مكررة أو
// أسماء مستخدمين تالفة على شكل hash طويل بعد تحديثات الإصدارات السابقة.
function normalizeLocalUsers(){
  const raw=Store.users();
  const valid=raw.filter(u=>u && String(u.username||"").trim());
  const out=[], seen=new Set();
  for(const u of valid){
    const username=String(u.username).trim();
    const looksLikeHash=/^[0-9a-f]{64}$/i.test(username) || username.length>40;
    if(looksLikeHash){
      const duplicateName=valid.some(v=>v!==u && String(v.name||"").trim()===String(u.name||"").trim() && !(/^[0-9a-f]{64}$/i.test(String(v.username||"")) || String(v.username||"").length>40));
      if(duplicateName) continue;
    }
    if(seen.has(username)) continue;
    seen.add(username);
    out.push({...u, username});
  }
  if(out.length!==raw.length || out.some((u,i)=>u.username!==raw[i]?.username)) Store.saveUsers(out);
}
normalizeLocalUsers();
if(!Store.schools().length){ Store.saveSchools(SCHOOLS.map(x=>({...x}))); }
SCHOOLS = Store.schools();

function uid(){ return Math.random().toString(36).slice(2,9); }
function fmtDate(iso){ if(!iso) return "—"; const d=new Date(iso); return d.toLocaleDateString("ar-SY",{year:"numeric",month:"long",day:"numeric"}); }
function fmtDateShort(iso){ if(!iso) return "—"; const d=new Date(iso); return d.toLocaleDateString("en-GB"); }
function escapeHtml(str){ if(str===undefined||str===null) return ""; return String(str).replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m])); }

function toast(msg, isErr){
  const wrap = document.getElementById("toastWrap");
  const el = document.createElement("div");
  el.className = "toast" + (isErr? " err":"");
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(()=>{ el.style.opacity="0"; el.style.transition="opacity .3s"; setTimeout(()=>el.remove(),300); }, 3000);
}

/* ---- حالة الاتصال بالشبكة ---- */
const NetState = { online: navigator.onLine };
window.addEventListener("online", ()=>{
  NetState.online=true; renderApp();
  toast("تم الاتصال بالإنترنت — تتم الآن مزامنة البيانات المحفوظة");
  Promise.resolve(syncCentralData(true))
    .then(()=>syncCentralSchools(true))
    .then(()=>syncPendingFormsToDrive(true))
    .then(()=>renderApp());
});
window.addEventListener("offline", ()=>{ NetState.online=false; renderApp(); toast("أنت الآن في وضع عدم الاتصال — سيتم حفظ عملك محلياً", true); });
/* =========================================================
   بناء "ورقة" الاستمارة بصيغة HTML مطابقة تماماً للنموذج الأصلي
   تُستخدم للعرض/الطباعة/PDF/Word
   ========================================================= */

function numberToArabicWords(n){
  n = Math.round(Number(n)||0);
  if(n<=0) return "صفر";
  if(n>=100) return "مئة";
  const ones=["","واحد","اثنان","ثلاثة","أربعة","خمسة","ستة","سبعة","ثمانية","تسعة"];
  const teens=["عشرة","أحد عشر","اثنا عشر","ثلاثة عشر","أربعة عشر","خمسة عشر","ستة عشر","سبعة عشر","ثمانية عشر","تسعة عشر"];
  const tens=["","","عشرون","ثلاثون","أربعون","خمسون","ستون","سبعون","ثمانون","تسعون"];
  if(n<10) return ones[n];
  if(n<20) return teens[n-10];
  const t = Math.floor(n/10), o = n%10;
  if(o===0) return tens[t];
  return ones[o] + " و" + tens[t];
}

function buildSheetHTML(form, opts){
  opts = opts || {};
  const dspans = domainSpans();
  const nspans = notesSpans();
  const domainAt = {}; dspans.forEach(sp=>{ domainAt[sp.start]=sp; });
  const notesAt = {}; nspans.forEach(sp=>{ notesAt[sp.start]=sp; });
  const scores = form.scores || {};
  const total = CRITERIA.reduce((s,c)=> s + (Number(scores[c.id]) || 0), 0);
  const rating = ratingOf(total);

  const rows = CRITERIA.map(c=>{
    let notesCell = "";
    if(notesAt[c.id]){
      const key = "notes_" + notesAt[c.id].group;
      const val = form.notes && form.notes[key] ? form.notes[key] : "";
      notesCell = `<td class="notes-cell" rowspan="${notesAt[c.id].count}">${escapeHtml(NOTES_LABELS[notesAt[c.id].group])} :<div class="notes-body">${escapeHtml(val).replace(/\n/g,"<br>")}</div></td>`;
    }
    let domainCell = "";
    if(domainAt[c.id]){
      // المجال في ملف Word عبارة عن خلية واحدة مدمجة عمودياً (rowspan)
      // عبر جميع بنوده، والنص نفسه أفقي ويتوزع تلقائياً داخل الخلية.
      // لا نضيف فواصل أسطر يدوية حتى يبقى التفاف النص مطابقاً لملف Word.
      const domainHtml = escapeHtml(c.domain);
      domainCell = `<td class="domain-cell" rowspan="${domainAt[c.id].count}">${domainHtml}</td>`;
    }
    const actual = scores[c.id] !== undefined && scores[c.id] !== "" ? scores[c.id] : "";
    return `<tr>
      <td class="center">${c.id}</td>
      ${domainCell}
      <td>${escapeHtml(c.text)}</td>
      <td class="center">${c.max}</td>
      <td class="center" style="font-weight:800;">${escapeHtml(String(actual))}</td>
      ${notesCell}
    </tr>`;
  }).join("");

  const field = (label, val)=> `<td class="fld">${escapeHtml(label)}: <span class="v">${escapeHtml(val||"")}</span></td>`;

  return `
  <div class="sheet" dir="rtl">
    <table class="infotable">
      <colgroup><col style="width:33.34%;"><col style="width:33.33%;"><col style="width:33.33%;"></colgroup>
      <tr>
        <td class="ttl-cell" colspan="2">لائحة تقييم أداء المدرس</td>
        ${field("رقم اللائحة", form.committeeNo)}
      </tr>
      <tr>
        ${field("مديرية أوقاف", "حلب")}
        ${field("التاريخ", fmtDateShort(form.date))}
        ${field("المدرس", form.teacherName)}
      </tr>
      <tr>
        ${field("المؤسسة التعليمية الشرعية", form.schoolName)}
        ${field("الفصل الدراسي", form.semester)}
        ${field("المؤهل العلمي", form.scientificSupervisor)}
      </tr>
      <tr>
        ${field("عدد الطلاب", form.studentsCount)}
        ${field("المادة", form.subject)}
        ${field("الاختصاص", form.specialty)}
      </tr>
      <tr>
        ${field("الصف", form.grade)}
        ${field("الحصة", form.studyYear)}
        ${field("القدم في التعليم", form.teachingExperience)}
      </tr>
      <tr>
        ${field("الشعبة", form.section)}
        ${field("الموضوع", form.topic)}
        ${field("الوضع الوظيفي", form.jobStatus)}
      </tr>
    </table>

    <table class="stable">
      <colgroup>
        <col class="c-no"><col class="c-domain"><col class="c-text">
        <col class="c-max"><col class="c-actual"><col class="c-notes">
      </colgroup>
      <thead>
        <tr>
          <th>م</th>
          <th style="font-size:8.5px;">المجال</th>
          <th>بنود اللائحة</th>
          <th>الدرجة العظمى</th>
          <th>الدرجة المستحقة</th>
          <th>الملاحظات</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
      <tfoot>
        <tr class="summary-row">
          <td colspan="5" class="scale-cell">ممتاز 90 - 100 &nbsp;&nbsp; / &nbsp;&nbsp; جيد جداً 80 - 89 &nbsp;&nbsp; / &nbsp;&nbsp; جيد 70 - 79 &nbsp;&nbsp; / &nbsp;&nbsp; مقبول 50 - 69 &nbsp;&nbsp; / &nbsp;&nbsp; ضعيف أقل من 50</td>
          <td class="sum-number">المجموع رقماً: <b>${total}</b></td>
        </tr>
        <tr class="summary-row">
          <td colspan="3" class="final-rating-cell">التقدير النهائي: <b>${escapeHtml(rating.label)}</b></td>
          <td colspan="3" class="sum-words">المجموع كتابةً: <b>${numberToArabicWords(total)}</b></td>
        </tr>
        <tr class="sign-table-row">
          <td colspan="2" class="sign-cell">المدرس/ة<br>${escapeHtml(form.signSchool||"")}</td>
          <td class="sign-cell">الموجه الاختصاصي<br>${escapeHtml(form.signSupervisor || form.createdByName || "")}</td>
          <td colspan="2" class="sign-cell">شعبة التوجيه الاختصاصي<br>${escapeHtml(form.signDept||"")}</td>
          <td class="sign-cell">رئيس دائرة التعليم الشرعي<br>${escapeHtml(form.signHead||"")}</td>
        </tr>
      </tfoot>
    </table>
  </div>`;
}
/* =========================================================
   التصدير: PDF / Excel / Word + الطباعة
   ========================================================= */

function formFileBase(form){
  const t = (form.teacherName||"استمارة").replace(/[\\\/:*?"<>|]/g,"").trim();
  const s = (form.schoolName||"").replace(/[\\\/:*?"<>|]/g,"").trim();
  return `تقييم_${t}${s?("_"+s):""}`.slice(0,80);
}

// حفظ/تنزيل ملف: داخل تطبيق الأندرويد يُحفظ عبر واجهة Java الأصلية (لأن Android WebView
// لا يدعم تنزيل روابط blob: تلقائياً)، وفي أي متصفح عادي يُستخدم أسلوب التنزيل المعتاد.
function saveOrDownloadBlob(blob, filename){
  if(window.AndroidDownloader && typeof window.AndroidDownloader.saveBase64File === "function"){
    const reader = new FileReader();
    reader.onload = function(){
      try{
        const base64 = String(reader.result).split(",")[1] || "";
        // واجهة Android تعود فوراً، وفك Base64 والكتابة للقرص يتمان في خيط خلفي.
        window.AndroidDownloader.saveBase64File(base64, filename, blob.type || "application/octet-stream");
      }catch(e){
        console.error(e);
        toast("تعذّر حفظ الملف على الجهاز", true);
      }
    };
    reader.onerror = function(){ toast("تعذّر تجهيز الملف للحفظ", true); };
    reader.readAsDataURL(blob);
    return;
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=> URL.revokeObjectURL(url), 4000);
}

// تحميل مكتبات التصدير الثقيلة عند الحاجة فقط، بدل تحميلها عند بدء التطبيق.
// هذا يقلل زمن الشاشة البيضاء واستهلاك الذاكرة عند تسجيل الدخول/التنقل العادي.
const _exportLibPromises = {};
function loadExportScript(key, src, ready){
  if(ready()) return Promise.resolve();
  if(_exportLibPromises[key]) return _exportLibPromises[key];
  _exportLibPromises[key] = new Promise((resolve,reject)=>{
    const existing = document.querySelector(`script[data-export-lib="${key}"]`);
    if(existing){
      existing.addEventListener("load",()=>ready()?resolve():reject(new Error(key+" failed to initialize")),{once:true});
      existing.addEventListener("error",()=>reject(new Error("تعذر تحميل مكتبة "+key)),{once:true});
      return;
    }
    const el=document.createElement("script");
    el.src=src; el.async=true; el.dataset.exportLib=key;
    el.onload=()=>ready()?resolve():reject(new Error(key+" failed to initialize"));
    el.onerror=()=>reject(new Error("تعذر تحميل مكتبة "+key));
    document.head.appendChild(el);
  });
  return _exportLibPromises[key];
}
function ensureJsPDF(){ return loadExportScript("jspdf","https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>!!window.jspdf); }
function ensureHtml2Canvas(){ return loadExportScript("html2canvas","https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof window.html2canvas==="function"); }
function ensureXLSX(){ return loadExportScript("xlsx","https://cdn.jsdelivr.net/npm/xlsx-js-style@1.2.0/dist/xlsx.bundle.js",()=>!!window.XLSX); }

// ذاكرة تصدير واحدة: تمنع إعادة html2canvas لنفس الاستمارة عند الضغط على
// PDF ثم مشاركة ثم Word/طباعة. يتم استبدالها تلقائياً عند تغير بيانات الاستمارة.
let _exportCache = {key:"", canvas:null, pngDataUrl:""};

function exportFormCacheKey(form){
  if(!form) return "";
  return JSON.stringify({
    committeeNo:form.committeeNo, date:form.date, studyYear:form.studyYear, semester:form.semester,
    schoolId:form.schoolId, schoolName:form.schoolName, schoolGender:form.schoolGender,
    teacherName:form.teacherName, scientificSupervisor:form.scientificSupervisor,
    subject:form.subject, specialty:form.specialty, studentsCount:form.studentsCount,
    grade:form.grade, section:form.section, topic:form.topic,
    teachingExperience:form.teachingExperience, jobStatus:form.jobStatus,
    scores:form.scores, notes:form.notes, signSchool:form.signSchool,
    signSupervisor:form.signSupervisor, signDept:form.signDept, signHead:form.signHead
  });
}

function cachedCanvasPng(canvas){
  if(!_exportCache.pngDataUrl) _exportCache.pngDataUrl = canvas.toDataURL("image/png");
  return _exportCache.pngDataUrl;
}

// يبني ملف PDF من الاستمارة بنفس الشكل المعروض/المطبوع تماماً (نفس المصدر
// الذي يستخدمه زر "PDF" اليدوي)، ويُعاد استخدامه أيضاً عند الإرسال التلقائي
// إلى Google Drive حتى تكون نسخة Drive مطابقة تماماً لنسخة التنزيل اليدوية.
async function buildFormPdfBlob(form){
  await ensureHtml2Canvas();
  await ensureJsPDF();
  // مهم: ملف Word الناتج من التطبيق لا يعيد رسم الاستمارة؛ بل يضع نفس
  // الـCanvas داخل صفحة A4. لذلك يجب أن يستخدم PDF نفس أبعاد الصورة
  // تماماً، وليس إجبارها على الارتفاع الكامل 287mm، لأن ذلك كان يسبب
  // اختلافاً في الحواف العلوية والسفلية وتشوه التناسب الرأسي.
  const canvas=await buildFormCanvas(form);
  const {jsPDF}=window.jspdf;
  const A4W=210,A4H=297,margin=5;
  const usableW=A4W-margin*2, usableH=A4H-margin*2;
  const pdf=new jsPDF({unit:"mm",format:"a4",orientation:"portrait",compress:true});

  // نفس معادلة buildDocxFromCanvas حرفياً: عرض الصورة 200mm،
  // والارتفاع الطبيعي محسوب من نسبة أبعاد الـCanvas.
  const naturalH=canvas.height*usableW/canvas.width;
  const imageData=cachedCanvasPng(canvas);

  // إذا كانت الاستمارة ضمن مساحة الصفحة، نضعها في نفس موضع Word: 5mm
  // من كل جانب، من دون تكبير رأسي أو ضغط.
  if(naturalH <= usableH + 0.01){
    pdf.addImage(imageData,"PNG",margin,margin,usableW,naturalH,undefined,"FAST");
  }else{
    // في حالة تجاوز المحتوى ارتفاع الصفحة، نقسم الـCanvas إلى صفحات،
    // مع الحفاظ على نفس مقياس Word وعدم ضغط الصفحة.
    const pageCanvasH=Math.floor(canvas.width*(usableH/usableW));
    let yPx=0, first=true;
    while(yPx < canvas.height){
      const hPx=Math.min(pageCanvasH,canvas.height-yPx);
      const pc=document.createElement("canvas");
      pc.width=canvas.width; pc.height=hPx;
      pc.getContext("2d").drawImage(canvas,0,yPx,canvas.width,hPx,0,0,pc.width,pc.height);
      if(!first) pdf.addPage();
      const hMm=hPx*usableW/canvas.width;
      pdf.addImage(pc.toDataURL("image/png"),"PNG",margin,margin,usableW,hMm,undefined,"FAST");
      yPx+=hPx; first=false;
    }
  }
  return pdf.output("blob");
}

async function exportPDF(form){
  toast("جاري تجهيز ملف PDF…");
  try{
    const blob = await buildFormPdfBlob(form);
    saveOrDownloadBlob(blob, formFileBase(form)+".pdf");
    toast("تم تنزيل ملف PDF بنجاح");
  } catch(e){
    console.error(e);
    toast("تعذّر إنشاء ملف PDF", true);
  }
}

async function sharePDF(form){
  toast("جاري تجهيز ملف PDF للمشاركة…");
  try{
    const blob = await buildFormPdfBlob(form);
    const filename = formFileBase(form)+".pdf";
    if(window.AndroidDownloader && typeof window.AndroidDownloader.shareBase64File === "function"){
      const reader = new FileReader();
      reader.onload = function(){
        try{
          const base64 = String(reader.result).split(",")[1] || "";
          window.AndroidDownloader.shareBase64File(base64, filename, "application/pdf");
        }catch(e){ console.error(e); toast("تعذّرت مشاركة ملف PDF", true); }
      };
      reader.onerror = function(){ toast("تعذّر تجهيز ملف PDF للمشاركة", true); };
      reader.readAsDataURL(blob);
      return;
    }
    if(navigator.share && typeof File !== "undefined"){
      const file = new File([blob], filename, {type:"application/pdf"});
      if(!navigator.canShare || navigator.canShare({files:[file]})){
        await navigator.share({title:"استمارة تقييم المدرس", text:"استمارة تقييم المدرس", files:[file]});
        return;
      }
    }
    saveOrDownloadBlob(blob, filename);
    toast("تم إنشاء PDF. يمكن مشاركته من مجلد التنزيلات.");
  }catch(e){
    if(e && e.name === "AbortError") return;
    console.error(e); toast("تعذّرت مشاركة ملف PDF", true);
  }
}

async function exportExcel(form){
  await ensureXLSX();
  try{
    const scores=form.scores||{}, total=totalOfForm(form), rating=ratingOf(total);
    const rows=[
      ["لائحة تقييم أداء المدرس — مديرية أوقاف","","","","",""],
      ["رقم اللائحة",form.committeeNo||"","التاريخ",fmtDateShort(form.date),"الحصة",form.studyYear||""],
      ["المؤسسة التعليمية الشرعية",form.schoolName||"","الفصل الدراسي",form.semester||"","المدرس",form.teacherName||""],
      ["المؤهل العلمي",form.scientificSupervisor||"","المادة",form.subject||"","الاختصاص",form.specialty||""],
      ["عدد الطلاب",form.studentsCount||"","الصف",form.grade||"","الشعبة",form.section||""],
      ["الموضوع",form.topic||"","القدم في التعليم",form.teachingExperience||"","الوضع الوظيفي",form.jobStatus||""],
      ["","","","","",""],
      ["م","مجال التقييم","بنود اللائحة","الدرجة المستحقة","الدرجة الفعلية","الملاحظات"]
    ];
    CRITERIA.forEach(c=>rows.push([c.id,c.domain,c.text,c.max,(scores[c.id]!=null?scores[c.id]:""),c.notesGroup===1?((form.notes&&form.notes.notes_1)||""):c.notesGroup===2?((form.notes&&form.notes.notes_2)||""):((form.notes&&form.notes.notes_3)||"")]));
    rows.push(["","","","","",""]);
    rows.push(["مجموع الدرجات",total,"التقدير النهائي",rating.label,"",""]);
    rows.push(["نقاط التميز",(form.notes&&form.notes.notes_1)||"","","","",""]);
    rows.push(["نقاط التطوير",(form.notes&&form.notes.notes_2)||"","","","",""]);
    rows.push(["المقترحات",(form.notes&&form.notes.notes_3)||"","","","",""]);
    rows.push(["","","","","",""]);
    rows.push(["المدرس/ة",form.signSchool||"","الموجّه الاختصاصي",form.signSupervisor||form.createdByName||"","",""]);
    rows.push(["شعبة التوجيه الاختصاصي",form.signDept||"","رئيس دائرة التعليم الشرعي",form.signHead||"","",""]);
    const ws=XLSX.utils.aoa_to_sheet(rows);
    ws["!rtl"]=true;
    ws["!cols"]=[{wch:8},{wch:20},{wch:58},{wch:16},{wch:16},{wch:32}];
    ws["!merges"]=[
      {s:{r:0,c:0},e:{r:0,c:5}},
      {s:{r:rows.length-5,c:1},e:{r:rows.length-5,c:5}},
      {s:{r:rows.length-4,c:1},e:{r:rows.length-4,c:5}},
      {s:{r:rows.length-3,c:1},e:{r:rows.length-3,c:5}}
    ];
    // دمج حقول المعلومات كما في النموذج
    for(let r=1;r<=5;r++){ ws["!merges"].push({s:{r,c:1},e:{r,c:1}}); }
    const border={top:{style:"thin",color:{rgb:"B8B09D"}},bottom:{style:"thin",color:{rgb:"B8B09D"}},left:{style:"thin",color:{rgb:"B8B09D"}},right:{style:"thin",color:{rgb:"B8B09D"}}};
    const range=XLSX.utils.decode_range(ws["!ref"]);
    for(let R=range.s.r;R<=range.e.r;R++)for(let C=range.s.c;C<=range.e.c;C++){
      const cell=ws[XLSX.utils.encode_cell({r:R,c:C})]||(ws[XLSX.utils.encode_cell({r:R,c:C})]={v:"",t:"s"});
      cell.s={alignment:{horizontal:C===2?"right":"center",vertical:"center",wrap_text:true},border};
      if(R===0){cell.s.font={bold:true,sz:16,color:{rgb:"FFFFFF"}};cell.s.fill={fgColor:{rgb:"0F4C3A"},patternType:"solid"};}
      if(R===7){cell.s.font={bold:true,color:{rgb:"FFFFFF"}};cell.s.fill={fgColor:{rgb:"0F4C3A"},patternType:"solid"};}
      if(R>=8 && R<33){cell.s.alignment={vertical:"center",wrap_text:true};}
    }
    ws["!rows"]=Array.from({length:rows.length},(_,i)=>({hpx:i===0?28:(i>=8&&i<33?34:22)}));
    const wb=XLSX.utils.book_new();wb.Workbook={Views:[{RTL:true}]};XLSX.utils.book_append_sheet(wb,ws,"استمارة التقييم");
    const wbout = XLSX.write(wb, {bookType:"xlsx", type:"array"});
    saveOrDownloadBlob(new Blob([wbout], {type:"application/octet-stream"}), formFileBase(form)+".xlsx");
    toast("تم تنزيل Excel بتنسيق أقرب للنموذج الرسمي");
  }catch(e){console.error(e);toast("تعذّر إنشاء ملف Excel",true);}
}

/* =========================================================
   بناء ملف Word حقيقي (.docx بصيغة Office Open XML) عبر JSZip
   بدل الأسلوب القديم (HTML بامتداد .doc) الذي كان يفشل في الفتح
   على كثير من الأجهزة والتطبيقات.
   ========================================================= */
function xmlEsc(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"); }

function docxPara(text, opts){
  opts = opts || {};
  const bold = opts.bold? '<w:b/><w:bCs/>' : '';
  const sz = opts.sz || 22;
  const align = opts.center? '<w:jc w:val="center"/>' : '';
  const color = opts.color? `<w:color w:val="${opts.color}"/>` : '';
  const lines = String(text==null?"":text).split("\n");
  const runs = lines.map((line,i)=>{
    const br = i>0? '<w:br/>' : '';
    return `<w:r><w:rPr>${bold}${color}<w:rFonts w:cs="Arial" w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="${sz}"/><w:szCs w:val="${sz}"/><w:rtl/></w:rPr>${br}<w:t xml:space="preserve">${xmlEsc(line)}</w:t></w:r>`;
  }).join("");
  return `<w:p><w:pPr><w:bidi/>${align}<w:rPr>${bold}${color}<w:sz w:val="${sz}"/><w:szCs w:val="${sz}"/></w:rPr></w:pPr>${runs}</w:p>`;
}
function docxCell(text, opts){
  opts = opts || {};
  const shade = opts.shade? `<w:shd w:val="clear" w:color="auto" w:fill="${opts.shade}"/>` : '';
  const span = opts.span? `<w:gridSpan w:val="${opts.span}"/>` : '';
  let vmerge = '';
  if(opts.vMerge === "restart") vmerge = '<w:vMerge w:val="restart"/>';
  else if(opts.vMerge === "continue") vmerge = '<w:vMerge/>';
  const widthAttr = opts.w!=null? `<w:tcW w:w="${Math.round(opts.w)}" w:type="dxa"/>` : `<w:tcW w:w="0" w:type="auto"/>`;
  const body = (opts.vMerge === "continue")
    ? `<w:p><w:pPr><w:bidi/></w:pPr></w:p>`
    : docxPara(text,{bold:opts.bold,sz:opts.sz,center:opts.center!==false,color:opts.color});
  return `<w:tc><w:tcPr>${widthAttr}${span}${vmerge}${shade}<w:vAlign w:val="center"/></w:tcPr>${body}</w:tc>`;
}
function docxRow(cells){ return `<w:tr>${cells.join("")}</w:tr>`; }
function docxTable(rows, colWidths){
  const grid = colWidths? `<w:tblGrid>${colWidths.map(w=>`<w:gridCol w:w="${Math.round(w)}"/>`).join("")}</w:tblGrid>` : `<w:tblGrid/>`;
  const tblW = colWidths? `<w:tblW w:w="${Math.round(colWidths.reduce((a,b)=>a+b,0))}" w:type="dxa"/>` : `<w:tblW w:w="0" w:type="auto"/>`;
  return `<w:tbl><w:tblPr>${tblW}<w:tblBorders>
    <w:top w:val="single" w:sz="4" w:color="000000"/><w:left w:val="single" w:sz="4" w:color="000000"/>
    <w:bottom w:val="single" w:sz="4" w:color="000000"/><w:right w:val="single" w:sz="4" w:color="000000"/>
    <w:insideH w:val="single" w:sz="4" w:color="000000"/><w:insideV w:val="single" w:sz="4" w:color="000000"/>
    </w:tblBorders><w:bidiVisual/><w:tblLayout w:type="fixed"/></w:tblPr>
    ${grid}
    ${rows.join("")}
  </w:tbl>`;
}
// تحويل سنتيمتر إلى وحدة "تويبس" (dxa) المستخدمة في مقاسات جداول Word
function cm2dxa(cm){ return cm * 566.929; }
async function buildDocxBlob(bodyXml){
  if(!window.JSZip) throw new Error("jszip-missing");
  const zip = new JSZip();
  // ملاحظة: بعض تطبيقات Word (خصوصاً على أندرويد/iOS وWPS Office وGoogle Docs)
  // ترفض فتح ملف .docx إن كان يحتوي فقط على word/document.xml دون أجزاء
  // OPC القياسية الأخرى (docProps، وعلاقات word/_rels)، حتى لو كان الملف
  // يُفتح بنجاح على أدوات أكثر تسامحاً. لذلك نضيف هنا كل الأجزاء القياسية
  // كاملة لضمان توافق أوسع مع كل التطبيقات وليس فقط Word على سطح المكتب.
  zip.file("[Content_Types].xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
<Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>`);
  zip.folder("_rels").file(".rels", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`);
  const nowIso = new Date().toISOString().replace(/\.\d+Z$/, "Z");
  zip.folder("docProps").file("core.xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<dc:title>لائحة تقييم أداء المدرس</dc:title>
<dc:creator>مديرية أوقاف حلب</dc:creator>
<cp:lastModifiedBy>مديرية أوقاف حلب</cp:lastModifiedBy>
<dcterms:created xsi:type="dcterms:W3CDTF">${nowIso}</dcterms:created>
<dcterms:modified xsi:type="dcterms:W3CDTF">${nowIso}</dcterms:modified>
</cp:coreProperties>`);
  zip.folder("docProps").file("app.xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
<Application>تطبيق تقييم المدرّسين</Application>
</Properties>`);
  zip.folder("word/_rels").file("document.xml.rels", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
</Relationships>`);
  const doc = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<w:body>
${bodyXml}
<w:sectPr>
<w:pgSz w:w="11906" w:h="16838"/>
<w:pgMar w:top="283" w:right="283" w:bottom="283" w:left="283" w:header="0" w:footer="0" w:gutter="0"/>
<w:bidi/>
</w:sectPr>
</w:body>
</w:document>`;
  zip.folder("word").file("document.xml", doc);
  return await zip.generateAsync({type:"blob", mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document", compression:"DEFLATE"});
}
function formDocxBodyXml(form){
  const scores = form.scores || {};
  const total = totalOfForm(form);
  const rating = ratingOf(total);

  // ----- الجدول العلوي (بيانات المدرّس والمؤسسة) - 3 أعمدة كما في النموذج الرسمي -----
  const infoColW = [cm2dxa(6.35), cm2dxa(6.604), cm2dxa(6.274)];
  const infoField = (label, val)=> docxCell(label+": "+(val||""), {sz:19, bold:true, center:false});
  const infoRows = [
    docxRow([
      docxCell("لائحة تقييم أداء المدرس", {span:2, sz:19, bold:true, color:"00B050", center:true}),
      infoField("رقم اللائحة", form.committeeNo)
    ]),
    docxRow([ infoField("مديرية أوقاف", "حلب"), infoField("التاريخ", fmtDateShort(form.date)), infoField("المدرس", form.teacherName) ]),
    docxRow([ infoField("المؤسسة التعليمية الشرعية", form.schoolName), infoField("الفصل الدراسي", form.semester), infoField("المؤهل العلمي", form.scientificSupervisor) ]),
    docxRow([ infoField("عدد الطلاب", form.studentsCount), infoField("المادة", form.subject), infoField("الاختصاص", form.specialty) ]),
    docxRow([ infoField("الصف", form.grade), infoField("الحصة", form.studyYear), infoField("القدم في التعليم", form.teachingExperience) ]),
    docxRow([ infoField("الشعبة", form.section), infoField("الموضوع", form.topic), infoField("الوضع الوظيفي", form.jobStatus) ]),
  ];
  let xml = docxTable(infoRows, infoColW);
  xml += docxPara("", {sz:10});

  // ----- جدول بنود التقييم - نفس أعمدة وألوان النموذج الرسمي -----
  const critColW = [cm2dxa(0.774), cm2dxa(2.163), cm2dxa(8.287), cm2dxa(1.274), cm2dxa(2.746), cm2dxa(4.090)];
  const dspans = domainSpans(); const domainAt={}; dspans.forEach(sp=>domainAt[sp.start]=sp);
  const nspans = notesSpans(); const notesAt={}; nspans.forEach(sp=>notesAt[sp.start]=sp);
  // خرائط: أي صف يقع "داخل" مدى دمج (وليس بدايته) كي نضع فيه vMerge:continue
  const domainSpan = {}; dspans.forEach(sp=>{ for(let i=0;i<sp.count;i++) domainSpan[sp.start+i]=sp; });
  const notesSpan = {}; nspans.forEach(sp=>{ for(let i=0;i<sp.count;i++) notesSpan[sp.start+i]=sp; });

  const head = docxRow([
    docxCell("م",{bold:true,shade:"FCE4D6",sz:16,center:true}),
    docxCell("المجال",{bold:true,shade:"FCE4D6",sz:16,center:true}),
    docxCell("بنود اللائحة",{bold:true,shade:"FCE4D6",sz:16,center:true}),
    docxCell("الدرجة العظمى",{bold:true,shade:"FADBD8",sz:16,center:true}),
    docxCell("الدرجة المستحقة",{bold:true,shade:"FADBD8",sz:16,center:true}),
    docxCell("الملاحظات",{bold:true,shade:"FADBD8",sz:16,center:true}),
  ]);
  const rows = [head];
  CRITERIA.forEach(c=>{
    const actual = scores[c.id]!==undefined && scores[c.id]!=="" ? String(scores[c.id]) : "";
    const dsp = domainSpan[c.id];
    const isDomainStart = domainAt[c.id];
    const nsp = notesSpan[c.id];
    const isNotesStart = notesAt[c.id];
    let notesCell;
    if(isNotesStart){
      const key = "notes_"+isNotesStart.group;
      const noteVal = (form.notes && form.notes[key]) || "";
      notesCell = docxCell(NOTES_LABELS[isNotesStart.group]+" :\n"+noteVal, {sz:15, vMerge:"restart", center:false});
    } else {
      notesCell = docxCell("", {sz:15, vMerge:"continue"});
    }
    let domainCell;
    if(isDomainStart){
      domainCell = docxCell(c.domain, {sz:15, bold:true, color:"AA1E1E", vMerge:"restart", center:true});
    } else {
      domainCell = docxCell("", {sz:15, vMerge:"continue"});
    }
    rows.push(docxRow([
      docxCell(String(c.id),{sz:15, center:true}),
      domainCell,
      docxCell(c.text,{sz:15, center:false}),
      docxCell(String(c.max),{sz:15, center:true}),
      docxCell(actual,{sz:15,bold:true, center:true}),
      notesCell
    ]));
  });
  // صف سلّم التقدير (مدموج على أول 5 أعمدة) + المجموع رقماً
  const scaleText = "ممتاز 90 - 100   /   جيد جداً 80 - 89   /   جيد 70 - 79   /   مقبول 50 - 69   /   ضعيف أقل من 50";
  rows.push(docxRow([
    docxCell(scaleText, {span:5, sz:14, center:true}),
    docxCell("المجموع رقماً: "+total, {sz:15, bold:true, center:true})
  ]));
  // صف التقدير النهائي (مدموج 3 أعمدة) + المجموع كتابةً (مدموج 3 أعمدة)
  rows.push(docxRow([
    docxCell("التقدير النهائي: "+rating.label, {span:3, sz:16, bold:true, center:true}),
    docxCell("المجموع كتابةً: "+numberToArabicWords(total), {span:3, sz:15, bold:true, center:true})
  ]));
  // صف التوقيعات: المدرس/ة (عمودان) - الموجه الاختصاصي - شعبة التوجيه (عمودان) - رئيس دائرة التعليم الشرعي
  rows.push(docxRow([
    docxCell("المدرس/ة\n"+(form.signSchool||""), {span:2, sz:15, center:true}),
    docxCell("الموجّه الاختصاصي\n"+(form.signSupervisor||form.createdByName||""), {sz:15, center:true}),
    docxCell("شعبة التوجيه الاختصاصي\n"+(form.signDept||""), {span:2, sz:15, center:true}),
    docxCell("رئيس دائرة التعليم الشرعي\n"+(form.signHead||""), {sz:15, center:true}),
  ]));

  xml += docxTable(rows, critColW);
  return xml;
}
async function buildFormCanvas(form){
  await ensureHtml2Canvas();
  const key = exportFormCacheKey(form);
  if(_exportCache.canvas && _exportCache.key === key) return _exportCache.canvas;

  const holder = document.createElement("div");
  holder.style.position="fixed";
  holder.style.left="-99999px";
  holder.style.top="0";
  holder.style.width="756px";
  holder.style.background="#fff";
  holder.innerHTML = buildSheetHTML(form);
  document.body.appendChild(holder);
  const sheetEl = holder.querySelector(".sheet");
  if(sheetEl){
    sheetEl.classList.add("export-form-sheet");
    sheetEl.style.setProperty("width","100%","important");
    sheetEl.style.setProperty("min-height","auto","important");
    sheetEl.style.setProperty("margin","0","important");
    sheetEl.style.setProperty("padding","0","important");
    sheetEl.style.setProperty("border","0","important");
  }
  try{
    // Android WebView: مقياس 1.5 يعطي جودة طباعة جيدة مع حمل أقل بكثير من scale=2.
    // المتصفح العادي يبقى على 2 للحفاظ على الجودة الأصلية.
    const exportScale = (window.AndroidDownloader ? 1.5 : 2);
    const canvas = await html2canvas(holder,{
      scale:exportScale,
      useCORS:true,
      backgroundColor:"#ffffff",
      logging:false
    });
    _exportCache = {key, canvas, pngDataUrl:""};
    return canvas;
  }finally{
    holder.remove();
  }
}

function dataUrlToBase64(dataUrl){
  return String(dataUrl||"").split(",")[1] || "";
}

async function buildDocxFromCanvas(canvas){
  if(!window.JSZip) throw new Error("jszip-missing");

  // Word يستخدم صفحة A4 نفسها التي يستخدمها PDF، مع هامش 5 مم.
  // نضع Canvas كاملًا في صفحة واحدة، وبذلك لا يبقى فراغ سفلي ولا تختلف أبعاد الجدول بين Word وPDF.
  const slices=[{
    data:dataUrlToBase64(canvas.toDataURL("image/png")),
    width:canvas.width,
    height:canvas.height
  }];
  const pageWmm=210, pageHmm=297, marginMm=5;
  const usableWmm=pageWmm-marginMm*2;
  const usableHmm=pageHmm-marginMm*2;

  const zip=new JSZip();
  zip.file("[Content_Types].xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Default Extension="png" ContentType="image/png"/>
<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
<Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>`);

  zip.folder("_rels").file(".rels", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/package/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`);

  const nowIso=new Date().toISOString().replace(/\.\d+Z$/,"Z");
  zip.folder("docProps").file("core.xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<dc:title>لائحة تقييم أداء المدرس</dc:title>
<dc:creator>مديرية أوقاف حلب</dc:creator>
<cp:lastModifiedBy>مديرية أوقاف حلب</cp:lastModifiedBy>
<dcterms:created xsi:type="dcterms:W3CDTF">${nowIso}</dcterms:created>
<dcterms:modified xsi:type="dcterms:W3CDTF">${nowIso}</dcterms:modified>
</cp:coreProperties>`);
  zip.folder("docProps").file("app.xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
<Application>تطبيق تقييم المدرّسين</Application>
</Properties>`);

  const rels=[];
  const body=[];
  const usableWemu=Math.round((usableWmm/25.4)*914400);
  const usableHemu=(h)=>Math.round(((h*usableHmm/pageHpx)/25.4)*914400);

  slices.forEach((sl,idx)=>{
    const rid="rIdImg"+(idx+1);
    const name="image"+(idx+1)+".png";
    zip.folder("word/media").file(name,sl.data,{base64:true});
    rels.push(`<Relationship Id="${rid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${name}"/>`);
    const naturalHmm=sl.height*usableWmm/sl.width;
    const drawHmm=Math.min(usableHmm,naturalHmm);
    const drawWmm=naturalHmm>usableHmm ? (usableHmm*sl.width/sl.height) : usableWmm;
    const cx=Math.round((drawWmm/25.4)*914400);
    const cy=Math.round((drawHmm/25.4)*914400);
    body.push(`<w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:drawing>
<wp:inline xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing">
<wp:extent cx="${cx}" cy="${cy}"/>
<wp:docPr id="${idx+1}" name="استمارة تقييم ${idx+1}"/>
<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
<a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">
<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">
<pic:nvPicPr><pic:cNvPr id="${idx+1}" name="${name}"/><pic:cNvPicPr/></pic:nvPicPr>
<pic:blipFill><a:blip r:embed="${rid}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill>
<pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr>
</pic:pic></a:graphicData></a:graphic>
</wp:inline></w:drawing></w:r></w:p>`);
    if(idx<slices.length-1) body.push(`<w:p><w:r><w:br w:type="page"/></w:r></w:p>`);
  });

  zip.folder("word/_rels").file("document.xml.rels", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
${rels.join("")}
</Relationships>`);

  const doc=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<w:body>
${body.join("")}
<w:sectPr>
<w:pgSz w:w="11906" w:h="16838"/>
<w:pgMar w:top="283" w:right="283" w:bottom="283" w:left="283" w:header="0" w:footer="0" w:gutter="0"/>
<w:bidi/>
</w:sectPr>
</w:body>
</w:document>`;
  zip.folder("word").file("document.xml",doc);
  return await zip.generateAsync({
    type:"blob",
    mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    compression:"DEFLATE"
  });
}

async function exportWord(form){
  await ensureHtml2Canvas();
  if(!window.JSZip) throw new Error("jszip-missing");
  try{
    toast("جاري تجهيز ملف Word مطابق تماماً لنسخة PDF…");
    const canvas=await buildFormCanvas(form);
    const blob=await buildDocxFromCanvas(canvas);
    saveOrDownloadBlob(blob,formFileBase(form)+".docx");
    toast("تم تنزيل ملف Word بنجاح — نفس شكل PDF تماماً");
  }catch(e){
    console.error(e);
    toast("تعذّر إنشاء ملف Word",true);
  }
}

async function printForm(form){
  try{
    toast("جاري تجهيز نسخة الطباعة المطابقة لملف Word…");
    const canvas = await buildFormCanvas(form);
    let area = document.getElementById("printArea");
    if(!area){
      area = document.createElement("div");
      area.id = "printArea";
      document.body.appendChild(area);
    }
    area.innerHTML = "";
    area.style.width = "210mm";
    area.style.margin = "0 auto";
    area.style.padding = "5mm";
    area.style.boxSizing = "border-box";
    area.style.background = "#fff";
    const img = document.createElement("img");
    img.src = cachedCanvasPng(canvas);
    img.style.display = "block";
    img.style.width = "200mm";
    img.style.height = "auto";
    img.style.margin = "0 auto";
    img.style.maxWidth = "none";
    area.appendChild(img);
    await new Promise(resolve=>{ img.onload=resolve; setTimeout(resolve,80); });
    if(window.AndroidPrinter && typeof window.AndroidPrinter.printPage === "function"){
      window.AndroidPrinter.printPage();
    } else {
      window.print();
    }
  }catch(e){
    console.error(e);
    toast("تعذّرت تجهيز الطباعة", true);
  }
}

/* ---- تصدير كل الاستمارات دفعة واحدة (أدمن) ---- */
async function exportAllExcel(forms){
  await ensureXLSX();
  const aoa = [["م","المدرسة","المدرس","المادة","الموجه","التاريخ","المجموع","التقدير"]];
  forms.forEach((f,i)=>{
    const scores=f.scores||{};
    const total=CRITERIA.reduce((s,c)=>s+(Number(scores[c.id])||0),0);
    aoa.push([i+1, f.schoolName||"", f.teacherName||"", f.subject||"", f.createdByName||"", fmtDateShort(f.date), total, ratingOf(total).label]);
  });
  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws["!rtl"]=true; ws["!cols"]=[{wch:5},{wch:26},{wch:20},{wch:16},{wch:20},{wch:12},{wch:10},{wch:12}];
  const wb = XLSX.utils.book_new();
  wb.Workbook={Views:[{RTL:true}]};
  XLSX.utils.book_append_sheet(wb, ws, "جميع الاستمارات");
  const wbout = XLSX.write(wb, {bookType:"xlsx", type:"array"});
  saveOrDownloadBlob(new Blob([wbout], {type:"application/octet-stream"}), "جميع_استمارات_التقييم.xlsx");
  toast("تم تنزيل كشف بجميع الاستمارات");
}

/* ---- تصدير كشف قائمة استمارات (يُستخدم لدى المدير والموجّه) بصيغ Excel / Word / PDF ---- */
function listSummaryRows(forms, includeSupervisor){
  const header = includeSupervisor
    ? ["م","المدرسة","المدرس","المادة","الموجه","التاريخ","المجموع","التقدير"]
    : ["م","المدرسة","المدرس","المادة","التاريخ","المجموع","التقدير"];
  const rows = forms.map((f,i)=>{
    const total = totalOfForm(f);
    const row = [i+1, f.schoolName||"", f.teacherName||"", f.subject||""];
    if(includeSupervisor) row.push(f.createdByName||"");
    row.push(fmtDateShort(f.date), total, ratingOf(total).label);
    return row;
  });
  return {header, rows};
}
function listTableHTML(forms, title, includeSupervisor){
  const {header, rows} = listSummaryRows(forms, includeSupervisor);
  return `
  <div class="sheet" dir="rtl" style="font-size:11px;">
    <div class="sheet-head">
      <div class="logo"><img src="${LOGO_SRC}" alt="شعار وزارة الأوقاف"></div>
      <div class="ttl"><h3>${escapeHtml(title)}</h3><small>لائحة تقييم أداء المدرس — مديرية أوقاف</small></div>
      <div class="committee">${fmtDate(new Date().toISOString())}</div>
    </div>
    <table class="stable" style="width:100%;">
      <thead><tr>${header.map(h=>`<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
      <tbody>${rows.length? rows.map(r=>`<tr>${r.map(c=>`<td class="center">${escapeHtml(String(c))}</td>`).join("")}</tr>`).join("") : `<tr><td colspan="${header.length}" class="center">لا توجد استمارات</td></tr>`}</tbody>
    </table>
    <div class="scale-note">إجمالي عدد الاستمارات: ${forms.length}</div>
  </div>`;
}
async function exportListExcel(forms, filename, sheetName, includeSupervisor){
  await ensureXLSX();
  const {header, rows} = listSummaryRows(forms, includeSupervisor);
  const aoa = [header, ...rows];
  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws["!rtl"]=true;
  ws["!cols"] = includeSupervisor
    ? [{wch:5},{wch:26},{wch:20},{wch:16},{wch:20},{wch:12},{wch:10},{wch:12}]
    : [{wch:5},{wch:26},{wch:20},{wch:16},{wch:12},{wch:10},{wch:12}];
  const wb = XLSX.utils.book_new();
  wb.Workbook={Views:[{RTL:true}]};
  XLSX.utils.book_append_sheet(wb, ws, sheetName||"الاستمارات");
  const wbout = XLSX.write(wb, {bookType:"xlsx", type:"array"});
  saveOrDownloadBlob(new Blob([wbout], {type:"application/octet-stream"}), filename+".xlsx");
  toast("تم تنزيل كشف Excel بنجاح");
}
function listDocxBodyXml(forms, title, includeSupervisor){
  const {header, rows} = listSummaryRows(forms, includeSupervisor);
  let xml = docxPara(title, {bold:true, sz:30, center:true});
  xml += docxPara("لائحة تقييم أداء المدرس — مديرية أوقاف", {sz:20, center:true});
  xml += docxPara("");
  const head = docxRow(header.map(h=>docxCell(h,{bold:true,shade:"0F4C3A",sz:18,color:"FFFFFF"})));
  const trows = rows.length? rows.map(r=>docxRow(r.map(c=>docxCell(String(c),{sz:16})))) : [docxRow([docxCell("لا توجد استمارات",{sz:16})])];
  xml += docxTable([head, ...trows]);
  xml += docxPara("");
  xml += docxPara("إجمالي عدد الاستمارات: "+forms.length, {sz:18});
  return xml;
}
async function exportListWord(forms, filename, title, includeSupervisor){
  await ensureHtml2Canvas();
  if(!window.JSZip) throw new Error("jszip-missing");
  try{
    toast("جاري تجهيز ملف Word…");
    const blob = await buildDocxBlob(listDocxBodyXml(forms, title, includeSupervisor));
    saveOrDownloadBlob(blob, filename+".docx");
    toast("تم تنزيل ملف Word بنجاح");
  } catch(e){
    console.error(e);
    toast("تعذّر إنشاء ملف Word", true);
  }
}

async function exportFormsPDF(forms, filename){
  if(!forms || !forms.length){
    toast("لا توجد استمارات مطابقة للفلاتر", true);
    return;
  }
  await ensureHtml2Canvas();
  await ensureJsPDF();
  toast("جاري تجهيز الاستمارات PDF…");
  try{
    const {jsPDF}=window.jspdf;
    const pdf=new jsPDF({unit:"mm",format:"a4",orientation:"portrait",compress:true});
    const A4W=210,A4H=297,margin=5,usableW=A4W-margin*2,usableH=A4H-margin*2;
    let first=true;
    for(let i=0;i<forms.length;i++){
      const form=forms[i];
      toast(`جاري تجهيز الاستمارة ${i+1} من ${forms.length}…`);
      const canvas=await buildFormCanvas(form);
      const naturalH=canvas.height*usableW/canvas.width;
      const imageData=cachedCanvasPng(canvas);
      if(naturalH <= usableH + 0.01){
        if(!first) pdf.addPage();
        pdf.addImage(imageData,"PNG",margin,margin,usableW,naturalH,undefined,"FAST");
        first=false;
      }else{
        const pageCanvasH=Math.floor(canvas.width*(usableH/usableW));
        let yPx=0;
        while(yPx < canvas.height){
          const hPx=Math.min(pageCanvasH,canvas.height-yPx);
          const pc=document.createElement("canvas");
          pc.width=canvas.width; pc.height=hPx;
          pc.getContext("2d").drawImage(canvas,0,yPx,canvas.width,hPx,0,0,pc.width,pc.height);
          if(!first) pdf.addPage();
          const hMm=hPx*usableW/canvas.width;
          pdf.addImage(pc.toDataURL("image/png"),"PNG",margin,margin,usableW,hMm,undefined,"FAST");
          yPx+=hPx; first=false;
        }
      }
    }
    saveOrDownloadBlob(pdf.output("blob"), filename+".pdf");
    toast(`تم تنزيل ${forms.length} استمارة PDF بنجاح`);
  }catch(e){
    console.error(e);
    toast("تعذّر إنشاء ملف الاستمارات PDF", true);
  }
}

function exportFilterMonthLabel(month){
  if(!month) return "كل_الأشهر";
  const p=String(month).split("-");
  const y=p[0], m=Number(p[1]||0);
  return m>=1&&m<=12 ? `${ARABIC_MONTHS[m-1]}_${y}` : month;
}

function filterFormsForExport(forms, prefix){
  let list=[...(forms||[])];
  const school=document.getElementById(prefix+"School")?.value||"";
  const month=document.getElementById(prefix+"Month")?.value||"";
  const teacher=document.getElementById(prefix+"Teacher")?.value||"";
  if(school){
    const schoolObj=SCHOOLS.find(s=>String(s.id)===String(school));
    const schoolName=schoolObj?.name||"";
    list=list.filter(f=>String(f.schoolId)===String(school) || String(f.schoolName||"")===String(schoolName));
  }
  if(month) list=list.filter(f=>String(f.date||"").slice(0,7)===month);
  if(teacher) list=list.filter(f=>String(f.teacherName||"")===String(teacher));
  return list;
}

function exportFilterTeachers(forms, school){
  const base=school ? filterFormsForExport(forms, "__tmp__") : forms;
  let list=base||[];
  if(school){
    const s=SCHOOLS.find(x=>String(x.id)===String(school));
    list=list.filter(f=>String(f.schoolId)===String(school)||String(f.schoolName||"")===String(s?.name||""));
  }
  return Array.from(new Set(list.map(f=>(f.teacherName||"").trim()).filter(Boolean))).sort((a,b)=>a.localeCompare(b,'ar'));
}

function populateExportTeacherSelect(forms, prefix){
  const el=document.getElementById(prefix+"Teacher");
  const school=document.getElementById(prefix+"School")?.value||"";
  if(!el) return;
  const current=el.value;
  const teachers=exportFilterTeachers(forms,school);
  el.innerHTML=`<option value="">كل المدرسين</option>${teachers.map(t=>`<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join("")}`;
  if(teachers.includes(current)) el.value=current;
}

function exportFilterControlsHTML(forms, prefix, options){
  options=options||{};
  const schoolIds=new Set((forms||[]).map(f=>String(f.schoolId||"")).filter(Boolean));
  const schoolNames=new Set((forms||[]).map(f=>String(f.schoolName||"")).filter(Boolean));
  const schools=SCHOOLS.filter(s=>schoolIds.has(String(s.id))||schoolNames.has(String(s.name)));
  return `
    <div class="bulk-export-filter-grid">
      <div class="field"><label>المدرسة</label><select id="${prefix}School"><option value="">كل المدارس</option>${schools.map(s=>`<option value="${escapeHtml(String(s.id))}" title="${escapeHtml(s.name)}">${escapeHtml(s.name)}</option>`).join("")}</select></div>
      <div class="field"><label>الشهر</label><input type="month" id="${prefix}Month"></div>
      <div class="field"><label>المدرس</label><select id="${prefix}Teacher"><option value="">كل المدرسين</option></select></div>
      <div class="bulk-export-count" id="${prefix}Count">المطابق: ${forms.length}</div>
      <button type="button" class="btn btn-sm btn-outline" id="${prefix}Reset">↺ إلغاء الفلاتر</button>
    </div>`;
}

function wireExportFilterControls(forms, prefix, onChange){
  const update=()=>{
    populateExportTeacherSelect(forms,prefix);
    const list=filterFormsForExport(forms,prefix);
    const count=document.getElementById(prefix+"Count");
    if(count) count.textContent=`المطابق: ${list.length}`;
    if(onChange) onChange(list);
  };
  [prefix+"School",prefix+"Month",prefix+"Teacher"].forEach(id=>document.getElementById(id)?.addEventListener("change",update));
  document.getElementById(prefix+"Reset")?.addEventListener("click",()=>{
    ["School","Month","Teacher"].forEach(k=>{const e=document.getElementById(prefix+k);if(e)e.value="";});
    update();
  });
  update();
}

async function exportListPDF(forms, filename, title, includeSupervisor){
  await ensureHtml2Canvas();
  await ensureJsPDF();
  toast("جاري تجهيز ملف PDF…");
  const holder = document.createElement("div");
  holder.style.position="fixed"; holder.style.left="-99999px"; holder.style.top="0";
  holder.style.width="794px"; holder.style.background="#fff";
  holder.innerHTML = listTableHTML(forms, title, includeSupervisor);
  document.body.appendChild(holder);
  const sheetEl1 = holder.querySelector(".sheet");
  if(sheetEl1){ sheetEl1.style.setProperty("width","100%","important"); sheetEl1.style.setProperty("min-height","auto","important"); sheetEl1.style.setProperty("margin","0","important"); }
  try{
    const canvas = await html2canvas(holder, {scale:2, useCORS:true, backgroundColor:"#ffffff"});
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({unit:"mm", format:"a4", orientation:"landscape"});
    const pageW = pdf.internal.pageSize.getWidth(), pageH = pdf.internal.pageSize.getHeight();
    const imgW = pageW - 16;
    const pageCanvasH = Math.floor((pageH-16) * canvas.width / imgW);
    let y=0, first=true;
    while(y < canvas.height){
      const h = Math.min(pageCanvasH, canvas.height - y);
      const pc = document.createElement("canvas"); pc.width=canvas.width; pc.height=h;
      pc.getContext("2d").drawImage(canvas, 0, y, canvas.width, h, 0, 0, canvas.width, h);
      if(!first) pdf.addPage();
      pdf.addImage(pc.toDataURL("image/jpeg",.95), "JPEG", 8, 8, imgW, h*imgW/canvas.width);
      y += h; first=false;
    }
    saveOrDownloadBlob(pdf.output("blob"), filename+".pdf");
    toast("تم تنزيل ملف PDF بنجاح");
  } catch(e){
    console.error(e);
    toast("تعذّر إنشاء ملف PDF", true);
  } finally {
    holder.remove();
  }
}

/* =========================================================
   Google Drive: تتم المزامنة حصراً عبر Google Apps Script.
   لا يوجد OAuth داخل WebView ولا يتم تضمين access tokens في التطبيق.
   ========================================================= */

/* =========================================================
   إرسال الاستمارات تلقائياً إلى Google Drive عبر Google Apps Script
   (بدون تسجيل دخول Google من الجهاز — يعمل بشكل موثوق داخل تطبيق
   الأندرويد نفسه). راجع ملف APPSCRIPT-SETUP.md لخطوات الإعداد.
   ترتيب الحفظ في Drive: المجلد الرئيسي ← اسم الشهر ← اسم المدرسة ← ملف
   باسم المدرس.
   ========================================================= */

const ARABIC_MONTHS = ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];

function monthFolderName(isoDate){
  const d = isoDate ? new Date(isoDate) : new Date();
  const valid = !isNaN(d.getTime()) ? d : new Date();
  return `${ARABIC_MONTHS[valid.getMonth()]} ${valid.getFullYear()}`;
}

function blobToBase64(blob){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();
    reader.onload = ()=> resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = ()=> reject(new Error("blob-read-failed"));
    reader.readAsDataURL(blob);
  });
}

const CentralUsers = {
  isConfigured(){ return !!APPS_SCRIPT_CONFIG.WEB_APP_URL; },
  async loginSalt(username){
    if(!this.isConfigured() || !navigator.onLine) return null;
    return await AppsScriptSync._post({action:"loginSalt", username});
  },
  async login(username, passwordHash){
    if(!this.isConfigured() || !navigator.onLine) return null;
    return await AppsScriptSync._post({action:"login", username, passwordHash});
  },
  async bootstrap(users){
    if(!this.isConfigured() || !navigator.onLine) return null;
    return await AppsScriptSync._post({action:"bootstrapUsers", users, bootstrapKey:APPS_SCRIPT_CONFIG.BOOTSTRAP_KEY});
  },
  async list(){
    if(!this.isConfigured() || !navigator.onLine) return null;
    return await AppsScriptSync._post({action:"listUsers"});
  },
  async upsert(user){
    if(!this.isConfigured() || !navigator.onLine) return null;
    return await AppsScriptSync._post({action:"upsertUser", user});
  },
  async delete(id){
    if(!this.isConfigured() || !navigator.onLine) return null;
    return await AppsScriptSync._post({action:"deleteUser", userId:id});
  },
  async changePassword(id, passwordHash, passwordSalt){
    if(!this.isConfigured() || !navigator.onLine) return null;
    return await AppsScriptSync._post({action:"changeUserPassword", userId:id, passwordHash, passwordSalt});
  }
};

const CentralSchools = {
  isConfigured(){ return !!APPS_SCRIPT_CONFIG.WEB_APP_URL; },
  async list(){
    if(!this.isConfigured() || !navigator.onLine) return null;
    return await AppsScriptSync._post({action:"listSchools"});
  },
  async bootstrap(schools){
    if(!this.isConfigured() || !navigator.onLine) return null;
    return await AppsScriptSync._post({action:"bootstrapSchools", schools, bootstrapKey:APPS_SCRIPT_CONFIG.BOOTSTRAP_KEY});
  },
  async upsert(school){
    if(!this.isConfigured() || !navigator.onLine) return null;
    return await AppsScriptSync._post({action:"upsertSchool", school});
  },
  async delete(id){
    if(!this.isConfigured() || !navigator.onLine) return null;
    return await AppsScriptSync._post({action:"deleteSchool", schoolId:id});
  }
};

async function syncCentralSchools(silent){
  if(!navigator.onLine || !CentralSchools.isConfigured()) return;
  try{
    const user=currentUser();
    // إرسال أي مدرسة حُفظت محلياً أثناء تعذر الخادم.
    if(user && user.role==="admin"){
      const pending=Store.schools().filter(s=>s && s._pendingCentral);
      for(const s of pending){
        try{
          const r=await CentralSchools.upsert(s);
          if(r && r.school){
            const clean={...r.school}; delete clean._pendingCentral;
            Store.updateSchool(s.id, clean);
          }
        }catch(e){ console.warn("pending school sync:",e); }
      }
    }
    const result=await CentralSchools.list();
    if(!result || !Array.isArray(result.schools)) return;
    let schools=result.schools.slice();
    // التهيئة الأولى للمدارس القديمة تتم مرة واحدة من جهاز المدير فقط.
    if(!schools.length && user && user.role==="admin" && Store.schools().length){
      try{
        const boot=await CentralSchools.bootstrap(Store.schools().map(s=>{const x={...s};delete x._pendingCentral;return x;}));
        if(boot && boot.ok===true){
          const fresh=await CentralSchools.list();
          schools=(fresh && Array.isArray(fresh.schools)) ? fresh.schools : Store.schools();
        }
      }catch(e){ console.warn("schools bootstrap:",e); }
    }
    if(Array.isArray(schools)){
      const remoteIds=new Set(schools.map(s=>String(s.id)));
      const localPending=Store.schools().filter(s=>s && s._pendingCentral && !remoteIds.has(String(s.id)));
      Store.saveSchools(schools.filter(s=>s && s.active !== false).concat(localPending));
      SCHOOLS=Store.schools();
      if(!silent) toast("تمت مزامنة المدارس المركزية");
    }
  }catch(e){ console.error("central schools:",e); }
}

const CentralSync = {
  isConfigured(){ return !!APPS_SCRIPT_CONFIG.WEB_APP_URL; },
  async upsert(record){
    if(!this.isConfigured() || !navigator.onLine) return null;
    try { return await AppsScriptSync._post({action:"upsertRecord", record}); }
    catch(e){ console.error(e); return null; }
  },
  async list(){
    if(!this.isConfigured() || !navigator.onLine) return null;
    const u=currentUser(); if(!u) return null;
    try { return await AppsScriptSync._post({action:"listRecords", includeDrafts:true}); }
    catch(e){ console.error(e); return null; }
  },
  async delete(id){
    if(!this.isConfigured() || !navigator.onLine) return null;
    return await AppsScriptSync._post({action:"deleteRecord", recordId:id});
  },
  async restore(id){
    if(!this.isConfigured() || !navigator.onLine) return null;
    return await AppsScriptSync._post({action:"restoreRecord", recordId:id});
  },
  async purge(id){
    if(!this.isConfigured() || !navigator.onLine) return null;
    return await AppsScriptSync._post({action:"purgeRecord", recordId:id});
  },
  async emptyTrash(ids){
    if(!this.isConfigured() || !navigator.onLine) return null;
    return await AppsScriptSync._post({action:"emptyTrash", recordIds:ids});
  }
};

async function syncCentralData(silent){
  if(!navigator.onLine || !CentralSync.isConfigured()) return false;
  const result=await CentralSync.list();
  if(!result || !Array.isArray(result.records)) return false;
  const user=currentUser(); if(!user) return false;
  const purged=new Set(purgedRecordIds());
  const deleted=new Set(Array.isArray(result.deletedIds)?result.deletedIds.map(String):[]);
  purged.forEach(id=>deleted.add(String(id)));
  const deletedRecords=Array.isArray(result.deletedRecords)?result.deletedRecords:[];
  deletedRecords.forEach(r=>{ if(r && r.id && !purged.has(String(r.id)) && !Store.trash().some(x=>x.kind==="form" && x.data && String(x.data.id)===String(r.id))) Store.addTrash({id:"form:"+r.id,kind:"form",data:r}); });
  pendingCentralDeletes().forEach(op=>{ if(op && op.id){ if(op.type==="restore") deleted.delete(String(op.id)); else if(op.type==="delete" || op.type==="purge" || op.type==="empty") deleted.add(String(op.id)); } });
  const localForms=Store.forms().filter(f=>!deleted.has(String(f.id)));
  const localDrafts=Store.drafts().filter(d=>!deleted.has(String(d.id)));
  let forms=localForms.slice(), drafts=localDrafts.slice();
  for(const r of result.records){
    if(deleted.has(String(r.id))) continue;
    const isDraft=(r.status==="draft" || r.draft===true || r.recordType==="draft");
    const target=isDraft?drafts:forms;
    const idx=target.findIndex(x=>x.id===r.id);
    if(idx<0) target.push(r);
    else {
      const lt=new Date(target[idx].updatedAt||target[idx].createdAt||0).getTime();
      const rt=new Date(r.updatedAt||r.createdAt||0).getTime();
      if(rt>lt) target[idx]=r;
    }
  }
  if(user.role==="admin"){
    Store.saveForms(forms.filter(f=>f.status!=="draft" && !f.draft));
    Store.saveDrafts(drafts.filter(d=>d.status==="draft" || d.draft===true || d.recordType==="draft"));
  } else {
    Store.saveForms(forms.filter(f=>f.createdBy===user.username));
    Store.saveDrafts(drafts.filter(d=>d.createdBy===user.username));
  }
  if(!silent) toast("تمت مزامنة البيانات المركزية بنجاح");
  return true;
}

const AppsScriptSync = {
  isConfigured(){ return !!APPS_SCRIPT_CONFIG.WEB_APP_URL; },

  // ملاحظة تقنية: نرسل الطلب بترويسة text/plain عمداً (وليس application/json)
  // لأن Google Apps Script لا يستجيب لطلبات OPTIONS التمهيدية (CORS preflight)،
  // وإرسال JSON بترويسة application/json يجبر المتصفح على إرسال preflight
  // يفشل. استخدام text/plain يجعله "طلباً بسيطاً" فيمر مباشرة، ونقوم بفك
  // ترميز JSON يدوياً داخل السكربت (e.postData.contents).
  async _post(payload){
    const controller = new AbortController();
    const timer = setTimeout(()=>controller.abort(), 20000);
    let res;
    try{
      res = await fetch(APPS_SCRIPT_CONFIG.WEB_APP_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({...payload, appToken: APPS_SCRIPT_CONFIG.APP_TOKEN, authToken: payload.authToken || (Store.session() && Store.session().authToken) || ""}),
        signal: controller.signal
      });
    }catch(e){
      if(e && e.name === "AbortError") throw new Error("انتهت مهلة الاتصال بالخادم");
      throw e;
    }finally{ clearTimeout(timer); }
    let result;
    try{ result = await res.json(); }
    catch(e){ throw new Error("استجابة غير متوقعة من السكربت — تحقق من رابط النشر"); }
    if(!result || result.ok !== true){
      const serverError = String((result && result.error) || "فشل غير معروف في السكربت");
      if(/نوع الطلب غير معروف|unknown action|action/i.test(serverError)) {
        throw new Error("نسخة Google Apps Script المنشورة قديمة. أعد نشر Code.gs المرفق بالمشروع ثم جرّب الحذف مرة أخرى.");
      }
      throw new Error(serverError);
    }
    return result;
  },

  // يرسل الاستمارة كملف PDF مطابق تماماً لشكلها المعروض/المطبوع (نفس الملف
  // الذي ينتجه زر "PDF" اليدوي) إلى: المجلد الرئيسي/الشهر/المدرسة/ملف فريد لكل تقييم
  // silent=true تُستخدم عند الإرسال الجماعي (مزامنة الاستمارات المعلّقة) لتفادي
  // إظهار رسالة toast لكل استمارة على حدة.
  async sendForm(form, silent){
    if(!this.isConfigured()){
      if(!silent) toast("لم يتم إعداد رابط Google Apps Script بعد — راجع ملف APPSCRIPT-SETUP.md", true);
      return null;
    }
    if(!navigator.onLine){
      if(!silent) toast("تم الحفظ محلياً. أعد الاتصال بالإنترنت لإرسال الاستمارة إلى Drive.", true);
      return null;
    }
    try{
      const blob = await buildFormPdfBlob(form);
      const base64 = await blobToBase64(blob);
      const teacher = (form.teacherName||"مدرّس").replace(/[\\\/:*?"<>|]/g,"").trim() || "مدرّس";
      const school = (form.schoolName||"بدون مدرسة").replace(/[\\\/:*?"<>|]/g,"").trim() || "بدون مدرسة";
      const result = await this._post({
        type: "form",
        month: monthFolderName(form.date),
        school,
        filename: teacher + "_" + String(form.id||Date.now()) + ".pdf",
        mimeType: "application/pdf",
        base64
      });
      if(!silent) toast("تم إرسال نسخة PDF من الاستمارة إلى Google Drive بنجاح");
      return result;
    }catch(e){
      console.error(e);
      if(!silent) toast("تعذّر إرسال الاستمارة إلى Drive: " + (e.message||"خطأ غير معروف"), true);
      return null;
    }
  },

  // يرسل مرفقاً إضافياً إلى نفس مسار المدرّس (المجلد الرئيسي/الشهر/المدرسة/)
  async uploadAttachment(form, file){
    if(!this.isConfigured()) return null;
    try{
      const base64 = await blobToBase64(file);
      const school = (form.schoolName||"بدون مدرسة").replace(/[\\\/:*?"<>|]/g,"").trim() || "بدون مدرسة";
      const teacher = (form.teacherName||"مدرّس").replace(/[\\\/:*?"<>|]/g,"").trim() || "مدرّس";
      const result = await this._post({
        type: "attachment",
        month: monthFolderName(form.date),
        school,
        filename: teacher + "_" + String(form.id||Date.now()) + "_" + file.name,
        mimeType: file.type || "application/octet-stream",
        base64
      });
      return result && result.url ? {id:result.id, name:result.name, url:result.url} : null;
    }catch(e){
      console.error(e);
      toast("تعذّر رفع المرفق إلى Drive: " + (e.message||"خطأ غير معروف"), true);
      return null;
    }
  }
};

/* =========================================================
   التوجيه (Router) + القالب العام + شاشة الدخول
   ========================================================= */

const App = { view:"login", params:{}, loginRole:"user", loginErr:"" };

function currentUser(){ return Store.session(); }

function navigate(view, params){
  App.view = view; App.params = params || {}; App.loginErr="";
  renderApp();
  window.scrollTo({top:0, behavior:"smooth"});
}

function logout(){
  Store.clearSession();
  const pa = document.getElementById("printArea");
  if(pa) pa.innerHTML = "";
  navigate("login");
  toast("تم تسجيل الخروج");
}

function renderApp(){
  const root = document.getElementById("root");
  const user = currentUser();

  if(!user || App.view==="login"){
    root.innerHTML = renderLoginView();
    wireLoginView();
    return;
  }

  let content = "";
  if(App.view==="userHome") content = renderUserHome();
  else if(App.view==="drafts") content = renderDrafts();
  else if(App.view==="trash") content = renderTrash();
  else if(App.view==="adminForms") content = renderAdminForms();
  else if(App.view==="adminUsers") content = renderAdminUsers();
  else if(App.view==="adminReports") content = renderAdminReports();
  else if(App.view==="adminSchools") content = renderAdminSchools();
  else if(App.view==="schoolLocations") content = renderSchoolLocations();
  else if(App.view==="progress") content = renderProgress();
  else if(App.view==="supervisorTracking") content = renderSupervisorTracking();
  else if(App.view==="formEditor") content = `<div id="editorMount"></div>`;
  else content = renderUserHome();

  root.innerHTML = renderShell(content, user);
  wireShellGlobal(user);

  if(App.view==="formEditor"){
    mountFormEditor(document.getElementById("editorMount"), App.params.formId||null);
  } else if(App.view==="adminForms"){
    wireAdminForms();
  } else if(App.view==="userHome"){
    wireUserHome();
  } else if(App.view==="drafts"){
    wireDrafts();
  } else if(App.view==="trash"){
    wireTrash();
  } else if(App.view==="adminUsers"){
    wireAdminUsers();
  } else if(App.view==="adminReports"){
    wireAdminReports();
  } else if(App.view==="adminSchools"){
    wireAdminSchools();
  } else if(App.view==="schoolLocations"){
    wireSchoolLocations();
  } else if(App.view==="progress"){
    wireProgress();
  }
}

function renderShell(contentHTML, user){
  const isAdmin = user.role==="admin";
  return `
  <div class="app">
    <div class="topbar">
      <img src="${LOGO_SRC}" alt="شعار">
      <div class="titles">
        <b>لائحة تقييم أداء المدرس</b>
        <span>مديرية أوقاف حلب — التعليم الشرعي</span>
      </div>
      <div class="spacer"></div>
      <span class="net ${NetState.online?'online':'offline'}">${NetState.online? "● متصل":"● غير متصل (أوفلاين)"}</span>
      <div class="user-chip"><span class="dot"></span> ${escapeHtml(user.name)} <span class="tag ${isAdmin?'tag-admin':'tag-user'}" style="margin-inline-start:4px;">${isAdmin?'مدير':(user.role==='school'?'مدرسة':'موجّه')}</span></div>
      <button class="btn-ghost-top" data-action="logout">خروج</button>
    </div>
    <div class="shell">
      <div class="sidebar">
        ${isAdmin? `
          <div class="nav-section-label">التقييمات</div>
          <div class="nav-item ${App.view==='adminForms'?'active':''}" data-action="nav" data-view="adminForms"><span class="ic">📋</span> جميع الاستمارات</div>
          <div class="nav-item ${App.view==='adminReports'?'active':''}" data-action="nav" data-view="adminReports"><span class="ic">📊</span> التقارير الشهرية</div>
          <div class="nav-item ${App.view==='progress'?'active':''}" data-action="nav" data-view="progress"><span class="ic">📈</span> تطور المدرسين</div>
          <div class="nav-item ${App.view==='supervisorTracking'?'active':''}" data-action="nav" data-view="supervisorTracking"><span class="ic">🧭</span> تتبع الموجّهين</div>
          <div class="nav-section-label">البيانات والإدارة</div>
          <div class="nav-item ${App.view==='adminSchools'?'active':''}" data-action="nav" data-view="adminSchools"><span class="ic">🏫</span> إدارة المدارس</div>
          <div class="nav-item ${App.view==='adminUsers'?'active':''}" data-action="nav" data-view="adminUsers"><span class="ic">👥</span> إدارة المستخدمين</div>
          <div class="nav-item ${App.view==='schoolLocations'?'active':''}" data-action="nav" data-view="schoolLocations"><span class="ic">📍</span> مواقع المدارس</div>
          <div class="nav-item" data-action="newForm"><span class="ic">➕</span> استمارة جديدة</div>
          <div class="nav-item" data-action="drafts"><span class="ic">📝</span> المسودات</div>
          <div class="nav-item ${App.view==='trash'?'active':''}" data-action="nav" data-view="trash"><span class="ic">🗑️</span> سلة المحذوفات</div>
        `:`
          <div class="nav-section-label">التقييمات والمتابعة</div>
          <div class="nav-item ${App.view==='userHome'?'active':''}" data-action="nav" data-view="userHome"><span class="ic">🗂️</span> استماراتي</div>
          <div class="nav-item ${App.view==='progress'?'active':''}" data-action="nav" data-view="progress"><span class="ic">📈</span> تطور المدرسين</div>
          <div class="nav-item ${App.view==='supervisorTracking'?'active':''}" data-action="nav" data-view="supervisorTracking"><span class="ic">🧭</span> متابعة الموجّه</div>
          <div class="nav-item ${App.view==='schoolLocations'?'active':''}" data-action="nav" data-view="schoolLocations"><span class="ic">📍</span> مواقع المدارس</div>
          <div class="nav-item" data-action="newForm"><span class="ic">➕</span> استمارة جديدة</div>
          <div class="nav-item" data-action="drafts"><span class="ic">📝</span> المسودات</div>
          <div class="nav-item ${App.view==='trash'?'active':''}" data-action="nav" data-view="trash"><span class="ic">🗑️</span> سلة المحذوفات</div>
        `}
        <div class="nav-item" data-action="changeOwnPw"><span class="ic">🔑</span> تغيير كلمة المرور</div>
        <div class="nav-item" data-action="syncSchools"><span class="ic">🔄</span> تحديث المدارس والمواقع</div>
        <div class="nav-item" data-action="syncPending"><span class="ic">☁️</span> مزامنة مع Google Drive</div>
        <div class="nav-item" data-action="openDriveFolder"><span class="ic">📂</span> عرض ملفات Drive</div>
        <div class="nav-item" data-action="syncPending"><span class="ic">📤</span> إرسال الاستمارات المحفوظة محلياً${pendingDriveForms(user).length? ` <span class="tag" style="background:#c0392b;color:#fff;margin-inline-start:4px;">${pendingDriveForms(user).length}</span>`:""}</div>
      </div>
      <div class="main">${contentHTML}</div>
    </div>
    <footer class="app-foot">تطبيق داخلي · يعمل أونلاين وأوفلاين · البيانات تُحفظ محلياً وتُزامن مركزياً عند توفر الإنترنت · <button type="button" id="privacyBtn" style="border:0;background:none;color:inherit;text-decoration:underline;cursor:pointer">الخصوصية</button></footer>
  </div>
  <div id="modalRoot"></div>`;
}

function showPrivacyNotice(){
  const root=document.getElementById("modalRoot");
  root.innerHTML=`<div class="modal-bg" id="privacyBg"><div class="modal" style="max-width:720px">
    <h3>الخصوصية وحماية البيانات</h3>
    <p class="sub">يستخدم التطبيق بيانات التقييم والمرفقات التي يدخلها المستخدم لتنفيذ وظائف التقييم والتقارير والمزامنة مع Google Drive عند توفر الإنترنت.</p>
    <ul style="line-height:1.9">
      <li>تُحفظ الاستمارات محلياً على الجهاز لدعم العمل دون اتصال.</li>
      <li>عند تفعيل المزامنة، تُرسل نسخة PDF والمرفقات إلى مجلد Google Drive المخصص للنظام عبر Google Apps Script باستخدام اتصال HTTPS.</li>
      <li>لا يستخدم التطبيق تسجيل دخول Google داخل WebView ولا يخزن access tokens الخاصة بحساب Google.</li>
      <li>يُطلب الموقع الجغرافي فقط عند استخدام وظيفة تحتاج موقع المدرسة.</li>
      <li>لا تُباع بيانات المستخدمين ولا تُستخدم للإعلانات.</li>
    </ul>
    <div style="display:flex;justify-content:flex-end;gap:8px"><button class="btn btn-gold" id="closePrivacy">إغلاق</button></div>
  </div></div>`;
  document.getElementById("closePrivacy").addEventListener("click",()=>root.innerHTML="");
}

function renderSchoolLocations(){
  const user=currentUser();
  const canEdit = user && user.role === "admin";
  const rows=SCHOOLS.map((s,i)=>`
    <div class="card" style="margin-bottom:10px;">
      <div class="row-between" style="gap:12px;flex-wrap:wrap;">
        <div>
          <h3 style="margin:0 0 4px;font-size:15px;">${escapeHtml(s.name)}</h3>
          <div class="sub">${escapeHtml(s.address||"لم يُحدد العنوان")}</div>
        </div>
        <div style="display:flex;gap:7px;flex-wrap:wrap;align-items:center;">
          ${s.lat&&s.lng?`<a class="btn btn-primary btn-sm" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(s.lat+","+s.lng)}">🧭 فتح الموقع في الخرائط</a>`:`<span class="sub">📍 لم يُحدد الموقع الجغرافي بعد</span>`}
          ${canEdit?`<button type="button" class="btn btn-outline btn-sm" data-location-edit="${escapeHtml(String(s.id))}">✏️ تعديل الموقع</button>`:""}
        </div>
      </div>
    </div>`).join("");
  return `<div class="card">
    <div class="row-between" style="gap:12px;flex-wrap:wrap;">
      <div><h2 style="margin:0;">📍 مواقع المدارس</h2><div class="sub">قائمة مستقلة لمواقع المدارس. اختيار المدرسة في الاستمارة يعرض اسم المدرسة فقط.</div></div>
      <span class="pill-stat"><b>${SCHOOLS.length}</b><span>مدرسة</span></span>
    </div>
    <div style="margin-top:14px;">${rows||`<div class="empty-state">لا توجد مدارس.</div>`}</div>
  </div>`;
}

function wireSchoolLocations(){
  document.querySelectorAll("[data-location-edit]").forEach(btn=>btn.addEventListener("click",()=>openSchoolModal(btn.dataset.locationEdit)));
}

function wireNotVisitedDropdown(){
  const sel=document.getElementById("notVisitedSchoolSelect"), out=document.getElementById("notVisitedSchoolDetails");
  if(!sel||!out)return;
  sel.onchange=()=>{ const s=SCHOOLS.find(x=>String(x.id)===String(sel.value)); out.innerHTML=s?`<div class="card"><b>🔔 ${escapeHtml(s.name)}</b><div class="sub">${escapeHtml(s.address||"لم يُحدد العنوان")}</div>${s.lat&&s.lng?`<a target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(s.lat+","+s.lng)}">🧭 فتح المسار في الخرائط</a>`:""}</div>`:""; };
}
function wireShellGlobal(user){
  wireNotVisitedDropdown();
  const privacyBtn = document.getElementById("privacyBtn");
  if(privacyBtn) privacyBtn.addEventListener("click", showPrivacyNotice);
  document.querySelectorAll('[data-action="nav"]').forEach(el=>{
    el.addEventListener("click", ()=> navigate(el.dataset.view));
  });
  const logoutBtn = document.querySelector('[data-action="logout"]');
  if(logoutBtn) logoutBtn.addEventListener("click", logout);
  const newFormBtn = document.querySelector('[data-action="newForm"]');
  if(newFormBtn) newFormBtn.addEventListener("click", ()=> navigate("formEditor", {formId:null}));
  const draftsBtn=document.querySelector('[data-action="drafts"]');
  if(draftsBtn) draftsBtn.addEventListener("click", ()=> navigate("drafts"));
  const pwBtn = document.querySelector('[data-action="changeOwnPw"]');
  if(pwBtn) pwBtn.addEventListener("click", ()=> openChangePasswordModal(user.id, true));
  const driveViewBtn = document.querySelector('[data-action="openDriveFolder"]');
  if(driveViewBtn) driveViewBtn.addEventListener("click", openDriveFolder);
  const syncSchoolsBtn = document.querySelector('[data-action="syncSchools"]');
  if(syncSchoolsBtn) syncSchoolsBtn.addEventListener("click", async ()=>{
    if(!navigator.onLine){ toast("لا يمكن تحديث المدارس الآن — لا يوجد اتصال بالإنترنت", true); return; }
    syncSchoolsBtn.classList.add("disabled");
    try{
      await syncCentralSchools(false);
      renderApp();
      toast("تم تحديث المدارس والمواقع من القاعدة المركزية");
    }catch(e){
      toast("تعذر تحديث المدارس: "+(e.message||"خطأ"), true);
      renderApp();
    }
  });
  const syncPendingBtn = document.querySelector('[data-action="syncPending"]');
  if(syncPendingBtn) syncPendingBtn.addEventListener("click", async ()=>{
    await syncCentralData(false);
    await syncPendingFormsToDrive();
    renderApp();
  });
}

// يفتح مجلد Drive الذي تُحفظ فيه الاستمارات (للعرض فقط) في المتصفح/تطبيق Drive
// الخارجي على الجهاز. داخل تطبيق الأندرويد يتم ذلك عبر تنقّل الصفحة نفسها
// (يعترضه WebView ويحوّله لفتح خارجي)، بدل window.open التي تُستخدم للنوافذ
// المنبثقة الخاصة بتسجيل دخول Google فقط.
function openDriveFolder(){
  if(!GOOGLE_CONFIG.DRIVE_FOLDER_ID){
    toast("لم يتم تحديد مجلد Drive بعد", true);
    return;
  }
  const url = "https://drive.google.com/drive/folders/" + GOOGLE_CONFIG.DRIVE_FOLDER_ID;
  if(window.AndroidDownloader){
    window.location.href = url;
  } else {
    window.open(url, "_blank");
  }
}

// الاستمارات المكتملة التي لم تصل بعد إلى الخدمة المركزية أو Google Drive.
// هذه هي قائمة الانتظار التي يعالجها زر "إرسال الاستمارات المحفوظة محلياً".
function pendingDriveForms(user){
  const u = user || currentUser();
  if(!u) return [];
  const scope = u.role==="admin" ? Store.forms() : Store.forms().filter(f=>f.createdBy===u.username);
  return scope.filter(f=>f.status==="submitted" && (!f.driveSynced || f.centralSynced!==true));
}

// يعيد إرسال كل الاستمارات المكتملة المعلقة. لا يرسل المسودات.
// auto=true عند استدعائه تلقائياً بعد عودة الإنترنت، بدون رسائل مزعجة لكل خطوة.
// قفل مركزي يمنع تشغيل أكثر من مزامنة في الوقت نفسه، حتى لو ضغط المستخدم
// زر المزامنة عدة مرات أو بدأت مزامنة تلقائية بالتزامن معها.
let _pendingSyncPromise = null;
const SYNC_ITEM_TIMEOUT_MS = 20000;

/* ===== شريط تقدم المزامنة ===== */
function syncProgressShow(total, auto){
  let el=document.getElementById("syncProgressOverlay");
  if(!el){
    el=document.createElement("div");
    el.id="syncProgressOverlay";
    el.className="sync-progress-overlay";
    document.body.appendChild(el);
  }
  el.innerHTML=`<div class="sync-progress-card" dir="rtl">
    <div class="sync-progress-head">
      <div class="sync-progress-icon">☁️</div>
      <div><strong>جاري مزامنة الاستمارات</strong><span>${auto?'مزامنة تلقائية بعد عودة الاتصال':'مزامنة يدوية مع Google Drive'}</span></div>
    </div>
    <div class="sync-progress-count" id="syncProgressCount">0 / ${total}</div>
    <div class="sync-progress-track"><div id="syncProgressBar" class="sync-progress-bar" style="width:0%"></div></div>
    <div class="sync-progress-percent" id="syncProgressPercent">0%</div>
    <div class="sync-progress-current" id="syncProgressCurrent">جارٍ التحضير…</div>
    <div class="sync-progress-stats"><span>✓ <b id="syncProgressSent">0</b> ناجحة</span><span>⚠ <b id="syncProgressFailed">0</b> فاشلة</span><span>↷ <b id="syncProgressSkipped">0</b> متجاوزة</span></div>
  </div>`;
  return el;
}
function syncProgressUpdate(done,total,current,sent,failed,skipped){
  const pct=total?Math.min(100,Math.round(done*100/total)):100;
  const bar=document.getElementById("syncProgressBar");
  const count=document.getElementById("syncProgressCount");
  const percent=document.getElementById("syncProgressPercent");
  const cur=document.getElementById("syncProgressCurrent");
  const s=document.getElementById("syncProgressSent");
  const f=document.getElementById("syncProgressFailed");
  const k=document.getElementById("syncProgressSkipped");
  if(bar) bar.style.width=pct+"%";
  if(count) count.textContent=done+" / "+total;
  if(percent) percent.textContent=pct+"%";
  if(cur) cur.textContent=current||"جارٍ المزامنة…";
  if(s) s.textContent=sent||0;
  if(f) f.textContent=failed||0;
  if(k) k.textContent=skipped||0;
}
function syncProgressFinish(total,sent,failed,skipped){
  syncProgressUpdate(total,total,failed?"اكتملت المزامنة مع وجود استمارات تحتاج إعادة المحاولة":"اكتملت المزامنة بنجاح",sent,failed,skipped);
  const el=document.getElementById("syncProgressOverlay");
  if(el){
    const card=el.querySelector(".sync-progress-card");
    if(card) card.classList.add(failed?"has-errors":"done");
    setTimeout(()=>{ if(el.parentNode) el.remove(); }, failed?2200:1400);
  }
}
function syncProgressHide(){
  const el=document.getElementById("syncProgressOverlay");
  if(el && el.parentNode) el.remove();
}

function withTimeout(promise, ms, label){
  return Promise.race([
    promise,
    new Promise((_, reject)=>setTimeout(()=>reject(new Error("timeout:" + (label||"operation"))), ms))
  ]);
}

async function syncPendingFormsToDrive(auto=false){
  if(_pendingSyncPromise) {
    if(!auto) toast("المزامنة قيد التنفيذ بالفعل — لن يتم إنشاء ملفات مكررة");
    return _pendingSyncPromise;
  }
  _pendingSyncPromise = (async()=>{
    if(!AppsScriptSync.isConfigured()){
      if(!auto) toast("لم يتم إعداد رابط Google Apps Script بعد", true);
      return;
    }
    if(!navigator.onLine){
      if(!auto) toast("أنت أوفلاين الآن — أعد الاتصال بالإنترنت ثم أعد المحاولة", true);
      return;
    }
    const pending = pendingDriveForms();
    if(!pending.length){
      if(!auto) toast("لا توجد استمارات مكتملة معلقة للإرسال");
      return;
    }
    if(!auto) toast("جاري إرسال " + pending.length + " استمارة محفوظة محلياً…");
    syncProgressShow(pending.length, auto);
    let sent=0, failed=0, skipped=0, done=0;
    syncProgressUpdate(done,pending.length,"جارٍ التحضير…",sent,failed,skipped);
    for(let i=0;i<pending.length;i++){
      const f=pending[i];
      syncProgressUpdate(done,pending.length,"جارٍ مزامنة: " + (f.teacherName || "استمارة "+(i+1)) + (f.schoolName ? " — " + f.schoolName : ""),sent,failed,skipped);
      // إعادة قراءة السجل قبل الإرسال: إذا سبق تشغيل آخر وتمت مزامنته فلا نعيد الرفع.
      const latest = Store.forms().find(x=>String(x.id)===String(f.id)) || f;
      if(latest.driveSynced===true && latest.centralSynced===true){ skipped++; done++; syncProgressUpdate(done,pending.length,"تم تجاوز استمارة تمت مزامنتها مسبقاً",sent,failed,skipped); continue; }
      try{
        let driveOk = latest.driveSynced===true;
        if(!driveOk){
          const result = await withTimeout(AppsScriptSync.sendForm(latest, true), SYNC_ITEM_TIMEOUT_MS, "drive");
          driveOk = !!result;
          if(driveOk) Store.updateForm(latest.id, {driveSynced:true, driveFileId:result.id||latest.driveFileId||"", driveSyncError:null});
        }
        let centralOk = latest.centralSynced===true;
        if(!centralOk){
          const latestForCentral = Store.forms().find(x=>String(x.id)===String(latest.id)) || latest;
          const cr = await withTimeout(CentralSync.upsert({...latestForCentral, recordType:"form", status:"submitted", draft:false}), SYNC_ITEM_TIMEOUT_MS, "central");
          centralOk = !!cr;
          if(centralOk) Store.updateForm(latest.id,{centralSynced:true, centralSyncError:null});
        }
        if(driveOk && centralOk) sent++;
        else { failed++; Store.updateForm(latest.id,{syncLastError:"تعذر إكمال المزامنة"}); }
        done++;
        syncProgressUpdate(done,pending.length,(driveOk && centralOk)?"تمت المزامنة بنجاح":"تعذر إكمال هذه الاستمارة",sent,failed,skipped);
      }catch(e){
        console.error("pending sync:",e);
        failed++;
        Store.updateForm(latest.id,{syncLastError:e.message||"sync-failed", syncLastAttemptAt:new Date().toISOString()});
        done++;
        syncProgressUpdate(done,pending.length,"فشلت هذه الاستمارة — ستبقى للمحاولة التالية",sent,failed,skipped);
        // لا توقف بقية الاستمارات بسبب استمارة واحدة معلقة أو فاشلة.
        continue;
      }
    }
    syncProgressFinish(pending.length,sent,failed,skipped);
    if(!auto){
      if(sent && !failed) toast("تم إرسال " + sent + " استمارة بنجاح");
      else if(sent && failed) toast("تم إرسال " + sent + " استمارة، وتعذّر إرسال " + failed + " — ستبقى معلقة للمحاولة التالية", true);
      else if(skipped && !failed) toast("لا توجد استمارات جديدة للإرسال — تم تجاهل المكرر");
      else toast("تعذّر إرسال الاستمارات — ستبقى محفوظة محلياً للمحاولة التالية", true);
    }
    renderApp();
  })();
  try { return await _pendingSyncPromise; }
  finally { _pendingSyncPromise=null; }
}
/* ---------------- شاشة الدخول ---------------- */
function renderLoginView(){
  return `
  <div class="app">
    <div class="login-wrap">
      <div class="login-card">
        <div class="login-side">
          <div>
            <div class="lg"><img src="${LOGO_SRC}"></div>
            <h1>نظام لائحة تقييم أداء المدرس</h1>
            <p>منصّة إلكترونية موحّدة لموجّهي التعليم الشرعي لإعداد استمارات تقييم أداء المدرّسين، وتصديرها ومزامنتها، تعمل داخل المدينة بلا انقطاع — أونلاين وأوفلاين.</p>
          </div>
          <div class="foot">وزارة الأوقاف — مديرية أوقاف حلب</div>
        </div>
        <div class="login-form">
          <h2>تسجيل الدخول</h2>
          <div class="sub">اختر نوع الحساب وأدخل بيانات الدخول</div>
          <div class="role-switch">
            <button type="button" data-role="user" class="${App.loginRole==='user'?'active':''}">حساب موجّه</button>
            <button type="button" data-role="admin" class="${App.loginRole==='admin'?'active':''}">حساب مدير</button>
          </div>
          ${App.loginErr? `<div class="login-err">${escapeHtml(App.loginErr)}</div>`:""}
          <form id="loginForm">
            <div class="field">
              <label>اسم المستخدم</label>
              <input type="text" id="loginUser" placeholder="مثال: m1" autocomplete="username" required>
            </div>
            <div class="field">
              <label>كلمة المرور</label>
              <input type="password" id="loginPass" placeholder="••••••••" autocomplete="current-password" required>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">دخول</button>
          </form>
          <div class="hint-box">
            عند أول دخول، استخدم بيانات الحساب التي يزوّدك بها مدير النظام.
            بيانات الدخول تُسلَّم من مدير النظام، ويُطلب تغيير كلمة المرور عند أول دخول.
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function wireLoginView(){
  document.querySelectorAll("[data-role]").forEach(btn=>{
    btn.addEventListener("click", ()=>{ App.loginRole = btn.dataset.role; renderApp(); });
  });
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    showLoginLoadingScreen();
    const username = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value;
    const localUser = Store.findUser(username);
    let localValid=false;
    if(localUser){
      localValid = localUser.passwordHash ? await verifyPassword(pass,localUser) : (localUser.password===pass);
    }

    // عند توفر الإنترنت، تكون قاعدة المستخدمين المركزية هي المرجع الأساسي.
    if(navigator.onLine && CentralUsers.isConfigured()){
      try{
        let challenge;
        try{ challenge=await CentralUsers.loginSalt(username); }
        catch(err){
          // إذا كانت القاعدة فارغة، يهيئها المدير مرة واحدة من النسخة المحلية.
          if(App.loginRole==="admin" && localUser && localUser.role==="admin" && localValid){
            const boot=await CentralUsers.bootstrap(Store.users());
            if(!boot || boot.ok!==true) throw err;
            challenge=await CentralUsers.loginSalt(username);
          } else {
            throw err;
          }
        }
        if(challenge && challenge.error==="NO_CENTRAL_USERS") throw new Error("لم تتم تهيئة قاعدة المستخدمين المركزية بعد. سجّل دخول المدير أولاً من جهازه المتصل بالإنترنت.");
        const hp=await hashPassword(pass, challenge.salt);
        const remote=await CentralUsers.login(username,hp.hash);
        if(!remote || !remote.user) throw new Error("تعذر تسجيل الدخول المركزي");
        const u=remote.user;
        if((App.loginRole==="admin" && u.role!=="admin") || (App.loginRole==="user" && u.role==="admin")){
          throw new Error("نوع الحساب المختار لا يطابق صلاحية المستخدم");
        }
        // تحديث نسخة الجهاز من الحساب المركزي فقط بعد نجاح الدخول.
        const cached=Store.findUser(u.username);
        Store.saveUsers([...(Store.users().filter(x=>String(x.id)!==String(u.id) && x.username!==u.username)), {...u, passwordHash:hp.hash, passwordSalt:challenge.salt}]);
        Store.setSession({id:u.id, username:u.username, name:u.name, role:u.role, specialty:u.specialty, schoolId:u.schoolId||"", authToken:remote.token});
        if(u.role==="admin"){
          try{ const ur=await CentralUsers.list(); if(ur && Array.isArray(ur.users)) Store.saveUsers(ur.users.map(x=>{ const c=Store.findUser(x.username); return c && c.passwordHash ? {...x,passwordHash:c.passwordHash,passwordSalt:c.passwordSalt} : x; })); }catch(_){}
        }
        Promise.all([syncCentralData(true), syncCentralSchools(true)]).then(()=>{ if(App.view!=="formEditor") renderApp(); });
        if(u.mustChangePassword){
          navigate(u.role==="admin"?"adminForms":"userHome");
          setTimeout(()=> openChangePasswordModal(u.id, true, true), 200);
        } else {
          navigate(u.role==="admin"?"adminForms":"userHome");
        }
        finishLoginLoadingScreen(true);
        return;
      }catch(err){
        // إذا كان الخطأ من الخادم نفسه (كلمة مرور خاطئة/حساب معطل) لا نعود
        // للنسخة المحلية حتى لا تتجاوز القاعدة المركزية. أما أخطاء الشبكة
        // فتسمح بالعمل Offline بالنسخة المحلية.
        const msg=String(err && err.message || "");
        const networkLike=/Failed to fetch|NetworkError|Load failed|fetch|network|استجابة غير متوقعة/i.test(msg);
        if(!networkLike){ App.loginErr=msg || "اسم المستخدم أو كلمة المرور غير صحيحة"; finishLoginLoadingScreen(false); renderApp(); return; }
      }
    }

    // وضع Offline: استخدم النسخة المحلية فقط.
    if(!localUser || !localValid || (App.loginRole==="admin" && localUser.role!=="admin") || (App.loginRole==="user" && localUser.role==="admin")){
      App.loginErr="اسم المستخدم أو كلمة المرور غير صحيحة، أو نوع الحساب غير مطابق";
      finishLoginLoadingScreen(false);
      renderApp();
      return;
    }
    if(localUser.password && !localUser.passwordHash){
      const migrated=await hashPassword(pass);
      Store.updateUser(localUser.id,{passwordHash:migrated.hash,passwordSalt:migrated.salt,password:undefined});
    }
    Store.setSession({id:localUser.id, username:localUser.username, name:localUser.name, role:localUser.role, specialty:localUser.specialty, schoolId:localUser.schoolId||"", authToken:null});
    navigate(localUser.role==="admin"?"adminForms":"userHome");
    finishLoginLoadingScreen(true);
  });
}

/* =========================================================
   لوحة الموجّه (استماراتي) + لوحة المدير (كل الاستمارات / المستخدمون)
   ========================================================= */

function scoreBadge(f){
  const scores=f.scores||{};
  const total=CRITERIA.reduce((s,c)=>s+(Number(scores[c.id])||0),0);
  const r=ratingOf(total);
  return `<span class="badge-score ${r.cls}">${total}</span> <span class="tag ${r.cls==='badge-excellent'?'tag-mixed':''}" style="background:transparent;padding:0;font-size:11px;color:inherit;">${r.label}</span>`;
}
function genderTag(g){
  if(g==="boys") return `<span class="tag tag-boys">بنين</span>`;
  if(g==="girls") return `<span class="tag tag-girls">بنات</span>`;
  return `<span class="tag tag-mixed">مشترك</span>`;
}

/* ---------------- المسودات ---------------- */

function renderTrash(){
  const u=currentUser();
  const items=Store.trash().filter(x=>u.role==="admin" || (x.data && (x.data.createdBy===u.username || x.data.ownerUsername===u.username)));
  return `<div class="card">
    <div class="row-between"><div><h2>🗑️ سلة المحذوفات</h2><div class="sub">العناصر المحذوفة تبقى هنا ويمكن استعادتها. الحذف النهائي متاح للمدير.</div></div>
    ${u.role==="admin"&&items.length?`<button class="btn btn-danger btn-sm" id="emptyTrash">إفراغ السلة نهائياً</button>`:""}</div>
    <div style="margin-top:14px">${items.length?items.map(x=>{
      const d=x.data||{}, title=d.teacherName||d.schoolName||"عنصر محذوف";
      const type=x.kind==="draft"?"مسودة":"استمارة تقييم";
      return `<div class="card" style="margin-bottom:10px;border-style:dashed">
        <div class="row-between"><div><b>${escapeHtml(title)}</b><div class="sub">${type} · ${escapeHtml(d.schoolName||"")} · حذف: ${fmtDate(x.deletedAt)}</div></div>
        <div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn btn-primary btn-sm" data-trash-restore="${escapeHtml(x.id)}">استعادة</button>${u.role==="admin"?`<button class="btn btn-danger btn-sm" data-trash-purge="${escapeHtml(x.id)}">حذف نهائي</button>`:""}</div></div>
      </div>`;
    }).join(""):`<div class="empty-state"><div class="ic">🗑️</div>سلة المحذوفات فارغة.</div>`}</div>
  </div>`;
}
function wireTrash(){
  document.querySelectorAll("[data-trash-restore]").forEach(b=>b.onclick=async()=>{
    const item=Store.trash().find(x=>String(x.id)===String(b.dataset.trashRestore)); if(!item)return;
    Store.restoreTrash(item.id);
    removePendingCentralDelete("delete",[item.data && item.data.id]);
    renderApp();
    if(navigator.onLine && CentralSync.isConfigured()){
      CentralSync.restore(item.data.id).then(r=>{ if(!r || r.ok!==true) throw new Error("تعذرت الاستعادة المركزية"); toast("تمت استعادة العنصر مركزياً"); }).catch(e=>{ queueCentralDelete("restore",[item.data.id]); toast("تمت الاستعادة محلياً وسيعاد تثبيتها مركزياً",true); });
    } else { queueCentralDelete("restore",[item.data.id]); toast("تمت الاستعادة محلياً وسيعاد التزامن عند توفر الإنترنت"); }
  });
  document.querySelectorAll("[data-trash-purge]").forEach(b=>b.onclick=()=>confirmDialog("حذف نهائي","سيتم حذف هذا العنصر نهائياً من الجهاز، ثم تثبيت الحذف في قاعدة البيانات بالخلفية. متابعة؟",async()=>{
    const item=Store.trash().find(x=>String(x.id)===String(b.dataset.trashPurge));
    const recordId=item && item.data ? item.data.id : String(b.dataset.trashPurge).replace(/^form:/,"").replace(/^draft:/,"");
    markPurgedRecordIds([recordId]); Store.purgeTrash(b.dataset.trashPurge); queueCentralDelete("purge",[recordId]);
    renderApp(); toast("تم الحذف النهائي من الجهاز — جارٍ تثبيته مركزياً"); flushPendingCentralDeletes(true);
  }));
  const empty=document.getElementById("emptyTrash");
  if(empty) empty.onclick=()=>confirmDialog("إفراغ سلة المحذوفات","سيتم حذف جميع العناصر نهائياً من الجهاز، ثم تثبيت الحذف في قاعدة البيانات بالخلفية. متابعة؟",async()=>{
    const items=Store.trash(); const ids=items.map(x=>x && x.data && x.data.id).filter(Boolean).map(String);
    markPurgedRecordIds(ids); Store.clearTrash(); ids.forEach(id=>queueCentralDelete("purge",[id]));
    renderApp(); toast("تم إفراغ السلة من الجهاز — جارٍ تثبيت الحذف مركزياً"); flushPendingCentralDeletes(true);
  });
}

function renderDrafts(){
  const u=currentUser();
  const drafts=Store.drafts().filter(d=>u.role==="admin" || d.createdBy===u.username).sort((a,b)=>new Date(b.updatedAt||0)-new Date(a.updatedAt||0));
  return `<div class="card"><div class="row-between"><div><h2>المسودات</h2><div class="sub">استمارات غير مكتملة يمكنك العودة إليها لاحقاً. تُحفظ تلقائياً أثناء الكتابة وتُزامن مركزياً عند توفر الإنترنت.</div></div><button class="btn btn-gold" data-action="newDraft">➕ مسودة جديدة</button></div>
  <div id="draftsList" style="margin-top:14px;">${drafts.length?drafts.map(d=>`<div class="card" style="margin-bottom:10px;border-style:dashed;"><div class="row-between"><div><b>${escapeHtml(d.teacherName||"مدرّس جديد")}</b><div class="sub">${escapeHtml(d.schoolName||"لم تُحدد المدرسة")} · آخر تعديل: ${fmtDate(d.updatedAt)}</div></div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn btn-outline btn-sm" data-draft-open="${d.id}">متابعة</button><button class="btn btn-danger btn-sm" data-draft-del="${d.id}">حذف</button></div></div></div>`).join(""):`<div class="empty-state"><div class="ic">📝</div>لا توجد مسودات محفوظة حالياً.</div>`}</div></div>`;
}
function wireDrafts(){
  document.querySelector('[data-action="newDraft"]').onclick=()=>navigate("formEditor",{formId:null,draftId:null});
  document.querySelectorAll('[data-draft-open]').forEach(b=>b.onclick=()=>navigate("formEditor",{formId:null,draftId:b.dataset.draftOpen}));
  document.querySelectorAll('[data-draft-del]').forEach(b=>b.onclick=()=>confirmDialog("حذف المسودة","سيتم حذف المسودة من الجهاز فوراً، ثم تثبيت الحذف مركزياً بالخلفية.",async()=>{ const id=b.dataset.draftDel; Store.deleteDraft(id); queueCentralDelete("delete",[id]); renderApp(); toast("تم حذف المسودة — جارٍ تثبيت الحذف مركزياً"); flushPendingCentralDeletes(true); }));
}

/* ---------------- لوحة الموجّه ---------------- */
function renderUserHome(){
  const user = currentUser();
  const forms = user.role==="school" && user.schoolId ? Store.forms().filter(f=>String(f.schoolId)===String(user.schoolId)||String(f.schoolName)===String((SCHOOLS.find(s=>String(s.id)===String(user.schoolId))||{}).name)) : Store.forms().filter(f=>f.createdBy===user.username);
  return `
  <div class="stats-row">
    <div class="pill-stat"><b>${forms.length}</b><span>إجمالي استماراتي</span></div>
    <div class="pill-stat"><b>${forms.filter(f=>{const t=CRITERIA.reduce((s,c)=>s+(Number((f.scores||{})[c.id])||0),0);return t>=90;}).length}</b><span>بتقدير ممتاز</span></div>
    <div class="pill-stat"><b>${new Date().toLocaleDateString('ar-SY',{month:'long',year:'numeric'})}</b><span>الشهر الحالي</span></div>
  </div>
  <div class="card">
    <div class="row-between">
      <div><h2>استماراتي</h2><div class="sub">استمارات تقييم أداء المدرّسين التي قمت بإعدادها</div></div>
      <button class="btn btn-gold" data-action="newForm2"><span>➕</span> استمارة جديدة</button>
    </div>
    <div class="search-bar">
      <input type="text" id="uSearch" placeholder="ابحث باسم المدرّس أو المدرسة أو المادة…">
    </div>
    <div class="export-group">
      <span class="export-label">تصدير استمارات التقييم:</span>
      ${exportFilterControlsHTML(forms,"uExport")}
      <div class="report-export-actions">
        <button class="btn btn-primary btn-sm" id="uBtnPdf">📄 PDF الاستمارات</button>
        <button class="btn btn-outline btn-sm" id="uBtnPdfList">📋 PDF كشف</button>
        <button class="btn btn-outline btn-sm" id="uBtnXls">📊 Excel</button>
        <button class="btn btn-outline btn-sm" id="uBtnDoc">📝 Word</button>
      </div>
      <div class="sub">يمكنك اختيار مدرسة، شهر، مدرس، أو الجمع بينها. التصدير يشمل الاستمارات المطابقة فقط.</div>
    </div>
    <div id="uFormsTable"></div>
  </div>`;
}
function userFormsTableHTML(list){
  if(list.length===0){
    return `<div class="empty-state"><div class="ic">🗒️</div>لا توجد استمارات بعد — اضغط "استمارة جديدة" للبدء</div>`;
  }
  return `<div class="table-wrap"><table>
    <thead><tr><th>المدرسة</th><th>المدرّس</th><th>المادة</th><th>التاريخ</th><th>النتيجة</th><th>إجراءات</th></tr></thead>
    <tbody>${list.map(f=>`
      <tr>
        <td>${escapeHtml(f.schoolName||"—")} ${genderTag(f.schoolGender)}</td>
        <td>${escapeHtml(f.teacherName||"—")}</td>
        <td>${escapeHtml(f.subject||"—")}</td>
        <td>${fmtDateShort(f.date)}</td>
        <td>${scoreBadge(f)}</td>
        <td>
          <button class="btn btn-sm btn-outline" data-act="open" data-id="${f.id}">فتح</button>
          <button class="btn btn-sm btn-danger" data-act="del" data-id="${f.id}">حذف</button>
        </td>
      </tr>`).join("")}
    </tbody></table></div>`;
}
function wireUserHome(){
  const user = currentUser();
  const linkedSchool=(user.role==="school"&&user.schoolId)?SCHOOLS.find(s=>String(s.id)===String(user.schoolId)):null;
  const all = ()=> user.role==="school" && linkedSchool
    ? Store.forms().filter(f=>String(f.schoolId)===String(linkedSchool.id)||String(f.schoolName)===String(linkedSchool.name))
    : Store.forms().filter(f=>f.createdBy===user.username);
  let currentList = all();
  const renderTable = (list)=>{ currentList=list; document.getElementById("uFormsTable").innerHTML = userFormsTableHTML(list); wireUserTableActions(); };
  renderTable(all());
  document.querySelector('[data-action="newForm2"]').addEventListener("click", ()=> navigate("formEditor",{formId:null}));
  wireExportFilterControls(all(),"uExport",(list)=>{ currentList=list; });
  document.getElementById("uBtnPdf").addEventListener("click", ()=>{
    const list=filterFormsForExport(all(),"uExport");
    const school=document.getElementById("uExportSchool")?.value||"";
    const teacher=document.getElementById("uExportTeacher")?.value||"";
    const month=document.getElementById("uExportMonth")?.value||"";
    const parts=["استمارات_تقييم"];
    if(school) parts.push((SCHOOLS.find(s=>String(s.id)===String(school))||{}).name||"مدرسة");
    if(month) parts.push(exportFilterMonthLabel(month));
    if(teacher) parts.push(teacher);
    exportFormsPDF(list,parts.join("_"));
  });
  document.getElementById("uBtnPdfList").addEventListener("click", ()=>{
    const list=filterFormsForExport(all(),"uExport");
    exportListPDF(list, "كشف_استمارات_محددة", "كشف استمارات التقييم المحددة", false);
  });
  document.getElementById("uBtnXls").addEventListener("click", ()=> exportListExcel(filterFormsForExport(all(),"uExport"), "استمارات_محددة", "الاستمارات", false));
  document.getElementById("uBtnDoc").addEventListener("click", ()=> exportListWord(filterFormsForExport(all(),"uExport"), "استمارات_محددة", "استمارات التقييم المحددة", false));
  document.getElementById("uSearch").addEventListener("input", (e)=>{
    const q = e.target.value.trim();
    const list = all().filter(f => !q || [f.schoolName,f.teacherName,f.subject].some(v=> (v||"").includes(q)));
    renderTable(list);
  });
  function wireUserTableActions(){
    document.querySelectorAll('[data-act="open"]').forEach(b=> b.addEventListener("click", ()=> navigate("formEditor",{formId:b.dataset.id})));
    document.querySelectorAll('[data-act="del"]').forEach(b=> b.addEventListener("click", ()=> confirmDialog("حذف الاستمارة", "سيتم حذف الاستمارة من الجهاز وتثبيت حذف ملفها من Google Drive والقاعدة المركزية بالخلفية. متابعة؟", async ()=>{
      const id=b.dataset.id;
      try{
        Store.deleteForm(id);
        queueCentralDelete("delete",[id]);
        renderTable(all());
        toast("تم حذف الاستمارة من الجهاز — جارٍ تثبيت الحذف مركزياً");
        flushPendingCentralDeletes(true);
      }catch(e){ toast("تعذّر حذف الاستمارة: "+(e.message||"خطأ"),true); }
    })));
  }
}

/* ---------------- لوحة المدير: كل الاستمارات ---------------- */

/* =========================================================
   التقارير + تتبع تطور المدرسين + متابعة المدارس
   ========================================================= */
function totalOfForm(f){ return CRITERIA.reduce((s,c)=>s+(Number((f.scores||{})[c.id])||0),0); }
function monthForms(month, scopeForms){
  const forms=scopeForms||Store.forms();
  return forms.filter(f=>(f.date||"").slice(0,7)===month);
}
function currentMonth(){ return new Date().toISOString().slice(0,7); }

function teacherProgressRows(forms){
  const map={};
  forms.forEach(f=>{
    const key=(f.teacherName||"").trim();
    if(!key) return;
    if(!map[key]) map[key]=[];
    map[key].push({...f,_total:totalOfForm(f)});
  });
  return Object.entries(map).map(([teacher,arr])=>{
    arr.sort((a,b)=>String(a.date).localeCompare(String(b.date)));
    const first=arr[0]._total,last=arr[arr.length-1]._total, delta=last-first;
    return {teacher, school:arr[arr.length-1].schoolName||"", count:arr.length, first,last,delta, trend:delta>0?"تحسن":delta<0?"تراجع":"ثابت", lastDate:arr[arr.length-1].date, rating:ratingOf(last).label};
  }).sort((a,b)=>b.last-a.last);
}
function progressBadge(row){
  const cls=row.delta>0?"badge-excellent":row.delta<0?"badge-weak":"badge-good";
  return `<span class="${cls}" style="font-weight:800">${row.trend} ${row.delta>0?"+":""}${row.delta}</span>`;
}
function renderProgress(){
  const u=currentUser();
  const forms=u.role==="admin"?Store.forms():(u.role==="school"&&u.schoolId?Store.forms().filter(f=>String(f.schoolId)===String(u.schoolId)):Store.forms().filter(f=>f.createdBy===u.username));
  const rows=teacherProgressRows(forms);
  return `<div class="card">
    <div class="row-between"><div><h2>تطور تقييم المدرسين</h2><div class="sub">بطاقات واضحة لكل مدرس توضح أول تقييم وآخر تقييم ومقدار التحسن أو التراجع.</div></div>
      <button class="btn btn-outline" data-action="exportProgress">📊 تصدير Excel</button></div>
    <div class="stats-row">
      <div class="pill-stat"><b>${rows.length}</b><span>مدرسون متابعون</span></div>
      <div class="pill-stat"><b>${rows.filter(x=>x.delta>0).length}</b><span>تحسن</span></div>
      <div class="pill-stat"><b>${rows.filter(x=>x.delta<0).length}</b><span>تراجع</span></div>
    </div>
    <div class="progress-cards">${rows.length?rows.map(r=>`
      <div class="card progress-card">
        <div class="row-between"><div><h3 style="margin:0">${escapeHtml(r.teacher)}</h3><div class="sub">${escapeHtml(r.school||"—")}</div></div>${progressBadge(r)}</div>
        <div class="stats-row">
          <div class="pill-stat"><b>${r.count}</b><span>التقييمات</span></div>
          <div class="pill-stat"><b>${r.first}</b><span>أول تقييم</span></div>
          <div class="pill-stat"><b>${r.last}</b><span>آخر تقييم</span></div>
          <div class="pill-stat"><b>${r.delta>0?"+":""}${r.delta}</b><span>التغير</span></div>
        </div>
        <div class="sub">آخر تقييم: ${fmtDateShort(r.lastDate)} · التقدير الحالي: <b>${escapeHtml(r.rating)}</b></div>
      </div>`).join(""):`<div class="empty-state"><div class="ic">📈</div>لا توجد تقييمات كافية بعد.</div>`}</div>
  </div>`;
}
function wireProgress(){
  const btn=document.querySelector('[data-action="exportProgress"]');
  if(btn) btn.onclick=()=>exportProgressExcel();
}
async function exportProgressExcel(){
  await ensureXLSX();
  const u=currentUser(), forms=u.role==="admin"?Store.forms():Store.forms().filter(f=>f.createdBy===u.username);
  const rows=teacherProgressRows(forms);
  const aoa=[["المدرس","المدرسة","عدد التقييمات","أول نتيجة","آخر نتيجة","التغير","الحالة","آخر تقييم"]];
  rows.forEach(r=>aoa.push([r.teacher,r.school,r.count,r.first,r.last,r.delta,r.trend,fmtDateShort(r.lastDate)]));
  const ws=XLSX.utils.aoa_to_sheet(aoa); ws["!rtl"]=true; ws["!cols"]=[{wch:28},{wch:28},{wch:14},{wch:12},{wch:12},{wch:10},{wch:12},{wch:14}];
  const wb=XLSX.utils.book_new(); wb.Workbook={Views:[{RTL:true}]}; XLSX.utils.book_append_sheet(wb,ws,"تطور المدرسين");
  const wbout=XLSX.write(wb,{bookType:"xlsx",type:"array"}); saveOrDownloadBlob(new Blob([wbout],{type:"application/octet-stream"}),"تقرير_تطور_المدرسين.xlsx");
}
// بطاقات "المدارس التي تمت/لم تتم زيارتها" — عرض مناسب للجوال بديل عن جدول عريض.
// opts.showSupervisors: يُظهر أسماء الموجّهين الذين زاروا كل مدرسة (لحساب المدير، كون
// المدرسة الواحدة قد تُزار من قبل عدّة موجّهين من أصل 25 موجّهاً).
function schoolVisitCardsHTML(schools, forms, opts){
  opts = opts || {};
  if(!schools.length){
    return `<div class="empty-state" style="padding:24px;"><div class="ic">🏫</div>${escapeHtml(opts.emptyText||"لا توجد مدارس")}</div>`;
  }
  return `<div class="school-visit-list">${schools.map(s=>{
    const sForms = forms.filter(f=>String(f.schoolId)===String(s.id)||f.schoolName===s.name);
    const mapLink = s.lat && s.lng
      ? `<a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(s.lat+","+s.lng)}" target="_blank" rel="noopener">🧭 خرائط</a>`
      : "";
    const supNames = opts.showSupervisors ? Array.from(new Set(sForms.map(f=>f.createdByName).filter(Boolean))) : [];
    return `<div class="school-visit-card ${opts.notVisited?'notvisited':''}">
      <div class="svc-top">
        <span class="svc-name">${escapeHtml(s.name)}</span>
        ${opts.showCount!==false? `<span class="svc-count ${sForms.length===0?'zero':''}">${sForms.length} ${opts.notVisited?'زيارة':'زيارة/زيارات'}</span>`:""}
      </div>
      <div class="svc-meta"><span>📍 ${escapeHtml(s.address||"—")}</span>${mapLink?(" "+mapLink):""}</div>
      ${opts.showSupervisors? `<div class="svc-sups"><b>${supNames.length>1? "الموجّهون الذين زاروا المدرسة:" : "الموجّه الذي زار المدرسة:"}</b> ${supNames.length? escapeHtml(supNames.join("، ")) : "—"}</div>`:""}
    </div>`;
  }).join("")}</div>`;
}

function renderSupervisorTracking(){
  const u=currentUser();
  const forms=u.role==="admin"?Store.forms():Store.forms().filter(f=>f.createdBy===u.username);
  const groups={};
  forms.forEach(f=>{const k=f.createdBy||""; if(!groups[k])groups[k]=[];groups[k].push(f);});
  const rows=Object.entries(groups).map(([k,a])=>({name:(a[0]&&a[0].createdByName)||k,count:a.length,schools:new Set(a.map(f=>f.schoolName)).size,last:(function(){var s=a.slice().sort((x,y)=>String(y.date).localeCompare(String(x.date)))[0];return s?s.date:undefined;})()}));
  const trackingHTML = `<div class="card"><h2>تتبع الموجّهين</h2><div class="sub">نشاط الموجّهين وعدد الاستمارات والمدارس التي تمت متابعتها.</div>
  <div class="table-wrap"><table><thead><tr><th>الموجّه</th><th>عدد التقييمات</th><th>مدارس تمت متابعتها</th><th>آخر نشاط</th></tr></thead>
  <tbody>${rows.length?rows.map(r=>`<tr><td>${escapeHtml(r.name)}</td><td>${r.count}</td><td>${r.schools}</td><td>${fmtDateShort(r.last)}</td></tr>`).join(""):`<tr><td colspan="4">لا توجد بيانات.</td></tr>`}</tbody></table></div></div>`;

  // المدارس التي تمت زيارتها والتي لم تتم زيارتها بعد — لكلا الحسابين (المدير والموجّه)،
  // مع إظهار اسم/أسماء الموجّهين الذين زاروا كل مدرسة في حساب المدير تحديداً
  // (كون المدرسة الواحدة سوف تُزار من قبل عدد من الموجّهين الـ 25).
  const visitedIds=new Set(forms.map(f=>String(f.schoolId)).filter(Boolean));
  const visitedNames=new Set(forms.map(f=>f.schoolName).filter(Boolean));
  const visited=SCHOOLS.filter(s=>visitedIds.has(String(s.id))||visitedNames.has(s.name));
  const notVisited=SCHOOLS.filter(s=>!visitedIds.has(String(s.id))&&!visitedNames.has(s.name));
  const isAdmin = u.role==="admin";
  const visitsHTML = `<div class="card"><h2>${isAdmin? "المدارس التي تمت زيارتها والتي لم تتم زيارتها بعد (كل الموجّهين)" : "المدارس التي تمت زيارتها والتي لم تتم زيارتها بعد"}</h2>
  <div class="sub">${isAdmin? "حسب جميع استمارات التقييم لدى كل الموجّهين — مع اسم الموجّه الذي زار كل مدرسة." : "حسب الاستمارات التي أنجزتها."}</div>
  <div class="stats-row">
    <div class="pill-stat"><b>${visited.length}</b><span>مدارس تمت زيارتها</span></div>
    <div class="pill-stat"><b>${notVisited.length}</b><span>مدارس لم تتم زيارتها بعد</span></div>
  </div>
  <h2 style="font-size:15px;">تمت زيارتها</h2>
  ${schoolVisitCardsHTML(visited, forms, {showSupervisors:isAdmin, emptyText:"لا توجد مدارس تمت زيارتها بعد"})}
  <h2 style="font-size:15px;margin-top:18px;">تنبيه المدارس التي لم تتم زيارتها بعد</h2>
  <details class="card" ${notVisited.length?"open":""}>
    <summary style="cursor:pointer;font-weight:800;color:#8a3f25;">🔔 ${notVisited.length} مدرسة لم تتم زيارتها بعد — اضغط لعرض القائمة</summary>
    <div style="margin-top:12px">
      ${notVisited.length?`<select id="notVisitedSchoolSelect" style="width:100%;padding:12px;border-radius:10px;border:1px solid #ddd">
        <option value="">اختر مدرسة من القائمة…</option>
        ${notVisited.map(s=>`<option value="${escapeHtml(String(s.id))}">${escapeHtml(s.name)}${s.address?" — "+escapeHtml(s.address):""}</option>`).join("")}
      </select>
      <div id="notVisitedSchoolDetails" style="margin-top:10px"></div>`:`<div class="empty-state">تمت زيارة جميع المدارس.</div>`}
    </div>
  </details>
  </div>`;

  return trackingHTML + visitsHTML;
}


function reportFilterData(){
  const start=document.getElementById("reportStartDate")?.value||"";
  const end=document.getElementById("reportEndDate")?.value||"";
  const supervisor=document.getElementById("reportSupervisor")?.value||"";
  const school=document.getElementById("reportSchool")?.value||"";
  let forms=Store.forms().slice();
  if(start) forms=forms.filter(f=>String(f.date||"").slice(0,10)>=start);
  if(end) forms=forms.filter(f=>String(f.date||"").slice(0,10)<=end);
  if(supervisor) forms=forms.filter(f=>String(f.createdBy)===String(supervisor));
  if(school) forms=forms.filter(f=>String(f.schoolId)===String(school)||String(f.schoolName)===String((SCHOOLS.find(s=>String(s.id)===String(school))||{}).name));
  const visitedIds=new Set(forms.map(f=>String(f.schoolId)).filter(Boolean));
  const visitedNames=new Set(forms.map(f=>f.schoolName).filter(Boolean));
  const visited=SCHOOLS.filter(s=>visitedIds.has(String(s.id))||visitedNames.has(s.name));
  const notVisited=SCHOOLS.filter(s=>!visitedIds.has(String(s.id))&&!visitedNames.has(s.name));
  return {forms,visited,notVisited,start,end,supervisor,school};
}
function reportRangeLabel(start,end){
  if(start&&end) return `من ${fmtDateShort(start)} إلى ${fmtDateShort(end)}`;
  if(start) return `من ${fmtDateShort(start)}`;
  if(end) return `حتى ${fmtDateShort(end)}`;
  return "كل الفترات";
}
function buildMonthlyReportHTML(){
  const {forms,visited,notVisited,start,end,supervisor,school}=reportFilterData();
  const rows=teacherProgressRows(forms);
  const total=forms.reduce((s,f)=>s+totalOfForm(f),0);
  const supervisorName=supervisor ? ((Store.users().find(u=>String(u.username)===String(supervisor))||{}).name||supervisor) : "كل الموجّهين";
  const schoolName=school ? ((SCHOOLS.find(s=>String(s.id)===String(school))||{}).name||school) : "كل المدارس";
  return `<div class="report-sheet report-preview-cards" dir="rtl">
    <div class="report-title"><h1>تقرير التقييمات</h1>
      <div>${escapeHtml(reportRangeLabel(start,end))}</div>
      <div>الموجّه: ${escapeHtml(supervisorName)} · المدرسة: ${escapeHtml(schoolName)}</div>
      <small>مديرية أوقاف حلب — التعليم الشرعي</small>
    </div>
    <div class="report-kpis">
      <div class="report-kpi"><b>${forms.length}</b><span>التقييمات</span></div>
      <div class="report-kpi"><b>${visited.length}</b><span>مدارس تمت زيارتها</span></div>
      <div class="report-kpi"><b>${notVisited.length}</b><span>مدارس لم تتم زيارتها</span></div>
      <div class="report-kpi"><b>${forms.length?Math.round(total/forms.length):0}</b><span>متوسط الدرجات</span></div>
    </div>
    <section class="report-section"><div class="report-section-title"><span>🏫 المدارس</span><b>${visited.length}</b></div>
      ${schoolVisitCardsHTML(visited,forms,{showSupervisors:true})}</section>
    <section class="report-section"><div class="report-section-title alert"><span>🔔 لم تتم زيارتها</span><b>${notVisited.length}</b></div>
      ${schoolVisitCardsHTML(notVisited,forms,{notVisited:true,showCount:false,emptyText:"تمت زيارة جميع المدارس."})}</section>
    <section class="report-section"><div class="report-section-title"><span>📈 تطور المدرسين</span><b>${rows.length}</b></div>
      <div class="report-card-grid">${rows.map(r=>`<div class="report-item-card"><div class="report-item-head"><strong>${escapeHtml(r.teacher)}</strong>${progressBadge(r)}</div>
      <div class="report-item-meta"><span>🏫 ${escapeHtml(r.school||"—")}</span><span>📝 ${r.count} تقييم</span><span>الأخير: <b>${r.last}</b></span></div></div>`).join("")||`<div class="report-empty">لا توجد تقييمات ضمن الفترة المحددة.</div>`}</div>
    </section>
  </div>`;
}
async function exportMonthlyPDF(){
  await ensureHtml2Canvas(); await ensureJsPDF(); toast("جاري تجهيز التقرير PDF…");
  const holder=document.createElement("div"); holder.style.position="fixed";holder.style.left="-99999px";holder.style.top="0";holder.style.width="794px";holder.style.background="#fff";holder.innerHTML=buildMonthlyReportHTML();document.body.appendChild(holder);
  try{
    const canvas=await html2canvas(holder,{scale:2,useCORS:true,backgroundColor:"#fff"});
    const {jsPDF}=window.jspdf; const pdf=new jsPDF({unit:"mm",format:"a4",orientation:"portrait"});
    const imgW=pdf.internal.pageSize.getWidth()-16, pageH=pdf.internal.pageSize.getHeight()-16, pageCanvasH=Math.floor(pageH*canvas.width/imgW);
    let y=0,first=true; while(y<canvas.height){const h=Math.min(pageCanvasH,canvas.height-y),pc=document.createElement("canvas");pc.width=canvas.width;pc.height=h;pc.getContext("2d").drawImage(canvas,0,y,canvas.width,h,0,0,canvas.width,h);if(!first)pdf.addPage();pdf.addImage(pc.toDataURL("image/jpeg",.92),"JPEG",8,8,imgW,h*imgW/canvas.width);first=false;y+=h;}
    const {start,end}=reportFilterData(); saveOrDownloadBlob(pdf.output("blob"), `تقرير_التقييمات_${start||"البداية"}_${end||"النهاية"}.pdf`); toast("تم إنشاء التقرير PDF");
  }catch(e){console.error(e);toast("تعذر إنشاء التقرير PDF",true);}finally{holder.remove();}
}
async function exportMonthlyExcel(){
  await ensureXLSX(); const {forms,visited,notVisited,start,end}=reportFilterData(); const rows=teacherProgressRows(forms);
  const wb=XLSX.utils.book_new(); const summary=[["تقرير التقييمات",""],["الفترة",reportRangeLabel(start,end)],["إجمالي التقييمات",forms.length],["مدارس تمت زيارتها",visited.length],["مدارس لم تتم زيارتها",notVisited.length]];
  let ws=XLSX.utils.aoa_to_sheet(summary);ws["!rtl"]=true;XLSX.utils.book_append_sheet(wb,ws,"الملخص");
  const details=[["المدرس","المدرسة","الموجّه","التاريخ","المجموع","التقدير"]]; forms.forEach(f=>details.push([f.teacherName||"",f.schoolName||"",f.createdByName||"",fmtDateShort(f.date),totalOfForm(f),ratingOf(totalOfForm(f)).label]));
  ws=XLSX.utils.aoa_to_sheet(details);ws["!rtl"]=true;ws["!cols"]=[{wch:28},{wch:32},{wch:28},{wch:14},{wch:10},{wch:14}];XLSX.utils.book_append_sheet(wb,ws,"التقييمات");
  const prog=[["المدرس","عدد التقييمات","أول نتيجة","آخر نتيجة","التغير","الحالة"]];rows.forEach(r=>prog.push([r.teacher,r.count,r.first,r.last,r.delta,r.trend]));
  ws=XLSX.utils.aoa_to_sheet(prog);ws["!rtl"]=true;XLSX.utils.book_append_sheet(wb,ws,"تطور المدرسين");
  const wbout=XLSX.write(wb,{bookType:"xlsx",type:"array"});saveOrDownloadBlob(new Blob([wbout],{type:"application/octet-stream"}),`تقرير_التقييمات_${start||"البداية"}_${end||"النهاية"}.xlsx`);toast("تم تصدير التقرير Excel");
}
function renderAdminReports(){
  const supervisors=Store.users().filter(u=>u.role==="user"&&u.active!==false);
  return `<div class="card"><div class="row-between"><div><h2>التقارير</h2><div class="sub">يمكنك التقرير حسب الموجّه أو المدرسة، مع تحديد تاريخ بداية ونهاية.</div></div></div>
    <div class="report-toolbar report-filter-grid">
      <div class="field"><label>تاريخ البداية</label><input type="date" id="reportStartDate"></div>
      <div class="field"><label>تاريخ النهاية</label><input type="date" id="reportEndDate"></div>
      <div class="field"><label>الموجّه</label><select id="reportSupervisor"><option value="">كل الموجّهين</option>${supervisors.map(u=>`<option value="${escapeHtml(u.username)}">${escapeHtml(u.name)}</option>`).join("")}</select></div>
      <div class="field"><label>المدرسة</label><select id="reportSchool"><option value="">كل المدارس</option>${SCHOOLS.map(s=>`<option value="${escapeHtml(String(s.id))}" title="${escapeHtml(s.name)}">${escapeHtml(s.name)}</option>`).join("")}</select></div>
      <div class="report-export-actions"><button class="btn btn-primary" id="btnMonthlyExcel">📊 Excel</button><button class="btn btn-outline" id="btnMonthlyPdf">📄 PDF</button></div>
    </div>
    <div id="monthlyPreview" style="margin-top:18px;"></div>
  </div>`;
}
function wireAdminReports(){
  const render=()=>{const a=document.getElementById("reportStartDate").value,b=document.getElementById("reportEndDate").value;if(a&&b&&a>b){toast("تاريخ البداية يجب أن يسبق تاريخ النهاية",true);return;}document.getElementById("monthlyPreview").innerHTML=buildMonthlyReportHTML();};
  ["reportStartDate","reportEndDate","reportSupervisor","reportSchool"].forEach(id=>document.getElementById(id).addEventListener("change",render));
  document.getElementById("btnMonthlyExcel").onclick=exportMonthlyExcel;document.getElementById("btnMonthlyPdf").onclick=exportMonthlyPDF;render();
}

function renderAdminSchools(){
  const forms=Store.forms();
  return `<div class="card">
    <div class="row-between"><div><h2>إدارة المدارس</h2><div class="sub">كل مدرسة في بطاقة مستقلة مع نوعها وموقعها وعدد التقييمات المسجلة.</div></div><button class="btn btn-gold" data-action="addSchool">➕ إضافة مدرسة</button></div>
    <div class="admin-card-grid school-admin-grid">
      ${SCHOOLS.length?SCHOOLS.map(s=>{
        const count=forms.filter(f=>String(f.schoolId)===String(s.id)||f.schoolName===s.name).length;
        return `<div class="admin-entity-card school-entity-card">
          <div class="aec-head">
            <div class="school-icon">🏫</div>
            <div class="aec-title"><strong>${escapeHtml(s.name)}</strong><span>${s.gender==="boys"?"مدرسة بنين":s.gender==="girls"?"مدرسة بنات":"مدرسة مشتركة"}</span></div>
            <span class="svc-count ${count?'':'zero'}">${count} تقييم</span>
          </div>
          <div class="aec-info">
            <div><span>العنوان</span><b>${escapeHtml(s.address||"غير محدد")}</b></div>
            <div><span>الموقع</span><b>${s.lat&&s.lng?"📍 محدد":"⚠️ غير محدد"}</b></div>
          </div>
          <div class="aec-actions">
            ${s.lat&&s.lng?`<a class="btn btn-sm btn-outline" target="_blank" rel="noopener" href="${escapeHtml(s.mapsUrl||("https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(s.lat+","+s.lng)))}">🧭 الخرائط</a>`:""}
            <button class="btn btn-sm btn-outline" data-school-edit="${s.id}">✏️ تعديل</button>
            <button class="btn btn-sm btn-danger" data-school-del="${s.id}">🗑️ حذف</button>
          </div>
        </div>`;
      }).join(""):`<div class="empty-state"><div class="ic">🏫</div>لا توجد مدارس.</div>`}
    </div>
  </div>`;
}
function openSchoolModal(id){
  const isNew=id===null,s=isNew?{name:"",address:"",gender:"mixed",lat:"",lng:""}:SCHOOLS.find(x=>String(x.id)===String(id)); if(!s)return;
  document.getElementById("modalRoot").innerHTML=`<div class="modal-bg" id="mBg"><div class="modal"><h3>${isNew?"إضافة مدرسة":"تعديل مدرسة"}</h3>
  <div class="field"><label>اسم المدرسة</label><input id="sName" value="${escapeHtml(s.name)}"></div>
  <div class="field"><label>العنوان/المنطقة</label><input id="sAddress" value="${escapeHtml(s.address||"")}"></div>
  <div class="field"><label>النوع</label><select id="sGender"><option value="mixed" ${s.gender==="mixed"?"selected":""}>مشتركة</option><option value="boys" ${s.gender==="boys"?"selected":""}>بنين</option><option value="girls" ${s.gender==="girls"?"selected":""}>بنات</option></select></div>
  <div class="field"><label>الموقع الجغرافي</label>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
      <button type="button" class="btn btn-outline btn-sm" id="sLocateBtn">📍 تحديد الموقع الجغرافي الحالي</button>
      <span class="sub" id="sLocateStatus" style="margin:0;">${s.lat&&s.lng? escapeHtml(s.lat)+", "+escapeHtml(s.lng) : "لم يُحدَّد بعد"}</span>
    </div>
    <input type="hidden" id="sLat" value="${escapeHtml(s.lat||"")}">
    <input type="hidden" id="sLng" value="${escapeHtml(s.lng||"")}">
  </div>
  <div class="row-between"><button class="btn btn-outline" id="mCancel">إلغاء</button><button class="btn btn-primary" id="mOk">حفظ</button></div></div></div>`;
  document.getElementById("mCancel").onclick=closeModal;
  const locateBtn=document.getElementById("sLocateBtn");
  locateBtn.onclick=()=>{
    locateBtn.disabled=true; locateBtn.textContent="جارٍ تحديد الموقع…";
    const applyLocation=(ok,lat,lng,error)=>{
      if(ok && isFinite(Number(lat)) && isFinite(Number(lng))){
        const la=Number(lat).toFixed(6), lo=Number(lng).toFixed(6);
        document.getElementById("sLat").value=la; document.getElementById("sLng").value=lo;
        document.getElementById("sLocateStatus").textContent=la+", "+lo;
        locateBtn.disabled=false; locateBtn.textContent="📍 تحديد الموقع الجغرافي الحالي";
        toast("تم تحديد موقع المدرسة بنجاح");
        return;
      }
      locateBtn.disabled=false; locateBtn.textContent="📍 تحديد الموقع الجغرافي الحالي";
      toast("تعذّر تحديد موقع المدرسة: "+(error||"تأكد من تشغيل خدمة الموقع ومنح الإذن ثم حاول مرة أخرى"), true);
    };
    if(window.AndroidDownloader && typeof window.AndroidDownloader.getCurrentLocation === "function"){
      window.__androidLocationResult=applyLocation;
      window.AndroidDownloader.getCurrentLocation("window.__androidLocationResult");
      return;
    }
    if(!navigator.geolocation){ applyLocation(false,0,0,"المتصفح لا يدعم تحديد الموقع الجغرافي"); return; }
    navigator.geolocation.getCurrentPosition(
      pos=>applyLocation(true,pos.coords.latitude,pos.coords.longitude,""),
      err=>applyLocation(false,0,0,err&&err.message?err.message:"تحقق من صلاحية الموقع"),
      {enableHighAccuracy:true, timeout:15000, maximumAge:120000}
    );
  };
  document.getElementById("mOk").onclick=async ()=>{
    const saveBtn=document.getElementById("mOk");
    if(saveBtn.disabled) return;
    let patch={
      name:document.getElementById("sName").value.trim(),
      address:document.getElementById("sAddress").value.trim(),
      gender:document.getElementById("sGender").value,
      lat:document.getElementById("sLat").value.trim(),
      lng:document.getElementById("sLng").value.trim()
    };
    if(!patch.name){toast("أدخل اسم المدرسة",true);return;}
    saveBtn.disabled=true; saveBtn.textContent="جارٍ الحفظ…";
    const saveId = isNew ? ("school_"+uid()+"_"+Date.now()) : String(id);
    patch.id=saveId;

    try{
      // حفظ فوري محلياً حتى لا يضيع التعديل بسبب بطء/انقطاع الخادم.
      patch._pendingCentral=false;
      if(isNew) Store.addSchool(patch);
      else {
        const updated=Store.updateSchool(id,patch);
        if(!updated) throw new Error("لم يتم العثور على المدرسة للتعديل");
      }
      SCHOOLS=Store.schools();
      closeModal(); renderApp();

      // ثم المزامنة المركزية.
      if(navigator.onLine && CentralSchools.isConfigured()){
        try{
          const centralResult=await CentralSchools.upsert(patch);
          if(!centralResult || !centralResult.school) throw new Error("تعذرت المزامنة المركزية");
          const clean={...centralResult.school}; delete clean._pendingCentral;
          Store.updateSchool(saveId,clean);
          SCHOOLS=Store.schools(); renderApp();
          toast(isNew?"تمت إضافة المدرسة وحفظها مركزياً":"تم حفظ تعديل المدرسة مركزياً");
        }catch(syncErr){
          Store.updateSchool(saveId,{_pendingCentral:true});
          SCHOOLS=Store.schools(); renderApp();
          toast("تم حفظ التعديل على الجهاز، وستتم مزامنته تلقائياً عند عودة الخادم",false);
        }
      }else{
        Store.updateSchool(saveId,{_pendingCentral:true});
        SCHOOLS=Store.schools(); renderApp();
        toast("تم حفظ المدرسة على الجهاز، وستتم مزامنتها عند الاتصال بالإنترنت");
      }
    }catch(e){
      saveBtn.disabled=false; saveBtn.textContent="حفظ";
      toast("تعذّر حفظ المدرسة: "+(e.message||"خطأ"),true);
    }
  };
}
function wireAdminSchools(){
  document.querySelector('[data-action="addSchool"]').onclick=()=>openSchoolModal(null);
  document.querySelectorAll("[data-school-edit]").forEach(b=>b.onclick=()=>openSchoolModal(b.dataset.schoolEdit));
  document.querySelectorAll("[data-school-del]").forEach(b=>b.onclick=()=>confirmDialog("حذف المدرسة","سيتم تعطيل المدرسة مركزياً، ولن تُحذف الاستمارات السابقة. متابعة؟",async ()=>{
    try{
      if(navigator.onLine && CentralSchools.isConfigured()){
        const r=await CentralSchools.delete(b.dataset.schoolDel);
        if(!r) throw new Error("تعذرت المزامنة المركزية");
      } else throw new Error("يجب الاتصال بالإنترنت لتعطيل المدرسة مركزياً");
      Store.deleteSchool(b.dataset.schoolDel); SCHOOLS=Store.schools(); renderApp(); toast("تم تعطيل المدرسة مركزياً");
    }catch(e){ toast("تعذّر حذف المدرسة: "+(e.message||"خطأ"),true); }
  }));
}
function renderAdminForms(){
  const forms = Store.forms();
  return `
  <div class="stats-row">
    <div class="pill-stat"><b>${forms.length}</b><span>إجمالي الاستمارات</span></div>
    <div class="pill-stat"><b>${new Set(forms.map(f=>f.schoolName)).size}</b><span>عدد المدارس المشمولة</span></div>
    <div class="pill-stat"><b>${new Set(forms.map(f=>f.createdBy)).size}</b><span>عدد الموجّهين النشطين</span></div>
  </div>
  <div class="card">
    <div class="row-between">
      <div><h2>جميع الاستمارات</h2><div class="sub">صلاحية كاملة: معاينة، تعديل، حذف، طباعة وتصدير</div></div>
    </div>
    <div class="search-bar">
      <input type="text" id="aSearch" placeholder="ابحث باسم المدرّس أو المدرسة أو الموجّه…">
      <select id="aGenderFilter">
        <option value="">كل المدارس</option>
        <option value="boys">مدارس البنين</option>
        <option value="girls">مدارس البنات</option>
        <option value="mixed">مدارس مشتركة</option>
      </select>
    </div>
    <div class="export-group admin-export-filters">
      <span class="export-label">تصدير الاستمارات:</span>
      <div class="bulk-export-filter-grid">
        <div class="field"><label>الموجّه</label><select id="aExportSupervisor"><option value="">كل الموجّهين</option>${Store.users().filter(u=>u.role==="user"&&u.active!==false).map(u=>`<option value="${escapeHtml(u.username)}">${escapeHtml(u.name)}</option>`).join("")}</select></div>
        <div class="field"><label>المدرسة</label><select id="aExportSchool"><option value="">كل المدارس</option>${SCHOOLS.map(s=>`<option value="${escapeHtml(String(s.id))}" title="${escapeHtml(s.name)}">${escapeHtml(s.name)}</option>`).join("")}</select></div>
        <div class="field"><label>الشهر</label><input type="month" id="aExportMonth"></div>
        <div class="field"><label>المدرس</label><select id="aExportTeacher"><option value="">كل المدرسين</option></select></div>
        <div class="bulk-export-count" id="aExportCount">المطابق: ${forms.length}</div>
        <button type="button" class="btn btn-sm btn-outline" id="aExportReset">↺ إلغاء الفلاتر</button>
      </div>
      <div class="report-export-actions">
        <button class="btn btn-primary btn-sm" id="aBtnPdf">📄 PDF الاستمارات</button>
        <button class="btn btn-outline btn-sm" id="aBtnPdfList">📋 PDF كشف</button>
        <button class="btn btn-outline btn-sm" data-action="exportAll">📊 Excel</button>
        <button class="btn btn-outline btn-sm" id="aBtnDoc">📝 Word</button>
      </div>
      <span class="sub">يمكن اختيار الموجّه، المدرسة، الشهر، المدرس، أو الجمع بينها. التصدير يشمل المطابق فقط.</span>
    </div>
    <div id="aFormsTable"></div>
  </div>`;
}
function adminFormsTableHTML(list){
  if(list.length===0) return `<div class="empty-state"><div class="ic">📭</div>لا توجد استمارات مطابقة</div>`;
  return `<div class="table-wrap"><table>
    <thead><tr><th>المدرسة</th><th>المدرّس</th><th>المادة</th><th>الموجّه</th><th>التاريخ</th><th>النتيجة</th><th>إجراءات</th></tr></thead>
    <tbody>${list.map(f=>`
      <tr>
        <td>${escapeHtml(f.schoolName||"—")} ${genderTag(f.schoolGender)}</td>
        <td>${escapeHtml(f.teacherName||"—")}</td>
        <td>${escapeHtml(f.subject||"—")}</td>
        <td>${escapeHtml(f.createdByName||"—")}</td>
        <td>${fmtDateShort(f.date)}</td>
        <td>${scoreBadge(f)}</td>
        <td style="white-space:nowrap;">
          <button class="btn btn-sm btn-outline" data-act="open" data-id="${f.id}">فتح</button>
          <button class="btn btn-sm btn-danger" data-act="del" data-id="${f.id}">حذف</button>
        </td>
      </tr>`).join("")}
    </tbody></table></div>`;
}
function wireAdminForms(){
  const all = ()=> Store.forms();
  const apply = ()=>{
    const q = document.getElementById("aSearch").value.trim();
    const g = document.getElementById("aGenderFilter").value;
    let list = all();
    if(q) list = list.filter(f=> [f.schoolName,f.teacherName,f.createdByName].some(v=>(v||"").includes(q)));
    if(g) list = list.filter(f=> f.schoolGender===g);
    document.getElementById("aFormsTable").innerHTML = adminFormsTableHTML(list);
    wireActions();
  };
  function wireActions(){
    document.querySelectorAll('[data-act="open"]').forEach(b=> b.addEventListener("click", ()=> navigate("formEditor",{formId:b.dataset.id})));
    document.querySelectorAll('[data-act="del"]').forEach(b=> b.addEventListener("click", ()=> confirmDialog("حذف الاستمارة", "سيتم حذف الاستمارة من الجهاز وتثبيت حذف ملفها من Google Drive والقاعدة المركزية بالخلفية. متابعة؟", async ()=>{
      const id=b.dataset.id;
      try{
        Store.deleteForm(id);
        queueCentralDelete("delete",[id]);
        apply();
        toast("تم حذف الاستمارة من الجهاز — جارٍ تثبيت الحذف مركزياً");
        flushPendingCentralDeletes(true);
      }catch(e){ toast("تعذّر حذف الاستمارة: "+(e.message||"خطأ"),true); }
    })));
  }
  apply();
  document.getElementById("aSearch").addEventListener("input", apply);
  document.getElementById("aGenderFilter").addEventListener("change", apply);
  const exportFiltered=()=>{
    let list=all();
    const sup=document.getElementById("aExportSupervisor").value;
    if(sup) list=list.filter(f=>String(f.createdBy)===String(sup));
    const sch=document.getElementById("aExportSchool").value;
    if(sch){
      const schoolName=(SCHOOLS.find(s=>String(s.id)===String(sch))||{}).name||"";
      list=list.filter(f=>String(f.schoolId)===String(sch)||String(f.schoolName||"")===String(schoolName));
    }
    const month=document.getElementById("aExportMonth").value;
    if(month) list=list.filter(f=>String(f.date||"").slice(0,7)===month);
    const teacher=document.getElementById("aExportTeacher").value;
    if(teacher) list=list.filter(f=>String(f.teacherName||"")===String(teacher));
    return list;
  };
  const updateAdminExportTeachers=()=>{
    const school=document.getElementById("aExportSchool").value;
    const el=document.getElementById("aExportTeacher");
    const current=el.value;
    let list=all();
    if(school){
      const s=SCHOOLS.find(x=>String(x.id)===String(school));
      list=list.filter(f=>String(f.schoolId)===String(school)||String(f.schoolName||"")===String(s?.name||""));
    }
    const teachers=Array.from(new Set(list.map(f=>(f.teacherName||"").trim()).filter(Boolean))).sort((a,b)=>a.localeCompare(b,'ar'));
    el.innerHTML=`<option value="">كل المدرسين</option>${teachers.map(t=>`<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join("")}`;
    if(teachers.includes(current)) el.value=current;
  };
  const updateAdminExport=()=>{
    updateAdminExportTeachers();
    const list=exportFiltered();
    const count=document.getElementById("aExportCount"); if(count) count.textContent=`المطابق: ${list.length}`;
  };
  ["aExportSupervisor","aExportSchool","aExportMonth","aExportTeacher"].forEach(id=>document.getElementById(id).addEventListener("change",updateAdminExport));
  document.getElementById("aExportReset").addEventListener("click",()=>{
    ["aExportSupervisor","aExportSchool","aExportMonth","aExportTeacher"].forEach(id=>document.getElementById(id).value="");
    updateAdminExport();
  });
  document.querySelector('[data-action="exportAll"]').addEventListener("click", ()=> exportListExcel(exportFiltered(), "استمارات_محددة", "الاستمارات", true));
  document.getElementById("aBtnPdf").addEventListener("click", ()=>{
    const list=exportFiltered();
    const school=document.getElementById("aExportSchool").value, month=document.getElementById("aExportMonth").value, teacher=document.getElementById("aExportTeacher").value;
    const parts=["استمارات_تقييم"];
    if(school) parts.push((SCHOOLS.find(s=>String(s.id)===String(school))||{}).name||"مدرسة");
    if(month) parts.push(exportFilterMonthLabel(month));
    if(teacher) parts.push(teacher);
    exportFormsPDF(list,parts.join("_"));
  });
  document.getElementById("aBtnPdfList").addEventListener("click", ()=> exportListPDF(exportFiltered(), "كشف_استمارات_محددة", "كشف استمارات التقييم المحددة", true));
  document.getElementById("aBtnDoc").addEventListener("click", ()=> exportListWord(exportFiltered(), "استمارات_محددة", "استمارات التقييم المحددة", true));
  updateAdminExport();
}

/* ---------------- لوحة المدير: إدارة المستخدمين ---------------- */
function renderAdminUsers(){
  return `
  <div class="card">
    <div class="row-between">
      <div><h2>إدارة المستخدمين</h2><div class="sub">إدارة الموجّهين والمديرين وحسابات المدارس من خلال بطاقات واضحة ومناسبة للجوال.</div></div>
      <button class="btn btn-gold" data-action="addUser"><span>➕</span> إضافة مستخدم</button>
    </div>
    <div class="search-bar"><input type="text" id="usrSearch" placeholder="ابحث بالاسم أو اسم المستخدم أو التخصص أو المدرسة…"></div>
    <div id="usersTable"></div>
  </div>`;
}
function usersTableHTML(list){
  if(!list.length) return `<div class="empty-state"><div class="ic">👤</div>لا توجد حسابات مطابقة.</div>`;
  return `<div class="admin-card-grid">${list.map(u=>{
    const school=u.schoolId?SCHOOLS.find(s=>String(s.id)===String(u.schoolId)):null;
    const roleLabel=u.role==="admin"?"مدير":u.role==="school"?"حساب مدرسة":"موجّه";
    return `<div class="admin-entity-card">
      <div class="aec-head">
        <div class="aec-avatar">${escapeHtml((u.name||u.username||"؟").trim().slice(0,1))}</div>
        <div class="aec-title"><strong>${escapeHtml(u.name||"بدون اسم")}</strong><span dir="ltr">${escapeHtml(u.username||"")}</span></div>
        <span class="tag ${u.role==='admin'?'tag-admin':'tag-user'}">${roleLabel}</span>
      </div>
      <div class="aec-info">
        <div><span>التخصص</span><b>${escapeHtml(u.specialty||"—")}</b></div>
        <div><span>المدرسة</span><b>${escapeHtml(school?.name||"—")}</b></div>
      </div>
      <div class="aec-actions">
        <button class="btn btn-sm btn-outline" data-act="edit" data-id="${u.id}">✏️ تعديل</button>
        <button class="btn btn-sm btn-outline" data-act="pw" data-id="${u.id}">🔑 كلمة المرور</button>
        ${u.role!=='admin'?`<button class="btn btn-sm btn-danger" data-act="del" data-id="${u.id}">🗑️ حذف</button>`:""}
      </div>
    </div>`;
  }).join("")}</div>`;
}
function wireAdminUsers(){
  let cachedUsers=Store.users();
  const all = ()=> cachedUsers.length ? cachedUsers : Store.users();
  const apply = ()=>{
    const q = document.getElementById("usrSearch").value.trim();
    let list = all();
    if(q) list = list.filter(u=> [u.name,u.username,u.specialty].some(v=>(v||"").includes(q)));
    document.getElementById("usersTable").innerHTML = usersTableHTML(list);
    wireActions();
  };
  function wireActions(){
    document.querySelectorAll('[data-act="edit"]').forEach(b=> b.addEventListener("click", ()=> openEditUserModal(b.dataset.id)));
    document.querySelectorAll('[data-act="pw"]').forEach(b=> b.addEventListener("click", ()=> openChangePasswordModal(b.dataset.id, false)));
    document.querySelectorAll('[data-act="del"]').forEach(b=> b.addEventListener("click", ()=>{
      const u = all().find(x=>String(x.id)===String(b.dataset.id));
      if(!u) return;
      confirmDialog("حذف المستخدم", `سيتم تعطيل حساب "${u.name}" مركزياً، ولن تُحذف استماراته السابقة. متابعة؟`, async ()=>{
        try{
          const result=await CentralUsers.delete(u.id);
          if(!result) throw new Error("لا يوجد اتصال بالقاعدة المركزية");
          cachedUsers=cachedUsers.filter(x=>String(x.id)!==String(u.id));
          Store.saveUsers(Store.users().filter(x=>String(x.id)!==String(u.id)));
          toast("تم تعطيل المستخدم مركزياً"); apply();
        }catch(e){ toast("تعذّر حذف المستخدم: "+(e.message||"خطأ"),true); }
      });
    }));
  }
  apply();
  document.getElementById("usrSearch").addEventListener("input", apply);
  document.querySelector('[data-action="addUser"]').addEventListener("click", ()=> openEditUserModal(null));
  // جلب القائمة المركزية عند فتح الصفحة، ثم تحديث النسخة المحلية.
  if(navigator.onLine){
    CentralUsers.list().then(r=>{ if(r && Array.isArray(r.users)){
      const existing=Store.users();
      cachedUsers=r.users.map(u=>{ const c=existing.find(x=>x.username===u.username); return c&&c.passwordHash ? {...u,passwordHash:c.passwordHash,passwordSalt:c.passwordSalt} : u; });
      Store.saveUsers(cachedUsers); apply();
    }}).catch(e=>console.error("central users list:",e));
  }
}

/* =========================================================
   النوافذ المنبثقة (Modals)
   ========================================================= */

function closeModal(){ document.getElementById("modalRoot").innerHTML = ""; }

function confirmDialog(title, msg, onOk, okLabel, okClass){
  okLabel = okLabel || "تأكيد الحذف";
  okClass = okClass || "btn-danger";
  document.getElementById("modalRoot").innerHTML = `
  <div class="modal-bg" id="mBg">
    <div class="modal">
      <h3>${escapeHtml(title)}</h3>
      <p style="color:#5c6a61;font-size:13.5px;line-height:1.8;">${escapeHtml(msg)}</p>
      <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:16px;">
        <button class="btn btn-outline" id="mCancel">إلغاء</button>
        <button class="btn ${escapeHtml(okClass)}" id="mOk">${escapeHtml(okLabel)}</button>
      </div>
    </div>
  </div>`;
  document.getElementById("mCancel").addEventListener("click", closeModal);
  document.getElementById("mBg").addEventListener("click", (e)=>{ if(e.target.id==="mBg") closeModal(); });
  document.getElementById("mOk").addEventListener("click", async ()=>{ closeModal(); onOk(); });
}

function openChangePasswordModal(userId, isSelf, forced){
  const u = Store.users().find(x=>String(x.id)===String(userId));
  if(!u) return;
  document.getElementById("modalRoot").innerHTML = `
  <div class="modal-bg" id="mBg">
    <div class="modal">
      <h3>${forced? "الرجاء تعيين كلمة مرور جديدة" : "تغيير كلمة المرور"} — ${escapeHtml(u.name)}</h3>
      ${forced? `<p style="color:#a3372c;font-size:12.5px;">لأسباب أمنية، يجب تغيير كلمة المرور الافتراضية قبل المتابعة.</p>`:""}
      <div class="field"><label>كلمة المرور الجديدة</label><input type="password" id="newPw" placeholder="أدخل كلمة مرور جديدة"></div>
      <div class="field"><label>تأكيد كلمة المرور</label><input type="password" id="newPw2" placeholder="أعد كتابة كلمة المرور"></div>
      <div id="pwErr" class="login-err hide"></div>
      <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:6px;">
        ${!forced?`<button class="btn btn-outline" id="mCancel">إلغاء</button>`:""}
        <button class="btn btn-primary" id="mOk">حفظ كلمة المرور</button>
      </div>
    </div>
  </div>`;
  if(!forced) document.getElementById("mCancel").addEventListener("click", closeModal);
  document.getElementById("mOk").addEventListener("click", async ()=>{
    const p1 = document.getElementById("newPw").value;
    const p2 = document.getElementById("newPw2").value;
    const err = document.getElementById("pwErr");
    if(p1.length<4){ err.textContent="يجب ألا تقل كلمة المرور عن 4 أحرف"; err.classList.remove("hide"); return; }
    if(p1.length < 8){ err.textContent="كلمة المرور يجب أن تكون 8 محارف على الأقل"; err.classList.remove("hide"); return; }
    if(p1!==p2){ err.textContent="كلمتا المرور غير متطابقتين"; err.classList.remove("hide"); return; }
    const hp=await hashPassword(p1, u.passwordSalt || undefined);
    try{
      if(!navigator.onLine || !CentralUsers.isConfigured()) throw new Error("يجب الاتصال بالإنترنت لتغيير كلمة المرور مركزياً");
      const result=await CentralUsers.changePassword(u.id,hp.hash,hp.salt);
      if(!result) throw new Error("لا يوجد اتصال بالقاعدة المركزية");
      Store.updateUser(u.id, {passwordHash:hp.hash, passwordSalt:hp.salt, password:undefined, mustChangePassword:false});
      const sess=Store.session();
      if(sess && String(sess.id)===String(u.id)) Store.setSession({...sess});
      closeModal();
      toast("تم تحديث كلمة المرور مركزياً بنجاح");
    }catch(e){ toast("تعذّر تحديث كلمة المرور: "+(e.message||"خطأ"),true); }
  });
}

function openEditUserModal(userId){
  const isNew = userId===null;
  const u = isNew? {name:"",username:"",specialty:"",role:"user"} : Store.users().find(x=>String(x.id)===String(userId));
  document.getElementById("modalRoot").innerHTML = `
  <div class="modal-bg" id="mBg">
    <div class="modal">
      <h3>${isNew? "إضافة مستخدم جديد" : "تعديل بيانات المستخدم"}</h3>
      <div class="field"><label>الاسم الثلاثي</label><input type="text" id="fName" value="${escapeHtml(u.name)}"></div>
      <div class="grid-2">
        <div class="field"><label>اسم المستخدم</label><input type="text" id="fUser" dir="ltr" value="${escapeHtml(u.username)}" ${!isNew?'':''}></div>
        <div class="field"><label>التخصص</label><input type="text" id="fSpec" value="${escapeHtml(u.specialty||"")}"></div>
      </div>
      ${isNew? `<div class="field"><label>كلمة المرور المبدئية</label><input type="password" id="fPass" value=""></div>`:""}
      <div class="field"><label>المدرسة المرتبطة بالحساب (لحساب المدرسة)</label>
        <select id="fSchoolId"><option value="">— لا يوجد —</option>${SCHOOLS.map(s=>`<option value="${escapeHtml(String(s.id))}" ${String(u.schoolId||"")===String(s.id)?"selected":""}>${escapeHtml(s.name)}</option>`).join("")}</select>
      </div>
      <div class="field"><label>الصلاحية</label>
        <select id="fRole">
          <option value="user" ${u.role==='user'?'selected':''}>موجّه (مستخدم)</option>
          <option value="school" ${u.role==='school'?'selected':''}>حساب مدرسة</option>
          <option value="admin" ${u.role==='admin'?'selected':''}>مدير</option>
        </select>
      </div>
      <div id="uErr" class="login-err hide"></div>
      <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:6px;">
        <button class="btn btn-outline" id="mCancel">إلغاء</button>
        <button class="btn btn-primary" id="mOk">${isNew?"إضافة المستخدم":"حفظ التعديلات"}</button>
      </div>
    </div>
  </div>`;
  document.getElementById("mCancel").addEventListener("click", closeModal);
  document.getElementById("mBg").addEventListener("click", (e)=>{ if(e.target.id==="mBg") closeModal(); });
  document.getElementById("mOk").addEventListener("click", async ()=>{
    const name = document.getElementById("fName").value.trim();
    const username = document.getElementById("fUser").value.trim();
    const specialty = document.getElementById("fSpec").value.trim();
    const role = document.getElementById("fRole").value;
    const schoolId = document.getElementById("fSchoolId").value || "";
    const err = document.getElementById("uErr");
    if(!name || !username){ err.textContent="الرجاء إدخال الاسم واسم المستخدم"; err.classList.remove("hide"); return; }
    const dup = Store.users().find(x=> x.username===username && (isNew || String(x.id)!==String(userId)));
    if(dup){ err.textContent="اسم المستخدم هذا مستخدم بالفعل"; err.classList.remove("hide"); return; }
    try{
      if(isNew){
        const pass = document.getElementById("fPass").value;
        if(pass.length < 8){ err.textContent="كلمة المرور يجب أن تكون 8 محارف على الأقل"; err.classList.remove("hide"); return; }
        const hp=await hashPassword(pass);
        const result=await CentralUsers.upsert({username, passwordHash:hp.hash, passwordSalt:hp.salt, name, specialty, role, schoolId, mustChangePassword:true});
        if(!result || !result.user) throw new Error("تعذّرت إضافة المستخدم إلى القاعدة المركزية");
        Store.addUser({...result.user, passwordHash:hp.hash, passwordSalt:hp.salt});
        toast("تمت إضافة المستخدم مركزياً بنجاح");
      } else {
        const current=Store.users().find(x=>String(x.id)===String(userId));
        const result=await CentralUsers.upsert({id:userId, username, name, specialty, role, schoolId, active:true, mustChangePassword:current?current.mustChangePassword:false});
        if(!result || !result.user) throw new Error("تعذّر حفظ التعديلات في القاعدة المركزية");
        const cached=Store.users().find(x=>String(x.id)===String(userId));
        Store.updateUser(userId, {...result.user, passwordHash:cached&&cached.passwordHash, passwordSalt:cached&&cached.passwordSalt});
        toast("تم حفظ التعديلات مركزياً");
      }
      closeModal();
      renderApp();
    }catch(e){ err.textContent=e.message||"تعذّرت العملية"; err.classList.remove("hide"); }
  });
}
/* =========================================================
   محرر الاستمارة: إنشاء / تعديل + جدول البنود + حفظ + تصدير
   ========================================================= */

function blankForm(user){
  const today = new Date().toISOString().slice(0,10);
  return {
    id:null, createdBy:user.username, createdByName:user.name,
    committeeNo:"", date:today, schoolId:"", schoolName:"", schoolGender:"",
    studyYear:"", semester:"", teacherName:"", scientificSupervisor:"",
    subject:user.specialty||"", specialty:user.specialty||"", studentsCount:"", grade:"", section:"",
    topic:"", teachingExperience:"", jobStatus:"",
    scores:{}, notes:{notes_1:"",notes_2:"",notes_3:""}, attachments:[],
    signSchool:user.name, signSupervisor:user.name, signDept:"محمد محمود السيد", signHead:"د. عبد الله لبابيدي",
    createdAt:new Date().toISOString(), updatedAt:new Date().toISOString()
  };
}

function toEnglishDigits(v){ return String(v).replace(/[٠-٩۰-۹]/g,d=>{ const a="٠١٢٣٤٥٦٧٨٩".indexOf(d); return a>=0?String(a):String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)); }); }
function optionList(values, selected){
  return values.map(v=>`<option value="${escapeHtml(String(v))}" ${String(selected||"")===String(v)?"selected":""}>${escapeHtml(toEnglishDigits(v))}</option>`).join("");
}
function editorFieldsHTML(f){
  const semesterOptions = ["الفصل الأول","الفصل الثاني"];
  const gradeOptions = ["السابع","الثامن","التاسع","الأول الثانوي الأدبي","الأول الثانوي العلمي","الثاني الثانوي الأدبي","الثاني الثانوي العلمي","الثالث الثانوي الأدبي","الثالث الثانوي العلمي"];
  const studentOptions = Array.from({length:39},(_,i)=>i+12);
  const experienceOptions = Array.from({length:35},(_,i)=>i+1);
  return `
    <div class="grid-3">
      <div class="field"><label>رقم اللائحة</label><input type="text" id="f_committeeNo" value="${escapeHtml(f.committeeNo)}"></div>
      <div class="field"><label>التاريخ *</label><input type="date" lang="en-GB" id="f_date" value="${escapeHtml(f.date)}" required></div>
      <div class="field"><label>الحصة *</label><input type="text" id="f_studyYear" value="${escapeHtml(f.studyYear || "2025 / 2026")}" required></div>
    </div>
    <div class="grid-3">
      <div class="field"><label>الفصل الدراسي *</label><select id="f_semester" required><option value="">— اختر الفصل —</option>${optionList(semesterOptions,f.semester)}</select></div>
      <div class="field"><label>المدرس *</label><input type="text" id="f_teacherName" value="${escapeHtml(f.teacherName)}" required></div>
      <div class="field"><label>المؤهل العلمي *</label><input type="text" id="f_scientificSupervisor" value="${escapeHtml(f.scientificSupervisor)}" required></div>
    </div>
    <div class="grid-3">
      <div class="field"><label>المادة *</label><input type="text" id="f_subject" value="${escapeHtml(f.subject)}" required></div>
      <div class="field"><label>الاختصاص *</label><input type="text" id="f_specialty" value="${escapeHtml(f.specialty)}" required></div>
      <div class="field"><label>عدد الطلاب *</label><select id="f_studentsCount" required><option value="">— اختر العدد —</option>${optionList(studentOptions,f.studentsCount)}</select></div>
    </div>
    <div class="grid-3">
      <div class="field"><label>الصف *</label><select id="f_grade" required><option value="">— اختر الصف —</option>${optionList(gradeOptions,f.grade)}</select></div>
      <div class="field"><label>الشعبة *</label><input type="text" id="f_section" value="${escapeHtml(f.section)}" required></div>
      <div class="field"><label>الموضوع *</label><input type="text" id="f_topic" value="${escapeHtml(f.topic)}" required></div>
    </div>
    <div class="grid-3">
      <div class="field"><label>القدم في التعليم *</label><select id="f_teachingExperience" required><option value="">— اختر سنوات الخبرة —</option>${experienceOptions.map(v=>`<option value="${v} سنة" ${String(f.teachingExperience)===(v+" سنة")||String(f.teachingExperience)===String(v)?"selected":""}>${toEnglishDigits(v)} سنة</option>`).join("")}</select></div>
      <div class="field"><label>الوضع الوظيفي *</label><input type="text" id="f_jobStatus" value="${escapeHtml(f.jobStatus)}" required></div>
      <div></div>
    </div>`;
}
function editorTableHTML(f){
  const nspans = notesSpans(); const notesAt={}; nspans.forEach(sp=>notesAt[sp.start]=sp);
  const scores = f.scores||{};
  // تجميع البنود حسب المجال بنفس ترتيبها الأصلي
  const domainGroups = [];
  CRITERIA.forEach(c=>{
    let g = domainGroups[domainGroups.length-1];
    if(!g || g.domain!==c.domain){ g = {domain:c.domain, items:[]}; domainGroups.push(g); }
    g.items.push(c);
  });
  const domainsHTML = domainGroups.map(g=>{
    const itemsHTML = g.items.map(c=>{
      const val = scores[c.id]!==undefined? scores[c.id] : "";
      const chips = [`<button type="button" class="score-chip ${val===""?"active":""}" data-v="">—</button>`]
        .concat(Array.from({length:c.max+1},(_,n)=>
          `<button type="button" class="score-chip ${String(val)===String(n)?"active":""}" data-v="${n}">${toEnglishDigits(n)}</button>`
        )).join("");
      const options = `<option value="">—</option>` + Array.from({length:c.max+1},(_,n)=>
        `<option value="${n}" ${String(val)===String(n)?"selected":""}>${toEnglishDigits(n)}</option>`
      ).join("");
      return `<div class="score-item" data-id="${c.id}">
        <div class="score-item-row">
          <span class="score-item-no">${c.id}</span>
          <div class="score-item-text">${escapeHtml(c.text)}</div>
        </div>
        <div class="score-item-ctrl">
          <span class="score-item-max">من ${toEnglishDigits(c.max)}</span>
          <div class="score-chip-group">${chips}</div>
          <select class="score-input" data-id="${c.id}" data-max="${c.max}" style="display:none">${options}</select>
        </div>
      </div>`;
    }).join("");
    return `<div class="score-domain">
      <div class="score-domain-head">${escapeHtml(g.domain)}</div>
      <div>${itemsHTML}</div>
    </div>`;
  }).join("");
  const notesHTML = [1,2,3].map(g=>{
    const key = "notes_"+g;
    return `<div class="score-notes-item">
      <label>${NOTES_LABELS[g]}</label>
      <textarea class="notes-input" data-key="${key}">${escapeHtml(f.notes&&f.notes[key]||"")}</textarea>
    </div>`;
  }).join("");
  return `<div class="score-cards">${domainsHTML}</div>
    <div class="score-notes">${notesHTML}</div>`;
}

function mountFormEditor(container, formId){
  const user = currentUser();
  const isAdmin = user.role==="admin";
  const draftId = App.params.draftId || null;
  const draft = draftId ? Store.getDraft(draftId) : null;
  const existing = formId ? Store.getForm(formId) : null;
  const canEdit = !existing || isAdmin || existing.createdBy===user.username;
  let f = existing ? JSON.parse(JSON.stringify(existing)) : (draft ? JSON.parse(JSON.stringify(draft)) : blankForm(user));
  let pendingFiles = [];
  let currentDraftId = draft ? draft.id : null;

  const genderBtn = (g,label)=> `<button type="button" class="gtbtn ${f.schoolGender===g?'active':''}" data-g="${g}">${label}</button>`;

  container.innerHTML = `
    <div class="card">
      <div class="row-between">
        <div>
          <h2>${existing? "تعديل الاستمارة" : (draft ? "متابعة المسودة" : "استمارة تقييم أداء مدرّس جديدة")}</h2>
          <div class="sub">${existing? ("أُنشئت بواسطة " + escapeHtml(existing.createdByName) + " — " + fmtDate(existing.createdAt)) : (draft ? "هذه مسودة محفوظة — يمكنك إكمالها الآن أو لاحقاً" : "الحقول المؤشّرة تُستخدم في التصدير والطباعة بنفس شكل الاستمارة الرسمية")}</div>
        </div>
        <div class="toolbar-actions">
          <button class="btn btn-outline btn-sm" id="btnBack">↩ رجوع</button>
          <button class="btn btn-outline btn-sm" id="btnPrint">🖨️ طباعة</button>
          <button class="btn btn-outline btn-sm" id="btnPdf">📄 PDF</button>
          <button class="btn btn-outline btn-sm" id="btnSharePdf">📤 مشاركة PDF</button>
          <button class="btn btn-outline btn-sm" id="btnXls">📊 Excel</button>
          <button class="btn btn-outline btn-sm" id="btnDoc">📝 Word</button>
          ${existing && canEdit? `<button class="btn btn-danger btn-sm" id="btnDel">🗑 حذف</button>`:""}
        </div>
      </div>

      <div class="card" style="background:var(--green-50);border-style:dashed;">
        <div class="row-between" style="margin-bottom:8px;">
          <b style="font-size:13.5px;color:var(--green-900);">المؤسسة التعليمية الشرعية</b>
        </div>
        <div class="gender-toggle">
          ${genderBtn("", "كل المدارس")}
          ${genderBtn("boys", "🏫 مدارس البنين")}
          ${genderBtn("girls", "🏫 مدارس البنات")}
        </div>
        <select id="f_schoolSelect" ${canEdit?'':'disabled'} required>
          <option value="">— اختر الثانوية —</option>
          ${SCHOOLS.map(s=>`<option value="${s.id}" data-gender="${s.gender}" title="${escapeHtml(s.name)}" ${String(f.schoolId)===String(s.id)?'selected':''}>${escapeHtml(s.name)}</option>`).join("")}
          <option value="other" ${f.schoolId==='other'?'selected':''}>أخرى (إدخال يدوي)</option>
        </select>
        <div id="otherSchoolWrap" class="field ${f.schoolId==='other'?'':'hide'}" style="margin-top:10px;">
          <label>اسم المدرسة يدوياً *</label>
          <input type="text" id="f_schoolOther" value="${f.schoolId==='other'?escapeHtml(f.schoolName):''}">
        </div>
      </div>

      <div style="margin-top:14px;">${editorFieldsHTML(f)}</div>

      <h2 style="margin-top:18px;font-size:16px;">بنود لائحة التقييم</h2>
      <div class="sub">أدخل الدرجة الفعلية لكل بند (لا تتجاوز الدرجة المستحقة)</div>
      ${isAdmin && existing? `<div class="sub" style="color:var(--danger);font-weight:700;">🔒 الدرجات مقفلة في حساب المدير — يمكن تعديل المعلومات الأساسية فقط دون الدرجات</div>`:""}
      ${editorTableHTML(f)}

      <div class="row-between" style="margin-top:16px;flex-wrap:wrap;gap:14px;">
        <div class="sub" style="font-size:11px;max-width:520px;">سلم التقدير: ممتاز 90–100 · جيد جداً 80–89 · جيد 70–79 · مقبول 50–69 · ضعيف أقل من 50</div>
        <div class="pill-stat" style="min-width:190px;text-align:center;">
          <b id="totalDisplay">0 / ${MAX_TOTAL}</b>
          <span id="ratingDisplay">—</span>
        </div>
      </div>

      <div class="card attachment-card" style="margin-top:18px;background:#fbf8f1;">
        <div class="row-between">
          <div><h2 style="font-size:15px;margin:0;">الملفات والصور والفيديو</h2>
          <div class="sub" style="margin:3px 0 8px;">يمكن إرفاق ملفات داعمة؛ عند إعداد Google Drive سيتم رفعها إلى مجلد التطبيق نفسه.</div></div>
          <label class="btn btn-outline" style="cursor:pointer;">📎 إضافة ملفات
            <input type="file" id="f_attachments" multiple accept="image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx" style="display:none;">
          </label>
        </div>
        <div id="attachmentsList" class="attachments-list"></div>
      </div>

      <h2 style="margin-top:18px;font-size:15px;">التوقيعات</h2>
      <div class="grid-2">
        <div class="field"><label>المدرس/ة *</label><input type="text" id="f_signSchool" value="${escapeHtml(f.teacherName||f.signSchool)}" readonly required></div>
        <div class="field"><label>الموجّه الاختصاصي *</label><input type="text" id="f_signSupervisor" value="${escapeHtml(f.signSupervisor)}" ${isAdmin?'':'readonly'} required></div>
        <div class="field"><label>شعبة التوجيه الاختصاصي *</label><input type="text" id="f_signDept" value="${escapeHtml(f.signDept||"محمد محمود السيد")}" ${isAdmin?"":"readonly"} required></div>
        <div class="field"><label>رئيس دائرة التعليم الشرعي *</label><input type="text" id="f_signHead" value="${escapeHtml(f.signHead||"د. عبد الله لبابيدي")}" ${isAdmin?"":"readonly"} required></div>
      </div>

      ${canEdit? `<div class="form-submit-actions" style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px;">
        ${!existing? `<button type="button" class="btn btn-outline" id="btnDraft" style="flex:1;min-width:180px;justify-content:center;">📝 حفظ كمسودة</button>` : ""}
        <button type="button" class="btn btn-primary" id="btnSave" style="flex:2;min-width:220px;justify-content:center;">📤 إرسال الاستمارة</button>
      </div>` :
        `<div class="login-err">لا تملك صلاحية تعديل هذه الاستمارة (تعود لموجّه آخر) — يمكنك المعاينة والطباعة والتصدير فقط.</div>`}
    </div>
  `;

  /* ---- ربط الأحداث ---- */
  function recalc(){
    const scores={};
    container.querySelectorAll(".score-input").forEach(inp=>{
      const max = Number(inp.dataset.max);
      let v = inp.value === "" ? "" : Math.max(0, Math.min(max, Number(inp.value)));
      if(v !== "" && String(v) !== inp.value) inp.value = v;
      if(v !== "") scores[inp.dataset.id] = v;
    });
    const total = CRITERIA.reduce((s,c)=> s + (Number(scores[c.id])||0), 0);
    const r = ratingOf(total);
    document.getElementById("totalDisplay").textContent = total + " / " + MAX_TOTAL;
    const rd = document.getElementById("ratingDisplay");
    rd.textContent = r.label; rd.className = r.cls; rd.style.fontWeight="800";
    return scores;
  }
  // مزامنة اسم المدرس مع خانة التوقيع بشكل مباشر، وعدم استخدام اسم الموجّه فيها.
  const teacherInput = document.getElementById("f_teacherName");
  const signTeacherInput = document.getElementById("f_signSchool");
  function syncTeacherSignature(){
    if(teacherInput && signTeacherInput) signTeacherInput.value = teacherInput.value.trim();
  }
  if(teacherInput && signTeacherInput){
    syncTeacherSignature();
    teacherInput.addEventListener("input", syncTeacherSignature);
    teacherInput.addEventListener("change", syncTeacherSignature);
  }

  recalc();
  container.querySelectorAll(".score-input").forEach(inp=> inp.addEventListener("input", recalc));

  // في حساب المدير: تُقفل درجات الاستمارات الموجودة مسبقاً (يمكن تعديل المعلومات الأساسية فقط)
  const lockScores = isAdmin && !!existing;
  if(lockScores){
    container.querySelectorAll(".score-chip").forEach(b=>{ b.disabled = true; });
    container.querySelectorAll(".score-input").forEach(s=>{ s.disabled = true; });
  }

  container.querySelectorAll("[data-g]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      f.schoolGender = btn.dataset.g;
      container.querySelectorAll("[data-g]").forEach(b=> b.classList.toggle("active", b===btn));
      const sel = document.getElementById("f_schoolSelect");
      Array.from(sel.options).forEach(opt=>{
        if(opt.value==="" || opt.value==="other"){ opt.hidden=false; return; }
        opt.hidden = btn.dataset.g && opt.dataset.gender !== btn.dataset.g;
      });
      if(sel.selectedOptions[0] && sel.selectedOptions[0].hidden) sel.value="";
    });
  });

  const schoolSel = document.getElementById("f_schoolSelect");
  // موقع المدرسة موجود في صفحة "مواقع المدارس" المستقلة فقط، ولا يظهر داخل الاستمارة.
  schoolSel.addEventListener("change", ()=>{
    const otherWrap = document.getElementById("otherSchoolWrap");
    if(schoolSel.value==="other"){ otherWrap.classList.remove("hide"); }
    else { otherWrap.classList.add("hide"); }
  });

  function renderAttachments(){
    const box=document.getElementById("attachmentsList");
    const existingAttachments=f.attachments||[];
    const items=[...existingAttachments.map((a,i)=>({name:a.name,url:a.url||"",existing:true,index:i})),...pendingFiles.map((file,i)=>({name:file.name,url:"",existing:false,index:i}))];
    box.innerHTML=items.length?items.map((a,i)=>`<div class="attachment-item"><span>📄 ${escapeHtml(a.name)}</span>${a.url?`<a href="${escapeHtml(a.url)}" target="_blank" rel="noopener">فتح</a>`:"<small>سيُرفع عند الحفظ</small>"}</div>`).join(""):`<span class="sub">لم تتم إضافة ملفات بعد.</span>`;
  }
  renderAttachments();
  document.getElementById("f_attachments").addEventListener("change",e=>{
    pendingFiles=[...pendingFiles,...Array.from(e.target.files||[])];
    renderAttachments();
    e.target.value="";
  });

  function collectForm(){
    const val = id => { const el=document.getElementById(id); return el? el.value.trim(): ""; };
    const scores = recalc();
    const notes = {notes_1:"",notes_2:"",notes_3:""};
    container.querySelectorAll(".notes-input").forEach(t=> notes[t.dataset.key]=t.value);
    let schoolName="", schoolGender=f.schoolGender||"", schoolId=schoolSel.value;
    if(schoolSel.value==="other"){ schoolName = val("f_schoolOther"); }
    else if(schoolSel.value){
      const s = SCHOOLS.find(x=>String(x.id)===schoolSel.value);
      if(s){ schoolName=s.name; schoolGender=s.gender; }
    }
    return {
      ...f,
      committeeNo:val("f_committeeNo"), date:val("f_date"), studyYear:val("f_studyYear"),
      semester:val("f_semester"), teacherName:val("f_teacherName"), scientificSupervisor:val("f_scientificSupervisor"),
      subject:val("f_subject"), specialty:val("f_specialty"), studentsCount:val("f_studentsCount"),
      grade:val("f_grade"), section:val("f_section"), topic:val("f_topic"),
      teachingExperience:val("f_teachingExperience"), jobStatus:val("f_jobStatus"),
      schoolId, schoolName, schoolGender, scores, notes,
      signSchool:val("f_teacherName"), signSupervisor:val("f_signSupervisor"), signDept:val("f_signDept")||"محمد محمود السيد", signHead:val("f_signHead")||"د. عبد الله لبابيدي",
      createdBy: existing? existing.createdBy : user.username,
      createdByName: existing? existing.createdByName : user.name,
    };
  }

  document.getElementById("btnBack").addEventListener("click", ()=> navigate(isAdmin?"adminForms":"userHome"));
  document.getElementById("btnPrint").addEventListener("click", ()=> printForm(collectForm()));
  document.getElementById("btnPdf").addEventListener("click", ()=> exportPDF(collectForm()));
  document.getElementById("btnSharePdf").addEventListener("click", ()=> sharePDF(collectForm()));
  document.getElementById("btnXls").addEventListener("click", ()=> exportExcel(collectForm()));
  document.getElementById("btnDoc").addEventListener("click", ()=> exportWord(collectForm()));
  const delBtn = document.getElementById("btnDel");
  if(delBtn) delBtn.addEventListener("click", ()=> confirmDialog("حذف الاستمارة","سيتم حذف هذه الاستمارة من الجهاز فوراً، ثم تثبيت الحذف في القاعدة المركزية بالخلفية. متابعة؟", async ()=>{
    try{
      Store.deleteForm(existing.id);
      queueCentralDelete("delete",[existing.id]);
      toast("تم حذف الاستمارة من الجهاز — جارٍ تثبيت الحذف مركزياً"); navigate(isAdmin?"adminForms":"userHome");
      flushPendingCentralDeletes(true);
    }catch(e){ toast("تعذّر حذف الاستمارة: "+(e.message||"خطأ"),true); }
  }));
  const draftBtn=document.getElementById("btnDraft");
  if(draftBtn) draftBtn.addEventListener("click",()=>saveDraft(true, true));
  const saveBtn = document.getElementById("btnSave");
  // جميع حقول الاستمارة مطلوبة عدا رقم اللائحة
  const REQUIRED_FIELD_IDS = ["f_date","f_studyYear","f_semester","f_teacherName","f_scientificSupervisor",
    "f_subject","f_specialty","f_studentsCount","f_grade","f_section","f_topic","f_teachingExperience","f_jobStatus",
    "f_signSchool","f_signSupervisor","f_signDept","f_signHead"];
  function findMissingRequired(){
    const missing=[];
    REQUIRED_FIELD_IDS.forEach(id=>{
      const el=document.getElementById(id);
      if(el){
        const empty = !String(el.value||"").trim();
        el.style.borderColor = empty? "var(--danger)" : "";
        if(empty) missing.push(id);
      }
    });
    if(!schoolSel.value){ missing.push("f_schoolSelect"); schoolSel.style.borderColor="var(--danger)"; }
    else{
      schoolSel.style.borderColor="";
      if(schoolSel.value==="other"){
        const other=document.getElementById("f_schoolOther");
        if(!other.value.trim()){ missing.push("f_schoolOther"); other.style.borderColor="var(--danger)"; }
        else other.style.borderColor="";
      }
    }
    // بنود الدرجة المستحقة أصبحت إلزامية أيضاً: يجب اختيار درجة لكل بند من بنود اللائحة قبل الحفظ
    container.querySelectorAll(".score-item").forEach(itemEl=>{
      const sel = itemEl.querySelector("select.score-input");
      const empty = !sel || sel.value === "";
      itemEl.classList.toggle("missing", empty);
      if(empty) missing.push("score_"+itemEl.dataset.id);
    });
    return missing;
  }
  function hasDraftContent(data){
    return !!(data.teacherName || data.schoolName || data.subject || data.topic || data.scientificSupervisor || Object.keys(data.scores||{}).length || Object.values(data.notes||{}).some(v=>String(v||"").trim()));
  }
  // حفظ تلقائي ذكي: محلي فقط، ولا ينفذ إلا بعد حدوث تغيير فعلي.
  // المزامنة المركزية لا تتم مع كل حفظ تلقائي حتى لا تجمد الواجهة أو تعيد بناء PDF بلا داعٍ.
  let draftDirty = true;
  let draftTimer = null;
  let centralDraftTimer = null;
  let lastDraftSnapshot = "";

  function draftSnapshot(data){
    return JSON.stringify({
      committeeNo:data.committeeNo, date:data.date, studyYear:data.studyYear, semester:data.semester,
      teacherName:data.teacherName, scientificSupervisor:data.scientificSupervisor, subject:data.subject,
      specialty:data.specialty, studentsCount:data.studentsCount, grade:data.grade, section:data.section,
      topic:data.topic, teachingExperience:data.teachingExperience, jobStatus:data.jobStatus,
      schoolId:data.schoolId, schoolName:data.schoolName, schoolGender:data.schoolGender,
      scores:data.scores, notes:data.notes, signSchool:data.signSchool, signSupervisor:data.signSupervisor,
      signDept:data.signDept, signHead:data.signHead
    });
  }

  function markDraftDirty(){
    if(existing || !canEdit) return;
    draftDirty = true;
    scheduleDraftSave();
  }

  async function saveDraft(showToast=true, syncNow=false){
    const data=collectForm();
    if(!hasDraftContent(data)) { if(showToast) toast("لا توجد بيانات كافية لحفظ مسودة", true); return null; }
    const snap=draftSnapshot(data);
    if(!syncNow && !draftDirty && snap===lastDraftSnapshot) return Store.getDraft(currentDraftId);
    data.id=currentDraftId || undefined;
    data.recordType="draft"; data.status="draft"; data.draft=true;
    data.createdBy=data.createdBy||user.username; data.createdByName=data.createdByName||user.name;
    let saved;
    if(currentDraftId) saved=Store.updateDraft(currentDraftId,data);
    else { saved=Store.addDraft(data); currentDraftId=saved.id; }
    lastDraftSnapshot=snap;
    draftDirty=false;
    if(saved && syncNow && navigator.onLine){
      const central=await CentralSync.upsert(saved);
      if(showToast) toast(central?"تم حفظ المسودة ومزامنتها مركزياً":"تم حفظ المسودة على الجهاز");
    } else if(saved && showToast){
      toast("تم حفظ المسودة على الجهاز");
    }
    return saved;
  }

  function scheduleDraftSave(){
    if(existing || !canEdit) return;
    if(draftTimer) clearTimeout(draftTimer);
    // 15 ثانية بعد آخر تعديل، بدلاً من تنفيذ حفظ كل 5 ثوانٍ حتى دون تغيير.
    draftTimer=setTimeout(async ()=>{ await saveDraft(false, false); },15000);
  }

  // لا نربط الحفظ بكل input مباشرة؛ نستخدم حدثاً خفيفاً مع debounce.
  container.addEventListener("input", markDraftDirty, {passive:true});
  container.addEventListener("change", markDraftDirty, {passive:true});
  scheduleDraftSave();

  // مزامنة المسودة الحالية مركزياً على فترات أطول، فقط عندما يكون هناك تغيير.
  if(!existing && canEdit){
    centralDraftTimer=setInterval(async ()=>{
      if(draftDirty) await saveDraft(false, false);
      const d=currentDraftId ? Store.getDraft(currentDraftId) : null;
      if(d && navigator.onLine && !draftDirty) await CentralSync.upsert(d);
    },60000);
  }
  window.addEventListener("beforeunload",()=>{
    if(draftTimer) clearTimeout(draftTimer);
    if(centralDraftTimer) clearInterval(centralDraftTimer);
  },{once:true});

  async function doSave(){
    // إيقاف مؤقت الحفظ التلقائي حتى لا يعيد إنشاء مسودة بعد إرسال الاستمارة.
    if(draftTimer) { clearTimeout(draftTimer); draftTimer=null; }
    if(centralDraftTimer) { clearInterval(centralDraftTimer); centralDraftTimer=null; }
    const data = collectForm();
    data.status="submitted"; data.recordType="form"; data.draft=false; data.driveSynced=false; data.centralSynced=false;
    saveBtn.disabled=true; saveBtn.innerHTML='<span class="spinner"></span> جارٍ الإرسال...';
    try{
      // الحفظ المحلي أولاً: لا ننتظر الشبكة أو إنشاء PDF حتى تستجيب الواجهة.
      let saved;
      if(existing){ saved=Store.updateForm(existing.id, data); }
      else { saved=Store.addForm(data); }

      const filesToUpload = pendingFiles.slice();
      pendingFiles=[];
      const draftToDelete = currentDraftId;
      if(currentDraftId){
        Store.deleteDraft(currentDraftId);
        currentDraftId=null;
      }

      // الانتقال فوراً بعد الحفظ المحلي، ثم تنفيذ Drive + قاعدة البيانات المركزية
      // في الخلفية. هذا يلغي انتظار html2canvas ورفع الشبكة عند الضغط على حفظ.
      toast(existing ? "تم إرسال التعديلات وسيتم رفعها في الخلفية" : "تم إرسال الاستمارة — تتم المزامنة في الخلفية");
      navigate("formEditor",{formId:saved.id});

      (async()=>{
        try{
          let driveOk = null;
          if(AppsScriptSync.isConfigured() && navigator.onLine){
            // يبدأ رفع PDF في الخلفية. buildFormPdfBlob يستفيد من cache إذا
            // كان المستخدم قد فتح PDF/Word/طباعة قبل الحفظ.
            driveOk = await AppsScriptSync.sendForm(saved, true);
            Store.updateForm(saved.id, {driveSynced: !!driveOk, driveFileId:driveOk&&driveOk.id ? driveOk.id : (saved.driveFileId||"")});
          } else if(AppsScriptSync.isConfigured()){
            Store.updateForm(saved.id, {driveSynced:false});
          }

          if(filesToUpload.length && AppsScriptSync.isConfigured() && navigator.onLine){
            let uploaded=[];
            for(const file of filesToUpload){
              const info=await AppsScriptSync.uploadAttachment(saved,file);
              if(info) uploaded.push(info);
            }
            if(uploaded.length){
              const latest=Store.getForm(saved.id)||saved;
              Store.updateForm(saved.id,{attachments:[...(latest.attachments||[]),...uploaded]});
            }
          }

          const latestForCentral = Store.getForm(saved.id) || saved;
          const centralResult = await CentralSync.upsert({...latestForCentral, recordType:"form", status:"submitted", draft:false});
          if(centralResult) Store.updateForm(saved.id,{centralSynced:true});
          else Store.updateForm(saved.id,{centralSynced:false});
          if(draftToDelete) await CentralSync.delete(draftToDelete);

          if(driveOk){
            toast("تمت مزامنة الاستمارة مع Google Drive");
          } else if(AppsScriptSync.isConfigured() && !navigator.onLine){
            toast("تم حفظ الاستمارة محلياً بانتظار الإرسال — ستتم المحاولة تلقائياً عند عودة الإنترنت", true);
          }
        }catch(bgErr){
          console.error("background sync:", bgErr);
          Store.updateForm(saved.id,{driveSynced:false,centralSynced:false,status:"submitted",recordType:"form",draft:false});
          toast("تم الإرسال محلياً، وتعذرت المزامنة الآن — ستتم المحاولة تلقائياً", true);
        }
      })();

    }catch(e){
      console.error(e);
      toast("حدث خطأ أثناء الحفظ",true);
      saveBtn.disabled=false; saveBtn.innerHTML="📤 إرسال الاستمارة";
    }
  }

  if(saveBtn) saveBtn.addEventListener("click", ()=>{
    const missing = findMissingRequired();
    if(missing.length){
      const missingScores = missing.some(id=> String(id).startsWith("score_"));
      const missingFields = missing.some(id=> !String(id).startsWith("score_"));
      const msg = missingScores && !missingFields
        ? "الرجاء اختيار درجة لكل بند من بنود اللائحة قبل الحفظ"
        : missingScores && missingFields
          ? "الرجاء تعبئة جميع حقول الاستمارة واختيار درجة لكل بند قبل الحفظ"
          : "الرجاء تعبئة جميع حقول الاستمارة (عدا رقم اللائحة) قبل الحفظ";
      confirmDialog(
        "الاستمارة غير مكتملة",
        "الاستمارة غير مكتملة. هل تريد حفظ البيانات الحالية كمسودة والعودة إليها لاحقاً؟",
        async ()=>{ await saveDraft(true); },
        "حفظ كمسودة",
        "btn-primary"
      );
      const firstId = missing[0];
      const firstEl = String(firstId).startsWith("score_")
        ? container.querySelector(`.score-item[data-id="${firstId.slice(6)}"]`)
        : (document.getElementById(firstId) || schoolSel);
      if(firstEl && firstEl.scrollIntoView) firstEl.scrollIntoView({behavior:"smooth", block:"center"});
      return;
    }
    confirmDialog(
      "تأكيد إرسال الاستمارة",
      "هل أنت متأكد من صحة جميع البيانات والدرجات المدخلة؟ بعد التأكيد سيتم إرسال الاستمارة مباشرة، وإذا لم يتوفر الإنترنت ستُحفظ مؤقتاً وتُرسل تلقائياً عند عودته.",
      doSave, "إرسال الاستمارة", "btn-primary"
    );
  });
}
/* =========================================================
   شرائح اختيار الدرجة (score-chip) — بديل سلس عن التمرير:
   الضغط على رقم يحدد الدرجة مباشرة بدل السحب أو القوائم المنسدلة
   ========================================================= */
document.addEventListener("click", (e)=>{
  const chip = e.target.closest(".score-chip");
  if(!chip) return;
  const item = chip.closest(".score-item");
  if(!item) return;
  const sel = item.querySelector("select.score-input");
  if(!sel) return;
  sel.value = chip.dataset.v;
  item.querySelectorAll(".score-chip").forEach(b=> b.classList.toggle("active", b===chip));
  sel.dispatchEvent(new Event("input", {bubbles:true}));
});

/* =========================================================
   أزرار تمرير الجداول أفقياً (يمين/يسار) — لضمان عمل السحب
   داخل WebView حتى لو تعارضت لفتة التمرير الأفقي مع تمرير
   الصفحة العمودي على بعض الأجهزة
   ========================================================= */
function enhanceScrollTables(root){
  root.querySelectorAll(".table-wrap").forEach(wrap=>{
    if(wrap.dataset.twEnhanced) return;
    wrap.dataset.twEnhanced = "1";
    const leftBtn = document.createElement("button");
    leftBtn.type = "button"; leftBtn.className = "tw-scroll-btn tw-scroll-left";
    leftBtn.setAttribute("aria-label","تمرير لليسار"); leftBtn.textContent = "‹";
    const rightBtn = document.createElement("button");
    rightBtn.type = "button"; rightBtn.className = "tw-scroll-btn tw-scroll-right";
    rightBtn.setAttribute("aria-label","تمرير لليمين"); rightBtn.textContent = "›";
    wrap.appendChild(leftBtn); wrap.appendChild(rightBtn);
    const update = ()=>{
      const max = wrap.scrollWidth - wrap.clientWidth;
      const dist = Math.abs(wrap.scrollLeft);
      if(max <= 4){ leftBtn.style.display = "none"; rightBtn.style.display = "none"; return; }
      leftBtn.style.display = dist < max - 4 ? "flex" : "none";
      rightBtn.style.display = dist > 4 ? "flex" : "none";
    };
    leftBtn.addEventListener("click", ()=> wrap.scrollBy({left:-160, behavior:"smooth"}));
    rightBtn.addEventListener("click", ()=> wrap.scrollBy({left:160, behavior:"smooth"}));
    wrap.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    setTimeout(update, 60);
  });
}
new MutationObserver(()=> enhanceScrollTables(document))
  .observe(document.getElementById("root"), {childList:true, subtree:true});

/* =========================================================
   نقطة التشغيل
   ========================================================= */

/* =========================================================
   شاشة انتظار تسجيل الدخول — تُنشأ فقط عند الضغط على دخول
   ولا تؤثر على شاشة البداية أو تحميل التطبيق.
   ========================================================= */
const LOGIN_WAIT_DHIKR = [
  "سبحان الله وبحمده، سبحان الله العظيم",
  "أستغفر الله وأتوب إليه",
  "اللهم صل وسلم على نبينا محمد",
  "لا إله إلا الله وحده لا شريك له"
];
let _loginWaitTimer = null;
let _loginWaitIndex = 0;
function ensureLoginWaitStyles(){
  if(document.getElementById("loginWaitStyles")) return;
  const st=document.createElement("style");
  st.id="loginWaitStyles";
  st.textContent=`
    #loginWaitOverlay{position:fixed;left:0;right:0;top:0;bottom:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:#0f4c3a;padding:20px;box-sizing:border-box;direction:rtl}
    #loginWaitCard{width:92%;max-width:390px;text-align:center;color:#fff;padding:28px 20px;box-sizing:border-box;font-family:Arial,Tahoma,sans-serif}
    #loginWaitLogo{width:78px;height:78px;margin:0 auto 16px;border-radius:20px;display:flex;align-items:center;justify-content:center;background:#c5a55b;color:#fff;font-size:44px;font-weight:700}
    #loginWaitTitle{font-size:24px;font-weight:700;margin-bottom:5px}
    #loginWaitStatus{font-size:15px;font-weight:700;margin-top:22px;min-height:22px}
    #loginWaitDhikr{font-size:13px;line-height:1.8;opacity:.82;margin-top:8px;min-height:24px}
    #loginWaitTrack{height:7px;background:rgba(255,255,255,.2);border-radius:10px;overflow:hidden;margin:22px auto 0;width:85%}
    #loginWaitBar{height:100%;width:8%;background:#e2c77d;border-radius:10px;transition:width .5s ease}
  `;
  document.head.appendChild(st);
}
function showLoginLoadingScreen(){
  ensureLoginWaitStyles();
  let el=document.getElementById("loginWaitOverlay");
  if(!el){
    el=document.createElement("div");
    el.id="loginWaitOverlay";
    el.setAttribute("aria-live","polite");
    el.innerHTML=`<div id="loginWaitCard">
      <div id="loginWaitLogo" aria-hidden="true">ت</div>
      <div id="loginWaitTitle">جاري فتح التطبيق…</div>
      <div id="loginWaitTrack"><div id="loginWaitBar"></div></div>
      <div id="loginWaitStatus">جارٍ التحقق من بيانات الدخول…</div>
      <div id="loginWaitDhikr">${LOGIN_WAIT_DHIKR[0]}</div>
    </div>`;
    document.body.appendChild(el);
  }
  el.style.display="flex";
  _loginWaitIndex=0;
  const bar=document.getElementById("loginWaitBar");
  const status=document.getElementById("loginWaitStatus");
  const dhikr=document.getElementById("loginWaitDhikr");
  if(bar) bar.style.width="8%";
  if(status) status.textContent="جارٍ التحقق من بيانات الدخول…";
  if(dhikr) dhikr.textContent=LOGIN_WAIT_DHIKR[0];
  if(_loginWaitTimer) clearInterval(_loginWaitTimer);
  _loginWaitTimer=setInterval(()=>{
    _loginWaitIndex++;
    const steps=[18,30,44,58,72,86,94];
    if(bar) bar.style.width=steps[Math.min(_loginWaitIndex,steps.length-1)]+"%";
    if(status) status.textContent=_loginWaitIndex<2?"جارٍ التحقق من بيانات الدخول…":"جاري فتح التطبيق…";
    if(dhikr) dhikr.textContent=LOGIN_WAIT_DHIKR[_loginWaitIndex%LOGIN_WAIT_DHIKR.length];
  },900);
}
function finishLoginLoadingScreen(success=true){
  const el=document.getElementById("loginWaitOverlay");
  if(_loginWaitTimer){clearInterval(_loginWaitTimer);_loginWaitTimer=null;}
  if(!el) return;
  const bar=document.getElementById("loginWaitBar");
  const status=document.getElementById("loginWaitStatus");
  if(success){
    if(bar) bar.style.width="100%";
    if(status) status.textContent="تم تسجيل الدخول بنجاح";
    setTimeout(()=>{if(el) el.style.display="none";},220);
  }else{
    if(status) status.textContent="تعذر تسجيل الدخول";
    setTimeout(()=>{if(el) el.style.display="none";},180);
  }
}

async function refreshSchoolsOnAppOpen(){
  const session=Store.session();
  if(!session || !navigator.onLine || !CentralSchools.isConfigured()) return;
  try{
    await syncCentralSchools(true);
    if(Store.session()) renderApp();
  }catch(e){ console.warn("auto school refresh:", e); }
}

// مزامنة المدارس والمواقع عند فتح التطبيق، وعند العودة إليه من الخلفية.
// كما تُعاد المزامنة دورياً كل 15 دقيقة لضمان وصول الإضافات/تعديلات المواقع
// إلى أجهزة الموجّهين والمدير دون إعادة تثبيت التطبيق.
let _schoolRefreshTimer=null;
function startSchoolAutoRefresh(){
  refreshSchoolsOnAppOpen();
  if(_schoolRefreshTimer) clearInterval(_schoolRefreshTimer);
  _schoolRefreshTimer=setInterval(()=>refreshSchoolsOnAppOpen(), 15*60*1000);
  document.addEventListener("visibilitychange", ()=>{
    if(document.visibilityState==="visible") refreshSchoolsOnAppOpen();
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  const s = Store.session();
  App.view = s ? (s.role==="admin"? "adminForms":"userHome") : "login";
  renderApp();
  startSchoolAutoRefresh();
});
