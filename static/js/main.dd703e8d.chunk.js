(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{45:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(14),c=s.n(i),r=s(5),o=s.n(r),l=s(15),m=s(16),j=s(17),d=s(20),u=s(19),v=s(18),h=s.n(v),p=(s(45),s(0));var b=function(e){var t=e.year,s=e.title,a=e.summary,n=e.poster,i=e.genres;return Object(p.jsxs)("div",{className:"movie",children:[Object(p.jsx)("img",{src:n,alt:s,title:s}),Object(p.jsxs)("div",{className:"movie__data",children:[Object(p.jsx)("h3",{className:"movie__title",children:s}),Object(p.jsx)("h5",{className:"movie__year",children:t}),Object(p.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(p.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(p.jsxs)("p",{className:"movie__summary",children:[a.slice(0,100),"..."]})]})]})},O=(s(47),function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:s=t.sent,a=s.data.data.movies,console.log(a),e.setState({movies:a,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(p.jsxs)("section",{className:"container",children:[Object(p.jsx)("h1",{className:"top20",children:"MOVIE TOP 20"}),t?Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(p.jsx)("div",{className:"movies",children:s.map((function(e){return Object(p.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})]})}}]),s}(n.a.Component)),x=O;c.a.render(Object(p.jsx)(x,{}),document.getElementById("potato"))}},[[48,1,2]]]);
//# sourceMappingURL=main.dd703e8d.chunk.js.map