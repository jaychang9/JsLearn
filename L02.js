'use strict'
var arr = ["abc",1,"q",null,true,[11,"bc",null],true,"1"];
arr.length = 10;

console.log(arr.pop());

console.log(arr.pop());

console.log(arr.length);

console.log(arr.pop());


console.log(arr.slice(1,4)+" after slice "+arr);


var brr = arr.slice();
console.log([].pop());//¿ÕÊý×épop·µ»Øundefined

console.log(brr.shift());

console.log(brr);

console.log(brr.unshift("jay"));
console.log(brr);


brr[12] = "Jack Ma";

console.log(brr);


console.log(brr.indexOf("jay"));


console.log(brr);

arr.reverse();
console.log(arr);



