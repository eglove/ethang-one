/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
export const withStyles = (Component: JSX.Element): JSX.Element => {
  // @ts-expect-error Can by any
  return (properties: unknown): JSX.Element => {
    const style = { margin: '1rem', padding: '0.2rem' };
    // @ts-expect-error Not sure, this seems ok
    return <Component style={style} {...properties} />;
  };
};

const Button = (): JSX.Element => {
  return <button type="button">Click me!</button>;
};

const Text = (): JSX.Element => {
  return <p>Hello world!</p>;
};

// @ts-ignore Just for play
const styledButton = withStyles(Button);
// @ts-ignore Just for play
const styledText = withStyles(Text);
