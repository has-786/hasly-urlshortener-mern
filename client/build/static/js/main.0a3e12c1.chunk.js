(this.webpackJsonphasly=this.webpackJsonphasly||[]).push([[0],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),i=a(19),l=a(14),s=a(46),u=a(9),j=a(179),d=a(183),b=a(184),h=a(185),m=a(191),p=a(176),x=a(94),O=a.n(x),g=a(95),f=a.n(g),v=a(2),w=function(e){localStorage.removeItem("token"),localStorage.removeItem("email"),localStorage.removeItem("name"),e.history.push("/signin")};function y(e){var t=e.props;return e.email?Object(v.jsx)(p.a,{style:{width:"30px",height:"30px",float:"right",marginTop:"15px"},children:Object(v.jsx)(O.a,{color:"secondary",style:{width:"30px",height:"30px"},onClick:w.bind(this,t)})}):Object(v.jsx)(p.a,{style:{width:"30px",height:"30px",float:"right",marginTop:"15px"},children:Object(v.jsx)(f.a,{color:"secondary",style:{width:"30px",height:"30px"},onClick:function(){return t.history.push("/signin")}})})}var S=a(180),C=a(181),k=a(62),W=Object(j.a)({root:{width:"400px",maxWidth:"90%",height:"100%",boxShadow:"0px 0px 8px 8px #00c400"},value:{color:"#00c400",fontSize:"17px",wordBreak:"break-all"},title:{fontSize:"17px",paddingRight:"50px"},a:{textDecoration:"none"}});function N(e){var t=e.urlobj,a=e.email,n=W();return Object(v.jsxs)(S.a,{className:n.root,children:[Object(v.jsx)(C.a,{children:Object(v.jsxs)("table",{className:n.table,children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("p",{className:n.title,children:"Name"})})," ",Object(v.jsx)("td",{children:Object(v.jsx)("p",{className:n.value,children:null===t||void 0===t?void 0:t.name})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("p",{className:n.title,children:"Long Url"})})," ",Object(v.jsx)("td",{children:Object(v.jsx)("a",{className:n.a,href:null===t||void 0===t?void 0:t.longUrl,children:Object(v.jsx)("p",{className:n.value,children:null===t||void 0===t?void 0:t.longUrl})})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("p",{className:n.title,children:"Short Url"})})," ",Object(v.jsx)("td",{children:Object(v.jsx)("a",{className:n.a,href:null===t||void 0===t?void 0:t.shortUrl,children:Object(v.jsx)("p",{className:n.value,children:null===t||void 0===t?void 0:t.shortUrl})})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("p",{className:n.title,children:"Urlcode"})})," ",Object(v.jsx)("td",{children:Object(v.jsx)("p",{className:n.value,children:null===t||void 0===t?void 0:t.urlCode})})]})]})}),"syedhasnain9163@gmail.com"===a?Object(v.jsx)(k.a,{variant:"body2",color:"textSecondary",component:"p",paragraph:!0,children:null===t||void 0===t?void 0:t._id}):null]})}var I="",P=a(21),D=a.n(P),T=a(145),q=a(193),U=a(182),F=a(96),z=a.n(F),E=a(97),A=a.n(E),B=a(71),R=a.n(B),L=Object(j.a)({root:{flexGrow:1,maxWidth:500}});function H(e){var t=L(),a=r.a.useState(0),n=Object(u.a)(a,2),o=n[0],c=n[1];localStorage.getItem("email");return Object(v.jsx)(T.a,{square:!0,className:t.root,children:Object(v.jsxs)(q.a,{value:o,onChange:function(e,t){c(t)},variant:"fullWidth",indicatorColor:"secondary",textColor:"secondary","aria-label":"icon label tabs example",children:[Object(v.jsx)(U.a,{icon:Object(v.jsx)(z.a,{}),label:"home",onClick:function(){return e.history.push("/")}}),Object(v.jsx)(U.a,{icon:Object(v.jsx)(A.a,{}),label:"my urls",onClick:function(){return e.history.push("/myurls")}}),Object(v.jsx)(U.a,{icon:Object(v.jsx)(R.a,{}),label:"Add urls",onClick:function(){return e.history.push("/addurls")}})]})})}var V=a(10);a(43);V.a.configure();var J=Object(j.a)({root:{width:"400px",maxWidth:"90%",height:"100%",boxShadow:"0px 0px 8px 8px #00c400"},value:{color:"#00c400",fontSize:"17px",wordBreak:"break-all"},title:{fontSize:"17px",paddingRight:"50px"},a:{textDecoration:"none"}});var Y=function(e){J();var t=localStorage.getItem("email"),a=(localStorage.getItem("token"),Object(n.useState)(null)),r=Object(u.a)(a,2),o=r[0],c=r[1],i=Object(n.useState)(""),l=Object(u.a)(i,2),j=l[0],p=l[1],x=Object(n.useState)([]),O=Object(u.a)(x,2),g=O[0],f=O[1],w=function(e,t){var a;return function(){var n=arguments,r=this;clearTimeout(a),a=setTimeout((function(){e.apply(r,n)}),t)}}((function(e){e.preventDefault(),D.a.post("/searchUrls",{searchstring:e.target.value}).then((function(e){var t=e.data;t.status?f(t.urls):V.a.error("Something went wrong",{autoComplete:2e3})})).catch((function(e){V.a.error("Something went wrong",{autoComplete:2e3})}))}),300);return Object(v.jsx)("div",{children:Object(v.jsxs)("center",{children:[Object(v.jsx)(H,Object(s.a)({},e)),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),o?Object(v.jsx)(N,{urlobj:o,email:t}):null,Object(v.jsx)("br",{}),Object(v.jsxs)("div",{style:{width:"400px",maxWidth:"100%"},children:[Object(v.jsx)(m.a,{fullWidth:"true",required:!0,label:"Search Urls",value:j,onChange:function(e){p(e.target.value),function(e){e.preventDefault(),w(e)}(e)}}),Object(v.jsx)(d.a,{children:g.map((function(e){return Object(v.jsx)(b.a,{button:!0,children:Object(v.jsx)(h.a,{style:{color:"#00c400"},secondary:e.shortUrl,primary:e.longUrl,onClick:function(){p(""),f([]),c(e)}})})}))}),Object(v.jsx)(y,{props:e,email:t})]})]})})},G=a(194),_=a(189),K=a(187),M=a(190),Q=a(192),X=a(45),Z=a.n(X),$=a(186),ee=a(188);V.a.configure();var te=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:"50px",boxShadow:"0px 0px 5px 5px #00c400"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},tabLink:{display:"flex",alignItems:"center",justifyContent:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));V.a.configure();var ae=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"0px 0px 5px 5px #00c400",padding:"30px"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ne(){return Object(v.jsxs)(k.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(v.jsx)(i.b,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}V.a.configure();var re=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"0px 0px 5px 5px #00c400",padding:"30px"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));V.a.configure();var oe=Object(j.a)({root:{maxWidth:"90%",height:"100%",boxShadow:"0px 0px 8px 8px #00c400"},value:{color:"#00c400",fontSize:"17px",display:"flex",flexDirection:"row wrap"},title:{fontSize:"17px",paddingRight:"50px"},a:{textDecoration:"none"}});V.a.configure();var ce=Object(j.a)({root:{width:"100%",height:"100%",boxShadow:"0px 0px 8px 8px #00c400"},value:{color:"#00c400",fontSize:"17px"},title:{fontSize:"17px",paddingRight:"10px"},a:{textDecoration:"none"},table:{width:"100%"}});c.a.render(Object(v.jsx)(i.a,{children:Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{exact:!0,path:"/",component:Y}),Object(v.jsx)(l.a,{path:"/addurls",component:function(e){var t=ce(),a=localStorage.getItem("email"),r=(localStorage.getItem("token"),Object(n.useState)("")),o=Object(u.a)(r,2),c=o[0],i=o[1],l=Object(n.useState)(""),j=Object(u.a)(l,2),d=j[0],b=j[1],h=Object(n.useState)(null),p=Object(u.a)(h,2),x=p[0],O=p[1],g=Object(n.useState)("none"),f=Object(u.a)(g,2),w=f[0],S=f[1];return Object(v.jsx)("div",{children:Object(v.jsxs)("center",{children:[Object(v.jsx)(H,Object(s.a)({},e)),Object(v.jsx)("center",{children:Object(v.jsx)(ee.a,{style:{display:w}})}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{style:{width:"500px",maxWidth:"90%"},children:[Object(v.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Enter name",value:c,onChange:function(e){return i(e.target.value)}}),Object(v.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Enter long url",value:d,onChange:function(e){return b(e.target.value)}}),Object(v.jsx)(_.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){S("block"),D.a.get(I+"/set?url=".concat(d,"&email=").concat(a,"&name=").concat(c)).then((function(e){S("none");var t=e.data;1==t.status?O(t.url):V.a.error("Something went wrong",{autoclose:2e3})})).catch((function(e){S("none"),V.a.error(e,{autoclose:2e3})}))},className:t.submit,children:"Add"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),x?Object(v.jsx)(N,{urlobj:x,email:a}):null,Object(v.jsx)(y,{props:e,email:a})]})]})})}}),Object(v.jsx)(l.a,{path:"/myurls",component:function(e){oe();var t=localStorage.getItem("email"),a=localStorage.getItem("token"),r=Object(n.useState)([]),o=Object(u.a)(r,2),c=o[0],i=o[1],l=D.a.create({baseURL:I,headers:{Authorization:"bearer ".concat(a)}});return Object(n.useEffect)((function(){l.get("myurls").then((function(e){var t=e.data;1==t.status?i(t.myurls):V.a.error("Something went wrong",{autoclose:2e3})})).catch((function(t){V.a.error(t,{autoComplete:2e3}),e.history.push("/signin")}))}),[]),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("center",{children:[Object(v.jsx)(H,Object(s.a)({},e)),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),0==c.length?Object(v.jsxs)("div",{children:[Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"No urls to show"]}):c.map((function(e){return Object(v.jsx)(N,{urlobj:e,email:t})})),Object(v.jsx)("div",{style:{width:"400px",maxWidth:"100%"},children:Object(v.jsx)(y,{props:e,email:t})})]})})}}),Object(v.jsx)(l.a,{path:"/signin",component:function(e){var t=te(),a=Object(n.useState)(""),r=Object(u.a)(a,2),o=r[0],c=r[1],l=Object(n.useState)(""),s=Object(u.a)(l,2),j=s[0],d=s[1],b=Object(n.useState)("none"),h=Object(u.a)(b,2),p=h[0],x=h[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)($.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(K.a,{}),Object(v.jsxs)(T.a,{elevation:3,className:t.paper,children:[Object(v.jsx)(ee.a,{style:{position:"fixed",top:"70px",display:p}}),Object(v.jsx)(G.a,{className:t.avatar,children:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(k.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(v.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(v.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:o,onChange:function(e){return c(e.target.value)},autoFocus:!0}),Object(v.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:j,onChange:function(e){return d(e.target.value)},autoComplete:"current-password"}),Object(v.jsx)(_.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(t){x("block"),t.preventDefault();var a={email:o,pass:j};D.a.post("/localSignin",a).then((function(t){x("none");var a=t.data,n=null,r=null,o=null;1==a.status?(n=a.email,r=a.name,o=a.token,a.path,V.a.success("Signed in successfully",{autoClose:1500}),localStorage.setItem("email",n),localStorage.setItem("name",r),localStorage.setItem("token",o),e.history.push("/")):V.a.error("Something went wrong",{autoClose:2e3})})).catch((function(e){x("none"),V.a.error("Something went wrong",{autoClose:2e3})}))},className:t.submit,children:"Sign In"}),Object(v.jsxs)(M.a,{container:!0,children:[Object(v.jsx)(M.a,{item:!0,xs:!0,children:Object(v.jsx)(i.b,{to:"/changePassword",children:"Forgot password?"})}),Object(v.jsx)(M.a,{item:!0,children:Object(v.jsx)(i.b,{to:"/signup",variant:"body2",children:"Don't have an account?"})})]})]})]}),Object(v.jsx)(Q.a,{mt:8,children:Object(v.jsx)(i.b,{to:"/",variant:"body2",children:"Back to Home"})})]})})}}),Object(v.jsx)(l.a,{path:"/signup",component:function(e){var t=ae(),a=Object(n.useState)(""),r=Object(u.a)(a,2),o=r[0],c=r[1],l=Object(n.useState)(""),s=Object(u.a)(l,2),j=s[0],d=s[1],b=Object(n.useState)(""),h=Object(u.a)(b,2),p=h[0],x=h[1],O=Object(n.useState)(""),g=Object(u.a)(O,2),f=g[0],w=g[1],y=Object(n.useState)(""),S=Object(u.a)(y,2),C=S[0],W=S[1],N=Object(n.useState)(""),I=Object(u.a)(N,2),P=I[0],q=I[1],U=Object(n.useState)("none"),F=Object(u.a)(U,2),z=F[0],E=F[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)($.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(K.a,{}),Object(v.jsxs)(T.a,{elevation:3,className:t.paper,children:[Object(v.jsx)(ee.a,{style:{position:"fixed",top:"70px",display:z}}),Object(v.jsx)(G.a,{className:t.avatar,children:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(k.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(v.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(v.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Name",name:"name",value:o,onChange:function(e){return c(e.target.value)},autoFocus:!0}),Object(v.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:j,onChange:function(e){return d(e.target.value)},autoFocus:!0}),Object(v.jsx)(_.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:t.submit,onClick:function(e){E("block"),e.preventDefault();var t={email:j};D.a.post("/emailverify",t).then((function(e){E("none");var t=e.data;1==t.status?(V.a.info(t.msg,{autoClose:1e3}),q(t.otp)):alert(t.msg)})).catch((function(e){E("none"),console.log(e)}))},children:"Send OTP"}),Object(v.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"otp",label:"Enter OTP",name:"otp",value:C,onChange:function(e){return W(e.target.value)},autoFocus:!0}),Object(v.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:p,onChange:function(e){return x(e.target.value)},autoComplete:"current-password"}),Object(v.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Confirm password",type:"password",id:"password",value:f,onChange:function(e){return w(e.target.value)},autoComplete:"current-password"}),Object(v.jsx)(_.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(t){if(E("block"),t.preventDefault(),C==P)if(p.length<6)alert("Password length must be at least 6");else if(f==p){var a={name:o,email:j,pass:p};D.a.post("/localSignup",a).then((function(t){E("none");var a=t.data,n=null,r=null,o=null;1==a.status&&(alert("Signed up successfully"),n=a.email,r=a.name,o=a.token,localStorage.setItem("email",n),localStorage.setItem("name",r),localStorage.setItem("token",o),e.history.push("/"))})).catch((function(e){E("none"),console.log(e)}))}else alert("Password and Confirm password don't match");else V.a.error("Incorrect OTP",{autoClose:1e3})},className:t.submit,children:"Sign Up"}),Object(v.jsxs)(M.a,{container:!0,children:[Object(v.jsx)(M.a,{item:!0,xs:!0,children:Object(v.jsx)(i.b,{to:"/changePassword",variant:"body2",children:"Forgot password?"})}),Object(v.jsx)(M.a,{item:!0,children:Object(v.jsx)(i.b,{to:"/signin",variant:"body2",children:"Already have an account?"})})]})]})]}),Object(v.jsx)(Q.a,{mt:8,children:Object(v.jsx)(i.b,{to:"/",variant:"body2",children:"Back to Home"})})]})})}}),Object(v.jsx)(l.a,{path:"/changePassword",component:function(e){var t=re(),a=localStorage.getItem("token"),r=Object(n.useState)(""),o=Object(u.a)(r,2),c=o[0],l=o[1],s=Object(n.useState)(""),j=Object(u.a)(s,2),d=j[0],b=j[1],h=Object(n.useState)(""),p=Object(u.a)(h,2),x=p[0],O=p[1],g=Object(n.useState)(""),f=Object(u.a)(g,2),w=f[0],y=f[1],S=Object(n.useState)(""),C=Object(u.a)(S,2),W=C[0],N=C[1],P=Object(n.useState)("none"),q=Object(u.a)(P,2),U=q[0],F=q[1],z=D.a.create({baseURL:I,headers:{Authorization:"bearer ".concat(a)}});return Object(v.jsxs)($.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(K.a,{}),Object(v.jsxs)(T.a,{elevation:3,className:t.paper,children:[Object(v.jsx)(ee.a,{style:{position:"fixed",top:"70px",display:U}}),Object(v.jsx)(G.a,{className:t.avatar,children:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(k.a,{component:"h1",variant:"h5",children:"Change password"}),Object(v.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(v.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:c,onChange:function(e){return l(e.target.value)},autoFocus:!0}),Object(v.jsx)(_.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:t.submit,onClick:function(e){F("block"),e.preventDefault();var t={email:c};z.post("forgotPassword",t).then((function(e){F("none");var t=e.data;1==t.status?(V.a.info(t.msg,{autoClose:1e3}),N(t.otp)):V.a.error("Something went wrong",{autoClose:1e3})})).catch((function(e){F("none"),console.log(e),V.a.error("Something went wrong",{autoClose:1e3})}))},children:"Send OTP"}),Object(v.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"otp",label:"Enter OTP",name:"otp",value:w,onChange:function(e){return y(e.target.value)},autoFocus:!0}),Object(v.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:d,onChange:function(e){return b(e.target.value)},autoComplete:"current-password"}),Object(v.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Confirm password",type:"password",id:"password",value:x,onChange:function(e){return O(e.target.value)},autoComplete:"current-password"}),Object(v.jsx)(_.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(t){if(F("block"),t.preventDefault(),w==W)if(d.length<6)V.a.error("Password length must be at least 6",{autoClose:2e3});else if(x==d){var a={email:c,password:d};z.post("changePassword",a).then((function(t){F("none"),1==t.data.status?(V.a.success("Password was changed successfully",{autoClose:2e3}),e.history.push("/")):V.a.error("Something went wrong")})).catch((function(e){F("none"),console.log(e),V.a.error("Something went wrong")}))}else V.a.error("Password and Confirm password don't match",{autoClose:2e3});else V.a.error("Incorrect OTP",{autoClose:1e3})},className:t.submit,children:"Submit"}),Object(v.jsx)(M.a,{container:!0,children:Object(v.jsx)(M.a,{item:!0,xs:!0,children:Object(v.jsx)(i.b,{to:"/",variant:"body2",children:"Back to Home"})})})]})]}),Object(v.jsx)(Q.a,{mt:8,children:Object(v.jsx)(ne,{})})]})}})]})}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.0a3e12c1.chunk.js.map