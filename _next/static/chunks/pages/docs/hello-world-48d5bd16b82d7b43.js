(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[434],{5755:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/hello-world",function(){return t(5572)}])},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},u=t(6273),i=t(387),c=t(7190);var l={};function f(e,n,t,r){if(e&&u.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=i.useRouter(),s=a.default.useMemo((function(){var n=r(u.resolveHref(o,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?u.resolveHref(o,e.as):a||t}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,w=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var E=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,g=r(c.useIntersection({rootMargin:"200px"}),2),_=g[0],m=g[1],L=a.default.useCallback((function(e){_(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,_]);a.default.useEffect((function(){var e=m&&t&&u.isLocalURL(d),n="undefined"!==typeof w?w:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&f(o,d,p,{locale:n})}),[p,d,m,w,t,o]);var x={ref:L,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:c,scroll:i}))}(e,o,d,p,h,y,b,w)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u.isLocalURL(d)&&f(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var M="undefined"!==typeof w?w:o&&o.locale,j=o&&o.isLocaleDomain&&u.getDomainLocale(p,M,o&&o.locales,o&&o.domainLocales);x.href=j||u.addBasePath(u.addLocale(p,M,o&&o.defaultLocale))}return a.default.cloneElement(n,x)};n.default=s},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,c=o.useRef(),l=r(o.useState(!1),2),f=l[0],s=l[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,u=r.elements;return u.set(e,n),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!u&&!f){var e=a.requestIdleCallback((function(){return s(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=t(7294),a=t(9311),u="undefined"!==typeof IntersectionObserver;var i=new Map},5572:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(5893),o=t(8722),a=t(4334),u=t(1664),i="BLOG DETAILS STANDARD";function c(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h4,{title:"".concat(i," | Johnny Personal Blog")}),(0,r.jsx)(o.M5,{title:i,TopBtn:function(){return(0,r.jsx)(u.default,{href:"/",children:(0,r.jsx)("a",{className:"top-btn btn",children:"HOME"})})}}),(0,r.jsx)(a.a,{title:i}),(0,r.jsx)(a.V,{}),(0,r.jsx)(o.$_,{})]})}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[367,774,888,179],(function(){return n=5755,e(e.s=n);var n}));var n=e.O();_N_E=n}]);