/**
 * Created by haibao on 2015/12/18.
 */
function fx(x){
    return x*x;
}

function fy(x1,x2){
    console.log("x1="+x1+",x2="+x2);
    return x1+x2;
}

function fz(x1,x2){

    return x1*10+x2;
}

var arr = [1,2,3,4,5,6];

console.log(arr.reduce(fy));

console.log(arr.map(fx));

console.log(arr.reduce(fz));

var s = "123456";
console.log(s.split(""));

console.log('1'.charAt(0));