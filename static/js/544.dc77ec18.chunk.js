"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544,854],{854:function(t,r,e){e.r(r);var n=e(691),a=e(184);r.default=function(){return(0,a.jsx)(n.fe,{visible:!0,height:"100",width:"100",ariaLabel:"dna-loading",wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"dna-wrapper"})}},843:function(t,r,e){e.d(r,{a:function(){return s}});var n=e(683),a=e(731),c=e(470),u=e(604),i=e(184),o=function(t){var r=t.id,e=t.original_title,n=t.poster_path,o=t.vote_average,s=(0,c.TH)();return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{state:{from:s},to:"/movies/".concat(r),children:(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:(0,u.v)(n),alt:e,width:250}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:e}),(0,i.jsx)("p",{children:o})]})]})})})},s=function(t){var r=t.items;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:r.map((function(t){return(0,i.jsx)(o,(0,n.Z)({},t),t.id)}))})})})}},544:function(t,r,e){e.r(r);var n=e(861),a=e(885),c=e(757),u=e.n(c),i=e(791),o=e(843),s=e(119),f=e(854),p=e(184);r.default=function(){var t=(0,i.useState)([]),r=(0,a.Z)(t,2),e=r[0],c=r[1],d=(0,i.useState)(!1),l=(0,a.Z)(d,2),v=l[0],h=l[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.next=3,(0,s.Df)();case 3:r=t.sent,e=r.results;try{c(e),h(!1)}catch(n){console.log(n.message),h(!1)}case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsx)(p.Fragment,{children:Boolean(e.length)&&(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Today's Trending Movies"}),v&&(0,p.jsx)(f.default,{}),(0,p.jsx)(o.a,{items:e})]})})}},604:function(t,r,e){e.d(r,{v:function(){return n}});var n=function(t){return t?"".concat("https://image.tmdb.org/t/p/w500").concat(t):"".concat("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIZxcqjHSXy3woDzxKGajAzwWnoc96DXFgOFxhb0r5rCn61zO&s")}},119:function(t,r,e){e.d(r,{Df:function(){return o},V0:function(){return i},fh:function(){return s},q5:function(){return p},yo:function(){return f}});var n=e(861),a=e(757),c=e.n(a),u=e(44).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"171815f7c9e508fe2a53a40eb2dd3583"}}),i=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/search/movie",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/trending/movie/day");case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},683:function(t,r,e){function n(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){n(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}e.d(r,{Z:function(){return c}})}}]);
//# sourceMappingURL=544.dc77ec18.chunk.js.map