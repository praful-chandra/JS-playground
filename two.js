var obj1 = {
  hello: function () {
    return `Hello woeld - ${this.name}`;
  },
  jack: { name: 1 },
  name: "HELLO",
};

var obj2 = {
  hello: obj1.hello,
  f: obj1.jack,
  name: "BUYYUE",
};

console.log(obj2.hello.bind(obj1)());
