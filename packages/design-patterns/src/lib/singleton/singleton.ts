let count = 0;

const counter = {
  decrement(): number {
    return --count;
  },
  getCount(): number {
    return count;
  },
  increment(): number {
    return ++count;
  },
};

Object.freeze(counter);

export { counter };
