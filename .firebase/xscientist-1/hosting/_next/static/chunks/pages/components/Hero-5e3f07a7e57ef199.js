(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[249],{6701:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Hero",function(){return n(3033)}])},3033:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(1351),o=n(5893);n(7294);var i=n(4731),s=n(2637);function u(e){var e=null!==e?e:(0,r.Z)(TypeError("Cannot destructure undefined"));return(0,o.jsxs)("div",{className:"flex flex-col justify-center items-center h-screen space-y-5",children:[(0,o.jsx)(i.E.h1,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},className:"uppercase text-4xl font-extrabold",children:"Make"}),(0,o.jsx)(i.E.h1,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},className:"uppercase text-4xl font-extrabold",children:(0,o.jsx)(s.rf,{words:["Eat","Sleep","Code","Repeat!"],loop:5,cursor:!0,cursorStyle:"_",typeSpeed:70,deleteSpeed:50,delaySpeed:1e3})}),(0,o.jsxs)(i.E.h1,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},className:"uppercase text-4xl font-extrabold",children:["awesome"," ","!"]})]})}},2637:function(e,t,n){"use strict";var r=n(5893),o=n(7294),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e,t){var n,r;switch(t.type){case"TYPE":return i(i({},e),{speed:t.speed,text:null===(n=t.payload)||void 0===n?void 0:n.substring(0,e.text.length+1)});case"DELAY":return i(i({},e),{speed:t.payload});case"DELETE":return i(i({},e),{speed:t.speed,text:null===(r=t.payload)||void 0===r?void 0:r.substring(0,e.text.length-1)});case"COUNT":return i(i({},e),{count:e.count+1});default:return e}}var u=function(e){var t=e.words,n=void 0===t?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,i=void 0===r?1:r,u=e.typeSpeed,c=void 0===u?80:u,l=e.deleteSpeed,a=void 0===l?50:l,d=e.delaySpeed,p=void 0===d?1500:d,y=e.onLoopDone,f=e.onType,h=e.onDelete,v=e.onDelay,m=o.useReducer(s,{speed:c,text:"",count:0}),_=m[0],x=_.speed,T=_.text,E=_.count,g=m[1],S=o.useRef(0),C=o.useRef(!1),b=o.useRef(!1),k=o.useRef(!1),w=o.useRef(!1),D=o.useCallback(function(){var e=n[E%n.length];b.current?(g({type:"DELETE",payload:e,speed:a}),""===T&&(b.current=!1,g({type:"COUNT"}))):(g({type:"TYPE",payload:e,speed:c}),k.current=!0,T===e&&(g({type:"DELAY",payload:p}),k.current=!1,w.current=!0,setTimeout(function(){w.current=!1,b.current=!0},p),i>0&&(S.current+=1,S.current/n.length===i&&(w.current=!1,C.current=!0)))),k.current&&f&&f(S.current),b.current&&h&&h(),w.current&&v&&v()},[E,p,a,i,c,n,T,f,h,v]);return o.useEffect(function(){var e=setTimeout(D,x);return C.current&&clearTimeout(e),function(){return clearTimeout(e)}},[D,x]),o.useEffect(function(){y&&C.current&&y()},[y]),[T,{isType:k.current,isDelay:w.current,isDelete:b.current,isDone:C.current}]};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var c=o.memo(function(e){var t=e.cursorBlinking,n=e.cursorStyle,o=e.cursorColor;return r.jsx("span",i({style:{color:void 0===o?"inherit":o},className:"".concat("styles-module_blinkingCursor__yugAC"," ").concat(void 0===t||t?"styles-module_blinking__9VXRT":"")},{children:void 0===n?"|":n}))});t.rf=function(e){var t,n=e.words,o=e.loop,i=e.typeSpeed,s=e.deleteSpeed,l=e.delaySpeed,a=e.cursor,d=e.cursorStyle,p=e.cursorColor,y=e.cursorBlinking,f=e.onLoopDone,h=e.onType,v=u({words:void 0===n?["Hello World!","This is","a simple Typewriter"]:n,loop:void 0===o?1:o,typeSpeed:void 0===i?80:i,deleteSpeed:void 0===s?50:s,delaySpeed:void 0===l?1500:l,onLoopDone:f,onType:h,onDelay:e.onDelay,onDelete:e.onDelete})[0];return r.jsxs(r.Fragment,{children:[r.jsx("span",{children:v}),void 0!==a&&a&&r.jsx(c,{cursorStyle:void 0===d?"|":d,cursorColor:void 0===p?"inherit":p,cursorBlinking:void 0===y||y})]})}},1351:function(e,t,n){"use strict";function r(e){throw e}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[731,774,888,179],function(){return e(e.s=6701)}),_N_E=e.O()}]);