(function(t){function e(e){for(var r,o,i=e[0],l=e[1],u=e[2],p=0,d=[];p<i.length;p++)o=i[p],s[o]&&d.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(d.length)d.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},t._l(t.menuItems,function(e){return a("v-layout",{key:e.text},[a("v-list-item",{on:{click:function(a){return t.$router.push(e.route)}}},[a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.text))])],1)],1)],1)}),1)],1),a("v-content",[a("v-layout",{attrs:{"align-center":"","justify-center":"","fill-height":""}},[a("v-container",[a("router-view")],1)],1)],1),a("v-app-bar",{attrs:{app:"","clipped-left":""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Acme Studios.")])],1),a("v-footer",{attrs:{app:""}},[a("span",[t._v("© 2019")])])],1)},n=[],o={props:{source:String},data:()=>({drawer:!1,menuItems:[{text:"Menu",icon:"fa-home",route:"/"},{text:"View Quiz's",icon:"fa-dashboard",route:"/quizs"},{text:"New Quiz",icon:"fa-plus",route:"/new-quiz"},{text:"View Results",icon:"fa-book",route:"/results"},{text:"Edit Profile",icon:"fa-cog",route:"/settings"}]}),created(){this.$vuetify.theme.dark=!0}},i=o,l=a("2877"),u=a("6544"),c=a.n(u),p=a("7496"),d=a("40dc"),v=a("5bc1"),f=a("a523"),g=a("a75b"),m=a("553a"),x=a("132d"),h=a("a722"),b=a("8860"),y=a("da13"),V=a("1800"),w=a("5d23"),_=a("f774"),C=a("2a7f"),j=Object(l["a"])(i,s,n,!1,null,null,null),k=j.exports;c()(j,{VApp:p["a"],VAppBar:d["a"],VAppBarNavIcon:v["a"],VContainer:f["a"],VContent:g["a"],VFooter:m["a"],VIcon:x["a"],VLayout:h["a"],VList:b["a"],VListItem:y["a"],VListItemAction:V["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VNavigationDrawer:_["a"],VToolbarTitle:C["b"]});var q=a("8c4f"),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{staticClass:"headline justify-center align-center pb-3"},[t._v("Acme Studios Quiz.")]),a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs4:""}},[a("button-card",{attrs:{img:"https://images.pexels.com/photos/239548/pexels-photo-239548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",text:"Start Existing Quiz"}})],1),a("v-flex",{attrs:{xs4:""}},[a("button-card",{attrs:{img:"https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",text:"Create New Quiz"}})],1),a("v-flex",{attrs:{xs4:""}},[a("button-card",{attrs:{img:"https://images.pexels.com/photos/63901/pexels-photo-63901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",text:"Lookup Quiz's"}})],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs4:""}},[a("button-card",{attrs:{img:"https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",text:"View Past Results"}})],1),a("v-flex",{attrs:{xs4:""}},[a("button-card",{attrs:{img:"https://images.pexels.com/photos/842339/pexels-photo-842339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",text:"Edit User Profile"}})],1),a("v-flex",{attrs:{xs4:""}},[a("button-card",{attrs:{img:"https://images.pexels.com/photos/9816/pexels-photo-9816.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",text:"Log Out"}})],1)],1)],1)],1)},O=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{elevation:12,raised:!0,width:400,height:200}},[a("v-img",{staticClass:"white--text",attrs:{height:"200px",src:t.img}},[a("v-card-title",{staticClass:"align-end fill-height"},[t._v(t._s(t.text))])],1)],1)},L=[],T={name:"button-card",props:{img:String,text:String}},I=T,D=a("b0af"),A=a("99d9"),P=a("adda"),Q=Object(l["a"])(I,S,L,!1,null,"07f90fd2",null),$=Q.exports;c()(Q,{VCard:D["a"],VCardTitle:A["c"],VImg:P["a"]});var B={components:{ButtonCard:$},data(){return{buttonCards:{row1:[]}}}},E=B,R=a("0e8f"),F=Object(l["a"])(E,z,O,!1,null,null,null),M=F.exports;c()(F,{VContainer:f["a"],VFlex:R["a"],VLayout:h["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{staticClass:"headline",attrs:{"justify-center":"","align-center":""}},[t._v("Create A New Quiz")]),a("v-layout",{staticClass:"subtitle-1 pb-3",attrs:{"justify-left":""}},[t._v("Add Questions")]),t._l(t.questionBank,function(e){return a("v-flex",{key:t.question.id},[a("v-container",[a("v-card",[a("v-card-title",{staticClass:"justify-center"},[t._v("Question 1")]),a("v-content")],1)],1)],1)}),a("v-btn",{attrs:{fab:"",bottom:"",left:"",absolute:"",color:"purple"},on:{click:function(e){return t.questionBank.push(1)}}},[a("v-icon",[t._v("fa-plus")])],1),a("v-btn",{attrs:{fab:"",bottom:"",right:"",absolute:"",color:"green"},on:{click:function(e){return t.save()}}},[a("v-icon")],1)],2)},J=[],U={methods:{save(){}},data:()=>({questionBank:[{id:1,q:"a",a:"3"}]})},H=U,W=a("8336"),G=Object(l["a"])(H,N,J,!1,null,null,null),K=G.exports;c()(G,{VBtn:W["a"],VCard:D["a"],VCardTitle:A["c"],VContainer:f["a"],VContent:g["a"],VFlex:R["a"],VIcon:x["a"],VLayout:h["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{staticClass:"headline",attrs:{"justify-center":"","align-center":""}},[t._v("View Results")]),a("v-flex",[a("v-container",{attrs:{"grid-list-md":""}},t._l(t.quizs,function(e){return a("v-layout",{key:e.name},[a("v-content",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("button-card",{attrs:{img:e.img,text:e.name},nativeOn:{click:function(a){return t.showDialog(e.results)}}})],1)],1)],1)}),1)],1),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("results-card",{attrs:{results:t.activeResults}})],1)],1)},Y=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"purple"}},[a("v-toolbar-title",[t._v("Results")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.$parent.$parent.$parent.dialog=!1}}},[t._v("Close")])],1)],1),a("v-content",[a("v-layout",{attrs:{"justify-center":"","align-center":"",row:""}},[a("v-flex",{attrs:{xs6:""}},[t._v("\n                "+t._s(t.results[0].q)+"\n            ")]),a("v-flex",{attrs:{xs6:""}},[t._v("\n                "+t._s(t.results[0].a)+"\n            ")])],1)],1)],1)},tt=[],et={name:"results-card",props:{results:Array}},at=et,rt=a("2fa4"),st=a("71d9"),nt=Object(l["a"])(at,Z,tt,!1,null,"e0c54de2",null),ot=nt.exports;c()(nt,{VBtn:W["a"],VCard:D["a"],VContent:g["a"],VFlex:R["a"],VLayout:h["a"],VSpacer:rt["a"],VToolbar:st["a"],VToolbarItems:C["a"],VToolbarTitle:C["b"]});var it={components:{ButtonCard:$,ResultsCard:ot},beforeMount(){this.quizs=this.getQuizs()},methods:{showDialog(t){this.activeResults=t,this.dialog=!0},getQuizs(){return[{name:"Quiz1",img:"https://images.pexels.com/photos/842339/pexels-photo-842339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",date:new Date,results:[{q:"question 1",a:!0},{q:"question 2",a:!0},{q:"question 3",a:!0}]},{name:"Quiz2",img:"https://images.pexels.com/photos/842339/pexels-photo-842339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",date:new Date,results:[{q:"question 1",a:!0},{q:"question 2",a:!0},{q:"question 3",a:!0}]}]}},data:()=>({quizs:[],activeResults:{},dialog:!1})},lt=it,ut=a("169a"),ct=Object(l["a"])(lt,X,Y,!1,null,null,null),pt=ct.exports;c()(ct,{VContainer:f["a"],VContent:g["a"],VDialog:ut["a"],VFlex:R["a"],VLayout:h["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{staticClass:"headline justify-center align-center pb-3"},[t._v("Acme Studios.")]),a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{staticClass:"subheading justify-center align-center pb-5"},[t._v("Sign In")]),a("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[a("v-flex",{attrs:{xs4:""}},[a("v-text-field",{attrs:{label:"Email"}})],1),a("v-flex",{attrs:{xs4:""}},[a("v-text-field",{attrs:{label:"Password",type:"password"}})],1)],1),a("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[a("v-flex",{attrs:{xs2:""}},[a("v-btn",{attrs:{large:"",depressed:""},on:{click:t.handleLogin}},[t._v("Log-In")])],1),a("v-flex",{attrs:{xs2:""}},[a("v-btn",{attrs:{large:"",depressed:"",color:"primary"},on:{click:function(e){t.registerDialog=!0}}},[t._v("Register")])],1)],1)],1),a("v-overlay",{attrs:{value:t.loading}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.registerDialog,callback:function(e){t.registerDialog=e},expression:"registerDialog"}},[a("v-card",[a("v-card-title",[a("v-layout",{staticClass:"headline justify-center align-center"},[t._v("Register New User")])],1),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"First name",required:""}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Last name",required:""}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Email",required:""}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Password",type:"password",required:""}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-select",{attrs:{items:["0-17","18-29","30-54","54+"],label:"Age*",required:""}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-autocomplete",{attrs:{items:["Skiing","Ice hockey","Soccer","Basketball","Hockey","Reading","Writing","Coding","Basejump"],label:"Interests",multiple:""}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.registerDialog=!1}}},[t._v("Close")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.registerDialog=!1}}},[t._v("Save")])],1)],1)],1)],1)},vt=[],ft={components:{},methods:{handleLogin(){this.loading=!0,setTimeout(()=>{this.loading=!1},4e3)}},data(){return{dialog:!1,registerDialog:!1,loading:!1}}},gt=ft,mt=a("c6a6"),xt=a("a797"),ht=a("490a"),bt=a("b974"),yt=a("8654"),Vt=Object(l["a"])(gt,dt,vt,!1,null,null,null),wt=Vt.exports;c()(Vt,{VAutocomplete:mt["a"],VBtn:W["a"],VCard:D["a"],VCardActions:A["a"],VCardText:A["b"],VCardTitle:A["c"],VContainer:f["a"],VDialog:ut["a"],VFlex:R["a"],VLayout:h["a"],VOverlay:xt["a"],VProgressCircular:ht["a"],VSelect:bt["a"],VSpacer:rt["a"],VTextField:yt["a"]}),r["a"].use(q["a"]);var _t=new q["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:M},{path:"/new-quiz",name:"new-quiz",component:K},{path:"/results",name:"results",component:pt},{path:"/login",name:"login",component:wt}]}),Ct=a("f309");r["a"].use(Ct["a"]);var jt=new Ct["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({router:_t,vuetify:jt,render:function(t){return t(k)}}).$mount("#app"),r["a"].use(jt,{theme:{primary:"#6d1dc2"}})}});
//# sourceMappingURL=app.b441f873.js.map