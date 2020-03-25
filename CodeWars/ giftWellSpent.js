const buy = function(x, arr) {
  console.log(x);
  let result = arr.map(function(item, acc) {
    if (item + acc == x) return item;
  }, arr[0]);
  console.log(result);
};
buy(2, [1, 1]);
/*

buy(2,[1,1])       = [0,1]
buy(3,[1,1])       = null
buy(5,[5,2,3,4,5]) = [1,2]


tests:

describe("buy", function(){
  var randomInt = function(){
    return Math.round(Math.random() * 100);
  }
  var randomArray = function(n){
    var i, r = [];
    for(i = 0; i < n; ++i) r.push(randomInt());
    return r;
  }
  it("should return Nothing on an empty list", function(){
    Test.assertEquals(buy(randomInt(), []), null);
  });
  it("should return Nothing on a short list",function(){
    Test.assertEquals(buy(randomInt(), [randomInt()]), null);
  });
  it("should work for the examples", function(){
    Test.assertSimilar(buy(2,[1,1]), [0,1]);
    Test.assertSimilar(buy(3,[1,1]), null);
    Test.assertSimilar(buy(5,[5,2,3,4,5]), [1,2]);
    Test.assertSimilar(buy(5,[1,2,3,4,5]), [0,3]);
    Test.assertSimilar(buy(5,[0,0,0,2,3]), [3,4]);
  });
  it("should return the correct indices if there are any", function(){
    var arr, x, r, i;
    for(i = 0; i < 20; ++i){
      arr = randomArray(randomInt()), x = randomInt(), r = buy(x,arr.concat([]));
      if(r !== null)
        Test.assertEquals(x, arr[r[0]] + arr[r[1]]);
    }
  });
});
  */
