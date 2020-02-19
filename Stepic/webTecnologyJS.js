// const man = {
//     name: Vitaly,
//     surname: Kuklin,
//     fullName: function(this.name, this.surname) {
//         return `${this.surname} ${this.name}`;
//     }
// }

// class Room () {
//     constructor(windows, owner) {
//     this.windows = 3;
//     this.owner = 'Vitaly';
//     }

// }

let man = {
  name: "Vitaly",
  surname: "Kuklin",
  fullName: function(name, surname) {
    return surname + " " + name;
  }
};
class Room {
  constructor() {
    this.windows = 3;
    this.owner = "Vitaly";
  }
}
