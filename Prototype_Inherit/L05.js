/**
 * Created by haibao on 2015/12/25.
 */
"use strict";





var People = function(props){
    console.log("invoke People method");
    console.log("is Student  ? "+(this instanceof Student) +",is People ? "+(this instanceof People));
    this.name = props.name || "anonymous";
    this.age = props.age || 20;
}

People.prototype.say = function(){
  console.log(this.name+" say Hello.");
};

var Student = function(props){
    People.call(this,props);
}

var F = function () {
};

F.prototype = People.prototype;

Student.prototype = new F();
Student.prototype.constructor = Student;



Student.prototype.learn = function(){
    console.log(this.name+" is learning.");
}

var jay = new Student({name:"jay",age:29});
console.log(jay.__proto__ === Student.prototype);
console.log(jay.__proto__.__proto__  === People.prototype);
jay.say();
jay.learn();