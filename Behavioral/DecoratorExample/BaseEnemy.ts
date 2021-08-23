import { Enemy } from "./Enemy";

export class BaseEnemy implements Enemy {
  takeDamage(): number {
    return 10;
  }
}
