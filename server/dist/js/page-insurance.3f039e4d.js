(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-insurance"],{"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),a=n("2d00"),s=i("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"51db":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"insurance"},[n("div",{staticClass:"insurance-list"},t._l(t.claims,(function(t){return n("ClaimItem",{key:t.uuid,attrs:{item:t}})})),1)])},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"claim"},[n("p",[t._v(t._s(t.item.uuid))]),n("p",[t._v("description: "+t._s(t.item.description))]),n("p",[t._v("is theft: "+t._s(t.item.is_theft))]),n("p",[t._v("reimbursable: "+t._s(t.item.reimbursable))]),n("p",[t._v("repaired: "+t._s(t.item.repaired))]),n("p",[t._v("date: "+t._s(t.getDate))]),n("p",[t._v("status: "+t._s(t.item.status))]),n("div",{staticClass:"claim-bot"},[n("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("Repair")]),n("el-button",{attrs:{type:"success",size:"mini"}},[t._v("Reimburse")]),n("el-button",{attrs:{type:"danger",size:"mini"}},[t._v("Reject")])],1)])},s=[],c=(n("99af"),{props:["item"],computed:{getDate:function(){var t=new Date(this.item.date);return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())}}}),o=c,u=(n("9f06"),n("2877")),f=Object(u["a"])(o,a,s,!1,null,"1f2083ec",null),l=f.exports,d={components:{ClaimItem:l},data:function(){return{claims:[]}},created:function(){this.getClaims()},methods:{getClaims:function(){var t=this;this.$axios.post("listClaims",{}).then((function(e){"success"==e.msg&&(t.claims=e.data)}))}}},p=d,m=(n("6024"),Object(u["a"])(p,r,i,!1,null,"6b190f2a",null));e["default"]=m.exports},6024:function(t,e,n){"use strict";var r=n("b19a"),i=n.n(r);i.a},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),a=n("b622"),s=a("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,a(0,n)):t[s]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("d039"),a=n("e8b5"),s=n("861d"),c=n("7b0b"),o=n("50c4"),u=n("8418"),f=n("65f0"),l=n("1dde"),d=n("b622"),p=n("2d00"),m=d("isConcatSpreadable"),v=9007199254740991,b="Maximum allowed index exceeded",_=p>=51||!i((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),h=l("concat"),y=function(t){if(!s(t))return!1;var e=t[m];return void 0!==e?!!e:a(t)},g=!_||!h;r({target:"Array",proto:!0,forced:g},{concat:function(t){var e,n,r,i,a,s=c(this),l=f(s,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?s:arguments[e],y(a)){if(i=o(a.length),d+i>v)throw TypeError(b);for(n=0;n<i;n++,d++)n in a&&u(l,d,a[n])}else{if(d>=v)throw TypeError(b);u(l,d++,a)}return l.length=d,l}})},"9f06":function(t,e,n){"use strict";var r=n("e11b"),i=n.n(r);i.a},b19a:function(t,e,n){},e11b:function(t,e,n){},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=page-insurance.3f039e4d.js.map