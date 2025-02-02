function workshop(className) {
  this.className = className;
  return this;
}

workshop.prototype.ask = function (question) {
  console.log(`Class => ${this.className}, \t Question ==> ${question}`);
};

var mathWOrkshop = workshop.bind({})("Mathematics");

mathWOrkshop.prototype = Object.create(workshop.prototype);
console.log(mathWOrkshop.prototype);
mathWOrkshop.prototype.ask("YO YO ");
