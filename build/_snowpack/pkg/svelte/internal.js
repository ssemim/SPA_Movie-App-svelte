function h(){}function j(t){return t()}function A(){return Object.create(null)}function _(t){t.forEach(j)}function N(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function z(t){return Object.keys(t).length===0}function D(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode&&t.parentNode.removeChild(t)}function F(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function H(){return G(" ")}function I(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function J(t){return Array.from(t.childNodes)}let $;function l(t){$=t}const i=[],k=[];let c=[];const S=[],K=Promise.resolve();let p=!1;function L(){p||(p=!0,K.then(C))}function y(t){c.push(t)}const x=new Set;let s=0;function C(){if(s!==0)return;const t=$;do{try{for(;s<i.length;){const e=i[s];s++,l(e),Q(e.$$)}}catch(e){throw i.length=0,s=0,e}for(l(null),i.length=0,s=0;k.length;)k.pop()();for(let e=0;e<c.length;e+=1){const n=c[e];x.has(n)||(x.add(n),n())}c.length=0}while(i.length);for(;S.length;)S.pop()();p=!1,x.clear(),l(t)}function Q(t){if(t.fragment!==null){t.update(),_(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}function R(t){const e=[],n=[];c.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),c=e}const g=new Set;let U;function B(t,e){t&&t.i&&(g.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(g.has(t))return;g.add(t),U.c.push(()=>{g.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function W(t){t&&t.c()}function M(t,e,n,r){const{fragment:o,after_update:m}=t.$$;o&&o.m(e,n),r||y(()=>{const a=t.$$.on_mount.map(j).filter(N);t.$$.on_destroy?t.$$.on_destroy.push(...a):_(a),t.$$.on_mount=[]}),m.forEach(y)}function P(t,e){const n=t.$$;n.fragment!==null&&(R(n.after_update),_(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){t.$$.dirty[0]===-1&&(i.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(t,e,n,r,o,m,a,T=[-1]){const d=$;l(t);const f=t.$$={fragment:null,ctx:[],props:m,update:h,not_equal:o,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:A(),dirty:T,skip_bound:!1,root:e.target||d.$$.root};a&&a(f.root);let b=!1;if(f.ctx=n?n(t,e.props||{},(u,w,...E)=>{const v=E.length?E[0]:w;return f.ctx&&o(f.ctx[u],f.ctx[u]=v)&&(!f.skip_bound&&f.bound[u]&&f.bound[u](v),b&&X(t,u)),w}):[],f.update(),b=!0,_(f.before_update),f.fragment=r?r(f.ctx):!1,e.target){if(e.hydrate){const u=J(e.target);f.fragment&&f.fragment.l(u),u.forEach(O)}else f.fragment&&f.fragment.c();e.intro&&B(t.$$.fragment),M(t,e.target,e.anchor,e.customElement),C()}l(d)}class Z{$destroy(){P(this,1),this.$destroy=h}$on(e,n){if(!N(n))return h;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Z as SvelteComponent,I as attr,W as create_component,P as destroy_component,O as detach,F as element,Y as init,D as insert,M as mount_component,h as noop,q as safe_not_equal,H as space,B as transition_in,V as transition_out};
