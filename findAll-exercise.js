function findAll(value, arr) {
  let resultArr = [];

  const isValString = typeof value == "string";
  const isValNumber = typeof value == "number";
  const isValNaN = Object.is(value, NaN);
  const isValM0 = Object.is(value, -0);
  const isValUndef = typeof value == "undefined";
  const isValNull = value === null;
  const isValBool = typeof value == "boolean";
  const isValObj = typeof value == "object";

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Object.is(value, item)) {
      resultArr.push(item);
      continue;
    }

    if (isValString) {
      if (value.trim().length > 0) {
        const isItemM0 = Object.is(item, -0);
        if (typeof item == "number") {
          if (isItemM0 && value == "-0") {
            resultArr.push(item);
            continue;
          }
          if (!isItemM0 && value != "-0" && value == item) {
            resultArr.push(item);
            continue;
          }
        }
      }
    }

    if (isValNumber && !isValNaN && value != -Infinity && value != Infinity) {
      const isItemM0 = Object.is(item, -0);
      if (isItemM0 && isValM0) {
        resultArr.push(item);
        continue;
      }
      if (!isItemM0 && !isValM0) {
        if (
          typeof item == "string" &&
          item.trim().length > 0 &&
          item == value
        ) {
          resultArr.push(item);
          continue;
        }
      }
    }

    if (isValUndef || isValNull) {
      if (item == null) {
        resultArr.push(item);
        continue;
      }
    }

    if (isValBool) {
      if (typeof item == "boolean" && value == item) {
        resultArr.push(item);
        continue;
      }
    }

    if (isValObj) {
      if (typeof item == "object" && value == item) {
        resultArr.push(item);
        continue;
      }
    }
  }

  return resultArr;
}

// tests:
var myObj = { a: 2 };

var values = [
  null,
  undefined,
  -0,
  0,
  13,
  42,
  NaN,
  -Infinity,
  Infinity,
  "",
  "0",
  "42",
  "42hello",
  "true",
  "NaN",
  true,
  false,
  myObj,
];

console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
console.log(setsMatch(findAll(0, values), [0, "0"]) === true);
console.log(setsMatch(findAll(-0, values), [-0]) === true);
console.log(setsMatch(findAll(13, values), [13]) === true);
console.log(setsMatch(findAll(42, values), [42, "42"]) === true);
console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
console.log(setsMatch(findAll("", values), [""]) === true);
console.log(setsMatch(findAll("0", values), [0, "0"]) === true);
console.log(setsMatch(findAll("42", values), [42, "42"]) === true);
console.log(setsMatch(findAll("42hello", values), ["42hello"]) === true);
console.log(setsMatch(findAll("true", values), ["true"]) === true);
console.log(setsMatch(findAll(true, values), [true]) === true);
console.log(setsMatch(findAll(false, values), [false]) === true);
console.log(setsMatch(findAll(myObj, values), [myObj]) === true);

console.log(setsMatch(findAll(null, values), [null, 0]) === false);
console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsMatch(findAll(0, values), [0, -0]) === false);
console.log(setsMatch(findAll(42, values), [42, "42hello"]) === false);
console.log(setsMatch(findAll(25, values), [25]) === false);
console.log(
  setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false
);
console.log(setsMatch(findAll("", values), ["", 0]) === false);
console.log(setsMatch(findAll("false", values), [false]) === false);
console.log(setsMatch(findAll(true, values), [true, "true"]) === false);
console.log(setsMatch(findAll(true, values), [true, 1]) === false);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

// ***************************

function setsMatch(arr1, arr2) {
  if (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length == arr2.length
  ) {
    for (let v of arr1) {
      if (!arr2.includes(v)) return false;
    }
    return true;
  }
  return false;
}
