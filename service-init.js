if("serviceWorker" in navigator){
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("service-worker.js").catch(()=>{ /* لا يوجد سيرفر — يعمل التطبيق محلياً بدون تخزين مؤقت PWA */ });
  });
}
