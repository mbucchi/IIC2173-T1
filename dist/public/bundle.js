!function(e){function t(t){for(var r,i,l=t[0],c=t[1],s=t[2],p=0,d=[];p<l.length;p++)i=l[p],a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;o.push([5437,1]),n()}({0:function(e,t){e.exports=React},17:function(e,t){e.exports=ReactDOM},5437:function(e,t,n){"use strict";n.r(t);var r,a,o,i,l=n(0),c=n(17),s=n(16),u={light:"#69e2ff",main:"#00b0ff",dark:"#0081cb",contrastText:"#fff"},p={light:"#9fffe0",main:"#69f0ae",dark:"#2bbd7e",contrastText:"#333"},d=Object(s.createMuiTheme)({palette:{type:"dark",primary:u,secondary:p,background:{default:"#0081cb"}}}),f=(Object(s.createMuiTheme)({palette:{type:"light",primary:u,secondary:p}}),n(84)),m=n.n(f),h=n(85),b=n.n(h),y=n(78),g=n.n(y),v=n(79),w=n.n(v),x=n(81),E=n.n(x),k=n(82),j=n.n(k),O=n(80),S=n.n(O),N=n(77),C=n.n(N),M=n(26),T=n.n(M),P=n(40),A=n.n(P),_=n(18),D=n.n(_),V=n(23),L=n.n(V),B=n(41),F=n.n(B),W=n(9),I=n.n(W),K=n(10),R=n.n(K),G=n(11),z=n.n(G),H=n(12),J=n.n(H),X=n(13),q=n.n(X),Q=n(19),U=n.n(Q),Y=n(42),Z=n.n(Y),$=(n(5371),n(83)),ee=n(74),te=n.n(ee),ne=n(75),re=n.n(ne),ae=n(73),oe=Object(s.createStyles)({card:{flexGrow:1},content:{display:"flex",flexDirection:"column",alignContent:"space-between"},date:{alignSelf:"flex-end"}}),ie=function(e){function t(){return I()(this,t),z()(this,J()(t).apply(this,arguments))}return q()(t,e),R()(t,[{key:"render",value:function(){var e=this.props.classes;return l.createElement(te.a,{raised:!0,className:e.card},l.createElement(re.a,{className:e.content},l.createElement(T.a,{variant:"body1"},this.props.content.split("\n").map(function(e,t){return l.createElement(l.Fragment,{key:t},e,l.createElement("br",null))})),l.createElement("br",null),l.createElement(T.a,{className:e.date,variant:"caption"},"Posted by Anon on ",ae(this.props.date).format("LLL"))))}}]),t}(l.Component),le=Object(s.withStyles)(oe)(ie),ce=n(6),se=n(76),ue=n(43),pe=n.n(ue),de=function(){var e=L()(D.a.mark(function e(t){var n;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.a.get("/posts",{params:{last_id:t&&t.id||Number.MAX_SAFE_INTEGER}});case 2:if(200==(n=e.sent).status){e.next=6;break}return console.error("Server error: Can't fetch posts"),e.abrupt("return",[]);case 6:return e.abrupt("return",n.data);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=L()(D.a.mark(function e(t){var n;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.a.post("/posts",{content:t.trim()});case 2:if(201==(n=e.sent).status){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",n.data);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),me=Object(s.createStyles)({background:{position:"fixed",width:"100%",height:"100%",backgroundColor:"#212121"},appbar:{padding:20,backgroundColor:"#25292E"},title:{flexGrow:1},mainContainer:{marginTop:60,display:"flex",alignItems:"center",flexDirection:"column"},inputBar:{backgroundColor:"#22262A",width:"100%",display:"flex",justifyContent:"center",padding:20},contentList:{width:"50%",minWidth:380},textField:{width:"50%",minWidth:350},sendButton:{margin:-10,padding:0},post:{paddingLeft:0,paddingRight:0}}),he=Object(se.a)((a=function(e){function t(){var e,n;I()(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return n=z()(this,(e=J()(t)).call.apply(e,[this].concat(a))),F()(n,"posts",o,U()(U()(n))),F()(n,"inputValue",i,U()(U()(n))),n.loadedAll=!1,n.loading=!1,n.newPost=function(){console.log(n.inputValue),fe(n.inputValue).then(function(e){e?(n.posts.unshift(e),n.inputValue=""):console.log("error")})},n.appScrolled=L()(D.a.mark(function e(){var t;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.loadedAll||n.loading){e.next=8;break}if(n.loading=!0,t=document.documentElement,!(t.scrollTop+1.5*t.clientHeight>t.scrollHeight)){e.next=7;break}return e.next=7,n.loadMore();case 7:n.loading=!1;case 8:case"end":return e.stop()}},e,this)})),n.loadMore=L()(D.a.mark(function e(){var t;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=n.posts.length){e.next=2;break}return e.abrupt("return");case 2:return t=n.posts[n.posts.length-1],e.next=5,de(t).then(function(e){var r;e.length&&e[0].id!=t.id?(e.pop(),(r=n.posts).push.apply(r,A()(e))):n.loadedAll=!0});case 5:case"end":return e.stop()}},e,this)})),n.inputKeyDown=function(e){e.shiftKey||13!=e.keyCode||(e.preventDefault(),n.newPost())},n}return q()(t,e),R()(t,[{key:"componentWillMount",value:function(){var e=this;de().then(function(t){return e.posts=t})}},{key:"componentDidMount",value:function(){document.onscroll=this.appScrolled}},{key:"render",value:function(){var e=this,t=this.props.classes;return l.createElement("div",null,l.createElement("div",{className:t.background}),l.createElement(C.a,{position:"fixed",color:"default",className:t.appbar},l.createElement(T.a,{align:"center",variant:"title",color:"primary",className:t.title},this.props.websiteTitle)),l.createElement("div",{className:t.mainContainer},l.createElement(g.a,{className:t.inputBar},l.createElement(w.a,{className:t.textField},l.createElement(S.a,{htmlFor:"textarea"},"What's on your mind, anon?"),l.createElement(E.a,{id:"textarea",multiline:!0,value:this.inputValue,onKeyDown:this.inputKeyDown,onChange:function(t){return e.inputValue=t.target.value},endAdornment:l.createElement(j.a,{"aria-label":"send",className:t.sendButton,type:"submit",onClick:this.newPost},l.createElement($.a,null))}))),l.createElement(m.a,{className:t.contentList,onScroll:this.appScrolled},this.posts.map(function(e){return l.createElement(b.a,{key:e.id,className:t.post},l.createElement(le,{content:e.content,date:e.date}))}))))}}]),t}(l.Component),o=Z()(a.prototype,"posts",[ce.j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),i=Z()(a.prototype,"inputValue",[ce.j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),r=a))||r,be=Object(s.withStyles)(me)(he);c.render(l.createElement(s.MuiThemeProvider,{theme:d},l.createElement(be,{websiteTitle:"Infinite Anonymous Wall"})),document.getElementById("app"))}});
//# sourceMappingURL=bundle.js.map