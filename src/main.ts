import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr'; // French locale

// Save the French locale data
registerLocaleData(fr.default);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
