//Singleton
//Ensures a class will only have one instance

class Singleton {
  static instance = new Singleton();

  static getInstance() {
    return this.instance;
  }

  showMessage() {
    console.log("SINGLETON 1");
  }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true

instance2.showMessage();
