(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],[,,,,,function(e,t,n){e.exports={header:"header_header__16fGl",button:"header_button__3EYHo",startFinish:"header_startFinish__1xrhN",triangleWrapper:"header_triangleWrapper__X11te",triangle:"header_triangle__q_44v",triangleButton:"header_triangleButton__27PwV"}},function(e,t,n){e.exports={options:"options_options__1p9M2",label:"options_label__2_Fyj",select:"options_select__2lHFD",option:"options_option__2jmWP"}},function(e,t,n){e.exports={results:"results_results__1g5GR",active:"results_active__2P_qz",table:"results_table__2yg4S",tableTh:"results_tableTh__1RguN",tableTr:"results_tableTr__3-ojH",heading:"results_heading__2xJkZ"}},function(e,t,n){e.exports={Winner:"winner_Winner__3pJ0r",heading:"winner_heading__1ufod",winner:"winner_winner__1ZYIX",label:"winner_label__3Nyd-",inputWrapper:"winner_inputWrapper__Q6WtU",input:"winner_input__3jViK",button:"winner_button__3yynH"}},,function(e,t,n){e.exports={cellClose:"oneCell_cellClose__m61gg",cellOpen:"oneCell_cellOpen__KyVHc",cellOpenText:"oneCell_cellOpenText__2ZdKl",image:"oneCell_image__35Ksa",flag:"oneCell_flag__3MvgE"}},,,function(e,t,n){e.exports={gameOver:"gameOver_gameOver__1XsNv",gameOverText:"gameOver_gameOverText__2vaA9",gameOverGG:"gameOver_gameOverGG__2hiM8",gg:"gameOver_gg__3-fLQ"}},function(e,t,n){e.exports={triangleWrapper:"restart_triangleWrapper__VdthC",triangle:"restart_triangle__1KZLn",button:"restart_button__3bZr1"}},,function(e,t,n){e.exports={timerWrapper:"timer_timerWrapper__1Mm3O",timer:"timer_timer__D3LhH"}},,,,function(e,t,n){e.exports={minesweeper:"minesweeper_minesweeper__33qms"}},,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),i=n(4),l=n.n(i),s=(n(18),n(9)),o=n(3),u=n(2),d=n(36),b=n(17),m=n(10),j=n.n(m),h=n.p+"static/media/bomb.296a9e3a.png",f=function(e){var t=e.oneCell,n=e.handleOpen,r=e.hadleRightClick,c=e.gridSize,i=e.isGridDisabled,l=t.isOpen,s=t.haveFlag,o=t.cell,u={flexBasis:"".concat(100/c,"%"),paddingTop:"".concat(100/c,"%")},d={color:""};switch(o){case 1:break;case 2:d.color="blue";break;case 3:d.color="green";break;case 4:d.color="purple";break;case 5:d.color="red";break;case 6:d.color="yellow"}return Object(a.jsx)(a.Fragment,{children:l?Object(a.jsx)("div",{className:j.a.cellOpen,onContextMenu:function(e){return e.preventDefault()},style:u,children:Object(a.jsxs)("span",{className:"".concat(j.a.cellOpenText," "),style:d,children:[o>0&&o,"bomb"===o&&Object(a.jsx)("img",{className:j.a.image,src:h,alt:"bomb"})]})}):Object(a.jsx)("button",{type:"button",className:"".concat(j.a.cellClose," ").concat(s&&j.a.flag),style:u,onClick:n,disabled:i,onContextMenu:function(e){return r(e)},children:" "})})},O=n(5),p=n.n(O),g=n(6),x=n.n(g),_=function(e){var t=e.gameSize,n=e.gameDifficulty,r=e.gameSizeArr,c=e.gameDifficultyArr,i=e.handleGridSizeChange,l=e.handleDifficultyChange;return Object(a.jsxs)("div",{className:x.a.options,children:[Object(a.jsxs)("label",{htmlFor:"gameSize",className:x.a.label,children:["Choose game size"," ",Object(a.jsx)("select",{id:"gameSize",name:"gameSize",value:t,onChange:i,className:x.a.select,children:r.map((function(e){var t=e.name,n=e.size;return Object(a.jsx)("option",{value:n,className:x.a.option,children:t},t)}))})]}),Object(a.jsxs)("label",{htmlFor:"difficulty",className:x.a.label,children:["Choose difficulty"," ",Object(a.jsx)("select",{id:"difficulty",name:"difficulty",value:n,onChange:l,className:x.a.select,children:c.map((function(e){var t=e.name,n=e.difficulty;return Object(a.jsx)("option",{value:n,className:x.a.option,children:t},t)}))})]})]})},v=function(e){for(var t=[],n=[],a=1,r=0;r<e;r++){for(var c=0;c<e;c++)t.push({id:a,cell:0,isOpen:!1,haveFlag:!1}),a+=1;n.push(t),t=[]}return n},N=function(e,t,n){for(var a=e.rowI,r=e.colI,c=0,i=Math.max(a-1,0);i<=Math.min(a+1,t-1);i++)for(var l=Math.max(r-1,0);l<=Math.min(r+1,t-1);l++)"bomb"===n[i][l].cell&&(c+=1);return c},y=function e(t,n,a){var r=t.rowI,c=t.colI,i=Object(s.a)(a),l=N(t,n,i);if(i[r][c].isOpen=!0,0===l)for(var o=Math.max(r-1,0);o<=Math.min(r+1,n-1);o++)for(var u=Math.max(c-1,0);u<=Math.min(c+1,n-1);u++)"bomb"!==i[o][u].cell&&!1===i[o][u].isOpen&&e({rowI:o,colI:u},n,i);return i},S=function(e){var t=Math.floor(e/60),n=e-60*t,a="";return a+=t>0?"".concat(t,"m ").concat(n.toFixed(1),"s"):"".concat(n.toFixed(1),"s")},C=n(16),w=n.n(C),z=function(e){var t=e.isTimerStarted,n=e.resetTimer,c=e.getTimerValue,i=Object(r.useState)(0),l=Object(o.a)(i,2),s=l[0],u=l[1],d=Object(r.useRef)();return Object(r.useEffect)((function(){n&&u(0)}),[n]),Object(r.useEffect)((function(){t?d.current=setInterval((function(){u((function(e){return e+.1}))}),100):(clearInterval(d.current),c(s))}),[t]),Object(a.jsx)("div",{className:w.a.timerWrapper,children:Object(a.jsx)("span",{className:w.a.timer,children:S(s)})})},T=function(e){var t=e.isGameStarted,n=e.isTimerStarted,r=e.resetTimer,c=e.showResults,i=e.gameSizeArr,l=e.gameSize,s=e.gameDifficulty,o=e.gameDifficultyArr,u=e.getTimerValue,d=e.handleShowResults,b=e.handleStart,m=e.handleGridSizeChange,j=e.handleDifficultyChange;return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:p.a.header,children:t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"col-xs-4",children:Object(a.jsx)("button",{type:"button",onClick:b,className:p.a.button,children:"END"})}),Object(a.jsx)("div",{className:"col-xs-6 col-xs-offset-2",children:Object(a.jsx)(z,{isTimerStarted:n,resetTimer:r,getTimerValue:u})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"col-xs-4",children:Object(a.jsx)("div",{className:p.a.startFinish,children:Object(a.jsx)("button",{type:"button",onClick:b,className:p.a.button,disabled:c,children:"Start"})})}),Object(a.jsx)("div",{className:"col-xs-8",children:Object(a.jsx)(_,{gameSize:l,gameDifficulty:s,handleGridSizeChange:m,handleDifficultyChange:j,gameSizeArr:i,gameDifficultyArr:o})}),Object(a.jsx)("div",{className:p.a.triangleWrapper,children:Object(a.jsx)("span",{className:p.a.triangle,children:Object(a.jsx)("button",{type:"button",onClick:d,className:p.a.triangleButton,children:c?"close":"results"})})})]})})})},D=n(7),I=n.n(D),W=function(e){var t=e.showResults,n=e.results;return n.sort((function(e,t){return e.time-t.time})).splice(10),Object(a.jsxs)("div",{className:"".concat(I.a.results," ").concat(t&&I.a.active),children:[Object(a.jsx)("h5",{className:I.a.heading,children:"Results"}),Object(a.jsxs)("table",{className:I.a.table,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{className:I.a.tableTh,children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"name"}),Object(a.jsx)("th",{children:"time"}),Object(a.jsx)("th",{children:"grid size"}),Object(a.jsx)("th",{children:"difficulty"})]})}),Object(a.jsx)("tbody",{children:n.map((function(e,t){var n=e.id,r=e.name,c=e.time,i=e.size,l=e.difficulty;return Object(a.jsxs)("tr",{className:I.a.tableTr,children:[Object(a.jsx)("td",{children:t+1}),Object(a.jsx)("td",{children:r.substring(0,12)}),Object(a.jsx)("td",{children:S(c)}),Object(a.jsx)("td",{children:i}),Object(a.jsx)("td",{children:l})]},n)}))})]})]})},F=n(13),M=n.n(F),k=function(){return Object(a.jsxs)("div",{className:M.a.gameOver,children:[Object(a.jsx)("span",{className:M.a.gameOverText,children:"better luck next time"}),Object(a.jsx)("span",{className:M.a.gameOverGG,children:" GG"})]})},G=n(8),R=n.n(G),A=function(e){var t=e.winnerName,n=e.handleWinnerName,c=e.handleWinner,i=Object(r.useRef)(null);return Object(r.useEffect)((function(){i.current.focus()}),[]),Object(a.jsxs)("div",{className:R.a.Winner,children:[Object(a.jsx)("h1",{className:R.a.heading,children:" Winner!!!"}),Object(a.jsxs)("label",{htmlFor:"input",className:R.a.label,children:["enter your name to save results",Object(a.jsxs)("div",{className:R.a.inputWrapper,children:[Object(a.jsx)("input",{type:"text",placeholder:"enter name...",className:R.a.input,ref:i,value:t,onChange:function(e){return n(e)}}),Object(a.jsx)("button",{type:"button",className:R.a.button,onClick:c,children:"save"})]})]})]})},E=n(14),V=n.n(E),B=function(e){var t=e.handleRestart;return Object(a.jsx)("div",{className:V.a.triangleWrapper,children:Object(a.jsx)("span",{className:V.a.triangle,children:Object(a.jsx)("button",{type:"button",onClick:t,className:V.a.button,children:"restart"})})})},H=[{name:" small",size:10},{name:"medium",size:15},{name:"large",size:20}],J=[{name:"easy",difficulty:10},{name:"medium",difficulty:3},{name:"hard",difficulty:2}],K=(n(28),n(20)),L=n.n(K),P=!1,Z=!1,q=!1,X=!1,Q=!1,Y=!1,U=!1,$=function(){var e=Object(r.useState)(10),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(10),l=Object(o.a)(i,2),m=l[0],j=l[1],h=Object(r.useState)(v(n)),O=Object(o.a)(h,2),p=O[0],g=O[1],x=Object(r.useState)(!1),_=Object(o.a)(x,2),S=_[0],C=_[1],w=Object(r.useState)(""),z=Object(o.a)(w,2),D=z[0],I=z[1],F=Object(r.useState)([]),M=Object(o.a)(F,2),G=M[0],R=M[1],E=Object(r.useState)(0),V=Object(o.a)(E,2),K=V[0],$=V[1];Object(r.useEffect)((function(){var e=localStorage.getItem("minesweeper");e&&R(JSON.parse(e))}),[]);var ee=function(e,t){var a=Object(u.cloneDeep)(p),r={rowI:e,colI:t};if(!p[e][t].haveFlag){if("bomb"===p[e][t].cell){var c=function(e,t){for(var n=Object(u.cloneDeep)(t),a=0;a<e;a++)for(var r=0;r<e;r++)"bomb"===n[a][r].cell&&(n[a][r].isOpen=!0);return n}(n,a);return Z=!0,Y=!0,Q=!1,void g(c)}if(X){var i=y(r,n,a);i[e][t].isOpen=!0,function(e,t){return!t.some((function(e){return e.some((function(e){return"bomb"!==e.cell&&!e.isOpen}))}))}(0,i)&&(Q=!1,q=!0),g(i)}else{var l=function(e,t,n){var a=Object(u.cloneDeep)(n);return a.forEach((function(e){for(var n=Object(u.random)(1,t),a=Object(u.sampleSize)(e,n),r=0;r<n;r++)a[r].cell="bomb"})),a[e.rowI][e.colI].cell=0,a}(r,Object(u.round)(n/m),a),s=function(e,t,n){for(var a=Object(u.cloneDeep)(n),r=e.rowI,c=e.colI,i=Math.max(r-1,0);i<=Math.min(r+1,t-1);i++)for(var l=Math.max(c-1,0);l<=Math.min(c+1,t-1);l++)"bomb"===a[i][l].cell&&(a[i][l].cell=0);return a}(r,n,l),o=function(e,t){for(var n=Object(u.cloneDeep)(t),a=0;a<e;a++)for(var r=0;r<e;r++)if(0===n[a][r].cell){var c=N({rowI:a,colI:r},e,n);n[a][r].cell=0===c?"empty":c}return n}(n,s),d=y(r,n,o);Q=!0,U=!1,g(d),X=!0}}};return Object(a.jsxs)("div",{className:"conatainer",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-xs-12",children:[Object(a.jsx)(T,{isGameStarted:P,isTimerStarted:Q,resetTimer:U,showResults:S,gameSizeArr:H,gameDifficultyArr:J,gameSize:n,gameDifficulty:m,handleStart:function(){return function(){var e=v(n);g(e),P=!P,X=!1,Z=!1,Y=!1,q=!1,Q=!1,U=!0,$(0)}()},handleShowResults:function(){return C(!S)},handleGridSizeChange:function(e){return c(parseInt(e.target.value,10))},handleDifficultyChange:function(e){return j(parseInt(e.target.value,10))},getTimerValue:function(e){$(e)}}),Object(a.jsx)(W,{showResults:S,results:G})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-xs-12",children:P&&Object(a.jsxs)("div",{className:L.a.minesweeper,style:{maxWidth:"".concat(30*n,"px")},children:[p.map((function(e,t){return e.map((function(e,r){return Object(a.jsx)(f,{oneCell:e,hadleRightClick:function(e){return function(e,t,n){e.preventDefault();var a=Object(u.cloneDeep)(p);a[t][n].haveFlag=!a[t][n].haveFlag,g(a)}(e,t,r)},handleOpen:function(){return ee(t,r)},isGridDisabled:Y,gridSize:n},e.id)}))})),X&&Object(a.jsx)(B,{handleRestart:function(){return function(){var e=v(n);g(e),X=!1,Z=!1,Y=!1,q=!1,Q=!1,U=!0,$(0)}()}}),Z&&Object(a.jsx)(k,{}),q&&Object(a.jsx)(A,{winnerName:D,handleWinnerName:function(e){return I(e.target.value)},handleWinner:function(){return function(){if(D){var e=Object(s.a)(G),t=H.findIndex((function(e){return e.size===n})),a=J.findIndex((function(e){return e.difficulty===m})),r={id:Object(d.a)(),name:D,time:K,size:H[t].name,difficulty:J[a].name};q=!1,P=!1,localStorage.setItem("minesweeper",JSON.stringify([].concat(Object(s.a)(e),[r]))),R([].concat(Object(s.a)(e),[r])),I(""),$(0),Object(b.b)("Result Added!",{position:"top-left",autoClose:3e3,closeOnClick:!0,draggable:!0})}else alert("enter name!")}()}})]})})}),Object(a.jsx)(b.a,{})]})},ee=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)($,{})})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(31);l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(ee,{})}),document.getElementById("root")),te()}],[[32,1,2]]]);
//# sourceMappingURL=main.c015daf1.chunk.js.map