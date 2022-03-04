import { render, Text } from 'ink';

export const printText = (
  value: string,
  backgroundColor = 'blue',
  color = 'white'
): void => {
  render(
    <Text backgroundColor={backgroundColor} color={color}>
      {value}
    </Text>
  );
};
