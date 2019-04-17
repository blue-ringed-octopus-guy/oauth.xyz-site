(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f}),n.d(t,"_frontmatter",function(){return m});n(56);var r=n(77),a=n.n(r),o=n(7),i=n.n(o),u=n(0),c=n.n(u),s=n(161),l=n(160),p=n(158),d={},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=a()(e,["components"]);return c.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},d,n),components:t},c.a.createElement(p.a,{title:"Tokens",keywords:["oauth","authorization","security"]}),c.a.createElement(s.MDXTag,{name:"h1",components:t},"Tokens"))},t}(c.a.Component),m={}},153:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),u=n(35),c=n.n(u);n.d(t,"a",function(){return c.a});n(154);var s=a.a.createContext({}),l=function(e){return a.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,t,n){var r;e.exports=(r=n(157))&&r.default||r},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0),i=(r=o)&&r.__esModule?r:{default:r};var u=i.default.createContext({}),c=u.Provider,s=u.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return i.default.createElement(s,null,function(t){return i.default.createElement(e,a({components:n||t},r))})}};t.default=function(e){var t=e.components,n=e.children;return i.default.createElement(c,{value:t},n)}},156:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz"}}}}},157:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n.n(r),o=n(0),i=n.n(o),u=n(4),c=n.n(u),s=n(57),l=n(2),p=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(s.a,a()({location:t,pageResources:n},n.json)):null};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=p},158:function(e,t,n){"use strict";var r=n(159),a=n(0),o=n.n(a),i=n(4),u=n.n(i),c=n(168),s=n.n(c),l=n(153);function p(e){var t=e.description,n=e.lang,a=e.meta,i=e.keywords,u=e.title;return o.a.createElement(l.b,{query:d,render:function(e){var r=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:u},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:r}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})},data:r})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},t.a=p;var d="1025518380"},159:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz",description:"A new authorization protocol based on concepts from OAuth2 and its extensions.",author:"@jricher"}}}}},160:function(e,t,n){"use strict";var r=n(156),a=n(0),o=n.n(a),i=n(4),u=n.n(i),c=n(153),s=(n(164),n(165),[{name:"Request",link:"/transactionrequest/"},{name:"Interaction",link:"/interaction/"},{name:"Keys",link:"/keys/"},{name:"Tokens",link:"/tokens/"},{name:"About",link:"/about/"}]),l=function(e){var t=e.siteTitle;e.currentPage;return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),o.a.createElement("nav",{style:{display:"flex",flex:1}},s.map(function(e){return o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.link},e.name))}))))};l.propTypes={siteTitle:u.a.string},l.defaultProps={siteTitle:""};var p=l,d=(n(166),n(167),function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:r})});d.propTypes={children:u.a.node.isRequired};t.a=d},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(162);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var a=n(155);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(a).default}})},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),u=(r=i)&&r.__esModule?r:{default:r},c=n(155);var s={inlineCode:"code",wrapper:"div"},l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,o=void 0===r?{}:r,i=e.children,c=e.components,l=void 0===c?{}:c,p=e.Layout,d=e.layoutProps,f=l[n+"."+t]||l[t]||s[t]||t;return p?u.default.createElement(p,a({components:l},d),u.default.createElement(f,o,i)):u.default.createElement(f,o,i)}}]),t}();t.default=(0,c.withMDXComponents)(l)}}]);
//# sourceMappingURL=component---src-pages-tokens-mdx-e985cfd4e9198c487e8d.js.map