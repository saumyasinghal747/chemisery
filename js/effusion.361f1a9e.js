(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["effusion"],{f1f9:function(a,s,t){"use strict";t.r(s);var e=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("v-container",[t("h1",[a._v("Effusion")]),t("v-card",{staticClass:"pa-5 my-5"},[t("h3",[a._v("Molar Masses of Gases")]),t("v-row",{staticClass:"pt-5 px-5 my-5"},[t("v-text-field",{staticClass:"mx-10",attrs:{filled:"",hint:"1 g",label:"Gas A"},model:{value:a.sgasa,callback:function(s){a.sgasa=s},expression:"sgasa"}}),t("v-text-field",{staticClass:"mx-10",attrs:{filled:"",hint:"1 g",label:"Gas B"},model:{value:a.sgasb,callback:function(s){a.sgasb=s},expression:"sgasb"}}),t("v-text-field",{staticClass:"mx-10",attrs:{filled:"",hint:"1",label:"Rate"},model:{value:a.srate,callback:function(s){a.srate=s},expression:"srate"}})],1)],1),t("v-card",{staticClass:"pa-5 my-5"},[t("h3",[a._v("Calculate the . . .")]),t("v-radio-group",{model:{value:a.calculating,callback:function(s){a.calculating=s},expression:"calculating"}},[t("v-radio",{attrs:{label:"Rate",value:"rate"}}),t("v-radio",{attrs:{label:"Gas A",value:"gasa"}}),t("v-radio",{attrs:{label:"Gas B",value:"gasb"}})],1),t("span",[t("b",[a._v("Answer: ")]),a._v(a._s(a.units[a.calculating][0])+" "),t("span",{staticClass:"primary--text"},[a._v(a._s(a.response))]),a._v(" "+a._s(a.units[a.calculating][1]))])],1)],1)},i=[],l={name:"effusion",data:function(){return{calculating:"rate",sgasa:1,sgasb:1,srate:1,units:{rate:["Gas A effuses","times as fast as Gas B"],gasa:["The molar mass of Gas A is"],gasb:["The molar mass of Gas B is"]}}},computed:{response:function(){return this[this.calculating]},rate:function(){var a=this.sgasb,s=this.sgasa;if(!a||!s)return this.srate=1,1;var t=Math.sqrt(a/s);return this.srate=t,t},gasa:function(){var a=this.sgasb,s=this.srate;if(!a||!s)return this.sgasa=1,1;var t=a/Math.pow(s,2);return this.sgasa=t,t},gasb:function(){var a=this.sgasa,s=this.srate;if(!a||!s)return this.sgasb=1,1;var t=Math.pow(s,2)/a;return this.sgasb=t,t}}},r=l,n=t("2877"),c=t("6544"),o=t.n(c),u=t("b0af"),f=t("a523"),v=t("67b6"),g=t("43a6"),b=t("0fd9"),h=t("8654"),d=Object(n["a"])(r,e,i,!1,null,"a141eb5e",null);s["default"]=d.exports;o()(d,{VCard:u["a"],VContainer:f["a"],VRadio:v["a"],VRadioGroup:g["a"],VRow:b["a"],VTextField:h["a"]})}}]);
//# sourceMappingURL=effusion.361f1a9e.js.map