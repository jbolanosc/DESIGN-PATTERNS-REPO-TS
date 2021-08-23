// Patrón creacional
// Usos

class Entity {
  power: number;
  weak: string;
}

interface EnemyFactory {
  createEnemy(): Entity;
}

class CreateRandomEnemyFactory implements EnemyFactory {
  createEnemy(): Entity {
    return new Entity();
  }
}

//Other examples

class Document {
  render() {
    return null;
  }
}
class Div extends Document {
  render() {
    return "<div />";
  }
}
class Section extends Document {
  render() {
    return "<section />";
  }
}
class DOMFactory {
  createElement(type) {
    switch (type) {
      case "div":
        return new Div();
      case "section":
        return new Section();
      default:
        break;
    }
  }
}

let domFactory = new DOMFactory();
let div = domFactory.createElement("div");
let section = domFactory.createElement("section");
