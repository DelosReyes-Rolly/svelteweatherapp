function m(){}function E(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function F(){return Object.create(null)}function v(t){t.forEach(j)}function q(t){return typeof t=="function"}function M(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function S(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function A(t){return Object.keys(t).length===0}function x(t,...n){if(t==null){for(const r of n)r(void 0);return m}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function B(t){let n;return x(t,e=>n=e)(),n}function G(t,n,e){t.$$.on_destroy.push(x(n,e))}function H(t,n,e,r){if(t){const o=k(t,n,e,r);return t[0](o)}}function k(t,n,e,r){return t[1]&&r?E(e.ctx.slice(),t[1](r(n))):e.ctx}function I(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const i=[],d=Math.max(n.dirty.length,o.length);for(let u=0;u<d;u+=1)i[u]=n.dirty[u]|o[u];return i}return n.dirty|o}return n.dirty}function J(t,n,e,r,o,i){if(o){const d=k(n,e,r,i);t.p(d,o)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function P(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function U(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function L(t){const n={};for(const e in t)n[e]=!0;return n}function N(t,n,e){return t.set(e),n}function Q(t){return t&&q(t.destroy)?t.destroy:m}let _;function h(t){_=t}function l(){if(!_)throw new Error("Function called outside component initialization");return _}function R(t){l().$$.on_mount.push(t)}function T(t){l().$$.after_update.push(t)}function V(t){l().$$.on_destroy.push(t)}function W(t,n){return l().$$.context.set(t,n),n}function X(t){return l().$$.context.get(t)}function Y(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(r=>r.call(this,n))}const a=[],y=[];let c=[];const b=[],w=Promise.resolve();let g=!1;function C(){g||(g=!0,w.then(z))}function Z(){return C(),w}function O(t){c.push(t)}function $(t){b.push(t)}const p=new Set;let s=0;function z(){if(s!==0)return;const t=_;do{try{for(;s<a.length;){const n=a[s];s++,h(n),D(n.$$)}}catch(n){throw a.length=0,s=0,n}for(h(null),a.length=0,s=0;y.length;)y.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];p.has(e)||(p.add(e),e())}c.length=0}while(a.length);for(;b.length;)b.pop()();g=!1,p.clear(),h(t)}function D(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function tt(t){const n=[],e=[];c.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),c=n}export{l as A,P as B,X as C,W as D,V as E,N as F,Y as G,L as H,$ as I,S as J,B as K,I as a,G as b,H as c,T as d,y as e,F as f,K as g,z as h,q as i,A as j,O as k,tt as l,_ as m,m as n,R as o,h as p,j as q,v as r,M as s,Z as t,J as u,a as v,C as w,E as x,Q as y,U as z};
