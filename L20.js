/**
 * Created by haibao on 2015/12/21.
 */
function createCounter(initial){
    var x = initial || 0;
    return function(){
        return x +=1;
    }
}

var calc = createCounter(1);
console.log(calc());
console.log(calc());
console.log(calc());


var Person = function(name){
    var self = this;
    self.name = name;
    self.getName = function(){
      return self.name;
    };
    self.setName = function(name){
        self.name = name;
    };
};


var p = new Person("jay");
p.setName("jack");
console.log(p.getName());