(this.webpackJsonpgp=this.webpackJsonpgp||[]).push([[0],{11:function(e,t,a){e.exports={container:"Notepad_container__2alWt",notepad:"Notepad_notepad__1s2EH",log_out:"Notepad_log_out__3T4Sv",notepad_row:"Notepad_notepad_row__1e4V8",time:"Notepad_time__2QE_r",field:"Notepad_field__v9Em8",title:"Notepad_title__2DOvQ"}},12:function(e,t,a){e.exports={container:"Navbar_container__1p4_s",items:"Navbar_items__3anno",item:"Navbar_item__1BuS9",item_current:"Navbar_item_current__3Kr3T"}},14:function(e,t,a){e.exports={item:"Day_item__2XdWD",current:"Day_current__2TUfN",nameOfDay:"Day_nameOfDay__2ePN4",number:"Day_number__1tDie",note:"Day_note__CcFol",isHoliday:"Day_isHoliday__3OS25"}},24:function(e,t,a){e.exports={container:"Month_container__3Z0PJ"}},25:function(e,t,a){e.exports={container:"Week_container__rmQVe"}},37:function(e,t,a){},38:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),i=a(17),o=a.n(i),d=(a(37),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))}),s=a(31),u=(a(38),a(12)),j=a.n(u),l=a(10),m=a.n(l),_=a(9),O=function(e){var t=e.currentPeriod,a=e.toggleCurrentPeriod;return Object(n.jsx)("nav",{className:j.a.container,children:Object(n.jsxs)("ul",{className:j.a.items,children:[Object(n.jsx)(_.b,{to:"/",children:Object(n.jsx)("li",{className:m()([j.a.item,"week"===t?j.a.item_current:""]),onClick:function(){return a("week")},children:"7 days"})}),Object(n.jsx)(_.b,{to:"/",children:Object(n.jsx)("li",{className:m()([j.a.item,"month"===t?j.a.item_current:""]),onClick:function(){return a("month")},children:"28 days"})}),Object(n.jsx)(_.b,{to:"/",children:Object(n.jsx)("li",{className:m()([j.a.item,"year"===t?j.a.item_current:""]),onClick:function(){return a("year")},children:"a year"})})]})})},b=a(24),f=a.n(b),x=a(14),h=a.n(x),y=function(e){var t=e.day;e.key;return Object(n.jsx)(_.b,{to:"/notepad/"+t.date,children:Object(n.jsxs)("div",{className:m()([h.a.item,t.current?h.a.current:""]),children:[Object(n.jsx)("div",{className:m()([h.a.nameOfDay,t.isHoliday?h.a.isHoliday:""]),children:t.name}),Object(n.jsx)("div",{className:m()([h.a.number]),children:t.number}),Object(n.jsxs)("div",{className:m()([h.a.note]),children:["Note: ",t.note]})]})})},p=a(4),N=a.n(p),v=function(){for(var e,t=[],a=N()().dayOfYear();a<N()().dayOfYear()+28;a++)t.push({name:N()().dayOfYear(a).format("dddd"),number:N()().dayOfYear(a).format("D"),note:0,current:N()().dayOfYear()===a,isHoliday:(e=N()().dayOfYear(a).format("dddd"),"Saturday"===e||"Sunday"===e),date:N()().dayOfYear(a).format("DD.MM.YY")});return t},D=function(){return Object(n.jsx)("div",{className:f.a.container,children:v().map((function(e){return Object(n.jsx)(y,{day:e},e.date)}))})},Y=a(25),g=a.n(Y),k=function(){for(var e,t=[],a=N()().dayOfYear();a<N()().dayOfYear()+7;a++)t.push({name:N()().dayOfYear(a).format("dddd"),number:N()().dayOfYear(a).format("D"),note:0,current:N()().dayOfYear()===a,isHoliday:(e=N()().dayOfYear(a).format("dddd"),"Saturday"===e||"Sunday"===e),date:N()().dayOfYear(a).format("DD.MM.YYYY")});return t},w=function(){return Object(n.jsx)("div",{className:g.a.container,children:k().map((function(e){return Object(n.jsx)(y,{day:e},e.date)}))})},S=function(){return Object(n.jsx)("div",{children:"Year"})},C=a(11),P=a.n(C),H=a(26),M=a.n(H),E=function(e){var t=e.hour;return Object(n.jsxs)("div",{className:P.a.notepad_row,children:[Object(n.jsxs)("span",{className:P.a.time,children:[t,".00"]}),Object(n.jsx)(M.a,{className:P.a.field})]})},F=function(e){var t=e.date;return Object(n.jsx)("div",{className:P.a.container,children:Object(n.jsxs)("div",{className:P.a.notepad,children:[Object(n.jsx)(_.b,{to:"/",className:P.a.log_out}),Object(n.jsx)("div",{className:P.a.title,children:t}),["00","01","02","03","04","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"].map((function(e){return Object(n.jsx)(E,{hour:e})}))]})})},T=a(3),B=a(30),J=a(15),Q="ADD_NODE",W={notes:[{data:"15.01.20",time:"00.00",note:""}]},I=a(29),L=Object(J.c)({notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:default:return e}}}),V=Object(J.d)(L,Object(J.a)(I.a)),A=Object(T.e)((function(e){var t=Object(r.useState)("week"),a=Object(s.a)(t,2),c=a[0],i=a[1];return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(O,{currentPeriod:c,toggleCurrentPeriod:function(e){i(e)}}),Object(n.jsx)(T.a,{path:"/",exact:!0,render:function(){return"week"===c?Object(n.jsx)(w,{}):"month"===c?Object(n.jsx)(D,{}):Object(n.jsx)(S,{})}}),Object(n.jsx)(T.a,{path:"/notepad",render:function(){return Object(n.jsx)(F,{date:(t=e.location.pathname,t.split("/")[2])});var t}})]})})),K=function(){return Object(n.jsx)(_.a,{basename:"/gp",children:Object(n.jsx)(B.a,{store:V,children:Object(n.jsx)(A,{})})})};o.a.render(Object(n.jsxs)(c.a.StrictMode,{children:[Object(n.jsx)(K,{}),","]}),document.getElementById("root")),d()}},[[53,1,2]]]);
//# sourceMappingURL=main.f22830f1.chunk.js.map