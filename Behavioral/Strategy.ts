interface IStrategy {
  authenticate(...args): any;
}

class Authenticator {
  strategy: any;

  constructor() {
    this.strategy = null;
  }

  setStrategy(strategy: any) {
    this.strategy = strategy;
  }

  authenticate(...args: any) {
    if (!this.strategy) {
      console.log("No authentication strategy provided");
      return;
    }

    return this.strategy.authenticate(...args);
  }
}

class GoogleStrategy implements IStrategy {
  authenticate(googleToken: string) {
    googleToken !== "12345"
      ? console.log("Invalid Google User")
      : console.log("Welcome by Google");
  }
}

class LocalStrategy implements IStrategy {
  authenticate(username: string, password: string) {
    if (username === "jbc" && password === "hola123") console.log("Welcome");
    else console.log("Invalid data");
  }
}

const auth = new Authenticator();

auth.setStrategy(new GoogleStrategy());
auth.authenticate("12345");

auth.setStrategy(new GoogleStrategy());
auth.authenticate("12345234");

auth.setStrategy(new LocalStrategy());
auth.authenticate("jbc", "hola123");

auth.setStrategy(new LocalStrategy());
auth.authenticate("jbc1", "hola123");
