/**
 * Created by haibao on 2015/12/25.
 */
/**
 * Created by haibao on 2015/12/25.
 */
function Student(name){
    this.name = name;
}

//Student������Student.prototype��������

Student.prototype.sayHello = function(){
    console.log(this.name+" say Hello World");
}

var jay = new Student("jay");
var jack = new Student("jack");


//�������ǿ��Կ���jay��jack��sayHello������һ�����ˣ�ԭ���ǵ����ǵ���jay��jack��sayHello����ʱ�����ȴ�jay,jack�������û��sayHello���������鲻��ʱ��
// �ٲ�jay��jack��ԭ�Ͷ���Student.prototype����û��sayHello�������ҵ��ˣ����ʹ��Student.prototype�ϵ�sayHello����
console.log(jay.sayHello === jack.sayHello);

jay.sayHello();

jack.sayHello();


//��������L04.js��һ��createStudent����װ���������ϸ��