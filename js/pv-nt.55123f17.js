(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pv-nt"],{deff:function(s,t,e){"use strict";e.r(t);var l=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("v-container",[e("h1",[s._v("Pressure")]),e("v-card",[e("v-row",{staticClass:"py-5 my-5"},[e("v-col",{staticClass:"mx-10"},[e("v-text-field",{attrs:{filled:"",hint:"1 atm",label:"Pressure"},model:{value:s.satm,callback:function(t){s.satm=t},expression:"satm"}}),e("v-text-field",{attrs:{filled:"",hint:"1 mol",label:"Moles"},model:{value:s.smoles,callback:function(t){s.smoles=t},expression:"smoles"}})],1),e("v-col",{staticClass:"mx-10"},[e("v-text-field",{attrs:{filled:"",hint:"273 K",label:"Temperature"},model:{value:s.skelvin,callback:function(t){s.skelvin=t},expression:"skelvin"}}),e("v-text-field",{attrs:{filled:"",hint:"22.4 L",label:"Volume"},model:{value:s.sliters,callback:function(t){s.sliters=t},expression:"sliters"}})],1)],1)],1),e("v-card",{staticClass:"pa-5 my-5"},[e("h3",[s._v("Calculate the . . .")]),e("v-radio-group",{model:{value:s.calculating,callback:function(t){s.calculating=t},expression:"calculating"}},[e("v-radio",{attrs:{label:"Moles",value:"moles"}}),e("v-radio",{attrs:{label:"Liters",value:"liters"}}),e("v-radio",{attrs:{label:"Kelvin",value:"Kelvin"}}),e("v-radio",{attrs:{label:"ATM",value:"atm"}})],1),e("span",[e("b",[s._v("Answer: ")]),s._v(s._s(s.response)+" "+s._s(s.calculating))])],1)],1)},a=[],i={name:"pv-nt",data:function(){return{R:22.4/273,smoles:1,sliters:22.4,skelvin:273,satm:1,calculating:"moles"}},computed:{Kelvin:function(){var s=this.R,t=this.smoles,e=this.sliters,l=this.satm;if(!(s&&t&&e&&l))return this.skelvin=273,273;var a=l*e/(t*s);return this.skelvin=a,a},atm:function(){var s=this.R,t=this.smoles,e=this.sliters,l=this.skelvin;if(!(s&&t&&e&&l))return this.satm=1,1;var a=s*l*t/e;return this.satm=a,a},moles:function(){var s=this.R,t=this.sliters,e=this.satm,l=this.skelvin;if(!(s&&t&&e&&l))return this.smoles=1,1;var a=e*t/(s*l);return this.smoles=a,a},liters:function(){var s=this.R,t=this.smoles,e=this.satm,l=this.skelvin;if(!(s&&t&&e&&l))return this.sliters=22.4,22.4;var a=s*l*t/e;return this.sliters=a,a},response:function(){return this[this.calculating]}}},n=i,r=e("2877"),o=e("6544"),c=e.n(o),u=e("b0af"),v=e("62ad"),m=e("a523"),h=e("67b6"),d=e("43a6"),f=e("0fd9"),p=e("8654"),b=Object(r["a"])(n,l,a,!1,null,"eb2e5a1e",null);t["default"]=b.exports;c()(b,{VCard:u["a"],VCol:v["a"],VContainer:m["a"],VRadio:h["a"],VRadioGroup:d["a"],VRow:f["a"],VTextField:p["a"]})}}]);
//# sourceMappingURL=pv-nt.55123f17.js.map