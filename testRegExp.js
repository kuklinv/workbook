function testRegExp(s, sub_s) {
var mySubString = new RegExp(sub_s, "g");
result = s.match(mySubString);
return result.join();
}
