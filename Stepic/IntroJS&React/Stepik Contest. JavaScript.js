var a = 10;
var b = 20;
var myobject = {
 a: 2, 
 b: 4,
 sum1: function(){
      return (a + b);
  },
  sum2: function(){
     return (myobject.a + myobject.b);
  },
 sum3: function(){
     return (this.a + this.b);
  }
};
console.log(myobject.sum1());
console.log(myobject.sum2());
consile.log(myobject.sum3());

////////// new task

var P = function (num, summand){
    this.num = num;
    this.plus = function(){
      this.num = this.num + summand
    }  
  }
  
  var G = function(x1,x2){
    this.pl = new P(x1,x2)
  }
  
  var g1 = new G (2,3);
  var Y1 = g1.pl.num;
  
  g1.pl.plus();
  var Y2 = g1.pl.num;
  
  g1.pl.plus();
  var Y3 = g1.pl.num;

  console.log ("Y1, Y2, Y3"); // 2,5,8

///////////////////// new task

var Pile = function (num, summand, factor) {
  this.num = num;
  this.plus = function () {
      summand;
  }
  this.multiply = function () {
      
  }
  this.gameOver = function () {
    if(N1 + N2 >= N) {
    return true; 
    } else return false;
  }
}

var Game = function (N1, N2, X1, X2, N) {
this.Pile1 = new Pile ()
}