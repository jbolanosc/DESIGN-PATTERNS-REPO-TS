//Allows you enhance any class/object with extra functions or behavior
//without having to create any sub classes

function loggerDecorator(wrapped) {
  return function (...args) {
    console.log("******");
    console.log(wrapped.apply(this, args));
    console.log("******");
  };
}

function mapper(arr: [], add: number) {
  return arr.map((i) => i + add);
}

loggerDecorator(mapper)([1, 2, 3], 10);
