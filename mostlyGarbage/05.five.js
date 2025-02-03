let i = 0;

function classRooom() {
  this.value = "Mathematics";

  return  () => {
    console.log("THIS_VALUE:", this.value);
  };
}

function debounce(func, wait) {
  var timeoutId = null;

  return function debouncedFunc(...args) {
    clearTimeout(timeoutId);
    let context = this;
    timeoutId = setTimeout(function () {
      timeoutId = null;
      func.bind(context)(...args);
    }, wait);
  };
}

// increment();

const debouncedFn = debounce(new classRooom(), 2000);

const workshop = {
  value: "ABRACADABRA",
  getValue: debouncedFn,
};

workshop.getValue();
