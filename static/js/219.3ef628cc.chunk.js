"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{8663:function(n,t,e){e.d(t,{GQ:function(){return k},Im:function(){return h},VA:function(){return f},fn:function(){return g},tq:function(){return y},xF:function(){return m}});var r=e(5861),a=e(4687),c=e.n(a),i=e(1243),u=(e(5462),"https://api.themoviedb.org/3"),o="db1df0c9565c427084a8440ce91f6639",s="/trending/movie/",p="/search/movie",l="&language=en",f="https://image.tmdb.org/t/p/w500/";function h(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"day",n.next=3,i.Z.get("".concat(u).concat(s).concat("day","?api_key=").concat(o));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"&page=1",n.next=3,i.Z.get("".concat(u).concat(p,"?api_key=").concat(o,"&query=").concat(t,"&include_adult=false").concat(l).concat("&page=1"));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(o).concat(l));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(o).concat(l));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(o).concat(l));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},4219:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,c,i,u=e(5861),o=e(9439),s=e(4687),p=e.n(s),l=e(2791),f=e(7689),h=e(8663),d=e(168),m=e(5706),x=m.Z.ul(r||(r=(0,d.Z)(["\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-gap: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n"]))),g=m.Z.img(a||(a=(0,d.Z)(["\ndisplay:block;\nwidth:80px;\n"]))),v=m.Z.div(c||(c=(0,d.Z)(["\n display: block;\nposition: relative;\n\n width:80px;\nheight:120px;\nbackground-color:#B0C4DE;\n"]))),y=m.Z.span(i||(i=(0,d.Z)(["\ndispaly: block;\nposition: absolute;\ntop:50%;\nleft:50%;\n transform: translate(-50%, -50%);\n font-family: serif;\n \n\n color:white;\n"]))),w=e(184),k=function(){var n=(0,l.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,f.UO)().movieId,c=(0,l.useState)(null),i=(0,o.Z)(c,2),s=i[0],d=i[1];(0,l.useEffect)((function(){m(a)}),[a]);var m=function(){var n=(0,u.Z)(p().mark((function n(t){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(null),n.next=4,(0,h.tq)(t);case 4:e=n.sent,r(e.data.cast),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),d(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}();return(0,w.jsx)(w.Fragment,{children:s?(0,w.jsxs)("p",{children:[s," "]}):(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(x,{children:0!==e.length?e.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path;return(0,w.jsxs)("li",{children:[a?(0,w.jsx)(g,{src:"".concat(h.VA).concat(a),alt:e}):(0,w.jsx)(v,{children:(0,w.jsx)(y,{children:e})}),(0,w.jsx)("h5",{children:e}),(0,w.jsxs)("p",{children:["Character: ",r]})]},t)})):(0,w.jsx)("h5",{children:"We don't have any cast."})})})})}}}]);
//# sourceMappingURL=219.3ef628cc.chunk.js.map