/**
 * Created by haibao on 2015/12/16.
 */
'use strict';
var x = "a";
var x = 1;
console.log(x);
var person = {
  "name":"Jay Chang",
    name:"Jack Ma",
    name:'Jerryme Lin',
   age:29,
   "sex":"male",
   say:function(a){
      console.log(this.name+",is saying something "+a);
  }
};

person.say("xx","yy");
console.log(person.sex+","+person.age)

console.log("\"I'm Ok \\ '\" \x4a\x61\x79 \x43\x68\x61\x6e\x67\t\u5f20\u6d01");
var str = "I'm a string";
str[0] = 'Y';
console.log(str.toUpperCase()+","+str+","+str[0]);