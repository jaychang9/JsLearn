/**
 * Created by haibao on 2015/12/21.
 */
'use strict';
function* next_id(){
    var nextId = 1;
    var count = 0
    while (count ++ < 100) {
        yield  nextId;
        nextId++;
    }
    return nextId;
}

console.log((new Boolean(true)) === true);

console.log(typeof String("sdf"));
console.log(typeof Number("222"));
console.log(typeof Boolean("false2"));

console.log(Array.isArray([]));

//判断全局变量是否存在

var globalVar = "abc";

console.log(typeof window.globalVar === "undefined");




