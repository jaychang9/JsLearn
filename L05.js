/**
 * Created by haibao on 2015/12/17.
 */
var Person = function(name){
    console.log((JSON.stringify(arguments) )+arguments[0]);
    var self = this;
    self.name = name;
    self.say = function(){
        console.log(self.name+" say something.");
    };
};

var p = new Person("jay");
p.say();


var jay = {
    fullName : "jay chang",
    age :29,
    "middle-school":"No.1 Midell School",//����ܵı���Ҫ����˫���Ż����ţ���Ϊ������Ч�ı�����
    small_name:"jay"
};
console.log(jay["middle-school"]+","+jay.small_name);

//��������
jay.sex = "male";
jay["company"]="hclc";
console.log(jay);

//ɾ������
delete jay["sex"];
delete jay.age;
console.log(jay);

//���ĳһ�����Ƿ����
console.log(("name" in jay)+","+("fullName" in jay));

//�̳еõ�������
console.log("toString" in jay);

//Ҫ�ж�һ�������Ƕ�������ӵ�еģ������Ǽ̳еõ��ģ�������hasOwnProperty
console.log(jay.hasOwnProperty("fullName"));
console.log(jay.hasOwnProperty("toString"));
console.log("***********************************************8888")

for(var prop in jay){
    if(jay.hasOwnProperty(prop)) {
        console.log(prop + "=" + jay[prop]);
    }
}

var numArray = [4,5,'A','B'];
for(var index in numArray){
    console.log(index+"="+numArray[index]);
}

var x = 0;
var n = 99;
var count = 0;
while (n > 0) {
    x = x + n;
    n = n - 2;
    count ++;
}


console.log(x);
console.log(count);