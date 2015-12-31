/**
 * Created by haibao on 2015/12/18.
 */
var arr = ['adam', 'LISA', 'barT'];

var arr2 = arr.map(function(x){
    return x.substr(0,1).toUpperCase()+ x.substr(1).toLowerCase();
});


console.log(arr2);


