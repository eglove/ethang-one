const person: Record<string, string | number> = {
  age: 42,
  name: 'John Doe',
  nationality: 'American',
};

export const personProxy = new Proxy(person, {
  get: (object: typeof person, property: string): void => {
    if (typeof object[property] === 'undefined') {
      console.error(
        `This property doesn't seem to exist on the target object.`
      );
    } else {
      console.info(
        `The value of ${property} is ${String(Reflect.get(object, property))}`
      );
    }
  },
  set: (
    object: typeof person,
    property: string,
    value: string | number
  ): boolean => {
    if (property === 'age' && typeof value !== 'number') {
      console.error(`You can only pass numeric values for age.`);
      return false;
    }

    if (property === 'name' && typeof value === 'string' && value.length < 2) {
      console.error(`You need to provide a valid name.`);
      return false;
    }

    console.info(`Changed ${property} from ${object[property]} to ${value}.`);
    Reflect.set(object, property, value);
    return true;
  },
});
