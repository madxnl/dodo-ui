import{j as K,_ as U,s as gt,k as ht,m as x,n as k,p as N,g as j,q as Ce,r as l,t as M,d as R,u as Y,v as g,b as c,w as E,x as D,y as pt,z as m,A as mt,o as h,B as T,C as Fe,D as ie,E as se,a as yt,l as V,F as ke,G as Ae,H as Ee,I as $,J as bt,K as _t,L as Pt,M as Rt,N as wt,c as vt,O as $e,P as xe,Q as St,R as Ot,S as Ct,T as ae,i as Q,h as Ft,U as kt}from"../chunks/chunk-f043e1e6.js";function O(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function pe(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function X(e,t){const n=Object.getOwnPropertyDescriptor(e,t);return!!n&&!("value"in n)&&!!n.get}function At(e){return typeof e=="object"&&e!==null&&"then"in e&&K(e.then)}function Et(e){return e.replace(/[/\-\\^$*+?.()|[\]{}]/g,"\\$&")}const $t=["default"],xt=["default",...$t],Tt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:xt},Symbol.toStringTag,{value:"Module"})),It=["default"],Nt=["default",...It],jt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Nt},Symbol.toStringTag,{value:"Module"})),Ht=["render","passToClient"],Bt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ht},Symbol.toStringTag,{value:"Module"})),Lt=["render"],Wt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Lt},Symbol.toStringTag,{value:"Module"})),le={},Te={},Dt={},J={},Ut=[],Ie={},Vt=!0,zt=[],Gt={onBeforeRoute:null,onPrerenderStart:null},Kt=Object.assign({"/pages/index.page.vue":()=>U(()=>import("./pages_index.page.7a9db26b.js"),["assets/entries/pages_index.page.7a9db26b.js","assets/chunks/chunk-2f9e88a1.js","assets/chunks/chunk-a0dab2d3.js","assets/static/index.page.ea08ee54.css"]),"/renderer/_error.page.vue":()=>U(()=>import("./renderer_error.page.da2792c7.js"),["assets/entries/renderer_error.page.da2792c7.js","assets/chunks/chunk-2f9e88a1.js"])}),Mt={...Kt};le[".page"]=Mt;const Yt=Object.assign({"/pages/index.page.vue":Tt,"/renderer/_error.page.vue":jt}),Jt={...Yt};J[".page"]=Jt;const qt=Object.assign({"/renderer/_default.page.server.ts":Bt}),Qt={...qt};J[".page.server"]=Qt;const Xt=Object.assign({}),Zt={...Xt};Te[".page.route"]=Zt;const en=Object.assign({"/renderer/_default.page.client.ts":()=>U(()=>import("./renderer_default.page.client.41e34f6d.js"),["assets/entries/renderer_default.page.client.41e34f6d.js","assets/chunks/chunk-a0dab2d3.js","assets/chunks/chunk-2f9e88a1.js"])}),tn={...en};le[".page.client"]=tn;const nn=Object.assign({"/renderer/_default.page.client.ts":Wt}),rn={...nn};J[".page.client"]=rn;const on=Object.assign({"/renderer/_default.page.server.ts":()=>U(()=>import("./renderer_default.page.server.extractAssets.4ed993c7.js"),[])}),sn={...on};Ie[".page.server"]=sn;const an=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:Vt,neverLoaded:Ie,pageConfigGlobal:Gt,pageConfigs:zt,pageFilesEager:Te,pageFilesExportNamesEager:J,pageFilesExportNamesLazy:Dt,pageFilesLazy:le,pageFilesList:Ut},Symbol.toStringTag,{value:"Module"}));gt(an);function ln(){ht(),x()}function un(){var r,o,i,s;const e=!!((o=(r=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)==null?void 0:r.renderers)!=null&&o.size),t=!!((s=(i=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)==null?void 0:i.rendererInterfaces)!=null&&s.size),n=!!window.__vite_plugin_react_preamble_installed__;return e||t||n}function Ne(e,t){const n=Object.keys,r=typeof e;return e&&t&&r==="object"&&r===typeof t?n(e).length===n(t).length&&n(e).every(i=>Ne(e[i],t[i])):e===t}function cn(e,t){return k(e)&&k(t)&&e.constructor===t.constructor&&Ne({...e,stack:null},{...t,stack:null})&&t.message===t.message}function z(e){window.location.href=e}function fn(e){return new Promise(t=>setTimeout(t,e))}function dn(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}ln();const me=N("navigationState.ts",{}),gn=j(),je={markNavigationChange(){me.navigationChanged=!0},get noNavigationChangeYet(){return!me.navigationChanged&&this.isFirstUrl(j())},isFirstUrl(e){return e===gn}};async function hn(e,t){const r=Ce(e,t).filter(i=>i.fileType===".page.server");return await Promise.all(r.map(async i=>{i.exportNames||(l(i.loadExportNames,t),await i.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:r.some(({exportNames:i})=>(l(i),i.includes("onBeforeRender")))}}function pn(e,t){if(!O(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function mn(e){return typeof e=="object"&&e!==null&&Object.values(e).every(t=>typeof t=="string")}function yn(e,t){if(l(e.length>0),e.length===1)return e[0];const n=e.slice(0,e.length-1),r=e[e.length-1];return n.join(", ")+` ${t} `+r}M()&&x();function He(e,t=!0){l(e.urlOriginal),"urlPathname"in e&&l(X(e,"urlPathname")),Object.defineProperty(e,"urlPathname",{get:Le,enumerable:t,configurable:!0}),"url"in e&&l(X(e,"url")),Object.defineProperty(e,"url",{get:bn,enumerable:!1,configurable:!0}),"urlParsed"in e&&l(X(e,"urlParsed")),Object.defineProperty(e,"urlParsed",{get:_n,enumerable:t,configurable:!0})}function Be(e){let t=e._urlHandler;t||(t=i=>i);const n=e._urlRewrite??e.urlOriginal;l(n&&typeof n=="string");const r=t(n),o=e._baseServer;return l(o.startsWith("/")),Y(r,o)}function Le(){const{pathname:e}=Be(this),t=e;return l(t.startsWith("/")),t}function bn(){return R(!1,"`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vike.dev/migration/0.4.23 for more information.)",{onlyOnce:!0,showStackTrace:!0}),Le.call(this)}function _n(){const e=Be(this),{origin:t,pathname:n,pathnameOriginal:r,search:o,searchAll:i,searchOriginal:s,hash:a,hashOriginal:d}=e,u=M(),p=w=>{R(u,`pageContext.urlParsed.${w} isn't available on the server-side (HTTP requests don't include the URL hash by design)`,{onlyOnce:!0,showStackTrace:!0})},f={origin:t,pathname:n,pathnameOriginal:r,search:o,searchAll:i,searchOriginal:s,get hash(){return p("hash"),a},get hashOriginal(){return p("hashOriginal"),d},get hashString(){return R(!1,"pageContext.urlParsed.hashString has been renamed to pageContext.urlParsed.hashOriginal",{onlyOnce:!0,showStackTrace:!0}),p("hashString"),d},get searchString(){return R(!1,"pageContext.urlParsed.searchString has been renamed to pageContext.urlParsed.searchOriginal",{onlyOnce:!0,showStackTrace:!0}),s}};return B(f,"hashString"),B(f,"searchString"),u||(B(f,"hash"),B(f,"hashOriginal")),f}function B(e,t){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(e,t,{...n,enumerable:!1})}function Pn(e){l(typeof e.urlOriginal=="string"),l(typeof e.urlPathname=="string"),l(O(e.urlParsed)),l(e.urlPathname===e.urlParsed.pathname)}const We="@",ne=":";function Rn(e,t="Invalid"){let n=`${t} Route String ${F(e)}`;c(e!=="",`${n} (empty string): set it to ${F("/")} instead`),c(["/","*"].includes(e[0]),`${n}: it should start with ${F("/")} or ${F("*")}`),c(!e.includes("**"),`${n}: set it to ${F(e.split("**").join("*"))} instead`)}function re(e,t){Rn(e);const n=De(e),r=n.map(f=>f.param?"[^/]+":f.glob?f.isLastDir?"|/.*":".*":Et(f.static)).map(f=>`(${f})`).join(""),o=new RegExp(`^${r}/?$`),i=t.match(o);if(!i)return null;const s={},[a,...d]=i;let u=0;const p=n.filter(f=>f.glob).length>1;return n.forEach((f,w)=>{let b=d[w];if(f.param&&(s[f.param]=b),f.glob){const C=`*${p?++u:""}`;f.isLastDir&&(b=b.slice(1)),s[C]=b}}),{routeParams:s}}function De(e){const t=[],n=o=>{const i=t[t.length-1];i!=null&&i.static?i.static+=o:t.push({static:o})},r=e.split("/");return r.forEach((o,i)=>{const s=i===0,a=i===r.length-1;wn(o)?(R(!o.startsWith(ne),`Outdated Route String ${F(e)}, use ${F(e.split(ne).join(We))} instead`,{onlyOnce:!0}),s||n("/"),t.push({param:o.slice(1)})):o==="*"&&a&&e!=="*"&&e!=="/*"?t.push({glob:!0,isLastDir:!0}):(s||n("/"),o.split("*").forEach((d,u)=>{u!==0&&t.push({glob:!0}),d!==""&&n(d)}))}),t}function L(e){const t=De(e),n=a=>(a==null?void 0:a.split("/").filter(Boolean).length)||0;let r=0;for(const a of t){if(!a.static)break;r+=n(a.static)}const o=t.map(a=>n(a.static)).reduce((a,d)=>a+d,0),i=t.filter(a=>a.param).length,s=t.filter(a=>a.glob).length;return{numberOfStaticPartsBeginning:r,numberOfStaticParts:o,numberOfParams:i,numberOfGlobs:s}}function wn(e){return e.startsWith(We)||e.startsWith(ne)}function ye(e){const n=re(e,e);return l(n),Object.keys(n.routeParams).length===0}function F(e){return M()?`'${e}'`:(e===""&&(e="''"),g.cyan(e))}function vn(e){e.sort(Sn).sort(E(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(E(t=>t.routeType==="STRING"&&ye(t.routeString)===!1)).sort(E(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(E(t=>t.routeType==="STRING"&&ye(t.routeString)===!0)).sort(E(t=>t.routeType==="FILESYSTEM")).sort(E(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function Sn(e,t){{const n=e.precedence??0,r=t.precedence??0;if(n!==r)return n>r?-1:1}if(!t.routeString||!e.routeString)return 0;{const r=D(o=>L(o).numberOfStaticPartsBeginning)(e.routeString,t.routeString);if(r!==0)return r}{const r=D(o=>L(o).numberOfStaticParts)(e.routeString,t.routeString);if(r!==0)return r}{const r=pt(o=>L(o).numberOfGlobs)(e.routeString,t.routeString);if(r!==0)return r}{const r=D(o=>L(o).numberOfParams)(e.routeString,t.routeString);if(r!==0)return r}return 0}async function On(e,t,n){Pn(t);let r=e(t);if(Ue(r,`The Route Function ${n}`),r=await r,r===!1)return null;if(r===!0&&(r={}),c(O(r),`The Route Function ${n} should return a boolean or a plain JavaScript object (but it's ${g.cyan(`typeof result === ${JSON.stringify(typeof r)}`)} instead)`),"match"in r){const{match:s}=r;if(c(typeof s=="boolean",`The ${g.cyan("match")} value returned by the Route Function ${n} should be a boolean.`),!s)return null}let o=null;"precedence"in r&&(o=r.precedence,c(typeof o=="number",`The ${g.cyan("precedence")} value returned by the Route Function ${n} should be a number.`)),Ve(r,`The ${g.cyan("routeParams")} object returned by the Route Function ${n} should`);const i=r.routeParams||{};return c(!("pageContext"in r),`Providing ${g.cyan("pageContext")} in Route Functions is prohibited, see https://vike.dev/route-function#cannot-provide-pagecontext`),l(O(i)),Object.keys(r).forEach(s=>{c(s==="match"||s==="routeParams"||s==="precedence",`The Route Function ${n} returned an object with an unknown property ${g.cyan(s)} (the known properties are ${g.cyan("match")}, ${g.cyan("routeParams")}, and ${g.cyan("precedence")})`)}),{precedence:o,routeParams:i}}function Ue(e,t){R(!At(e),`${t} returned a promise, but asynchronous routing is deprecated and will be removed in the next major release, see https://vike.dev/route-function#async`,{onlyOnce:!0})}function be(){const e=g.cyan("iKnowThePerformanceRisksOfAsyncRouteFunctions");R(!1,`${e} is deprecated and will be removed in the next major release`,{onlyOnce:!0})}function Ve(e,t){l(t.endsWith(" should")),m(e,"routeParams")&&(l(t.endsWith(" should")),c(O(e.routeParams),`${t} be a plain JavaScript object.`),c(mn(e.routeParams),`${t} only hold string values.`))}function ze(e,{hookName:t,hookFilePath:n}){if(e==null)return;l(!t.endsWith(")"));const r=`The ${g.cyan("pageContext")} object provided by the ${t}() hook defined by ${n}`;c(k(e),`${r} should be an object (but it's ${g.cyan(`typeof pageContext === ${JSON.stringify(typeof e)}`)} instead)`),c(!("_objectCreatedByVike"in e),`${r} shouldn't be the whole ${g.cyan("pageContext")} object, see https://vike.dev/pageContext-manipulation#do-not-return-entire-pagecontext`),R(!("_pageId"in e),`${r} sets ${g.cyan("pageContext._pageId")} which means that vike's routing is overriden. This is an experimental feature: make sure to contact a vike maintainer before using this.`,{onlyOnce:!0}),c(!("is404"in e),`${r} sets ${g.cyan("pageContext.is404")} which is forbidden, use ${g.cyan("throw render()")} instead, see https://vike.dev/render`)}async function Cn(e,t){let n=e.onBeforeRoute(t);Ue(n,`The onBeforeRoute() hook ${e.hookFilePath}`),n=await n;const r=`The onBeforeRoute() hook defined by ${e.hookFilePath}`;if(c(n==null||pn(n,["pageContext"])&&m(n,"pageContext"),`${r} should return ${g.cyan("null")}, ${g.cyan("undefined")}, or a plain JavaScript object ${g.cyan("{ pageContext: { /* ... */ } }")}`),n==null)return null;if(c(m(n,"pageContext","object"),`${r} returned ${g.cyan("{ pageContext }")} but pageContext should be a plain JavaScript object.`),m(n.pageContext,"_pageId")&&!m(n.pageContext,"_pageId","null")){const i=`${r} returned ${g.cyan("{ pageContext: { _pageId } }")} but ${g.cyan("_pageId")} should be`;c(m(n.pageContext,"_pageId","string"),`${i} a string or null`),c(t._allPageIds.includes(n.pageContext._pageId),`${i} ${yn(t._allPageIds.map(s=>g.cyan(s)),"or")}`)}m(n.pageContext,"routeParams")&&Ve(n.pageContext,`${r} returned ${g.cyan("{ pageContext: { routeParams } }")} but routeParams should`);const o={};return m(n.pageContext,"url")&&(R(!1,`${r} returned ${g.cyan("{ pageContext: { url } }")} but ${g.cyan("pageContext.url")} has been renamed to ${g.cyan("pageContext.urlOriginal")}. Return ${g.cyan("{ pageContext: { urlOriginal } }")} instead. (See https://vike.dev/migration/0.4.23 for more information.)`,{onlyOnce:!0}),n.pageContext.urlOriginal=n.pageContext.url,delete n.pageContext.url),m(n.pageContext,"urlOriginal")&&(mt(n.pageContext.urlOriginal,`${r} returned ${g.cyan("{ pageContext: { urlOriginal } }")} but ${g.cyan("urlOriginal")}`),h(o,{_urlOriginalPristine:t.urlOriginal})),ze(n.pageContext,{hookFilePath:e.hookFilePath,hookName:"onBeforeRoute"}),h(o,n.pageContext),o}var W;function _e(...e){var t;W||(W=(t=globalThis.__brillout_debug_createDebugger)==null?void 0:t.call(globalThis,"vike:routing")),W&&W(...e)}M()&&x();async function Ge(e){He(e),_e("Pages routes:",e._pageRoutes);const t={};if(e._onBeforeRouteHook){const s=await Cn(e._onBeforeRouteHook,e);if(s){if(h(t,s),m(t,"_pageId","string")||m(t,"_pageId","null"))return m(t,"routeParams")?l(m(t,"routeParams","object")):h(t,{routeParams:{}}),h(t,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:t};h(e,t)}}h(t,{_routingProvidedByOnBeforeRouteHook:!1});const n=e._allPageIds;l(n.length>=0),c(e._pageFilesAll.length>0||e._pageConfigs.length>0,"No *.page.js file found. You must create at least one *.page.js file."),c(n.length>0,"You must create at least one *.page.js file that isn't _default.page.*");const{urlPathname:r}=e;l(r.startsWith("/"));const o=[];await Promise.all(e._pageRoutes.map(async s=>{const{pageId:a,routeType:d}=s;if(s.routeType==="FILESYSTEM"){const{routeString:u}=s,p=re(u,r);if(p){const{routeParams:f}=p;o.push({pageId:a,routeParams:f,routeString:u,routeType:d})}return}if(s.routeType==="STRING"){const{routeString:u}=s,p=re(u,r);if(p){const{routeParams:f}=p;l(d==="STRING"),o.push({pageId:a,routeString:u,routeParams:f,routeType:d})}return}if(s.routeType==="FUNCTION"){const{routeFunction:u,routeDefinedAt:p}=s,f=await On(u,e,p);if(f){const{routeParams:w,precedence:b}=f;o.push({pageId:a,precedence:b,routeParams:w,routeType:d})}return}l(!1)})),vn(o);const i=o[0];if(_e(`Route matches for URL ${g.cyan(r)} (in precedence order):`,o),h(t,{_routeMatches:o}),!i)return h(t,{_pageId:null,routeParams:{}}),{pageContextAddendum:t};{const{routeParams:s}=i;l(O(s)),h(t,{_pageId:i.pageId,routeParams:i.routeParams})}return{pageContextAddendum:t}}const Pe=["urlPathname","urlParsed"],Fn=["Page","pageExports","exports"];function Ke(e){[...Fn,...Pe].forEach(n=>{n in e&&(Pe.includes(n)?(l(n.startsWith("url")),R(!1,`pageContext.${n} is already available in the browser when using Client Routing; adding '${n}' to passToClient has no effect`,{onlyOnce:!0})):R(!1,`pageContext.${n} is a built-in that cannot be overriden; adding '${n}' to passToClient has no effect`,{onlyOnce:!0}),delete e[n])})}const kn="/";function An(e,t,n){const{pathnameOriginal:r,searchOriginal:o,hashOriginal:i}=Y(e,kn);e.startsWith("/")&&l(e===`${r}${o||""}${i||""}`,{url:e});const s=r.endsWith("/");let a;return n&&r!=="/"?(s?a=T(r,0,-1):a=r,l(!a.endsWith("/"),{url:e}),l(a!=="")):a=r+(s?"":"/")+"index",l(a),a=a+t,`${a}${o||""}${i||""}`}const En=".pageContext.json",$n=!1;function xn(e){return An(e,En,$n)}function Tn(e,t,n){l(!n.endsWith(" "));const r=[],o=Object.keys(e);for(const i of o)t.includes(i)||r.push(i);c(r.length===0,[n,"returned an object with following unknown keys:",pe(r)+".","Only following keys are allowed:",pe(t)+"."].join(" "))}function In(e,t){if(e==null)return;const n=`The onBeforeRender() hook defined by ${t}`;c(O(e),`${n} should return a plain JavaScript object, ${g.cyan("undefined")}, or ${g.cyan("null")}`),Tn(e,["pageContext"],n),e.pageContext&&ze(e.pageContext,{hookName:"onBeforeRender",hookFilePath:t})}async function Nn(e,t){let n;if(e._pageFilesAll.length>0?(l(e._pageConfigs.length===0),n=jn(e._pageId,e._pageFilesAll)):n=Fe(e,"guard"),!n)return;const r=n.hookFn;let o=e;const i=t(e);i&&(o=i);const s=await ie(()=>r(o),"guard",n.hookFilePath);c(s===void 0,`The guard() hook of ${n.hookFilePath} returns a value, but guard() doesn't accept any return value`)}function jn(e,t){const n=t.find(a=>a.pageId===e&&a.fileType===".page.route");if(!n)return null;const{filePath:r,fileExports:o}=n;l(o);const i=o.guard;if(!i)return null;const s=r;return c(K(i),`guard() defined by ${s} should be a function`),{hookFn:i,hookName:"guard",hookFilePath:s}}function Hn(e){const t=new Error("AbortRender");return h(t,{_pageContextAbort:e,[Me]:!0}),t}const Me="_isAbortError";function Z(e){return typeof e=="object"&&e!==null&&Me in e}function Bn(e){return e._urlRewrite||e._urlRedirect||e.abortStatusCode?(l(m(e,"_abortCall","string")),!0):!1}function Ln(e,t,n){if(t)return;const r=n._urlRewrite??n.urlOriginal;l(r);const o=e._pageContextAbort._abortCall;se(!1,`${g.cyan(o)} intercepted while rendering ${g.cyan(r)}`,{onlyOnce:!1})}function Wn(e){Dn(e);const t={_urlRewrite:null};return e.forEach(n=>{Object.assign(t,n)}),t}function Dn(e){const t=[];e.forEach(n=>{const r=n._urlRewrite;{const o=t.indexOf(r);if(o!==-1){const i=[...t.slice(o),r].map(s=>`render('${s}')`).join(" => ");c(!1,`Infinite loop of render() calls: ${i}`)}}t.push(r)})}function Un(e,t){const n=[e>0&&g.cyan("throw render('/some-url')"),t>0&&g.cyan("throw redirect('/some-url')")].filter(Boolean).join(" and ");c(e+t<=7,`Maximum chain length of 7 ${n} exceeded. Did you define an infinite loop of ${n}?`)}const Ye=N("router/getPageContext.ts",{});async function Vn(e){if(e._isFirstRenderAttempt&&je.isFirstUrl(e.urlOriginal)){l(m(e,"_isFirstRenderAttempt","true"));const t=await zn(e);return Re(t),t}else{l(m(e,"_isFirstRenderAttempt","false"));const t=await Kn(e);return Re(t),t}}async function zn(e){const t=yt();Ke(t),h(t,{isHydration:!0,_hasPageContextFromClient:!1}),h(t,await V(e._pageFilesAll,e._pageConfigs,t._pageId));{const n={...e,...t};if(await Jn(n)){const r=await qe(n);h(t,r)}}return t}async function Gn(e){const t=ke(e._pageFilesAll,e._pageConfigs);if(!t)throw new Error("No error page defined.");const n={isHydration:!1,_pageId:t};return h(n,await Je({...e,...n},!0)),n}async function Kn(e){const t={isHydration:!1};return h(t,await qn(e)),h(t,await Je({...e,...t},!1)),t}async function Je(e,t){let n={};if(h(n,await V(e._pageFilesAll,e._pageConfigs,e._pageId)),!t&&await Mn({...e,...n})){const r=await Zn(e);if(!r._isError)h(n,r);else{const o=ke(e._pageFilesAll,e._pageConfigs);l(o),n={},h(n,{isHydration:!1,_pageId:o}),h(n,await V(e._pageFilesAll,e._pageConfigs,n._pageId)),l(m(r,"is404","boolean")),l(m(r,"pageProps","object")),l(m(r.pageProps,"is404","boolean")),l(!("serverSideError"in r)),h(n,r)}}else h(n,{_hasPageContextFromServer:!1}),t||await Nn({_hasPageContextFromClient:!1,...e,...n},r=>Ae(r,!0));{const r=await qe({...e,...n});h(n,r)}return n}async function qe(e){const t=Fe(e,"onBeforeRender");if(!t)return{_hasPageContextFromClient:!1};const n=t.hookFn,r={_hasPageContextFromClient:!0},o=Ae({...e,...r},!0),i=await ie(()=>n(o),"onBeforeRender",t.hookFilePath);In(i,t.hookFilePath);const s=i==null?void 0:i.pageContext;return h(r,s),r}async function Mn(e){return!!Ye.pageContextInitHasClientData||await Yn(e)}function Re(e){e._pageContextInitHasClientData&&(Ye.pageContextInitHasClientData=!0)}async function Yn(e){var t;if(e._pageConfigs.length>0){const n=Ee(e._pageId,e._pageConfigs);return((t=$(n,"onBeforeRenderEnv"))==null?void 0:t.value)==="server-only"}else{const{hasOnBeforeRenderServerSideOnlyHook:n}=await hn(e._pageFilesAll,e._pageId);return n}}async function Jn(e){var t;if(e._pageConfigs.length>0){const n=Ee(e._pageId,e._pageConfigs);return((t=$(n,"onBeforeRenderEnv"))==null?void 0:t.value)==="client-only"}else return!1}async function qn(e){const n=(await Ge(e)).pageContextAddendum;if(!n._pageId){const r=new Error("No routing match");throw Qn(r),r}return l(m(n,"_pageId","string")),n}function Qn(e){h(e,{_is404:!0})}function Xn(e){return k(e)&&e._is404===!0}async function Zn(e){const t=e._urlRewrite??e._urlOriginalPristine??e.urlOriginal,n=xn(t),r=await fetch(n);{const s=r.headers.get("content-type"),a="application/json",d=s&&s.includes(a);if(!d&&r.status===404)throw z(e.urlOriginal),tr();c(d,`Wrong Content-Type for ${n}: it should be ${a} but it's ${s} instead. Make sure to properly use pageContext.httpResponse.headers, see https://vike.dev/renderPage`)}const o=await r.text(),i=bt(o);if(l(k(i)),"serverSideError"in i)throw _t("The pageContext object couldn't be fetched from the server as an error occurred on the server-side. Check your server logs.");if(Bn(i))throw Hn(i);return l(m(i,"_pageId","string")),Ke(i),h(i,{_hasPageContextFromServer:!0}),i}function er(e){return k(e)&&!!e._alreadyServerSideRouted}function tr(){const e=new Error("Page doesn't exist");return Object.assign(e,{_alreadyServerSideRouted:!0}),e}function nr(e,t){const r=t.filter(({filesystemRoot:i})=>e.startsWith(i)).sort(D(({filesystemRoot:i})=>i.length))[0];let o;if(r){const{filesystemRoot:i,urlRoot:s}=r,a={pageId:e,filesystemRoot:i,urlRoot:s};l(s.startsWith("/")&&e.startsWith("/")&&i.startsWith("/"),a),l(e.startsWith(i),a),i!=="/"?(l(!i.endsWith("/"),a),o=T(e,i.length,0)):o=e,l(o.startsWith("/"),a),o=s+(s.endsWith("/")?"":"/")+T(o,1,0)}else o=e;return l(o.startsWith("/")),o=o.split("/").filter(i=>i!=="pages"&&i!=="src"&&i!=="index").join("/"),l(!o.includes(".page.")),l(!o.endsWith(".")),o.endsWith("/index")&&(o=T(o,0,-6)),o===""&&(o="/"),l(o.startsWith("/")),l(!o.endsWith("/")||o==="/"),o}async function rr(e,t,n,r){await Promise.all(e.filter(a=>a.fileType===".page.route").map(a=>{var d;return(d=a.loadFile)==null?void 0:d.call(a)}));const{onBeforeRouteHook:o,filesystemRoots:i}=ir(e,t,n);return{pageRoutes:or(i,e,t,r),onBeforeRouteHook:o}}function or(e,t,n,r){const o=[];let i=[...r];if(n.length>0){l(e===null);const s=!0;n.filter(a=>!a.isErrorPage).forEach(a=>{const d=a.pageId;i=ar(i,d);let u=null;{const p="route",f=$(a,p);if(f){const w=Pt(a,p),b=f.value,C=Rt(w);typeof b=="string"?u={pageId:d,comesFromV1PageConfig:s,routeString:b,routeDefinedAt:C,routeType:"STRING"}:(l(K(b)),$(a,"iKnowThePerformanceRisksOfAsyncRouteFunctions","boolean")&&be(),u={pageId:d,comesFromV1PageConfig:s,routeFunction:b,routeDefinedAt:C,routeType:"FUNCTION"})}}if(!u){const{routeFilesystem:p}=a;l(p);const{routeString:f,definedBy:w}=p;l(p.routeString.startsWith("/")),u={pageId:d,routeFilesystemDefinedBy:w,comesFromV1PageConfig:s,routeString:f,routeDefinedAt:null,routeType:"FILESYSTEM"}}l(u),o.push(u)})}if(n.length===0){l(e);const s=!1;i.filter(a=>!wt(a)).forEach(a=>{const d=t.find(u=>u.pageId===a&&u.fileType===".page.route");if(!d||!("default"in d.fileExports)){const u=nr(a,e);l(u.startsWith("/")),l(!u.endsWith("/")||u==="/"),o.push({pageId:a,comesFromV1PageConfig:s,routeString:u,routeDefinedAt:null,routeFilesystemDefinedBy:`${a}.page.*`,routeType:"FILESYSTEM"})}else{const{filePath:u,fileExports:p}=d;if(l(p.default),m(p,"default","string")){const f=p.default;c(f.startsWith("/"),`A Route String should start with a leading slash '/' but ${u} has \`export default '${f}'\`. Make sure to \`export default '/${f}'\` instead.`),o.push({pageId:a,comesFromV1PageConfig:s,routeString:f,routeDefinedAt:u,routeType:"STRING"});return}if(m(p,"default","function")){const f=p.default;"iKnowThePerformanceRisksOfAsyncRouteFunctions"in p&&be(),o.push({pageId:a,comesFromV1PageConfig:s,routeFunction:f,routeDefinedAt:u,routeType:"FUNCTION"});return}c(!1,`The default export of ${u} should be a string or a function.`)}})}return o}function ir(e,t,n){if(t.length>0){if(n.onBeforeRoute){const i=n.onBeforeRoute.value;if(i){l(!n.onBeforeRoute.isComputed);const s=n.onBeforeRoute.definedAtInfo.filePath;return l(s),c(K(i),`The hook onBeforeRoute() defined by ${s} should be a function.`),{onBeforeRouteHook:{hookFilePath:s,onBeforeRoute:i},filesystemRoots:null}}}return{onBeforeRouteHook:null,filesystemRoots:null}}let r=null;const o=[];return e.filter(i=>i.fileType===".page.route"&&i.isDefaultPageFile).forEach(({filePath:i,fileExports:s})=>{if(l(s),"onBeforeRoute"in s){c(m(s,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${i} should be a function.`);const{onBeforeRoute:a}=s;r={hookFilePath:`${i} > \`export { onBeforeRoute }\``,onBeforeRoute:a}}"filesystemRoutingRoot"in s&&(c(m(s,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${i} should be a string.`),c(m(s,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${i} is \`'${s.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),o.push({filesystemRoot:sr(i),urlRoot:s.filesystemRoutingRoot}))}),{onBeforeRouteHook:r,filesystemRoots:o}}function sr(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=T(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}function ar(e,t){const{length:n}=e;return e=e.filter(r=>r!==t),l(e.length===n-1),e}function Qe(){const e="/";return l(lr(e)),e}function lr(e){return e.startsWith("/")}const ee=N("createPageContext.ts",{});async function Xe(e){ee.pageFilesData||(ee.pageFilesData=await vt(!0));const{pageFilesAll:t,allPageIds:n,pageConfigs:r,pageConfigGlobal:o}=ee.pageFilesData,{pageRoutes:i,onBeforeRouteHook:s}=await rr(t,r,o,n),a=Qe();l($e(a));const u={_objectCreatedByVike:!0,_urlHandler:null,_urlRewrite:null,_baseServer:a,_isProduction:!0,_pageFilesAll:t,_pageConfigs:r,_pageConfigGlobal:o,_allPageIds:n,_pageRoutes:i,_onBeforeRouteHook:s};return h(u,e),He(u),u}async function Ze(e){const t=await Xe({urlOriginal:e}),n=await Ge(t),r=t._pageFilesAll,o=t._pageConfigs;if(!("pageContextAddendum"in n))return{pageId:null,pageFilesAll:r,pageConfigs:o};const i=n.pageContextAddendum._pageId;return i?{pageId:i,pageFilesAll:r,pageConfigs:o}:{pageId:null,pageFilesAll:r,pageConfigs:o}}function I(e){return e.fileType===".css"?[]:e.exportNames?e.exportNames:(l(e.fileExports,e.filePath),Object.keys(e.fileExports))}function ur({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:r(),isClientRouting:i()};function r(){return t.some(a=>a.pageId===n&&a.fileType===".page")?(o(),!1):!(!t.some(a=>a.pageId===n&&a.fileType===".page.server")||e.some(a=>a.pageId===n&&a.fileType===".page.client"&&I(a).includes("render")))}function o(){const s=e.some(a=>I(a).includes("render"));c(s,["No client-side `render()` hook found.","See https://vike.dev/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,d)=>` (${d+1}): ${a.filePath}`)].join(`
`)].join(" "))}function i(){return e.some(a=>I(a).includes("clientRouting"))}}function cr({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:r}){let o=[];const i=t.filter(a=>!e.includes(a)),s=[];if(s.push(...e.map(a=>({id:a.filePath,onlyAssets:!1,eagerlyImported:!1}))),s.push(...i.map(a=>({id:a.filePath,onlyAssets:!0,eagerlyImported:!1}))),n)o=e.map(a=>a.filePath);else{const a=fr(r);s.push({id:a,onlyAssets:!1,eagerlyImported:!1}),o=[a]}return{clientEntries:o,clientDependencies:s}}function fr(e){return e?"@@vike/dist/esm/client/client-routing-runtime/entry.js":"@@vike/dist/esm/client/server-routing-runtime/entry.js"}function dr(e,t){let n=xe(e,t);const r=Ce(e,t),{isHtmlOnly:o,isClientRouting:i}=ur({pageFilesClientSide:n,pageFilesServerSide:r,pageId:t});o&&(n=n.filter(d=>d.isEnv("CLIENT_ONLY")&&!I(d).includes("render")),n=hr(n));const{clientEntries:s,clientDependencies:a}=cr({pageFilesClientSide:n,pageFilesServerSide:r,isHtmlOnly:o,isClientRouting:i});return{isHtmlOnly:o,isClientRouting:i,clientEntries:s,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:r}}async function gr(e,t,{sharedPageFilesAlreadyLoaded:n}){const r=xe(e,t);await Promise.all(r.map(async o=>{var i;l(o.isEnv("CLIENT_ONLY")||o.isEnv("CLIENT_AND_SERVER")),!(n&&o.isEnv("CLIENT_AND_SERVER"))&&await((i=o.loadExportNames)==null?void 0:i.call(o))}))}function hr(e){const t=[];for(const n of e)if(t.push(n),I(n).includes("overrideDefaultPages"))break;return t}function pr(e,t,n){var r,o;if(e){const i=((r=$(e,"clientRouting","boolean"))==null?void 0:r.value)??!1;return{isClientSideRenderable:((o=$(e,"isClientSideRenderable","boolean"))==null?void 0:o.value)??!1,isClientRouting:i}}else{const{isHtmlOnly:i,isClientRouting:s}=dr(t,n);return{isClientSideRenderable:!i,isClientRouting:s}}}async function et(e){const{pageId:t,pageFilesAll:n,pageConfigs:r}=await Ze(e);if(!t)return!1;await gr(n,t,{sharedPageFilesAlreadyLoaded:!1});const o=St(r,t),{isClientSideRenderable:i,isClientRouting:s}=pr(o,n,t);return i&&s}function tt(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function nt(e){const t=e.getAttribute("href");return!!(t===null||t===""||tt(t)||yr(e)||br(t)||!_r(t)||!Ot(t)||!mr(e))}function mr(e){if(Lr()){const n=e.getAttribute("data-vike-link");return n!==null&&n!=="false"}else return!0}function yr(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function br(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function _r(e){const t=Qe();l($e(t));const{hasBaseServer:n}=Y(e,t);return n}function Pr(e,t){let n=Rr(e,t);return n==="viewport"&&!e._isProduction&&(se(!1,"Viewport prefetching is disabled in development",{onlyOnce:!0}),n="hover"),{prefetchStaticAssets:n}}function Rr(e,t){{const n=wr(t);if(n!==null)return n}if("prefetchLinks"in e.exports&&c(!1,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:n}=e.exports;if(n===!1)return!1;if(n==="hover")return"hover";if(n==="viewport")return"viewport";const r="prefetchStaticAssets value should be false, 'hover', or 'viewport'";c(O(n),r);const o=Object.keys(n);c(o.length===1&&o[0]==="when",r);const{when:i}=n;if(i==="HOVER"||i==="VIEWPORT"){const s=i.toLowerCase();return R(!1,`prefetchStaticAssets value \`{ when: '${i}' }\` is outdated: set prefetchStaticAssets to '${s}' instead`,{onlyOnce:!0}),s}c(!1,r)}return"hover"}function wr(e){const t=e.getAttribute("data-prefetch-static-assets"),n=e.getAttribute("data-prefetch");if(t===null&&n===null)return null;const r="The attribute data-prefetch is outdated, use data-prefetch-static-assets instead.";if(t){if(c(n===null,r),t==="hover"||t==="viewport")return t;if(t==="false")return!1;c(!1,`data-prefetch-static-assets has value "${t}" but it should instead be "false", "hover", or "viewport"`)}if(n){if(l(!t),R(!1,r,{onlyOnce:!0}),n==="true")return"viewport";if(n==="false")return"hover";c(!1,`data-prefetch has value "${n}" but it should instead be "true" or "false"`)}l(!1)}const rt=new Map;function ot(e){const t=st(e);return rt.has(t)}function it(e){const t=st(e);rt.set(t,!0)}function st(e){return Y(e,"/").pathname}x();const we=new Map;async function vr(e){if(c(Ct(),"prefetch() only works with Client Routing, see https://vike.dev/prefetch",{showStackTrace:!0}),c(!tt(e),`You are trying to prefetch the URL ${e} of another domain which cannot be prefetched`,{showStackTrace:!0}),ot(e))return;it(e);const{pageId:t,pageFilesAll:n,pageConfigs:r}=await Ze(e);if(t)try{await V(n,r,t)}catch(o){if(ae(o))oe(o,!0);else throw o}}function Sr(e){it(e.urlPathname),[...document.getElementsByTagName("A")].forEach(n=>{if(we.has(n))return;we.set(n,!0);const r=n.getAttribute("href");if(nt(n)||(l(r),ot(r)))return;const{prefetchStaticAssets:o}=Pr(e,n);if(o&&(o==="hover"&&(n.addEventListener("mouseover",()=>{te(r)}),n.addEventListener("touchstart",()=>{te(r)},{passive:!0})),o==="viewport")){const i=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(te(r),i.disconnect())})});i.observe(n)}})}async function te(e){try{if(!await et(e))return}catch{return}await vr(e)}function at(){let e=window.history.state;e||(e={});let t=!1;"timestamp"in e||(t=!0,e.timestamp=ut()),"scrollPosition"in e||(t=!0,e.scrollPosition=lt()),ct(e),t&&ce(e)}function ue(){const e=window.history.state||{};return ct(e),e}function lt(){return{x:window.scrollX,y:window.scrollY}}function ut(){return new Date().getTime()}function ve(){const e=lt(),t=ue();ce({...t,scrollPosition:e})}function Or(e,t){if(t)ce(ue(),e);else{const n=ut();Cr({timestamp:n,scrollPosition:null},e)}}function ct(e){if(l(k(e)),"timestamp"in e){const{timestamp:t}=e;l(typeof t=="number")}if("scrollPosition"in e){const{scrollPosition:t}=e;t!==null&&l(m(t,"x","number")&&m(t,"y","number"))}}function ce(e,t){window.history.replaceState(e,"",t??null)}function Cr(e,t){window.history.pushState(e,"",t)}x();const Fr=N("navigate.ts",{});function kr(e){Fr.navigate=e}const P=N("useClientRouter.ts",{previousState:G()});jr();at();function oe(e,t){l(ae(e)),P.clientRoutingIsDisabled=!0,t&&console.log(e),se(!1,["Failed to fetch static asset.","This usually happens when a new frontend is deployed.","Falling back to Server Routing.","(The next page navigation will use Server Routing instead of Client Routing.)"].filter(Boolean).join(" "),{onlyOnce:!0})}function Ar(){Ir(),Er((o,{keepScrollPosition:i})=>{r({scrollTarget:i?"preserve-scroll":"scroll-to-top-or-hash",urlOriginal:o,isBackwardNavigation:!1,checkClientSideRenderable:!0})}),$r((o,i)=>{r({scrollTarget:o,isBackwardNavigation:i})}),kr(async(o,{keepScrollPosition:i=!1,overwriteLastHistoryEntry:s=!1}={})=>{await r({scrollTarget:i?"preserve-scroll":"scroll-to-top-or-hash",urlOriginal:o,overwriteLastHistoryEntry:s,isBackwardNavigation:!1,checkClientSideRenderable:!0})});let e=0,t,n=!1;r({scrollTarget:"preserve-scroll",isBackwardNavigation:null});return;async function r({scrollTarget:o,urlOriginal:i=j(),overwriteLastHistoryEntry:s=!1,isBackwardNavigation:a,checkClientSideRenderable:d,pageContextsFromRewrite:u=[],redirectCount:p=0}){var he;if(Un(u.length,p),P.clientRoutingIsDisabled){z(i);return}const f=Wn(u);if(d){const v=f._urlRewrite??i;let _;try{_=await et(v)}catch(A){if(Z(A))_=!0;else throw A}if(!_){z(i);return}}const w={urlOriginal:i,isBackwardNavigation:a,...f},b=++e;l(b>=1),b>1&&n===!1&&((he=P.onPageTransitionStart)==null||he.call(P,w),n=!0);let C=!1;const q=()=>b===1&&C===!1?!1:b!==e,y=await Xe(w);if(q())return;const de=b===1;h(y,{_isFirstRenderAttempt:de});let H,S,ge=!1;try{H=await Vn(y)}catch(v){ge=!0,S=v}if(ge){if(Z(S)||console.error(S),Oe(S,y))return;if(Z(S)){const v=S;Ln(S,y._isProduction,y);const _=v._pageContextAbort;if(_._urlRewrite){await r({scrollTarget:o,urlOriginal:i,overwriteLastHistoryEntry:s,isBackwardNavigation:a,pageContextsFromRewrite:[...u,_],redirectCount:p});return}if(_._urlRedirect){const A=_._urlRedirect.url;if(A.startsWith("http")){window.location.href=A;return}else await r({scrollTarget:"scroll-to-top-or-hash",urlOriginal:A,overwriteLastHistoryEntry:!1,isBackwardNavigation:!1,checkClientSideRenderable:!0,pageContextsFromRewrite:u,redirectCount:p++});return}l(_.abortStatusCode),h(y,_),_.abortStatusCode===404&&h(y,{is404:!0})}else h(y,{is404:Xn(S)});try{H=await Gn(y)}catch(v){if(Oe(v,y)||(de||setTimeout(()=>{window.location.pathname=i},0),cn(S,v)))return;throw v}}if(l(H),h(y,H),Q(y,"onPageTransitionStart"),P.onPageTransitionStart=y.exports.onPageTransitionStart,y.exports.hydrationCanBeAborted?C=!0:R(!un(),"You seem to be using React; we recommend setting hydrationCanBeAborted to true, see https://vike.dev/clientRouting",{onlyOnce:!0}),!q()&&(t&&await t,!q())){if(xr(i,s),je.markNavigationChange(),l(t===void 0),t=(async()=>{await Ft(y,!0),Sr(y)})(),await t,t=void 0,y._isFirstRenderAttempt){Q(y,"onHydrationEnd");const{onHydrationEnd:v}=y.exports;if(v){const _=y.exportsAll.onHydrationEnd[0].exportSource;l(_),await ie(()=>v(y),"onHydrationEnd",_)}}else b===e&&(y.exports.onPageTransitionEnd&&(Q(y,"onPageTransitionEnd"),y.exports.onPageTransitionEnd(y)),n=!1);ft(o),fe(),P.initialRenderIsDone=!0}}}function Er(e){document.addEventListener("click",t);return;function t(o){if(!n(o))return;const i=r(o.target);if(!i)return;const s=i.getAttribute("href");if(nt(i))return;l(s),o.preventDefault();const a=![null,"false"].includes(i.getAttribute("keep-scroll-position"));e(s,{keepScrollPosition:a})}function n(o){return o.button===0&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!o.metaKey}function r(o){for(;o.tagName!=="A";){const{parentNode:i}=o;if(!i)return null;o=i}return o}}function $r(e){window.addEventListener("popstate",()=>{const t=G(),n=t.historyState.scrollPosition||"scroll-to-top-or-hash",r=t.urlWithoutHash===P.previousState.urlWithoutHash,o=!t.historyState.timestamp||!P.previousState.historyState.timestamp?null:t.historyState.timestamp<P.previousState.historyState.timestamp;P.previousState=t,r?window.history.state===null?(at(),P.previousState=G()):ft(n):e(n,o)})}function xr(e,t){j()!==e&&(fe(),Or(e,t),P.previousState=G())}function G(){return{urlWithoutHash:j({withoutHash:!0}),historyState:ue()}}function ft(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const n=Nr();if(n&&n!=="top"){const r=document.getElementById(n)||document.getElementsByName(n)[0];if(r){r.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;Tr(t)}function Tr(e){const t=()=>window.scrollTo(e.x,e.y),n=()=>window.scrollX===e.x&&window.scrollY===e.y;n()||(t(),!n()&&requestAnimationFrame(()=>{t(),!n()&&setTimeout(async()=>{if(t(),n())return;const r=new Date().getTime();for(;;)if(await fn(10),t(),n()||new Date().getTime()-r>100)return},0)}))}function Ir(){window.addEventListener("scroll",dn(ve,Math.ceil(1e3/3)),{passive:!0}),dt(ve)}function Nr(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}function jr(){Se(),dt(Se),Hr(()=>P.initialRenderIsDone&&fe())}function fe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function Se(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function dt(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function Hr(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}function Oe(e,t){return!!(er(e)||Br(e,t))}function Br(e,t){if(!ae(e))return!1;if(t._isFirstRenderAttempt)throw oe(e,!1),e;return oe(e,!0),z(t.urlOriginal),!0}function Lr(){return!!window._disableAutomaticLinkInterception}x();const Wr=!0;kt(Wr);Ar();
