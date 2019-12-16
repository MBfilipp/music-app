(this["webpackJsonpmovie-db-search"]=this["webpackJsonpmovie-db-search"]||[]).push([[0],{1:function(e,t,a){},11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),i=a.n(r),l=(a(16),a(9)),o=a.n(l),s=a(6);a(1);function m(e){return c.a.createElement("div",{className:"ArtistDiv"},c.a.createElement("img",{className:"IconSong",src:e.item.artist.picture,alt:"Icon Artist"}),c.a.createElement("h1",{className:"ArtistName"},e.item.artist.name," - ",e.item.title),e.children)}function u(e){return c.a.createElement("div",{className:"ButtonDiv"},c.a.createElement("button",{className:"Btn gradient",type:"button",onClick:e.function},"Info"))}var d=a(3),p=a(4),h=a(7),E=a(5),v=a(8),f=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(c)))).el=document.createElement("div"),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){document.body.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.el)}},{key:"render",value:function(){return i.a.createPortal(this.props.children,this.el)}}]),t}(c.a.Component),b=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(f,null,this.props.isOpen&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"ModalOverlay"},c.a.createElement("div",{className:"ModalWindow"},c.a.createElement("div",{className:"ModalHeader"},c.a.createElement("h1",{className:"ModalHeaderH1"},this.props.modal.artist.name," - ",this.props.modal.title),c.a.createElement("button",{className:"BtnModal gradient",type:"button",onClick:this.props.closeWindow},"\u27a4")),c.a.createElement("div",{className:"ModalBody"},this.props.children)))))}}]),t}(c.a.Component);function N(e){return c.a.createElement("div",{className:"Statistic"},c.a.createElement("h1",{style:{paddingBottom:"20px"},className:"StatisticTitle"},e.statisticInfo," - ",e.item),e.children)}function y(e){return c.a.createElement(b,{isOpen:e.isOpen,closeWindow:e.function,modal:e.item},c.a.createElement("div",{className:"Flex"},c.a.createElement(N,{statisticInfo:"Album",item:e.item.album.title},c.a.createElement("img",{className:"IconSong",src:e.item.album.cover,alt:"Album"})),c.a.createElement(N,{statisticInfo:"Rank",item:e.item.type},c.a.createElement("h1",{className:"RankH1"},e.item.rank))))}var g=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],i=a[1];return c.a.createElement("li",{className:"LiMusic"},c.a.createElement(m,{item:e.item},c.a.createElement("audio",{className:"Audio",controls:!0},c.a.createElement("source",{src:e.item.preview,type:"audio/mpeg"}))),c.a.createElement(u,{function:function(){return i(!0)}}),c.a.createElement(y,{item:e.item,isOpen:r,function:function(){return i(!1)}}))};function O(e){return c.a.createElement("table",{className:"TitleBar"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("img",{src:"icon.svg",width:"124",alt:"ICON"})),c.a.createElement("td",null,c.a.createElement("h1",null,e.title)))))}var k=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{title:"Music Search"}),c.a.createElement("input",{type:"text",placeholder:"Input artist",onChange:function(e){var t,a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=".concat(e.target.value),{method:"GET",headers:{"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"93e08c48damshd4f9f756737ac3fp157a43jsn59014a1c5cdf"}}));case 2:return t=n.sent,n.next=5,o.a.awrap(t.json());case 5:a=n.sent,console.log(a.data),r(a.data);case 8:case"end":return n.stop()}}))},className:"SearchTrack"}),c.a.createElement("ul",{className:"UlMusic"},void 0!==a&&a.length?a.map((function(e){return c.a.createElement(g,{key:e.id,item:e})})):c.a.createElement("div",{className:"DivInput"},c.a.createElement("h1",{className:"H1Input"},"Input Track..."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.e4cd94f2.chunk.js.map