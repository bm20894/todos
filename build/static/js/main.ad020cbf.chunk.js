(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/spinner.5e02af51.gif"},25:function(e,t,a){e.exports=a(51)},30:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),o=a.n(r),c=(a(30),a(7)),i=a(13),s=Object(n.createContext)(null),u=function(e){var t=e.todo,a=Object(n.useContext)(s),r=t.title,o=t.completed,c=t.id;return l.a.createElement("div",{className:"card",style:function(){var e=t.completed;return{textDecoration:e?"line-through":"none",backgroundColor:e?"grey":"#f9f9f9",color:e?"white":"black",margin:"1em"}}()},l.a.createElement("div",{className:"card-body"},l.a.createElement("input",{type:"checkbox",checked:o,onChange:function(e){return a({type:"toggle-complete",id:c,checked:e.target.checked})}}),r,l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return a({type:"delete",id:c})},style:{padding:"5px 10px",float:"right"}},"X")))},d=a(21),m=a.n(d),h=a(15),p=a.n(h);p.a.initializeApp({apiKey:"AIzaSyAsoXrvDr5NadexSKY3D6ROy8NZT7qYLz4",authDomain:"react-todolist-ef4a3.firebaseapp.com",databaseURL:"https://react-todolist-ef4a3.firebaseio.com",projectId:"react-todolist-ef4a3",storageBucket:"",messagingSenderId:"210814641030",appId:"1:210814641030:web:2e4ae8d6b0d42f9c"});var f=p.a,E=function(){return l.a.createElement("div",{style:{margin:"auto",align:"center"}},l.a.createElement("img",{src:m.a,alt:"",width:"200px"}))},b=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){f.database().ref("todos").on("value",function(e){var t=e.val(),a=[];for(var n in t){var l=t[n],o=l.title,c=l.completed;a.push({id:n,title:o,completed:c})}r(a)})},[]),l.a.createElement(l.a.Fragment,null,a.length?a.map(function(e){return l.a.createElement(u,{key:e.id,todo:e})}):l.a.createElement(E,null))},g=a(8),y=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"TodoList"),l.a.createElement("div",{className:"head-text"},l.a.createElement(g.b,{className:"head-link",to:"/"},"Home"),l.a.createElement("span",null,"|"),l.a.createElement(g.b,{className:"head-link",to:"/about"},"About"),l.a.createElement("span",null,"|"),l.a.createElement(g.b,{className:"head-link",to:"/markdown"},"Markdown")),l.a.createElement("br",null)," ")},v=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useContext)(s);return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.length>0&&(o({type:"add",title:a}),r(""))},className:"m-3",style:{display:"flex"}},l.a.createElement("input",{type:"text",placeholder:"Add Todo Item",name:"title",style:{flex:"8",padding:"5px"},value:a,onChange:function(e){return r(e.target.value)}}),l.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-success ml-3",style:{flex:"1"}}))},k=function(e){switch(e.type){case"toggle-complete":var t=f.database().ref("todos/".concat(e.id));t.once("value",function(a){var n=a.val();n.completed=e.checked,t.set(n)});break;case"delete":f.database().ref("todos/".concat(e.id)).remove();break;case"add":var a=f.database().ref("todos"),n={title:e.title,completed:!1};a.push(n);break;default:return null}},w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"About"),l.a.createElement("p",null,"This is the TodoList app version 1.0.0. It is part of a React Crash Course."))},j=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"This project was bootstrapped with ",l.a.createElement("a",{href:"https://github.com/facebook/create-react-app"},"Create React App"),"."),l.a.createElement("h2",null,l.a.createElement("a",{id:"user-content-available-scripts",class:"anchor",href:"#available-scripts","aria-hidden":"true"},l.a.createElement("span",{"aria-hidden":"true",class:"octicon octicon-link"})),"Available Scripts"),l.a.createElement("p",null,"In the project directory, you can run:"),l.a.createElement("h3",null,l.a.createElement("a",{id:"user-content-npm-start",class:"anchor",href:"#npm-start","aria-hidden":"true"},l.a.createElement("span",{"aria-hidden":"true",class:"octicon octicon-link"})),l.a.createElement("code",null,"npm start")),l.a.createElement("p",null,"Runs the app in the development mode.",l.a.createElement("br",null),"Open ",l.a.createElement("a",{href:"http://localhost:3000",rel:"nofollow"},"http://localhost:3000")," to view it in the browser."),l.a.createElement("p",null,"The page will reload if you make edits.",l.a.createElement("br",null),"You will also see any lint errors in the console."),l.a.createElement("h3",null,l.a.createElement("a",{id:"user-content-npm-test",class:"anchor",href:"#npm-test","aria-hidden":"true"},l.a.createElement("span",{"aria-hidden":"true",class:"octicon octicon-link"})),l.a.createElement("code",null,"npm test")),l.a.createElement("p",null,"Launches the test runner in the interactive watch mode.",l.a.createElement("br",null),"See the section about ",l.a.createElement("a",{href:"https://facebook.github.io/create-react-app/docs/running-tests",rel:"nofollow"},"running tests")," for more information."),l.a.createElement("h3",null,l.a.createElement("a",{id:"user-content-npm-run-build",class:"anchor",href:"#npm-run-build","aria-hidden":"true"},l.a.createElement("span",{"aria-hidden":"true",class:"octicon octicon-link"})),l.a.createElement("code",null,"npm run build")),l.a.createElement("p",null,"Builds the app for production to the ",l.a.createElement("code",null,"build")," folder.",l.a.createElement("br",null),"It correctly bundles React in production mode and optimizes the build for the best performance."),l.a.createElement("p",null,"The build is minified and the filenames include the hashes.",l.a.createElement("br",null),"Your app is ready to be deployed!"),l.a.createElement("p",null,"See the section about ",l.a.createElement("a",{href:"https://facebook.github.io/create-react-app/docs/deployment",rel:"nofollow"},"deployment")," for more information."),l.a.createElement("h3",null,l.a.createElement("a",{id:"user-content-npm-run-eject",class:"anchor",href:"#npm-run-eject","aria-hidden":"true"},l.a.createElement("span",{"aria-hidden":"true",class:"octicon octicon-link"})),l.a.createElement("code",null,"npm run eject")),l.a.createElement("p",null,l.a.createElement("strong",null,"Note: this is a one-way operation. Once you ",l.a.createElement("code",null,"eject"),", you can\u2019t go back!")),l.a.createElement("p",null,"If you aren\u2019t satisfied with the build tool and configuration choices, you can ",l.a.createElement("code",null,"eject")," at any time. This command will remove the single build dependency from your project."),l.a.createElement("p",null,"Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except ",l.a.createElement("code",null,"eject")," will still work, but they will point to the copied scripts so you can tweak them. At this point you\u2019re on your own."),l.a.createElement("p",null,"You don\u2019t have to ever use ",l.a.createElement("code",null,"eject"),". The curated feature set is suitable for small and middle deployments, and you shouldn\u2019t feel obligated to use this feature. However we understand that this tool wouldn\u2019t be useful if you couldn\u2019t customize it when you are ready for it."),l.a.createElement("h2",null,l.a.createElement("a",{id:"user-content-learn-more",class:"anchor",href:"#learn-more","aria-hidden":"true"},l.a.createElement("span",{"aria-hidden":"true",class:"octicon octicon-link"})),"Learn More"),l.a.createElement("p",null,"You can learn more in the ",l.a.createElement("a",{href:"https://facebook.github.io/create-react-app/docs/getting-started",rel:"nofollow"},"Create React App documentation"),"."),l.a.createElement("p",null,"To learn React, check out the ",l.a.createElement("a",{href:"https://reactjs.org/",rel:"nofollow"},"React documentation"),"."),l.a.createElement("h3",null,l.a.createElement("a",{id:"user-content-code-splitting",class:"anchor",href:"#code-splitting","aria-hidden":"true"},l.a.createElement("span",{"aria-hidden":"true",class:"octicon octicon-link"})),"Code Splitting"),l.a.createElement("p",null,"This section has moved here: ",l.a.createElement("a",{href:"https://facebook.github.io/create-react-app/docs/code-splitting",rel:"nofollow"},"https://facebook.github.io/create-react-app/docs/code-splitting")),l.a.createElement("h3",null,l.a.createElement("a",{id:"user-content-analyzing-the-bundle-size",class:"anchor",href:"#analyzing-the-bundle-size","aria-hidden":"true"},l.a.createElement("span",{"aria-hidden":"true",class:"octicon octicon-link"})),"Analyzing the Bundle Size"),l.a.createElement("p",null,"This section has moved here: ",l.a.createElement("a",{href:"https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size",rel:"nofollow"},"https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size")),l.a.createElement("h3",null,l.a.createElement("a",{id:"user-content-making-a-progressive-web-app",class:"anchor",href:"#making-a-progressive-web-app","aria-hidden":"true"},l.a.createElement("span",{"aria-hidden":"true",class:"octicon octicon-link"})),"Making a Progressive Web App"),l.a.createElement("p",null,"This section has moved here: ",l.a.createElement("a",{href:"https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app",rel:"nofollow"},"https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app")),l.a.createElement("h3",null,l.a.createElement("a",{id:"user-content-advanced-configuration",class:"anchor",href:"#advanced-configuration","aria-hidden":"true"},l.a.createElement("span",{"aria-hidden":"true",class:"octicon octicon-link"})),"Advanced Configuration"),l.a.createElement("p",null,"This section has moved here: ",l.a.createElement("a",{href:"https://facebook.github.io/create-react-app/docs/advanced-configuration",rel:"nofollow"},"https://facebook.github.io/create-react-app/docs/advanced-configuration")),l.a.createElement("h3",null,l.a.createElement("a",{id:"user-content-deployment",class:"anchor",href:"#deployment","aria-hidden":"true"},l.a.createElement("span",{"aria-hidden":"true",class:"octicon octicon-link"})),"Deployment"),l.a.createElement("p",null,"This section has moved here: ",l.a.createElement("a",{href:"https://facebook.github.io/create-react-app/docs/deployment",rel:"nofollow"},"https://facebook.github.io/create-react-app/docs/deployment")),l.a.createElement("h3",null,l.a.createElement("a",{id:"user-content-npm-run-build-fails-to-minify",class:"anchor",href:"#npm-run-build-fails-to-minify","aria-hidden":"true"},l.a.createElement("span",{"aria-hidden":"true",class:"octicon octicon-link"})),l.a.createElement("code",null,"npm run build")," fails to minify"),l.a.createElement("p",null,"This section has moved here: ",l.a.createElement("a",{href:"https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify",rel:"nofollow"},"https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify")))};a(48),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(49),a(50);o.a.render(l.a.createElement(g.a,{basename:"/todos"},l.a.createElement(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement("div",{className:"container"},l.a.createElement(s.Provider,{value:k},l.a.createElement(c.a,{exact:!0,path:"/",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement(b,null))}})),l.a.createElement(c.a,{path:"/about",component:w}),l.a.createElement(c.a,{path:"/markdown",component:j})))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.ad020cbf.chunk.js.map