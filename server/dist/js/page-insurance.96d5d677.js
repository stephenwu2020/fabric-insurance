(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-insurance"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(n(t))}},1958:function(t,e,r){"use strict";var n=r("df70"),i=r.n(n);i.a},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),a=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),i=r("825a"),o=r("d039"),a=r("ad6d"),c="toString",s=RegExp.prototype,u=s[c],f=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=c;(f||l)&&n(RegExp.prototype,c,(function(){var t=i(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in s)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,i=r("69f3"),o=r("7dd0"),a="String Iterator",c=i.set,s=i.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,i=e.index;return i>=r.length?{value:void 0,done:!0}:(t=n(r,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),a=r("e95a"),c=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var e,r,f,l,d,v,p=i(t),b="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,h=void 0!==g,y=u(p),S=0;if(h&&(g=n(g,m>2?arguments[2]:void 0,2)),void 0==y||b==Array&&a(y))for(e=c(p.length),r=new b(e);e>S;S++)v=h?g(p[S],S):p[S],s(r,S,v);else for(l=y.call(p),d=l.next,r=new b;!(f=d.call(l)).done;S++)v=h?o(l,g,[f.value,S],!0):f.value,s(r,S,v);return r.length=S,r}},"51db":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"insurance"},[r("div",{staticClass:"insurance-list"},t._l(t.claims,(function(e){return r("ClaimItem",{key:e.uuid,attrs:{item:e},on:{claimSuccess:t.claimSuccess}})})),1)])},i=[];r("99af"),r("d3b7"),r("3ca3"),r("ddb0");function o(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d28b");function a(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done);n=!0)if(r.push(a.value),e&&r.length===e)break}catch(s){i=!0,o=s}finally{try{n||null==c["return"]||c["return"]()}finally{if(i)throw o}}return r}}r("a630"),r("fb6a"),r("b0c0"),r("25f0");function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){if(t){if("string"===typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,e){return o(t)||a(t,e)||s(t,e)||u()}var l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"claim"},[r("p",[t._v(t._s(t.item.uuid))]),r("p",[t._v("description: "+t._s(t.item.description))]),r("p",[t._v("is theft: "+t._s(t.item.is_theft))]),r("p",[t._v("reimbursable: "+t._s(t.item.reimbursable))]),r("p",[t._v("repaired: "+t._s(t.item.repaired))]),r("p",[t._v("date: "+t._s(t.getDate))]),r("p",[t._v("status: "+t._s(t.item.status))]),r("div",{staticClass:"claim-bot"},[t.item.is_theft?t._e():r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.process("R")}}},[t._v("Repair")]),r("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(e){return t.process("F")}}},[t._v("Reimburse")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.process("J")}}},[t._v("Reject")])],1)])},d=[],v={props:["item"],computed:{getDate:function(){var t=new Date(this.item.date);return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())}},methods:{process:function(t){var e=this,r={uuid:this.item.uuid,contract_uuid:this.item.contract_uuid,status:t,reimbursable:0};this.$axios.post("/processClaim",r).then((function(t){"success"==t.msg&&(e.$message({message:"This claim has been processed.",type:"success"}),e.$emit("claimSuccess"))})).catch((function(t){e.$message({message:t.message,type:"error"})}))}}},p=v,b=(r("b628"),r("2877")),m=Object(b["a"])(p,l,d,!1,null,"2cae4eed",null),g=m.exports,h={components:{ClaimItem:g},data:function(){return{loading:!1,claims:[]}},created:function(){this.getClaims()},methods:{getClaims:function(){var t=this,e=[],r=[];this.loading=!0,Promise.all([this.$axios.post("/listClaims",{status:"N"}),this.$axios.post("/listClaims",{status:"P"})]).then((function(n){var i=f(n,2),o=i[0],a=i[1];"success"==o.msg&&(e=o.data),"success"==a.msg&&(r=a.data),t.claims=e.concat(r)})).finally((function(){t.loading=!1}))},claimSuccess:function(){this.getClaims()}}},y=h,S=(r("1958"),Object(b["a"])(y,n,i,!1,null,"440366f2",null));e["default"]=S.exports},"540f":function(t,e,r){},6547:function(t,e,r){var n=r("a691"),i=r("1d80"),o=function(t){return function(e,r){var o,a,c=String(i(e)),s=n(r),u=c.length;return s<0||s>=u?t?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):o:t?c.slice(s,s+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),a=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),o=r("e8b5"),a=r("861d"),c=r("7b0b"),s=r("50c4"),u=r("8418"),f=r("65f0"),l=r("1dde"),d=r("b622"),v=r("2d00"),p=d("isConcatSpreadable"),b=9007199254740991,m="Maximum allowed index exceeded",g=v>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),h=l("concat"),y=function(t){if(!a(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},S=!g||!h;n({target:"Array",proto:!0,forced:S},{concat:function(t){var e,r,n,i,o,a=c(this),l=f(a,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?a:arguments[e],y(o)){if(i=s(o.length),d+i>b)throw TypeError(m);for(r=0;r<i;r++,d++)r in o&&u(l,d,o[r])}else{if(d>=b)throw TypeError(m);u(l,d++,o)}return l.length=d,l}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),v=r("861d"),p=r("825a"),b=r("7b0b"),m=r("fc6a"),g=r("c04e"),h=r("5c6c"),y=r("7c73"),S=r("df75"),w=r("241c"),x=r("057f"),A=r("7418"),C=r("06cf"),O=r("9bf2"),L=r("d1e7"),_=r("9112"),T=r("6eeb"),j=r("5692"),E=r("f772"),P=r("d012"),M=r("90e3"),R=r("b622"),k=r("e538"),N=r("746f"),$=r("d44e"),D=r("69f3"),I=r("b727").forEach,F=E("hidden"),V="Symbol",G="prototype",J=R("toPrimitive"),H=D.set,z=D.getterFor(V),B=Object[G],q=i.Symbol,Q=o("JSON","stringify"),U=C.f,W=O.f,Y=x.f,K=L.f,X=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),et=j("symbol-to-string-registry"),rt=j("wks"),nt=i.QObject,it=!nt||!nt[G]||!nt[G].findChild,ot=c&&f((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=U(B,e);n&&delete B[e],W(t,e,r),n&&t!==B&&W(B,e,n)}:W,at=function(t,e){var r=X[t]=y(q[G]);return H(r,{type:V,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},st=function(t,e,r){t===B&&st(Z,e,r),p(t);var n=g(e,!0);return p(r),l(X,n)?(r.enumerable?(l(t,F)&&t[F][n]&&(t[F][n]=!1),r=y(r,{enumerable:h(0,!1)})):(l(t,F)||W(t,F,h(1,{})),t[F][n]=!0),ot(t,n,r)):W(t,n,r)},ut=function(t,e){p(t);var r=m(e),n=S(r).concat(pt(r));return I(n,(function(e){c&&!lt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=g(t,!0),r=K.call(this,e);return!(this===B&&l(X,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(X,e)||l(this,F)&&this[F][e])||r)},dt=function(t,e){var r=m(t),n=g(e,!0);if(r!==B||!l(X,n)||l(Z,n)){var i=U(r,n);return!i||!l(X,n)||l(r,F)&&r[F][n]||(i.enumerable=!0),i}},vt=function(t){var e=Y(m(t)),r=[];return I(e,(function(t){l(X,t)||l(P,t)||r.push(t)})),r},pt=function(t){var e=t===B,r=Y(e?Z:m(t)),n=[];return I(r,(function(t){!l(X,t)||e&&!l(B,t)||n.push(X[t])})),n};if(s||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=M(t),r=function(t){this===B&&r.call(Z,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),ot(this,e,h(1,t))};return c&&it&&ot(B,e,{configurable:!0,set:r}),at(e,t)},T(q[G],"toString",(function(){return z(this).tag})),T(q,"withoutSetter",(function(t){return at(M(t),t)})),L.f=lt,O.f=st,C.f=dt,w.f=x.f=vt,A.f=pt,k.f=function(t){return at(R(t),t)},c&&(W(q[G],"description",{configurable:!0,get:function(){return z(this).description}}),a||T(B,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:q}),I(S(rt),(function(t){N(t)})),n({target:V,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:vt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){A.f(1)}))},{getOwnPropertySymbols:function(t){return A.f(b(t))}}),Q){var bt=!s||f((function(){var t=q();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(v(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,Q.apply(null,i)}})}q[G][J]||_(q[G],J,q[G].valueOf),$(q,V),P[F]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),a=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:i})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),o=r("5135"),a=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(o(c,t))return c[t];e||(e={});var r=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,f=o(e,0)?e[0]:s,l=o(e,1)?e[1]:void 0;return c[t]=!!r&&!i((function(){if(u&&!n)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:s}):t[1]=1,r.call(t,f,l)}))}},b0c0:function(t,e,r){var n=r("83ab"),i=r("9bf2").f,o=Function.prototype,a=o.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in o)&&i(o,s,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b628:function(t,e,r){"use strict";var n=r("540f"),i=r.n(n);i.a},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),a=r("50c4"),c=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(v,p,b,m){for(var g,h,y=o(v),S=i(y),w=n(p,b,3),x=a(S.length),A=0,C=m||c,O=e?C(v,x):r?C(v,0):void 0;x>A;A++)if((d||A in S)&&(g=S[A],h=w(g,A,y),t))if(e)O[A]=h;else if(h)switch(t){case 3:return!0;case 5:return g;case 6:return A;case 2:s.call(O,g)}else if(f)return!1;return l?-1:u||f?f:O}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("e260"),a=r("9112"),c=r("b622"),s=c("iterator"),u=c("toStringTag"),f=o.values;for(var l in i){var d=n[l],v=d&&d.prototype;if(v){if(v[s]!==f)try{a(v,s,f)}catch(b){v[s]=f}if(v[u]||a(v,u,l),i[l])for(var p in o)if(v[p]!==o[p])try{a(v,p,o[p])}catch(b){v[p]=o[p]}}}},df70:function(t,e,r){},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var v=d.prototype=f.prototype;v.constructor=d;var p=v.toString,b="Symbol(test)"==String(f("test")),m=/^Symbol\((.*)\)[^)]+$/;s(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(a(l,t))return"";var r=b?e.slice(7,-1):e.replace(m,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),o=r("e8b5"),a=r("23cb"),c=r("50c4"),s=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),d=r("ae40"),v=l("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),b=f("species"),m=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!v||!p},{slice:function(t,e){var r,n,f,l=s(this),d=c(l.length),v=a(t,d),p=a(void 0===e?d:e,d);if(o(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return m.call(l,v,p);for(n=new(void 0===r?Array:r)(g(p-v,0)),f=0;v<p;v++,f++)v in l&&u(n,f,l[v]);return n.length=f,n}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=page-insurance.96d5d677.js.map