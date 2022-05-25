"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},301:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={},l="Nodemon",c={unversionedId:"troubleshooting/nodemon",id:"troubleshooting/nodemon",title:"Nodemon",description:"Error message",source:"@site/docs/troubleshooting/nodemon.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/nodemon",permalink:"/docs/troubleshooting/nodemon",draft:!1,editUrl:"https://github.com/cyclic-software/docs/edit/main/website/docs/troubleshooting/nodemon.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"No space left on device",permalink:"/docs/troubleshooting/no-space-left-on-device"},next:{title:"Websockets",permalink:"/docs/troubleshooting/websockets"}},u={},p=[{value:"Error message",id:"error-message",level:2},{value:"Solution",id:"solution",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nodemon"},"Nodemon"),(0,a.kt)("h2",{id:"error-message"},"Error message"),(0,a.kt)("p",null,"After first deploying your app, you visit the url and see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "Internal Server Error"\n}\n')),(0,a.kt)("p",null,"You then investigate further by going to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Logs")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Transactions")," tab of your app and see something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2021-12-20 08:37:31: sh: nodemon: command not found\n2021-12-20 08:37:31: internal/modules/cjs/loader.js:905\n[...]\n")),(0,a.kt)("p",null,"or something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2021-12-20 08:45:53: internal/modules/cjs/loader.js:905\nthrow err;\n^\n\nError: Cannot find module '../lib/cli'\nRequire stack:\n- /var/task/node_modules/.bin/nodemon\n...\n")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"This is happening because your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," is using nodemon in its start script definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'...\n"scripts": {\n  "test": "mocha tests/unit/",\n  "start": "nodemon server.js"\n}\n...\n')),(0,a.kt)("p",null,"Nodemon is an excellent tool for local development of node applications. On your local, nodemon watches for file changes at the path it is monitoring and restarts the local server. In production mode, both for serverless or not - restarting the server on file changes is usually not a desired behavior. "),(0,a.kt)("p",null,"The above ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," should be changed to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'...\n"scripts": {\n  "test": "mocha tests/unit/",\n  "dev": "nodemon server.js"\n  "start": "node server.js"\n}\n...\n')),(0,a.kt)("p",null,"While the ",(0,a.kt)("inlineCode",{parentName:"p"},'"start"')," script may differ for various node frameworks, it should be defined for the purpose of starting the application in production mode with the appropriate flags and parameters. By convention the ",(0,a.kt)("inlineCode",{parentName:"p"},'"dev"')," script is used to start the application in development mode primarily for running on local installations."))}m.isMDXComponent=!0}}]);