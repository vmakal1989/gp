(this.webpackJsonpgp=this.webpackJsonpgp||[]).push([[0],{119:function(e,t,n){"use strict";n(0);var a=n(126),r=n.n(a),i=n.p+"static/media/preloader.fdaf4cde.gif",s=n(4);t.a=function(){return Object(s.jsx)("div",{className:r.a.container,children:Object(s.jsx)("img",{className:r.a.preloaderImage,src:i,alt:i})})}},121:function(e,t,n){e.exports={date_icon:"ChooseDate_date_icon__2fJ9M",date_field:"ChooseDate_date_field__1VWVP"}},126:function(e,t,n){e.exports={container:"Preloader_container__3UyIv",preloaderImage:"Preloader_preloaderImage__33C99"}},127:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return _}));var a=n(23),r=n.n(a),i=n(38),s=n(11),c=n(35),o="USERS/SET_USERS",u="USERS/TOGGLE_IS_FETCHING",l={users:[],isFetching:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n=[];for(var a in t.users)n.push(Object(s.a)({id:a},t.users[a]));return Object(s.a)(Object(s.a)({},e),{},{users:n});case u:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});default:return e}},j=function(e){return{type:u,isFetching:e}},f=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(!0)),e.next=3,c.b.getUsers().then((function(e){var n;t((n=e.val(),{type:o,users:n})),t(j(!1))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(e,t,n,a,s){return function(){var o=Object(i.a)(r.a.mark((function i(o){return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.b.editUserProfile(e,t,n,a,s).then((function(){return o(f())}));case 2:case"end":return r.stop()}}),i)})));return function(e){return o.apply(this,arguments)}}()}},134:function(e,t,n){"use strict";n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return h}));var a=n(23),r=n.n(a),i=n(38),s=n(11),c=n(35),o=n(18),u=n.n(o),l="USER_NOTES/SET_USER_NOTES",d="USER_NOTES/RESET_USER_NOTES",j="USER_NOTES/TOGGLE_IS_FETCHING",f={notes:[],isFetching:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n=[];for(var a in t.notes)n.push(Object(s.a)({},t.notes[a]));return n.sort((function(e,t){return e.time-t.time})),n.sort((function(e,t){return u()(e.date.split(".").reverse().join("-"))-u()(t.date.split(".").reverse().join("-"))})),Object(s.a)(Object(s.a)({},e),{},{notes:n});case d:return Object(s.a)(Object(s.a)({},e),{},{notes:[]});case j:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching})}return e},b=function(e){return{type:j,isFetching:e}},m=function(){return{type:d}},h=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(b(!0)),t.next=3,c.a.getNotes(e).then((function(e){var t;n((t=e.val(),{type:l,notes:t})),n(b(!1))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},15:function(e,t,n){e.exports={container:"Header_container__1zDAX",items:"Header_items__Yygpu",link:"Header_link__21I-s",item:"Header_item__1qhf8",item_focus:"Header_item_focus__2-r-o",item_current:"Header_item_current__6VIVm",item_choose_day:"Header_item_choose_day__3Ga8G",right:"Header_right__3T2uQ",item_login:"Header_item_login__1xQDa"}},215:function(e,t,n){},216:function(e,t,n){},29:function(e,t,n){e.exports={sign_up_container:"SignUp_sign_up_container__2XMQ9",title:"SignUp_title__1YP8T",field:"SignUp_field__3yQKL",error:"SignUp_error__3eAoZ",submitError:"SignUp_submitError__3GrS-",field_error:"SignUp_field_error__2uREj",button:"SignUp_button__25-RE",link:"SignUp_link__2lRDU",nav_box:"SignUp_nav_box__1UlhN",flex_box:"SignUp_flex_box__3uW6u",flex_field:"SignUp_flex_field__1diln",preloader:"SignUp_preloader__dW7yR"}},332:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),s=n.n(i),c=(n(215),function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,361)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))}),o=n(37),u=(n(216),n(11)),l=n(26),d=n(15),j=n.n(d),f=n(28),_=n.n(f),b=n(18),m=n.n(b),h=n(94),p=n(33),O=n(359),v=n(167),x=n(358),g=n(357),N=n(121),S=n.n(N),y=n.p+"static/media/calendar.521f8e7d.svg",w=n(25),D=n(4),E=function(){var e=Object(a.useState)(m()()),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),s=Object(o.a)(i,2),c=s[0],u=s[1],l=Object(w.f)(),d=Object(v.a)({palette:{primary:g.a}});return Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:S.a.date_icon,onClick:function(){return u(!0)},children:Object(D.jsx)("img",{src:y,alt:"Calendar",title:"Choose date"})}),Object(D.jsx)("div",{className:S.a.date_field,children:Object(D.jsx)(x.a,{theme:d,children:Object(D.jsx)(p.a,{utils:h.a,children:Object(D.jsx)(O.a,{value:n,onChange:r,open:c,onClose:function(){return u(!1)},onAccept:function(e){return function(e){e&&l.push("/notepad/".concat(e.format("DD.MM.YYYY"))),u(!1)}(e)}})})})})]})},C=n(20),I=function(){return Object(D.jsx)(C.c,{className:_()([j.a.link,j.a.item]),activeClassName:j.a.item_current,exact:!0,to:"/",children:Object(D.jsx)("li",{children:"Calendar"})})},A=function(e){var t=e.showSelectedDates,n=e.setShowSelectedDates;return Object(D.jsx)(C.c,{className:_()([j.a.link,j.a.item,j.a.item_select_dates,t?j.a.item_focus:""]),onClick:function(){return n(!t)},to:"",activeClassName:j.a.item_current,isActive:function(e,t){return"notepad"===t.pathname.split("/")[1]},children:Object(D.jsx)("li",{children:"Notes"})})},k=function(e){return"admin"!==e.userRole?Object(D.jsx)(D.Fragment,{}):Object(D.jsx)(C.c,{className:_()([j.a.link,j.a.item]),activeClassName:j.a.item_current,exact:!0,to:"/admin",children:Object(D.jsx)("li",{children:"Admin"})})},T=function(e){var t=e.isAuth,n=e.setShowConfirmWindow;return t?Object(D.jsx)("li",{className:_()([j.a.link,j.a.item,j.a.item_login]),onClick:n,children:"Sign out"}):Object(D.jsx)(C.c,{className:_()([j.a.link,j.a.item,j.a.item_login]),exact:!0,to:"/login",activeClassName:j.a.item_current,isActive:function(e,t){return"/login"===t.pathname||"/signup"===t.pathname},children:Object(D.jsx)("li",{children:"Log In"})})},U=function(e){var t=e.setShowSelectedDates,n=e.showSelectedDates,a=e.isAuth,r=e.setShowConfirmWindow,i=e.userRole;return Object(D.jsx)("nav",{className:j.a.container,children:Object(D.jsxs)("ul",{className:j.a.items,children:[Object(D.jsx)(I,{}),Object(D.jsx)(A,{setShowSelectedDates:t,showSelectedDates:n}),Object(D.jsx)("li",{className:_()([j.a.item,j.a.item_choose_day]),children:Object(D.jsx)(E,{})}),Object(D.jsxs)("div",{className:j.a.right,children:[Object(D.jsx)(k,{userRole:i}),Object(D.jsx)(T,{isAuth:a,setShowConfirmWindow:r})]})]})})},F=Object(l.b)((function(e){return{isAuth:e.auth.isAuth,userRole:e.auth.user.role}}),{})((function(e){return Object(D.jsx)(U,Object(u.a)({},e))})),M=n(67),R=n(42),L=n.n(R),P=n(23),H=n.n(P),W=n(38),Y=n(168),G=n(35),z="NOTES/SET_NOTES",B="NOTES/ADD_NOTE",q="NOTES/CHANGE_NOTE",X="NOTES/REMOVE_NOTE",V="NOTES/CLEAR_NOTES_STATE",Z=[],Q=function(e){return{type:z,notes:e}},J=function(e,t,n,a,r){return{type:B,id:e,date:t,hour:n,value:a,userId:r}},K=function(e,t){return{type:q,id:e,value:t}},$=function(e){return{type:X,id:e}},ee=function(){return function(e){return e({type:V})}},te=n(163),ne=n.n(te),ae=function(e){var t=e.hour,n=e.addNote,a=e.title,r=e.value,i=e.changeField;return Object(D.jsxs)("div",{children:[a&&Object(D.jsx)("div",{className:L.a.title__notepad_row,children:a}),Object(D.jsxs)("div",{className:L.a.notepad_row,children:[Object(D.jsx)("span",{className:L.a.time,children:t}),Object(D.jsx)(ne.a,{value:r,className:L.a.field,onChange:i,onBlur:n})]})]})},re=function(e,t,n){var a,r={value:"",id:""},i=Object(M.a)(e.notes);try{for(i.s();!(a=i.n()).done;){var s=a.value;if(s.date===t[0]&&s.time===n&&s.value){r.value=s.value,r.id=s.id;break}}}catch(c){i.e(c)}finally{i.f()}return r},ie=Object(l.b)((function(e,t){var n=t.date,a=t.hour;return{noteData:re(e,n,a)}}),{addNewNote:function(e,t,n){return function(){var a=Object(W.a)(H.a.mark((function a(r,i){var s;return H.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=i().auth.user.id,a.next=3,G.a.addNote(s,{date:e,time:t,value:n,userId:s}).then((function(a){return r(J(a.key,e,t,n,s))}));case 3:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},editNote:function(e,t,n,a){return function(){var r=Object(W.a)(H.a.mark((function r(i,s){var c;return H.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=s().auth.user.id,r.next=3,G.a.editNote(c,e,t,n,a).then((function(){return i(K(e,a))}));case 3:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},removeNote:function(e){return function(){var t=Object(W.a)(H.a.mark((function t(n,a){var r;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.user.id,t.next=3,G.a.removeNote(r,e).then((function(){return n($(e))}));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})((function(e){var t=e.noteData.value,n=Object(a.useState)(e.noteData.value),r=Object(o.a)(n,2),i=r[0],s=r[1];Object(a.useEffect)((function(){return s(e.noteData.value)}),[e.date]);return Object(D.jsx)(ae,{hour:e.hour,value:i,addNote:function(){!t&&i.trim()&&e.addNewNote(e.date[0],e.hour,i),t&&t!==i&&i.trim()&&e.editNote(e.noteData.id,e.date[0],e.hour,i),t&&!i.trim()&&e.removeNote(e.noteData.id)},title:e.title,changeField:function(e){return s(e.target.value)}})})),se=function(e){var t=e.date,n=e.datesData,a=e.hours,r=e.getTitle;return Object(D.jsx)("div",{className:L.a.container,children:Object(D.jsxs)("div",{className:L.a.notepad,children:[Object(D.jsx)(C.c,{to:"/",className:L.a.log_out}),1===t.length?Object(D.jsx)("div",{className:L.a.title,children:t}):0===n.data.length?Object(D.jsx)("div",{className:L.a.notepad__message,children:"There aren't notes in the specified range"}):"",n.current?n.data.map((function(e){return Object(D.jsx)(ie,{hour:e.time,date:[e.date],title:r(e.date)},e.id)})):a.map((function(e){return Object(D.jsx)(ie,{hour:e,date:t,title:""},e)}))]})})},ce=function(e,t){var n={current:!1,data:[]};if(t.length>1){n.current=!0;var a,r=t[0].split(".").reverse().join("-"),i=t[1].split(".").reverse().join("-"),s=Object(M.a)(e.notes);try{for(s.s();!(a=s.n()).done;){var c=a.value,o=c.date.split(".").reverse().join("-");m()(o).isBetween(r,i,void 0,"[]")&&n.data.push(c)}}catch(u){s.e(u)}finally{s.f()}n.data.sort((function(e,t){return e.time-t.time})),n.data.sort((function(e,t){return m()(e.date.split(".").reverse().join("-"))-m()(t.date.split(".").reverse().join("-"))}))}return n},oe=Object(l.b)((function(e,t){var n=t.date;return{datesData:ce(e,n),isAuth:e.auth.isAuth}}))((function(e){var t=e.date,n=e.datesData,a=e.isAuth,r=function(e){var t=e;return function(e){return t!==e?t=e:""}}("");return a?Object(D.jsx)(se,{date:t,datesData:n,hours:["00.00","01.00","02.00","03.00","04.00","06.00","07.00","08.00","09.00","10.00","11.00","12.00","13.00","14.00","15.00","16.00","17.00","18.00","19.00","20.00","21.00","22.00","23.00"],getTitle:r}):Object(D.jsx)(w.a,{to:"/login"})})),ue=n(27),le=n(157),de=n(54),je=n(30),fe="APP/INITIALIZED",_e={initialized:!1},be=function(e){return{type:fe,value:e}},me="AUTH/NEW_SESSIONS",he="AUTH/REMOVE_SESSIONS",pe="AUTH/TOGGLE_IS_FETCHING",Oe={user:{id:null,firstName:"",lastName:"",email:"",role:""},isAuth:!1,isFetching:!1},ve=function(e,t,n,a,r){return{type:me,id:e,firstName:t,lastName:n,email:a,role:r}},xe=function(e){return{type:pe,isFetching:e}},ge=function(e,t){G.b.getUserProfile(e).then((function(n){var a,r=n.val(),i=r.email,s=r.firstName,c=r.lastName,o=r.role;t(ve(e,s,c,i,o)),t((a=e,function(){var e=Object(W.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.getNotes(a).then((function(e){var n=e.val();t(Q(n))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),t(be(!0))}))},Ne=function(e){return function(){var t=Object(W.a)(H.a.mark((function t(n){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ge(e,n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Se=n(164),ye=n(127),we=n(134),De=Object(ue.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(u.a)(Object(u.a)({},e),{},{initialized:t.value});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:var n=[];for(var a in t.notes)n.push(Object(u.a)({id:a},t.notes[a]));return n;case B:var r={id:t.id,userId:t.userId,date:t.date,time:t.hour,value:t.value};return[].concat(Object(Y.a)(e),[r]);case q:return e.map((function(e){return e.id!==t.id||(e.value=t.value)})),e;case X:return e.filter((function(e){return e.id!==t.id?e:null}));case V:return[];default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return Object(u.a)(Object(u.a)({},e),{},{isAuth:!0,user:Object(u.a)(Object(u.a)({},e.user),{},{id:t.id,firstName:t.firstName,lastName:t.lastName,email:t.email,role:t.role})});case he:return Object(u.a)(Object(u.a)({},e),{},{isAuth:!1,user:Object(u.a)(Object(u.a)({},e.user),{},{id:"",firstName:"",lastName:"",email:"",role:""})});case pe:return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});default:return e}},form:le.a,users:ye.c,userNotes:we.c}),Ee=Object(ue.d)(De,Object(ue.a)(Se.a));window.store=Ee;var Ce=Ee,Ie=n(46),Ae=n.n(Ie),ke=function(e){var t=e.setShowSelectedDates,n=Object(a.useState)(m()()),r=Object(o.a)(n,2),i=r[0],s=r[1],c=Object(a.useState)(m()()),u=Object(o.a)(c,2),l=u[0],d=u[1],j=Object(a.useState)(!0),f=Object(o.a)(j,2),_=f[0],b=f[1];Object(a.useEffect)((function(){b(m()(i).isSameOrBefore(l))}),[i,l]);var N=Object(v.a)({palette:{primary:g.a}}),S=function(){_&&t(!1)};return Object(D.jsxs)("div",{className:Ae.a.dates__wrapper,onMouseLeave:function(){return t(!1)},children:[Object(D.jsx)("div",{className:Ae.a.dates__title,children:"Set interval dates"}),Object(D.jsx)("div",{className:Ae.a.dates__container,children:Object(D.jsx)(x.a,{theme:N,children:Object(D.jsxs)(p.a,{utils:h.a,children:[Object(D.jsx)(O.a,{autoOk:!0,value:i,onChange:s,format:"DD/MM/yyyy",className:Ae.a.dates__field,InputAdornmentProps:{position:"start"}}),Object(D.jsx)(O.a,{autoOk:!0,format:"DD/MM/yyyy",value:l,onChange:d,className:Ae.a.dates__field,InputAdornmentProps:{position:"start"}})]})})}),_?null:Object(D.jsx)("div",{className:Ae.a.dates__error,children:"Dates aren't correct!"}),Object(D.jsx)("div",{className:Ae.a.dates__button_box,children:_?Object(D.jsx)(C.b,{to:"/notepad/".concat(m()(i).format("DD.MM.yyyy"),"-").concat(m()(l).format("DD.MM.yyyy")),children:Object(D.jsx)("button",{className:Ae.a.dates__button,onClick:S,children:"Send"})}):Object(D.jsx)("button",{className:Ae.a.dates__button,onClick:S,children:"Send"})})]})},Te=n(156),Ue=function(e){var t={};return e.firstName?e.firstName.length>15&&(t.firstName="Must be 15 characters or less !"):t.firstName="Required !",e.lastName?e.lastName.length>15&&(t.lastName="Must be 15 characters or less !"):t.lastName="Required !",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address !"):t.email="Required !",e.password||(t.password="Required !"),e.confirmPassword?e.confirmPassword!==e.password&&(t.confirmPassword="Password doesn't match !"):t.confirmPassword="Required !",t},Fe=n(47),Me=n.n(Fe),Re=n(155),Le=function(e){var t=e.input,n=e.placeholder,a=e.label,r=e.type,i=e.style,s=e.meta,c=s.touched,o=s.error,l=s.warning;return Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{children:a}),Object(D.jsxs)("div",{className:i.field_box,children:[Object(D.jsx)("input",Object(u.a)(Object(u.a)({},t),{},{placeholder:n,type:r,className:_()(i.field,o&&c?i.field_error:null)})),Object(D.jsx)("div",{className:i.error,children:c&&(o&&Object(D.jsx)("span",{children:o})||l&&Object(D.jsx)("span",{children:l}))})]})]})},Pe=n.p+"static/media/preloader.c1c01342.svg",He=Object(Te.a)({form:"login",validate:Ue})((function(e){var t=e.handleSubmit,n=e.error,a=e.isFetching;return Object(D.jsxs)("div",{className:Me.a.login_container,children:[Object(D.jsx)("div",{className:Me.a.title,children:"Log In"}),Object(D.jsxs)("form",{onSubmit:t,children:[Object(D.jsx)("div",{children:Object(D.jsx)(Re.a,{name:"email",component:Le,type:"text",placeholder:"Email",style:Me.a})}),Object(D.jsx)("div",{children:Object(D.jsx)(Re.a,{name:"password",component:Le,type:"password",placeholder:"Password",style:Me.a})}),n&&Object(D.jsx)("div",{className:Me.a.submitError,children:n.message}),Object(D.jsxs)("div",{className:Me.a.nav_box,children:[Object(D.jsx)(C.c,{to:"/signup",className:Me.a.link,children:"Sign Up"}),Object(D.jsx)("button",{className:Me.a.button,disabled:a,children:a?Object(D.jsx)("img",{className:Me.a.preloader,src:Pe,alt:Pe}):"Sign In"})]})]})]})})),We=Object(l.b)((function(e){return{isFetching:e.auth.isFetching,isAuth:e.auth.isAuth}}),{newSessions:function(e,t){return function(){var n=Object(W.a)(H.a.mark((function n(a){return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(xe(!0)),n.next=3,G.b.newSession(e,t).then((function(e){if(e.user){var t=e.user.uid;ge(t,a),a(xe(!1))}})).catch((function(e){a(Object(de.a)("login",{_error:e})),a(xe(!1))}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.newSessions,n=e.isFetching;return e.isAuth?Object(D.jsx)(w.a,{to:"/"}):Object(D.jsx)(He,{onSubmit:function(e){t(e.email,e.password)},isFetching:n})})),Ye=n(29),Ge=n.n(Ye),ze=Object(Te.a)({form:"signup",validate:Ue})((function(e){var t=e.handleSubmit,n=e.error,a=e.isFetching;return Object(D.jsxs)("div",{className:Ge.a.sign_up_container,children:[Object(D.jsx)("div",{className:Ge.a.title,children:"Registration"}),Object(D.jsxs)("form",{onSubmit:t,children:[Object(D.jsxs)("div",{className:Ge.a.flex_box,children:[Object(D.jsx)("div",{className:Ge.a.flex_field,children:Object(D.jsx)(Re.a,{name:"firstName",component:Le,type:"text",style:Ge.a,placeholder:"First Name"})}),Object(D.jsx)("div",{className:Ge.a.flex_field,children:Object(D.jsx)(Re.a,{name:"lastName",component:Le,type:"text",style:Ge.a,placeholder:"Last Name"})})]}),Object(D.jsx)("div",{children:Object(D.jsx)(Re.a,{name:"email",component:Le,type:"text",style:Ge.a,placeholder:"Email"})}),Object(D.jsxs)("div",{className:Ge.a.flex_box,children:[Object(D.jsx)("div",{className:Ge.a.flex_field,children:Object(D.jsx)(Re.a,{name:"password",component:Le,type:"password",style:Ge.a,placeholder:"Password"})}),Object(D.jsx)("div",{className:Ge.a.flex_field,children:Object(D.jsx)(Re.a,{name:"confirmPassword",component:Le,type:"password",style:Ge.a,placeholder:"Confirm password"})})]}),n&&Object(D.jsx)("div",{className:Ge.a.submitError,children:n.message}),Object(D.jsxs)("div",{className:Ge.a.nav_box,children:[Object(D.jsx)(C.c,{to:"/login",className:Ge.a.link,children:"Log In"}),Object(D.jsx)("button",{className:Ge.a.button,disabled:a,children:a?Object(D.jsx)("img",{className:Ge.a.preloader,src:Pe,alt:Pe}):"Sign Up"})]})]})]})})),Be=Object(l.b)((function(e){return{isFetching:e.auth.isFetching,isAuth:e.auth.isAuth}}),{signUp:function(e,t,n,a){return function(r){r(xe(!0)),G.b.createAccount(n,a).then((function(a){if(a.user){var i=a.user.uid,s="user";G.b.setUserProfile(i,n,e,t,s).then((function(){r(ve(i,e,t,n,s)),r(xe(!1))}))}})).catch((function(e){r(Object(de.a)("signup",{_error:e})),r(xe(!1))}))}}})((function(e){var t=e.signUp,n=e.isFetching;return e.isAuth?Object(D.jsx)(w.a,{to:"/"}):Object(D.jsx)(ze,{onSubmit:function(e){return t(e.firstName,e.lastName,e.email,e.password)},isFetching:n})})),qe=function(e){var t,n,a=function(e){for(var t=m()().month(e).daysInMonth(),n=[];t;)n.push(m()().month(e).date(t)),t--;return n.reverse()}(e),r=[],i=Object(M.a)(a);try{for(i.s();!(t=i.n()).done;){var s=t.value;r.push({name:s.format("dddd"),number:s.format("D"),current:s.format("MMM Do YY")===m()().format("MMM Do YY"),isHoliday:(n=s.format("dddd"),"Saturday"===n||"Sunday"===n),date:s.format("DD.MM.YYYY")})}}catch(c){i.e(c)}finally{i.f()}return r},Xe=n(48),Ve=n.n(Xe),Ze=function(e,t){return e.notes.filter((function(e){return e.date===t})).length},Qe=Object(l.b)((function(e,t){var n=t.day;return{notes:Ze(e,n.date)}}))((function(e){var t=e.day,n=e.notes;return"plug"===t.name?Object(D.jsx)("div",{className:Ve.a.clearItem}):Object(D.jsx)(C.b,{className:Ve.a.link,to:"notepad/"+t.date,children:Object(D.jsxs)("div",{className:_()([Ve.a.item,t.current?Ve.a.current:""]),children:[Object(D.jsx)("div",{className:_()([Ve.a.nameOfDay,t.isHoliday?Ve.a.isHoliday:""]),children:t.name}),Object(D.jsx)("div",{className:_()([Ve.a.number]),children:t.number}),Object(D.jsxs)("div",{className:_()([Ve.a.note,n>0?Ve.a.green:""]),children:["Notes: ",n]})]})})})),Je=n(51),Ke=n.n(Je),$e=function(e){var t=e.toggleMonth,n=e.month,a=e.structurePage;return Object(D.jsxs)("div",{className:Ke.a.container,children:[Object(D.jsxs)("div",{className:Ke.a.navContainer,children:[Object(D.jsx)("div",{className:Ke.a.arrowLeftBox,onClick:function(){t("decrement")},children:Object(D.jsx)("div",{className:Ke.a.navLeft})}),Object(D.jsx)("div",{className:Ke.a.title,children:m()().month(n).format("MMMM YYYY")}),Object(D.jsx)("div",{className:Ke.a.arrowRightBox,onClick:function(){t("increment")},children:Object(D.jsx)("div",{className:Ke.a.navRight})})]}),Object(D.jsx)("div",{className:Ke.a.items,children:a.map((function(e){return Object(D.jsx)(Qe,{day:e},e.date)}))})]})},et=function(e){var t=Object(a.useState)(m()().month()),n=Object(o.a)(t,2),r=n[0],i=n[1];return Object(D.jsx)($e,{toggleMonth:function(e){"decrement"===e&&i(--r),"increment"===e&&i(++r)},month:r,structurePage:function(){var e=qe(r),t=[],n=0;return["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","null","null","null","null"].map((function(a){a===e[0].name&&(e.map((function(e){return t.push(e)})),n++),n<35&&t.push({date:Math.random()+"",name:"plug",number:"plug",current:!1,isHoliday:!1}),n++})),t}()})},tt=n(71),nt=n.n(tt),at=Object(l.b)(null,{removeSessions:function(){return function(){var e=Object(W.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.b.removeSession().then((function(e){t(ee()),t({type:he})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return Object(D.jsxs)("div",{className:nt.a.container,children:[Object(D.jsx)("div",{className:nt.a.text,children:"Do you really want to leave?"}),Object(D.jsxs)("div",{className:nt.a.buttonGroup,children:[Object(D.jsx)("button",{className:nt.a.button,onClick:function(){return e.setShowConfirmWindow(!1)},children:"No"}),Object(D.jsx)("button",{className:nt.a.button,onClick:function(){e.removeSessions(),e.setShowConfirmWindow(!1)},children:"Yes"})]})]})})),rt=n(119),it=r.a.lazy((function(){return n.e(3).then(n.bind(null,362))})),st=Object(l.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){je.a.auth().onAuthStateChanged((function(t){t?Ce.dispatch(Ne(t.uid)):e(be(!0))}))}}})(Object(w.g)((function(e){Object(a.useEffect)((function(){e.initializeApp()}),[]);var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)(!1),c=Object(o.a)(s,2),u=c[0],l=c[1];return e.initialized?Object(D.jsxs)("div",{className:"app",children:[Object(D.jsxs)("div",{className:u?"blur":"",children:[Object(D.jsx)(F,{setShowSelectedDates:i,showSelectedDates:r,setShowConfirmWindow:l}),Object(D.jsx)("div",{className:_()("dates__popup",r?"dates__popup_active":""),children:Object(D.jsx)(ke,{setShowSelectedDates:i})}),Object(D.jsx)(w.b,{path:"/",exact:!0,render:function(){return Object(D.jsx)(et,{})}}),Object(D.jsx)(w.b,{path:"/notepad",render:function(){return Object(D.jsx)(oe,{date:(t=e.location.pathname,t.split("/")[2].split("-"))});var t}}),Object(D.jsx)(w.b,{path:"/login",render:function(){return Object(D.jsx)(We,{})}}),Object(D.jsx)(w.b,{path:"/signup",render:function(){return Object(D.jsx)(Be,{})}}),Object(D.jsx)(a.Suspense,{fallback:Object(D.jsx)("div",{children:Object(D.jsx)(rt.a,{})}),children:Object(D.jsx)(w.b,{path:"/admin",render:function(){return Object(D.jsx)(it,{})}})})]}),u&&Object(D.jsx)(at,{setShowConfirmWindow:l})]}):Object(D.jsx)(rt.a,{})}))),ct=function(){return Object(D.jsx)(C.a,{basename:"/gp",children:Object(D.jsx)(l.a,{store:Ce,children:Object(D.jsx)(st,{})})})};je.a.initializeApp({apiKey:"AIzaSyBodS8dyFJe8zphDqN-AhzRC5vqqVQPYuc",authDomain:"gp-firebase-1f88e.firebaseapp.com",databaseURL:"https://gp-firebase-1f88e-default-rtdb.firebaseio.com",projectId:"gp-firebase-1f88e",storageBucket:"gp-firebase-1f88e.appspot.com",messagingSenderId:"380953107415",appId:"1:380953107415:web:fb05f1e685cc9c8e148992"}),s.a.render(Object(D.jsx)(ct,{}),document.getElementById("root")),c()},35:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(30),r={createAccount:function(e,t){return a.a.auth().createUserWithEmailAndPassword(e,t)},newSession:function(e,t){return a.a.auth().setPersistence(a.a.auth.Auth.Persistence.LOCAL).then((function(){return a.a.auth().signInWithEmailAndPassword(e,t)}))},removeSession:function(){return a.a.auth().signOut()},setUserProfile:function(e,t,n,r,i){return a.a.database().ref("users/".concat(e)).set({email:t,firstName:n,lastName:r,role:i})},getUserProfile:function(e){return a.a.database().ref("users/".concat(e)).once("value")},editUserProfile:function(e,t,n,r,i){var s={email:t,firstName:n,lastName:r,role:i},c={};return c["users/".concat(e)]=s,a.a.database().ref().update(c)},getUsers:function(){return a.a.database().ref("users").once("value")}},i={getNotes:function(e){return a.a.database().ref("notes/".concat(e)).once("value")},addNote:function(e,t){return a.a.database().ref("notes/".concat(e)).push(t)},editNote:function(e,t,n,r,i){var s={userId:e,id:t,date:n,time:r,value:i},c={};return c["notes/".concat(e,"/").concat(t)]=s,a.a.database().ref().update(c)},removeNote:function(e,t){return a.a.database().ref("notes/".concat(e,"/").concat(t)).remove()}}},42:function(e,t,n){e.exports={container:"Notepad_container__2oDlG",notepad:"Notepad_notepad__3537F",log_out:"Notepad_log_out__1uhnd",notepad_row:"Notepad_notepad_row__32juJ",time:"Notepad_time__3ZMWq",field:"Notepad_field__X4Fjh",title:"Notepad_title__18Rsm",title__notepad_row:"Notepad_title__notepad_row__1b75P",notepad__message:"Notepad_notepad__message__h1R9e"}},46:function(e,t,n){e.exports={dates__wrapper:"SelectDates_dates__wrapper__3uh25",dates__container:"SelectDates_dates__container__2EeTu",dates__title:"SelectDates_dates__title__33fF7",dates__field:"SelectDates_dates__field__ZpAa9",dates__button_box:"SelectDates_dates__button_box__13Tvn",dates__button:"SelectDates_dates__button__IEv4n",dates__error:"SelectDates_dates__error__1ltU-"}},47:function(e,t,n){e.exports={login_container:"LogIn_login_container__3kZxd",title:"LogIn_title__oyAkQ",field:"LogIn_field__mjRt3",error:"LogIn_error__2OEuD",submitError:"LogIn_submitError__37j4m",field_error:"LogIn_field_error__lS6Xb",button:"LogIn_button__c7XmE",link:"LogIn_link__2zwgE",nav_box:"LogIn_nav_box__3L36m",preloader:"LogIn_preloader__2I1bF"}},48:function(e,t,n){e.exports={link:"Day_link__16kIk",green:"Day_green__DjoyD",item:"Day_item__2BBs3",clearItem:"Day_clearItem__3XZPJ",current:"Day_current__1YfVN",nameOfDay:"Day_nameOfDay__WM19d",number:"Day_number__1KMy7",note:"Day_note__3LT4l",isHoliday:"Day_isHoliday__3g7bo"}},51:function(e,t,n){e.exports={container:"Calendar_container__ribqp",navContainer:"Calendar_navContainer__16X7I",arrowLeftBox:"Calendar_arrowLeftBox__q1-gc",arrowRightBox:"Calendar_arrowRightBox__uf1cN",navLeft:"Calendar_navLeft__2zhdM",navRight:"Calendar_navRight__3l8pX",title:"Calendar_title__GMzj_",items:"Calendar_items__fIgO0"}},71:function(e,t,n){e.exports={container:"ConfirmWindow_container__2gEaT",text:"ConfirmWindow_text__295XW",buttonGroup:"ConfirmWindow_buttonGroup__pHXVG",button:"ConfirmWindow_button__2aQG6"}}},[[332,1,2]]]);
//# sourceMappingURL=main.3876ede3.chunk.js.map