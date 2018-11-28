class Monster {
    constructor(typeOfMonster, strength, name) {
    this._typeOfMonster = typeOfMonster;
    this._strength = strength;
    this._name = name;

}
get typeOfMonster() {
    return this._typeOfMonster
}
get strength() {
    return this._strength
}
get name() {
    return this._name
}

monAttack() {
    this._strength += 20
    console.log("makes the monster attack")
}
}

let Monster1 = new Monster("Zombie",27, "Frankenstein");

Monster1.monAttack();
console.log(Monster1.name);
console.log(Monster1.strength);
console.log(Monster1.typeOfMonster);

class EvolveMonster extends Monster {
    constructor(typeOfMonster, strength, name, speed, weapon) {
    super(typeOfMonster, strength, name);

    this._speed = speed;
    this._weapon = weapon;
}
    get speed() {
        return this._speed;
    }

    get weapon() {
        return this._weapon
    }
}

let evoMonster = new EvolveMonster("Zombie", 36,"Jason", 50, "Sword" );
console.log(evoMonster._weapon);
console.log(evoMonster.name);
console.log(evoMonster._strength);
console.log(evoMonster._speed);

let evoMonster2 = new EvolveMonster("Gorilla", 27, "John", 26, "Hammer");
console.log(evoMonster2._weapon);
console.log(evoMonster2._name);
console.log(evoMonster2._typeOfMonster);
