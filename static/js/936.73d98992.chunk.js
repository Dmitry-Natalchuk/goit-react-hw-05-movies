"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936,854],{854:function(e,t,r){r.r(t);var n=r(691),a=r(184);t.default=function(){return(0,a.jsx)(n.fe,{visible:!0,height:"100",width:"100",ariaLabel:"dna-loading",wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"dna-wrapper"})}},909:function(e,t,r){r.d(t,{a:function(){return l}});var n=r(683),a=r(731),c=r(470),i={item:"MoviesItem_item__jqTBO",title:"MoviesItem_title__vhiTm",infoMovie:"MoviesItem_infoMovie__8nZ+b",score:"MoviesItem_score__yu7gp"},s=r(604),o=r(184),u=function(e){var t=e.id,r=e.original_title,n=e.poster_path,u=e.vote_average,f=(0,c.TH)();return(0,o.jsx)("div",{className:i.item,children:(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{state:{from:f},to:"/movies/".concat(t),children:(0,o.jsxs)("div",{className:i.container,children:[(0,o.jsx)("img",{src:(0,s.v)(n),alt:r}),(0,o.jsxs)("div",{className:i.infoMovie,children:[(0,o.jsx)("h2",{className:i.title,children:r}),(0,o.jsx)("p",{className:i.score,children:u.toFixed(1)})]})]})})})})},f="MoviesGallery_container__p0OR5",p="MoviesGallery_gallery__XrCR3",l=function(e){var t=e.items;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:f,children:(0,o.jsx)("ul",{className:p,children:t.map((function(e){return(0,o.jsx)(u,(0,n.Z)({},e),e.id)}))})})})}},936:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),a=r(885),c=r(757),i=r.n(c),s=r(791),o=r(909),u=r(119),f=r(854),p="Home_title__L087v",l=r(184),v=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],v=(0,s.useState)(!1),d=(0,a.Z)(v,2),m=d[0],h=d[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,(0,u.Df)();case 3:t=e.sent,r=t.results;try{c(r),h(!1)}catch(n){console.log(n.message),h(!1)}case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsx)(l.Fragment,{children:Boolean(r.length)&&(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:p,children:"Today's Trending Movies"}),m&&(0,l.jsx)(f.default,{}),(0,l.jsx)(o.a,{items:r})]})})}},604:function(e,t,r){r.d(t,{v:function(){return n}});var n=function(e){return e?"".concat("https://image.tmdb.org/t/p/w500").concat(e):"".concat("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIZxcqjHSXy3woDzxKGajAzwWnoc96DXFgOFxhb0r5rCn61zO&s")}},119:function(e,t,r){r.d(t,{Df:function(){return o},V0:function(){return s},fh:function(){return u},q5:function(){return p},yo:function(){return f}});var n=r(861),a=r(757),c=r.n(a),i=r(44).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"171815f7c9e508fe2a53a40eb2dd3583"}}),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},683:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=936.73d98992.chunk.js.map