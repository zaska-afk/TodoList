(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"id":1,"title":"Grocery Shopping","completed":false},{"id":2,"title":"Exercise","completed":false},{"id":3,"title":"Clean the house.","completed":false},{"id":4,"title":"Email my boss.","completed":true},{"id":5,"title":"Walk the dog.","completed":false}]')},27:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var o=c(0),n=c.n(o),i=c(18),d=c.n(i),s=(c(27),c(21)),r=c(22),l=c(7),a=(c(28),c(2)),u=c(19),j=c(1);var O=function(e){var t=Object(o.useContext)(h);return Object(j.jsx)("li",{className:e.completed?"completed":"",children:Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)("input",{className:"toggle",type:"checkbox",onClick:function(){return t({type:m.TOGGLECOMPLETE,payload:{id:e.id}})},checked:e.completed}),Object(j.jsx)("label",{children:e.title}),Object(j.jsx)("button",{className:"destroy",onClick:function(){return t({type:m.DELETETODO,payload:{id:e.id}})}})]})})};var p=function(e){var t=Object(o.useContext)(h);return Object(j.jsx)("section",{className:"main",children:Object(j.jsx)("ul",{className:"todo-list",children:e.todos.map((function(c){return Object(j.jsx)(O,{title:c.title,completed:c.completed,id:c.id,toggleComplete:function(){return t({type:m.TOGGLECOMPLETE,payload:{id:e.id}})},deleteTodo:function(){return t({type:m.DELETETODO,payload:{id:e.id}})}},c.id)}))})})},b=c(8);var E=function(e){var t=e.todo.filter((function(e){return!e.completed})),c=Object(o.useContext)(h);return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsxs)("span",{className:"todo-count",children:[Object(j.jsx)("strong",{children:t.length})," item(s) left"]}),Object(j.jsxs)("ul",{className:"filters",children:[Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"/",children:"All"})}),Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"/active",children:"Active"})}),Object(j.jsx)("li",{children:Object(j.jsx)(b.b,{to:"/completed",children:"Completed"})})]}),Object(j.jsx)("button",{className:"clear-completed",onClick:function(){return c({type:m.CLEARCOMPLETE})},children:"Clear completed"})]})},m={TOGGLECOMPLETE:"TOGGLECOMPLETE",ADDTODO:"ADDTODO",DELETETODO:"DELETETODO",CLEARCOMPLETE:"CLEARCOMPLETE",INPUTTEXT:"INPUTTEXT"};function f(e,t){switch(t.type){case m.ADDTODO:return Object(l.a)(Object(l.a)({},e),{},{todoList:[].concat(Object(r.a)(e.todoList),[(c=t.payload.name,{id:Date.now(),title:c,completed:!1})])});case m.DELETETODO:return Object(l.a)(Object(l.a)({},e),{},{todoList:e.todoList.filter((function(e){return e.id!==t.payload.id}))});case m.CLEARCOMPLETE:return Object(l.a)(Object(l.a)({},e),{},{todoList:e.todoList.filter((function(e){return!e.completed}))});case m.INPUTTEXT:return Object(l.a)(Object(l.a)({},e),{},{userInput:t.payload.text});case m.TOGGLECOMPLETE:return Object(l.a)(Object(l.a)({},e),{},{todoList:e.todoList.map((function(e){if(e.id===t.payload.id){var c=Object(l.a)({},e);return c.completed=!c.completed,c}return e}))});default:return e}var c}var h=n.a.createContext(null),T=function(){var e={todoList:u,userInput:""},t=Object(o.useReducer)(f,e),c=Object(s.a)(t,2),n=c[0],i=c[1],d=function(e){"Enter"===e.key&&i({type:m.ADDTODO,payload:{name:n.userInput}})};return Object(o.useEffect)((function(){return window.addEventListener("keydown",d),function(){window.removeEventListener("keydown",d)}})),Object(j.jsx)(h.Provider,{value:i,children:Object(j.jsxs)("section",{className:"todoapp",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h1",{children:"Todo List"}),Object(j.jsx)("input",{onChange:function(e){i({type:m.INPUTTEXT,payload:{text:e.target.value}})},value:n.userInput,className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0})]}),Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{path:"/active",children:Object(j.jsx)(p,{todos:n.todoList.filter((function(e){return!1===e.completed}))})}),Object(j.jsx)(a.a,{path:"/completed",children:Object(j.jsx)(p,{todos:n.todoList.filter((function(e){return!0===e.completed}))})}),Object(j.jsx)(p,{todos:n.todoList})]}),Object(j.jsx)(E,{todo:n.todoList.filter((function(e){return!1===e.completed}))})]})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,o=t.getFID,n=t.getFCP,i=t.getLCP,d=t.getTTFB;c(e),o(e),n(e),i(e),d(e)}))};d.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(b.a,{children:Object(j.jsx)(T,{})})}),document.getElementById("root")),x()}},[[35,1,2]]]);
//# sourceMappingURL=main.d1b5d42d.chunk.js.map