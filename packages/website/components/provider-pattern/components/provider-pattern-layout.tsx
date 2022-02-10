import { useAnimationInterval } from '@ethang-one/react-hooks';
import faker from '@faker-js/faker';

import { Container } from '../../common/container/container';
import {
  useProviderDispatch,
  useProviderState,
} from '../context/provider-context';

export const ProviderPatternLayout = (): JSX.Element => {
  const provider = useProviderState();
  const providerDispatch = useProviderDispatch();

  const setStuff = (): void => {
    providerDispatch({
      method: 'firstName',
      payload: faker.name.firstName(),
    });

    providerDispatch({
      method: 'lastName',
      payload: faker.name.lastName(),
    });

    providerDispatch({
      method: 'age',
      payload: Date.now(),
    });
  };

  useAnimationInterval(1000, setStuff);

  if (typeof provider.fullName === 'undefined') {
    return null;
  }

  return (
    <Container>
      <p>
        {provider.fullName} - {provider.age}
      </p>
    </Container>
  );
};
