// course JavaScript for Beginners on Stepic

// this is few interesting solutions

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

//Given a natural number n. Write a recursive function that returns a string of numbers from 1 to n separated by a space.
//Sample Input : 5
// Sample Output : "1 2 3 4 5"
//then iterativ prosess:

function my_function(n) {
  var counter = n;
  const iter = (index, acc) => {
    if(index >= counter) {
      return `${acc}${index}`;
    } else {
    return iter (index + 1, `${acc}${index} `);
    }
    };
  return iter(1, "");     
}

// another one, now recursib, but invers string.... не доточено возврат очень странный. разобраться..

function my_function(n) {
  if (n <= 1) return String(1);
    return String(n) + " " + String(n - 1);
}
