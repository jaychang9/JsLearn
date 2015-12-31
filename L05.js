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
    "middle-school":"No.1 Midell School",//带横杠的必须要加上双引号或单引号，因为不是有效的变量名
    small_name:"jay"
};
console.log(jay["middle-school"]+","+jay.small_name);

//增加属性
jay.sex = "male";
jay["company"]="hclc";
console.log(jay);

//删除属性
delete jay["sex"];
delete jay.age;
console.log(jay);

//检测某一属性是否存在
console.log(("name" in jay)+","+("fullName" in jay));

//继承得到的属性
console.log("toString" in jay);

//要判断一个属性是对象自身拥有的，而不是继承得到的，可以用hasOwnProperty
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