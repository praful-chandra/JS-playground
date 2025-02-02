// var obj1 = {
//   hello: function () {
//     return `Hello woeld - ${this.name}`;
//   },
//   jack: { name: 1 },
//   name: "HELLO",
// };

// var obj2 = {
//   hello: obj1.hello,
//   f: obj1.jack,
//   name: "BUYYUE",
// };

// console.log(obj2.hello.bind(obj1)());

// function greeting() {
//   return getGreeting();

//   // ********----------------**********

//   function getGreeting() {
//     console.log("Hello There !!!");
//   }
// }

// greeting();

const workshop = (function whatsInput(inp) {
  return {
    sayMYInput,
  };

  function sayMYInput() {
    console.log(`My Input is =>> "${inp}"`);
    if (Math.random() > 0.5) {
      secret();
    }
  }

  function secret() {
    console.log("SECRET IS ---> this");
  }
})("ABCDEFG");

workshop.sayMYInput.call({});
