(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{298:function(e,n,t){var content=t(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(141).default)("6aabc0da",content,!0,{sourceMap:!1})},299:function(e,n,t){"use strict";t(298)},300:function(e,n,t){var o=t(140)((function(i){return i[1]}));o.push([e.i,".game-window[data-v-662fd8a2]{align-items:center;background-color:#000;box-sizing:border-box;color:#fff;display:flex;flex-direction:column;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.apple-image[data-v-662fd8a2]{max-height:100px;max-width:100px;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none;cursor:pointer;transition:transform .2s ease-in-out}.apple-image.enlarged[data-v-662fd8a2]{transform:scale(1.2)}.apple-image.clicked[data-v-662fd8a2]{animation:click-animation-662fd8a2 .2s ease-in-out}@keyframes click-animation-662fd8a2{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}@media (max-width:600px){.game-window[data-v-662fd8a2]{padding:10px}}",""]),o.locals={},e.exports=o},301:function(e,n,t){"use strict";t.r(n);t(85);var o=t(1),c=Object(o.b)({name:"GameWindow",setup:function(){var e=Object(o.c)("/game-on-vue/apple.png"),n=Object(o.c)(!1),t=Object(o.c)(!1),c=Object(o.c)(0);return{appleImage:e,isEnlarged:n,isClicked:t,counter:c,enlarge:function(){n.value=!0},shrink:function(){n.value=!1},incrementCounter:function(){c.value+=1,t.value=!0,setTimeout((function(){t.value=!1}),200)}}}}),r=(t(299),t(51)),component=Object(r.a)(c,(function(){var e=this,n=e._self._c;e._self._setupProxy;return n("div",{staticClass:"game-window"},[n("h1",[e._v(e._s(e.counter))]),e._v(" "),n("img",{staticClass:"apple-image",class:{enlarged:e.isEnlarged,clicked:e.isClicked},attrs:{src:e.appleImage,alt:"Apple"},on:{mouseover:e.enlarge,mouseleave:e.shrink,click:e.incrementCounter}})])}),[],!1,null,"662fd8a2",null);n.default=component.exports}}]);