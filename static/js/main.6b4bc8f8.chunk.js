(this["webpackJsonpbayesian-ab-test-calculator"]=this["webpackJsonpbayesian-ab-test-calculator"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),o=(a(15),a(9)),i=a(2),u=a(5),m=a(1),s=(a(16),a(8)),d=a.n(s);var v=function(e){var t=e.id,a=e.currentArm,n=e.winnerArm,l=e.isWin,c=(null===a||void 0===a?void 0:a.total)>0?"".concat((100*((null===a||void 0===a?void 0:a.cvr)||0)).toFixed(1),"%"):"",o=l?"\u2014 %":"".concat(function(e,t){for(var a=0,n=d.a.betaln,r=Math.log,l=Math.exp,c=Object(m.a)(e,2),o=c[0],i=c[1],u=Object(m.a)(t,2),s=u[0],v=u[1],b=i+1,h=o-i+1,E=v+1,f=s-v+1,p=0;p<E-1;p++)a+=l(n(b+p,f+h)-r(f+p)-n(1+p,f)-n(b,h));return 100*a}([(null===a||void 0===a?void 0:a.total)||0,(null===a||void 0===a?void 0:a.conversion)||0],[(null===n||void 0===n?void 0:n.total)||0,(null===n||void 0===n?void 0:n.conversion)||0]).toFixed(1),"%");return r.a.createElement("tr",{className:l?"winner":""},r.a.createElement("td",null,"".concat(t)),r.a.createElement("td",null,r.a.createElement("input",{className:"metric-input",name:"total-".concat(t),type:"number",min:"0"})),r.a.createElement("td",null,r.a.createElement("input",{className:"metric-input",name:"conversion-".concat(t),type:"number",min:"0"})),r.a.createElement("td",null,c),r.a.createElement("td",null,o))},b=function(){return r.a.createElement("header",{className:"page-header"},r.a.createElement("div",{className:"page-header-inner"},r.a.createElement("div",{className:"title"},r.a.createElement("a",{href:"/"},r.a.createElement("span",{role:"img","aria-label":"dice"},"\ud83c\udfb2"),"Bayesian A/B Testing Calculator"))))},h=function(){return r.a.createElement("footer",{className:"footer"},"\xa9Dohyung Park(",r.a.createElement("a",{href:"https://github.com/dohyungp/bayesian-ab-test-calculator"},"github"),")")};var E=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(67),s=Object(m.a)(c,2),d=s[0],E=s[1],f=Object(n.useState)(["A","B"]),p=Object(m.a)(f,2),g=p[0],j=p[1],O=Object(n.useState)(null),y=Object(m.a)(O,2),N=y[0],w=y[1];return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onChange:function(e){var t,n,r;e.preventDefault();var c=e.target.name.split("-"),o=Object(m.a)(c,2),s=o[0],d=o[1],v=parseInt(e.target.value),b=0;"total"===s?b=((null===(t=a[[d]])||void 0===t?void 0:t.conversion)||0)/v:(null===(n=a[[d]])||void 0===n?void 0:n.total)>0&&(b=v/a[[d]].total),l(Object(u.a)({},a,Object(i.a)({},d,Object(u.a)({},a[[d]],(r={},Object(i.a)(r,s,v||0),Object(i.a)(r,"cvr",b),r)))));var h=Object.keys(a);if(!(h.length<1)){var E=h.reduce((function(e,t){var n,r;return(e===d?b:(null===(n=a[[e]])||void 0===n?void 0:n.cvr)||0)>(t===d?b:(null===(r=a[[t]])||void 0===r?void 0:r.cvr)||0)?e:t}));w(E)}}},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"header"},r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Visitors"),r.a.createElement("th",null,"Conversion"),r.a.createElement("th",null,"CVR(%)"),r.a.createElement("th",null,"Pr(".concat(N||"A"," > other)")))),r.a.createElement("tbody",{className:"body"},g.map((function(e){return r.a.createElement(v,{key:"key-".concat(e),id:e,currentArm:a[e],winnerArm:a[N],isWin:N===e})})))))),r.a.createElement("button",{className:"add-button",onClick:function(e){e.preventDefault(),j([].concat(Object(o.a)(g),[String.fromCharCode(d)])),E(d+1)}},"Add Another Variation"),r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.6b4bc8f8.chunk.js.map