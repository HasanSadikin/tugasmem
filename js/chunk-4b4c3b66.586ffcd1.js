(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b4c3b66"],{c915:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{},[e._m(0),s("v-row",{staticClass:"row ma-0",attrs:{dense:""}},e._l(e.siswa,(function(t,a){return s("v-col",{key:a,attrs:{cols:"6",md:"3"}},[s("v-card",[s("v-img",{staticClass:"white--text align-end",attrs:{src:t.image.asset.url,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"150px"}}),s("v-card-actions",[e._v(" "+e._s(t.name)+" ")])],1)],1)})),1)],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{attrs:{id:"intro"}},[s("header",[s("h2",[e._v("Siswa SMK Negeri 4 Manado")])])])}],i=(s("4de4"),s("4160"),s("159b"),s("77ea")),c={name:"Siswa",data:function(){return{cards:[{title:"Pre-fab homes",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg"},{title:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg"},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg"},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg"},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg"},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg"},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg"},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg"}],siswa:[]}},mounted:function(){var e=this;i["a"].fetch('*[_type == "murid"] | order(name asc){\n      name,\n      ttl,\n      nisn,\n      jenisKelamin,\n      isAlumni,\n      alamat,\n      image{\n        asset->{\n          _id,\n          url\n        },\n      }\n    }').then((function(t){e.siswa=t,e.changeJK(e.siswa),e.siswa=e.FilterAlumni(e.siswa)})).catch((function(e){console.log(e)}))},methods:{changeJK:function(e){e.forEach((function(e){"P"==e.jenisKelamin?e.jenisKelamin="Perempuan":e.jenisKelamin="Laki-laki"}))},FilterAlumni:function(e){return e.filter((function(e){return"false"==e.isAlumni}))}}},r=c,l=(s("e9ec"),s("2877")),o=s("6544"),d=s.n(o),u=s("b0af"),m=s("99d9"),f=s("62ad"),p=s("adda"),g=s("0fd9"),h=Object(l["a"])(r,a,n,!1,null,"850c64e8",null);t["default"]=h.exports;d()(h,{VCard:u["a"],VCardActions:m["a"],VCol:f["a"],VImg:p["a"],VRow:g["a"]})},d4ae:function(e,t,s){},e9ec:function(e,t,s){"use strict";s("d4ae")}}]);
//# sourceMappingURL=chunk-4b4c3b66.586ffcd1.js.map