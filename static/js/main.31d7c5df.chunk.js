(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],[,,function(e,t,c){e.exports={results:"results_results__1g5GR",active:"results_active__2P_qz",resultList:"results_resultList__1nKlx",heading:"results_heading__2xJkZ"}},,function(e,t,c){e.exports={header:"header_header__16fGl",button:"header_button__3EYHo",startFinish:"header_startFinish__1xrhN",triangle:"header_triangle__q_44v",triangleButton:"header_triangleButton__27PwV"}},function(e,t,c){e.exports={options:"options_options__1p9M2",label:"options_label__2_Fyj",select:"options_select__2lHFD"}},function(e,t,c){e.exports={cellClose:"oneCell_cellClose__m61gg",cellOpen:"oneCell_cellOpen__KyVHc",cellOpenText:"oneCell_cellOpenText__2ZdKl",image:"oneCell_image__35Ksa",flag:"oneCell_flag__3MvgE"}},,,,function(e,t,c){e.exports={gameOver:"gameOver_gameOver__1XsNv",gameOverGG:"gameOver_gameOverGG__2hiM8",gg:"gameOver_gg__3-fLQ",gameOverText:"gameOver_gameOverText__2vaA9"}},,,,function(e,t,c){e.exports={minesweeper:"minesweeper_minesweeper__33qms"}},,,,,,,function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),l=c(13),i=c.n(l),r=(c(21),c(12),c(8)),j=c(3),d=c(6),o=c.n(d),h=function(e){var t=e.oneCell,c=e.handleOpen,s=e.hadleRightClick,a=e.gridSize,l=e.isGridDisabled,i=t.isOpen,r=t.haveFlag,j=t.cell,d={flexBasis:"".concat(100/a,"%"),paddingTop:"".concat(100/a,"%")};return Object(n.jsx)(n.Fragment,{children:i?Object(n.jsx)("div",{className:o.a.cellOpen,onContextMenu:function(e){return e.preventDefault()},style:d,children:Object(n.jsxs)("span",{className:o.a.cellOpenText,children:[j>0&&j,"bomb"===j&&Object(n.jsx)("img",{className:o.a.image,src:"https://w7.pngwing.com/pngs/220/369/png-transparent-minesweeper-pro-classic-mine-sweeper-minesweeper-plus-likeminesweeper-bomb-game-computer-wallpaper-video-game.png",alt:"bomb"})]})}):Object(n.jsx)("button",{type:"button",className:"".concat(o.a.cellClose," ").concat(r&&o.a.flag),style:d,onClick:c,disabled:l,onContextMenu:function(e){return s(e)},children:" "})})},b=c(4),O=c.n(b),u=c(5),x=c.n(u),m=[{name:" small",size:10},{name:"medium",size:15},{name:"large",size:25}],f=[{name:"easy",difficulty:5},{name:"medium",difficulty:3},{name:"hard",difficulty:2}],g=function(e){var t=e.gameSize,c=e.gameDifficulty,s=e.handleGridSizeChange,a=e.handleDifficultyChange;return Object(n.jsxs)("div",{className:x.a.options,children:[Object(n.jsxs)("label",{htmlFor:"gameSize",className:x.a.label,children:["Choose game size"," ",Object(n.jsx)("select",{id:"gameSize",name:"gameSize",value:t,onChange:s,className:x.a.select,children:m.map((function(e){var t=e.name,c=e.size;return Object(n.jsx)("option",{value:c,className:x.a.option,children:t},t)}))})]}),Object(n.jsxs)("label",{htmlFor:"difficulty",className:x.a.label,children:["Choose difficulty"," ",Object(n.jsx)("select",{id:"difficulty",name:"difficulty",value:c,onChange:a,className:x.a.select,children:f.map((function(e){var t=e.name,c=e.difficulty;return Object(n.jsx)("option",{value:c,className:x.a.option,children:t},t)}))})]})]})},v=function(e){e.gameOver;var t=e.gameSize,c=e.handleShowResults,s=e.gameDifficulty,a=e.isGameStarted,l=e.showResults,i=e.handleStart,r=e.handleRestart,j=e.handleGridSizeChange,d=e.handleDifficultyChange;return Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:O.a.header,children:a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"col-xs-3",children:Object(n.jsx)("button",{type:"button",onClick:i,className:O.a.button,children:"END"})}),Object(n.jsx)("div",{className:"col-xs-6",children:"count / time"}),Object(n.jsx)("span",{className:O.a.triangle,children:Object(n.jsx)("button",{type:"button",onClick:r,className:O.a.triangleButton,children:"restart"})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"col-xs-3",children:Object(n.jsx)("div",{className:O.a.startFinish,children:Object(n.jsx)("button",{type:"button",onClick:i,className:O.a.button,disabled:l,children:"Start"})})}),Object(n.jsx)("div",{className:"col-xs-9",children:Object(n.jsx)(g,{gameSize:t,gameDifficulty:s,handleGridSizeChange:j,handleDifficultyChange:d})}),Object(n.jsx)("span",{className:O.a.triangle,children:Object(n.jsx)("button",{type:"button",onClick:c,className:O.a.triangleButton,children:l?"close":"results"})})]})})})},p=c(2),_=c.n(p),N=function(e){var t=e.showResults;return Object(n.jsxs)("div",{className:"".concat(_.a.results," ").concat(t&&_.a.active),children:[Object(n.jsx)("h5",{className:_.a.heading,children:"Results"}),Object(n.jsxs)("table",{className:_.a.table,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"#"}),Object(n.jsx)("th",{children:"name"}),Object(n.jsx)("th",{children:"score"}),Object(n.jsx)("th",{children:"speed level"}),Object(n.jsx)("th",{children:"grid size"})]})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{className:_.a.resultList,children:[Object(n.jsx)("td",{children:"1"}),Object(n.jsx)("td",{children:"janios"}),Object(n.jsx)("td",{children:"22"}),Object(n.jsx)("td",{children:"44"}),Object(n.jsx)("td",{children:"42"})]}),Object(n.jsxs)("tr",{className:_.a.resultList,children:[Object(n.jsx)("td",{children:"1"}),Object(n.jsx)("td",{children:"janios"}),Object(n.jsx)("td",{children:"22"}),Object(n.jsx)("td",{children:"44"}),Object(n.jsx)("td",{children:"42"})]}),Object(n.jsxs)("tr",{className:_.a.resultList,children:[Object(n.jsx)("td",{children:"1"}),Object(n.jsx)("td",{children:"janios"}),Object(n.jsx)("td",{children:"22"}),Object(n.jsx)("td",{children:"44"}),Object(n.jsx)("td",{children:"42"})]}),Object(n.jsxs)("tr",{className:_.a.resultList,children:[Object(n.jsx)("td",{children:"1"}),Object(n.jsx)("td",{children:"janios"}),Object(n.jsx)("td",{children:"22"}),Object(n.jsx)("td",{children:"44"}),Object(n.jsx)("td",{children:"42"})]}),Object(n.jsxs)("tr",{className:_.a.resultList,children:[Object(n.jsx)("td",{children:"1"}),Object(n.jsx)("td",{children:"janios"}),Object(n.jsx)("td",{children:"22"}),Object(n.jsx)("td",{children:"44"}),Object(n.jsx)("td",{children:"42"})]}),Object(n.jsxs)("tr",{className:_.a.resultList,children:[Object(n.jsx)("td",{children:"1"}),Object(n.jsx)("td",{children:"janios"}),Object(n.jsx)("td",{children:"22"}),Object(n.jsx)("td",{children:"44"}),Object(n.jsx)("td",{children:"42"})]}),Object(n.jsxs)("tr",{className:_.a.resultList,children:[Object(n.jsx)("td",{children:"1"}),Object(n.jsx)("td",{children:"janios"}),Object(n.jsx)("td",{children:"22"}),Object(n.jsx)("td",{children:"44"}),Object(n.jsx)("td",{children:"42"})]}),Object(n.jsxs)("tr",{className:_.a.resultList,children:[Object(n.jsx)("td",{children:"1"}),Object(n.jsx)("td",{children:"janios"}),Object(n.jsx)("td",{children:"22"}),Object(n.jsx)("td",{children:"44"}),Object(n.jsx)("td",{children:"42"})]}),Object(n.jsxs)("tr",{className:_.a.resultList,children:[Object(n.jsx)("td",{children:"1"}),Object(n.jsx)("td",{children:"janios"}),Object(n.jsx)("td",{children:"22"}),Object(n.jsx)("td",{children:"44"}),Object(n.jsx)("td",{children:"42"})]}),Object(n.jsxs)("tr",{className:_.a.resultList,children:[Object(n.jsx)("td",{children:"1"}),Object(n.jsx)("td",{children:"janios"}),Object(n.jsx)("td",{children:"22"}),Object(n.jsx)("td",{children:"44"}),Object(n.jsx)("td",{children:"42"})]})]})]})]})},C=c(10),w=c.n(C),y=function(){return Object(n.jsxs)("div",{className:w.a.gameOver,children:[Object(n.jsx)("span",{className:w.a.gameOverGG,children:" GG"}),Object(n.jsx)("span",{className:w.a.gameOverText,children:"better luck next time"})]})},S=c(15),z=function(e){for(var t=[],c=[],n=1,s=0;s<e;s++){for(var a=0;a<e;a++)t.push({id:n,cell:0,isOpen:!1,haveFlag:!1}),n+=1;c.push(t),t=[]}return c},D=function(e,t,c){for(var n=e.rowI,s=e.colI,a=0,l=Math.max(n-1,0);l<=Math.min(n+1,t-1);l++)for(var i=Math.max(s-1,0);i<=Math.min(s+1,t-1);i++)"bomb"===c[l][i].cell&&(a+=1);return a},F=function e(t,c,n){var s=t.rowI,a=t.colI,l=Object(S.a)(n),i=D(t,c,l);if(l[s][a].isOpen=!0,0===i)for(var r=Math.max(s-1,0);r<=Math.min(s+1,c-1);r++)for(var j=Math.max(a-1,0);j<=Math.min(a+1,c-1);j++)"bomb"!==l[r][j].cell&&!1===l[r][j].isOpen&&e({rowI:r,colI:j},c,l);return l},G=c(14),I=c.n(G),M=!1,L=!1,k=!1,R=!1,T=function(){var e=Object(s.useState)(15),t=Object(r.a)(e,2),c=t[0],a=t[1],l=Object(s.useState)(3),i=Object(r.a)(l,2),d=i[0],o=i[1],b=Object(s.useState)(z(c)),O=Object(r.a)(b,2),u=O[0],x=O[1],m=Object(s.useState)(!1),f=Object(r.a)(m,2),g=f[0],p=f[1],_=function(e,t){var n=Object(j.cloneDeep)(u),s={rowI:e,colI:t};if(!u[e][t].haveFlag){if("bomb"===u[e][t].cell){var a=function(e,t){for(var c=Object(j.cloneDeep)(t),n=0;n<e;n++)for(var s=0;s<e;s++)"bomb"===c[n][s].cell&&(c[n][s].isOpen=!0);return c}(c,n);return L=!0,R=!0,void x(a)}if(k){var l=F(s,c,n);l[e][t].isOpen=!0,x(l)}else{var i=function(e,t,c){var n=Object(j.cloneDeep)(c);return n.forEach((function(e){for(var c=Object(j.random)(1,t),n=Object(j.sampleSize)(e,c),s=0;s<c;s++)n[s].cell="bomb"})),n[e.rowI][e.colI].cell=0,n}(s,Object(j.round)(c/d),n),r=function(e,t,c){for(var n=Object(j.cloneDeep)(c),s=e.rowI,a=e.colI,l=Math.max(s-1,0);l<=Math.min(s+1,t-1);l++)for(var i=Math.max(a-1,0);i<=Math.min(a+1,t-1);i++)"bomb"===n[l][i].cell&&(n[l][i].cell=0);return n}(s,c,i),o=function(e,t){for(var c=Object(j.cloneDeep)(t),n=0;n<e;n++)for(var s=0;s<e;s++)if(0===c[n][s].cell){var a=D({rowI:n,colI:s},e,c);c[n][s].cell=0===a?"empty":a}return c}(c,r),h=F(s,c,o);x(h),k=!0}}};return Object(n.jsxs)("div",{className:"conatainer",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-xs-12",children:[Object(n.jsx)(v,{handleStart:function(){return function(){var e=z(c);x(e),M=!M,k=!1,L=!1,R=!1}()},handleRestart:function(){return function(){var e=z(c);x(e),k=!1,L=!1,R=!1}()},gameOver:L,handleShowResults:function(){return p(!g)},handleGridSizeChange:function(e){return a(parseInt(e.target.value,10))},showResults:g,gameSize:c,isGameStarted:M,gameDifficulty:d,handleDifficultyChange:function(e){return o(parseInt(e.target.value,10))}}),Object(n.jsx)(N,{showResults:g})]})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-xs-12",children:M&&Object(n.jsxs)("div",{className:I.a.minesweeper,style:{maxWidth:"".concat(20*c,"px")},children:[u.map((function(e,t){return e.map((function(e,s){return Object(n.jsx)(h,{oneCell:e,hadleRightClick:function(e){return function(e,t,c){e.preventDefault();var n=Object(j.cloneDeep)(u);n[t][c].haveFlag=!n[t][c].haveFlag,x(n)}(e,t,s)},handleOpen:function(){return _(t,s)},isGridDisabled:R,gridSize:c},e.id)}))})),L&&Object(n.jsx)(y,{})]})})})]})},B=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(T,{})})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),a(e),l(e)}))};c(24),c(25);i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),E()}],[[26,1,2]]]);
//# sourceMappingURL=main.31d7c5df.chunk.js.map