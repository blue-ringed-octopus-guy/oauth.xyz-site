(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{474:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l})),n.d(t,"_frontmatter",(function(){return m}));n(7),n(6),n(4),n(8);var a=n(0),o=n.n(a),r=n(466),i=n(468),s=n(469),c=n(467);var l=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).layout=i.a,n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:n,components:t},o.a.createElement(c.a,{title:"Interaction",keywords:["oauth","authorization","security"]}),o.a.createElement(r.MDXTag,{name:"h1",components:t},"Interaction"),o.a.createElement(r.MDXTag,{name:"p",components:t},"During a transaction, the AS will often require interaction from a user. This user can be the same person running the client software, or it could be another party who's not necessarily available. In the transaction request, the client tells the AS how it is able to interact with the user. Several modes of interaction are defined, and a client can support multiple forms of interaction simultaneously."),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"redirect")," mode is used when the client is capable of opening a browser on the same device for the user to interact with the AS, or otherwise directing the user to an arbitrary URL."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"user_code")," mode is used when the client cannot open a browser for the user but can communicate an out-of-band code for the user to provide to the AS."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"didcomm")," mode is used when the client can relay a DIDComm message to the user's Agent."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"dodcomm_query")," mode is used when the client can relay a query to a DIDComm Agent. ")),o.a.createElement(r.MDXTag,{name:"p",components:t},"In addition, the client can indicate how it can receive responses from the interaction request. Currently, there are two modes of getting a response:"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"The client can set a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"callback")," section including a URL that the AS can send the user back to when done interacting"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"The client can poll the AS using a transaction handle")),o.a.createElement(r.MDXTag,{name:"p",components:t},"These can be used independently of the interaction method, but it will likely be most common to use a callback with the redirect method, polling with the device method, and in limited cases polling with the redirect method. These combinations are shown here."),o.a.createElement(r.MDXTag,{name:"h2",components:t},"Redirect with Callback"),o.a.createElement(r.MDXTag,{name:"p",components:t},"In redirect based interaction, the client sends the user to an interactive page at the AS. The AS then sends the user back to the client with an HTTP redirect. "),o.a.createElement(r.MDXTag,{name:"p",components:t},"To use this mode, the client's transaction request includes a section that includes a URI the client can receive requests at as well as a unique state value. "),o.a.createElement(s.a,{from:"client",to:"as",code:{interact:{redirect:!0,callback:{uri:"https://client.foo",nonce:"VJLO6A4CAYLBXHTR0KRO"}}}}),o.a.createElement(r.MDXTag,{name:"p",components:t},"By default, the callback return will use a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"SHA3")," 512-bit hash. The client can choose a different hash algorithm by sending a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"hashMethod")," parameter. In this example, a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"SHA2")," 512-bit hash is requested. If the AS doesn't support the client's requested hash method, it returns an error."),o.a.createElement(s.a,{from:"client",to:"as",code:{interact:{redirect:!0,callback:{uri:"https://client.foo",nonce:"VJLO6A4CAYLBXHTR0KRO",hashMethod:"SHA2"}}}}),o.a.createElement(r.MDXTag,{name:"p",components:t},"The URI must be reachable from the user's system browser, and can be any ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"https")," URL, an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"http")," URL for a local-to-the-device host, or a service-specific URI that the user's browser can open. The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"nonce")," must be a unique value for each transaction and cannot be re-used. The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"nonce")," value is opaque to the AS and should be random. The client remembers this ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"nonce")," value and associates it with the current user. For a web server or other web application, this is generally done by placing it in the user's session. Native applications are generally considered single-user in nature, so the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"nonce")," value is remembered in the application's current state."),o.a.createElement(r.MDXTag,{name:"p",components:t},"When the AS determines that the client's request needs user interaction, it creates a unique interaction URL and returns it to the client in the transaction response. The AS associates this unique URI with the transaction. The interaction URI is for a user-facing page at the AS."),o.a.createElement(s.a,{from:"as",to:"client",code:{interaction_url:"https://server.example.com/interact/4CF492MLVMSW9MKMXKHQ",server_nonce:"MBDOFXG4Y5CVJCX821LH",handle:{value:"80UPRY5NM33OMUKMKSKU",type:"bearer"}}}),o.a.createElement(r.MDXTag,{name:"p",components:t},"Much like the callback URI, the interaction URI must be reachable from the user's system browser, and can be any ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"https")," URL, an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"http")," URL for a local-to-the-device host, or a service-specific URI that the user's browser can open."),o.a.createElement(r.MDXTag,{name:"p",components:t},"The client sends the user to the URL completely as-is, without adding any query parameters, fragments, paths, or other components. If the client is a web server, it can send the user to the remote site via an HTTP redirect."),o.a.createElement(s.a,{from:"client",to:"browser",language:"http",codeString:"HTTP 302 Found\nLocation: https://server.example.com/interact/4CF492MLVMSW9MKMXKHQ"}),o.a.createElement(r.MDXTag,{name:"p",components:t},"If the client is a mobile application, such as an Android app, it can launch the system browser for interaction."),o.a.createElement(s.a,{from:"client",to:"browser",language:"java",codeString:'Intent browserIntent = \n  new Intent(Intent.ACTION_VIEW, \n    Uri.parse("https://server.example.com/interact/4CF492MLVMSW9MKMXKHQ"));\nstartActivity(browserIntent);'}),o.a.createElement(r.MDXTag,{name:"p",components:t},"Obviously, any method including an embedded security tab such as used by the AppAuth implementation of OAuth 2 is also acceptable. The important thing is to get the current user to the AS, where they can start interacting."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Once at the AS, the AS can ask the user for authentication, and to authorize the application itself. The AS could prompt the user to provide additional claims or proofs however it sees fit, and this interaction is ultimately outside of the protocol."),o.a.createElement(r.MDXTag,{name:"p",components:t},"When the AS has collected whatever input it needs from the user, it sends the user back to the client with an HTTP redirect. First, the AS creates a unique, unguessable interaction handle that the client can use in its subsequent interaction request. The AS also calculates a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"hash")," to allow the client to confirm the transaction by concatentating the following values with a newline ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"\n")," character and computing the hash based on the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"hashMethod")," in the client's initial transaction request (defaults to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"SHA3")," 512-bit):"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"nonce")," value sent by the client in the initial transaction request"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"server_nonce")," value returned in the initial transaction response"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"the unique interaction handle")),o.a.createElement(r.MDXTag,{name:"p",components:t},"The AS creates the URL for the redirect by taking the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"callback")," URI presented in the transaction request and appending two parameters: "),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"the Base64 URL encoded ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"hash")," value calculated above"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"a unique interaction handle, in this example ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"4IFWWIKYBC2PQ6U56NL1"))),o.a.createElement(s.a,{from:"as",to:"browser",language:"http",codeString:"HTTP 302 Found\nLocation: https://client.foo/\n  ?hash=p28jsq0Y2KK3WS__a42tavNC64ldGTBroywsWxT4md_jZQ1R2HZT8BOWYHcLmObM7XHPAdJzTZMtKBsaraJ64A\n  &interact=4IFWWIKYBC2PQ6U56NL1"}),o.a.createElement(r.MDXTag,{name:"p",components:t},"Note that the AS has to use a proper URL builder in case the client's callback URL contains existing query parameters, is lacking a root path, or has some other anomaly which would make it problematic to simply concatenate the strings."),o.a.createElement(r.MDXTag,{name:"blockquote",components:t},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"blockquote"},"This can't be a plain string concatenation because it would potentially let a malicious client inject a bad callback URI that looks safe. Alternatively we could use URI templates but that seems a lot of complexity to enforce with its own set of problems.")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Once the AS creates the redirect response to the interaction request, the AS deletes or otherwise deactivates the interaction URL to prevent phishing and replay attacks. "),o.a.createElement(r.MDXTag,{name:"p",components:t},"If the AS determines that there is an error during the interaction, its response depends on whether or not the incoming interaction URL was valid."),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"If the URL was valid and bound to an active transaction, the AS can return to the client as in a successful transaction. The client needs to send data to the transaction endpoint to determine next steps."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"If the URL was not valid or not bound to an active transaction, the AS can only display to the user an error. Since the client has no way to inject a redirect URI alongside an invalid interaction request, there is reduced risk of open redirection attack.")),o.a.createElement(r.MDXTag,{name:"p",components:t},"The client receives a request from the user's browser through the callback URL. If the client is a web server, this comes in as any other request. If the client is a native application, it usually receives the full URL from the system in whatever function it has registered to receive incoming requests. In any event, the client needs to parse the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"hash")," parameter and compare its value to a hash calculated by its originally chosen ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"nonce")," value, the server's returned ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"server_nonce")," value from the original transaction request, and the value of the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"interact")," reference parameter from the callback request, hashed using the client's chosen method from the initial transaction request (which defaults to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"SHA3")," 512 bit hash). If these hash values don't match the client returns an error to the user and stops the transaction. "),o.a.createElement(r.MDXTag,{name:"p",components:t},"The client then sends a transaction continue request to the AS including the interaction reference as a parameter. The client also includes the current value of the transaction handle (here as a bearer key) as well as any proofs for keys presented during the transaction start."),o.a.createElement(r.MDXTag,{name:"blockquote",components:t},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"blockquote"},"We could hash the interaction reference before sending it. It's still in the air whether this hashing is helpful to security or is an unnecessary step.")),o.a.createElement(s.a,{from:"client",to:"as",code:{handle:"80UPRY5NM33OMUKMKSKU",interact_ref:"4IFWWIKYBC2PQ6U56NL1"}}),o.a.createElement(r.MDXTag,{name:"p",components:t},"The AS looks up the transaction from the transaction handle and fetches the interaction reference associated with that transaction. The AS compares the presented reference to the stored interaction reference it appended to the client's callback with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"interact"),". If they match, the AS continues processing as normal, likely issuing a token."),o.a.createElement(r.MDXTag,{name:"h2",components:t},"User Code with Polling"),o.a.createElement(r.MDXTag,{name:"p",components:t},"The user-code-based interaction is intended for clients that need to have the user use a secondary device of some kind to interact with the authorization server. Unlike the redirect based interaction, the client does not send the user to the AS directly. Instead, the client presents the user with a code and instructs the user to interact with the server. Meanwhile, the client polls the AS in the background until the transaction is approved."),o.a.createElement(r.MDXTag,{name:"p",components:t},"The client starts this mode by sending a transaction request indicating that the user will interact with the AS through a secondary device. "),o.a.createElement(s.a,{from:"client",to:"as",code:{interact:{user_code:!0}}}),o.a.createElement(r.MDXTag,{name:"p",components:t},"When the AS determines that the client's request needs user interaction, it sends an interaction URI in the transaction response. The interaction URI is for a user-facing page at the AS, and this can be a static URI for this mode. The AS also includes a short user-facing code. This code must be random, short-lived, and easily typed by a user. It must be processed in a case-insensitive way, and should use characters that are unambiguous when displayed even at low resolution (e.g., not using both the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"0")," (zero) and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"O")," (letter O) characters as options)."),o.a.createElement(s.a,{from:"as",to:"client",code:{user_code:{url:"https://server.example.com/interact/device",code:"A1BC-3DFF"},handle:{value:"80UPRY5NM33OMUKMKSKU",type:"bearer"}}}),o.a.createElement(r.MDXTag,{name:"p",components:t},"The client presents the user code to the user. The client also indicates to the user that they need to go to the interaction URL. As this is likely to be a static URL, the AS can provide a static link to this page. "),o.a.createElement(r.MDXTag,{name:"p",components:t},"Once at the AS, the AS can ask the user for authentication, and to authorize the application itself. The AS could prompt the user to provide additional claims or proofs however it sees fit, and this interaction is ultimately outside of the protocol. At the interaction page, the user is prompted to enter the code from their device. The AS uses this code to look up the associated transaction to determine which actions it needs to take."),o.a.createElement(r.MDXTag,{name:"p",components:t},"When the AS has collected whatever additional input it needs from the user, it displays to the user that they can return to their device and continue operation."),o.a.createElement(r.MDXTag,{name:"blockquote",components:t},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"blockquote"},'To completely close a session-fixation attack, we could require the AS to present another code to the user and have the user enter that into the client device. This only works on some kinds of devices, though, so it would need to be an option. Additionally, we might want to consider a kind of "secondary application" based interaction that isn\'t web-based, such as a CIBA login.')),o.a.createElement(r.MDXTag,{name:"p",components:t},"Meanwhile, the client can poll the AS using the transaction handle to see if the user has authorized them yet. This request includes proofs of any keys that the client sent during the original transaction request."),o.a.createElement(s.a,{from:"client",to:"as",code:{handle:"80UPRY5NM33OMUKMKSKU"}}),o.a.createElement(r.MDXTag,{name:"p",components:t},"If the user has yet to approve the transaction, the AS sends back a response telling the client to wait. This response contains a new transaction handle which replaces the client's original one."),o.a.createElement(s.a,{from:"as",to:"client",code:{wait:30,handle:{value:"BI9QNW6V9W3XFJK4R02D",method:"bearer"}}}),o.a.createElement(r.MDXTag,{name:"p",components:t},"The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"wait")," parameter tells the client the number of integer seconds it must wait before polling again. The client can continue to poll in this manner until it receives either a token response or the user code times out and the client receives an error response."),o.a.createElement(r.MDXTag,{name:"h2",components:t},"Redirect with Polling"),o.a.createElement(r.MDXTag,{name:"p",components:t},"For some kinds of clients, it is possible to show the user a visual signal such as a QR code that the user can scan on a secondary device. This allows the client to send the user to an arbitrary URL but not receive a callback in the front channel, so polling is necessary. "),o.a.createElement(s.a,{from:"client",to:"as",code:{interact:{redirect:!0}}}),o.a.createElement(r.MDXTag,{name:"p",components:t},"As above, when the AS determines that the client's request needs user interaction, it creates a unique interaction URL and returns it to the client in the transaction response. The AS associates this unique URI with the transaction. The interaction URI is for a user-facing page at the AS. Note that because the client did not send a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"callback")," to the AS, the AS does not generate or return a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"server_nonce")," parameter."),o.a.createElement(s.a,{from:"as",to:"client",code:{interaction_url:"https://server.example.com/interact/4CF492MLVMSW9MKMXKHQ",handle:{value:"80UPRY5NM33OMUKMKSKU",type:"bearer"}}}),o.a.createElement(r.MDXTag,{name:"p",components:t},"The client then communicates this arbitrary URL to the user, perhaps using a QR code. "),o.a.createElement("img",{src:"http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=https%3A%2F%2Fserver.example.com%2Finteract%2F4CF492MLVMSW9MKMXKHQ&qzone=1&margin=0&size=200x200&ecc=L",alt:"qr code"}),o.a.createElement(r.MDXTag,{name:"p",components:t},"While the client waits for the user to complete the interaction, it polls the AS using the transaction handle."),o.a.createElement(s.a,{from:"client",to:"as",code:{handle:"80UPRY5NM33OMUKMKSKU"}}),o.a.createElement(r.MDXTag,{name:"p",components:t},"If the user has yet to approve the transaction, the AS sends back a response telling the client to wait. This response contains a new transaction handle which replaces the client's original one."),o.a.createElement(s.a,{from:"as",to:"client",code:{wait:30,handle:{value:"ZI9QNW6V9W3XFJK4R02D",method:"bearer"}}}),o.a.createElement(r.MDXTag,{name:"blockquote",components:t},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"blockquote"},"It would be interesting to figure out if we can combine both the user code and arbitrary redirect URL methods, giving the user a few options. This should be as simple as allowing more flexibility on the interaction request portion and having the server return all possible options.")),o.a.createElement(r.MDXTag,{name:"h2",components:t},"DIDComm Messages and Queries"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Some clients will be able to pass a message from the AS to another piece of software using a secondary protocol, such as DIDComm. "),o.a.createElement(r.MDXTag,{name:"p",components:t},"If the client can pass a complete DIDComm message to the agent, it sends the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"didcomm")," flag. If it can pass along a query, it sends the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"didcomm_query")," flag. "),o.a.createElement(s.a,{from:"client",to:"as",code:{interact:{didcomm:!0,didcomm_query:!0}}}),o.a.createElement(r.MDXTag,{name:"p",components:t},"In either case, the agent might send its response directly to the AS through some external means, or the client might get a message back from the agent. This message is to be included in its transaction continuation request."),o.a.createElement(s.a,{from:"client",to:"as",code:{handle:"80UPRY5NM33OMUKMKSKU",didcomm:{"...":"..."}}}),o.a.createElement(r.MDXTag,{name:"p",components:t},"If the client has no response message from the agent, it can poll the transaction as usual."),o.a.createElement(s.a,{from:"client",to:"as",code:{handle:"80UPRY5NM33OMUKMKSKU"}}))},a}(o.a.Component),m={}}}]);
//# sourceMappingURL=component---src-pages-interaction-mdx-7e3326c322865a0a6854.js.map