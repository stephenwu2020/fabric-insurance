(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-police"],{"1dde":function(t,e,i){var n=i("d039"),s=i("b622"),a=i("2d00"),c=s("species");t.exports=function(t){return a>=51||!n((function(){var e=[],i=e.constructor={};return i[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"363b":function(t,e,i){"use strict";var n=i("b8c9"),s=i.n(n);s.a},"53b6":function(t,e,i){"use strict";var n=i("8eb3"),s=i.n(n);s.a},"5e5a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"pol"},[i("div",{staticClass:"pol-list"},t._l(t.claims,(function(e){return i("ClaimTheftItem",{key:e.uuid,attrs:{item:e},on:{claimSuccess:t.claimSuccess}})})),1)])},s=[],a=(i("d3b7"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"claim"},[i("p",{staticClass:"claim-title"},[t._v("Theft Claim")]),i("div",{staticClass:"claim-line"},[i("span",[t._v("Claim Id:")]),i("span",[t._v(t._s(t.item.uuid))])]),i("div",{staticClass:"claim-line"},[i("span",[t._v("Description:")]),i("span",[t._v(t._s(t.item.description))])]),i("div",{staticClass:"claim-line"},[i("span",[t._v("Reference:")]),i("el-input",{staticClass:"claim-file",attrs:{size:"mini",type:"textarea"},model:{value:t.fileRef,callback:function(e){t.fileRef=e},expression:"fileRef"}})],1),i("div",{staticClass:"claim-bot"},[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.processTheft(!0)}}},[t._v("Confirm")]),i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.processTheft(!1)}}},[t._v("Reject")])],1)])}),c=[],r=(i("99af"),{props:["item"],data:function(){return{fileRef:""}},computed:{getDate:function(){var t=new Date(this.item.date);return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())}},methods:{processTheft:function(t){var e=this,i={uuid:this.item.uuid,contract_uuid:this.item.contract_uuid,is_theft:t,file_reference:this.file};this.$axios.post("/processTheftClaim",i).then((function(t){"success"==t.msg&&(e.$message({message:"This claim has been processed.",type:"success"}),e.$emit("claimSuccess"))})).catch((function(t){e.$message({message:t.message,type:"error"})}))}}}),o=r,u=(i("363b"),i("2877")),l=Object(u["a"])(o,a,c,!1,null,"98361842",null),f=l.exports,d={components:{ClaimTheftItem:f},data:function(){return{loading:!1,claims:[]}},created:function(){this.getClaims()},methods:{getClaims:function(){var t=this;this.loading=!0,this.$axios.post("/listTheftClaims").then((function(e){"success"==e.msg&&(t.claims=e.data)})).finally((function(){t.loading=!1}))},claimSuccess:function(){this.getClaims()}}},m=d,p=(i("53b6"),Object(u["a"])(m,n,s,!1,null,"54bbe9bf",null));e["default"]=p.exports},"65f0":function(t,e,i){var n=i("861d"),s=i("e8b5"),a=i("b622"),c=a("species");t.exports=function(t,e){var i;return s(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!s(i.prototype)?n(i)&&(i=i[c],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},8418:function(t,e,i){"use strict";var n=i("c04e"),s=i("9bf2"),a=i("5c6c");t.exports=function(t,e,i){var c=n(e);c in t?s.f(t,c,a(0,i)):t[c]=i}},"8eb3":function(t,e,i){},"99af":function(t,e,i){"use strict";var n=i("23e7"),s=i("d039"),a=i("e8b5"),c=i("861d"),r=i("7b0b"),o=i("50c4"),u=i("8418"),l=i("65f0"),f=i("1dde"),d=i("b622"),m=i("2d00"),p=d("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",b=m>=51||!s((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=f("concat"),C=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},_=!b||!g;n({target:"Array",proto:!0,forced:_},{concat:function(t){var e,i,n,s,a,c=r(this),f=l(c,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?c:arguments[e],C(a)){if(s=o(a.length),d+s>v)throw TypeError(h);for(i=0;i<s;i++,d++)i in a&&u(f,d,a[i])}else{if(d>=v)throw TypeError(h);u(f,d++,a)}return f.length=d,f}})},b8c9:function(t,e,i){},e8b5:function(t,e,i){var n=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=page-police.89871cba.js.map