(this.webpackJsonpdorsavi=this.webpackJsonpdorsavi||[]).push([[0],{43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(16),l=a.n(c),s=(a(23),a(0));function i(e){var t=e.label,a=e.placeholder,n=e.fieldRef;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("label",{className:"h6",children:t}),Object(s.jsx)("input",{type:"text",className:"form-control",ref:n,placeholder:a})]})}function u(e){var t=e.fieldRef,a=e.label,n=e.data;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("label",{className:"h6",htmlFor:"search-field",children:a}),Object(s.jsx)("select",{ref:t,className:"custom-select",children:n&&n.length?n.map((function(e,t){return Object(s.jsx)("option",{value:e.value,children:e.label},t)})):Object(s.jsx)(s.Fragment,{})})]})}function o(){return Object(s.jsx)("button",{type:"submit",className:"btn btn-primary w-100",children:"Go!"})}var d=[{label:"All",value:""},{label:"Melbourne",value:"Melbourne"},{label:"Sydney",value:"Sydney"}],j=[{label:"All",value:""},{label:"Male",value:"Male"},{label:"Female",value:"Female"}],m=[{label:"All",value:""},{label:"Cat",value:"Cat"},{label:"Bird",value:"Bird"},{label:"Fish",value:"Fish"},{label:"Dog",value:"Dog"}],b=a(17),p=a(7),h="app/SEARCH_QUERY_SUCCESS",f="app/SEARCH_QUERY_FAIL",O="app/SEARCH_QUERY_LOADING";function v(e,t){switch(t.type){case h:return{status:"success",data:t.data,error:void 0};case f:return{status:"error",error:t.error,data:void 0};case O:return Object(p.a)(Object(p.a)({},e),{},{status:"loading"});default:return e}}var g=a(6),x=a.n(g),y={data:[{name:"Bob",gender:"Male",age:23,pets:[{name:"Garfield",type:"Cat"}]},{name:"Jennifer",gender:"Female",age:18,pets:[{name:"Tom",type:"Cat"}]},{name:"Steve",gender:"Male",age:45,pets:null},{name:"Fred",gender:"Male",age:40,pets:[{name:"Meong",type:"Cat"},{name:"Jim",type:"Cat"},{name:"Hulk",type:"Dog"}]},{name:"Samantha",gender:"Female",age:30,pets:[{name:"Tabby",type:"Cat"}]},{name:"Alice",gender:"Female",age:64,pets:[{name:"Simba",type:"Cat"},{name:"Nemo",type:"Fish"}]}]},N={data:[{name:"Thomas",gender:"Male",age:55,pets:[{name:"Loki",type:"Fish"}]},{name:"Bond",gender:"Male",age:28,pets:[{name:"Jerry",type:"Bird"},{name:"Tom",type:"Cat"}]},{name:"Lara",gender:"Female",age:35,pets:null},{name:"Bruce",gender:"Male",age:25,pets:[{name:"Peter",type:"Cat"},{name:"Clark",type:"Dog"},{name:"Tony",type:"Cat"}]},{name:"Steve",gender:"Male",age:72,pets:[{name:"Scar",type:"Cat"}]},{name:"Jame",gender:"Female",age:29,pets:[{name:"Ani",type:"Cat"},{name:"Barkshire",type:"Dog"}]}]},C=Object({NODE_ENV:"production",PUBLIC_URL:"/dorsavi-test-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_END_POINT_MELBOURNE:"https://happybuba.com.au/api/Melbourne.php",REACT_APP_END_POINT_SYDNEY:"https://happybuba.com.au/api/Sydney.php",REACT_APP_MOCKED_DATA:"FALSE"}),E=C.REACT_APP_END_POINT_SYDNEY,_=C.REACT_APP_END_POINT_MELBOURNE,T=C.REACT_APP_MOCKED_DATA,A=function(){return"TRUE"===T?new Promise((function(e){setTimeout((function(){e(y)}),500)})):x.a.get(E)},R=function(){return"TRUE"===T?new Promise((function(e){setTimeout((function(){e(N)}),500)})):x.a.get(_)},S=a(18),P=function(e,t){if(e&&e.length&&t){var a=t.toLowerCase();return e.filter((function(e){var t=e.name,n=e.pets;return function(e){return-1!==e.toLowerCase().indexOf(a)}(t)||function(e){e&&e.some((function(e){return-1!==e.name.toLowerCase().indexOf(a)}))}(n)}))}return e},F=function(e,t){return t&&e&&e.length?e.filter((function(e){return function(e){return e.pets&&e.pets.length}(e)&&function(e){return e.pets.some((function(e){return e.type===t}))}(e)})):e},D=Object(n.createContext)(),w={requestData:void 0},M=function(e){var t=e.children,a=Object(n.useReducer)(v,w),r=Object(b.a)(a,2),c=r[0],l=r[1],i={searchQuery:function(e){l({type:O,payload:e});var t=e.city,a=e.query,n=e.gender,r=e.petType;Promise.all(function(e){switch(e){case"Melbourne":return[R()];case"Sydney":return[A()];default:return[R(),A()]}}(t)).then((function(e){var t=[];t=function(e){var t=[];return e&&e.length&&e.forEach((function(e){t.push.apply(t,Object(S.a)(e.data))})),t}(e),t=function(e,t){return t&&e&&e.length?e.filter((function(e){return e.gender===t})):e}(t=P(t,a),n),t=F(t,r),l({type:h,data:t})}),(function(e){l({type:f,error:e})}))}};return Object(s.jsx)(D.Provider,{value:{state:c,actions:i},children:t})};function L(){var e=Object(n.useContext)(D).actions,t=Object(n.useRef)(null),a=Object(n.useRef)(null),r=Object(n.useRef)(null),c=Object(n.useRef)(null);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Dorsavi Test - Edmond Halley"}),Object(s.jsxs)("form",{onSubmit:function(n){n.preventDefault();var l=a.current.value,s=t.current.value,i=r.current.value,u=c.current.value;e.searchQuery({city:l,gender:i,petType:u,query:s})},children:[Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)(i,{fieldRef:t,placeholder:"Type name of pets or the owner",label:"Search"})}),Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("div",{className:"col-12",children:Object(s.jsx)("h6",{children:"Filter By:"})}),Object(s.jsx)("div",{className:"col-4",children:Object(s.jsx)(u,{label:"City",fieldRef:a,data:d})}),Object(s.jsx)("div",{className:"col-4",children:Object(s.jsx)(u,{label:"Gender",fieldRef:r,data:j})}),Object(s.jsx)("div",{className:"col-4",children:Object(s.jsx)(u,{label:"Pet Type",fieldRef:c,data:m})})]}),Object(s.jsx)(o,{children:"Go!"})]})]})}function B(){var e=Object(n.useContext)(D).state,t=function(e){return Object(s.jsx)("ul",{children:function(){if(e&&e.length)return e.sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e,t){var a=e.name,n=e.type;return Object(s.jsxs)("li",{children:[a," - ",n]},t)}))}()})};return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-12",children:function(){switch(e.status){case"loading":return Object(s.jsx)("div",{className:"d-flex justify-content-center my-5",children:Object(s.jsx)("div",{className:"spinner-border",role:"status",children:Object(s.jsx)("span",{className:"sr-only",children:"Loading..."})})});case"success":return Object(s.jsxs)("table",{className:"table mt-5",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{className:"result-item",children:[Object(s.jsx)("th",{className:"w-25",children:"Owner Name"}),Object(s.jsx)("th",{className:"w-25",children:"Gender"}),Object(s.jsx)("th",{className:"w-25",children:"Age"}),Object(s.jsx)("th",{className:"w-25",children:"Pets"})]})}),Object(s.jsx)("tbody",{children:function(){if(e.data&&e.data.length)return e.data.map((function(e,a){var n=e.name,r=e.gender,c=e.age,l=e.pets;return Object(s.jsxs)("tr",{className:"result-item",children:[Object(s.jsx)("td",{className:"w-25",children:n}),Object(s.jsx)("td",{className:"w-25",children:r}),Object(s.jsx)("td",{className:"w-25",children:c}),Object(s.jsx)("td",{className:"w-25",children:t(l)})]},a)}))}()})]});default:return Object(s.jsx)(s.Fragment,{})}}()})})})}var U=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(M,{children:[Object(s.jsx)(L,{}),Object(s.jsx)(B,{})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)}))};l.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(U,{})}),document.getElementById("root")),I()}},[[43,1,2]]]);
//# sourceMappingURL=main.441351ae.chunk.js.map