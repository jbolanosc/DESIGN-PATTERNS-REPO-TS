//Builder Pattern
//Allows us create complex objects with the same code in a step by step
/*
    Builder pattern is useful when you want to create various objects with different representation without creation
subclasses for each of them
*/

class Car {
  type: string;
  engine: string;
  fuelTank: number;
  horsepower: number;
  seats: number;

  constructor(engine, fuelTank, horsepower, seats, type) {
    this.type = type;
    this.engine = engine;
    this.fuelTank = fuelTank;
    this.horsepower = horsepower;
    this.seats = seats;
  }

  printSpecs() {
    console.log(
      "type: " + this.type,
      "engine: " + this.engine,
      "horsepower: " + this.horsepower,
      "fuelTank: " + this.fuelTank,
      "seats: " + this.seats
    );
    return;
  }
}

class CarBuilder {
  type: string;
  engine: string;
  fuelTank: number;
  horsepower: number;
  seats: number;

  constructor() {
    this.engine = "";
    this.horsepower = 0;
    this.seats = 0;
    this.fuelTank = 0;
  }

  addType(type: string) {
    this.type = type;
    return this;
  }

  addSeats(seat: number) {
    this.seats = this.seats + seat;
    return this;
  }

  addEngine(value: string) {
    this.engine = value;
    return this;
  }

  addHorsePower(HP: number) {
    this.horsepower = HP;
    return this;
  }

  addFuelTank(value: number) {
    this.fuelTank = value;
    return this;
  }

  build() {
    return new Car(
      this.engine,
      this.fuelTank,
      this.horsepower,
      this.seats,
      this.type
    );
  }
}

let truck = new CarBuilder()
  .addType("Truck")
  .addSeats(7)
  .addEngine("3000cc")
  .addFuelTank(20)
  .addHorsePower(400)
  .build();

let sportSedan = new CarBuilder()
  .addType("Sport sedan")
  .addEngine("2000cc Turbo")
  .addFuelTank(20)
  .addSeats(4)
  .addHorsePower(350)
  .build();

console.log(sportSedan.printSpecs());
console.log(truck);
