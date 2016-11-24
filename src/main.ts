import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
// import { AppModule } from './app/app.module';
import {RouterAppModule} from './router/router.module';
if (process.env.ENV === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(RouterAppModule);
