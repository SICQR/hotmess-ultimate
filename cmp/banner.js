(function(){
  if(!document) return;
  function set(c,v,d){var e=new Date; e.setTime(e.getTime()+d*864e5); document.cookie=c+'='+v+';path=/;expires='+e.toUTCString();}
  function get(n){return ('; '+document.cookie).split('; '+n+'=').pop().split(';')[0];}
  if(get('hm_cmp')) return;
  var b=document.createElement('div'); b.style="position:fixed;bottom:0;left:0;right:0;padding:12px;background:#000;color:#fff;z-index:9999;font:14px/1.4 system-ui";
  b.innerHTML='We use cookies. <button id="hm-accept">Accept all</button> <button id="hm-reject">Reject non-essential</button> <a href="/privacy">Learn more</a>';
  document.body.appendChild(b);
  document.getElementById('hm-accept').onclick=function(){set('hm_cmp', JSON.stringify({analytics:true,marketing:true}), 180); b.remove();};
  document.getElementById('hm-reject').onclick=function(){set('hm_cmp', JSON.stringify({analytics:false,marketing:false}), 180); b.remove();};
})();