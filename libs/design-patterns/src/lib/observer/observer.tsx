class Observable {
  public observers: Array<(data: string) => void>;

  constructor() {
    this.observers = [];
  }

  subscribe(function_: (data: string) => void): void {
    this.observers.push(function_);
  }

  unsubscribe(function_: (data: string) => void): void {
    this.observers = this.observers.filter(observer => {
      return observer !== function_;
    });
  }

  notify(data: string): void {
    for (const observer of this.observers) {
      observer(data);
    }
  }
}

const logger = (data: string): void => {
  console.info(`${Date.now()} ${data}`);
};

const toastify = (data: string): void => {
  // eslint-disable-next-line no-alert
  alert(data);
};

const observable = new Observable();
observable.subscribe(logger);
observable.subscribe(toastify);

function App(): JSX.Element {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handleClick = (): void => {
    observable.notify('User clicked button');
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handleToggle = (): void => {
    observable.notify('User toggled switch!');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Click me!
      </button>
      <button type="button" onClick={handleToggle}>
        Toggle
      </button>
    </div>
  );
}

export default App;
