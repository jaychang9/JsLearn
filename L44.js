/**
 * Created by haibao on 2015/12/29.
 */
"use strict";
var _ = require("underscore");


var obj = {
    name:"jaychang",
    age :29,
    address:"Net Address"
};


var rst1 = _.map(obj,function(value,key){
     var obj ={};
    obj[key] = value;
    return obj;
});

console.log(rst1);
var rst2 = _.mapObject(obj,function(value,key){
    return value+" haha";
});
console.log(rst2);


//every,some
var arr = [3,5,9,11,7];

console.log(_.every(arr,(x) => x >= 3));
console.log(_.every(arr,(x) => x >= 5));

console.log(_.some(arr,(x)=> x > 9));
console.log(_.some(arr,(x)=> x > 11));


obj = {
    name: 'bob',
    school: 'No.1 middle school',
    address: 'xueyuan road'
};

var check1 = _.every(obj,function(v,k){
    return (k && k === k.toLowerCase()) && (v && v === v.toLowerCase());
});
console.log(check1);

console.log("max="+_.max(arr));
console.log("min="+_.min(arr));

console.log(_.max([]));
console.log(_.min([]));

//如果集合是Object只作用于value
obj = {a:23,b:77,c:11};
console.log(_.max(obj));


var score = [22,33,88,90,77,60];

var rst = _.groupBy(score,function(x){
    if(x < 60){
        return "C";
    }else if(x >= 60 && x < 90){
        return "B";
    }else{
        return "A";
    }
});

console.log(rst);

console.log(_.shuffle(['A','B',1,2,3,4,5,6,7]));
