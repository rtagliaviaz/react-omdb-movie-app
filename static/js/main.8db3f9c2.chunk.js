(this["webpackJsonpsignifica-test"]=this["webpackJsonpsignifica-test"]||[]).push([[0],{44:function(e,t,c){},68:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(18),i=c.n(a),n=(c(44),c(14)),r=c(3),o=c(39),l=c(23),j=c.n(l),d=c(4),b=c(36),m=c(11),O="loading",v="error",h="get_favorite_movies",u="get_last_search",f="get_last_movie_list",p=function(e){return function(t,c){var s=c().favoriteMoviesReducer.favoriteMovies;s.push(e),t({type:h,payload:s})}},x=function(e){return function(t,c){var s=c().favoriteMoviesReducer,a=s.favoriteMovies,i=s.lastMovieList,n=a.map((function(e){return e.imdbID})).indexOf(e);n>-1&&a.splice(n,1);var r=i.map((function(e){return e.imdbID})).indexOf(e);r>-1&&(i[r].favorite=!1),t({type:h,payload:a})}},g=function(e){return function(t){t({type:f,payload:e})}},N=c(10),y=c(17),_=c.n(y),D=(c(68),c(0)),I=function(){return Object(D.jsx)("div",{className:"centerSpinner",children:Object(D.jsxs)("div",{className:"lds-ripple",children:[Object(D.jsx)("div",{}),Object(D.jsx)("div",{})]})})},M=function(){var e=Object(N.c)((function(e){return e.favoriteMoviesReducer})),t=e.favoriteMovies,c=e.lastSearch,a=e.lastMovieList,i=(e.loader,e.error,Object(N.b)()),r=Object(s.useState)(!1),l=Object(m.a)(r,2),O=l[0],v=l[1],h=Object(s.useState)([]),f=Object(m.a)(h,2),y=f[0],M=f[1],w=Object(s.useState)(""),S=Object(m.a)(w,2),k=S[0],P=S[1],L=Object(s.useState)(!1),R=Object(m.a)(L,2),T=R[0],E=R[1];Object(s.useEffect)((function(){""!==c&&a.length>0&&(P(c),a.forEach((function(e){t.forEach((function(t){e.imdbID.includes(t.imdbID)&&(e.favorite=!0)}))})),M(a))}),[]);var Y=function(){var e=Object(b.a)(j.a.mark((function e(){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,_.a.get("".concat("http://www.omdbapi.com/?").concat("apikey=18eaeb4f","&s=").concat(k,"&type=movie&page=1"));case 4:(c=e.sent)&&(s=[],c.data.Search.map((function(e,t){return s[t]=Object(d.a)(Object(d.a)({},s[t]),{},{favorite:!1,imdbID:e.imdbID,Title:e.Title,Poster:e.Poster,Year:e.Year})})),s.forEach((function(e){t.forEach((function(t){e.imdbID.includes(t.imdbID)&&(e.favorite=!0)}))})),i(g(s)),M(s),E(!1),v(!1)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),v(!1),E(!0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"searchBar",children:[Object(D.jsx)("img",{src:"",alt:""}),Object(D.jsx)("input",{type:"text",placeholder:"Search movies...",onChange:function(e){return P(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(Y(),E(!1),i(function(e){return function(t){t({type:u,payload:e})}}(k)))}})]}),Object(D.jsx)("div",{className:"content",children:y.length>0?O?Object(D.jsx)(I,{}):T?Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"homeLogo",children:Object(D.jsx)("img",{src:"/assets/Logo.png",alt:""})}),Object(D.jsx)("div",{className:"homeMsg",children:Object(D.jsx)("p",{className:"primary",children:"Cannot find movies with that name, please search for another"})})]}):y.length>0?Object(D.jsxs)("div",{className:"movies",children:[y.map((function(e,t){return Object(D.jsxs)("div",{className:"movie",children:[Object(D.jsx)("div",{className:"favorite",onClick:function(c){return function(e,t,c,s,a,n,r){e.preventDefault();var l=Object(o.a)(y);l[r]=Object(d.a)(Object(d.a)({},y[r]),{},{favorite:!n}),M(l),i(!0!==n?p({Poster:a,Title:c,Year:s,favorite:!0,imdbID:t}):x(t))}(c,e.imdbID,e.Title,e.Year,e.Poster,e.favorite,t)},children:e.favorite?Object(D.jsx)("img",{src:"/assets/icons/icon-heart-full.png",alt:"",className:"icon"}):Object(D.jsx)("img",{src:"/assets/icons/icon-heart-white.png",alt:"",className:"icon"})}),Object(D.jsx)(n.b,{className:"invisibleButton",to:{pathname:"/details/".concat(e.imdbID),state:{movieID:e.imdbID,lastSearch:k}}}),Object(D.jsx)("p",{className:"movieTitle",children:e.Title}),Object(D.jsx)("p",{className:"movieYear",children:e.Year}),Object(D.jsx)("img",{src:e.Poster,alt:"",className:"moviePoster"})]},e.imdbID)})),Object(D.jsx)("div",{className:"empty-space"}),Object(D.jsx)("div",{className:"empty-space"}),Object(D.jsx)("div",{className:"empty-space"})]}):void 0:T?Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"homeLogo",children:Object(D.jsx)("img",{src:"/assets/Logo.png",alt:""})}),Object(D.jsx)("div",{className:"homeMsg",children:Object(D.jsx)("p",{className:"primary",children:"Cannot find movies with that name, please search for another"})})]}):Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"homeLogo",children:Object(D.jsx)("img",{src:"/assets/Logo.png",alt:""})}),Object(D.jsxs)("div",{className:"homeMsg",children:[Object(D.jsx)("p",{className:"primary",children:"Don't Know what to search?"}),Object(D.jsx)("p",{className:"secondary",children:"Here's an offer you can't refuse"})]})]})})]})},w=(c(71),"http://www.omdbapi.com/?"),S="apikey=18eaeb4f",k=function(e){var t=Object(r.f)(),c=Object(N.c)((function(e){return e.favoriteMoviesReducer})),a=c.favoriteMovies,i=(c.loader,c.error,Object(N.b)()),n=Object(s.useState)(),o=Object(m.a)(n,2),l=o[0],j=o[1],d=Object(s.useState)(!1),b=Object(m.a)(d,2),O=b[0],v=b[1];Object(s.useEffect)((function(){void 0!==e.location.state?_.a.get(w+S+"&i=".concat(e.location.state.movieID)).then((function(e){e&&j(e.data)})):_.a.get(w+S+"&i=".concat(e.match.url.slice(9,18))).then((function(e){e&&j(e.data)}))}),[]),Object(s.useEffect)((function(){l&&a.map((function(e){return e.imdbID})).includes(l.imdbID)&&v(!0)}),[l]);return Object(D.jsx)("div",{children:void 0===l?Object(D.jsx)(I,{}):Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"btn__return",onClick:function(){return t.goBack()},children:Object(D.jsx)("img",{src:"/assets/icons/icon-arrow-grey.png",alt:""})}),Object(D.jsxs)("div",{className:"movie-info",children:[Object(D.jsxs)("div",{className:"info",children:[Object(D.jsx)("div",{className:"info__title-year-rate",children:Object(D.jsxs)("p",{children:[l.Runtime," \xb7 ",l.Year," \xb7 ",Object(D.jsx)("b",{className:"info__title-year-rate__rate",children:l.Rated})]})}),Object(D.jsx)("div",{className:"info__title-year-rate__title",children:Object(D.jsx)("p",{children:l.Title})}),Object(D.jsxs)("div",{className:"labels",children:[Object(D.jsxs)("div",{className:"labels__imdb",children:[Object(D.jsx)("div",{className:"logo",children:Object(D.jsx)("img",{src:"/assets/logos/logo-imdb.png",alt:""})}),Object(D.jsx)("div",{className:"rating",children:Object(D.jsx)("p",{children:l.Ratings[0].Value})})]}),l.Ratings.length>1?Object(D.jsxs)("div",{className:"labels__rottenTomatoes",children:[Object(D.jsx)("div",{className:"logo",children:Object(D.jsx)("img",{src:"/assets/logos/logo-rotten-tomatoes.png",alt:""})}),Object(D.jsx)("div",{className:"rating",children:Object(D.jsx)("p",{children:l.Ratings[1].Value})})]}):null,O?Object(D.jsxs)("div",{className:"labels__favorite favAdded",onClick:function(e){return function(e,t){if(e.preventDefault(),O)return v(!O),void i(x(t))}(e,l.imdbID)},children:[Object(D.jsx)("div",{className:"icon",children:Object(D.jsx)("img",{src:"/assets/icons/icon-heart-full.png",alt:""})}),Object(D.jsx)("div",{className:"text added",children:Object(D.jsx)("p",{children:"Added"})})]}):Object(D.jsxs)("div",{className:"labels__favorite",onClick:function(e){return t=l.Poster,c=l.Title,s=l.Year,a=l.imdbID,i(p({Poster:t,Title:c,Year:s,favorite:!0,imdbID:a})),void v(!O);var t,c,s,a},children:[Object(D.jsx)("div",{className:"icon",children:Object(D.jsx)("img",{src:"/assets/icons/icon-heart-grey.png",alt:""})}),Object(D.jsx)("div",{className:"text",children:Object(D.jsx)("p",{children:"Add to favourites"})})]})]}),Object(D.jsxs)("div",{className:"plot-segment",children:[Object(D.jsx)("p",{className:"segment-title",children:"Plot"}),Object(D.jsx)("p",{className:"segment-info",children:l.Plot})]}),Object(D.jsxs)("div",{className:"cast-genre-director",children:[Object(D.jsxs)("div",{className:"cast-segment",children:[Object(D.jsx)("p",{className:"segment-title",children:"Cast"}),l.Actors.split(", ").map((function(e){return Object(D.jsx)("p",{className:"segment-info",children:e},e)}))]}),Object(D.jsxs)("div",{className:"genre-segment",children:[Object(D.jsx)("p",{className:"segment-title",children:"Genre"}),l.Genre.split(", ").map((function(e){return Object(D.jsx)("p",{className:"segment-info",children:e},e)}))]}),Object(D.jsxs)("div",{className:"director-segment",children:[Object(D.jsx)("p",{className:"segment-title",children:"Director"}),l.Director.split(", ").map((function(e){return Object(D.jsx)("p",{className:"segment-info",children:e},e)}))]})]})]}),Object(D.jsx)("div",{className:"poster",children:Object(D.jsx)("img",{src:l.Poster,alt:""})})]})]})})},P=function(){return Object(D.jsx)("div",{className:"App",children:Object(D.jsx)(n.a,{children:Object(D.jsxs)(r.c,{children:[Object(D.jsx)(r.a,{exact:!0,path:"/",component:M}),Object(D.jsx)(r.a,{exact:!0,path:"/details/:imdbId",component:k})]})})})},L=c(12),R=c(38),T={loader:!1,error:"",favoriteMovies:[],lastSearch:"",lastMovieList:[]},E=Object(L.c)({favoriteMoviesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(d.a)(Object(d.a)({},e),{},{lastMovieList:t.payload});case u:return Object(d.a)(Object(d.a)({},e),{},{lastSearch:t.payload});case h:return Object(d.a)(Object(d.a)({},e),{},{favoriteMovies:t.payload,loader:!1,error:""});case O:return Object(d.a)(Object(d.a)({},e),{},{loader:!0});case v:return Object(d.a)(Object(d.a)({},e),{},{loader:!1,error:t.payload});default:return e}}}),Y=Object(L.d)(E,{},Object(L.a)(R.a));i.a.render(Object(D.jsx)(N.a,{store:Y,children:Object(D.jsx)(P,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.8db3f9c2.chunk.js.map