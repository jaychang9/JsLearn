/**
 * Created by haibao on 2015/12/18.
 */
function string2int(s) {
    if(s.length === 1){return (s.charAt(0)-'0')};
    var arr = [];
    for(var i = 0 ; i < s.length ; i ++){
        arr.push(s.charAt(i));
    }
    return arr.reduce(function(x,y){
        console.log("x="+x+",y="+y);
        return (x-'0')*10+(y-'0');
    });
}

//console.log(string2int("12345"));
console.log(typeof string2int("1"));
//console.log(string2int("12300"));

