(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],[,,,,,function(e,t,n){e.exports={header:"header_header__16fGl",button:"header_button__3EYHo",startFinish:"header_startFinish__1xrhN",triangleWrapper:"header_triangleWrapper__X11te",triangle:"header_triangle__q_44v",triangleButton:"header_triangleButton__27PwV"}},function(e,t,n){e.exports={options:"options_options__1p9M2",label:"options_label__2_Fyj",select:"options_select__2lHFD",option:"options_option__2jmWP"}},function(e,t,n){e.exports={results:"results_results__1g5GR",active:"results_active__2P_qz",table:"results_table__2yg4S",tableTh:"results_tableTh__1RguN",tableTr:"results_tableTr__3-ojH",heading:"results_heading__2xJkZ"}},function(e,t,n){e.exports={Winner:"winner_Winner__3pJ0r",heading:"winner_heading__1ufod",winner:"winner_winner__1ZYIX",label:"winner_label__3Nyd-",inputWrapper:"winner_inputWrapper__Q6WtU",input:"winner_input__3jViK",button:"winner_button__3yynH"}},,function(e,t,n){e.exports={cellClose:"oneCell_cellClose__m61gg",cellOpen:"oneCell_cellOpen__KyVHc",cellOpenText:"oneCell_cellOpenText__2ZdKl",image:"oneCell_image__35Ksa",flag:"oneCell_flag__3MvgE"}},,,function(e,t,n){e.exports={gameOver:"gameOver_gameOver__1XsNv",gameOverText:"gameOver_gameOverText__2vaA9",gameOverGG:"gameOver_gameOverGG__2hiM8",gg:"gameOver_gg__3-fLQ"}},function(e,t,n){e.exports={triangleWrapper:"restart_triangleWrapper__VdthC",triangle:"restart_triangle__1KZLn",button:"restart_button__3bZr1"}},,function(e,t,n){e.exports={timerWrapper:"timer_timerWrapper__1Mm3O",timer:"timer_timer__D3LhH"}},,,,function(e,t,n){e.exports={minesweeper:"minesweeper_minesweeper__33qms"}},,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),i=n(4),s=n.n(i),l=(n(18),n(9)),o=n(3),u=n(2),d=n(36),m=n(17),j=n(10),b=n.n(j),h=function(e){var t=e.oneCell,n=e.handleOpen,r=e.hadleRightClick,c=e.gridSize,i=e.isGridDisabled,s=t.isOpen,l=t.haveFlag,o=t.cell,u={flexBasis:"".concat(100/c,"%"),paddingTop:"".concat(100/c,"%")};return Object(a.jsx)(a.Fragment,{children:s?Object(a.jsx)("div",{className:b.a.cellOpen,onContextMenu:function(e){return e.preventDefault()},style:u,children:Object(a.jsxs)("span",{className:b.a.cellOpenText,children:[o>0&&o,"bomb"===o&&Object(a.jsx)("img",{className:b.a.image,src:"https://w7.pngwing.com/pngs/220/369/png-transparent-minesweeper-pro-classic-mine-sweeper-minesweeper-plus-likeminesweeper-bomb-game-computer-wallpaper-video-game.png",alt:"bomb"})]})}):Object(a.jsx)("button",{type:"button",className:"".concat(b.a.cellClose," ").concat(l&&b.a.flag),style:u,onClick:n,disabled:i,onContextMenu:function(e){return r(e)},children:" "})})},f=n(5),O=n.n(f),p=n(6),g=n.n(p),x=function(e){var t=e.gameSize,n=e.gameDifficulty,r=e.gameSizeArr,c=e.gameDifficultyArr,i=e.handleGridSizeChange,s=e.handleDifficultyChange;return Object(a.jsxs)("div",{className:g.a.options,children:[Object(a.jsxs)("label",{htmlFor:"gameSize",className:g.a.label,children:["Choose game size"," ",Object(a.jsx)("select",{id:"gameSize",name:"gameSize",value:t,onChange:i,className:g.a.select,children:r.map((function(e){var t=e.name,n=e.size;return Object(a.jsx)("option",{value:n,className:g.a.option,children:t},t)}))})]}),Object(a.jsxs)("label",{htmlFor:"difficulty",className:g.a.label,children:["Choose difficulty"," ",Object(a.jsx)("select",{id:"difficulty",name:"difficulty",value:n,onChange:s,className:g.a.select,children:c.map((function(e){var t=e.name,n=e.difficulty;return Object(a.jsx)("option",{value:n,className:g.a.option,children:t},t)}))})]})]})},_=n(16),v=n.n(_),N=function(e){var t=e.isTimerStarted,n=e.getTimerValue,c=Object(r.useState)(0),i=Object(o.a)(c,2),s=i[0],l=i[1],u=Object(r.useRef)();return Object(r.useEffect)((function(){t?u.current=setInterval((function(){l((function(e){return e+.1}))}),100):(clearInterval(u.current),n(s),l(0))}),[t]),Object(a.jsx)("div",{className:v.a.timerWrapper,children:Object(a.jsxs)("span",{className:v.a.timer,children:[s.toFixed(1),"s"]})})},y=function(e){var t=e.showResults,n=e.gameSizeArr,r=e.gameSize,c=e.gameDifficulty,i=e.isGameStarted,s=e.gameDifficultyArr,l=e.isTimerStarted,o=e.getTimerValue,u=e.handleShowResults,d=e.handleStart,m=e.handleGridSizeChange,j=e.handleDifficultyChange;return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:O.a.header,children:i?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"col-xs-4",children:Object(a.jsx)("button",{type:"button",onClick:d,className:O.a.button,children:"END"})}),Object(a.jsx)("div",{className:"col-xs-6 col-xs-offset-2",children:Object(a.jsx)(N,{isTimerStarted:l,getTimerValue:o})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"col-xs-4",children:Object(a.jsx)("div",{className:O.a.startFinish,children:Object(a.jsx)("button",{type:"button",onClick:d,className:O.a.button,disabled:t,children:"Start"})})}),Object(a.jsx)("div",{className:"col-xs-8",children:Object(a.jsx)(x,{gameSize:r,gameDifficulty:c,handleGridSizeChange:m,handleDifficultyChange:j,gameSizeArr:n,gameDifficultyArr:s})}),Object(a.jsx)("div",{className:O.a.triangleWrapper,children:Object(a.jsx)("span",{className:O.a.triangle,children:Object(a.jsx)("button",{type:"button",onClick:u,className:O.a.triangleButton,children:t?"close":"results"})})})]})})})},w=n(7),S=n.n(w),C=function(e){for(var t=[],n=[],a=1,r=0;r<e;r++){for(var c=0;c<e;c++)t.push({id:a,cell:0,isOpen:!1,haveFlag:!1}),a+=1;n.push(t),t=[]}return n},z=function(e,t,n){for(var a=e.rowI,r=e.colI,c=0,i=Math.max(a-1,0);i<=Math.min(a+1,t-1);i++)for(var s=Math.max(r-1,0);s<=Math.min(r+1,t-1);s++)"bomb"===n[i][s].cell&&(c+=1);return c},D=function e(t,n,a){var r=t.rowI,c=t.colI,i=Object(l.a)(a),s=z(t,n,i);if(i[r][c].isOpen=!0,0===s)for(var o=Math.max(r-1,0);o<=Math.min(r+1,n-1);o++)for(var u=Math.max(c-1,0);u<=Math.min(c+1,n-1);u++)"bomb"!==i[o][u].cell&&!1===i[o][u].isOpen&&e({rowI:o,colI:u},n,i);return i},I=function(e){var t=Math.floor(e/60),n=e-60*t,a="";return t>0?(a+="".concat(t,"m:").concat(n<10?"0":""),a+="".concat(n,"s")):a+="".concat(n,"s"),a},T=function(e){var t=e.showResults,n=e.winners;return n.sort((function(e,t){return e.time-t.time})).splice(10),Object(a.jsxs)("div",{className:"".concat(S.a.results," ").concat(t&&S.a.active),children:[Object(a.jsx)("h5",{className:S.a.heading,children:"Results"}),Object(a.jsxs)("table",{className:S.a.table,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{className:S.a.tableTh,children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"name"}),Object(a.jsx)("th",{children:"time"}),Object(a.jsx)("th",{children:"grid size"}),Object(a.jsx)("th",{children:"difficulty"})]})}),Object(a.jsx)("tbody",{children:n.map((function(e,t){var n=e.id,r=e.name,c=e.time,i=e.size,s=e.difficulty;return Object(a.jsxs)("tr",{className:S.a.tableTr,children:[Object(a.jsx)("td",{children:t+1}),Object(a.jsx)("td",{children:r.substring(0,12)}),Object(a.jsx)("td",{children:I(c)}),Object(a.jsx)("td",{children:i}),Object(a.jsx)("td",{children:s})]},n)}))})]})]})},W=n(13),F=n.n(W),M=function(){return Object(a.jsxs)("div",{className:F.a.gameOver,children:[Object(a.jsx)("span",{className:F.a.gameOverText,children:"better luck next time"}),Object(a.jsx)("span",{className:F.a.gameOverGG,children:" GG"})]})},G=n(8),R=n.n(G),k=function(e){var t=e.winnerName,n=e.handleWinnerName,c=e.handleWinner,i=Object(r.useRef)(null);return Object(r.useEffect)((function(){i.current.focus()}),[]),Object(a.jsxs)("div",{className:R.a.Winner,children:[Object(a.jsx)("h1",{className:R.a.heading,children:" Winner!!!"}),Object(a.jsxs)("label",{htmlFor:"input",className:R.a.label,children:["enter your name to save results",Object(a.jsxs)("div",{className:R.a.inputWrapper,children:[Object(a.jsx)("input",{type:"text",placeholder:"enter name...",className:R.a.input,ref:i,value:t,onChange:function(e){return n(e)}}),Object(a.jsx)("button",{type:"button",className:R.a.button,onClick:c,children:"save"})]})]})]})},A=n(14),E=n.n(A),V=function(e){var t=e.handleRestart;return Object(a.jsx)("div",{className:E.a.triangleWrapper,children:Object(a.jsx)("span",{className:E.a.triangle,children:Object(a.jsx)("button",{type:"button",onClick:t,className:E.a.button,children:"restart"})})})},H=[{name:" small",size:10},{name:"medium",size:15},{name:"large",size:20}],B=[{name:"easy",difficulty:10},{name:"medium",difficulty:3},{name:"hard",difficulty:2}],J=(n(28),n(20)),K=n.n(J),L=!1,P=!1,Z=!1,q=!1,X=!1,Q=!1,Y=function(){var e=Object(r.useState)(10),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(10),s=Object(o.a)(i,2),j=s[0],b=s[1],f=Object(r.useState)(C(n)),O=Object(o.a)(f,2),p=O[0],g=O[1],x=Object(r.useState)(!1),_=Object(o.a)(x,2),v=_[0],N=_[1],w=Object(r.useState)(""),S=Object(o.a)(w,2),I=S[0],W=S[1],F=Object(r.useState)([]),G=Object(o.a)(F,2),R=G[0],A=G[1],E=Object(r.useState)(0),J=Object(o.a)(E,2),Y=J[0],U=J[1];Object(r.useEffect)((function(){var e=localStorage.getItem("minesweeper");e&&A(JSON.parse(e))}),[]);var $=function(e,t){var a=Object(u.cloneDeep)(p),r={rowI:e,colI:t};if(!p[e][t].haveFlag){if("bomb"===p[e][t].cell){var c=function(e,t){for(var n=Object(u.cloneDeep)(t),a=0;a<e;a++)for(var r=0;r<e;r++)"bomb"===n[a][r].cell&&(n[a][r].isOpen=!0);return n}(n,a);return P=!0,Q=!0,X=!1,void g(c)}if(q){var i=D(r,n,a);i[e][t].isOpen=!0,function(e,t){return!t.some((function(e){return e.some((function(e){return"bomb"!==e.cell&&!e.isOpen}))}))}(0,i)&&(X=!1,Z=!0),g(i)}else{var s=function(e,t,n){var a=Object(u.cloneDeep)(n);return a.forEach((function(e){for(var n=Object(u.random)(1,t),a=Object(u.sampleSize)(e,n),r=0;r<n;r++)a[r].cell="bomb"})),a[e.rowI][e.colI].cell=0,a}(r,Object(u.round)(n/j),a),l=function(e,t,n){for(var a=Object(u.cloneDeep)(n),r=e.rowI,c=e.colI,i=Math.max(r-1,0);i<=Math.min(r+1,t-1);i++)for(var s=Math.max(c-1,0);s<=Math.min(c+1,t-1);s++)"bomb"===a[i][s].cell&&(a[i][s].cell=0);return a}(r,n,s),o=function(e,t){for(var n=Object(u.cloneDeep)(t),a=0;a<e;a++)for(var r=0;r<e;r++)if(0===n[a][r].cell){var c=z({rowI:a,colI:r},e,n);n[a][r].cell=0===c?"empty":c}return n}(n,l),d=D(r,n,o);X=!0,g(d),q=!0}}};return Object(a.jsxs)("div",{className:"conatainer",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-xs-12",children:[Object(a.jsx)(y,{isGameStarted:L,showResults:v,gameSizeArr:H,gameDifficultyArr:B,gameSize:n,gameDifficulty:j,handleStart:function(){return function(){var e=C(n);g(e),L=!L,q=!1,P=!1,Q=!1,Z=!1,X=!1,U(0)}()},handleShowResults:function(){return N(!v)},handleGridSizeChange:function(e){return c(parseInt(e.target.value,10))},handleDifficultyChange:function(e){return b(parseInt(e.target.value,10))},isTimerStarted:X,getTimerValue:function(e){return U(e),e}}),Object(a.jsx)(T,{showResults:v,winners:R})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-xs-12",children:L&&Object(a.jsxs)("div",{className:K.a.minesweeper,style:{maxWidth:"".concat(30*n,"px")},children:[p.map((function(e,t){return e.map((function(e,r){return Object(a.jsx)(h,{oneCell:e,hadleRightClick:function(e){return function(e,t,n){e.preventDefault();var a=Object(u.cloneDeep)(p);a[t][n].haveFlag=!a[t][n].haveFlag,g(a)}(e,t,r)},handleOpen:function(){return $(t,r)},isGridDisabled:Q,gridSize:n},e.id)}))})),q&&Object(a.jsx)(V,{handleRestart:function(){return function(){var e=C(n);g(e),q=!1,P=!1,Q=!1,Z=!1,X=!1,U(0)}()}}),P&&Object(a.jsx)(M,{}),Z&&Object(a.jsx)(k,{winnerName:I,handleWinnerName:function(e){return W(e.target.value)},handleWinner:function(){return function(){var e=Object(l.a)(R),t=H.findIndex((function(e){return e.size===n})),a=B.findIndex((function(e){return e.difficulty===j})),r={id:Object(d.a)(),name:I,time:Y,size:H[t].name,difficulty:B[a].name};Z=!1,L=!1,localStorage.setItem("minesweeper",JSON.stringify([].concat(Object(l.a)(e),[r]))),A([].concat(Object(l.a)(e),[r])),W(""),U(0),Object(m.b)("Result Added!",{position:"top-left",autoClose:3e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0})}()}})]})})}),Object(a.jsx)(m.a,{})]})},U=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(Y,{})})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(31);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root")),$()}],[[32,1,2]]]);
//# sourceMappingURL=main.9ae0bd96.chunk.js.map