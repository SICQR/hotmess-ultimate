(()=>{var e={};e.id=5403,e.ids=[5403],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},83736:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>m,routeModule:()=>d,serverHooks:()=>c,workAsyncStorage:()=>u,workUnitAsyncStorage:()=>l});var s={};r.r(s),r.d(s,{GET:()=>p});var i=r(52412),n=r(14293),o=r(94147),a=r(77856);async function p(){let e=process.env.NEXT_PUBLIC_BASE_URL||"http://localhost:3000",t=[{id:"1",title:"HOTMESS Radio Episode 1",slug:"episode-1",publishedAt:new Date}].map(t=>`
    <item>
      <title><![CDATA[${t.title}]]></title>
      <link>${e}/radio/episodes/${t.slug}</link>
      <guid isPermaLink="false">${t.id}</guid>
      <pubDate>${(t.publishedAt||new Date).toUTCString()}</pubDate>
      <description><![CDATA[${t.title} — HOTMESS Radio]]></description>
    </item>
  `).join(""),r=`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>HOTMESS Radio</title>
    <link>${e}/radio</link>
    <description>Clean lines. Dirty energy.</description>
    ${t}
  </channel>
</rss>`;return new a.NextResponse(r,{headers:{"Content-Type":"application/rss+xml"}})}let d=new i.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/podcast/rss/route",pathname:"/api/podcast/rss",filename:"route",bundlePath:"app/api/podcast/rss/route"},resolvedPagePath:"/home/runner/work/hotmess-ultimate/hotmess-ultimate/apps/web/app/api/podcast/rss/route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:u,workUnitAsyncStorage:l,serverHooks:c}=d;function m(){return(0,o.patchFetch)({workAsyncStorage:u,workUnitAsyncStorage:l})}},35303:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[4147,8814],()=>r(83736));module.exports=s})();