// first part of Javascript Algorithms And Data Structures Certification (300 hours)
// Using Objects for Lookups:
function phoneticLookup(val) {
    var result = "";

    var lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chocago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    };

    result = lookup.alpha(val); // ore result = lookup[val];
    /* the same:
    switch (val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
    }

    */
    return result;
}
phoneticLookup("charlie");

//////////////////////////////////////////////// checkout proprty exist in obj; 
// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    return myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not Found";
}
// Test your code by modifying these values
checkObj("gift");