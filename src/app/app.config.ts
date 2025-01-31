import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const ENV_PROVIDERS = [
  provideHttpClient(),
  provideRouter(routes),
];

export const appConfig = {
  apiUrl: 'https://example.com/api',
  featureFlag: true
};
