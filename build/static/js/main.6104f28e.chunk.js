(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(43)},33:function(e,t,a){},38:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(24),l=a.n(r),c=(a(33),a(18)),i=a(5),s=a(6),d=a(8),u=a(7),m=a(9),p=a(10),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).getStyle=function(){var e=a.props.todo.completed;return{textDecoration:e?"line-through":"none",backgroundColor:e?"grey":"#f9f9f9",color:e?"white":"black",margin:"1em"}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todo,a=e.toggleComplete,n=e.delTodo;return o.a.createElement("div",{className:"card",style:this.getStyle()},o.a.createElement("div",{className:"card-body"},o.a.createElement("input",{type:"checkbox",onChange:a.bind(this,t.id)}),t.title,o.a.createElement("button",{className:"btn btn-danger",onClick:n.bind(this,t.id),style:b},"X")))}}]),t}(n.Component),b={padding:"5px 10px",float:"right"},f=h,g=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return o.a.createElement(f,{key:t.id,todo:t,toggleComplete:e.props.toggleComplete,delTodo:e.props.delTodo})})}}]),t}(n.Component),v=a(11);var E=function(){return o.a.createElement("header",null,o.a.createElement("h1",null,"TodoList"),o.a.createElement("div",{className:"head-text"},o.a.createElement(v.b,{className:"head-link",to:"/"},"Home"),o.a.createElement("span",null,"|"),o.a.createElement(v.b,{className:"head-link",to:"/about"},"About")),o.a.createElement("br",null)," ")},y=a(27),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},a.onSubmit=function(e){e.preventDefault();var t=a.state.title;t.length>0&&(a.props.addTodo(t),a.setState({title:""}))},a.onChange=function(e){return a.setState(Object(y.a)({},e.target.name,e.target.value))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,className:"m-3",style:{display:"flex"}},o.a.createElement("input",{type:"text",placeholder:"Add Todo Item",name:"title",style:{flex:"8",padding:"5px"},value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-success ml-3",style:{flex:"1"}}))}}]),t}(n.Component);var O=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the TodoList app version 1.0.0. It is part of a React Crash Course."))},k=(a(38),a(14)),C=a.n(k),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[{id:C.a.v4(),title:"Take out the trash",completed:!1},{id:C.a.v4(),title:"Make dinner",completed:!1},{id:C.a.v4(),title:"Work on website",completed:!1}]},a.toggleComplete=function(e){a.setState({todos:a.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},a.delTodo=function(e){a.setState({todos:Object(c.a)(a.state.todos.filter(function(t){return t.id!==e}))})},a.addTodo=function(e){var t={id:C.a.v4(),title:e,completed:!1};a.setState({todos:[].concat(Object(c.a)(a.state.todos),[t])})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,null),o.a.createElement("div",{className:"container"},o.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,{addTodo:e.addTodo}),o.a.createElement(g,{todos:e.state.todos,toggleComplete:e.toggleComplete,delTodo:e.delTodo}))}}),o.a.createElement(p.a,{path:"/about",component:O})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41),a(42);l.a.render(o.a.createElement(v.a,{basename:"/todos"},o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.6104f28e.chunk.js.map