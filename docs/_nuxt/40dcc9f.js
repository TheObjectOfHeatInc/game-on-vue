(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{298:function(e,t,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(141).default)("3ad4bad4",content,!0,{sourceMap:!1})},299:function(e,t,n){"use strict";n(298)},300:function(e,t,n){var o=n(140)((function(i){return i[1]}));o.push([e.i,".game-window[data-v-a8985b90]{align-items:center;background-color:#000;box-sizing:border-box;color:#fff;display:flex;flex-direction:column;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.apple-image[data-v-a8985b90]{max-height:100px;max-width:100px;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:10;-webkit-user-drag:none;cursor:pointer;transition:transform .2s ease-in-out}.apple-image.clicked[data-v-a8985b90]{animation:click-animation-a8985b90 .2s ease-in-out}@keyframes click-animation-a8985b90{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.congrats-message[data-v-a8985b90]{animation:fade-in-out-a8985b90 3s ease-in-out;background-color:#4caf50;border-radius:5px;bottom:20px;color:#fff;padding:10px 20px;position:absolute}@keyframes fade-in-out-a8985b90{0%{opacity:0}10%{opacity:1}90%{opacity:1}to{opacity:0}}.flying-apple[data-v-a8985b90]{animation:fly-a8985b90 3s ease-in-out;left:50%;position:absolute;top:50%;z-index:5}.flying-apple[data-v-a8985b90],.small-apple[data-v-a8985b90]{height:40px;width:40px}@keyframes fly-a8985b90{0%{opacity:1;transform:translate(-50%,-50%) scale(1)}to{opacity:0;transform:translate(calc(-50% + var(--random-x)),calc(-50% + var(--random-y))) scale(.5)}}@media (max-width:600px){.game-window[data-v-a8985b90]{padding:10px}}",""]),o.locals={},e.exports=o},301:function(e,t,n){"use strict";n.r(t);n(51),n(28),n(85);var o=n(1),r=Object(o.b)({name:"GameWindow",setup:function(){var e=Object(o.d)("/game-on-vue/apple.png"),t=Object(o.d)(!1),n=Object(o.d)(0),r=Object(o.d)(!1),l=Object(o.d)([]);return Object(o.c)((function(){document.addEventListener("touchstart",(function(e){e.touches.length>1&&e.preventDefault()}),{passive:!1});var e=0;document.addEventListener("touchend",(function(t){var n=(new Date).getTime();n-e<=300&&t.preventDefault(),e=n}),!1),document.addEventListener("gesturestart",(function(e){e.preventDefault()}))})),{appleImage:e,isClicked:t,counter:n,showCongrats:r,flyingApples:l,incrementCounter:function(){n.value+=1,t.value=!0,setTimeout((function(){t.value=!1}),200),n.value%10==0&&(r.value=!0,setTimeout((function(){r.value=!1}),3e3),l.value=Array.from({length:300},(function(){return{x:Math.random()*window.innerWidth-window.innerWidth/2,y:Math.random()*window.innerHeight-window.innerHeight/2}})),setTimeout((function(){l.value=[]}),3e3))}}}}),l=(n(299),n(52)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"game-window",on:{touchstart:function(e){e.preventDefault()}}},[t("h1",[e._v(e._s(e.counter))]),e._v(" "),t("img",{staticClass:"apple-image",class:{clicked:e.isClicked},attrs:{src:e.appleImage,alt:"Apple"},on:{click:e.incrementCounter}}),e._v(" "),e.showCongrats?t("div",{staticClass:"congrats-message"},[e._v("\n    Поздравляем! Вы нажали на яблоко "+e._s(e.counter)+" раз!\n  ")]):e._e(),e._v(" "),e._l(e.flyingApples,(function(n,o){return t("div",{key:o,staticClass:"flying-apple",style:{"--random-x":n.x+"px","--random-y":n.y+"px"}},[t("img",{staticClass:"small-apple",attrs:{src:e.appleImage,alt:"Flying Apple"}})])}))],2)}),[],!1,null,"a8985b90",null);t.default=component.exports},305:function(e,t,n){"use strict";n.r(t);var o={components:{GameWindow:n(301).default}},r=n(52),component=Object(r.a)(o,(function(){var e=this._self._c;return e("div",[e("GameWindow")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{GameWindow:n(301).default})}}]);