(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m}),n.d(t,"_frontmatter",function(){return y});n(56);var a=n(77),r=n.n(a),i=n(7),o=n.n(i),s=n(0),c=n.n(s),u=n(162),l=n(159),d=n(157),p={},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=r()(e,["components"]);return c.a.createElement(u.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},c.a.createElement(d.a,{title:"404: Not found"}),c.a.createElement(u.MDXTag,{name:"h1",components:t},"NOT FOUND"),c.a.createElement(u.MDXTag,{name:"p",components:t},"You just hit a route that doesn't exist... the sadness."))},t}(c.a.Component),y={}},153:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(35),c=n.n(s);n.d(t,"a",function(){return c.a});n(154);var u=r.a.createContext({}),l=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(e,t,n){var a;e.exports=(a=n(156))&&a.default||a},155:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz"}}}}},156:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),i=n(0),o=n.n(i),s=n(4),c=n.n(s),u=n(57),l=n(2),d=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?o.a.createElement(u.a,r()({location:t,pageResources:n},n.json)):null};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=d},157:function(e,t,n){"use strict";var a=n(158),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(167),u=n.n(c),l=n(153);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(l.b,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var p="1025518380"},158:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz",description:"A new authorization protocol based on concepts from OAuth2 and its extensions.",author:"@jricher"}}}}},159:function(e,t,n){"use strict";var a=n(155),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(153),u=(n(163),n(164),[{name:"Request",link:"/transactionrequest/"},{name:"Interaction",link:"/interaction/"},{name:"Keys",link:"/keys/"},{name:"Tokens",link:"/tokens/"},{name:"About",link:"/about/"}]),l=function(e){var t=e.siteTitle;e.currentPage;return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement("nav",{style:{display:"flex",flex:1}},u.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement(c.a,{to:e.link},e.name))}))))};l.propTypes={siteTitle:s.a.string},l.defaultProps={siteTitle:""};var d=l,p=(n(165),n(166),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});p.propTypes={children:s.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-404-mdx-54e5da8efe3f6d710c8e.js.map