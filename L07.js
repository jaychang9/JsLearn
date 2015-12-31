/**
 * Created by haibao on 2015/12/17.
 */
function abs(num){
    for(var i = 0 ; i < arguments.length ; i ++){
        console.log(arguments[i]);
    }
    console.log("*******"+(typeof num));
    console.log(undefined === undefined);
    if(num !== "number"){
        throw "Not a Number";
    }
    if(num >= 0){
        return num;
    }else{
        return -num;
    }
}


console.log(abs(-10,"abc","bde"));
console.log(abs(23));;
console.log(abs());;
console.log(abs("aa"));;


console.log(undefined);
