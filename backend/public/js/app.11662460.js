(function(t){function e(e){for(var s,i,c=e[0],o=e[1],d=e[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var l=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1:function(t,e){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view")],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header flex space-between align-center"},[a("router-link",{staticClass:"home-icon-container",attrs:{to:"/"}},[a("i",{staticClass:"fas fa-home"})]),t._m(0),a("div",{staticClass:"nav-links-container flex "},[a("router-link",{staticClass:"flex",attrs:{to:"/"}},[t._v("logout")]),a("router-link",{staticClass:"flex",attrs:{to:"/login"}},[t._v("login")]),a("router-link",{staticClass:"flex",attrs:{to:"/singup"}},[t._v("singup")])],1)],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("i",{staticClass:"fas fa-check-double"}),t._v("MakeIt")])}],o={name:"Header"},d=o,l=a("2877"),u=Object(l["a"])(d,i,c,!1,null,null,null),p=u.exports,f={components:{Header:p}},m=f,v=Object(l["a"])(m,r,n,!1,null,null,null),b=v.exports,h=a("9483");Object(h["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var g=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t.loading?a("div",[a("img",{attrs:{src:"spinner-icon-gif-10.png",alt:""}})]):a("div",{staticClass:"home"},[a("board-list",{attrs:{boards:t.boards},on:{addBoard:t.addBoard}})],1)])},j=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"flex justify-center"},[a("div",{staticClass:"add-board-btn flex align-center justify-center",on:{click:function(e){t.isAddingBoard=!0}}},[t._v("Add a new board")])]),a("div",{staticClass:"flex wrap"},t._l(t.boards,(function(t){return a("board-preview",{key:t._id,attrs:{board:t}})})),1),t.isAddingBoard?a("div",{staticClass:"modal-mask",on:{click:function(e){t.isAddingBoard=!1}}}):t._e(),t.isAddingBoard?a("div",{staticClass:"add-board-input-container",class:{"adding-topic":t.isAddingBoard}},[a("div",{staticClass:"add-board-modal"},[a("div",{staticClass:"flex space-between"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.createdBoardName,expression:"createdBoardName"}],staticClass:"enter-board-title",attrs:{placeholder:"Enter board title"},domProps:{value:t.createdBoardName},on:{input:function(e){e.target.composing||(t.createdBoardName=e.target.value)}}}),a("button",{staticClass:"close-modal-btn",on:{click:function(e){t.isAddingBoard=!1}}},[a("i",{staticClass:"fas fa-times"})])]),a("div",{staticClass:"flex"},[a("button",{staticClass:"create-board-btn",class:{success:t.isWriting},on:{click:function(e){return t.addBoard()}}},[t._v("Create board")])])])]):t._e()])},w=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("router-link",{attrs:{to:t.currboardLink}},[a("div",{staticClass:"board-card flex align-center justify-center"},[t._v(t._s(t.board.name))])])],1)},x=[],_={props:{board:Object},computed:{currboardLink:function(){return"/board/"+this.board._id}}},B=_,A=Object(l["a"])(B,C,x,!1,null,null,null),T=A.exports,I={props:{boards:Array},components:{boardPreview:T},data:function(){return{isAddingBoard:!1,createdBoardName:"",isWriting:!1}},methods:{toggleIsAdding:function(){this.isAddingBoard=!this.isAddingBoard},addBoard:function(){var t={name:this.createdBoardName,createdBy:{},members:[],activites:[],topicTasksMap:{Todo:[],Doing:[],Done:[]}};this.$emit("addBoard",t),this.isAddingBoard=!1,this.createdBoardName=""}},watch:{createdBoardName:function(){""!==this.createdBoardName&&(this.isWriting=!0)}}},O=I,R=Object(l["a"])(O,y,w,!1,null,null,null),L=R.exports,S={data:function(){return{loading:!1}},methods:{getBoards:function(){this.$store.dispatch({type:"loadBoards"})},addBoard:function(t){this.$store.dispatch({type:"addBoard",board:t})}},computed:{boards:function(){return this.$store.getters.boards}},created:function(){var t=this;this.loading=!0,this.getBoards(),setTimeout((function(){t.loading=!1}),1500)},components:{boardList:L}},$=S,N=Object(l["a"])($,k,j,!1,null,null,null),D=N.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"board-container"},[a("div",{staticClass:"flex"},[t.currBoard?a("h2",{staticClass:"board-name"},[t._v(t._s(t.currBoard.name))]):t._e(),a("button",{staticClass:"delete-board-btn",on:{click:t.removeBoard}},[t._v("Delete board")])]),a("button",{staticClass:"activites-menu",on:{click:function(e){t.activitiesLogIsOpen=!t.activitiesLogIsOpen}}},[a("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" Show Activities ")]),t.activitiesLogIsOpen?a("LogActivities",{on:{menuClosed:function(e){t.activitiesLogIsOpen=!1}}}):t._e(),a("div",{staticClass:"flex"},[t.topics?a("div",[a("topics-list",{attrs:{topics:t.topics,topicsAsArr:t.topicsAsArr,currBoardId:t.currBoard._id},on:{updateList:t.updateList,removeList:t.removeList,topicsChanged:t.topicsChanged}})],1):t._e(),a("div",{staticClass:"add-topic-input-container",class:{"adding-topic":t.isAddingTopic}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.createdTopicName,expression:"createdTopicName"}],staticClass:"add-topic-input",class:{"adding-topic-selected":t.isAddingTopic},attrs:{placeholder:"+ Add another list"},domProps:{value:t.createdTopicName},on:{focus:function(e){return t.openTransition()},input:function(e){e.target.composing||(t.createdTopicName=e.target.value)}}}),t.isAddingTopic?a("div",{staticClass:"flex"},[a("button",{staticClass:"add-topic-btn",on:{click:function(e){return t.addList()}}},[t._v("Add list")]),a("button",{staticClass:"close-modal-btn",on:{click:function(e){t.isAddingTopic=!1}}},[a("i",{staticClass:"fas fa-times"})])]):t._e()])])],1)},M=[],P=(a("0d03"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"flex"},[a("draggable",{staticClass:"flex",attrs:{"ghost-class":"ghost",list:t.topicsAsArr},on:{start:function(e){t.dragging=!0},end:t.doneDragging}},t._l(t.topics,(function(e,s){return a("topics-preview",{key:s.id,attrs:{topicList:e,topicName:s,currBoardId:t.currBoardId,topics:t.topics},on:{endTaskDragging:t.updateList,deletList:t.deleteList}})})),1),a("router-view")],1)}),z=[],U=(a("0481"),a("d81d"),a("4069"),a("b64b"),a("07ac"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"topic-list-container column"},[a("div",{staticClass:"topic-header flex space-between"},[a("div",{staticClass:"topic-name"},[t._v(t._s(t.topicName))]),a("button",{staticClass:"delete-list-btn",on:{click:function(e){return t.deleteList()}}},[a("i",{staticClass:"fas fa-times"})])]),a("draggable",{staticClass:"dragArea list-group",attrs:{list:t.topicList,group:{name:"tasks",pull:t.pullFunction}},on:{start:t.start,end:t.end}},t._l(t.topicList,(function(e){return e?a("div",{key:e.id,staticClass:"list-group-item column",on:{click:function(a){return t.push(e.id)}}},[a("div",{staticClass:"flex"},t._l(e.labels,(function(t,e){return a("div",{key:e,class:t+"-task-label"})})),0),a("img",{class:{rotated:e.imgIsRotated},attrs:{src:e.imgUrl}}),t._v(" "+t._s(e.title)+" "),e.dueDate?a("div",[a("i",{staticClass:"far fa-clock"}),t._v(" "+t._s(t.convertTimeStampFormat(e.dueDate))+" ")]):t._e()]):t._e()})),0),a("rawDisplayer",{staticClass:"col-3",attrs:{value:t.topicList,title:"List 1"}}),a("button",{staticClass:"add-task-btn",on:{click:function(e){return t.push(null)}}},[t._v("+ Add another task")])],1)])}),J=[],F=(a("99af"),a("284c")),q=a("310e"),G=a.n(q),H=a("c1df"),W=a.n(H),K={props:{topicName:String,topicList:Array,currBoardId:String,topics:Object},name:"clone-on-control",display:"Clone on Control",instruction:"Press Ctrl to clone element from list 1",order:4,components:{draggable:G.a,rawDisplayer:G.a},data:function(){return{controlOnStart:!0,currTaskId:null}},computed:{topicListCopy:function(){return Object(F["a"])(this.topicList)}},methods:{end:function(){this.$emit("endTaskDragging",this.topics)},convertTimeStampFormat:function(t){return t+=864e5,W.a.utc(t).calendar()},pullFunction:function(){return!this.controlOnStart||"clone"},start:function(t){var e=t.originalEvent;this.controlOnStart=e.ctrlKey},push:function(t){this.$router.push("/board/".concat(this.currBoardId,"/task/edit/").concat(t,"/").concat(this.topicName))},deleteList:function(){this.$emit("deletList",this.topicName)}}},X=K,Q=Object(l["a"])(X,U,J,!1,null,null,null),V=Q.exports,Y={props:{topics:Object,currBoardId:String,topicsAsArr:Array},methods:{doneDragging:function(){this.dragging=!1;for(var t=this.topicsAsArr.map((function(t){return Object.keys(t)})),e=this.topicsAsArr.map((function(t){return Object.values(t)})),a={},s=0;s<t.length;s++)a[t[s]]=e[s].flat();this.$emit("topicsChanged",a)},deleteList:function(t){this.$emit("removeList",t)},updateList:function(t){this.$emit("updateList",t)}},components:{TopicsPreview:V,draggable:G.a}},Z=Y,tt=Object(l["a"])(Z,P,z,!1,null,null,null),et=tt.exports,at=a("4bea"),st=a.n(at),rt="/",nt=st()(rt),it={on:ct,emit:ot};function ct(t,e){nt.on(t,e)}function ot(t,e){nt.emit(t,e)}var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"side-nav-container"},[a("div",{staticClass:"activities-menu"},[a("div",{staticClass:"activities-header flex space-between",on:{click:t.closeMenu}},[a("div",{staticClass:"activities-menu-title"},[t._v("Activities Log")]),a("i",{staticClass:"fas fa-times"})]),t._l(t.activities,(function(e,s){return a("div",{key:s,staticClass:"activity"},[t._v(" "+t._s(e.task)+" in list "+t._s(e.inTopic)+" was "+t._s(e.activity)+" "),a("div",{staticClass:"time"},[t._v(t._s(t.convertTimeStampFormat(e.DoneAt)))])])}))],2)])},lt=[],ut={props:{topics:Object,currBoardId:String},methods:{closeMenu:function(){this.$emit("menuClosed")},convertTimeStampFormat:function(t){return console.log(t),W.a.utc(t+12e3).calendar()}},computed:{activities:function(){return this.$store.getters.activities}}},pt=ut,ft=Object(l["a"])(pt,dt,lt,!1,null,null,null),mt=ft.exports,vt={components:{TopicsList:et,LogActivities:mt},data:function(){return{currBoard:null,activitiesLogIsOpen:!1,boardId:null,isAddingTopic:!1,createdTopicName:""}},computed:{topics:function(){if(this.currBoard=this.$store.getters.currBoard,this.currBoard)return this.currBoard.topicTasksMap},topicsAsArr:function(){return this.$store.getters.topicsAsArray}},methods:{addList:function(){var t=this.createdTopicName;this.$store.dispatch({type:"addList",topic:t}),this.isAddingTopic=!1,this.createdTopicName=""},openTransition:function(){this.isAddingTopic=!this.isAddingTopic},removeBoard:function(){this.$store.dispatch({type:"removeBoard",boardId:this.boardId}),this.$router.push("/")},topicsChanged:function(t){var e=JSON.parse(JSON.stringify(this.currBoard));e.topicTasksMap=t,this.$store.dispatch({type:"setBoard",board:e})},addTopic:function(t){this.$store.dispatch({type:"addTopic",topic:t})},removeList:function(t){this.$store.dispatch({type:"removeList",topicName:t})},updateList:function(t){var e=JSON.parse(JSON.stringify(this.currBoard));e.topicTasksMap=t,e.activites.push({task:"lists",activity:"updated",inTopic:"",DoneAt:Date.now()}),this.$store.dispatch({type:"setBoard",board:e})},push:function(t){this.$router.push("/board/".concat(t,"/activties"))}},created:function(){var t=this;this.boardId=this.$route.params._id,this.currBoard=JSON.parse(JSON.stringify(this.$store.getters.currBoard)),this.$store.dispatch({type:"getCurrBoard",id:this.boardId}),it.emit("load board",this.$store.getters.currBoard),it.on("board updated",(function(e){t.$store.commit({type:"setCurrBoard",board:e})}))}},bt=vt,ht=Object(l["a"])(bt,E,M,!1,null,null,null),gt=ht.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("button",{staticClass:"modal-mask",on:{click:t.closeEdit}},[t._v("X")]),a("div",{staticClass:"edit-modal"},[a("div",{staticClass:"flex align-end"},[a("router-link",{attrs:{to:"/board/"+this.currBoardId}},[a("i",{staticClass:"fas fa-times"})])],1),a("form",{staticClass:"edit-form flex column",on:{submit:function(e){return e.preventDefault(),t.saveTask(e)}}},[a("div",{staticClass:"flex align-center"},[a("i",{staticClass:"fas fa-sticky-note"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.title,expression:"task.title"}],staticClass:"task-title",attrs:{type:"text",placeholder:"Enter the title"},domProps:{value:t.task.title},on:{input:function(e){e.target.composing||t.$set(t.task,"title",e.target.value)}}})]),a("div",{staticClass:"flex space-between"},[a("div",{staticClass:"main-edit-container"},[a("div",{staticClass:"in-list"},[t._v("In List : "+t._s(t.topicName))]),a("div",{staticClass:"labels-due-date-container flex"},[a("div",[t.task.labels?a("div",{staticClass:"labels-title-display"},[t._v("labels")]):t._e(),a("div",{staticClass:"labels-container-display flex"},t._l(t.task.labels,(function(t,e){return a("div",{key:e},[a("div",{class:t+"-label-preview"})])})),0)]),a("div",{staticClass:"due-date-container"},[a("div",{staticClass:"due-date-title"},[t._v("Due date")]),a("date-picker",{staticClass:"date-picker-preview",attrs:{"value-type":"timestamp",placeholder:"Select due date"},model:{value:t.task.dueDate,callback:function(e){t.$set(t.task,"dueDate",t._n(e))},expression:"task.dueDate"}},[t._v(t._s(t.task.taskDueDate)+" ")])],1)]),t._m(0),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.task.description,expression:"task.description"}],staticClass:"task-description",attrs:{type:"text",placeholder:"Add a more detailed description..."},domProps:{value:t.task.description},on:{input:function(e){e.target.composing||t.$set(t.task,"description",e.target.value)}}}),t._v(" "),t.task.imgUrl?a("div",{staticClass:"flex align-center"},[a("i",{staticClass:"fas fa-paperclip"}),a("div",{staticClass:"image-title"},[t._v("Image")])]):t._e(),a("div",{staticClass:"img-container",class:{rotated:t.task.imgIsRotated}},[t.task.imgUrl?a("img",{attrs:{src:t.task.imgUrl}}):t._e()])]),a("div",{staticClass:"edit-nav-bar flex column"},[a("div",[t._v("Add to task:")]),a("div",[a("div",{staticClass:"due-date",on:{click:function(e){t.datePickerSelected=!t.datePickerSelected}}},[a("i",{staticClass:"far fa-clock"}),t._v("Due Date ")]),t.datePickerSelected?a("div",{staticClass:"transparent-modal-mask",on:{click:function(e){t.datePickerSelected=!1}}}):t._e(),t.datePickerSelected?a("date-picker",{staticClass:"date-picker",attrs:{"value-type":"timestamp",placeholder:"Select due date",inline:!0},model:{value:t.task.dueDate,callback:function(e){t.$set(t.task,"dueDate",t._n(e))},expression:"task.dueDate"}},[t._v(t._s(t.task.taskDueDate)+" ")]):t._e()],1),t.imgAttachmentSelected?a("div",{staticClass:"transparent-modal-mask",on:{click:function(e){t.imgAttachmentSelected=!1}}}):t._e(),a("div",{staticClass:"img-attachment",on:{click:function(e){t.imgAttachmentSelected=!t.imgAttachmentSelected}}},[a("i",{staticClass:"fas fa-image"}),t._v("Image Attachment ")]),t.imgAttachmentSelected?a("div",{staticClass:"img-uploader"},[a("div",[t._v("Attach and Image")]),a("input",{staticClass:"upload-img-input",attrs:{type:"file"},on:{change:t.uploadImgfunc}})]):t._e(),t.addLabelsSelected?a("div",{staticClass:"transparent-modal-mask",on:{click:function(e){t.addLabelsSelected=!1}}}):t._e(),a("div",{staticClass:"add-labels-btn",on:{click:function(e){t.addLabelsSelected=!t.addLabelsSelected}}},[a("i",{staticClass:"fas fa-tag"}),t._v("Add Label ")]),t.addLabelsSelected?a("div",{staticClass:"label-picker"},[a("div",{staticClass:"labels-title"},[t._v("Labels")]),a("div",{staticClass:"labels-container"},[a("div",{staticClass:"green flex align-center",on:{click:function(e){return t.selectLabel("green")}}},[t.selected("green")?a("i",{staticClass:"fas fa-check"}):t._e()]),a("div",{staticClass:"yellow flex align-center",on:{click:function(e){return t.selectLabel("yellow")}}},[t.selected("yellow")?a("i",{staticClass:"fas fa-check"}):t._e()]),a("div",{staticClass:"orange flex align-center",on:{click:function(e){return t.selectLabel("orange")}}},[t.selected("orange")?a("i",{staticClass:"fas fa-check"}):t._e()]),a("div",{staticClass:"red flex align-center",on:{click:function(e){return t.selectLabel("red")}}},[t.selected("red")?a("i",{staticClass:"fas fa-check"}):t._e()]),a("div",{staticClass:"purple flex align-center",on:{click:function(e){return t.selectLabel("purple")}}},[t.selected("purple")?a("i",{staticClass:"fas fa-check"}):t._e()]),a("div",{staticClass:"blue flex align-center",on:{click:function(e){return t.selectLabel("blue")}}},[t.selected("blue")?a("i",{staticClass:"fas fa-check"}):t._e()])])]):t._e(),a("div",{staticClass:"delete-task",on:{click:t.remove}},[a("i",{staticClass:"fas fa-trash-alt"}),t._v("Delete Task")])])]),a("button",{staticClass:"save-task-btn",attrs:{type:"submit"}},[t._v("Save")])])])])},jt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex align-center"},[a("i",{staticClass:"fas fa-align-left"}),a("div",{staticClass:"description-title"},[t._v("Description")])])}],yt=(a("c975"),a("a434"),a("d3b7"),a("96cf"),a("bc3a")),wt=a.n(yt),Ct="/api/board",xt=wt.a.create({withCredentials:!0}),_t={get:function(t,e){return Bt(t,"GET",e)},post:function(t,e){return Bt(t,"POST",e)},put:function(t,e){return Bt(t,"PUT",e)},delete:function(t,e){return Bt(t,"DELETE",e)}};function Bt(t){var e,a,s,r=arguments;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e=r.length>1&&void 0!==r[1]?r[1]:"get",a=r.length>2&&void 0!==r[2]?r[2]:null,n.prev=2,n.next=5,regeneratorRuntime.awrap(xt({url:"".concat(Ct).concat(t),method:e,data:a}));case 5:return s=n.sent,n.abrupt("return",s.data);case 9:n.prev=9,n.t0=n["catch"](2),401===n.t0.response.status&&se.push("/");case 12:case"end":return n.stop()}}),null,null,[[2,9]])}var At={query:Tt,remove:Rt,getById:Ot,edit:It,add:Lt};function Tt(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(_t.get("/"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}))}function It(t){var e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(_t.put("/".concat(t.id),t));case 2:return e=a.sent,a.abrupt("return",e);case 4:case"end":return a.stop()}}))}function Ot(t){var e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(_t.get("/".concat(t)));case 2:return e=a.sent,a.abrupt("return",e);case 4:case"end":return a.stop()}}))}function Rt(t){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(_t.delete(t));case 2:case"end":return e.stop()}}))}function Lt(t){var e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(_t.post("/",t));case 2:return e=a.sent,a.abrupt("return",e);case 4:case"end":return a.stop()}}))}a("4de4"),a("c740");var St={remove:$t,getTaskById:Dt,add:Et,edit:Nt};function $t(t,e,a){var s,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(At.getById(t));case 2:return s=n.sent,n.next=5,regeneratorRuntime.awrap(Dt(t,e));case 5:return r=n.sent,s.topicTasksMap[a]=s.topicTasksMap[a].filter((function(t){return t.id!==e})),s.activites.push({task:r.title,activity:"removed",inTopic:a,DoneAt:Date.now()}),n.next=10,regeneratorRuntime.awrap(At.edit(s));case 10:return s=n.sent,n.abrupt("return",s);case 12:case"end":return n.stop()}}))}function Nt(t,e,a){var s,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(At.getById(t));case 2:return s=n.sent,r=s.topicTasksMap[a].findIndex((function(t){return t.id===e.id})),s.activites.push({task:e.title,activity:"updated",inTopic:a,DoneAt:Date.now()}),s.topicTasksMap[a].splice(r,1,e),n.abrupt("return",s);case 7:case"end":return n.stop()}}))}function Dt(t,e){var a,s,r,n,i;return regeneratorRuntime.async((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,regeneratorRuntime.awrap(At.getById(t));case 2:a=c.sent,s=Object.values(a.topicTasksMap),r=0;case 5:if(!(r<s.length)){c.next=17;break}n=0;case 7:if(!(n<s[r].length)){c.next=14;break}if(i=s[r][n],i.id!==e){c.next=11;break}return c.abrupt("return",i);case 11:n++,c.next=7;break;case 14:r++,c.next=5;break;case 17:case"end":return c.stop()}}))}function Et(t,e,a){var s,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(At.getById(t));case 2:return s=n.sent,e.id=Mt(),e.createdById=null,s.topicTasksMap[a].push(e),s.activites.push({task:e.title,activity:"added",inTopic:a,DoneAt:Date.now()}),n.next=9,regeneratorRuntime.awrap(At.edit(s));case 9:return r=n.sent,n.abrupt("return",r);case 11:case"end":return n.stop()}}))}function Mt(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=0;s<t;s++)e+=a.charAt(Math.floor(Math.random()*a.length));return e}var Pt,zt,Ut=a("ec45"),Jt=(a("411c"),function(t){var e="dwlyhuwyk",a="xyqpdle6",s="https://api.cloudinary.com/v1_1/".concat(e,"/image/upload"),r=new FormData;return r.append("file",t.target.files[0]),r.append("upload_preset",a),fetch(s,{method:"POST",body:r}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){return console.error(t)}))}),Ft={data:function(){return{task:{title:"",description:"",dueDate:null,imgUrl:"",imgIsRotated:!1,labels:[]},currBoardId:null,topicName:"",datePickerSelected:!1,imgAttachmentSelected:!1,addLabelsSelected:!1}},methods:{uploadImgfunc:function(t){var e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(Jt(t));case 2:e=a.sent,this.task.imgUrl=e.url;case 4:case"end":return a.stop()}}),null,this)},saveTask:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.task.id){t.next=5;break}return t.next=3,regeneratorRuntime.awrap(this.$store.dispatch({type:"updateTask",boardId:this.currBoardId,task:this.task,topic:this.topicName,imgUrl:this.imgUrl,dueDate:this.dueDate,imgIsRotated:this.imgIsRotated,labels:this.labels}));case 3:t.next=7;break;case 5:return t.next=7,regeneratorRuntime.awrap(this.$store.dispatch({type:"addTask",boardId:this.currBoardId,task:this.task,topic:this.topicName,imgUrl:this.imgUrl,dueDate:this.dueDate,imgIsRotated:this.imgIsRotated,labels:this.labels}));case 7:this.closeEdit();case 8:case"end":return t.stop()}}),null,this)},remove:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$store.dispatch({type:"removeTask",boardId:this.currBoardId,taskId:this.task.id,topic:this.topicName,imgUrl:this.imgUrl,dueDate:this.dueDate,imgIsRotated:this.imgIsRotated,labels:this.labels}));case 2:this.closeEdit();case 3:case"end":return t.stop()}}),null,this)},closeEdit:function(){this.$router.push("/board/"+this.currBoardId)},selectLabel:function(t){var e=this.task.labels.indexOf(t);return-1===e?(this.task.labels.push(t),!0):(this.task.labels.splice(e,1),!1)},selected:function(t){var e=this.task.labels.indexOf(t);return-1!==e}},created:function(){var t,e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:if(this.topicName=this.$route.params.topic,this.currBoardId=this.$route.params._id,t=this.$route.params.taskId,"null"===t){a.next=8;break}return a.next=6,regeneratorRuntime.awrap(St.getTaskById(this.currBoardId,t));case 6:e=a.sent,this.task=JSON.parse(JSON.stringify(e));case 8:case"end":return a.stop()}}),null,this)},components:{DatePicker:Ut["a"]}},qt=Ft,Gt=Object(l["a"])(qt,kt,jt,!1,null,null,null),Ht=Gt.exports,Wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Kt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("h1",[t._v("Login")])])}],Xt={},Qt=Object(l["a"])(Xt,Wt,Kt,!1,null,null,null),Vt=Qt.exports,Yt={},Zt=Object(l["a"])(Yt,Pt,zt,!1,null,null,null),te=Zt.exports;s["a"].use(g["a"]);var ee=[{path:"/",name:"home",component:D},{path:"/board/:_id/",name:"board",component:gt,children:[{path:"task/edit/:taskId?/:topic?",component:Ht},{path:"activties",component:mt}]},{path:"/login",name:"login",component:Vt},{path:"/signup",name:"signup",component:te}],ae=new g["a"]({mode:"history",base:"/",routes:ee}),se=ae,re=a("2fa7"),ne=a("2f62");a("3e8f");s["a"].use(ne["a"]);var ie=new ne["a"].Store({state:{boards:[],currBoard:null},getters:{boards:function(t){return t.boards},currBoard:function(t){return t.currBoard},activities:function(t){return t.currBoard.activites},topicsAsArray:function(t){if(!t.currBoard)return[];var e=Object.keys(t.currBoard.topicTasksMap).map((function(e){return Object(re["a"])({},e,t.currBoard.topicTasksMap[e])}));return e}},mutations:{setCurrBoard:function(t,e){var a=e.board;t.currBoard=a},setBoards:function(t,e){var a=e.boards;t.boards=a},removeBoard:function(t,e){var a=e.boardId,s=t.boards.findIndex((function(t){return t._id===a}));t.boards.splice(s,1)}},actions:{removeBoard:function(t,e){var a;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return a=e.boardId,s.next=3,regeneratorRuntime.awrap(At.remove(a));case 3:t.commit({type:"removeBoard",boardId:a});case 4:case"end":return s.stop()}}))},addBoard:function(t,e){var a,s;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.board,r.next=3,regeneratorRuntime.awrap(At.add(a));case 3:a=r.sent,s=Object(F["a"])(t.state.boards),s.push(a),t.commit({type:"setBoards",boards:s});case 7:case"end":return r.stop()}}))},loadBoards:function(t){var e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(At.query());case 2:return e=a.sent,t.commit({type:"setBoards",boards:e}),a.abrupt("return",e);case 5:case"end":return a.stop()}}))},getCurrBoard:function(t,e){var a,s;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.id,r.next=3,regeneratorRuntime.awrap(At.getById(a));case 3:return s=r.sent,t.commit({type:"setCurrBoard",board:s}),it.emit("update board",s),r.abrupt("return",s);case 7:case"end":return r.stop()}}))},removeTask:function(t,e){var a,s,r,n;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.boardId,s=e.taskId,r=e.topic,i.next=3,regeneratorRuntime.awrap(St.remove(a,s,r));case 3:n=i.sent,t.commit({type:"setCurrBoard",board:n}),it.emit("update board",n);case 6:case"end":return i.stop()}}))},addTask:function(t,e){var a,s,r,n;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.boardId,s=e.task,r=e.topic,i.next=3,regeneratorRuntime.awrap(St.add(a,s,r));case 3:n=i.sent,t.commit({type:"setCurrBoard",board:n}),it.emit("update board",n);case 6:case"end":return i.stop()}}))},updateTask:function(t,e){var a,s,r,n;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.boardId,s=e.task,r=e.topic,i.next=3,regeneratorRuntime.awrap(St.edit(a,s,r));case 3:return n=i.sent,i.next=6,regeneratorRuntime.awrap(At.edit(n));case 6:t.commit({type:"setCurrBoard",board:n}),it.emit("update board",n);case 8:case"end":return i.stop()}}))},setBoard:function(t,e){var a;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return a=e.board,t.commit({type:"setCurrBoard",board:a}),s.next=4,regeneratorRuntime.awrap(At.edit(a));case 4:it.emit("update board",a);case 5:case"end":return s.stop()}}))},addList:function(t,e){var a,s,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.topic,s=JSON.parse(JSON.stringify(t.state.currBoard)),s.topicTasksMap[a]=[],n.next=5,regeneratorRuntime.awrap(At.edit(s));case 5:r=n.sent,t.commit({type:"setCurrBoard",board:r}),it.emit("update board",r);case 8:case"end":return n.stop()}}))},removeList:function(t,e){var a,s,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.topicName,s=JSON.parse(JSON.stringify(t.getters.currBoard)),delete s.topicTasksMap[a],n.next=5,regeneratorRuntime.awrap(At.edit(s));case 5:r=n.sent,t.commit({type:"setCurrBoard",board:r}),it.emit("update board",r);case 8:case"end":return n.stop()}}))}}});a("b7e3");s["a"].config.productionTip=!1,new s["a"]({router:se,store:ie,render:function(t){return t(b)}}).$mount("#app")},b7e3:function(t,e,a){}});
//# sourceMappingURL=app.11662460.js.map