// course JavaScript for Beginners on Stepic

/* In this example, if the i value is equal to the value of the variable "a", 
the outer for loop will be interrupted, and if the i value is equal to the value 
of the variable "b", it will exit the current iteration and continue the work of the outer loop.
*/
label_1: 
for (i = 1; i <= 50; i ++) {
  while (i < a) {
    console.log (i);
    if (i == a) {
      break label_1;
    }

    if (i == b) {
      continue label_1;
    }
  }
}

