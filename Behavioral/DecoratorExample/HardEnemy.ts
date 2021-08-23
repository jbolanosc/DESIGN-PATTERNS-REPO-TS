import { Enemy } from "./Enemy";

export class HardEnemy implements Enemy {
  takeDamage(): number {
    return 5;
  }
}
