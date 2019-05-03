(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,n,t){e.exports=t(315)},139:function(e,n,t){},166:function(e,n){},315:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(17),i=t.n(o),c=(t(139),t(73)),s=t(50),u=t(20),l=t(9),d=t(10),m=t(117),h=t.n(m)()("http://localhost:3030");var f={suscribeToMessages:function(e){h.on("new-message",function(n){return e(n)})},sendMessage:function(e){h.emit("new-message",e)},registerUser:function(e){h.emit("new-username",e)},suscribeToUsers:function(e){h.on("all-users",function(n){e(n),console.log(n)})},sendPrivateMessage:function(e){h.emit("new-private-message",e)},suscribeToPrivateMessages:function(e){h.on("new-private-message",function(n){return e(n)})}},v=t(36);function b(){var e=Object(l.a)(["\n    border-radius:5px;\n    width: 100%;\n    background-color: ",";\n    padding:  .5em;\n    box-sizing: border-box;\n"]);return b=function(){return e},e}function g(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background-color: white;\n  border: 1.5px solid grey;\n  border-radius:5px;\n  padding: 5.5px;\n  outline: none;\n"]);return g=function(){return e},e}var p=d.a.input(g()),E={position:"absolute",padding:"5.5px",right:0},O=d.a.div(b(),function(e){return e.bgColor}),y=function(e){var n=e.iconColor,t=void 0===n?"#2ca5e0":n,o=e.placeholder,i=void 0===o?"":o,c=e.faIcon,s=void 0===c?"paper-plane":c,l=e.handleSubmit,d=e.cleanAfter,m=e.bgColor,h=e.hotAction,f=e.handleChange,b=e.hotValue,g=Object(a.useState)(""),y=Object(u.a)(g,2),j=y[0],w=y[1],x=function(e){return e.target.focus()};return r.a.createElement(O,{bgColor:m},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l&&l(j),w(d?"":j)},style:{position:"relative"}},r.a.createElement(v.a,{color:t,icon:s,style:E,onClick:l}),h?r.a.createElement(p,{type:"text",onChange:f,value:b,placeholder:i,onClick:x}):r.a.createElement(p,{type:"text",onChange:function(e){var n=e.target.value;w(n)},value:j,placeholder:i,onClick:x})))},j=function(e){var n=e.sendMessage;return r.a.createElement(y,{handleSubmit:n,cleanAfter:!0,placeholder:"Input your message"})};function w(){var e=Object(l.a)(["\n    text-decoration: none;\n    color: #fff;\n"]);return w=function(){return e},e}function x(){var e=Object(l.a)(["\n    height: 100%;\n    display: inline-block;\n    width: 100%;\n    padding: 0 .5em;\n    overflow: scroll;\n"]);return x=function(){return e},e}var M=d.a.div(x()),k=d.a.a(w()),S=function(e){var n=e.messagesList;return r.a.createElement(M,null,n.map(function(e,n){var t=e.message,a=e.username;return r.a.createElement("h1",{key:Date.now()+n},r.a.createElement(k,null,a,": "),t)}))};function C(){var e=Object(l.a)(["\n  width: 100vw;\n  height: calc(100vh - 64px);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0,0,0,.3);\n  z-index: 1;\n\n"]);return C=function(){return e},e}function T(){var e=Object(l.a)(["\n  text-align: center;\n"]);return T=function(){return e},e}function L(){var e=Object(l.a)(["\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 1em;\n  position: absolute;\n  box-shadow: 4px 3px 4px rgba(0, 0, 0, 0.4);\n"]);return L=function(){return e},e}var D=d.a.div(L()),I=d.a.h1(T()),U=d.a.div(C()),z=function(e){return r.a.createElement(U,null,r.a.createElement(D,null,r.a.createElement(I,null,"Chat as a guest"),r.a.createElement(y,{placeholder:"Sally Ride",handleSubmit:function(n){n&&/\S/.test(n)&&(f.registerUser(n),e.setHideLogin(!0))},faIcon:"user-astronaut",iconColor:"#95ca3e"})))},X=t(120),Y=t(121),N=t(132),P=t(122),A=t(133),B=t(18),R=function(e){function n(e){var t;return Object(X.a)(this,n),(t=Object(N.a)(this,Object(P.a)(n).call(this,e))).state={relX:0,relY:0,x:e.x,y:e.y},t.gridX=e.gridX||1,t.gridY=e.gridY||1,t.onMouseDown=t.onMouseDown.bind(Object(B.a)(Object(B.a)(t))),t.onMouseMove=t.onMouseMove.bind(Object(B.a)(Object(B.a)(t))),t.onMouseUp=t.onMouseUp.bind(Object(B.a)(Object(B.a)(t))),t.onTouchStart=t.onTouchStart.bind(Object(B.a)(Object(B.a)(t))),t.onTouchMove=t.onTouchMove.bind(Object(B.a)(Object(B.a)(t))),t.onTouchEnd=t.onTouchEnd.bind(Object(B.a)(Object(B.a)(t))),t}return Object(A.a)(n,e),Object(Y.a)(n,[{key:"onStart",value:function(e){var n=i.a.findDOMNode(this.handle),t=document.body,a=n.getBoundingClientRect();this.setState({relX:e.pageX-(a.left+t.scrollLeft-t.clientLeft),relY:e.pageY-(a.top+t.scrollTop-t.clientTop)})}},{key:"onMove",value:function(e){var n=Math.trunc((e.pageX-this.state.relX)/this.gridX)*this.gridX,t=Math.trunc((e.pageY-this.state.relY)/this.gridY)*this.gridY;n===this.state.x&&t===this.state.y||(this.setState({x:n,y:t}),this.props.onMove&&this.props.onMove(this.state.x,this.state.y))}},{key:"onMouseDown",value:function(e){0===e.button&&(this.onStart(e),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp),e.preventDefault())}},{key:"onMouseUp",value:function(e){document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp),this.props.onStop&&this.props.onStop(this.state.x,this.state.y),e.preventDefault()}},{key:"onMouseMove",value:function(e){this.onMove(e),e.preventDefault()}},{key:"onTouchStart",value:function(e){this.onStart(e.touches[0]),document.addEventListener("touchmove",this.onTouchMove,{passive:!1}),document.addEventListener("touchend",this.onTouchEnd,{passive:!1}),e.preventDefault()}},{key:"onTouchMove",value:function(e){this.onMove(e.touches[0]),e.preventDefault()}},{key:"onTouchEnd",value:function(e){document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd),this.props.onStop&&this.props.onStop(this.state.x,this.state.y),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,style:{position:"absolute",left:this.state.x,top:this.state.y,touchAction:"none"},ref:function(n){e.handle=n}},this.props.children)}}]),n}(r.a.Component);function V(){var e=Object(l.a)(["\n    margin: .25em;\n    padding:.5em;\n    border-radius: 20px;\n    display: inline-block;\n    ","\n"]);return V=function(){return e},e}function H(){var e=Object(l.a)(["\n    display: flex;\n  ","\n"]);return H=function(){return e},e}var W=d.a.div(H(),function(e){return e.isLeft?"justify-content: flex-start;":"justify-content: flex-end;"}),F=d.a.div(V(),function(e){return e.isLeft?"border-bottom-left-radius: 0;\n        background-color: #e6ecf0;\n        color:#14171a;\n            ".concat(e.isSecond&&"border-top-left-radius: 0;","\n        "):"border-bottom-right-radius: 0;\n        background-color: #1da1f2;\n        color: white;\n        ".concat(e.isSecond&&"border-top-right-radius: 0;","\n        ")}),G=function(e){var n=e.isLeft,t=e.message,a=e.isSecond;return r.a.createElement(W,{isLeft:n},r.a.createElement(F,{isLeft:n,isSecond:a},t))};function J(){var e=Object(l.a)(["\n  height:91%;\n  background-color: white;\n"]);return J=function(){return e},e}function q(){var e=Object(l.a)(["\n  height: 85%;\n  width: 100%;\n  margin: 0%;\n  padding: .5em;\n  overflow:scroll;\n  box-sizing: border-box;\n"]);return q=function(){return e},e}function $(){var e=Object(l.a)(["\n    height: ",";\n    width: 30vw ;\n    position: absolute;\n    display: block;\n    z-index: 1;\n    box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.15);\n\n"]);return $=function(){return e},e}function _(){var e=Object(l.a)(["\n  height: 2em;\n  width: 100%;\n  box-sizing: border-box;\n  background-image: linear-gradient(45deg, #662d8c, #ed1e79);\n  color: white;\n  font-weight: bold;\n  justify-content: space-between;\n  display:flex;\n  padding: .5em 1em;\n"]);return _=function(){return e},e}var K=d.a.div(_()),Q=d.a.div($(),function(e){return e.isMinimized?"0vh":"40vh"}),Z=d.a.div(q()),ee=d.a.div(J()),ne=function(e){var n=e.id,t=e.username,o=e.handleClose,i=e.privateMessages,c=Object(a.useState)(!1),s=Object(u.a)(c,2),l=s[0],d=s[1];return r.a.createElement(R,{x:100,y:100},r.a.createElement(Q,{isMinimized:l},r.a.createElement(K,null,r.a.createElement("span",null,t),r.a.createElement("div",null,r.a.createElement(v.a,{icon:l?"square":"window-minimize",onClick:function(e){d(!l)},style:{marginRight:".5em"}}),r.a.createElement(v.a,{icon:"times",onClick:function(){o(n)}}))),!l&&r.a.createElement(ee,null,r.a.createElement(Z,null,i&&i.map(function(e,n,t){var a=e.content,o=e.isOutbound;return r.a.createElement(G,{key:Date.now()+n,message:a,isSecond:n&&Boolean(o)===Boolean(t[n-1].isOutbound),isLeft:!o})})),r.a.createElement(j,{cleanAfter:!0,sendMessage:function(e){if(e&&/\S/.test(e)){var t={id:n,message:{content:e,isOutbound:!0}};f.sendPrivateMessage(t)}}}))))},te=t(123),ae=t.n(te);function re(){var e=Object(l.a)(["\n    width: 100%;\n    padding: 1em;\n    box-sizing: border-box;\n"]);return re=function(){return e},e}var oe=d.a.div(re());var ie=function(e){var n=e.handleChange,t=e.inputValue;return r.a.createElement(oe,null,r.a.createElement(ae.a,{id:"standard-name",label:"Search user",value:t,style:{width:"100%"},onChange:n,margin:"normal"}))},ce=t(35),se=t(125),ue=t.n(se),le=t(126),de=t.n(le),me=t(24),he=t.n(me);var fe=Object(ce.withStyles)({root:{flexGrow:1},headerStyle:{backgroundImage:"linear-gradient(45deg, #662d8c, #ed1e79)"}})(function(e){var n=e.classes;return r.a.createElement("div",{className:n.root},r.a.createElement(ue.a,{position:"static",className:n.headerStyle},r.a.createElement(de.a,null,r.a.createElement(he.a,{variant:"h6"},r.a.createElement("span",{style:{color:"#fff"}}," # General ")))))}),ve=t(70),be=t.n(ve),ge=t(48),pe=t.n(ge),Ee=t(49),Oe=t.n(Ee),ye=t(127),je=t.n(ye),we=t(128),xe=t.n(we),Me=function(e){var n=e.id,t=e.username,a=e.avatarImage,o=e.handleUserClick,i=e.classes;return r.a.createElement(pe.a,{alignItems:"flex-start",key:n,onClick:function(){console.log("Clicked"),console.log(n),o&&o(n)}},a&&r.a.createElement(je.a,null,r.a.createElement(xe.a,{alt:"add image",src:"/static/images/avatar/1.jpg"})),r.a.createElement(Oe.a,{primary:t,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,{component:"span",className:i.inline,color:"textPrimary"},"Here goes description")," \u2014 To do: Add description")}))};var ke=Object(ce.withStyles)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},inline:{display:"inline"}}})(function(e){var n=e.classes,t=e.users,a=e.handleUserClick,o=e.filter,i=t.filter(function(e){var n=e.username;return n&&n.toLowerCase().includes(o.toLowerCase())});return r.a.createElement(be.a,{className:n.root},i.length?i.map(function(e){var t=e.username,o=e.id,i=e.avatarImage;return r.a.createElement(Me,{handleUserClick:a,avatarImage:i,username:t,classes:n,id:o})}):r.a.createElement(pe.a,{alignItems:"flex-start"},r.a.createElement(Oe.a,{primary:"No users online",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://www.youtube.com/watch?v=MX6MvV8cbh8",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(he.a,{component:"span",className:n.inline,color:"textPrimary"},"So lonely, so lonely, so lonely ",r.a.createElement("span",{role:"img","aria-label":"Music"},"\ud83c\udfb6"))))})))}),Se=t(129),Ce=t.n(Se),Te=t(130),Le=t.n(Te);var De=function(e){return r.a.createElement(Ce.a,{style:{height:"100%",borderRadius:0}},r.a.createElement(Le.a,null,e.children))};function Ie(){var e=Object(l.a)(["\n  width: 20%;\n"]);return Ie=function(){return e},e}function Ue(){var e=Object(l.a)(["\n  width: 80%;\n  height: 94%;\n  box-sizing: border-box;\n"]);return Ue=function(){return e},e}function ze(){var e=Object(l.a)(["\n/* Todo look for a better way of fixing the height */\n  height: calc(100% - 64px);\n  width: 100%;\n  display: flex;\n"]);return ze=function(){return e},e}function Xe(){var e=Object(l.a)(["\n  height: 100vh;\n  background-image: linear-gradient(45deg, #2e3192, #1bffff);\n"]);return Xe=function(){return e},e}var Ye=d.a.div(Xe()),Ne=d.a.div(ze()),Pe=d.a.div(Ue()),Ae=d.a.div(Ie()),Be=function(e){var n=Object(a.useState)([]),t=Object(u.a)(n,2),o=t[0],i=t[1],l=Object(a.useState)([]),d=Object(u.a)(l,2),m=d[0],h=d[1],v=Object(a.useState)({chatsIds:[]}),b=Object(u.a)(v,2),g=b[0],p=b[1],E=Object(a.useState)(""),O=Object(u.a)(E,2),y=O[0],w=O[1],x=Object(a.useState)(!1),M=Object(u.a)(x,2),k=M[0],C=M[1],T=function(e){var n=e.message,t=e.id;g.chatsIds.includes(t)?g.hasOwnProperty(t)?g[t].messages=[].concat(Object(s.a)(g[t].messages),[n]):(g[t]={},g[t].messages=[n]):(g.chatsIds=[].concat(Object(s.a)(g.chatsIds),[t]),g[t]={},g[t].messages=[n]),p(Object(c.a)({},g))},L=function(e){o.push(e),i(Object(s.a)(o))},D=function(e){h(e)};Object(a.useEffect)(function(){f.suscribeToMessages(L),f.suscribeToPrivateMessages(T)},[]),Object(a.useEffect)(function(){f.suscribeToUsers(D)},[m]),Object(a.useEffect)(function(){},[g]);var I=function(e){var n;h((n=e,m.map(function(e){return e.id===n?Object(c.a)({},e,{isOpen:!e.isOpen}):e})))};return r.a.createElement(Ye,null,r.a.createElement(fe,null),r.a.createElement(Ne,null,m.filter(function(e){return e.isOpen}).map(function(e){var n=e.id,t=e.username;return r.a.createElement(ne,{id:n,username:t,handleClose:I,privateMessages:g[n]&&g[n].messages,key:n})}),!k&&r.a.createElement(z,{setHideLogin:C}),r.a.createElement(Pe,null,r.a.createElement(S,{messagesList:o}),r.a.createElement(j,{sendMessage:function(e){e&&/\S/.test(e)&&f.sendMessage(e)}})),r.a.createElement(Ae,null,r.a.createElement(De,null,r.a.createElement(ie,{handleChange:function(e){var n=e.target.value;w(n)},inputValue:y}),r.a.createElement(ke,{users:m,filter:y,handleUserClick:I})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=t(37),Ve=t(22);Re.b.add(Ve.e,Ve.b,Ve.g,Ve.c,Ve.f,Ve.a,Ve.d),i.a.render(r.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[134,1,2]]]);
//# sourceMappingURL=main.70ebe54a.chunk.js.map