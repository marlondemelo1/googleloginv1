(this.webpackJsonplogingoogle=this.webpackJsonplogingoogle||[]).push([[0],{62:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(25),r=n.n(i),a=n(32),s=n(29),l=n(1),u=Object(c.createContext)({}),j=n(14),g=n.n(j),d=n(26),p=n(27),h=n.n(p),b=n(28).create({baseURL:"https://googleloginv1.vercel.app",headers:{"Content-type":"application/json"}}),x=n(2),O=function(){var e=Object(c.useContext)(u),t=function(){var t=Object(d.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b.post("/api/v1/auth/google",{tokenId:n.tokenId}).then((function(t){console.log(t.data),e.name=t.data.name,e.email=t.data.email,e.picture=t.data.picture,e.islogged=!0,e.userLogin(),console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)(h.a,{clientId:"694897874966-7h3o2k7fa0drtm59kh74ukr3hg37f57k.apps.googleusercontent.com",buttonText:"Log in with Google",onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin"})},m=function(){var e=Object(c.useContext)(u);return Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:e.picture,alt:"foto-perfil"}),Object(x.jsx)("h2",{children:e.name}),Object(x.jsx)("h2",{children:e.email})]})},f=function(){var e={name:"",email:"",picture:"",islogged:!1,userLogin:function(){i({name:o.name,email:o.email,picture:o.picture,islogged:o.islogged})}},t=Object(c.useState)(e),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(x.jsx)(u.Provider,{value:o,children:Object(x.jsx)(s.a,{children:Object(x.jsx)(l.c,{children:Object(x.jsx)(l.a,{path:"/",exact:!0,children:o.islogged?Object(x.jsx)(m,{}):Object(x.jsx)(O,{})})})})})};n(62);var v=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(f,{})})};n(63);r.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(v,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.2ac64078.chunk.js.map