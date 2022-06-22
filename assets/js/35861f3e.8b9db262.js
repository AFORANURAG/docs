"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[339],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1703:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],l={},s="Size limits",d={unversionedId:"troubleshooting/no-space-left-on-device",id:"troubleshooting/no-space-left-on-device",title:"Size limits",description:"Cyclic builds and deploys apps using serverless technologies. The build environment has 10 GB of space to use to install your dependencies and devDependencies, then build your code bundle.",source:"@site/docs/troubleshooting/no-space-left-on-device.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/no-space-left-on-device",permalink:"/docs/troubleshooting/no-space-left-on-device",draft:!1,editUrl:"https://github.com/cyclic-software/docs/edit/main/website/docs/troubleshooting/no-space-left-on-device.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Main entry point does not exist",permalink:"/docs/troubleshooting/main-entry-point-does-not-exist"},next:{title:"Nodemon",permalink:"/docs/troubleshooting/nodemon"}},c={},u=[{value:"Bundle limit",id:"bundle-limit",level:2},{value:"Error message",id:"error-message",level:3},{value:"Solution",id:"solution",level:3},{value:"Build environment limit",id:"build-environment-limit",level:2},{value:"Error message",id:"error-message-1",level:2},{value:"Solution",id:"solution-1",level:3}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"size-limits"},"Size limits"),(0,r.kt)("p",null,"Cyclic builds and deploys apps using serverless technologies. The build environment has 10 GB of space to use to install your ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),", then build your code bundle.\nThe built bundle may not exceed 240 MB."),(0,r.kt)("h2",{id:"bundle-limit"},"Bundle limit"),(0,r.kt)("p",null,"The size of the packaged code that is deployed is limited to 240 MB. By default any generated files and the entire repo contents are packaged. "),(0,r.kt)("p",null,"Several SPA frameworks (including React) by default include build time tools in standard generated ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),". If you move these to ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," you will most likely resolve any space issues."),(0,r.kt)("h3",{id:"error-message"},"Error message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-code"},"2021-12-06 10:49:49: [CYCLIC] ERROR: The total size of the post-build project code and\n production dependencies cannot exceed 240MB. The total size of your build is ${mb} MB\n")),(0,r.kt)("p",null,"If you get an error in the deploy log that says ",(0,r.kt)("inlineCode",{parentName:"p"},"production dependencies cannot exceed 240MB"),", here is how to fix."),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("p",null,"Currently the code size is limited to 240MB. Fortunately, most projects are can to be optimized by appropriately organizing dependencies and excluding unnecessary files from the build. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"remove any unused dependencies"),(0,r.kt)("li",{parentName:"ul"},"move any dev dependencies to ",(0,r.kt)("inlineCode",{parentName:"li"},"devDependencies")),(0,r.kt)("li",{parentName:"ul"},"add file patterns to an ",(0,r.kt)("inlineCode",{parentName:"li"},".npmignore")," file to exclude them from the build")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,r.kt)("inlineCode",{parentName:"h5"},".npmignore")," uses the same syntax as ",(0,r.kt)("inlineCode",{parentName:"h5"},".gitignore"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Read more about ",(0,r.kt)("a",{href:"https://www.atlassian.com/git/tutorials/saving-changes/gitignore",target:"_blank"},"ignoring path patterns")))),(0,r.kt)("h2",{id:"build-environment-limit"},"Build environment limit"),(0,r.kt)("p",null,"The build environment has 10 GB disk and 10 GB RAM available for temporary use to run installation and build ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," scripts defined in the repos ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("h2",{id:"error-message-1"},"Error message"),(0,r.kt)("p",null,"If your space requirements exceed these amounts, while running the install or step you will see a ",(0,r.kt)("inlineCode",{parentName:"p"},"No space left on device")," error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-code"},"fatal: cannot create directory at 'some_large_file.txt': No space left on device\n2021-12-06 10:49:49: [CYCLIC] Build Failed\nPush a new commit to start another.\n")),(0,r.kt)("h3",{id:"solution-1"},"Solution"),(0,r.kt)("p",null,"The only resolution at this time is to trim your dependencies or devDependencies."))}m.isMDXComponent=!0}}]);