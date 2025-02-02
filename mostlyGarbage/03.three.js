// var student = {
//   firstName: "Jackson",
// };

// var classRoom = {
//   className: "Economics",
//   ask: function () {
//     console.log(
//       `FirstName => ${this.firstName} \nClassName => ${this.className}`
//     );
//   },
// };

// classRoom.ask.bind(student)();

class Someclass {
  constructor() {
    this.something = "HRLLO_SOMETHING";
  }

  speak(message) {
    console.log(`SOMETHING -> ${this.something} \t Message => ${message}`);
    return "THIS";
  }
}
this.something = "GLOBAL_SOME";
var someObj = new Someclass();
console.log(this);
setTimeout(someObj.speak.bind(someObj), 100, "hi");
