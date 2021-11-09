"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[343],{4635:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7711);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3133:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(8538),i=n(7765),o=(n(7711),n(4635)),r=["components"],l={title:"Build from scratch",slug:"/guide/develop/from-zero",order:1},p=void 0,s={unversionedId:"guide/develop/fromZero",id:"guide/develop/fromZero",isDocsHomePage:!1,title:"Build from scratch",description:"Main application",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/develop/fromZero.md",sourceDirName:"guide/develop",slug:"/guide/develop/from-zero",permalink:"/en/guide/develop/from-zero",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/guide/develop/fromZero.md",tags:[],version:"current",lastUpdatedBy:"zhouxiao.shaw",lastUpdatedAt:1636453007,formattedLastUpdatedAt:"11/9/2021",frontMatter:{title:"Build from scratch",slug:"/guide/develop/from-zero",order:1},sidebar:"guide",previous:{title:"Garfish Introduction",permalink:"/en/guide"},next:{title:"Manual loading",permalink:"/en/guide/advance/loadApp"}},d=[{value:"Main application",id:"main-application",children:[{value:"1. install Garfish",id:"1-install-garfish",children:[]},{value:"2. Register the child application on the main application and start Garfish",id:"2-register-the-child-application-on-the-main-application-and-start-garfish",children:[]}]},{value:"Sub-applications",id:"sub-applications",children:[{value:"1. Provide key rendering and destruction hooks",id:"1-provide-key-rendering-and-destruction-hooks",children:[]},{value:"2. Tweak sub-application-related build configuration",id:"2-tweak-sub-application-related-build-configuration",children:[]}]},{value:"Summary",id:"summary",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"main-application"},"Main application"),(0,o.kt)("h3",{id:"1-install-garfish"},"1. install Garfish"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add garfish # or npm i garfish -S\n")),(0,o.kt)("h3",{id:"2-register-the-child-application-on-the-main-application-and-start-garfish"},"2. Register the child application on the main application and start Garfish"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Garfish from 'garfish';\n\nGarfish.run({\n  // The base path of the main app, this value needs to be the same as the base path of the main app\n  basename: '/',\n  // Note that the #subApp node should be present in the page when running, and can be a function (if it is a function, it will be used as a mount point when the function returns)\n  domGetter: '#subApp',\n  apps: [\n    {\n      // The name of each app needs to be unique\n      name: 'react',\n      // Can be a function, when the function returns true, the app will be automatically mounted to the page when the activation condition is met.\n      activeWhen: '/react',\n      // the entry address of the sub-application, can be HTML address and JS address (the rendering function is handled differently for different modes)\n      entry: 'http://localhost:3000',\n    },\n    {\n      name: 'vue',\n      activeWhen: '/vue',\n      entry: 'http://localhost:8080',\n    },\n  ],\n});\n")),(0,o.kt)("p",null,"After the execution of registering the sub-application information and executing ",(0,o.kt)("inlineCode",{parentName:"p"},"Garfish.run"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"Garfish")," framework will start the route hijacking ability, when the browser address changes, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Garfish")," framework will immediately trigger the matching logic when the application meets the matching logic will automatically mount the application to the page. And in turn, it will trigger the life cycle of the child application during loading and rendering."),(0,o.kt)("p",null,"For example, in the above example."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"basename: '/'")),(0,o.kt)("li",{parentName:"ul"},"The React application is activated at ",(0,o.kt)("inlineCode",{parentName:"li"},"'/react'")),(0,o.kt)("li",{parentName:"ul"},"then the browser jumps to ",(0,o.kt)("inlineCode",{parentName:"li"},"/react")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"'/react/xxx/xx'")," routes will trigger the React app to be mounted in ",(0,o.kt)("inlineCode",{parentName:"li"},"domGetter")),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"basename: '/demo'"),", then the React app activation path will be ",(0,o.kt)("inlineCode",{parentName:"li"},"/demo/react")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"'/demo/react/xxx/xx'"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Manual mounts"))),(0,o.kt)("p",null,"In practical business scenarios, the application mount does not necessarily follow the route change, but may be triggered by certain events to use the mount capability, details of which can be found in ",(0,o.kt)("strong",{parentName:"p"},"[manual mount]","(... /advance/loadApp)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import Garfish from 'garfish';\n\nasync function loadApp() {\n  const app = await Garfish.loadApp('vue', {\n    // loadApp's app will be provided from the information registered during Garfish.run, manually mounted apps appInfo should not provide activeWhen\n    basename: '/demo/vue',\n    domGetter: '#subModule',\n  });\n\n  await app.mount();\n}\n\nloadApp();\n")),(0,o.kt)("h2",{id:"sub-applications"},"Sub-applications"),(0,o.kt)("h3",{id:"1-provide-key-rendering-and-destruction-hooks"},"1. Provide key rendering and destruction hooks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import ReactDOM from 'react-dom';\nimport App from '. /App';\n\nconst render = ({ dom, basename }) => {\n  ReactDOM.render(\n    // Use the basename provided by the Garfish framework, on which all subroutes of the child app are based, to reach the goal of route isolation and refreshing the route to load the child app components\n    <App basename={basename} />,\n    // The document here is a Garfish-constructed subapp container where all the content is placed\n    // If it's a js entry render it directly in the dom (because there are no other nodes)\n    // If it's an html entry, it will be rendered in its own html dom node via a selector\n    dom.querySelector('#root'),\n  );\n};\n\n// This function will be triggered on first load and execution\nexport const provider = () => {\n  return {\n    render, // The hook will be triggered when the application is rendered\n    destroy({ dom }) {\n      // The hook will be triggered when the application is destroyed\n      const root = (dom && dom.querySelector('#root')) || dom; // If it is a JS entry, the incoming node will be used directly as the mount point and destroyed node\n      if (root) {\n        // Do the corresponding destruction logic to ensure that the corresponding side effects are also removed when the child application is destroyed\n        ReactDOM.unmountComponentAtNode(root);\n      }\n    },\n  };\n};\n\n// This allows the sub-application to run independently of the main application to ensure that subsequent sub-applications can run independently of the main application for easy debugging and development\nif (!window.__GARFISH__) {\n  render({ dom: document, basename: '/' });\n}\n")),(0,o.kt)("h3",{id:"2-tweak-sub-application-related-build-configuration"},"2. Tweak sub-application-related build configuration"),(0,o.kt)("p",null,"In addition to providing ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," export content, the sub-application also needs to add certain ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack")," configurations, as follows, for the meaning of each webpack configuration refer to ","[webpack configuration documentation]","(",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/"},"https://webpack.js.org/configuration/")," output/#outputlibrary)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    // needs to be configured for umd specification\n    libraryTarget: 'umd',\n    // Modify non-standard code format to avoid escaping the sandbox\n    globalObject: 'window',\n    // Request to ensure that the value is not the same for each child application, otherwise there may be webpack chunks that affect each other\n    jsonpFunction: 'vue-app-jsonpFunction',\n    // Ensure that the resource path of the child app becomes an absolute path, so that the relative resources of the child app do not become relative resources on the main app, because the child app and the main app are in the same document stream, and the relative path is relative to the main app\n    publicPath: 'http://localhost:8000',\n  },\n  devServer: {\n    // ensure that the application port is not the same in development mode\n    port: '8000',\n    headers: {\n      // Ensure that the resources of the sub-application support cross-domain, after online you need to ensure that the resources of the sub-application will not have cross-domain problems when loaded in the environment of the main application (** also need to limit the scope of attention to security issues**)\n      'Access-Control-Allow-Origin': '*',\n    },\n  },\n};\n")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The main cost of building a set of micro front-end master and child applications with Garfish comes from two sources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build of the main application",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Registering the basic information of the sub-application"),(0,o.kt)("li",{parentName:"ul"},"Scheduling and managing the sub-application on the main application using Garfish"))),(0,o.kt)("li",{parentName:"ul"},"Transformation of the sub-application",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Provide rendering and destruction lifecycle of the application by exporting ",(0,o.kt)("inlineCode",{parentName:"li"},"provider"),"."),(0,o.kt)("li",{parentName:"ul"},"Provide rendering nodes in the rendering lifecycle for different entry modes provided"),(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"basename")," provided by the framework as the base of the application in the rendering lifecycle ",(0,o.kt)("inlineCode",{parentName:"li"},"basename")," has reached the goal of routing isolation, refreshing routes to load sub-application components"),(0,o.kt)("li",{parentName:"ul"},"add compatible rendering logic in non-micro front-end mode so that its sub-applications can run independently (in general it is recommended that users only use html entry)"),(0,o.kt)("li",{parentName:"ul"},"Add the corresponding build configuration")))))}u.isMDXComponent=!0}}]);