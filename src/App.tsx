
import { AbstractAuthorizationConfigProvider, AbstractCallbackHandler, SYMBOL_CALLBACK_PROVIDER } from '@libreforge/libreforge-framework';
import React, { useState } from 'react';
import pages from './config/application.json'
import { Container } from 'inversify';
import { app, InversifyContainerProviderContext, SYMBOL_AUTHORIZATION_CONFIG_PROVIDER, bindProviders as frameworkBindProviders } from '@libreforge/libreforge-framework';
import { Application, bindProviders as componentBindProviders } from '@libreforge/libreforge-framework-react';
import { RematchDispatch, init } from '@rematch/core';
import { Provider, useDispatch as useReduxDispatch } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultAuthorizationConfigProvider } from './DefaultAuthorizationConfigProvider';
import { bindProviders as securityBindProviders } from '@libreforge/librepackage-security-oauth2-google';
import { CustomStatusCallbackHandler } from 'CustomStatusCallbackHandler';
import { usePageTitle } from 'hooks/usePageTitle';

/* Redux Store configuration */
const models = { app };
export const storeConfig = {
models,
plugins: [],
};

export const useDispatch = () => {
return useReduxDispatch() as RematchDispatch<typeof models>;
};

// @ts-ignore
const store = init(storeConfig);

const container = new Container();
container.bind<AbstractAuthorizationConfigProvider>(SYMBOL_AUTHORIZATION_CONFIG_PROVIDER).to(DefaultAuthorizationConfigProvider);
container.bind<AbstractCallbackHandler>(SYMBOL_CALLBACK_PROVIDER).to(CustomStatusCallbackHandler);

securityBindProviders(container);
frameworkBindProviders(container);
componentBindProviders(container);

function App() {
usePageTitle('Dashboard Demo');

  const [selectedPage, setSelectedPage] = useState<string>('init');

  window.addEventListener('storage', () => {
    const _selectedPage = localStorage.getItem('selectedPage')

    if (!!_selectedPage) {
      setSelectedPage(_selectedPage);
    }
  })

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider resetCSS>
          <InversifyContainerProviderContext.Provider value={container}>
            <Application
              pages={pages}
              designMode={false}
              routeToUrl={undefined}
            />
          </InversifyContainerProviderContext.Provider>
        </ChakraProvider>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
