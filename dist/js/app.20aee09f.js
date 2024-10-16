(function(){"use strict";var e={4398:function(e,t,n){var r=n(5130),o=n(6768);const i={id:"app"};function a(e,t,n,r,a,u){const c=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.bF)(c)])}var u={name:"App"},c=n(1241);const l=(0,c.A)(u,[["render",a]]);var f=l,s=(n(5524),n(5888)),d=(0,s.$N)();async function p(){const e=await n.e(53).then(n.t.bind(n,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var m=n(973),b=n(5129);const h=(0,m.aE)({history:(0,m.LA)(),routes:[{meta:{title:"Login"},path:"/login",name:"login",component:()=>n.e(100).then(n.bind(n,4100))},{path:"/",redirect:()=>{const e=b.A.state.nombreApellidos||localStorage.getItem("nombreApellidos"),t=b.A.state.edad||localStorage.getItem("edad");return e&&t?"/welcome":"/login"}},{meta:{title:"Home"},path:"/",component:()=>n.e(807).then(n.bind(n,807)),children:[{path:"welcome",name:"welcome",component:()=>n.e(71).then(n.bind(n,6071))},{path:"instalar",name:"instalar",component:()=>n.e(106).then(n.bind(n,4106))},{path:"recursos",name:"recursos",component:()=>n.e(129).then(n.bind(n,3129))},{path:"resultados",name:"resultados",component:()=>n.e(662).then(n.bind(n,8662))}]},{path:"/welcome",redirect:"/login"}]});var g=h;p(),b.A.dispatch("initializeStateFromLocalStorage"),(0,r.Ef)(f).use(d).use(g).use(b.A).mount("#app")},5129:function(e,t,n){var r=n(782);const o="app_user_data";t.A=(0,r.y$)({state:{nombreApellidos:"",edad:""},mutations:{setNombreApellidos(e,t){e.nombreApellidos=t,localStorage.setItem(o,JSON.stringify(e))},setEdad(e,t){e.edad=t,localStorage.setItem(o,JSON.stringify(e))},initializeStateFromLocalStorage(e){const t=localStorage.getItem(o);t&&Object.assign(e,JSON.parse(t))},clearState(e){e.nombreApellidos="",e.edad="",localStorage.removeItem(o)}},actions:{initializeStateFromLocalStorage({commit:e}){e("initializeStateFromLocalStorage")},clearState({commit:e}){e("clearState")}}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){a[e]=function(){return r[e]}}));return a["default"]=function(){return r},n.d(i,a),i}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(53===e?"webfontloader":e)+"."+{53:"39c946f5",71:"2e0b98a6",100:"bd15dd81",106:"8f92176a",129:"9d604f1b",662:"7b7b6fd0",807:"5e2e9b4c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{71:"bbf28776",100:"e1bf26d3",106:"e634e4e9",807:"6dedee2b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend-ebox-platform:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+i){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var u=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var r=n&&n.type,u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=u,a.parentNode&&a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=u,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={71:1,100:1,106:1,807:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var f=c(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkfrontend_ebox_platform"]=self["webpackChunkfrontend_ebox_platform"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(4398)}));r=n.O(r)})();
//# sourceMappingURL=app.20aee09f.js.map