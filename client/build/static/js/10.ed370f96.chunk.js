(this.webpackJsonphasly=this.webpackJsonphasly||[]).push([[10,14],{100:function(e,t,a){"use strict";function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return n}))},101:function(e,t,a){"use strict";var o=a(75),r=a(0),n=a(82),i=a.n(n),c=a(4),s=a(1),l=(a(10),a(22)),d=a(27),u=a(198),b=a(28),p=r.forwardRef((function(e,t){var a=e.children,o=e.classes,n=e.className,i=e.color,d=void 0===i?"default":i,p=e.component,h=void 0===p?"button":p,m=e.disabled,j=void 0!==m&&m,g=e.disableFocusRipple,f=void 0!==g&&g,v=e.focusVisibleClassName,x=e.size,O=void 0===x?"large":x,y=e.variant,w=void 0===y?"round":y,C=Object(c.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return r.createElement(u.a,Object(s.a)({className:Object(l.a)(o.root,n,"round"!==w&&o.extended,"large"!==O&&o["size".concat(Object(b.a)(O))],j&&o.disabled,{primary:o.primary,secondary:o.secondary,inherit:o.colorInherit}[d]),component:h,disabled:j,focusRipple:!f,focusVisibleClassName:Object(l.a)(o.focusVisible,v),ref:t},C),r.createElement("span",{className:o.label},a))})),h=Object(d.a)((function(e){return{root:Object(s.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(p),m=a(94),j=a.n(m),g=a(96),f=a.n(g),v=a(74),x=a(84),O=(a(83),a(3));x.a.configure();t.a=function(e){var t=localStorage.getItem("token"),a=Object(r.useState)(!1),n=Object(o.a)(a,2),c=n[0],s=n[1],l=i.a.create({baseURL:v.a,headers:{Authorization:"bearer ".concat(t)}});return Object(r.useEffect)((function(){l.get("isloggedin").then((function(e){1==e.data.status?s(!0):x.a.error("Something went wrong",{autoclose:2e3})})).catch((function(e){x.a.error(e,{autoComplete:2e3})}))}),[]),c?Object(O.jsx)(h,{style:{width:"35px",height:"35px",float:"right",marginTop:"15px"},children:Object(O.jsx)(j.a,{color:"secondary",style:{width:"30px",height:"30px"},onClick:function(){return function(e){localStorage.removeItem("token"),localStorage.removeItem("email"),localStorage.removeItem("name"),e.history.push("/signin")}(e)}})}):Object(O.jsx)(h,{style:{width:"35px",height:"35px",float:"right",marginTop:"15px"},children:Object(O.jsx)(f.a,{color:"secondary",style:{width:"30px",height:"30px"},onClick:function(){return e.history.push("/signin")}})})}},199:function(e,t,a){"use strict";a.r(t);var o=a(100),r=a(75),n=a(0),i=a(68),c=a(190),s=a(1),l=a(4),d=(a(10),a(22)),u=a(27),b=a(198),p=a(109),h=a(77),m=a(120),j=a(29),g="undefined"===typeof window?n.useEffect:n.useLayoutEffect,f=n.forwardRef((function(e,t){var a=e.alignItems,o=void 0===a?"center":a,r=e.autoFocus,i=void 0!==r&&r,c=e.button,u=void 0!==c&&c,f=e.children,v=e.classes,x=e.className,O=e.component,y=e.ContainerComponent,w=void 0===y?"li":y,C=e.ContainerProps,N=(C=void 0===C?{}:C).className,k=Object(l.a)(C,["className"]),S=e.dense,I=void 0!==S&&S,P=e.disabled,E=void 0!==P&&P,R=e.disableGutters,z=void 0!==R&&R,T=e.divider,V=void 0!==T&&T,M=e.focusVisibleClassName,D=e.selected,U=void 0!==D&&D,W=Object(l.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),B=n.useContext(m.a),$={dense:I||B.dense||!1,alignItems:o},A=n.useRef(null);g((function(){i&&A.current&&A.current.focus()}),[i]);var L=n.Children.toArray(f),F=L.length&&Object(p.a)(L[L.length-1],["ListItemSecondaryAction"]),_=n.useCallback((function(e){A.current=j.findDOMNode(e)}),[]),G=Object(h.a)(_,t),H=Object(s.a)({className:Object(d.a)(v.root,x,$.dense&&v.dense,!z&&v.gutters,V&&v.divider,E&&v.disabled,u&&v.button,"center"!==o&&v.alignItemsFlexStart,F&&v.secondaryAction,U&&v.selected),disabled:E},W),q=O||"li";return u&&(H.component=O||"div",H.focusVisibleClassName=Object(d.a)(v.focusVisible,M),q=b.a),F?(q=H.component||O?q:"div","li"===w&&("li"===q?q="div":"li"===H.component&&(H.component="div")),n.createElement(m.a.Provider,{value:$},n.createElement(w,Object(s.a)({className:Object(d.a)(v.container,N),ref:G},k),n.createElement(q,H,L),L.pop()))):n.createElement(m.a.Provider,{value:$},n.createElement(q,Object(s.a)({ref:G},H),L))})),v=Object(u.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(f),x=a(188),O=n.forwardRef((function(e,t){var a=e.children,o=e.classes,r=e.className,i=e.disableTypography,c=void 0!==i&&i,u=e.inset,b=void 0!==u&&u,p=e.primary,h=e.primaryTypographyProps,j=e.secondary,g=e.secondaryTypographyProps,f=Object(l.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),v=n.useContext(m.a).dense,O=null!=p?p:a;null==O||O.type===x.a||c||(O=n.createElement(x.a,Object(s.a)({variant:v?"body2":"body1",className:o.primary,component:"span",display:"block"},h),O));var y=j;return null==y||y.type===x.a||c||(y=n.createElement(x.a,Object(s.a)({variant:"body2",className:o.secondary,color:"textSecondary",display:"block"},g),y)),n.createElement("div",Object(s.a)({className:Object(d.a)(o.root,r,v&&o.dense,b&&o.inset,O&&y&&o.multiline),ref:t},f),O,y)})),y=Object(u.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(O),w=a(195),C=a(101),N=a(99);var k=a(74),S=a(82),I=a.n(S),P=(a(88),a(84)),E=(a(83),a(3));P.a.configure();var R=Object(i.a)({root:{width:"400px",maxWidth:"90%",height:"100%",boxShadow:"0px 0px 8px 8px #00c400"},value:{color:"#00c400",fontSize:"17px",wordBreak:"break-all"},title:{fontSize:"17px",paddingRight:"50px"},a:{textDecoration:"none"}});t.default=function(e){R();var t=localStorage.getItem("email"),a=(localStorage.getItem("token"),Object(n.useState)(null)),i=Object(r.a)(a,2),s=i[0],l=i[1],d=Object(n.useState)(""),u=Object(r.a)(d,2),b=u[0],p=u[1],h=Object(n.useState)([]),m=Object(r.a)(h,2),j=m[0],g=m[1],f=function(e,t){var a;return function(){var o=arguments,r=this;clearTimeout(a),a=setTimeout((function(){e.apply(r,o)}),t)}}((function(e){e.preventDefault(),I.a.post(k.a+"/searchUrls",{searchstring:e.target.value}).then((function(e){var t=e.data;t.status?g(t.urls):P.a.error("Something went wrong",{autoComplete:2e3})})).catch((function(e){P.a.error("Something went wrong",{autoComplete:2e3})}))}),300);return Object(E.jsx)("div",{children:Object(E.jsxs)("center",{children:[Object(E.jsx)("br",{})," ",Object(E.jsx)("br",{}),s?Object(E.jsx)(N.a,{urlobj:s,email:t}):null,Object(E.jsx)("br",{}),Object(E.jsxs)("div",{style:{width:"400px",maxWidth:"100%"},children:[Object(E.jsx)(w.a,{fullWidth:"true",required:!0,label:"Search Urls",value:b,onChange:function(e){p(e.target.value),function(e){e.preventDefault(),f(e)}(e)}}),Object(E.jsx)(c.a,{children:j.map((function(e){return Object(E.jsx)(v,{button:!0,children:Object(E.jsx)(y,{style:{color:"purple"},primary:e.name,secondary:e.longUrl,onClick:function(){p(""),g([]),l(e)}})})}))}),Object(E.jsx)(C.a,Object(o.a)({},e))]})]})})}},74:function(e,t,a){"use strict";t.a=""},88:function(e,t,a){"use strict";a.r(t);var o=a(75),r=a(0),n=a.n(r),i=a(187),c=a(68),s=a(197),l=a(189),d=a(97),u=a.n(d),b=a(98),p=a.n(b),h=a(92),m=a.n(h),j=a(2),g=a(3),f=Object(c.a)({root:{flexGrow:1,maxWidth:500}});t.default=function(e){var t=f(),a=n.a.useState(0),r=Object(o.a)(a,2),c=r[0],d=r[1],b=Object(j.f)();return localStorage.getItem("email"),Object(g.jsx)(i.a,{square:!0,className:t.root,children:Object(g.jsxs)(s.a,{value:c,onChange:function(e,t){d(t)},variant:"fullWidth",indicatorColor:"secondary",textColor:"secondary","aria-label":"icon label tabs example",children:[Object(g.jsx)(l.a,{icon:Object(g.jsx)(u.a,{}),label:"home",onClick:function(){return b.push("/")}}),Object(g.jsx)(l.a,{icon:Object(g.jsx)(p.a,{}),label:"my urls",onClick:function(){return b.push("/myurls")}}),Object(g.jsx)(l.a,{icon:Object(g.jsx)(m.a,{}),label:"Add urls",onClick:function(){return b.push("/addurls")}})]})})}},94:function(e,t,a){"use strict";var o=a(79),r=a(80);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),i=(0,o(a(81)).default)(n.createElement("path",{d:"M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"}),"MeetingRoom");t.default=i},96:function(e,t,a){"use strict";var o=a(79),r=a(80);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),i=(0,o(a(81)).default)(n.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");t.default=i},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var o=a(1),r=a(4),n=a(0),i=(a(10),a(22)),c=a(187),s=a(27),l=n.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.raised,d=void 0!==l&&l,u=Object(r.a)(e,["classes","className","raised"]);return n.createElement(c.a,Object(o.a)({className:Object(i.a)(a.root,s),elevation:d?8:1,ref:t},u))})),d=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l),u=n.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,d=Object(r.a)(e,["classes","className","component"]);return n.createElement(l,Object(o.a)({className:Object(i.a)(a.root,c),ref:t},d))})),b=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(u),p=a(188),h=a(68),m=a(3),j=Object(h.a)({root:{width:"400px",maxWidth:"90%",height:"100%",boxShadow:"0px 0px 8px 8px purple",margin:"15px"},value:{color:"purple",fontSize:"17px",wordBreak:"break-all"},title:{fontSize:"17px",paddingRight:"50px"},a:{textDecoration:"none"}});function g(e){var t=e.urlobj,a=e.email,o=j();return Object(m.jsxs)(d,{className:o.root,children:[Object(m.jsx)(b,{children:Object(m.jsxs)("table",{className:o.table,children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("p",{className:o.title,children:"Name"})})," ",Object(m.jsx)("td",{children:Object(m.jsx)("p",{className:o.value,children:null===t||void 0===t?void 0:t.name})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("p",{className:o.title,children:"Long Url"})})," ",Object(m.jsx)("td",{children:Object(m.jsx)("a",{className:o.a,href:null===t||void 0===t?void 0:t.longUrl,children:Object(m.jsx)("p",{className:o.value,children:null===t||void 0===t?void 0:t.longUrl})})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("p",{className:o.title,children:"Short Url"})})," ",Object(m.jsx)("td",{children:Object(m.jsx)("a",{className:o.a,href:null===t||void 0===t?void 0:t.shortUrl,children:Object(m.jsx)("p",{className:o.value,children:null===t||void 0===t?void 0:t.shortUrl})})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("p",{className:o.title,children:"Urlcode"})})," ",Object(m.jsx)("td",{children:Object(m.jsx)("p",{className:o.value,children:null===t||void 0===t?void 0:t.urlCode})})]})]})}),"syedhasnain9163@gmail.com"===a?Object(m.jsx)(p.a,{variant:"body2",color:"textSecondary",component:"p",paragraph:!0,children:null===t||void 0===t?void 0:t._id}):null]})}}}]);
//# sourceMappingURL=10.ed370f96.chunk.js.map