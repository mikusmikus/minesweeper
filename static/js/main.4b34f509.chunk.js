(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],[,,,function(e,t,n){e.exports={header:"header_header__16fGl",button:"header_button__3EYHo",startFinish:"header_startFinish__1xrhN",triangleWrapper:"header_triangleWrapper__X11te",triangle:"header_triangle__q_44v",triangleButton:"header_triangleButton__27PwV",timerWrapper:"header_timerWrapper__2yBxr",timer:"header_timer__2a7aM"}},,,function(e,t,n){e.exports={options:"options_options__1p9M2",label:"options_label__2_Fyj",select:"options_select__2lHFD",option:"options_option__2jmWP"}},function(e,t,n){e.exports={results:"results_results__1g5GR",active:"results_active__2P_qz",table:"results_table__2yg4S",tableTh:"results_tableTh__1RguN",tableTr:"results_tableTr__3-ojH",heading:"results_heading__2xJkZ"}},function(e,t,n){e.exports={Winner:"winner_Winner__3pJ0r",heading:"winner_heading__1ufod",winner:"winner_winner__1ZYIX",label:"winner_label__3Nyd-",inputWrapper:"winner_inputWrapper__Q6WtU",input:"winner_input__3jViK",button:"winner_button__3yynH"}},,function(e,t,n){e.exports={cellClose:"oneCell_cellClose__m61gg",cellOpen:"oneCell_cellOpen__KyVHc",cellOpenText:"oneCell_cellOpenText__2ZdKl",image:"oneCell_image__35Ksa",flag:"oneCell_flag__3MvgE"}},,,function(e,t,n){e.exports={gameOver:"gameOver_gameOver__1XsNv",gameOverText:"gameOver_gameOverText__2vaA9",gameOverGG:"gameOver_gameOverGG__2hiM8",gg:"gameOver_gg__3-fLQ"}},function(e,t,n){e.exports={triangleWrapper:"restart_triangleWrapper__VdthC",triangle:"restart_triangle__1KZLn",button:"restart_button__3bZr1"}},,,,,function(e,t,n){e.exports={minesweeper:"minesweeper_minesweeper__33qms"}},,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),i=n(5),l=n.n(i),s=(n(17),n(9)),o=n(4),u=n(2),d=n(35),j=n(16),m=n(10),b=n.n(m),h=function(e){var t=e.oneCell,n=e.handleOpen,r=e.hadleRightClick,c=e.gridSize,i=e.isGridDisabled,l=t.isOpen,s=t.haveFlag,o=t.cell,u={flexBasis:"".concat(100/c,"%"),paddingTop:"".concat(100/c,"%")};return Object(a.jsx)(a.Fragment,{children:l?Object(a.jsx)("div",{className:b.a.cellOpen,onContextMenu:function(e){return e.preventDefault()},style:u,children:Object(a.jsxs)("span",{className:b.a.cellOpenText,children:[o>0&&o,"bomb"===o&&Object(a.jsx)("img",{className:b.a.image,src:"https://w7.pngwing.com/pngs/220/369/png-transparent-minesweeper-pro-classic-mine-sweeper-minesweeper-plus-likeminesweeper-bomb-game-computer-wallpaper-video-game.png",alt:"bomb"})]})}):Object(a.jsx)("button",{type:"button",className:"".concat(b.a.cellClose," ").concat(s&&b.a.flag),style:u,onClick:n,disabled:i,onContextMenu:function(e){return r(e)},children:" "})})},f=n(3),O=n.n(f),p=n(6),g=n.n(p),_=function(e){var t=e.gameSize,n=e.gameDifficulty,r=e.gameSizeArr,c=e.gameDifficultyArr,i=e.handleGridSizeChange,l=e.handleDifficultyChange;return Object(a.jsxs)("div",{className:g.a.options,children:[Object(a.jsxs)("label",{htmlFor:"gameSize",className:g.a.label,children:["Choose game size"," ",Object(a.jsx)("select",{id:"gameSize",name:"gameSize",value:t,onChange:i,className:g.a.select,children:r.map((function(e){var t=e.name,n=e.size;return Object(a.jsx)("option",{value:n,className:g.a.option,children:t},t)}))})]}),Object(a.jsxs)("label",{htmlFor:"difficulty",className:g.a.label,children:["Choose difficulty"," ",Object(a.jsx)("select",{id:"difficulty",name:"difficulty",value:n,onChange:l,className:g.a.select,children:c.map((function(e){var t=e.name,n=e.difficulty;return Object(a.jsx)("option",{value:n,className:g.a.option,children:t},t)}))})]})]})},x=function(e){for(var t=[],n=[],a=1,r=0;r<e;r++){for(var c=0;c<e;c++)t.push({id:a,cell:0,isOpen:!1,haveFlag:!1}),a+=1;n.push(t),t=[]}return n},v=function(e,t,n){for(var a=e.rowI,r=e.colI,c=0,i=Math.max(a-1,0);i<=Math.min(a+1,t-1);i++)for(var l=Math.max(r-1,0);l<=Math.min(r+1,t-1);l++)"bomb"===n[i][l].cell&&(c+=1);return c},N=function e(t,n,a){var r=t.rowI,c=t.colI,i=Object(s.a)(a),l=v(t,n,i);if(i[r][c].isOpen=!0,0===l)for(var o=Math.max(r-1,0);o<=Math.min(r+1,n-1);o++)for(var u=Math.max(c-1,0);u<=Math.min(c+1,n-1);u++)"bomb"!==i[o][u].cell&&!1===i[o][u].isOpen&&e({rowI:o,colI:u},n,i);return i},y=function(e){var t=Math.floor(e/60),n=e-60*t,a="";return t>0?(a+="".concat(t,"m:").concat(n<10?"0":""),a+="".concat(n,"s")):a+="".concat(n,"s"),a},w=function(e){var t=e.showResults,n=e.gameSizeArr,r=e.gameSize,c=e.gameDifficulty,i=e.isGameStarted,l=e.gameDifficultyArr,s=e.timer,o=e.handleShowResults,u=e.handleStart,d=e.handleGridSizeChange,j=e.handleDifficultyChange;return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:O.a.header,children:i?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"col-xs-4",children:Object(a.jsx)("button",{type:"button",onClick:u,className:O.a.button,children:"END"})}),Object(a.jsx)("div",{className:"col-xs-6 col-xs-offset-2",children:Object(a.jsx)("div",{className:O.a.timerWrapper,children:Object(a.jsx)("span",{className:O.a.timer,children:s>0&&y(s)})})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"col-xs-4",children:Object(a.jsx)("div",{className:O.a.startFinish,children:Object(a.jsx)("button",{type:"button",onClick:u,className:O.a.button,disabled:t,children:"Start"})})}),Object(a.jsx)("div",{className:"col-xs-8",children:Object(a.jsx)(_,{gameSize:r,gameDifficulty:c,handleGridSizeChange:d,handleDifficultyChange:j,gameSizeArr:n,gameDifficultyArr:l})}),Object(a.jsx)("div",{className:O.a.triangleWrapper,children:Object(a.jsx)("span",{className:O.a.triangle,children:Object(a.jsx)("button",{type:"button",onClick:o,className:O.a.triangleButton,children:t?"close":"results"})})})]})})})},S=n(7),C=n.n(S),z=function(e){var t=e.showResults,n=e.winners;return n.sort((function(e,t){return e.time-t.time})).splice(10),Object(a.jsxs)("div",{className:"".concat(C.a.results," ").concat(t&&C.a.active),children:[Object(a.jsx)("h5",{className:C.a.heading,children:"Results"}),Object(a.jsxs)("table",{className:C.a.table,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{className:C.a.tableTh,children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"name"}),Object(a.jsx)("th",{children:"time"}),Object(a.jsx)("th",{children:"grid size"}),Object(a.jsx)("th",{children:"difficulty"})]})}),Object(a.jsx)("tbody",{children:n.map((function(e,t){var n=e.id,r=e.name,c=e.time,i=e.size,l=e.difficulty;return Object(a.jsxs)("tr",{className:C.a.tableTr,children:[Object(a.jsx)("td",{children:t+1}),Object(a.jsx)("td",{children:r.substring(0,12)}),Object(a.jsx)("td",{children:y(c)}),Object(a.jsx)("td",{children:i}),Object(a.jsx)("td",{children:l})]},n)}))})]})]})},D=n(13),I=n.n(D),W=function(){return Object(a.jsxs)("div",{className:I.a.gameOver,children:[Object(a.jsx)("span",{className:I.a.gameOverGG,children:" GG"}),Object(a.jsx)("span",{className:I.a.gameOverText,children:"better luck next time"})]})},F=n(8),M=n.n(F),G=function(e){var t=e.winnerName,n=e.handleWinnerName,c=e.handleWinner,i=Object(r.useRef)(null);return Object(r.useEffect)((function(){i.current.focus()}),[]),Object(a.jsxs)("div",{className:M.a.Winner,children:[Object(a.jsx)("h1",{className:M.a.heading,children:" Winner!!!"}),Object(a.jsxs)("label",{htmlFor:"input",className:M.a.label,children:["enter your name to save results",Object(a.jsxs)("div",{className:M.a.inputWrapper,children:[Object(a.jsx)("input",{type:"text",placeholder:"enter name...",className:M.a.input,ref:i,value:t,onChange:function(e){return n(e)}}),Object(a.jsx)("button",{type:"button",className:M.a.button,onClick:c,children:"save"})]})]})]})},R=n(14),T=n.n(R),k=function(e){var t=e.handleRestart;return Object(a.jsx)("div",{className:T.a.triangleWrapper,children:Object(a.jsx)("span",{className:T.a.triangle,children:Object(a.jsx)("button",{type:"button",onClick:t,className:T.a.button,children:"restart"})})})},A=[{name:" small",size:10},{name:"medium",size:15},{name:"large",size:20}],E=[{name:"easy",difficulty:10},{name:"medium",difficulty:3},{name:"hard",difficulty:2}],B=(n(27),n(19)),H=n.n(B),J=!1,K=!1,P=!1,Z=!1,L=!1,V=!1,q=function(){var e=Object(r.useState)(10),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(10),l=Object(o.a)(i,2),m=l[0],b=l[1],f=Object(r.useState)(x(n)),O=Object(o.a)(f,2),p=O[0],g=O[1],_=Object(r.useState)(!1),y=Object(o.a)(_,2),S=y[0],C=y[1],D=Object(r.useState)(""),I=Object(o.a)(D,2),F=I[0],M=I[1],R=Object(r.useState)([]),T=Object(o.a)(R,2),B=T[0],q=T[1],X=Object(r.useState)(!1),Q=Object(o.a)(X,2),Y=Q[0],U=Q[1],$=Object(r.useState)(0),ee=Object(o.a)($,2),te=ee[0],ne=ee[1];Object(r.useEffect)((function(){var e=localStorage.getItem("minesweeper");e&&q(JSON.parse(e))}),[]),Object(r.useEffect)((function(){var e=setInterval((function(){L?ne((function(e){return e+1})):clearInterval(e)}),1e3)}),[Y]);var ae=function(e,t){var a=Object(u.cloneDeep)(p),r={rowI:e,colI:t};if(!p[e][t].haveFlag){if("bomb"===p[e][t].cell){var c=function(e,t){for(var n=Object(u.cloneDeep)(t),a=0;a<e;a++)for(var r=0;r<e;r++)"bomb"===n[a][r].cell&&(n[a][r].isOpen=!0);return n}(n,a);return K=!0,V=!0,L=!1,void g(c)}if(Z){var i=N(r,n,a);i[e][t].isOpen=!0,function(e,t){return!t.some((function(e){return e.some((function(e){return"bomb"!==e.cell&&!e.isOpen}))}))}(0,i)&&(L=!1,P=!0),g(i)}else{var l=function(e,t,n){var a=Object(u.cloneDeep)(n);return a.forEach((function(e){for(var n=Object(u.random)(1,t),a=Object(u.sampleSize)(e,n),r=0;r<n;r++)a[r].cell="bomb"})),a[e.rowI][e.colI].cell=0,a}(r,Object(u.round)(n/m),a),s=function(e,t,n){for(var a=Object(u.cloneDeep)(n),r=e.rowI,c=e.colI,i=Math.max(r-1,0);i<=Math.min(r+1,t-1);i++)for(var l=Math.max(c-1,0);l<=Math.min(c+1,t-1);l++)"bomb"===a[i][l].cell&&(a[i][l].cell=0);return a}(r,n,l),o=function(e,t){for(var n=Object(u.cloneDeep)(t),a=0;a<e;a++)for(var r=0;r<e;r++)if(0===n[a][r].cell){var c=v({rowI:a,colI:r},e,n);n[a][r].cell=0===c?"empty":c}return n}(n,s),d=N(r,n,o);U(!Y),g(d),Z=!0,L=!0}}};return Object(a.jsxs)("div",{className:"conatainer",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-xs-12",children:[Object(a.jsx)(w,{isGameStarted:J,showResults:S,gameSizeArr:A,gameDifficultyArr:E,gameSize:n,gameDifficulty:m,timer:te,handleStart:function(){return function(){var e=x(n);g(e),J=!J,Z=!1,K=!1,V=!1,P=!1,ne(0)}()},handleShowResults:function(){return C(!S)},handleGridSizeChange:function(e){return c(parseInt(e.target.value,10))},handleDifficultyChange:function(e){return b(parseInt(e.target.value,10))}}),Object(a.jsx)(z,{showResults:S,winners:B})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-xs-12",children:J&&Object(a.jsxs)("div",{className:H.a.minesweeper,style:{maxWidth:"".concat(30*n,"px")},children:[p.map((function(e,t){return e.map((function(e,r){return Object(a.jsx)(h,{oneCell:e,hadleRightClick:function(e){return function(e,t,n){e.preventDefault();var a=Object(u.cloneDeep)(p);a[t][n].haveFlag=!a[t][n].haveFlag,g(a)}(e,t,r)},handleOpen:function(){return ae(t,r)},isGridDisabled:V,gridSize:n},e.id)}))})),Z&&Object(a.jsx)(k,{handleRestart:function(){return function(){var e=x(n);g(e),Z=!1,K=!1,V=!1,P=!1,ne(0)}()}}),K&&Object(a.jsx)(W,{}),P&&Object(a.jsx)(G,{winnerName:F,handleWinnerName:function(e){return M(e.target.value)},handleWinner:function(){return function(){var e=Object(s.a)(B),t=A.findIndex((function(e){return e.size===n})),a=E.findIndex((function(e){return e.difficulty===m})),r={id:Object(d.a)(),name:F,time:te,size:A[t].name,difficulty:E[a].name};P=!1,J=!1,localStorage.setItem("minesweeper",JSON.stringify([].concat(Object(s.a)(e),[r]))),q([].concat(Object(s.a)(e),[r])),M(""),ne(0),Object(j.b)("Result Added!",{position:"top-left",autoClose:3e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0})}()}})]})})}),Object(a.jsx)(j.a,{})]})},X=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(q,{})})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(30);l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(X,{})}),document.getElementById("root")),Q()}],[[31,1,2]]]);
//# sourceMappingURL=main.4b34f509.chunk.js.map