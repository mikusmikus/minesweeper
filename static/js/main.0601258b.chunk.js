(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],[,,,function(e,t,n){e.exports={header:"header_header__16fGl",button:"header_button__3EYHo",startFinish:"header_startFinish__1xrhN",triangle:"header_triangle__q_44v",triangleButton:"header_triangleButton__27PwV"}},function(e,t,n){e.exports={options:"options_options__1p9M2",label:"options_label__2_Fyj",select:"options_select__2lHFD",option:"options_option__2jmWP"}},function(e,t,n){e.exports={results:"results_results__1g5GR",active:"results_active__2P_qz",table:"results_table__2yg4S",tableTh:"results_tableTh__1RguN",tableTr:"results_tableTr__3-ojH",heading:"results_heading__2xJkZ"}},function(e,t,n){e.exports={Winner:"winner_Winner__3pJ0r",heading:"winner_heading__1ufod",winner:"winner_winner__1ZYIX",label:"winner_label__3Nyd-",inputWrapper:"winner_inputWrapper__Q6WtU",input:"winner_input__3jViK",button:"winner_button__3yynH"}},,,function(e,t,n){e.exports={cellClose:"oneCell_cellClose__m61gg",cellOpen:"oneCell_cellOpen__KyVHc",cellOpenText:"oneCell_cellOpenText__2ZdKl",image:"oneCell_image__35Ksa",flag:"oneCell_flag__3MvgE"}},,,function(e,t,n){e.exports={gameOver:"gameOver_gameOver__1XsNv",gameOverText:"gameOver_gameOverText__2vaA9",gameOverGG:"gameOver_gameOverGG__2hiM8",gg:"gameOver_gg__3-fLQ"}},,,,function(e,t,n){e.exports={minesweeper:"minesweeper_minesweeper__33qms"}},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),r=n(15),l=n.n(r),s=(n(14),n(8)),o=n(7),u=n(2),d=n(28),j=n(9),m=n.n(j),b=function(e){var t=e.oneCell,n=e.handleOpen,c=e.hadleRightClick,i=e.gridSize,r=e.isGridDisabled,l=t.isOpen,s=t.haveFlag,o=t.cell,u={flexBasis:"".concat(100/i,"%"),paddingTop:"".concat(100/i,"%")};return Object(a.jsx)(a.Fragment,{children:l?Object(a.jsx)("div",{className:m.a.cellOpen,onContextMenu:function(e){return e.preventDefault()},style:u,children:Object(a.jsxs)("span",{className:m.a.cellOpenText,children:[o>0&&o,"bomb"===o&&Object(a.jsx)("img",{className:m.a.image,src:"https://w7.pngwing.com/pngs/220/369/png-transparent-minesweeper-pro-classic-mine-sweeper-minesweeper-plus-likeminesweeper-bomb-game-computer-wallpaper-video-game.png",alt:"bomb"})]})}):Object(a.jsx)("button",{type:"button",className:"".concat(m.a.cellClose," ").concat(s&&m.a.flag),style:u,onClick:n,disabled:r,onContextMenu:function(e){return c(e)},children:" "})})},h=n(3),f=n.n(h),O=n(4),g=n.n(O),p=function(e){var t=e.gameSize,n=e.gameDifficulty,c=e.gameSizeArr,i=e.gameDifficultyArr,r=e.handleGridSizeChange,l=e.handleDifficultyChange;return Object(a.jsxs)("div",{className:g.a.options,children:[Object(a.jsxs)("label",{htmlFor:"gameSize",className:g.a.label,children:["Choose game size"," ",Object(a.jsx)("select",{id:"gameSize",name:"gameSize",value:t,onChange:r,className:g.a.select,children:c.map((function(e){var t=e.name,n=e.size;return Object(a.jsx)("option",{value:n,className:g.a.option,children:t},t)}))})]}),Object(a.jsxs)("label",{htmlFor:"difficulty",className:g.a.label,children:["Choose difficulty"," ",Object(a.jsx)("select",{id:"difficulty",name:"difficulty",value:n,onChange:l,className:g.a.select,children:i.map((function(e){var t=e.name,n=e.difficulty;return Object(a.jsx)("option",{value:n,className:g.a.option,children:t},t)}))})]})]})},x=function(e){var t=e.firstMoveDone,n=e.showResults,c=e.gameSizeArr,i=e.gameSize,r=e.gameDifficulty,l=e.isGameStarted,s=e.gameDifficultyArr,o=e.handleShowResults,u=e.handleStart,d=e.handleRestart,j=e.handleGridSizeChange,m=e.handleDifficultyChange;return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:f.a.header,children:l?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"col-xs-3",children:Object(a.jsx)("button",{type:"button",onClick:u,className:f.a.button,children:"END"})}),Object(a.jsx)("div",{className:"col-xs-6",children:"count / time"}),t&&Object(a.jsx)("span",{className:f.a.triangle,children:Object(a.jsx)("button",{type:"button",onClick:d,className:f.a.triangleButton,children:"restart"})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"col-xs-3",children:Object(a.jsx)("div",{className:f.a.startFinish,children:Object(a.jsx)("button",{type:"button",onClick:u,className:f.a.button,disabled:n,children:"Start"})})}),Object(a.jsx)("div",{className:"col-xs-9",children:Object(a.jsx)(p,{gameSize:i,gameDifficulty:r,handleGridSizeChange:j,handleDifficultyChange:m,gameSizeArr:c,gameDifficultyArr:s})}),Object(a.jsx)("span",{className:f.a.triangle,children:Object(a.jsx)("button",{type:"button",onClick:o,className:f.a.triangleButton,children:n?"close":"results"})})]})})})},v=n(5),_=n.n(v),N=function(e){var t=e.showResults,n=e.winners;return Object(a.jsxs)("div",{className:"".concat(_.a.results," ").concat(t&&_.a.active),children:[Object(a.jsx)("h5",{className:_.a.heading,children:"Results"}),Object(a.jsxs)("table",{className:_.a.table,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{className:_.a.tableTh,children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"name"}),Object(a.jsx)("th",{children:"time"}),Object(a.jsx)("th",{children:"size"}),Object(a.jsx)("th",{children:"difficulty"})]})}),Object(a.jsx)("tbody",{children:n.map((function(e,t){var n=e.id,c=e.name,i=e.time,r=e.size,l=e.difficulty;return Object(a.jsxs)("tr",{className:_.a.tableTr,children:[Object(a.jsx)("td",{children:t+1}),Object(a.jsx)("td",{children:c.substring(0,12)}),Object(a.jsx)("td",{children:i}),Object(a.jsx)("td",{children:r}),Object(a.jsx)("td",{children:l})]},n)}))})]})]})},w=n(12),y=n.n(w),S=function(){return Object(a.jsxs)("div",{className:y.a.gameOver,children:[Object(a.jsx)("span",{className:y.a.gameOverGG,children:" GG"}),Object(a.jsx)("span",{className:y.a.gameOverText,children:"better luck next time"})]})},C=n(6),z=n.n(C),D=function(e){var t=e.winnerName,n=e.handleWinnerName,i=e.handleWinner,r=Object(c.useRef)(null);return Object(c.useEffect)((function(){r.current.focus()}),[]),Object(a.jsxs)("div",{className:z.a.Winner,children:[Object(a.jsx)("h1",{className:z.a.heading,children:" Winner!!!"}),Object(a.jsxs)("label",{htmlFor:"input",className:z.a.label,children:["enter your name to save results",Object(a.jsxs)("div",{className:z.a.inputWrapper,children:[Object(a.jsx)("input",{type:"text",placeholder:"enter name...",className:z.a.input,ref:r,value:t,onChange:function(e){return n(e)}}),Object(a.jsx)("button",{type:"button",className:z.a.button,onClick:i,children:"save"})]})]})]})},I=[{name:" small",size:10},{name:"medium",size:15},{name:"large",size:20}],F=[{name:"easy",difficulty:10},{name:"medium",difficulty:3},{name:"hard",difficulty:2}],M=function(e){for(var t=[],n=[],a=1,c=0;c<e;c++){for(var i=0;i<e;i++)t.push({id:a,cell:0,isOpen:!1,haveFlag:!1}),a+=1;n.push(t),t=[]}return n},G=function(e,t,n){for(var a=e.rowI,c=e.colI,i=0,r=Math.max(a-1,0);r<=Math.min(a+1,t-1);r++)for(var l=Math.max(c-1,0);l<=Math.min(c+1,t-1);l++)"bomb"===n[r][l].cell&&(i+=1);return i},T=function e(t,n,a){var c=t.rowI,i=t.colI,r=Object(s.a)(a),l=G(t,n,r);if(r[c][i].isOpen=!0,0===l)for(var o=Math.max(c-1,0);o<=Math.min(c+1,n-1);o++)for(var u=Math.max(i-1,0);u<=Math.min(i+1,n-1);u++)"bomb"!==r[o][u].cell&&!1===r[o][u].isOpen&&e({rowI:o,colI:u},n,r);return r},R=n(16),W=n.n(R),k=!1,A=!1,B=!1,E=!1,J=!1,H=function(){var e=Object(c.useState)(10),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(10),l=Object(o.a)(r,2),j=l[0],m=l[1],h=Object(c.useState)(M(n)),f=Object(o.a)(h,2),O=f[0],g=f[1],p=Object(c.useState)(!1),v=Object(o.a)(p,2),_=v[0],w=v[1],y=Object(c.useState)(""),C=Object(o.a)(y,2),z=C[0],R=C[1],H=Object(c.useState)([]),P=Object(o.a)(H,2),K=P[0],q=P[1];Object(c.useEffect)((function(){var e=localStorage.getItem("minesweeper");e&&q(JSON.parse(e))}),[]);var L=function(e,t){var a=Object(u.cloneDeep)(O),c={rowI:e,colI:t};if(!O[e][t].haveFlag){if("bomb"===O[e][t].cell){var i=function(e,t){for(var n=Object(u.cloneDeep)(t),a=0;a<e;a++)for(var c=0;c<e;c++)"bomb"===n[a][c].cell&&(n[a][c].isOpen=!0);return n}(n,a);return A=!0,J=!0,void g(i)}if(E){var r=T(c,n,a);r[e][t].isOpen=!0,function(e,t){return!t.some((function(e){return e.some((function(e){return"bomb"!==e.cell&&!e.isOpen}))}))}(0,r)&&(B=!0),g(r)}else{var l=function(e,t,n){var a=Object(u.cloneDeep)(n);return a.forEach((function(e){for(var n=Object(u.random)(1,t),a=Object(u.sampleSize)(e,n),c=0;c<n;c++)a[c].cell="bomb"})),a[e.rowI][e.colI].cell=0,a}(c,Object(u.round)(n/j),a),s=function(e,t,n){for(var a=Object(u.cloneDeep)(n),c=e.rowI,i=e.colI,r=Math.max(c-1,0);r<=Math.min(c+1,t-1);r++)for(var l=Math.max(i-1,0);l<=Math.min(i+1,t-1);l++)"bomb"===a[r][l].cell&&(a[r][l].cell=0);return a}(c,n,l),o=function(e,t){for(var n=Object(u.cloneDeep)(t),a=0;a<e;a++)for(var c=0;c<e;c++)if(0===n[a][c].cell){var i=G({rowI:a,colI:c},e,n);n[a][c].cell=0===i?"empty":i}return n}(n,s),d=T(c,n,o);g(d),E=!0}}};return Object(a.jsxs)("div",{className:"conatainer",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-xs-12",children:[Object(a.jsx)(x,{isGameStarted:k,firstMoveDone:E,showResults:_,gameSizeArr:I,gameDifficultyArr:F,gameSize:n,gameDifficulty:j,handleStart:function(){return function(){var e=M(n);g(e),k=!k,E=!1,A=!1,J=!1,B=!1}()},handleRestart:function(){return function(){var e=M(n);g(e),E=!1,A=!1,J=!1,B=!1}()},handleShowResults:function(){return w(!_)},handleGridSizeChange:function(e){return i(parseInt(e.target.value,10))},handleDifficultyChange:function(e){return m(parseInt(e.target.value,10))}}),Object(a.jsx)(N,{showResults:_,winners:K})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-xs-12",children:k&&Object(a.jsxs)("div",{className:W.a.minesweeper,style:{maxWidth:"".concat(30*n,"px")},children:[O.map((function(e,t){return e.map((function(e,c){return Object(a.jsx)(b,{oneCell:e,hadleRightClick:function(e){return function(e,t,n){e.preventDefault();var a=Object(u.cloneDeep)(O);a[t][n].haveFlag=!a[t][n].haveFlag,g(a)}(e,t,c)},handleOpen:function(){return L(t,c)},isGridDisabled:J,gridSize:n},e.id)}))})),A&&Object(a.jsx)(S,{}),B&&Object(a.jsx)(D,{winnerName:z,handleWinnerName:function(e){return R(e.target.value)},handleWinner:function(){return function(){var e=Object(s.a)(K),t={id:Object(d.a)(),name:z,time:23,size:"large",difficulty:"hard"};B=!1,k=!1,localStorage.setItem("minesweeper",JSON.stringify([].concat(Object(s.a)(e),[t]))),q([].concat(Object(s.a)(e),[t])),R("")}()}})]})})})]})},P=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(H,{})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};n(24),n(25);l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),K()}],[[26,1,2]]]);
//# sourceMappingURL=main.0601258b.chunk.js.map