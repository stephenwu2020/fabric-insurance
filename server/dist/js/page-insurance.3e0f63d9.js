(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-insurance"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?c(t):i(r(t))}},"13c7":function(t,e,n){"use strict";var r=n("cf33"),i=n.n(r);i.a},1958:function(t,e,n){"use strict";var r=n("df70"),i=n.n(r);i.a},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),a=n("2d00"),o=i("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),a=n("d039"),o=n("ad6d"),c="toString",s=RegExp.prototype,u=s[c],f=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=c;(f||l)&&r(RegExp.prototype,c,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?o.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),a=n("7dd0"),o="String Iterator",c=i.set,s=i.getterFor(o);a(String,"String",(function(t){c(this,{type:o,string:String(t),index:0})}),(function(){var t,e=s(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),a=n("9bdd"),o=n("e95a"),c=n("50c4"),s=n("8418"),u=n("35a1");t.exports=function(t){var e,n,f,l,d,v,p=i(t),m="function"==typeof this?this:Array,g=arguments.length,b=g>1?arguments[1]:void 0,h=void 0!==b,y=u(p),S=0;if(h&&(b=r(b,g>2?arguments[2]:void 0,2)),void 0==y||m==Array&&o(y))for(e=c(p.length),n=new m(e);e>S;S++)v=h?b(p[S],S):p[S],s(n,S,v);else for(l=y.call(p),d=l.next,n=new m;!(f=d.call(l)).done;S++)v=h?a(l,b,[f.value,S],!0):f.value,s(n,S,v);return n.length=S,n}},"51db":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"insurance"},[n("div",{staticClass:"insurance-list"},t._l(t.claims,(function(e){return n("ClaimItem",{key:e.uuid,attrs:{item:e},on:{claimSuccess:t.claimSuccess}})})),1)])},i=[];n("99af"),n("d3b7"),n("3ca3"),n("ddb0");function a(t){if(Array.isArray(t))return t}n("a4d3"),n("e01a"),n("d28b");function o(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(s){i=!0,a=s}finally{try{r||null==c["return"]||c["return"]()}finally{if(i)throw a}}return n}}n("a630"),n("fb6a"),n("b0c0"),n("25f0");function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,e){return a(t)||o(t,e)||s(t,e)||u()}var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"claim"},[n("p",{staticClass:"claim-title"},[t._v("Claim")]),n("div",{staticClass:"claim-line"},[n("span",[t._v("Claim Id:")]),n("span",{staticClass:"claim-id"},[t._v(t._s(t.item.uuid))])]),n("div",{staticClass:"claim-line"},[n("span",[t._v("Description:")]),n("span",{staticClass:"claim-desc"},[t._v(t._s(t.item.description))])]),n("div",{staticClass:"claim-line"},[n("span",[t._v("Is Theft:")]),t.item.is_theft?n("i",{staticClass:"el-icon-circle-check",staticStyle:{color:"green"}}):n("i",{staticClass:"el-icon-circle-close",staticStyle:{color:"red"}})]),n("div",{staticClass:"claim-line"},[n("span",[t._v("Reimbursable:")]),n("span",[t._v(t._s(t.item.reimbursable))])]),n("div",{staticClass:"claim-line"},[n("span",[t._v("Repair:")]),t.item.repaired?n("i",{staticClass:"el-icon-circle-check",staticStyle:{color:"green"}}):n("i",{staticClass:"el-icon-circle-close",staticStyle:{color:"red"}})]),n("div",{staticClass:"claim-line"},[n("span",[t._v("Date:")]),n("span",[t._v(t._s(t.getDate))])]),n("div",{staticClass:"claim-line"},[n("span",[t._v("Status:")]),n("span",[t._v(t._s(t.item.status))])]),n("div",{staticClass:"claim-bot"},[t.item.is_theft?t._e():n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.process("R")}}},[t._v("Repair")]),n("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(e){return t.process("F")}}},[t._v("Reimburse")]),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.process("J")}}},[t._v("Reject")])],1)])},d=[],v={props:["item"],data:function(){return{loading:!1}},computed:{getDate:function(){var t=new Date(this.item.date);return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())}},methods:{process:function(t){var e=this;if("N"==this.item.status&&this.item.is_theft)this.$message({message:"Theft claim must confirm by police first!",type:"warning"});else{var n={uuid:this.item.uuid,contract_uuid:this.item.contract_uuid,status:t,reimbursable:0};this.loading=!0,this.$axios.post("/processClaim",n).then((function(t){"success"==t.msg&&(e.$message({message:"This claim has been processed.",type:"success"}),e.$emit("claimSuccess"))})).catch((function(t){e.$message({message:t.message,type:"error"})})).finally((function(){e.loading=!1}))}}}},p=v,m=(n("13c7"),n("2877")),g=Object(m["a"])(p,l,d,!1,null,"2d2761a4",null),b=g.exports,h={components:{ClaimItem:b},data:function(){return{loading:!1,claims:[]}},created:function(){this.getClaims()},methods:{getClaims:function(){var t=this,e=[],n=[];this.loading=!0,Promise.all([this.$axios.post("/listClaims",{status:"N"}),this.$axios.post("/listClaims",{status:"P"})]).then((function(r){var i=f(r,2),a=i[0],o=i[1];"success"==a.msg&&(e=a.data),"success"==o.msg&&(n=o.data),t.claims=e.concat(n)})).finally((function(){t.loading=!1}))},claimSuccess:function(){this.getClaims()}}},y=h,S=(n("1958"),Object(m["a"])(y,r,i,!1,null,"440366f2",null));e["default"]=S.exports},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),a=function(t){return function(e,n){var a,o,c=String(i(e)),s=r(n),u=c.length;return s<0||s>=u?t?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===u||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):a:t?c.slice(s,s+2):o-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),a=n("b622"),o=a("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),a=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:a.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,a(0,n)):t[o]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("d039"),a=n("e8b5"),o=n("861d"),c=n("7b0b"),s=n("50c4"),u=n("8418"),f=n("65f0"),l=n("1dde"),d=n("b622"),v=n("2d00"),p=d("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",b=v>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),h=l("concat"),y=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},S=!b||!h;r({target:"Array",proto:!0,forced:S},{concat:function(t){var e,n,r,i,a,o=c(this),l=f(o,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?o:arguments[e],y(a)){if(i=s(a.length),d+i>m)throw TypeError(g);for(n=0;n<i;n++,d++)n in a&&u(l,d,a[n])}else{if(d>=m)throw TypeError(g);u(l,d++,a)}return l.length=d,l}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("d066"),o=n("c430"),c=n("83ab"),s=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),v=n("861d"),p=n("825a"),m=n("7b0b"),g=n("fc6a"),b=n("c04e"),h=n("5c6c"),y=n("7c73"),S=n("df75"),C=n("241c"),w=n("057f"),x=n("7418"),A=n("06cf"),_=n("9bf2"),O=n("d1e7"),L=n("9112"),T=n("6eeb"),j=n("5692"),E=n("f772"),P=n("d012"),R=n("90e3"),k=n("b622"),M=n("e538"),N=n("746f"),D=n("d44e"),$=n("69f3"),I=n("b727").forEach,F=E("hidden"),V="Symbol",G="prototype",J=k("toPrimitive"),H=$.set,z=$.getterFor(V),B=Object[G],q=i.Symbol,Q=a("JSON","stringify"),U=A.f,W=_.f,Y=w.f,K=O.f,X=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),et=j("symbol-to-string-registry"),nt=j("wks"),rt=i.QObject,it=!rt||!rt[G]||!rt[G].findChild,at=c&&f((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=U(B,e);r&&delete B[e],W(t,e,n),r&&t!==B&&W(B,e,r)}:W,ot=function(t,e){var n=X[t]=y(q[G]);return H(n,{type:V,tag:t,description:e}),c||(n.description=e),n},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},st=function(t,e,n){t===B&&st(Z,e,n),p(t);var r=b(e,!0);return p(n),l(X,r)?(n.enumerable?(l(t,F)&&t[F][r]&&(t[F][r]=!1),n=y(n,{enumerable:h(0,!1)})):(l(t,F)||W(t,F,h(1,{})),t[F][r]=!0),at(t,r,n)):W(t,r,n)},ut=function(t,e){p(t);var n=g(e),r=S(n).concat(pt(n));return I(r,(function(e){c&&!lt.call(n,e)||st(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=b(t,!0),n=K.call(this,e);return!(this===B&&l(X,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(X,e)||l(this,F)&&this[F][e])||n)},dt=function(t,e){var n=g(t),r=b(e,!0);if(n!==B||!l(X,r)||l(Z,r)){var i=U(n,r);return!i||!l(X,r)||l(n,F)&&n[F][r]||(i.enumerable=!0),i}},vt=function(t){var e=Y(g(t)),n=[];return I(e,(function(t){l(X,t)||l(P,t)||n.push(t)})),n},pt=function(t){var e=t===B,n=Y(e?Z:g(t)),r=[];return I(n,(function(t){!l(X,t)||e&&!l(B,t)||r.push(X[t])})),r};if(s||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),n=function(t){this===B&&n.call(Z,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),at(this,e,h(1,t))};return c&&it&&at(B,e,{configurable:!0,set:n}),ot(e,t)},T(q[G],"toString",(function(){return z(this).tag})),T(q,"withoutSetter",(function(t){return ot(R(t),t)})),O.f=lt,_.f=st,A.f=dt,C.f=w.f=vt,x.f=pt,M.f=function(t){return ot(k(t),t)},c&&(W(q[G],"description",{configurable:!0,get:function(){return z(this).description}}),o||T(B,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:q}),I(S(nt),(function(t){N(t)})),r({target:V,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:vt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:f((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(m(t))}}),Q){var mt=!s||f((function(){var t=q();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));r({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,n){var r,i=[t],a=1;while(arguments.length>a)i.push(arguments[a++]);if(r=e,(v(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),i[1]=e,Q.apply(null,i)}})}q[G][J]||L(q[G],J,q[G].valueOf),D(q,V),P[F]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),a=n("1c7e"),o=!a((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),a=n("5135"),o=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(a(c,t))return c[t];e||(e={});var n=[][t],u=!!a(e,"ACCESSORS")&&e.ACCESSORS,f=a(e,0)?e[0]:s,l=a(e,1)?e[1]:void 0;return c[t]=!!n&&!i((function(){if(u&&!r)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:s}):t[1]=1,n.call(t,f,l)}))}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,a=Function.prototype,o=a.toString,c=/^\s*function ([^ (]*)/,s="name";r&&!(s in a)&&i(a,s,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),a=n("7b0b"),o=n("50c4"),c=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(v,p,m,g){for(var b,h,y=a(v),S=i(y),C=r(p,m,3),w=o(S.length),x=0,A=g||c,_=e?A(v,w):n?A(v,0):void 0;w>x;x++)if((d||x in S)&&(b=S[x],h=C(b,x,y),t))if(e)_[x]=h;else if(h)switch(t){case 3:return!0;case 5:return b;case 6:return x;case 2:s.call(_,b)}else if(f)return!1;return l?-1:u||f?f:_}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},cf33:function(t,e,n){},d28b:function(t,e,n){var r=n("746f");r("iterator")},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),a=n("e260"),o=n("9112"),c=n("b622"),s=c("iterator"),u=c("toStringTag"),f=a.values;for(var l in i){var d=r[l],v=d&&d.prototype;if(v){if(v[s]!==f)try{o(v,s,f)}catch(m){v[s]=f}if(v[u]||o(v,u,l),i[l])for(var p in a)if(v[p]!==a[p])try{o(v,p,a[p])}catch(m){v[p]=a[p]}}}},df70:function(t,e,n){},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),a=n("da84"),o=n("5135"),c=n("861d"),s=n("9bf2").f,u=n("e893"),f=a.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var v=d.prototype=f.prototype;v.constructor=d;var p=v.toString,m="Symbol(test)"==String(f("test")),g=/^Symbol\((.*)\)[^)]+$/;s(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(o(l,t))return"";var n=m?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),a=n("e8b5"),o=n("23cb"),c=n("50c4"),s=n("fc6a"),u=n("8418"),f=n("b622"),l=n("1dde"),d=n("ae40"),v=l("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),m=f("species"),g=[].slice,b=Math.max;r({target:"Array",proto:!0,forced:!v||!p},{slice:function(t,e){var n,r,f,l=s(this),d=c(l.length),v=o(t,d),p=o(void 0===e?d:e,d);if(a(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?i(n)&&(n=n[m],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(l,v,p);for(r=new(void 0===n?Array:n)(b(p-v,0)),f=0;v<p;v++,f++)v in l&&u(r,f,l[v]);return r.length=f,r}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=page-insurance.3e0f63d9.js.map