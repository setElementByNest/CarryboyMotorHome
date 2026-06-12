import React, { ReactNode } from 'react';
import { PriceProvider } from './PriceContext';
import { TypeCarProvider } from './TypeCarContext';

interface AppProvidersProps {
  children: ReactNode;
}

const providers = [
  PriceProvider,
  TypeCarProvider,
];

export const AppProviders = ({ children }: AppProvidersProps) => {
  return providers.reduceRight(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children
  );
};
