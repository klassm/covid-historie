(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{123:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),c=t(64),o=t.n(c),i=(t(80),t(141)),s=t(65),u=t(142),l=t(17),d=t.n(l),f=t(30),p=t(41),b=t.n(p),h=t(143),j="https://raw.githubusercontent.com/klassm/covid-augsburg/master/rki-scrape/data";function v(){return g.apply(this,arguments)}function g(){return(g=Object(f.a)(d.a.mark((function n(){var e;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.get("".concat(j,"/all.json"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return x.apply(this,arguments)}function x(){return(x=Object(f.a)(d.a.mark((function n(e){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.get("".concat(j,"/").concat(e,".json"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var O=t(43),m=t(138),y=t(144),k=t(13),W=(t(119),t(5)),T=Object(m.a)((function(){return Object(y.a)({body:{padding:5}})}));var S=["#fefac0","#f6c97a","#ec925b","#dc543f","#ac3135"];var A=function(n){var e=n.rs,t=T(),r=function(n){return Object(h.a)([n,"region"],Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w(n));case 1:case"end":return e.stop()}}),e)}))))}(e).data;if(!r)return null;var a=window.innerWidth-20,c=r.entries.slice(0,10).map((function(n){return Object(O.a)(Object(O.a)({},n),{},{date:n.date.split(".").slice(0,2).join(".")})})),o=c.map((function(n){return{x:n.date,y:n.incidence,color:(e=n.incidence,e>200?4:e>100?3:e>50?2:e>35?1:0)};var e})),i=c.map((function(n){return{x:n.date,y:n.incidence+15,label:(e=n.casesDiff,void 0===e?"":e>0?"+ ".concat(e):"- ".concat(Math.abs(e)))};var e})),s=c.map((function(n){return{x:n.date,y:20,label:"".concat(Math.ceil(n.incidence))}}));return Object(W.jsxs)("div",{className:t.body,children:[Object(W.jsx)("h3",{children:r.name}),Object(W.jsxs)(k.f,{height:300,width:a,xType:"ordinal",children:[Object(W.jsx)(k.d,{}),Object(W.jsx)(k.a,{}),Object(W.jsx)(k.e,{}),Object(W.jsx)(k.g,{}),Object(W.jsx)(k.c,{colorType:"log",data:o,barWidth:.8,colorRange:S,colorDomain:[0,1,2,3,4]}),Object(W.jsx)(k.b,{data:i,xType:"ordinal",labelAnchorX:"middle"}),Object(W.jsx)(k.b,{data:s,xType:"ordinal",labelAnchorX:"middle"})]})]})},C=function(){var n=Object(h.a)("available-regions",v).data;if(!n)return Object(W.jsx)(u.a,{});var e=n.map((function(n){return Object(W.jsx)(A,{rs:n},"region_".concat(n))}));return Object(W.jsx)("div",{children:e})},F=new i.a,L=function(){return Object(W.jsx)(s.a,{client:F,children:Object(W.jsx)(C,{})})},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var D=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,146)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),c(n),o(n)}))};o.a.render(Object(W.jsx)(a.a.StrictMode,{children:Object(W.jsx)(L,{})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/covid-augsburg",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/covid-augsburg","/service-worker.js");P?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):B(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(e,n)}))}}(),D()},80:function(n,e,t){}},[[123,1,2]]]);
//# sourceMappingURL=main.0b482ad6.chunk.js.map