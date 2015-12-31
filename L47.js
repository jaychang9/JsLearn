/**
 * Created by haibao on 2015/12/29.
 */
var _ = require("underscore");


var Student = function(name,age){
    this.name = name;
    this.age = age;
    this.say = function(){console.log(this.name+" say hello.")};
};


Student.prototype.school = "middle school";

var jay = new Student("jay",29);


console.log(jay.__proto__ === Student.prototype);


console.log(jay);

console.log(_.keys(jay));

console.log(_.allKeys(jay));


console.log(_.values(jay));


var obj = {a:1,b:2,c:3};

console.log(_.mapObject(obj,(v,k)=>v+100));


console.log(_.invert(obj));


console.log(_.extend({name:"jay",age:29},{schoold:"No1 Middle School"},{favorite:"running..."}));

var obj = {name:"jay",age:29};

var parent= new Object();
Object.prototype = parent;
Object.prototype.university = "NIT";
console.log(obj.__proto__ === Object.prototype);

console.log(_.extend(obj,{schoold:"No1 Middle School"},{favorite:"running..."}));


console.log(_.extendOwn(obj,{schoold:"No1 Middle School"},{favorite:"running..."}));
var cloneObj;
console.log(cloneObj = _.clone(obj));
console.log(cloneObj === obj);


var jay = {
    name :"Jason",
    courses :['Chinese','Math']
}

var lucy = _.clone(jay);


console.log(jay === lucy);
console.log(jay.courses === lucy.courses);


var o1 = { name: 'Bob', skills: { Java: 90, JavaScript: 99 }};
var o2 = { name: 'Bob', skills: { JavaScript: 99, Java: 90 }};

console.log(_.isEqual(o1,o2));


o1 = [1,"22",["jack"],{age:27,name:"jason"}];
o2 = [1,"22",["jack"],{name:"jason",age:27}];
console.log(o1 === o2);
console.log(_.isEqual(o1,o2));


console.log(_.filter(_.map([1,4,9,25],(x)=>Math.sqrt(x)),(x)=>x % 2 === 1));


console.log(_.chain([1,4,9,25]).map(Math.sqrt).filter(x=> x%2 === 1).value());