/**
 * Created by haibao on 2015/12/18.
 */
function getAge(){
    console.log(this);
    return new Date().getFullYear()-this.birth;
}

var jay = {
    birth:1987,
    age:getAge
};

//console.log(jay.age());
//console.log(getAge());

var fn = jay.age;

console.log(fn());

//或者用apply方法，指明this的指向
console.log(getAge.apply(jay,[]));
//也可以用call方法
console.log(getAge.call(jay,null));


//对于普通函数调用apply,call通常将第一个参数写成null即可
console.log(Math.abs.call(null,-4));
console.log(Math.abs.apply(null,[-4]));