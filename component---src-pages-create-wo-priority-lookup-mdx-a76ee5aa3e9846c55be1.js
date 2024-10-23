"use strict";(self.webpackChunkmas_playbook=self.webpackChunkmas_playbook||[]).push([[97],{3624:function(e,t,a){a.d(t,{Z:function(){return x}});var i=a(7294),r=a(8650),o=a.n(r),n=a(1597),l=a(811),s=a(87),d=a(5900),u=a.n(d),m=function(e){var t,a=e.title,r=e.theme,o=e.tabs,n=void 0===o?[]:o;return i.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=n.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},i.createElement("div",{className:"bx--grid"},i.createElement("div",{className:"bx--row"},i.createElement("div",{className:"bx--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},c=function(e){var t=e.relativePagePath,a=e.repository,r=(0,n.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||r,l=o.baseUrl,s=o.subDirectory,d=l+"/edit/"+o.branch+s+"/src/pages"+t;return l?i.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},i.createElement("div",{className:"bx--col"},i.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},p=a(4703),g=a(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,l=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),s=a===l,d=new RegExp(l+"/?(#.*)?$"),m=r.replace(d,a);return i.createElement("li",{key:e,className:u()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},i.createElement(n.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},i.createElement("div",{className:"bx--grid"},i.createElement("div",{className:"bx--row"},i.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},i.createElement("nav",{"aria-label":t},i.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(i.Component),h=b,k=a(7296),y=a(5387),f=a(3732),w=function(e){var t=e.date,a=new Date(t);return t?i.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},i.createElement(f.sg,null,i.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},x=function(e){var t=e.pageContext,a=e.children,r=e.location,d=e.Title,u=t.frontmatter,g=void 0===u?{}:u,b=t.relativePagePath,f=t.titleType,x=g.tabs,v=g.title,P=g.theme,E=g.description,A=g.keywords,N=g.date,T=(0,y.Z)().interiorTheme,D=(0,n.useStaticQuery)("2456312558").site.pathPrefix,C=D?r.pathname.replace(D,""):r.pathname,I=x?C.split("/").filter(Boolean).slice(-1)[0]||o()(x[0],{lower:!0}):"",q=P||T;return i.createElement(s.Z,{tabs:x,homepage:!1,theme:q,pageTitle:v,pageDescription:E,pageKeywords:A,titleType:f},i.createElement(m,{title:d?i.createElement(d,null):v,label:"label",tabs:x,theme:q}),x&&i.createElement(h,{title:v,slug:C,tabs:x,currentTab:I}),i.createElement(k.Z,{padded:!0},a,i.createElement(c,{relativePagePath:b}),i.createElement(w,{date:N})),i.createElement(p.Z,{pageContext:t,location:r,slug:C,tabs:x,currentTab:I}),i.createElement(l.Z,null))}},2677:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return u}});var i=a(3366),r=(a(7294),a(4983)),o=a(3624),n=["components"],l={},s={_frontmatter:l},d=o.Z;function u(e){var t=e.components,a=(0,i.Z)(e,n);return(0,r.kt)(d,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"About this task"),(0,r.kt)("p",null,"This guide instructs on how to add new priority domain to the system and use it to prioritize work orders."),(0,r.kt)("h2",null,"Procedure"),(0,r.kt)("h3",null,"Step 1: Create a query for the MXAPINUMERICDOMAIN object structure in Object Structures, click on Query Definition, add a new line where Query Type = osclause, Query Name=TRGPRIORITY and set the query= domainid=‘TRG_PRIORITY’."),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"382px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKUlEQVQoz12S6U/bQBDF/df3QBC1CFqpgrbQT1WlikKViACx43sPJxA7R5uE8gVEDieOQwkh2K/adVMVRvpp1jt+zzueVUqaia1PBeTefsHz3Du8eLWNZzJvYW1zB2ubu1jd2JHr3JtdmV++3sbqxkdZE6ysv8fK+ge5VhijoMSCaxsgjg3OCCqcIqidolH3HxPUUDurZnX/DM26j2YjwGmF47TqyWdF13WUSirKui4xTBOO68J1XRBKQUgGpRSO40LTyiiXy3BdIvcs24aqaRA+lDIopmlC0zTYtv1XTCTCUAgYY48Qe0v+3xMazjkU23HkF4WxKHDuyZdarRb6/T6Gw+EjoihCHMeYTqdotX5Ijed5Es4ZFMPQoWkqVFWVxpZlwTQMdDod9Hp9XF1dYjQaI5pMEIYhBoMBwtEIt7M52u22bFV0Z1u2PIiynz/G3kEexZMS8odHyBeP8fXbPn6eX+A6jNC+GGI4meFmvsD45ha9cIww/o3bRYKg3sD3wiEKRydQdROMcSif90oolkxwj4NyD4QyGKaF6+sr3EwjDIYx7u7usVgIFnh4eECSJBDR6XbhiOFwD5Tx7B96HkOlkvXPGYPHOTijqDXOcdmLgXQhxWmaSpI0xTK63S4IcTMN51nL5MkkRYFSgqD5C+P4XgqTJP1nKCKMZhhN5tJQ3IalGRMnzCbLnxgy+LUztJoN+L6PIAgkvh+gXg9AWBU2qcrJLjXL/AfUqvDKiWejGgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Query Definition",title:"Query Definition",src:"/maximo-restapi-documentation/static/db0749f8c24309bd32555413d8a618a3/f8069/query-definition.png",srcSet:["/maximo-restapi-documentation/static/db0749f8c24309bd32555413d8a618a3/7fc1e/query-definition.png 288w","/maximo-restapi-documentation/static/db0749f8c24309bd32555413d8a618a3/f8069/query-definition.png 382w"],sizes:"(max-width: 382px) 100vw, 382px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,r.kt)("h3",null,"Step 2: Create a datasource, within the scope of the application, to receive the data from the query created above. Search for “Maximo Datasources” in the xml and add the datasource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<maximo-datasource id="trg_WoPrioritylookupDS" lookup-data="true" object-structure="mxapinumericdomain" offline-immediate-download="true" saved-query="TRGPRIORITY" selection-mode="single">\n    <schema id="trg_p45xd">\n      <attribute name="value" unique-id="true" id="trg_ej7z_"/>\n      <attribute name="valueid" id="trg_d899w"/>\n      <attribute name="description" id="trg_r5v9p"/>\n      <attribute name="domainid" searchable="true" id="trg_rawkp"/>\n      <attribute name="siteid" id="trg_d4w_g"/>\n      <attribute name="orgid" id="trg_qqny3"/>\n    </schema>\n  </maximo-datasource>\n')),(0,r.kt)("h3",null,"Step 3: Create a domain with the name “TRG_PRIORITY” and associate it with the datasource created “trg_WoPrioritylookupDS” in the app.xml, it must be placed before id=“synonymdomainData”. Search for id=“trg_WoPrioritylookupDS” and add the dialog."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The order matters. The datasource referenced in the lookup should be declared before using it.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'  <dialogs id="applookups">\n    <lookup id="trg_woPriorityLookup" datasource="trg_WoPrioritylookupDS" lookup-attributes="{[\'value\',\'description\']}" search-placeholder="Search WO Priority"/>\n  </dialogs>\n')),(0,r.kt)("h3",null,"Step 4: Associate the lookup with the controllers. The controllers in this case are two smart -inputs with identification yqkzy (woedit page) and j8265 (createwo page). Locate the tag of the related IDs and add the following attributes: enable-lookup-buttongroup=“true”, input-kind=“ALN”, lookup=“woPriorityLookup” and select-lookup-attribute=“value”"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'    <smart-input label="Priority" hide-step-buttons="true" placeholder="Enter {page.state.minPriority} to {page.state.maxPriority}" value="{dsWoedit.item.wopriority}" on-blur="validateFields" min="{page.state.minPriority}" max="{page.state.maxPriority}" enable-lookup-buttongroup="true" input-kind="ALN" lookup="trg_woPriorityLookup" select-lookup-attribute="value" id="yqkzy"/>\n\n    <smart-input label="Priority" hide-step-buttons="true" placeholder="Enter {page.state.minPriority} to {page.state.maxPriority}" value="{dsCreateWo.item.wopriority}" on-blur="validateFields" min="{page.state.minPriority}" max="{page.state.maxPriority}" id="j8265" enable-lookup-buttongroup="true" input-kind="ALN" lookup="trg_woPriorityLookup" select-lookup-attribute="value"/>\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-create-wo-priority-lookup-mdx-a76ee5aa3e9846c55be1.js.map