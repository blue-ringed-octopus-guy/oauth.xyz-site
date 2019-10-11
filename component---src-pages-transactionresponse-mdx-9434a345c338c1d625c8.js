(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{153:function(e,t,n){"use strict";n.r(t);n(56);var a=n(77),o=n.n(a),s=n(7),r=n.n(s),i=n(0),c=n.n(i),l=n(163),m=n(158),h=n(155),d=n(11),p=n.n(d),u=(n(79),n(58),n(36),n(185),n(162)),f=n(207),g=n(209),y=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).interactionValues={label:"Next Step",redirect:{interaction_url:"https://server.example.com/interact/4CF492MLVMSW9MKMXKHQ",server_nonce:"MBDOFXG4Y5CVJCX821LH"},user_code:{user_code:{url:"https://server.example.com/interact/device",code:"A1BC-3DFF"}},both:{interaction_url:"https://server.example.com/interact/4CF492MLVMSW9MKMXKHQ",server_nonce:"MBDOFXG4Y5CVJCX821LH",user_code:{url:"https://server.example.com/interact/device",code:"A1BC-3DFF"}},didcomm:{didcomm:{"...":"..."}},wait:{wait:30},access_token:{access_token:{value:"OS9M2PMHKUR64TB8N6BW7OZB8CDFONP219RP1LT0",type:"bearer"}}},t.codeValues={handle:{label:"Transaction Handle",on:{value:"80UPRY5NM33OMUKMKSKU",type:"bearer"}},display_handle:{label:"Display Handle",on:{value:"VBUEOIQA82PBY2ZDJW7Q",type:"bearer"}},user_handle:{label:"User Handle",on:{value:"XUT2MFM1XBIKJKSDU8QM",type:"bearer"}},resources_handle:{label:"Resources Handle",on:{value:"KLKP36N7GPOKRF3KGH5N",type:"bearer"}},key_handle:{label:"Key Handle",on:{value:"7C7C4AZ9KHRS6X63AJAO",type:"bearer"}},capabilities:{label:"Capabilities",on:["mtls","jwsd"]}},t.state={selected:{handle:"on",interaction:"redirect",display_handle:"off",resources_handle:"off",key_handle:"on",user_handle:"off",capabilities:"off"}},t.change=function(e){return function(n){var a=t.state.selected;a[e]=n,"handle"===e&&"off"===n&&(a.interaction="access_token"),"interaction"===e&&"access_token"!==n&&(a.handle="on"),t.setState({selected:a})}},t.render=function(){var e=Object.keys(t.codeValues).reduce(function(e,n){return e[n]=t.codeValues[n][t.state.selected[n]],e},{}),n=t.interactionValues[t.state.selected.interaction],a=p()({},n,e),o=[c.a.createElement(f.a,{onChange:t.change("interaction"),label:t.interactionValues.label,selected:t.state.selected.interaction,options:{redirect:"Redirect",user_code:"User Code",both:"Both",didcomm:"DIDComm",wait:"Wait",access_token:"Token"}})].concat(Object.keys(t.codeValues).map(function(e){return c.a.createElement(f.a,{onChange:t.change(e),label:t.codeValues[e].label,selected:t.state.selected[e]})}));return c.a.createElement("div",null,c.a.createElement(g.a,null,o),c.a.createElement(u.a,{from:"as",to:"client",code:a}))},t}return r()(t,e),t}(c.a.Component),b=n(157);n.d(t,"default",function(){return M}),n.d(t,"_frontmatter",function(){return E});var T={},M=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=m.a,n}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return c.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},T,n),components:t},c.a.createElement(b.a,{title:"Transaction Response",keywords:["oauth","authorization","security"]}),c.a.createElement(l.MDXTag,{name:"h1",components:t},"Transaction Response"),c.a.createElement(l.MDXTag,{name:"p",components:t},"The response from the transaction endpoint tells the client what it needs to do next, including if it needs to ",c.a.createElement(h.a,{to:"/interaction"},"interact with the user")," and any ",c.a.createElement(h.a,{to:"/tokens"},"tokens that have been issued"),". "),c.a.createElement(l.MDXTag,{name:"p",components:t},"If the transaction can be continued by the client, the AS includes a transaction handle in the response as well. This handle is used by the client for any subsequent references to this transaction. "),c.a.createElement(l.MDXTag,{name:"p",components:t},"The response can also include handles that the client can use in future transactions in lieu of any of the request sections."),c.a.createElement(y,null),c.a.createElement(l.MDXTag,{name:"p",components:t},"Each of these sections is detailed below."),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Next action"),c.a.createElement(l.MDXTag,{name:"p",components:t},"Foremost, the AS needs to tell the client what to do next. This may be getting the user to ",c.a.createElement(h.a,{to:"/interaction"},"interact with the AS directly"),", waiting until polling again, or heading to the resource server to ",c.a.createElement(h.a,{to:"/tokens"},"use the token"),". "),c.a.createElement(l.MDXTag,{name:"p",components:t},"Both the interaction and poll-wait style responses require the transaction handle, below. If a transaction handle is included with the access token response, the client can use this handle to get a new access token in the event the first one expires or is revoked, so long as the trnasaction handle is still valid. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Transaction Handle"),c.a.createElement(l.MDXTag,{name:"p",components:t},"This ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"handle")," is used by the client to continue the transaction from its previous state. The value returned by the AS is unique, random, and not reused by the AS. That is to say, an ongoing transaction will be represented by a single handle at a given time, and that handle will change over time. This is used in the ",c.a.createElement(h.a,{to:"/transactionrequest"},"transaction continuation request"),". "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Display Handle"),c.a.createElement(l.MDXTag,{name:"p",components:t},"If a ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"display_handle")," is returned by the AS, the client can use this handle in lieu of the information sent in the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"display")," block in the request for future transactions. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Interact Handle"),c.a.createElement(l.MDXTag,{name:"p",components:t},"If an ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"interact_handle")," is returned by the AS, the client can use this handle in lieu of the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"interact")," portion of the transaction request in future transactions. However, for a redirect based interaction, as this section includes the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"state")," value which is supposed to be unguessable and unique per transaction, this response doesn't make sense in such cases."),c.a.createElement(l.MDXTag,{name:"h2",components:t},"User Handle"),c.a.createElement(l.MDXTag,{name:"p",components:t},"If a ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"user_handle")," is returned by the AS, the client can use this handle in lieu of the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"user")," portion of the transaction request to represent the same user in future requests, akin to UMA 2's PCT."),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Resource Handle"),c.a.createElement(l.MDXTag,{name:"p",components:t},"If a ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"resource_handle")," is returned by the AS, the client can use this handle in lieu of the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"resource")," portions of the transaction request to request the same set of resources in a future transaction. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Key Handle"),c.a.createElement(l.MDXTag,{name:"p",components:t},"If a ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"key_handle")," is returned by the AS, the client can use this handle in lieu of the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"key")," section of the transaction request to reference the same key presented and proved by the client in this transaction. When presenting such key handles in a future request, the client must still ",c.a.createElement(h.a,{to:"/keys"},"bind the request to the referenced key"),"."),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Capabilities"),c.a.createElement(l.MDXTag,{name:"p",components:t},"If a ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"capabilities")," section is sent by the client, the AS parses it and returns an array of all the capabilities that this AS can support for this transaction. This allows the client to dynamically self-configure for the transaction. "),c.a.createElement(l.MDXTag,{name:"blockquote",components:t},c.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"blockquote"},"This piece is effectively a discovery response, but tied directly to the transaction endpoint. This means the client knows the AS as only its transaction endpoint URL and can get everything else it needs from there. ")))},t}(c.a.Component),E={}}}]);
//# sourceMappingURL=component---src-pages-transactionresponse-mdx-9434a345c338c1d625c8.js.map