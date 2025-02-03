let i = 0;

function increment() {
  i++;
  console.log(i);
}

function debounce(func, wait) {
  var timeoutId = null;
  return function debouncedFunc() {
    setTimeout(function () {
      func();
    }, wait);
  };
}

// increment();

const debouncedFn = debounce(increment, 2000);

for(let i = 0; i < 3; i++){
  debouncedFn();
}
