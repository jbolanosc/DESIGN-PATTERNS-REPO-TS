//Abstract Factory
//Permite crear diferentes tipos de objetos relacionados entre si, tiene varios metodos de creación

interface Moneda {}

interface BloqueInterrogante {}

class GameboyMoneda implements Moneda {}

class GameboyBloqueInterrogante implements BloqueInterrogante {}

export interface AbstractFactory {
  createMoneda(): Moneda;
  createBloqueInterrogante(): BloqueInterrogante;
}

export class GameBoyItemFactory implements AbstractFactory {
  createMoneda(): Moneda {
    return new GameboyMoneda();
  }
  createBloqueInterrogante(): BloqueInterrogante {
    return new GameboyBloqueInterrogante();
  }
}
