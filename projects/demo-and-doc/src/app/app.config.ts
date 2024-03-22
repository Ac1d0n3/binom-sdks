import { ApplicationConfig } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpBackend, HttpClient, provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { BnMultiTranslateHttpLoader } from '@binom/sdk-core/translate';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'disabled',
  anchorScrolling: 'disabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

export function createTranslateLoader(_httpBackend: HttpBackend) {
  return new BnMultiTranslateHttpLoader(_httpBackend, [
    '/assets/i18n/', 
    '/assets/sdk-core/i18n/',
   // '/assets/sdk-privacy/i18n/',
    '/assets/sdk-theme/i18n/',
    '/assets/sdk-user/i18n/',
    '/assets/sdk-layout/i18n/',
   //'/assets/sdk-tags-and-ratings/i18n/'
  ]);
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, inMemoryScrollingFeature), 
    provideHttpClient(),
    importProvidersFrom(TranslateModule.forRoot({
        defaultLanguage: 'en-US',
        loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpBackend],
        },
    })), provideAnimations()]
};

