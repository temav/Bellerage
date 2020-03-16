'use strict';


// alert('Hellow world sost');

// let calculator = {
//   read : function() {
//   	this.a = Number(prompt('Wriate a',''));
//     this.b = Number(prompt('Wriate b',''));
//   },
//   sum : function() {
//   	return this.a+this.b;
//   },
//   mul : function() {
//   	return this.a*this.b;
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//     }
//   };

//   ladder
//   .up()
//   .up()
//   .up()
//   .down()
//   .up()
//   .down()
//   .showStep(); // 1

// let date = {
//     sec: 20,
//     day: 10,
//     month: 05,
// }

// date_1 = data;
// data_2 = data;
// alert(data_2 - data_1);

// let a = 'aaaa';
// a = a.length;
// alert(a);

// function User(name, asd) {
//     this.name = name;
//     this.age = asd;
//   }

// let user_1 = new User("Lol", 5);
// let user_2 = new User("Kek", 2);

// alert (user_1.name);
// alert (user_1.age);
// alert (user_2.name);
// alert (user_2.age);

// let obj = {}

// function A() { return obj; }
// function B() { return obj; }

// let a = new A;
// let b = new B;

// alert( a == b ); // true  
// function Calculator() {
//     this.sum = () => { return this.a + this.b; }
//     this.mul = () => { return this.a * this.b; }
//     this.read = () => { 
//         this.a = +prompt("write a", 0);
//         this.b = +prompt("write b", 0); 
//     }
// }
// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator(num) {
//     this.value = num;
//     this.read = () => {
//         this.value+= +prompt("+?",'');
//     };
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений


// function random(min, max) {
//     return Math.floor(Math.random()*(max-min+1) + min);
// }

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

// let str1 = "Hello \u00A9";

// // многострочная строка, созданная с использованием обратных кавычек
// let str2 = `Hello
// World`;

// alert(str1);
// alert(str2);

// alert( String.fromCodePoint(32));

// let ucFirst = function(str) {
//     let norm_str = str.charAt(0).toUpperCase();
//     norm_str += str.slice(1); 
//     return norm_str;
// }

// alert(ucFirst('sosa'));

// let checkSpam = function(str) {
//     let str_ = str.toLowerCase();
//     return (str_.includes("viagra") || str_.includes("xxx")) ? true : false;
// };

// alert(checkSpam('buy ViAgRA now') == true);
// alert(checkSpam('free xxxxx') == true);
// alert(checkSpam("innocent rabbit") == false);

// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         let new_str = str.slice(0, maxlength-1);
//         new_str += '…';
//         return new_str;
//     }
//     return str;
// };

// alert(truncate("Всем привет!", 20) == "Всем привет!");
// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20).length);


// function extractCurrencyValue(str) {
    
//     return str.length>1 ? +str.slice(1) : 0;
// };

// alert(extractCurrencyValue('$120')==120);

// let array = [];

// for(let i = 0; i < 10; ++i) {
//     array.push(i);
//     if(i%2)
//         array.shift();
// }
// alert(array);

// let array = new Array(5);
// let count = 0;
// for (let i = 1; i <= array.length; ++i) {
//     array[array.length-i] = i;
// }
// alert(array.sort());

// let styles = ['jojo', 'naruto'];
// alert(styles);
// styles.push('saske');
// alert(styles);
// styles[Math.floor((styles.length-1)/2)] = 'shaman king';
// alert(styles.shift());
// alert(styles);
// styles.unshift('50cent');
// styles.unshift('eminem');
// alert(styles);

// function getMaxSubSum(arr) {
//     let sum = 0;
//     let rightArray = [];
//     // let leftArray = [];
//     // for (let i = 0; i < arr.length; ++i) {
//     //     let sub_sum = 0;
//     //     for (let j = 0; j < arr.length; ++j)
//     //         sub_sum += arr[j];
//     //         if(sub_sum > sum) {
//     //             sum = sub_sum
//     //         }
//     // }
//     // for (let i = 0; i < arr.length; ++i) {
//     //     let rightValue = arr.pop();
//     //     if ((rightValue > 0) || (getSum(rightArray) > rightValue)) {
//     //         rightArray.push(rightValue);
//     //     }
        
//     // }
//     // if(arr.length < 2) {
//     //     if (arr[0] > 0)
//     //         return sum=arr[0];
//     // }
//     // while(arr.length>0) {
//     //     let rightValue = arr.pop();
//     //     if ((rightValue > 0) || (getSum(rightArray) > rightValue)) {
//     //         rightArray.push(rightValue);
//     //     }
//     //     let leftValue = arr.shift();
//     //     if ((leftValue > 0) || (getSum(leftArray) > leftValue)) {
//     //         leftArray.push(leftValue);
//     //     }
//     // }
//     // let leftSum = getSum(leftArray);
//     // let rightSum = getSum(rightArray);
//     // if((leftSum > 0) && (rightSum > 0)) {
//     //     sum = leftSum + rightSum;
//     // }
//     // else {
//     //     sum = Math.max(leftSum, MaxSum)
//     // }
//     // return sum;
//     // if(arr.length < 2) {
//     //     if (arr[0] > 0)
//     //         return sum=arr[0];
//     // }
//     while(arr.length>1) {
//         let rightValue = arr.pop();
//         if ((rightValue > 0) || (getSum(rightArray) > -rightValue)) {
//             rightArray.push(rightValue);
//         }
//         else {
//             rightArray = [];
//         }
//     }
//     let init = arr[0];
//     if (init < 0)
//         init = 0;
//     alert(rightArray);
//     return getSum(rightArray) + init;
// }

