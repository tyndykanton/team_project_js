function e(e){return e&&e.__esModule?e.default:e}var t,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s=!("undefined"==typeof window||!window.document||!window.document.createElement);t=s;var r=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},l="object"==typeof i&&i&&i.Object===Object&&i,o="object"==typeof self&&self&&self.Object===Object&&self,n=l||o||Function("return this")(),a=function(){return n.Date.now()},c=/\s/;var h=function(e){for(var t=e.length;t--&&c.test(e.charAt(t)););return t},d=/^\s+/;var u=n.Symbol,p=Object.prototype,v=p.hasOwnProperty,f=p.toString,m=u?u.toStringTag:void 0;var g=function(e){var t=v.call(e,m),i=e[m];try{e[m]=void 0;var s=!0}catch(e){}var r=f.call(e);return s&&(t?e[m]=i:delete e[m]),r},b=Object.prototype.toString;var y=function(e){return b.call(e)},x=u?u.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?g(e):y(e)};var w=function(e){return null!=e&&"object"==typeof e};var S=function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==E(e)},O=/^[-+]0x[0-9a-f]+$/i,A=/^0b[01]+$/i,k=/^0o[0-7]+$/i,L=parseInt;var M=function(e){if("number"==typeof e)return e;if(S(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;var i;e=(i=e)?i.slice(0,h(i)+1).replace(d,""):i;var s=A.test(e);return s||k.test(e)?L(e.slice(2),s?2:8):O.test(e)?NaN:+e},W=Math.max,N=Math.min;var C=function(e,t,i){var s,l,o,n,c,h,d=0,u=!1,p=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var i=s,r=l;return s=l=void 0,d=t,n=e.apply(r,i)}function m(e){return d=e,c=setTimeout(b,t),u?f(e):n}function g(e){var i=e-h;return void 0===h||i>=t||i<0||p&&e-d>=o}function b(){var e=a();if(g(e))return y(e);c=setTimeout(b,function(e){var i=t-(e-h);return p?N(i,o-(e-d)):i}(e))}function y(e){return c=void 0,v&&s?f(e):(s=l=void 0,n)}function x(){var e=a(),i=g(e);if(s=arguments,l=this,h=e,i){if(void 0===c)return m(h);if(p)return clearTimeout(c),c=setTimeout(b,t),f(h)}return void 0===c&&(c=setTimeout(b,t)),n}return t=M(t)||0,r(i)&&(u=!!i.leading,o=(p="maxWait"in i)?W(M(i.maxWait)||0,t):o,v="trailing"in i?!!i.trailing:v),x.cancel=function(){void 0!==c&&clearTimeout(c),d=0,s=h=l=c=void 0},x.flush=function(){return void 0===c?n:y(a())},x};var z=function(e,t,i){var s=!0,l=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return r(i)&&(s="leading"in i?!!i.leading:s,l="trailing"in i?!!i.trailing:l),C(e,t,{leading:s,maxWait:t,trailing:l})},D=function(){return D=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},D.apply(this,arguments)},T=null,q=null;function R(){if(null===T){if("undefined"==typeof document)return T=0;var e=document.body,t=document.createElement("div");t.classList.add("simplebar-hide-scrollbar"),e.appendChild(t);var i=t.getBoundingClientRect().right;e.removeChild(t),T=i}return T}function V(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView:window}function B(e){return e&&e.ownerDocument?e.ownerDocument:document}e(t)&&window.addEventListener("resize",(function(){q!==window.devicePixelRatio&&(q=window.devicePixelRatio,T=null)}));var H=function(e){return Array.prototype.reduce.call(e,(function(e,t){var i=t.name.match(/data-simplebar-(.+)/);if(i){var s=i[1].replace(/\W+(.)/g,(function(e,t){return t.toUpperCase()}));switch(t.value){case"true":e[s]=!0;break;case"false":e[s]=!1;break;case void 0:e[s]=!0;break;default:e[s]=t.value}}return e}),{})};function _(e,t){var i;e&&(i=e.classList).add.apply(i,t.split(" "))}function j(e,t){e&&t.split(" ").forEach((function(t){e.classList.remove(t)}))}function Y(e){return".".concat(e.split(" ").join("."))}var I=Object.freeze({__proto__:null,getElementWindow:V,getElementDocument:B,getOptions:H,addClasses:_,removeClasses:j,classNamesToQuery:Y}),P=V,F=B,X=H,$=_,J=j,U=Y,Z=function(){function i(e,t){void 0===t&&(t={});var s=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var e=P(s.el);s.scrollXTicking||(e.requestAnimationFrame(s.scrollX),s.scrollXTicking=!0),s.scrollYTicking||(e.requestAnimationFrame(s.scrollY),s.scrollYTicking=!0),s.isScrolling||(s.isScrolling=!0,$(s.el,s.classNames.scrolling)),s.showScrollbar("x"),s.showScrollbar("y"),s.onStopScrolling()},this.scrollX=function(){s.axis.x.isOverflowing&&s.positionScrollbar("x"),s.scrollXTicking=!1},this.scrollY=function(){s.axis.y.isOverflowing&&s.positionScrollbar("y"),s.scrollYTicking=!1},this._onStopScrolling=function(){J(s.el,s.classNames.scrolling),s.options.autoHide&&(s.hideScrollbar("x"),s.hideScrollbar("y")),s.isScrolling=!1},this.onMouseEnter=function(){s.isMouseEntering||($(s.el,s.classNames.mouseEntered),s.showScrollbar("x"),s.showScrollbar("y"),s.isMouseEntering=!0),s.onMouseEntered()},this._onMouseEntered=function(){J(s.el,s.classNames.mouseEntered),s.options.autoHide&&(s.hideScrollbar("x"),s.hideScrollbar("y")),s.isMouseEntering=!1},this._onMouseMove=function(e){s.mouseX=e.clientX,s.mouseY=e.clientY,(s.axis.x.isOverflowing||s.axis.x.forceVisible)&&s.onMouseMoveForAxis("x"),(s.axis.y.isOverflowing||s.axis.y.forceVisible)&&s.onMouseMoveForAxis("y")},this.onMouseLeave=function(){s.onMouseMove.cancel(),(s.axis.x.isOverflowing||s.axis.x.forceVisible)&&s.onMouseLeaveForAxis("x"),(s.axis.y.isOverflowing||s.axis.y.forceVisible)&&s.onMouseLeaveForAxis("y"),s.mouseX=-1,s.mouseY=-1},this._onWindowResize=function(){s.scrollbarWidth=s.getScrollbarWidth(),s.hideNativeScrollbar()},this.onPointerEvent=function(e){var t,i;s.axis.x.track.el&&s.axis.y.track.el&&s.axis.x.scrollbar.el&&s.axis.y.scrollbar.el&&(s.axis.x.track.rect=s.axis.x.track.el.getBoundingClientRect(),s.axis.y.track.rect=s.axis.y.track.el.getBoundingClientRect(),(s.axis.x.isOverflowing||s.axis.x.forceVisible)&&(t=s.isWithinBounds(s.axis.x.track.rect)),(s.axis.y.isOverflowing||s.axis.y.forceVisible)&&(i=s.isWithinBounds(s.axis.y.track.rect)),(t||i)&&(e.stopPropagation(),"pointerdown"===e.type&&"touch"!==e.pointerType&&(t&&(s.axis.x.scrollbar.rect=s.axis.x.scrollbar.el.getBoundingClientRect(),s.isWithinBounds(s.axis.x.scrollbar.rect)?s.onDragStart(e,"x"):s.onTrackClick(e,"x")),i&&(s.axis.y.scrollbar.rect=s.axis.y.scrollbar.el.getBoundingClientRect(),s.isWithinBounds(s.axis.y.scrollbar.rect)?s.onDragStart(e,"y"):s.onTrackClick(e,"y")))))},this.drag=function(e){var t,r,l,o,n,a,c,h,d,u,p;if(s.draggedAxis&&s.contentWrapperEl){var v=s.axis[s.draggedAxis].track,f=null!==(r=null===(t=v.rect)||void 0===t?void 0:t[s.axis[s.draggedAxis].sizeAttr])&&void 0!==r?r:0,m=s.axis[s.draggedAxis].scrollbar,g=null!==(o=null===(l=s.contentWrapperEl)||void 0===l?void 0:l[s.axis[s.draggedAxis].scrollSizeAttr])&&void 0!==o?o:0,b=parseInt(null!==(a=null===(n=s.elStyles)||void 0===n?void 0:n[s.axis[s.draggedAxis].sizeAttr])&&void 0!==a?a:"0px",10);e.preventDefault(),e.stopPropagation();var y=("y"===s.draggedAxis?e.pageY:e.pageX)-(null!==(h=null===(c=v.rect)||void 0===c?void 0:c[s.axis[s.draggedAxis].offsetAttr])&&void 0!==h?h:0)-s.axis[s.draggedAxis].dragOffset,x=(y=s.isRtl?(null!==(u=null===(d=v.rect)||void 0===d?void 0:d[s.axis[s.draggedAxis].sizeAttr])&&void 0!==u?u:0)-m.size-y:y)/(f-m.size)*(g-b);"x"===s.draggedAxis&&s.isRtl&&(x=(null===(p=i.getRtlHelpers())||void 0===p?void 0:p.isScrollingToNegative)?-x:x),s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr]=x}},this.onEndDrag=function(e){var t=F(s.el),i=P(s.el);e.preventDefault(),e.stopPropagation(),J(s.el,s.classNames.dragging),t.removeEventListener("mousemove",s.drag,!0),t.removeEventListener("mouseup",s.onEndDrag,!0),s.removePreventClickId=i.setTimeout((function(){t.removeEventListener("click",s.preventClick,!0),t.removeEventListener("dblclick",s.preventClick,!0),s.removePreventClickId=null}))},this.preventClick=function(e){e.preventDefault(),e.stopPropagation()},this.el=e,this.options=D(D({},i.defaultOptions),t),this.classNames=D(D({},i.defaultOptions.classNames),t.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},"object"!=typeof this.el||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=z(this._onMouseMove,64),this.onWindowResize=C(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=C(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=C(this._onMouseEntered,this.stopScrollDelay),this.init()}return i.getRtlHelpers=function(){if(i.rtlHelpers)return i.rtlHelpers;var e=document.createElement("div");e.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var t=e.firstElementChild,s=null==t?void 0:t.firstElementChild;if(!s)return null;document.body.appendChild(t),t.scrollLeft=0;var r=i.getOffset(t),l=i.getOffset(s);t.scrollLeft=-999;var o=i.getOffset(s);return document.body.removeChild(t),i.rtlHelpers={isScrollOriginAtZero:r.left!==l.left,isScrollingToNegative:l.left!==o.left},i.rtlHelpers},i.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:R()}catch(e){return R()}},i.getOffset=function(e){var t=e.getBoundingClientRect(),i=F(e),s=P(e);return{top:t.top+(s.pageYOffset||i.documentElement.scrollTop),left:t.left+(s.pageXOffset||i.documentElement.scrollLeft)}},i.prototype.init=function(){e(t)&&(this.initDOM(),this.rtlHelpers=i.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},i.prototype.initDOM=function(){var e,t;this.wrapperEl=this.el.querySelector(U(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(U(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(U(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(U(this.classNames.offset)),this.maskEl=this.el.querySelector(U(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,U(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(U(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(U(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(U(this.classNames.track)).concat(U(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(U(this.classNames.track)).concat(U(this.classNames.vertical))),this.axis.x.scrollbar.el=(null===(e=this.axis.x.track.el)||void 0===e?void 0:e.querySelector(U(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=(null===(t=this.axis.y.track.el)||void 0===t?void 0:t.querySelector(U(this.classNames.scrollbar)))||null,this.options.autoHide||($(this.axis.x.scrollbar.el,this.classNames.visible),$(this.axis.y.scrollbar.el,this.classNames.visible))},i.prototype.initListeners=function(){var e,t=this,i=P(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),null===(e=this.contentWrapperEl)||void 0===e||e.addEventListener("scroll",this.onScroll),i.addEventListener("resize",this.onWindowResize),this.contentEl){if(window.ResizeObserver){var s=!1,r=i.ResizeObserver||ResizeObserver;this.resizeObserver=new r((function(){s&&i.requestAnimationFrame((function(){t.recalculate()}))})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),i.requestAnimationFrame((function(){s=!0}))}this.mutationObserver=new i.MutationObserver((function(){i.requestAnimationFrame((function(){t.recalculate()}))})),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},i.prototype.recalculate=function(){if(this.heightAutoObserverEl&&this.contentEl&&this.contentWrapperEl&&this.wrapperEl&&this.placeholderEl){var e=P(this.el);this.elStyles=e.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var t=this.contentEl.offsetWidth,i=this.heightAutoObserverEl.offsetHeight<=1,s=this.heightAutoObserverEl.offsetWidth<=1||t>0,r=this.contentWrapperEl.offsetWidth,l=this.elStyles.overflowX,o=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var n=this.contentEl.scrollHeight,a=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=i?"auto":"100%",this.placeholderEl.style.width=s?"".concat(t||a,"px"):"auto",this.placeholderEl.style.height="".concat(n,"px");var c=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=0!==t&&a>t,this.axis.y.isOverflowing=n>c,this.axis.x.isOverflowing="hidden"!==l&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==o&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var h=this.axis.x.isOverflowing?this.scrollbarWidth:0,d=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&a>r-d,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&n>c-h,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},i.prototype.getScrollbarSize=function(e){var t,i;if(void 0===e&&(e="y"),!this.axis[e].isOverflowing||!this.contentEl)return 0;var s,r=this.contentEl[this.axis[e].scrollSizeAttr],l=null!==(i=null===(t=this.axis[e].track.el)||void 0===t?void 0:t[this.axis[e].offsetSizeAttr])&&void 0!==i?i:0,o=l/r;return s=Math.max(~~(o*l),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(s=Math.min(s,this.options.scrollbarMaxSize)),s},i.prototype.positionScrollbar=function(e){var t,s,r;void 0===e&&(e="y");var l=this.axis[e].scrollbar;if(this.axis[e].isOverflowing&&this.contentWrapperEl&&l.el&&this.elStyles){var o=this.contentWrapperEl[this.axis[e].scrollSizeAttr],n=(null===(t=this.axis[e].track.el)||void 0===t?void 0:t[this.axis[e].offsetSizeAttr])||0,a=parseInt(this.elStyles[this.axis[e].sizeAttr],10),c=this.contentWrapperEl[this.axis[e].scrollOffsetAttr];c="x"===e&&this.isRtl&&(null===(s=i.getRtlHelpers())||void 0===s?void 0:s.isScrollOriginAtZero)?-c:c,"x"===e&&this.isRtl&&(c=(null===(r=i.getRtlHelpers())||void 0===r?void 0:r.isScrollingToNegative)?c:-c);var h=c/(o-a),d=~~((n-l.size)*h);d="x"===e&&this.isRtl?-d+(n-l.size):d,l.el.style.transform="x"===e?"translate3d(".concat(d,"px, 0, 0)"):"translate3d(0, ".concat(d,"px, 0)")}},i.prototype.toggleTrackVisibility=function(e){void 0===e&&(e="y");var t=this.axis[e].track.el,i=this.axis[e].scrollbar.el;t&&i&&this.contentWrapperEl&&(this.axis[e].isOverflowing||this.axis[e].forceVisible?(t.style.visibility="visible",this.contentWrapperEl.style[this.axis[e].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(e))):(t.style.visibility="hidden",this.contentWrapperEl.style[this.axis[e].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(e))),this.axis[e].isOverflowing?i.style.display="block":i.style.display="none")},i.prototype.showScrollbar=function(e){void 0===e&&(e="y"),this.axis[e].isOverflowing&&!this.axis[e].scrollbar.isVisible&&($(this.axis[e].scrollbar.el,this.classNames.visible),this.axis[e].scrollbar.isVisible=!0)},i.prototype.hideScrollbar=function(e){void 0===e&&(e="y"),this.axis[e].isOverflowing&&this.axis[e].scrollbar.isVisible&&(J(this.axis[e].scrollbar.el,this.classNames.visible),this.axis[e].scrollbar.isVisible=!1)},i.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},i.prototype.onMouseMoveForAxis=function(e){void 0===e&&(e="y");var t=this.axis[e];t.track.el&&t.scrollbar.el&&(t.track.rect=t.track.el.getBoundingClientRect(),t.scrollbar.rect=t.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(t.track.rect)?(this.showScrollbar(e),$(t.track.el,this.classNames.hover),this.isWithinBounds(t.scrollbar.rect)?$(t.scrollbar.el,this.classNames.hover):J(t.scrollbar.el,this.classNames.hover)):(J(t.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(e)))},i.prototype.onMouseLeaveForAxis=function(e){void 0===e&&(e="y"),J(this.axis[e].track.el,this.classNames.hover),J(this.axis[e].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(e)},i.prototype.onDragStart=function(e,t){var i;void 0===t&&(t="y");var s=F(this.el),r=P(this.el),l=this.axis[t].scrollbar,o="y"===t?e.pageY:e.pageX;this.axis[t].dragOffset=o-((null===(i=l.rect)||void 0===i?void 0:i[this.axis[t].offsetAttr])||0),this.draggedAxis=t,$(this.el,this.classNames.dragging),s.addEventListener("mousemove",this.drag,!0),s.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(s.addEventListener("click",this.preventClick,!0),s.addEventListener("dblclick",this.preventClick,!0)):(r.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},i.prototype.onTrackClick=function(e,t){var i,s,r,l,o=this;void 0===t&&(t="y");var n=this.axis[t];if(this.options.clickOnTrack&&n.scrollbar.el&&this.contentWrapperEl){e.preventDefault();var a=P(this.el);this.axis[t].scrollbar.rect=n.scrollbar.el.getBoundingClientRect();var c=null!==(s=null===(i=this.axis[t].scrollbar.rect)||void 0===i?void 0:i[this.axis[t].offsetAttr])&&void 0!==s?s:0,h=parseInt(null!==(l=null===(r=this.elStyles)||void 0===r?void 0:r[this.axis[t].sizeAttr])&&void 0!==l?l:"0px",10),d=this.contentWrapperEl[this.axis[t].scrollOffsetAttr],u=("y"===t?this.mouseY-c:this.mouseX-c)<0?-1:1,p=-1===u?d-h:d+h,v=function(){o.contentWrapperEl&&(-1===u?d>p&&(d-=40,o.contentWrapperEl[o.axis[t].scrollOffsetAttr]=d,a.requestAnimationFrame(v)):d<p&&(d+=40,o.contentWrapperEl[o.axis[t].scrollOffsetAttr]=d,a.requestAnimationFrame(v)))};v()}},i.prototype.getContentElement=function(){return this.contentEl},i.prototype.getScrollElement=function(){return this.contentWrapperEl},i.prototype.removeListeners=function(){var e=P(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},i.prototype.unMount=function(){this.removeListeners()},i.prototype.isWithinBounds=function(e){return this.mouseX>=e.left&&this.mouseX<=e.left+e.width&&this.mouseY>=e.top&&this.mouseY<=e.top+e.height},i.prototype.findChild=function(e,t){var i=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;return Array.prototype.filter.call(e.children,(function(e){return i.call(e,t)}))[0]},i.rtlHelpers=null,i.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},i.getOptions=X,i.helpers=I,i}(),Q=function(e,t){return(Q=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)};var G=Z.helpers,K=G.getOptions,ee=G.addClasses,te=function(e){function t(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];var r=e.apply(this,i)||this;return t.instances.set(i[0],r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}Q(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),t.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),(function(e){"init"===e.getAttribute("data-simplebar")||t.instances.has(e)||new t(e,K(e.attributes))}))},t.removeObserver=function(){var e;null===(e=t.globalObserver)||void 0===e||e.disconnect()},t.prototype.initDOM=function(){var e,t,i,s=this;if(!Array.prototype.filter.call(this.el.children,(function(e){return e.classList.contains(s.classNames.wrapper)})).length){for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),ee(this.wrapperEl,this.classNames.wrapper),ee(this.contentWrapperEl,this.classNames.contentWrapper),ee(this.offsetEl,this.classNames.offset),ee(this.maskEl,this.classNames.mask),ee(this.contentEl,this.classNames.contentEl),ee(this.placeholderEl,this.classNames.placeholder),ee(this.heightAutoObserverWrapperEl,this.classNames.heightAutoObserverWrapperEl),ee(this.heightAutoObserverEl,this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl),null===(e=this.contentWrapperEl)||void 0===e||e.setAttribute("tabindex","0"),null===(t=this.contentWrapperEl)||void 0===t||t.setAttribute("role","region"),null===(i=this.contentWrapperEl)||void 0===i||i.setAttribute("aria-label",this.options.ariaLabel)}if(!this.axis.x.track.el||!this.axis.y.track.el){var r=document.createElement("div"),l=document.createElement("div");ee(r,this.classNames.track),ee(l,this.classNames.scrollbar),r.appendChild(l),this.axis.x.track.el=r.cloneNode(!0),ee(this.axis.x.track.el,this.classNames.horizontal),this.axis.y.track.el=r.cloneNode(!0),ee(this.axis.y.track.el,this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}Z.prototype.initDOM.call(this),this.el.setAttribute("data-simplebar","init")},t.prototype.unMount=function(){Z.prototype.unMount.call(this),t.instances.delete(this.el)},t.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(t.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},t.handleMutations=function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){1===e.nodeType&&(e.hasAttribute("data-simplebar")?!t.instances.has(e)&&document.documentElement.contains(e)&&new t(e,K(e.attributes)):e.querySelectorAll("[data-simplebar]").forEach((function(e){"init"!==e.getAttribute("data-simplebar")&&!t.instances.has(e)&&document.documentElement.contains(e)&&new t(e,K(e.attributes))})))})),e.removedNodes.forEach((function(e){1===e.nodeType&&("init"===e.getAttribute("data-simplebar")?t.instances.has(e)&&!document.documentElement.contains(e)&&t.instances.get(e).unMount():Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'),(function(e){t.instances.has(e)&&!document.documentElement.contains(e)&&t.instances.get(e).unMount()})))}))}))},t.instances=new WeakMap,t}(Z);e(t)&&te.initHtmlApi();const ie=document.querySelector(".days"),se=document.querySelector(".current-date"),re=document.querySelectorAll(".calendar-icons span");let le=new Date,oe=(le.getDate(),le.getMonth()),ne=le.getFullYear();const ae=document.querySelector(".year-change");let ce=document.querySelector(".year-list"),he=[];(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("body"),modal:document.querySelector("[data-modal]"),input:document.querySelector(".calendar-input"),arrow:document.querySelector(".calendar__button-arrow"),calendarBtn:document.querySelector(".calendar__button-calendar")};e.openModalBtn.addEventListener("click",(function(){e.modal.classList.toggle("is-hidden-wrapper"),e.input.classList.toggle("isActive"),e.arrow.classList.toggle("switched"),e.calendarBtn.classList.toggle("switchedColor")})),document.addEventListener("click",(function(t){document.getElementById("input-picker").value;if(t.target.closest(".calendar-form"))return;e.input.classList.contains("isActive")&&(e.modal.classList.add("is-hidden-wrapper"),e.input.classList.remove("isActive"),e.arrow.classList.remove("switched"),e.calendarBtn.classList.remove("switchedColor"),document.getElementById("input-picker").value="",localStorage.removeItem("VALUE"),localStorage.removeItem("date"))}))})();const de=["January","February","March","April","May","June","July","August","September","October","November","December"],ue=e=>{let t=new Date(ne,oe,1).getDay(),i=new Date(ne,oe+1,0).getDate(),s=new Date(ne,oe,i).getDay(),r=new Date(ne,oe,0).getDate(),l="";for(let e=t;e>0;e--)l+=`<li  class="inactive visually-hidden">${r-e+1}</li>`;for(let e=1;e<=i;e++){l+=`<li  class="${e===le.getDate()&&oe===(new Date).getMonth()&&ne===(new Date).getFullYear()}">${e}</li>`}for(let e=s;e<6;e++)l+=`<li style="display: none" class="inactive">${e-s+1}</li>`;se.innerText=`${de[oe]} ${ne}`,ie.innerHTML=l;document.querySelector(".days").addEventListener("click",(e=>{[...e.currentTarget.children].forEach((e=>{e.classList.remove("active")})),e.target.classList.add("active");let t=e.target.textContent;if(e.target.textContent.length>10)return;let i=(oe+1).toString();document.getElementById("input-picker").value=t.padStart(2,"0")+"/"+i.padStart(2,"0")+"/"+ne,localStorage.setItem("VALUE",JSON.stringify(t));let s=document.querySelector(".calendar-input").value;localStorage.setItem("date",JSON.stringify(s)),document.querySelector("[data-modal]").classList.add("is-hidden-wrapper"),document.querySelector(".calendar-input").classList.remove("isActive"),document.querySelector(".calendar__button-arrow").classList.remove("switched"),document.querySelector(".calendar__button-calendar").classList.remove("switchedColor")}))};ue();document.querySelector(".days");re.forEach((e=>{e.addEventListener("click",(()=>{oe="prev"===e.id?oe-1:oe+1,oe<0||oe>11?(le=new Date(ne,oe,(new Date).getDate()),ne=le.getFullYear(),oe=le.getMonth()):le=new Date,ue();let t=JSON.parse(localStorage.getItem("VALUE"));ie.childNodes.forEach((e=>{e.textContent===t&&e.classList.add("active")}))}))})),ae.addEventListener("click",(function(){if(ce.classList.toggle("year-list--active"),0==he.length){for(let e=1991;e<=2035;e++)he.push(e);for(let e=0;e<he.length;e++)ce.innerHTML+=`<button class="yearListButtons">${he[e]}</button>`;document.querySelectorAll(".yearListButtons").forEach((e=>{e.addEventListener("click",(e=>{let t=e.currentTarget;ne=Number(t.innerHTML),ce.classList.toggle("year-list--active"),ue()}))})),new te(ce,{})}})),localStorage.removeItem("VALUE"),localStorage.removeItem("date");
//# sourceMappingURL=index.a5a1dd58.js.map
