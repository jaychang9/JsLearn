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


//ʹ��Student����new�����Ķ������ǵ�ԭ�Ͷ������Student.prototype
console.log(jay.__proto__ === Student.prototype);
console.log(jack.__proto__ === Student.prototype);

//Student.prototype(��jay,jack��ԭ�Ͷ���)��constructor����ָ��Student����
console.log(jay.__proto__.constructor === Student);
console.log(Student.prototype.constructor === Student)


//�и�����jay��jack��sayHello�ǲ�һ����
console.log(jay.sayHello === jack.sayHello);

//Ҫ����sayHello�����ܹ���������ô��Ҫ��sayHello�����ŵ�jay��jack��ԭ�Ͷ�����,jay��jack��ԭ�Ͷ�����Student.prototype

//�޸ĺ�Ĵ���ŵ�L03.js
