import { Container, NextLink } from '@ethang/react-components';

interface PageProperties {
  children: JSX.Element | JSX.Element[];
}

export function Page({ children }: PageProperties): JSX.Element {
  return (
    <div>
      <Container>
        <nav>
          <NextLink linkProperties={{ href: '/' }}>Home</NextLink>
        </nav>
      </Container>
      {children}
    </div>
  );
}
