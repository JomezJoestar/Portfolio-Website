import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withViewTransitions({ 
      skipInitialTransition: true,
      onViewTransitionCreated: (transitionInfo) => {
       // Optional: Log to see when transitions are created
       console.log('Transition created:', transitionInfo.to.url);
      }
     }))
  ]
};


