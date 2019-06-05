//// part of Free Code Camp JS algoritm & basic structures
// adds all of the own properties  to the array ownProps:
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]
/////////////////////////////////////////////////////////////////////
