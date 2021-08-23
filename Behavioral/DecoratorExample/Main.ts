import { HardEnemy } from "./HardEnemy";
import { ArmourDecorator } from "./ArmourDecorator";
import { BaseEnemy } from "./BaseEnemy";
import { HelmetDecorator } from "./HelmetDecorator";

let enemy = new BaseEnemy();

let hardEnemy = new HardEnemy();

let enemyWithHelmet = new HelmetDecorator(enemy);

let enemyWithHelmetAndArmour = new ArmourDecorator(enemyWithHelmet);

let computedDamage = enemyWithHelmetAndArmour.takeDamage();

let hardEnemyWithHelmet = new HelmetDecorator(hardEnemy);

let hardEnemyWithHelmetAndArmour = new ArmourDecorator(hardEnemyWithHelmet);

let computedHardDamage = hardEnemyWithHelmetAndArmour.takeDamage();

console.log("Base Enemy ", computedDamage);

console.log("Hard Enemy ", computedHardDamage);
