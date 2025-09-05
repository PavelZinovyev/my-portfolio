import type { PropsWithChildren } from 'react';
import { Container } from '../../shared/Container';

export const Layout = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};
