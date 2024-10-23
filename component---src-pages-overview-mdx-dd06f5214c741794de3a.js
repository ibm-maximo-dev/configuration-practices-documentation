"use strict";(self.webpackChunkmas_playbook=self.webpackChunkmas_playbook||[]).push([[749],{3624:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),i=a(8650),o=a.n(i),l=a(1597),r=a(811),s=a(87),c=a(5900),d=a.n(c),u=function(e){var t,a=e.title,i=e.theme,o=e.tabs,l=void 0===o?[]:o;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=l.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===i,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,i=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||i,r=o.baseUrl,s=o.subDirectory,c=r+"/edit/"+o.branch+s+"/src/pages"+t;return r?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4703),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,r=i.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),s=a===r,c=new RegExp(r+"/?(#.*)?$"),u=i.replace(c,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),b=h,f=a(7296),k=a(5387),E=a(3732),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(E.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(E.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,i=e.location,c=e.Title,d=t.frontmatter,g=void 0===d?{}:d,h=t.relativePagePath,E=t.titleType,w=g.tabs,x=g.title,y=g.theme,N=g.description,P=g.keywords,T=g.date,M=(0,k.Z)().interiorTheme,C=(0,l.useStaticQuery)("2456312558").site.pathPrefix,A=C?i.pathname.replace(C,""):i.pathname,F=w?A.split("/").filter(Boolean).slice(-1)[0]||o()(w[0],{lower:!0}):"",Z=y||M;return n.createElement(s.Z,{tabs:w,homepage:!1,theme:Z,pageTitle:x,pageDescription:N,pageKeywords:P,titleType:E},n.createElement(u,{title:c?n.createElement(c,null):x,label:"label",tabs:w,theme:Z}),w&&n.createElement(b,{title:x,slug:A,tabs:w,currentTab:F}),n.createElement(f.Z,{padded:!0},a,n.createElement(m,{relativePagePath:h}),n.createElement(v,{date:T})),n.createElement(p.Z,{pageContext:t,location:i,slug:A,tabs:w,currentTab:F}),n.createElement(r.Z,null))}},830:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return d}});var n=a(3366),i=(a(7294),a(4983)),o=a(3624),l=["components"],r={},s={_frontmatter:r},c=o.Z;function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"IBM’s Maximo Application Framework (MAF) supports the creation of Maximo Mobile and Role-based application within Manage."),(0,i.kt)("p",null,"The MAF Configuration application can be used by implementers to configure IBM-provided applications (or duplicates of those applications) that are built with the MAF. Other MAS applications, such as Health and Monitor, will provide MAF applications (now or in the future) that can also be configured using the MAF Configuration application."),(0,i.kt)("p",null,"In this document we provide a few examples of configuration that can be used, extended, adapted and combined to achieve the desired customization."),(0,i.kt)("p",null,"The guide is separeted in two sections: ",(0,i.kt)("strong",{parentName:"p"},"Simple")," and ",(0,i.kt)("strong",{parentName:"p"},"Complex")," practices. For simple ones it is expected to get references about adding attributes in a card, updating saved queries used in a lookup. For complex section, we dissect customizations combining different lifecycle events with new methods to meet the conditions proposed in the configuration criteria."),(0,i.kt)("h1",null,"General tips"),(0,i.kt)("h2",null,"Ideas"),(0,i.kt)("p",null,"Often times a customization won’t be possible due to limitations of the framework or maybe processes not exposed. Instead of a bug an idea should be issued through ",(0,i.kt)("a",{href:"https://www.ibm.com/support/pages/node/6438917",target:"_blank"},"Ideas Portal"),"."),(0,i.kt)("h2",null,"Order"),(0,i.kt)("p",null,"The order to place the XML tags is important. Although it is a markup language the build process take into consideration the order it is declared along the file."),(0,i.kt)("h2",null,"Logs"),(0,i.kt)("p",null,"One way to track progress during customization is using logs. Creating a tag prefix to use building the configurations associated with log API available in Graphite helps identify all paths the code can take."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Tag for log (to be add at the first line of the file)\nconst TAG = '***Custom***';\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-mdx-dd06f5214c741794de3a.js.map