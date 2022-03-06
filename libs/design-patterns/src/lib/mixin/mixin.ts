/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
export class Dog {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const animalFunctionality = {
  sleep(): void {
    console.info('Sleeping!');
  },
  walk(): void {
    console.info('Walking!');
  },
};

const dogFunctionality = {
  __proto__: animalFunctionality,
  bark(): void {
    console.info('Woof');
  },
  play(): void {
    console.info('Playing!');
  },
  sleep(): void {
    super.sleep();
  },
  wagTail(): void {
    console.info('Wagging my tail!');
  },
  walk(): void {
    super.walk();
  },
};

Object.assign(Dog.prototype, dogFunctionality);

const pet = new Dog('Daisy');
console.info(pet.name);
// @ts-expect-error Mixin
pet.bark();
// @ts-expect-error Mixin
pet.play();
// @ts-expect-error Mixin
pet.walk();
// @ts-expect-error Mixin
pet.sleep();
