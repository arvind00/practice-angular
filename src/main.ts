import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//01 enable production mode for production environment
if (environment.production) {
  enableProdMode();
}

//02 Bind the appModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
