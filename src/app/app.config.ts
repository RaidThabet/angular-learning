import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {ApplicationConfig} from '@angular/core';

export const config: ApplicationConfig = {
  providers: [provideRouter(routes)]
}
