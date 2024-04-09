import 'reflect-metadata';
import { injectable } from 'inversify';
import { RematchDispatch } from '@rematch/core';
import { AbstractCallbackHandler } from '@libreforge/libreforge-framework';

@injectable()
export class CustomStatusCallbackHandler extends AbstractCallbackHandler {

  getRoute() {
    return "/status"
  };

  async execute(
    appState: any,
    dispatch: RematchDispatch<any>,
    snackbar: any,
    router: any
  ) {

    console.log('/status callback intercepted. Routing to main page');
    router("/");
  };
}
