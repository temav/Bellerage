'use strict';

// function sum(a) {

//     return function(b) {
//       return a + b; // берёт "a" из внешнего лексического окружения
//     };
//   }

// alert(sum(1)(2))

// let a = new Function('alert("oru nahuy")');
// a()
// let timerId = setInterval(() => alert('tick'), 2000);

// // остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 10000);
// five(plus(two()))
// window.onload = function () {
// let elem = document.getElementsByClassName('elem');
// elem.style.background = 'red';
// }
// document.body.style.background = 'red';

// let elem = document.querySelector('.elem');
// let elem_ = document.getElementsByClassName('elem');
// let elem = document.getElementsByName('elem')
// elem.style.background = "blue";

// document.body.style = {
//     background : 'red'
// };

document.body.style.background = 'dimgrey';
// document.body.style={"background" : 'dimgrey'};


let div_head = document.createElement('div');
div_head.className = 'header';
div_head.innerHTML = "<h1>Zdorova</h1>";
document.body.append(div_head);
// let elem = document.querySelector('.elem');
// // let body = document.getElementsByClassName('elem');e
// // let body = document.getElementsByName('body')[0];
// // let elem = body.getElementsByName('elem');
// elem.style.background = "blue";