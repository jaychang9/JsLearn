/**
 * Created by haibao on 2015/12/22.
 */
var a = {};
console.log(a.prototype);


var b = function(){};
b.prototype = Array.prototype;

console.log(b.prototype);


var c = "Hello";
console.log(c.prototype);

//JSON对象，字符串对象没有原型

function f1(){
    console.log("Hello");
}

var f2 = function(){
    console.log("Hello");
}


var f3 = new Function("console.log(\"Hello\")");


console.log((typeof f1)+","+(typeof f2)+",  "+(typeof f3));

console.log(typeof {});

console.log(typeof Number);
console.log(typeof String);
console.log(typeof Object);