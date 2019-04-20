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

  function businessNamesAndRatings (apiResult) {                // выводит name, но не выодит raring
    var newAr = apiResult.results.map(function (result) {
      var propertyNameRaiting = 'raiting';
      var propertyNameName = 'name';
      var rait = result.rating;
      var nam = result.name;
      return rait, nam;
    });
  return newAr;
  }

console.log (businessNamesAndRatings (apiRes));

 