// function getSum(arr) {
//     let sum = 0;
//     for (let k of arr) {
//         sum += k;
//     }
//     return sum;
// }

// function getSlice(arr, start, end) {
//     let arrr = [];
//     for (let i = start; i < end; ++i)
//         arrr.push(arr[i]);
//     return arrr;
// }
// function getMaxSubSum(arr) {
//     let sum = 0;
//     let a = 0;
//     for (let i = 0; i <= arr.length; ++i) {
//         for (let j = 0; j <= arr.length; ++j) {
//             a = getSum(getSlice(arr, i ,j))
//             if(a > sum) {
//                 sum = a;
//             }
//         }
//     }
//     return sum;
// }

// let arrrr = [-1, 2, 3, -9, 11];

// alert(getMaxSubSum([-1, -2, -3]));

// let arr = [1, 2];

// // создать массив из: arr и [3,4]
// alert( arr.concat(arr, arr) );
// alert( arr);

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
  
// //   let user = () => {alert("aaa")};
// //   user();
//   let user = users.filter(item => item.id >= 1);
  
//   alert(user.name); // Вася

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths);

// let str = "QWEeer tyyu o8io9 3424232  ws";
// let str_1 = "qwerty";
// function get4Q(str) {
//     alert(str.split(" ").map(item => item.length > 4 ? (item.split('').reverse().join('')) : item).join(' '));
// }

// get4Q(str);
// alert(str.split(' '));
// alert(str_1.split('').reverse().reduce((prev,curr) => prev+=curr));

// let arr = [ 1, 2, 15 ];

// arr.sort(function(a, b) { return b - a; });

// alert(arr);  // 1, 2, 15

// function camelize(str) {
//     alert(str.split('-').map((item, index) => index != 0 ? item.charAt(0).toUpperCase()+item.slice(1) : item).join(''));
// };

// camelize("-webkit-transition");

// function z(item, a, b) { 
//     return (item>=a && item <=b);
// }

// function filterRange(arr, a, b) {
//     return arr.filter((item, index, array) => { if (item < a || item > b) array.splice(index, 1)});
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( arr ); 

// let bb = (array, index) => {
//     return array.splice(index, 1);
// };

// alert(bb(arr,1));
// alert(arr);

// function Calculator() {
//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b,
//       };

//     this.calculate = (str) => {
//         let arr = str.split(' ');
//         let a = +arr[0];
//         let b = +arr[2];
//         let oper = arr[1];

//         if (!this.methods[oper] || isNaN(a) || isNaN(b)) {
//             return NaN;
//           }
//         return this.methods[oper](a, b);
//     };
//     this.addMethod = (name, func) => {
//         this.methods[name] = func;
//     };
// };

// let powerCalc = new Calculator;

// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// alert( powerCalc.calculate("3 + 7") );

// let result = powerCalc.calculate("2 ** 10");

