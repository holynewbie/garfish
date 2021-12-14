"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[108],{8017:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return l}});var n=r(1513),o=r(1275),a=(r(7711),r(4635)),s=["components"],i={title:"props",slug:"/api/attributes/props",order:2},p=void 0,u={unversionedId:"api/attributes/props",id:"api/attributes/props",isDocsHomePage:!1,title:"props",description:"Garfish.props \u7528\u4e8e\u83b7\u53d6\u4e3b\u5e94\u7528\u4f20\u9012\u8fc7\u6765\u7684\u516c\u5171\u5185\u5bb9\uff0c\u7528\u8d77\u5171\u4eab\u6570\u636e\uff0c\u6216\u4f20\u9012\u6307\u5b9a\u5185\u5bb9\u7ed9\u5b50\u5e94\u7528\u3002\u53ef\u4e0e mobx \u642d\u914d\u4f7f\u7528\u3002",source:"@site/docs/api/attributes/props.md",sourceDirName:"api/attributes",slug:"/api/attributes/props",permalink:"/api/attributes/props",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/api/attributes/props.md",tags:[],version:"current",lastUpdatedBy:"zhouxiao",lastUpdatedAt:1639467965,formattedLastUpdatedAt:"2021/12/14",frontMatter:{title:"props",slug:"/api/attributes/props",order:2},sidebar:"api",previous:{title:"run",permalink:"/api/new"},next:{title:"router",permalink:"/api/attributes/router"}},d=[{value:"\u4e3b\u5e94\u7528\u5171\u4eab\u6570\u636e",id:"\u4e3b\u5e94\u7528\u5171\u4eab\u6570\u636e",children:[],level:3},{value:"\u5b50\u5e94\u7528\u83b7\u53d6\u6570\u636e",id:"\u5b50\u5e94\u7528\u83b7\u53d6\u6570\u636e",children:[],level:3},{value:"\u6216\u8005\u5728 provider \u4e2d\u83b7\u53d6",id:"\u6216\u8005\u5728-provider-\u4e2d\u83b7\u53d6",children:[],level:3}],c={toc:d};function l(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Garfish.props")," \u7528\u4e8e\u83b7\u53d6\u4e3b\u5e94\u7528\u4f20\u9012\u8fc7\u6765\u7684\u516c\u5171\u5185\u5bb9\uff0c\u7528\u8d77\u5171\u4eab\u6570\u636e\uff0c\u6216\u4f20\u9012\u6307\u5b9a\u5185\u5bb9\u7ed9\u5b50\u5e94\u7528\u3002\u53ef\u4e0e ",(0,a.kt)("a",{parentName:"p",href:"https://cn.mobx.js.org"},"mobx")," \u642d\u914d\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"\u4e3b\u5e94\u7528\u5171\u4eab\u6570\u636e"},"\u4e3b\u5e94\u7528\u5171\u4eab\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Garfish from '@byted/garfish';\nimport { observable, computed, action } from 'mobx';\n\nclass Store {\n  @observable price = 0;\n  @observable amount = 1;\n\n  @computed get total() {\n    return this.price * this.amount;\n  }\n\n  @action.bound\n  increment() {\n    this.amount++;\n  }\n}\n\nGarfish.run({\n  basename: basePath,\n  domGetter: '#subModule',\n  apps,\n  props: {\n    store: new Store(),\n  },\n});\n")),(0,a.kt)("h3",{id:"\u5b50\u5e94\u7528\u83b7\u53d6\u6570\u636e"},"\u5b50\u5e94\u7528\u83b7\u53d6\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const store = window.Garfish.props.store;\nconst price = store.price;\nconst amount = store.amount;\nstore.increment();\n")),(0,a.kt)("h3",{id:"\u6216\u8005\u5728-provider-\u4e2d\u83b7\u53d6"},"\u6216\u8005\u5728 provider \u4e2d\u83b7\u53d6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export function provider({ dom, basename, store }) {\n  return {\n    render() {},\n    destroy() {},\n  };\n}\n")))}l.isMDXComponent=!0}}]);