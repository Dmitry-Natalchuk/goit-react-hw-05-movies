"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[433,854],{854:function(e,t,r){r.r(t);var n=r(691),a=r(184);t.default=function(){return(0,a.jsx)(n.fe,{visible:!0,height:"100",width:"100",ariaLabel:"dna-loading",wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"dna-wrapper"})}},843:function(e,t,r){r.d(t,{a:function(){return s}});var n=r(683),a=r(731),c=r(470),u=r(604),i=r(184),o=function(e){var t=e.id,r=e.original_title,n=e.poster_path,o=e.vote_average,s=(0,c.TH)();return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{state:{from:s},to:"/movies/".concat(t),children:(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:(0,u.v)(n),alt:r,width:250}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:r}),(0,i.jsx)("p",{children:o})]})]})})})},s=function(e){var t=e.items;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:t.map((function(e){return(0,i.jsx)(o,(0,n.Z)({},e),e.id)}))})})})}},433:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(861),a=r(885),c=r(757),u=r.n(c),i=r(791),o=r(731),s=r(184),f=function(e){var t=e.onSubmit,r=(0,i.useState)(""),n=(0,a.Z)(r,2),c=n[0],u=n[1];return(0,s.jsx)("div",{children:(0,s.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(c),u("")},children:(0,s.jsx)("input",{value:c,name:"query",onChange:function(e){u(e.target.value)},type:"text",placeholder:"Search movies",required:!0})})})},p=r(119),l=r(843),d=r(854),v=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],v=(0,i.useState)(!1),h=(0,a.Z)(v,2),m=h[0],x=h[1],b=(0,o.lr)(),j=(0,a.Z)(b,2),g=j[0],w=j[1],y=g.get("query");(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,(0,p.V0)(y);case 4:t=e.sent,c(t),x(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message),x(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();y&&e()}),[y]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{onSubmit:function(e){return w({query:e})}}),m&&(0,s.jsx)(d.default,{}),Boolean(r.length)&&(0,s.jsx)(l.a,{items:r})]})},h=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"Search movies"}),(0,s.jsx)(v,{})]})}},604:function(e,t,r){r.d(t,{v:function(){return n}});var n=function(e){return e?"".concat("https://image.tmdb.org/t/p/w500").concat(e):"".concat("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIZxcqjHSXy3woDzxKGajAzwWnoc96DXFgOFxhb0r5rCn61zO&s")}},119:function(e,t,r){r.d(t,{Df:function(){return o},V0:function(){return i},fh:function(){return s},q5:function(){return p},yo:function(){return f}});var n=r(861),a=r(757),c=r.n(a),u=r(44).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"171815f7c9e508fe2a53a40eb2dd3583"}}),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},683:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=433.5ffd16b2.chunk.js.map