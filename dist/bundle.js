!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=4)}([function(t,n,e){var r=e(1);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};e(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(2)(!1)).push([t.i,"body,\nhtml {\t\n  height: 100%;\t\n  width: 100%; \n}\n.container {\n\tmargin : 0 auto;\n\twidth: 80%;\n}\nheader {\n\tdisplay: flex;\n\theight: 100px;\n\twidth: 100%;\n}\n.msgClass {\n\tbackground: pink;\n\theight: 50px;\n\tmargin : 0 auto;\n\ttext-align: center;\n\twidth : 450px;\n}\n.container1 {\n  height: 550px;\n  margin: 30px auto;\t\n  position: relative; \n  width: 1200px; \n}\n.board  {\n\tdisplay : flex;\n}\n\n.board1, .board2 {\n  background: rgb(40,80,60);\n  background: rgba(40,80,60,1);\n  background-size: cover;\n  height: 320px;\n  overflow: hidden;\n  position: relative;\t\n  width: 320px;\t\n}\n\n.board1 {\t\n  left : 50px;\n}\n\n.board2 {\t\n  left : 315px;\n}\n\n.sqr {\n\tfloat : left;\n\tfont-size: 50px;\n\theight: 30px;\n\twidth : 30px;\t\n}\n.sqr {\n\tborder: 1px solid #DDD;\n}\n.classButtons{\n\theight: 420px;\n\tleft : 375px;\n\tposition : absolute;\n\ttop : 40px;\n\twidth : 260px;\n}\n.start {\n\tbackground: rgb(40,80,60);\n    background: rgba(40,80,60,1);\n\tcolor : white;\n\theight: 50px;\n\tleft : 30px;\n\tmargin : 0 auto;\n\topacity: 1;\n\tposition : relative;\n\ttop : 50px;\t\n\twidth :200px;\n}",""])},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(a=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(s," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[e].concat(i).concat([o]).join("\n")}var a,u,s;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2],"{").concat(e,"}"):e})).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<t.length;a++){var u=t[a];null!=u[0]&&r[u[0]]||(e&&!u[2]?u[2]=e:e&&(u[2]="(".concat(u[2],") and (").concat(e,")")),n.push(u))}},n}},function(t,n,e){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}();function u(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):e.push(r[a]={id:a,parts:[u]})}return e}function s(t,n){for(var e=0;e<t.length;e++){var r=t[e],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(g(r.parts[a],n))}else{for(var u=[];a<r.parts.length;a++)u.push(g(r.parts[a],n));o[r.id]={id:r.id,refs:1,parts:u}}}}function c(t){var n=document.createElement("style");if(void 0===t.attributes.nonce){var r=e.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(e){n.setAttribute(e,t.attributes[e])})),"function"==typeof t.insert)t.insert(n);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,d=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function p(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function h(t,n,e){var r=e.css,o=e.media,i=e.sourceMap;if(o&&t.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,m=0;function g(t,n){var e,r,o;if(n.singleton){var i=m++;e=f||(f=c(n)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=c(n),r=h.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=u(t,n);return s(e,n),function(t){for(var r=[],i=0;i<e.length;i++){var a=e[i],c=o[a.id];c&&(c.refs--,r.push(c))}t&&s(u(t,n),n);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var p=0;p<d.parts.length;p++)d.parts[p]();delete o[d.id]}}}}},function(t,n,e){"use strict";e.r(n);var r;e(0);function o(t,n){this.player1=t,this.player2=n,this.turn=this.player1.name,this.hit=!1,this.humainTurn=function(){for(var t=this,n=document.querySelector("#board2-container").querySelectorAll(".sqr"),e=0;e<n.length;e++)n[e].addEventListener("click",(function(n){var e=n.target.id.replace("board2","").split("")[0],o=n.target.id.replace("board2","").split("")[1];if(!t.hit&&t.player2.board.receiveAttack(e,o)){var u=document.getElementById(n.target.id);if(t.player2.board.grid[e][o].ship?u.style.backgroundColor="red":(u.style.backgroundColor="blue",t.hit=!0,t.turn=t.player2.name),t.player2.board.allShipsSunk())console.log(t.player1.name," you won!"),i("Humain You Won !!! ",1),t.hit=!0,clearInterval(r),document.getElementById("buttonStart").addEventListener("click",a)}}))},this.computerTurn=function(){var t=this.player2.randomPlay(this.player1.board.grid),n=t.join(""),e=document.getElementById("board1"+n);this.player1.board.grid[t[0]][t[1]].ship?e.style.backgroundColor="red":e.style.backgroundColor="blue",this.player1.board.allShipsSunk()&&(i("Computer You Won !!! ",1),this.hit=!0,clearInterval(r)),this.turn=this.player1.name},this.startGame=function(){var t=this;r=setInterval((function(){"Humain"===t.turn?(t.hit=!1,i("Humain turn ",1),t.humainTurn()):(i("Computer turn ",2),t.computerTurn())}),1500)}}var i=function(t,n){document.getElementById("messag").getElementsByTagName("p")[0].innerHTML=t;var e=document.querySelector("#board1-container"),r=document.querySelector("#board2-container");1==n?(e.style.opacity="0.5",r.style.opacity="1"):(r.style.opacity="0.5",e.style.opacity="1")},a=function(){alert("please reload the game")};function u(t,n){this.name=t,this.board=n,this.randomPlay=function(t){var n,e,r=!0;if("Computer"===this.name)for(;r;)if(n=Math.floor(Math.random()*Math.floor(9)),e=Math.floor(Math.random()*Math.floor(9)),!t[n][e].hit)return r=!1,[n,e]}}function s(){this.grid=Array.from(Array(10),(function(){return Array.from(Array(10),(function(){return{hit:!1,ship:null}}))})),this.nbrShip=0,this.placeShip=function(t,n){var e=this;this.nbrShip+=1,t.setPositions(n),n.map((function(n){e.grid[n[0]][n[1]]={ship:t,hit:!1}}))},this.receiveAttack=function(t,n){return!this.grid[t][n].hit&&(this.grid[t][n].hit=!0,null!=this.grid[t][n].ship&&(this.grid[t][n].ship.hit(t,n),this.grid[t][n].ship.isSunk()&&(this.nbrShip-=1)),!0)},this.allShipsSunk=function(){return!this.nbrShip}}var c=function(t){var n=t,e=[];return{health:n,hit:function(t,n){var r=e.findIndex((function(e){return e.x==t&&e.y==n}));-1!=r&&(e[r].hit=1)},isSunk:function(){for(var t=0,r=0;r<e.length;r++)e[r].hit&&(t+=1);return n===t},getPositions:function(){return e},setPositions:function(t){return t.map((function(t){e.push({x:t[0],y:t[1],hit:0})})),e},positions:e}},l=[[[0,9]],[[9,9]],[[1,2],[1,3]],[[4,1],[5,1],[6,1]],[[8,3],[8,4],[8,5],[8,6]],[[5,4],[5,5],[5,6],[5,7],[5,8]]],d=[[[0,0]],[[9,0]],[[0,3],[1,3]],[[4,1],[5,1],[6,1]],[[8,3],[8,4],[8,5],[8,6]],[[1,7],[2,7],[3,7],[4,7],[5,7]]],p=function(){for(var t=document.getElementById("board1-container"),n=document.getElementById("board2-container"),e=0;e<10;e++)for(var r=0;r<10;r++){var o=document.createElement("div");o.classList.add("sqr"),o.id="board1".concat(e).concat(r),t.appendChild(o);var i=document.createElement("div");i.classList.add("sqr"),o.style.border="1px solid #DDD;",i.id="board2".concat(e).concat(r),n.appendChild(i)}},h=function(){p();for(var t=0;t<l.length;t++){l[t].map((function(t){document.getElementById("board1"+t[0].toString()+t[1].toString()).style.backgroundColor="green"}))}},f=function(){var t=document.getElementsByClassName("sqr");if(t.length>0){var n=document.getElementById("board1-container"),e=document.getElementById("board2-container");n.style.opacity="1",e.style.opacity="1";for(var r=0;r<t.length;r++)t[r].style.removeProperty("background-color");h()}};p(),h(),document.getElementById("buttonStart").addEventListener("click",(function t(){f(),document.getElementById("buttonStart").removeEventListener("click",t);var n=new s;l.map((function(t){var e=c(t.length);n.placeShip(e,t)}));var e=new u("Humain",n),r=new s;d.map((function(t){var n=c(t.length);r.placeShip(n,t)})),new o(e,new u("Computer",r)).startGame()}))}]);