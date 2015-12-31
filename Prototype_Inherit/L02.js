/**
 * Created by haibao on 2015/12/25.
 */
function Student(name){
    this.name = name;
    this.sayHello = function(){
        console.log(this.name+" say Hello World!");
    }
}

var jay = new Student("jay");
var jack = new Student("jack");


//使用Student函数new出来的对象，它们的原型对象就是Student.prototype
console.log(jay.__proto__ === Student.prototype);
console.log(jack.__proto__ === Student.prototype);

//Student.prototype(即jay,jack的原型对象)的constructor属性指向Student函数
console.log(jay.__proto__.constructor === Student);
console.log(Student.prototype.constructor === Student)


//有个问题jay跟jack的sayHello是不一样的
console.log(jay.sayHello === jack.sayHello);

//要想让sayHello方法能够被共享，那么就要将sayHello方法放到jay与jack的原型对象上,jay与jack的原型对象是Student.prototype

//修改后的代码放到L03.js
