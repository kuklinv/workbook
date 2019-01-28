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

  // 1.8 Studio Advanced Practis	№5.
    //leverage Google's Places API in order 
    //to get information about each place. Here's an example:
    // https://pastebin.com/V1q31RAZ

 function businessNamesAndRatings (apiResult) {
    var nArr = apiResult.map(function(arr) {
    	return arr.name, arr.rating;
    });
    return nArr;
 //   return apiResult.map (function () rating name)
 }

 