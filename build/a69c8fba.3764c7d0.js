(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{169:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(9),a=(r(0),r(188)),c={id:"consensus-cangshu",title:"\u5171\u8bc6\u7b97\u6cd5\u53d1\u5c55\u5386\u7a0b\uff08\u4ece Paxos \u804a\u8d77...)",author:"LycrusHamster",author_title:"Muta Core Team",author_url:"https://github.com/LycrusHamster",author_image_url:"https://avatars2.githubusercontent.com/u/24470065?s=400&u=2b4e4404aac410da84fc2e16ec757e1ba58b98ca&v=4",tags:["consensus","overlord"]},u={permalink:"/muta-docs2/blog/consensus-cangshu",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2020-04-23-consensus-cangshu.md",source:"@site/blog/2020-04-23-consensus-cangshu.md",description:"\u8fd1\u671f\uff0c\u6211\u4eec Core Team \u7684\u5f00\u53d1\u5de5\u7a0b\u5e08 - LycrusHamster \u505a\u4e86\u4e00\u4e2a\u5173\u4e8e\u5171\u8bc6\u7b97\u6cd5\u7684\u53d1\u5c55\u5386\u7a0b\u7684\u5206\u4eab\uff0c\u4ece Paxos \u804a\u5230\u6211\u4eec\u81ea\u5df1\u8bbe\u8ba1\u7684\u5171\u8bc6\u7b97\u6cd5 Overlord\uff0c\u5927\u5bb6\u611f\u5174\u8da3\u7684\u8bdd\u53ef\u4ee5\u5230 Youtube \u89c2\u770b\uff1ahttps://youtu.be/kdp58EoCLDA",date:"2020-04-23T00:00:00.000Z",tags:[{label:"consensus",permalink:"/muta-docs2/blog/tags/consensus"},{label:"overlord",permalink:"/muta-docs2/blog/tags/overlord"}],title:"\u5171\u8bc6\u7b97\u6cd5\u53d1\u5c55\u5386\u7a0b\uff08\u4ece Paxos \u804a\u8d77...)",readingTime:.06,truncated:!1},s=[],i={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u8fd1\u671f\uff0c\u6211\u4eec Core Team \u7684\u5f00\u53d1\u5de5\u7a0b\u5e08 - LycrusHamster \u505a\u4e86\u4e00\u4e2a\u5173\u4e8e\u5171\u8bc6\u7b97\u6cd5\u7684\u53d1\u5c55\u5386\u7a0b\u7684\u5206\u4eab\uff0c\u4ece Paxos \u804a\u5230\u6211\u4eec\u81ea\u5df1\u8bbe\u8ba1\u7684\u5171\u8bc6\u7b97\u6cd5 Overlord\uff0c\u5927\u5bb6\u611f\u5174\u8da3\u7684\u8bdd\u53ef\u4ee5\u5230 Youtube \u89c2\u770b\uff1a",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://youtu.be/kdp58EoCLDA"}),"https://youtu.be/kdp58EoCLDA")))}l.isMDXComponent=!0},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),l=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u({},t,{},e)),r},p=function(e){var t=l(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return r?o.a.createElement(m,u({ref:t},i,{components:r})):o.a.createElement(m,u({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var i=2;i<a;i++)c[i]=r[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);