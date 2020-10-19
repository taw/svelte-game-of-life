var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function i(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function f(){return t=" ",document.createTextNode(t);var t}function a(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e,n){t.classList[n?"add":"remove"](e)}let h;function $(t){h=t}function m(t){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_destroy.push(t)}const g=[],y=[],x=[],b=[],v=Promise.resolve();let w=!1;function _(t){x.push(t)}let k=!1;const E=new Set;function C(){if(!k){k=!0;do{for(let t=0;t<g.length;t+=1){const e=g[t];$(e),M(e.$$)}for($(null),g.length=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];E.has(e)||(E.add(e),e())}x.length=0}while(g.length);for(;b.length;)b.pop()();w=!1,k=!1,E.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const A=new Set;let L;function N(t,e){t&&t.i&&(A.delete(t),t.i(e))}function S(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),L.c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function j(t,n,c){const{fragment:s,on_mount:u,on_destroy:l,after_update:i}=t.$$;s&&s.m(n,c),_((()=>{const n=u.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(_)}function O(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(g.push(t),w||(w=!0,v.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(e,r,c,s,l,i,f=[-1]){const a=h;$(e);const d=r.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:n(),dirty:f,skip_bound:!1};let m=!1;if(p.ctx=c?c(e,d,((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&P(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();r.intro&&N(e.$$.fragment),j(e,r.target,r.anchor),C()}$(a)}class I{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(e){let n,o,r,c,l,f;return{c(){n=i("g"),o=i("rect"),d(o,"x",e[1]),d(o,"y",e[2]),d(o,"height",r=18),d(o,"width",c=18),d(o,"class","svelte-isfpso"),p(o,"alive",e[0]),p(o,"dead",!e[0])},m(t,r){s(t,n,r),function(t,e){t.appendChild(e)}(n,o),l||(f=a(n,"click",e[5]),l=!0)},p(t,[e]){1&e&&p(o,"alive",t[0]),1&e&&p(o,"dead",!t[0])},i:t,o:t,d(t){t&&u(n),l=!1,f()}}}function z(t,e,n){let{x:o}=e,{y:r}=e,{state:c}=e,s=20*o+1,u=20*r+1;return t.$$set=t=>{"x"in t&&n(3,o=t.x),"y"in t&&n(4,r=t.y),"state"in t&&n(0,c=t.state)},[c,s,u,o,r,function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}(t,e)}]}class F extends I{constructor(t){super(),B(this,t,z,q,c,{x:3,y:4,state:0})}}function G(t,e,n){let o=0;for(let{x:r,y:c,state:s}of t){if(!s)continue;let t=Math.abs(r-e),u=Math.abs(c-n);1==Math.max(t,u)&&(o+=1)}return o}function T(t){let e=[];for(let{x:n,y:o,state:r}of t){let c=G(t,n,o),s=3==c||r&&2==c;e.push({x:n,y:o,state:s})}return e}function D(t,e,n){const o=t.slice();return o[9]=e[n],o}function H(t){let e,n;return e=new F({props:{x:t[9].x,y:t[9].y,state:t[9].state}}),e.$on("click",(function(...e){return t[6](t[9],...e)})),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,o){j(e,t,o),n=!0},p(n,o){t=n;const r={};1&o&&(r.x=t[9].x),1&o&&(r.y=t[9].y),1&o&&(r.state=t[9].state),e.$set(r)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function J(e){let n,r,c,i,p;return{c(){n=l("button"),n.textContent="Step",r=f(),c=l("button"),c.textContent="Play",d(n,"class","svelte-1w2etw0"),d(c,"class","svelte-1w2etw0")},m(t,o){s(t,n,o),s(t,r,o),s(t,c,o),i||(p=[a(n,"click",e[2]),a(c,"click",e[4])],i=!0)},p:t,d(t){t&&u(n),t&&u(r),t&&u(c),i=!1,o(p)}}}function K(e){let n,o,r;return{c(){n=l("button"),n.textContent="Pause",d(n,"class","svelte-1w2etw0")},m(t,c){s(t,n,c),o||(r=a(n,"click",e[3]),o=!0)},p:t,d(t){t&&u(n),o=!1,r()}}}function Q(t){let e,n,r,c,a,p,h=t[0],$=[];for(let e=0;e<h.length;e+=1)$[e]=H(D(t,h,e));const m=t=>S($[t],1,1,(()=>{$[t]=null}));function g(t,e){return t[1]?K:J}let y=g(t),x=y(t);return{c(){e=l("header"),e.textContent="Game of Life",n=f(),r=i("svg");for(let t=0;t<$.length;t+=1)$[t].c();c=f(),a=l("div"),x.c(),d(e,"class","svelte-1w2etw0"),d(r,"class","svelte-1w2etw0"),d(a,"class","buttons svelte-1w2etw0")},m(t,o){s(t,e,o),s(t,n,o),s(t,r,o);for(let t=0;t<$.length;t+=1)$[t].m(r,null);s(t,c,o),s(t,a,o),x.m(a,null),p=!0},p(t,[e]){if(33&e){let n;for(h=t[0],n=0;n<h.length;n+=1){const o=D(t,h,n);$[n]?($[n].p(o,e),N($[n],1)):($[n]=H(o),$[n].c(),N($[n],1),$[n].m(r,null))}for(L={r:0,c:[],p:L},n=h.length;n<$.length;n+=1)m(n);L.r||o(L.c),L=L.p}y===(y=g(t))&&x?x.p(t,e):(x.d(1),x=y(t),x&&(x.c(),x.m(a,null)))},i(t){if(!p){for(let t=0;t<h.length;t+=1)N($[t]);p=!0}},o(t){$=$.filter(Boolean);for(let t=0;t<$.length;t+=1)S($[t]);p=!1},d(t){t&&u(e),t&&u(n),t&&u(r),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}($,t),t&&u(c),t&&u(a),x.d()}}}function R(t,e,n){let o=[],r=!1;const c=setInterval((function(){r&&n(0,o=T(o))}),100);m((()=>clearInterval(c)));for(let t=0;t<30;t++)for(let e=0;e<30;e++)o.push({x:t,y:e,state:Math.random()<.2});function s(t){n(1,r=!1),t.state=!t.state,n(0,o)}return[o,r,function(){n(0,o=T(o))},function(){n(1,r=!1)},function(){n(1,r=!0)},s,t=>s(t)]}return new class extends I{constructor(t){super(),B(this,t,R,Q,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