// alert(result)

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert( names ); // Вася, Петя, Маша
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(item => {
//     return {
//         fullName : item.name + ' ' + item.surname,
//         id : item.id,
//     }
// });

// alert( usersMapped[0].id) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин


// function sortByAge(arr_) {
//     return arr_.sort((a, b) => {return a.age-b.age})
// }

// let vasya = { name: "Вася", age: 250 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя


// function shuffle(arr) {
//     let indexes = arr.map(index => index);
//     for ()
// }

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// ...


// function unique(arr) {
//     let new_arr = arr.sort();
//     for (let i = arr.length - 1; i > 0; --i) {
//         if (new_arr[i]==new_arr[i-1])
//             new
//     }
//     // let uniq_ind = [];
//     // let flag  = 0;
//     // for (let i = 0; i < arr.length; ++i) {
//     //     flag = 0;
//     //     for(let j = 0; j < arr.length; ++j) {
//     //         if(arr[i] == arr[j]) {
//     //             if (i == j)
//     //                 continue;
//     //             else 
//     //                 flag = 1;
//     //         }
//     //     }
//     //     if (flag == 0)
//     //         uniq_ind.push(i);
//     // }
//     // alert(uniq_ind);
//     // arr.forEach(function (item_1, array) {
//     //     alert(array.filter(function(item) {return(item_1 == item)}));
//     //     return 0;
//     // });
// };
  
//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];
//   unique(strings) ;
//   alert( unique(strings) ); // кришна, харе, :-O
// alert( strings.filter((item) => item == item) );

// let  a = 0;
// let brack_2 = (b) => {
//     let brack_1 = (a) => {
//         alert(a);
//     }
// }

// // let brack_2 = brack_1(a);
// brack_2(4);
 
// let a;

// function brack_2 (a) {
//     alert("brack2");
// }
// function brack_1 (b) {
//     alert("brack1");
// }

// function brack_1 (b) {
//     function brack_2 (a) {
//         alert(b+a);
//     }
// }

// brack_1 = brack_2(a);

// brack_1(2);

// let set_1 = new Set();

// let Sum = (a) => {
//     (b) => {
//         return a+b;
//     }
// }

// let a = 2;
// let b = 5;

// function brack_2 (a) {
//     alert(a);
// }
// function brack_1 (b) {
//     alert(b);
// }

// let ff = brack_1(a);

// alert(typeof(ff));
// let Sum = (a, (b) => {
//     return a+b;
// })

// alert(typeof(brack_2(3)));

// alert(Sum(3(2)));

// function songDecoder(str) {
//     return str.split("WUB").filter(item => item!="").join(' ');
// };

// alert(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));

// function highAndLow(numbers) {
//     return `${Math.max.apply(Math, numbers.split(' '))} ${Math.min.apply(Math, numbers.split(' '))}` 
// }

// alert(highAndLow("1 2 3 4 5"))

// function tribonacci(signature,n){
//     let array = signature.slice(0, n);
//     let k = 3;
//     while(n > 3) {
//         array.push(array[k-1]+array[k-2]+array[k-3])
//         --n;
//         ++k;
//     }
//     return array;
// }

// let array = Array.from([1,2,3,4]);

// alert(tribonacci([1,1,1],1))//==[1,1,1,3,5,9,17,31,57,105])

// function getSum( a,b )
// {
//     let sum = 0;
//     if ( b < a) {
//         [b, a] = [a, b];
//     }
//     if (a == b)
//         return a;
//     for(let k = a; k <= b; ++k) {
//         sum += k; 
//     }
//     return sum;
// };

// function getSum( a,b )
// {
//     return (Math.abs(a-b)+1)*0.5*(a+b);
// };

// alert(getSum(-1,2));
// let number = function(busStops) {
//     let array = busStops.join(',').split(',');
//     // return array.filter(index => index%2==0).reduce((z, x) => z+x)-array.filter(index => index%2==1).reduce((z, x) => z+x)

//     return array.filter(index => !(index%2)).reduce((z, x) => +z+(+x))-array.filter(index => index%2).reduce((z, x) => +z+(+x));
// }

// let number = function(busStops) {
//     let res = 0;
//     for (let k of busStops) {
//         res += (k[0]-k[1]);
//     }
//     return res;
// }

// alert(number([[10,0],[3,5],[5,8]]))

// function zero(a) {
//     if (a!=isNaN) {
//         return 0
//     }
//     alert('a isNana');
// }

// function num(a, number) {
//     if(a == null) {
//         return number;
//     }
//     else {
//         return a[1](number,a[0]);
//     }
// }

// function zero (a) {
//     return num(a, 0);
// }

// function one(a) {
//     return num(a, 1);
// }
// function two(a) { 
//     return num(a, 2);
// }
// function three(a) {
//     return num(a, 3);
// }
// function four(a) {
//     return num(a, 4);
// }
// function five(a) {
//     return num(a, 5);
// }
// function six(a) {
//     return num(a, 6);
// }
// function seven(a) {
//     return num(a, 7);
// }
// function eight(a) {
//     return num(a, 8);
// }
// function nine(a) {
//     return num(a, 9);
// }

// function plus(a, b) {
//     if(b == null) {
//         return [a, plus];
//     }
//     else {
//         return a+b;
//     }
// }
// function minus(a, b) {
//     if(b == null) {
//         return [a, minus];
//     }
//     else {
//         return a-b;
//     }
// }

// function times(a, b) {
//     if(b == null) {
//         return [a, times];
//     }
//     else {
//         return a*b;
//     }
// }
// function dividedBy(a, b) {
//     if(b == null) {
//         return [a, dividedBy];
//     }
//     else {
//         return Math.floor(a/b);
//     }
// }

// alert(three(times(nine())));

// alert([,,,].length);
// let schedule = `{
//     "meetups": [
//       {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//       {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//     ]
//   }`;
  
//   schedule = JSON.parse(schedule, function(key, value) {
//     if (key == 'date') return new Date(value);
//     return value;
//   });
  
//   alert( schedule.meetups[1].date.getDate() ); // 18 - отлично!

function Sum(a) {
    return function(b) {
        return a+b;
    };
}

alert(Sum(a)(b))

// function Sum(a, +function() {
//     alert("Скобки вокруг функции");
//   }())