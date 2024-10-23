"use strict";(self.webpackChunkmas_playbook=self.webpackChunkmas_playbook||[]).push([[753],{3624:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(7294),o=a(8650),r=a.n(o),i=a(1597),l=a(811),s=a(87),c=a(5900),m=a.n(c),d=function(e){var t,a=e.title,o=e.theme,r=e.tabs,i=void 0===r?[]:r;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,o=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||o,l=r.baseUrl,s=r.subDirectory,c=l+"/edit/"+r.branch+s+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(4703),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,l=o.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),s=a===l,c=new RegExp(l+"/?(#.*)?$"),d=o.replace(c,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),f=g,k=a(7296),w=a(5387),b=a(3732),y=function(e){var t=e.date,a=new Date(t);return t?n.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(b.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},E=function(e){var t=e.pageContext,a=e.children,o=e.location,c=e.Title,m=t.frontmatter,h=void 0===m?{}:m,g=t.relativePagePath,b=t.titleType,E=h.tabs,v=h.title,P=h.theme,x=h.description,N=h.keywords,D=h.date,T=(0,w.Z)().interiorTheme,L=(0,i.useStaticQuery)("2456312558").site.pathPrefix,S=L?o.pathname.replace(L,""):o.pathname,C=E?S.split("/").filter(Boolean).slice(-1)[0]||r()(E[0],{lower:!0}):"",Z=P||T;return n.createElement(s.Z,{tabs:E,homepage:!1,theme:Z,pageTitle:v,pageDescription:x,pageKeywords:N,titleType:b},n.createElement(d,{title:c?n.createElement(c,null):v,label:"label",tabs:E,theme:Z}),E&&n.createElement(f,{title:v,slug:S,tabs:E,currentTab:C}),n.createElement(k.Z,{padded:!0},a,n.createElement(p,{relativePagePath:g}),n.createElement(y,{date:D})),n.createElement(u.Z,{pageContext:t,location:o,slug:S,tabs:E,currentTab:C}),n.createElement(l.Z,null))}},4761:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return m}});var n=a(3366),o=(a(7294),a(4983)),r=a(3624),i=["components"],l={},s={_frontmatter:l},c=r.Z;function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",null,"About this task"),(0,o.kt)("p",null,"This guide instructs on how to add new priority domain to the system and use it to prioritize work orders. It also describes how to\nimplement a condition to remove the Priority 5 option from the lookup when creating and editing work orders if their work types\nare other than preventive maintenance (PM)"),(0,o.kt)("h2",null,"Procedure"),(0,o.kt)("h3",null,"Step 1: Follow the practice below to create a query, create a datasource to load the data and declare a new lookup."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/maximo-restapi-documentation/create-wo-priority-lookup"},"Create Priority Lookup in Techmobile")),(0,o.kt)("h3",null,"Step 2: Declare the dialogOpened method to handle the window opening event. The code inside the method should contain the verification of the name of the dialog that was opened, the existence of the datasource and the confirmation of the current page before executing the filter. Insert the following logic in the method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    dialogOpened({dialog}) {\n        // page name when dialog is open\n        this.app.log.d(TAG,`dialog ${dialog?.name} opened at ${this.app.currentPage.name} page`);\n\n        if (dialog?.name === 'trg_woPriorityLookup' && ['woedit'].some(page => page === this.app.currentPage.name)) {\n\n            // Check status domain datasource existence\n            const priorityLookupDS = this.app.findDatasource('trg_WoPrioritylookupDS');\n            if (!priorityLookupDS) {\n                this.app.log.e(TAG,'priorityLookupDS unknown to perform filter');\n                return;\n            }\n\n            // Check ds initialization\n            const currentWO = this.app.findDatasource(\"woDetailResource\");\n            if (!currentWO || !currentWO.initialized) {\n                this.app.log.e(TAG,'woDetailResource not initialized');\n                return;\n            }\n\n            const workItem = currentWO?.item;\n\n            // show Priority 5 option in the list when work order type is PM, otherwise we hide it.\n            if (!['PM'].includes(workItem.worktype)) {\n                // Remove priority 5 temporarily from priority domain \n                priorityLookupDS.applyInMemoryFilter((item) => item.value !== 5);\n                priorityLookupDS.load();\n            } else {\n                // Reset temporarily filter from status domain\n                priorityLookupDS.clearInMemoryFilter();\n            }\n        }\n    }\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-restrict-wo-priority-based-on-work-type-mdx-392c0ddaa907d350008b.js.map