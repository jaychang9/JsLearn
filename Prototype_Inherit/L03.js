/**
 * Created by haibao on 2015/12/25.
 */
/**
 * Created by haibao on 2015/12/25.
 */
function Student(name){
    this.name = name;
}

//Student函数与Student.prototype是两马事

Student.prototype.sayHello = function(){
    console.log(this.name+" say Hello World");
}

var jay = new Student("jay");
var jack = new Student("jack");


//现在我们可以看到jay跟jack的sayHello方法是一样的了，原因是当我们调用jay或jack的sayHello方法时，会先从jay,jack自身查有没有sayHello方法，当查不到时，
// 再查jay或jack的原型对象Student.prototype上有没有sayHello方法，找到了，则就使用Student.prototype上的sayHello方法
console.log(jay.sayHello === jack.sayHello);

jay.sayHello();

jack.sayHello();


//接下来在L04.js用一个createStudent来封装创建对象的细节