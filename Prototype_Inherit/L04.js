/**
 * Created by haibao on 2015/12/25.
 */

"use strict";

function Student(props){
    this.name = props.name || "anonymous";
    this.grade = props.grade || 1;
}

Student.prototype.sayHello = function(){
  console.log(this.name+" say Hello World,grade = "+this.grade);
};

function createStudent(props){
    var s  = new Student(props || {});
    return s;
}

var jay = createStudent({name:"jay"});

jay.sayHello();


var jack = createStudent({});

jack.sayHello();

var jerry = createStudent({name:"jerry",grade:2});

jerry.sayHello();


function Cat(name) {
    this.name = name;
}

Cat.prototype.say = function(){
    console.log(Cat.prototype);
    console.log(this);
    return "Hello, "+this.name+"!";
}

// ≤‚ ‘:
var kitty = new Cat('Kitty');
var doraemon = new Cat('duolaameng');
console.log(kitty.say());

