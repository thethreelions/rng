(this.webpackJsonprng=this.webpackJsonprng||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),s=n(4),r=n.n(s),l=(n(10),n(11),n(2)),o=(n(12),n(13),n(14),n(15),function(e){var t=e.n;return Object(c.jsx)("div",{className:"Digits",children:Object(c.jsx)("div",{className:"digit",children:t})})}),u=function(e){var t=e.number,n=e.digits,i=void 0===n?2:n,s=e.transformSpeed,r=void 0===s?600:s,u=e.onStopCounting,j=Object(a.useState)(t),b=Object(l.a)(j,2),d=b[0],m=b[1],O=Object(a.useState)(r),f=Object(l.a)(O,2),h=f[0],v=f[1],x=Object(a.useState)(1),g=Object(l.a)(x,2),N=g[0],p=g[1],S=Object(a.useState)(!1),w=Object(l.a)(S,2),k=w[0],C=w[1];Object(a.useEffect)((function(){var e=null;if(null!==t&&t!==d){var n=Math.abs(d-t);p(Math.floor(Math.max(1,n/40))),e=setTimeout((function(){m(d+(d>t?-N:N))}),h)}else u();return C(null!==t&&t!==d),function(){clearInterval(e)}}),[N,t,d,h,u]),Object(a.useEffect)((function(){null!==t?d!==t&&v(r/Math.abs(d-t)):m(0)}),[t]);var y=(""+d).padStart(i,"0").split("");return Object(c.jsx)("div",{className:"Odometer"+(k?" counting":""),children:null===t?Object(c.jsx)(o,{n:"-"}):y.map((function(e,t){return Object(c.jsx)(o,{n:1*e},t)}))})},j=function(e){var t=e.min,n=e.max,i=e.unique,s=void 0===i||i,r=Object(a.useState)(!1),o=Object(l.a)(r,2),j=o[0],b=o[1],d=Object(a.useState)(!1),m=Object(l.a)(d,2),O=m[0],f=m[1],h=Object(a.useState)(null),v=Object(l.a)(h,2),x=v[0],g=v[1],N=Object(a.useState)([]),p=Object(l.a)(N,2),S=p[0],w=p[1],k=function(){g(null);var e=Array.from({length:n-t+1},(function(e,n){return n+t}));w(function(e){for(var t,n,c=e.length;0!==c;)n=Math.floor(Math.random()*c),t=e[c-=1],e[c]=e[n],e[n]=t;return e}(e))},C=function(){if(!j&&!O){f(!0);var e=function(){if(s)return S.pop();var e=x;do{e=Math.floor(Math.random()*(n-t+1))+t}while(x===e);return e}();g(e)}};Object(a.useEffect)((function(){b(0===S.length)}),[S.length]),Object(a.useEffect)((function(){k()}),[t,n,s]),Object(a.useEffect)((function(){var e=function(e){32===e.keyCode&&C()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[O,t,n]);var y=Math.floor(Math.log10(n)+1);return Object(c.jsxs)("div",{className:"Picker"+(j?" disabled":""),children:[Object(c.jsx)("div",{onClick:function(){return C()},children:Object(c.jsx)(u,{number:x,digits:y,onStopCounting:function(){f(!1)}})}),Object(c.jsxs)("div",{className:"picker-footer",children:[S.length>0&&Object(c.jsxs)("div",{className:"left",children:[S.length," ",1===S.length?"number":"numbers"," left"]}),j&&Object(c.jsx)("div",{className:"disabled",children:"Numbers exhausted"}),s&&Object(c.jsx)("button",{className:"btn btn-text",onClick:function(e){e.stopPropagation(),window.confirm("Reset unique numbers?")&&k()},children:"[Reset Unique]"}),Object(c.jsxs)("div",{className:"range",children:[t," - ",n,s&&" (Unique)"]})]})]})},b=(n(16),function(e){var t=e.onOK,n=e.onCancel,i=Object(a.useState)(e.unique),s=Object(l.a)(i,2),r=s[0],o=s[1],u=Object(a.useState)(e.min),j=Object(l.a)(u,2),b=j[0],d=j[1],m=Object(a.useState)(e.max),O=Object(l.a)(m,2),f=O[0],h=O[1],v=b>=0&&b<f;return Object(c.jsx)("div",{className:"SettingPanel",children:Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("div",{className:"header",children:"Set Range"}),Object(c.jsx)("div",{className:"body",children:Object(c.jsxs)("div",{className:"settings",children:[Object(c.jsx)("div",{className:"instruction",children:"Numbers are inclusive."}),Object(c.jsxs)("div",{className:"setting",children:[Object(c.jsx)("div",{className:"lbl",children:"Min"}),Object(c.jsx)("div",{className:"val",children:Object(c.jsx)("input",{type:"text",value:b,onChange:function(e){return d(e.target.value)},className:"form-control"})})]}),Object(c.jsxs)("div",{className:"setting",children:[Object(c.jsx)("div",{className:"lbl",children:"Max"}),Object(c.jsx)("div",{className:"val",children:Object(c.jsx)("input",{type:"text",value:f,onChange:function(e){return h(e.target.value)},className:"form-control"})})]}),Object(c.jsxs)("div",{className:"form-check",children:[Object(c.jsx)("input",{type:"checkbox",className:"form-check-input",id:"unique",defaultChecked:r,onChange:function(e){return o(e.target.checked)}}),Object(c.jsx)("label",{className:"form-check-label",htmlFor:"unique",children:"Unique Only"})]})]})}),Object(c.jsxs)("div",{className:"actions",children:[Object(c.jsx)("button",{className:"btn btn-secondary",onClick:function(){n()},children:"Cancel"}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){t(1*(""+b).replace(/[^\d]/g,""),1*(""+f).replace(/[^\d]/g,""),r)},disabled:!v,children:"OK"})]})]})})})});var d=function(){var e=window.localStorage.getItem("rng-min"),t=window.localStorage.getItem("rng-max"),n=window.localStorage.getItem("rng-unique"),i=Object(a.useState)(!1),s=Object(l.a)(i,2),r=s[0],o=s[1],u=Object(a.useState)(null===e?1:1*e),d=Object(l.a)(u,2),m=d[0],O=d[1],f=Object(a.useState)(null===t?50:1*t),h=Object(l.a)(f,2),v=h[0],x=h[1],g=Object(a.useState)(null===n||"1"===n),N=Object(l.a)(g,2),p=N[0],S=N[1];return Object(c.jsxs)("div",{className:"App",children:[r&&Object(c.jsx)(b,{min:m,max:v,unique:p,onOK:function(e,t,n){O(e),x(t),S(n),o(!1),window.localStorage.setItem("rng-min",e),window.localStorage.setItem("rng-max",t),window.localStorage.setItem("rng-unique",n?"1":"0")},onCancel:function(){o(!1)}}),Object(c.jsx)("div",{className:"main",children:Object(c.jsx)(j,{min:m,max:v,unique:p})}),Object(c.jsxs)("div",{className:"app-footer",children:[Object(c.jsx)("div",{className:"instruction",children:"Click number or hit space bar to generate new number."}),Object(c.jsx)("div",{className:"actions",children:Object(c.jsx)("button",{className:"btn btn-text",onClick:function(){return o(!0)},children:"[Settings]"})})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),m()}],[[17,1,2]]]);
//# sourceMappingURL=main.6de862f6.chunk.js.map