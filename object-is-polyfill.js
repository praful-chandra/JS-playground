if (!Object.is || true) {
  function checkifIsNan(value) {
    return typeof value === "number" && value !== value;
  }
  Object.is = function ObjectIs(comparator, comparatiee) {
    // check for NaN
    let isComporNaN = checkifIsNan(comparator);
    let isCompateeNaN = checkifIsNan(comparatiee);
    if (isCompateeNaN && isComporNaN) {
      return true;
    }
    if (isCompateeNaN || isComporNaN) {
      return false;
    }

    // check for -0
    let isComporM0 = comparator === 0 && -Infinity / comparator == Infinity;
    let isCompateeM0 = comparatiee === 0 && -Infinity / comparatiee == Infinity;
    if (isComporM0 && isCompateeM0) {
      return true;
    }
    if (isComporM0 || isCompateeM0) {
      return false;
    }

    return comparator === comparatiee;
  };

  console.log(Object.is(42, 42) === true);
  console.log(Object.is("foo", "foo") === true);
  console.log(Object.is(false, false) === true);
  console.log(Object.is(null, null) === true);
  console.log(Object.is(undefined, undefined) === true);
  console.log(Object.is(NaN, NaN) === true);
  console.log(Object.is(-0, -0) === true);
  console.log(Object.is(0, 0) === true);

  console.log(Object.is(-0, 0) === false);
  console.log(Object.is(0, -0) === false);
  console.log(Object.is(0, NaN) === false);
  console.log(Object.is(NaN, 0) === false);
  console.log(Object.is(42, "42") === false);
  console.log(Object.is("42", 42) === false);
  console.log(Object.is("foo", "bar") === false);
  console.log(Object.is(false, true) === false);
  console.log(Object.is(null, undefined) === false);
  console.log(Object.is(undefined, null) === false);
}
