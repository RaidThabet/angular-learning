import {provideRouter, withComponentInputBinding, withRouterConfig} from '@angular/router';
import {routes} from './app.routes';
import {ApplicationConfig} from '@angular/core';

export const config: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding(), withRouterConfig({
    paramsInheritanceStrategy: "always" // ensure that those dynamic path parameter values are injected into child routes
  }))]
}
