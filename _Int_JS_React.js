// course Introduction to JavaScript and React on Stepic
// Handling a Variable Number of Arguments: function range...

function max(...arr) {
  return Math.max(...arr);
};

function min(...arr) {
  return Math.min(...arr);
 };

 function range (...arr) {
  if (arr.length == 0) {
  	return 0;
  } else {
  	return max(...arr) - min(...arr); 
  }
 };

 // map, array and higher ordr functions:

 function businessNamesAndRatings (apiResult) {
    var nArr = apiResult.map(function(arr) {
    	return arr.name, arr.rating;
    });
    return nArr;
 //   return apiResult.map (function () rating name)
 }