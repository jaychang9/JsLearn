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

//������apply������ָ��this��ָ��
console.log(getAge.apply(jay,[]));
//Ҳ������call����
console.log(getAge.call(jay,null));


//������ͨ��������apply,callͨ������һ������д��null����
console.log(Math.abs.call(null,-4));
console.log(Math.abs.apply(null,[-4]));