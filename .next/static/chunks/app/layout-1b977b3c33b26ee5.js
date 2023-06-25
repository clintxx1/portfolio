(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7451:function(e,t,n){Promise.resolve().then(n.bind(n,5443))},5443:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var s=n(9268),l=n(6006),a=n(296),r=n(6008);let o=["light","dark"],c="(prefers-color-scheme: dark)",i="undefined"==typeof window,d=(0,l.createContext)(void 0),m={setTheme:e=>{},themes:[]},u=()=>{var e;return null!==(e=(0,l.useContext)(d))&&void 0!==e?e:m},h=e=>(0,l.useContext)(d)?l.createElement(l.Fragment,null,e.children):l.createElement(b,e),f=["light","dark"],b=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:s=!0,storageKey:a="theme",themes:r=f,defaultTheme:i=n?"system":"light",attribute:m="data-theme",value:u,children:h,nonce:b})=>{let[v,k]=(0,l.useState)(()=>y(a,i)),[j,$]=(0,l.useState)(()=>y(a)),w=u?Object.values(u):r,C=(0,l.useCallback)(e=>{let l=e;if(!l)return;"system"===e&&n&&(l=g());let a=u?u[l]:l,r=t?p():null,c=document.documentElement;if("class"===m?(c.classList.remove(...w),a&&c.classList.add(a)):a?c.setAttribute(m,a):c.removeAttribute(m),s){let e=o.includes(i)?i:null,t=o.includes(l)?l:e;c.style.colorScheme=t}null==r||r()},[]),S=(0,l.useCallback)(e=>{k(e);try{localStorage.setItem(a,e)}catch(e){}},[e]),N=(0,l.useCallback)(t=>{let s=g(t);$(s),"system"===v&&n&&!e&&C("system")},[v,e]);(0,l.useEffect)(()=>{let e=window.matchMedia(c);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),(0,l.useEffect)(()=>{let e=e=>{e.key===a&&S(e.newValue||i)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[S]),(0,l.useEffect)(()=>{C(null!=e?e:v)},[e,v]);let E=(0,l.useMemo)(()=>({theme:v,setTheme:S,forcedTheme:e,resolvedTheme:"system"===v?j:v,themes:n?[...r,"system"]:r,systemTheme:n?j:void 0}),[v,S,e,j,n,r]);return l.createElement(d.Provider,{value:E},l.createElement(x,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:s,storageKey:a,themes:r,defaultTheme:i,attribute:m,value:u,children:h,attrs:w,nonce:b}),h)},x=(0,l.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:s,enableColorScheme:a,defaultTheme:r,value:i,attrs:d,nonce:m})=>{let u="system"===r,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=a?o.includes(r)&&r?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${r}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",b=(e,t=!1,s=!0)=>{let l=i?i[e]:e,r=t?e+"|| ''":`'${l}'`,c="";return a&&s&&!t&&o.includes(e)&&(c+=`d.style.colorScheme = '${e}';`),"class"===n?c+=t||l?`c.add(${r})`:"null":l&&(c+=`d[s](n,${r})`),c},x=e?`!function(){${h}${b(e)}}()`:s?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${c}',m=window.matchMedia(t);if(m.media!==t||m.matches){${b("dark")}}else{${b("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${b(i?"x[e]":"e",!0)}}${u?"":"else{"+b(r,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${b(i?"x[e]":"e",!0)}}else{${b(r,!1,!1)};}${f}}catch(t){}}();`;return l.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:x}})},()=>!0),y=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},g=e=>(e||(e=window.matchMedia(c)),e.matches?"dark":"light");var v=n(2341),k=n(6338);let j=[{label:"Home",page:"home"},{label:"About",page:"about"},{label:"Projects",page:"projects"}];function $(){let{systemTheme:e,theme:t,setTheme:n}=u();(0,r.usePathname)();let[o,c]=(0,l.useState)(!1);return console.log(t),(0,s.jsx)("header",{className:"w-full mx-auto px-4 sm:px-12 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600",children:(0,s.jsxs)("div",{className:"justify-between md:items-center md:flex",children:[(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"flex items-center justify-between py-3 md:py-5 md:block",children:[(0,s.jsx)(a.rU,{to:"home",className:"cursor-pointer",children:(0,s.jsx)("div",{className:"container flex items-center space-y-2 rounded-full bg-purple-600 px-4 py-2",children:(0,s.jsx)("h2",{className:"text-3xl font-bold",children:"C"})})}),(0,s.jsx)("div",{className:"md:hidden",children:(0,s.jsx)("button",{className:"p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border",onClick:()=>c(!o),children:o?(0,s.jsx)(k.QAE,{size:30}):(0,s.jsx)(k.tgG,{size:30})})})]})}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ".concat(o?"block":"hidden"),children:(0,s.jsxs)("div",{className:"items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0",children:[j.map((e,t)=>(0,s.jsx)(a.rU,{to:e.page,className:"block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 cursor-pointer",activeClass:"active",spy:!0,smooth:!0,offset:-100,duration:500,onClick:()=>c(!o),children:e.label},t)),"dark"===("system"===t?e:t)?(0,s.jsx)("button",{onClick:()=>n("light"),className:"bg-slate-100 p-2 rounded-xl",children:(0,s.jsx)(v.sEY,{size:25,color:"black"})}):(0,s.jsx)("button",{onClick:()=>n("dark"),className:"bg-slate-100 p-2 rounded-xl",children:(0,s.jsx)(v.BUV,{size:25})})]})})})]})})}function w(e){let{children:t}=e;return(0,s.jsxs)("html",{lang:"en",children:[(0,s.jsx)("head",{}),(0,s.jsx)("body",{className:"bg-white dark:bg-stone-900",children:(0,s.jsxs)(h,{enableSystem:!0,attribute:"class",children:[(0,s.jsx)($,{}),t]})})]})}n(7296)},7296:function(){},6008:function(e,t,n){e.exports=n(794)}},function(e){e.O(0,[947,852,246,253,769,744],function(){return e(e.s=7451)}),_N_E=e.O()}]);