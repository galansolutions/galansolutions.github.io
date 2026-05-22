/* Theme bootstrap. Loaded synchronously in <head> so it runs before first
   paint and avoids a flash of the wrong theme. The stored value is validated
   against an allow-list and storage access is wrapped in try/catch (localStorage
   can throw in private mode / when storage is disabled). */
(function(){
  try{
    var t=localStorage.getItem('gs_theme');
    document.documentElement.setAttribute('data-theme',(t==='light'||t==='dark')?t:'dark');
  }catch(e){
    document.documentElement.setAttribute('data-theme','dark');
  }
})();
