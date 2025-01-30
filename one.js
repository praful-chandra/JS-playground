function ComputeAmountCns() {
  return () => this;
}
ComputeAmountCns.prototype.amount = 0;
ComputeAmountCns.prototype.thousanad = function (value) {
  this.amount += 1000 * value;
  return this;
};

ComputeAmountCns.prototype.lakh = function (value) {
  this.thousanad(value * 100);
  return this;
};

ComputeAmountCns.prototype.crore = function (value) {
  this.lakh(100 * value);
  return this;
};

ComputeAmountCns.prototype.value = function () {
  return this.amount;
};

const computeAmount = new ComputeAmountCns();

console.log(
  computeAmount()
    .lakh(15)
    .crore(5)
    .crore(2)
    .lakh(20)
    .thousanad(45)
    .crore(7)
    .value()
);
