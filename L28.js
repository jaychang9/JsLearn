/**
 * Created by haibao on 2015/12/22.
 */
var Student = {
    name:"student name",
    run :function(){
        console.log(this.name+" is running.");
    }
};

var xiaoming = {name:"xiaoming"};

xiaoming.__proto__=Student;


var Bird = {
  fly:function(){
      console.log(this.name+" is flying.");
  }
};

xiaoming.__proto__ = Bird;

xiaoming.fly();
console.log(Bird.isPrototypeOf(xiaoming));

console.log(xiaoming.__proto__ === Bird);//说明xiaoming的原型指向Bird
console.log(xiaoming.__proto__.__proto__ === Bird.__proto__);//说明xiaoming的上上级原型与Bird的原型一致


var arr  = [2,4,"11"];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);

console.log(Function.prototype);

console.log(Array.__proto__.__proto__=== Object.prototype);

function createStudent(name){
    var student = Object.create(Student);
    student.name = name;
    return student;
}

var jack = createStudent("Jack Ma");
console.log(JSON.stringify(jack));
jack.run();

console.log(jack.__proto__ === Student);


