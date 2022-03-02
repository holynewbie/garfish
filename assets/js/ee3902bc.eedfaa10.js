"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[778],{5850:function(e,n,t){var a=t(7711);n.Z=function(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},446:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(5086),l=t(7711),r=t(6427),p=t(4644);var o=function(){var e=(0,l.useContext)(p.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(3982),u=t(1506),s="tabItem_vXLl";function d(e){var n,t,a,r=e.lazy,p=e.block,d=e.defaultValue,c=e.values,m=e.groupId,k=e.className,h=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),v=(0,i.lx)(f,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(n=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=h[0])?void 0:a.props.value;if(null!==N&&!f.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=o(),b=g.tabGroupChoices,A=g.setTabGroupChoices,w=(0,l.useState)(N),C=w[0],y=w[1],G=[],I=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=b[m];null!=T&&T!==C&&f.some((function(e){return e.value===T}))&&y(T)}var E=function(e){var n=e.currentTarget,t=G.indexOf(n),a=f[t].value;a!==C&&(I(n),y(a),null!=m&&A(m,a))},R=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=G.indexOf(e.currentTarget)+1;t=G[a]||G[0];break;case"ArrowLeft":var l=G.indexOf(e.currentTarget)-1;t=G[l]||G[G.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},k)},f.map((function(e){var n=e.value,t=e.label;return l.createElement("li",{role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":C===n}),key:n,ref:function(e){return G.push(e)},onKeyDown:R,onFocus:E,onClick:E},null!=t?t:n)}))),r?(0,l.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function c(e){var n=(0,r.Z)();return l.createElement(d,(0,a.Z)({key:String(n)},e))}},6842:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return k}});var a=t(5086),l=t(9126),r=(t(7711),t(4635)),p=t(446),o=t(5850),i=["components"],u={title:"Garfish.loadApp",slug:"/api/loadApp",order:4},s=void 0,d={unversionedId:"guide/API/loadApp",id:"guide/API/loadApp",isDocsHomePage:!1,title:"Garfish.loadApp",description:"\u4e0e Garfish.run \u51fd\u6570\u4e0d\u540c\uff0crun \u65b9\u6cd5\u662f\u5728\u6267\u884c\u540e\uff0c\u5f53\u8def\u7531\u53d1\u751f\u53d8\u5316\u65f6\u4f1a\u81ea\u52a8\u7684\u5339\u914d\u7b26\u5408\u6761\u4ef6\u7684\u5e94\u7528\u6267\u884c\u6e32\u67d3\u548c\u9500\u6bc1\u903b\u8f91\uff0cGarfish.loadApp \u63d0\u4f9b\u4e86\u66f4\u52a0\u7075\u6d3b\u7684\u52a0\u8f7d\u5fae\u524d\u7aef\u5e94\u7528\u6a21\u5f0f\uff0c\u901a\u8fc7 Garfish.loadApp API \u53ef\u4ee5\u624b\u52a8\u63a7\u5236\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u9884\u9500\u6bc1",source:"@site/docs/guide/API/loadApp.md",sourceDirName:"guide/API",slug:"/api/loadApp",permalink:"/api/loadApp",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/guide/API/loadApp.md",tags:[],version:"current",lastUpdatedBy:"Arthur",lastUpdatedAt:1646228575,formattedLastUpdatedAt:"2022/3/2",frontMatter:{title:"Garfish.loadApp",slug:"/api/loadApp",order:4},sidebar:"guide",previous:{title:"Garfish.registerApp",permalink:"/api/registerApp"},next:{title:"Garfish.channel",permalink:"/api/channel"}},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",children:[],level:3},{value:"\u4e0d\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848\uff1a",id:"\u4e0d\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848",children:[],level:3},{value:"\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848\uff08\u63a8\u8350\u4f7f\u7528\u7f13\u5b58\uff09",id:"\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848\u63a8\u8350\u4f7f\u7528\u7f13\u5b58",children:[],level:3},{value:"app.mount \u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5",id:"appmount-\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5",children:[],level:3},{value:"app.unmount \u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6",id:"appunmount-\u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6",children:[],level:3},{value:"app.show \u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6",id:"appshow-\u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6",children:[],level:3},{value:"app.hide \u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6",id:"apphide-\u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6",children:[],level:3},{value:"\u7f13\u5b58",id:"\u7f13\u5b58",children:[],level:3}],m={toc:c};function k(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"Garfish.run")," \u51fd\u6570\u4e0d\u540c\uff0crun \u65b9\u6cd5\u662f\u5728\u6267\u884c\u540e\uff0c\u5f53\u8def\u7531\u53d1\u751f\u53d8\u5316\u65f6\u4f1a\u81ea\u52a8\u7684\u5339\u914d\u7b26\u5408\u6761\u4ef6\u7684\u5e94\u7528\u6267\u884c\u6e32\u67d3\u548c\u9500\u6bc1\u903b\u8f91\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Garfish.loadApp")," \u63d0\u4f9b\u4e86\u66f4\u52a0\u7075\u6d3b\u7684\u52a0\u8f7d\u5fae\u524d\u7aef\u5e94\u7528\u6a21\u5f0f\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Garfish.loadApp")," API \u53ef\u4ee5\u624b\u52a8\u63a7\u5236\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u9884\u9500\u6bc1"),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)(p.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"React",label:"React",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Garfish from 'garfish';\nimport { BrowserRouter, Route, Link, Switch } from 'react-router-dom';\n\nfunction VueApp(basename) {\n  useEffect(async () => {\n    let app = await Garfish.loadApp('vue-app', {\n      entry: 'http://localhost:8092',\n      domGetter: '#container',\n      basename,\n      cache: true,\n    });\n    // \u82e5\u5df2\u7ecf\u6e32\u67d3\u89e6\u53d1 show\uff0c\u53ea\u6709\u9996\u6b21\u6e32\u67d3\u89e6\u53d1 mount\uff0c\u540e\u9762\u6e32\u67d3\u90fd\u53ef\u4ee5\u89e6\u53d1 show \u63d0\u4f9b\u6027\u80fd\n    app.mounted ? app.show() : await app.mount();\n    return () => app.hide();\n  });\n  return <div id=\"container\"></div>;\n}\n\nfunction App() {\n  return (\n    <BrowserRouter basename={'/'}>\n      <Link to=\"/vue-app\">VueApp</Link>\n      <Switch>\n        // \u5206\u914d\u4e00\u4e2a\u8def\u7531\u7ed9 vue \u5e94\u7528\n        <Route path=\"/vue-app\" component={() => VueApp('/vue-app')}></Route>\n      </Switch>\n    </BrowserRouter>\n  );\n}\n"))),(0,r.kt)(o.Z,{value:"Vue",label:"Vue",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u63d0\u4f9b ReactApp \u7684 Vue \u7ec4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div>\n    <div id=\"container\"></div>\n  </div>\n</template>\n\n<script>\n  import Garfish from 'garfish';\n  let appInstance = null;\n  export default {\n    name: 'App',\n    async mounted() {\n      appInstance = await Garfish.loadApp('react-app', {\n        entry: 'http://localhost:8093',\n        domGetter: '#container',\n        basename: '/react-app',\n        cache: true,\n      });\n      // \u82e5\u5df2\u7ecf\u6e32\u67d3\u89e6\u53d1 show\uff0c\u53ea\u6709\u9996\u6b21\u6e32\u67d3\u89e6\u53d1 mount\uff0c\u540e\u9762\u6e32\u67d3\u90fd\u53ef\u4ee5\u89e6\u53d1 show \u63d0\u4f9b\u6027\u80fd\n      appInstance.mounted ? appInstance.show() : await appInstance.mount();\n    },\n    destroyed() {\n      appInstance.hide();\n    },\n  };\n<\/script>\n<style></style>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5c06 ReactApp \u7ec4\u4ef6\u6dfb\u52a0\u5230\u8def\u7531\u4e2d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nimport Vue from 'vue';\nimport VueRouter from 'vue-router';\nimport ReactApp from './component/ReactApp.vue';\nconst router = new VueRouter({\n  mode: 'history',\n  base: '/',\n  routers: [{ path: '/react-app', component: ReactApp }],\n});\nnew Vue({\n  router,\n  store,\n  render: (h) => h(App),\n}).$mount('#app');\n")))),(0,r.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("dl",{className:"args-list"},(0,r.kt)("dt",null,(0,r.kt)("strong",null,"name: string")),(0,r.kt)("dd",null,"\u5b50\u5e94\u7528\u7684\u540d\u79f0\uff0c\u4e5f\u662f\u5b50\u5e94\u7528\u7684\u7684\u552f\u4e00 id\uff0c\u82e5 name \u7684\u5e94\u7528\u5df2\u7ecf\u901a\u8fc7 run\u3001setOptions \u6ce8\u518c\u8fc7\uff0c\u63d0\u4f9b name \u65f6\u5c06\u76f4\u63a5\u83b7\u53d6\u5e94\u7528\u7684\u4fe1\u606f"),(0,r.kt)("dt",null,(0,r.kt)("strong",null,"Options: AppInfo")),(0,r.kt)("dl",{className:"args-list"},(0,r.kt)("dt",null,(0,r.kt)("strong",null,"basename?: string\uff08\u9ed8\u8ba4\u503c: /\uff09")),(0,r.kt)("dd",null,"\u5b50\u5e94\u7528\u7684\u57fa\u7840\u8def\u5f84\uff0c\u5b50\u5e94\u7528\u6240\u6709\u7684\u8def\u7531\u90fd\u5728\u6b64\u57fa\u7840\u4e0a"),(0,r.kt)("dt",null,(0,r.kt)("strong",null,"entry: string")),(0,r.kt)("dd",null,"\u5b50\u5e94\u7528\u7684\u5165\u53e3\u8d44\u6e90\u5730\u5740\uff0c\u53ef\u4ee5\u4e3a HTML \u5b50\u5e94\u7528\u5165\u53e3\u5730\u5740\uff0c\u4e5f\u53ef\u4ee5\u4e3aJS \u5b50\u5e94\u7528\u5165\u53e3\u5730\u5740"),(0,r.kt)("dt",null,(0,r.kt)("strong",null,"domGetter?: string | () => Element")),(0,r.kt)("dd",null,"\u5b50\u5e94\u7528\u7684\u6302\u8f7d\u70b9\uff0c\u63d0\u4f9b string \u7c7b\u578b\u65f6\u9700\u8981\u5176\u503c\u662f `cssSelector`\uff0cGarfish \u5185\u90e8\u4f1a\u4f7f\u7528 `document.querySelector(domGetter)` \u53bb\u9009\u4e2d\u5b50\u5e94\u7528\u7684\u6302\u8f7d\u70b9\u3002\u5f53\u63d0\u4f9b\u51fd\u6570\u65f6\uff0c\u5b50\u5e94\u7528\u5728\u8def\u7531\u9a71\u52a8\u6302\u8f7d\u548c\u624b\u52a8\u6302\u8f7d\u65f6\u5c06\u4f1a\u6267\u884c\u8be5\u51fd\u6570\u5e76\u4e14\u671f\u671b\u8fd4\u56de\u4e00\u4e2a dom \u5143\u7d20 "),(0,r.kt)("dt",null,(0,r.kt)("strong",null,"cache?: boolean\uff08\u9ed8\u8ba4\u503c: true\uff09")),(0,r.kt)("dd",null,"\u5728\u8c03\u7528 loadApp \u65f6\u82e5\u5df2\u7ecf\u52a0\u8f7d\u8fc7\u5e94\u7528\u5b9e\u4f8b\u5c06\u8fd4\u56de\u76f8\u540c\u7684\u5e94\u7528\u5b9e\u4f8b"),(0,r.kt)("dt",null,(0,r.kt)("strong",null,"props?: Object")),(0,r.kt)("dd",null,"\u4f20\u9012\u7ed9\u5b50\u5e94\u7528\u7684\u53c2\u6570\uff0c\u5b50\u5e94\u7528\u7684\u751f\u547d\u5468\u671f\u5c06\u63a5\u53d7\u5230\u8be5\u53c2\u6570"))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AppInstance")),(0,r.kt)("dl",{className:"args-list"},(0,r.kt)("dt",null,(0,r.kt)("strong",null,"mounted: boolean")),(0,r.kt)("dd",null,"\u662f\u5426\u5df2\u7ecf\u89e6\u53d1 mount \u6e32\u67d3\u51fd\u6570"),(0,r.kt)("dt",null,(0,r.kt)("strong",null,"mount: Function")),(0,r.kt)("dd",null,"\u89e6\u53d1\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u6d41\u7a0b\uff1a\u521b\u5efa\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u5bb9\u5668\u3001\u521b\u5efa\u4e00\u4e2a\u5b50\u5e94\u7528\u7684\u6267\u884c\u73af\u5883\u3001\u6267\u884c\u5b50\u5e94\u7528\u7684\u6240\u6709\u4ee3\u7801\u3001\u6267\u884c provider \u63d0\u4f9b\u7684\u5b50\u5e94\u7528 render \u51fd\u6570"),(0,r.kt)("dt",null,(0,r.kt)("strong",null,"show: Function")),(0,r.kt)("dd",null,"\u89e6\u53d1\u5b50\u5e94\u7528\u7684\u663e\u793a\u6d41\u7a0b\uff1a\u663e\u793a\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u5bb9\u5668\u3001\u6267\u884c\u5b50\u5e94\u7528\u7684 render \u51fd\u6570\uff08\u4e0d\u4f1a\u521b\u5efa\u65b0\u7684\u6267\u884c\u4e0a\u4e0b\u6587\uff09"),(0,r.kt)("dt",null,(0,r.kt)("strong",null,"unmount: Function")),(0,r.kt)("dd",null,"\u89e6\u53d1\u5b50\u5e94\u7528\u7684\u9500\u6bc1\u6d41\u7a0b\uff1a\u79fb\u9664\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u5bb9\u5668\u3001\u9500\u6bc1\u5b50\u5e94\u7528\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u3001\u5b50\u5e94\u7528\u5728\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u526f\u4f5c\u7528\u90fd\u4f1a\u88ab\u6e05\u9664\u3001\u6267\u884c provider \u63d0\u4f9b\u7684\u5b50\u5e94\u7528 destroy \u51fd\u6570"),(0,r.kt)("dt",null,(0,r.kt)("strong",null,"hide: Function")),(0,r.kt)("dd",null,"\u89e6\u53d1\u5b50\u5e94\u7528\u7684\u9690\u85cf\u6d41\u7a0b\uff1a\u9690\u85cf\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u5bb9\u5668\u3001\u6267\u884c provider \u63d0\u4f9b\u7684\u5b50\u5e94\u7528 destroy \u51fd\u6570")),(0,r.kt)("h3",{id:"\u4e0d\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848"},"\u4e0d\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// options \u662f\u53ef\u9009\u7684\uff0c\u5982\u679c\u4e0d\u4f20\uff0c\u9ed8\u8ba4\u4f1a\u4ece Garfish.options \u4e0a\u6df1\u62f7\u8d1d\u4e00\u4efd\u8fc7\u6765\nconst app = await Garfish.loadApp('appName', {\n  domGetter: () => document.getElementById('id'),\n});\n\n// \u6e32\u67d3\uff1a\u7f16\u8bd1\u5b50\u5e94\u7528\u7684\u4ee3\u7801 -> \u521b\u5efa\u5e94\u7528\u5bb9\u5668 -> \u8c03\u7528 provider.render \u6e32\u67d3\n// \u6ce8\u610f\uff1a\u7531\u4e8e\u6c99\u7bb1\u7684\u5b9e\u73b0\uff0c\u76f8\u540c\u5e94\u7528\u91cd\u590d\u6e32\u67d3\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898\nconst success = await app.mount();\n// \u5378\u8f7d\uff1a\u6e05\u9664\u5b50\u5e94\u7528\u7684\u526f\u4f5c\u7528 -> \u8c03\u7528 provider.destroy -> \u9500\u6bc1\u5e94\u7528\u5bb9\u5668\nconst success = await app.unmount();\n")),(0,r.kt)("h3",{id:"\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848\u63a8\u8350\u4f7f\u7528\u7f13\u5b58"},"\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848\uff08\u63a8\u8350\u4f7f\u7528\u7f13\u5b58\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const cache = true;\nconst app = await Garfish.loadApp('appName', {\n  domGetter: () => document.getElementById('id'),\n});\n\n// \u6e32\u67d3\nif (cache && app.mounted) {\n  const success = app.show();\n} else {\n  const success = await app.mount();\n}\n// \u5378\u8f7d\nconst success = app.hide();\n")),(0,r.kt)("h3",{id:"appmount-\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5"},"app.mount \u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"li"},"app")," \u5bb9\u5668\u5e76\u6dfb\u52a0\u5230\u6587\u6863\u6d41\u4e0a"),(0,r.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u5b50\u5e94\u7528\u7684\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ol"},"\u62ff\u5230\u5b50\u5e94\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"provider")),(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"app.options.beforeMount")," \u94a9\u5b50"),(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"provider.render")),(0,r.kt)("li",{parentName:"ol"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"app.display")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"app.mounted")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ol"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"app")," set \u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"Garfish.activeApps")," \u4e2d"),(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"app.options.afterMount")," \u94a9\u5b50",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6e32\u67d3\u5931\u8d25\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"app.mount")," \u4f1a\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5426\u5219\u6e32\u67d3\u6210\u529f\u4f1a\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u8fd4\u56de\u503c\u505a\u5bf9\u5e94\u7684\u5904\u7406\u3002")))),(0,r.kt)("h3",{id:"appunmount-\u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6"},"app.unmount \u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"app.options.beforeUnmount")," \u94a9\u5b50"),(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"provider.destroy")),(0,r.kt)("li",{parentName:"ol"},"\u6e05\u9664\u7f16\u8bd1\u7684\u526f\u4f5c\u7528"),(0,r.kt)("li",{parentName:"ol"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"app")," \u7684\u5bb9\u5668\u4ece\u6587\u6863\u6d41\u4e0a\u79fb\u9664"),(0,r.kt)("li",{parentName:"ol"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"app.display")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"app.mounted")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Garfish.activeApps")," \u4e2d\u79fb\u9664\u5f53\u524d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"app")," \u5b9e\u4f8b"),(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"app.options.afterUnmount")," \u94a9\u5b50",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u540c\u4e0a\uff0c\u53ef\u4ee5\u6839\u636e\u8fd4\u56de\u503c\u6765\u5224\u65ad\u662f\u5426\u5378\u8f7d\u6210\u529f\u3002")))),(0,r.kt)("h3",{id:"appshow-\u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6"},"app.show \u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"app")," \u7684\u5bb9\u5668\u6dfb\u52a0\u5230\u6587\u6863\u6d41\u4e0a"),(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"provider.render")),(0,r.kt)("li",{parentName:"ol"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"app.display")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u540c\u4e0a\uff0c\u53ef\u4ee5\u6839\u636e\u8fd4\u56de\u503c\u6765\u5224\u65ad\u662f\u5426\u6e32\u67d3\u6210\u529f\u3002")))),(0,r.kt)("h3",{id:"apphide-\u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6"},"app.hide \u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"provider.destroy")),(0,r.kt)("li",{parentName:"ol"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"app")," \u7684\u5bb9\u5668\u4ece\u6587\u6863\u6d41\u4e0a\u79fb\u9664"),(0,r.kt)("li",{parentName:"ol"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"app.display")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u540c\u4e0a\uff0c\u53ef\u4ee5\u6839\u636e\u8fd4\u56de\u503c\u6765\u5224\u65ad\u662f\u5426\u9690\u85cf\u6210\u529f\u3002")))),(0,r.kt)("h3",{id:"\u7f13\u5b58"},"\u7f13\u5b58"),(0,r.kt)("p",null,"\u624b\u52a8\u52a0\u8f7d\u63d0\u4f9b\u7684\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"cache")," \u529f\u80fd\uff0c\u4ee5\u4fbf\u590d\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"app"),"\uff0c\u907f\u514d\u91cd\u590d\u7684\u7f16\u8bd1\u4ee3\u7801\u9020\u6210\u7684\u6027\u80fd\u6d6a\u8d39\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Garfish.loadApp")," \u65f6\uff0c\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"cache")," \u53c2\u6570\u5c31\u53ef\u4ee5\u3002"),(0,r.kt)("p",null,"\b \u4f8b\u5982\u4e0b\u9762\u7684\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const app1 = await Garfish.loadApp('appName', {\n  cache: true,\n});\n\nconst app2 = await Garfish.loadApp('appName', {\n  cache: true,\n});\n\nconsole.log(app1 === app2); // true\n")),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u5bf9\u4e8e\u52a0\u8f7d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"promise")," \u4e5f\u4f1a\u662f\u540c\u4e00\u4efd\uff0c\u4f8b\u5982\u4e0b\u9762\u7684 demo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const promise1 = Garfish.loadApp('appName', {\n  cache: true,\n});\n\nconst promise2 = Garfish.loadApp('appName', {\n  cache: true,\n});\n\nconsole.log(promise1 === promise2); // true\n\nconst app1 = await promise1;\nconst app2 = await promise2;\nconsole.log(app1 === app2); // true\n")))}k.isMDXComponent=!0}}]);