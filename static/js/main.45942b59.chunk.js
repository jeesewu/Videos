(this.webpackJsonpvideo=this.webpackJsonpvideo||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),s=n(17),c=n.n(s),r=n(8),d=n.n(r),o=n(18),l=n(3),u=n(4),h=n(6),j=n(5),m=n(19),v=n.n(m).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyAs5Ze8wcmr807LNWPKsD5gyEn077YfkYs"}}),b=n(0),p=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={term:""},e.handleInputChange=function(t){e.setState({term:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),e.props.onSearchSubmit(e.state.term)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"search-bar ui segment",style:{marginTop:"10px"},children:Object(b.jsx)("form",{className:"ui form",onSubmit:this.handleFormSubmit,children:Object(b.jsx)("input",{type:"text",placeholder:"Search Videos...",value:this.state.term,onChange:this.handleInputChange})})})}}]),n}(a.a.Component),O=function(e){var t=e.video;if(!t)return null;var n="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"ui embed",children:Object(b.jsx)("iframe",{title:"video player",src:n})}),Object(b.jsxs)("div",{className:"ui segment",children:[Object(b.jsx)("h3",{className:"ui header",children:t.snippet.title}),Object(b.jsx)("p",{children:t.snippet.description})]})]})},f=(n(44),function(e){var t=e.video,n=e.onVideoSelect;return Object(b.jsxs)("div",{className:"video-item item",onClick:function(){return n(t)},children:[Object(b.jsx)("img",{className:"ui image",src:t.snippet.thumbnails.default.url,alt:t.snippet.title}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("h3",{className:"header",children:t.snippet.title})})]})}),x=function(e){var t=e.videos,n=e.onVideoSelect,i=t.map((function(e){return Object(b.jsx)(f,{video:e,onVideoSelect:n},e.id.videoId)}));return Object(b.jsx)("div",{className:"ui relaxed divided list",children:i})},S=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={videos:[],selectedVideo:null},e.handleSearchSubmit=function(){var t=Object(o.a)(d.a.mark((function t(n){var i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("/search",{params:{q:n,part:"snippet",maxResults:5}});case 2:i=t.sent,e.setState({videos:i.data.items,selectedVideo:i.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"ui container",children:[Object(b.jsx)(p,{onSearchSubmit:this.handleSearchSubmit}),Object(b.jsx)("div",{className:"ui grid",children:Object(b.jsxs)("div",{className:"ui row",children:[Object(b.jsx)("div",{className:"eleven wide column",children:Object(b.jsx)(O,{video:this.state.selectedVideo})}),Object(b.jsx)("div",{className:"five wide column",children:Object(b.jsx)(x,{videos:this.state.videos,onVideoSelect:this.handleVideoSelect})})]})})]})}}]),n}(a.a.Component);c.a.render(Object(b.jsx)(S,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.45942b59.chunk.js.map