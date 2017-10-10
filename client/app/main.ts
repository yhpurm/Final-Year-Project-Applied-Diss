import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { HttpModule } from '@angular/http';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, [HttpModule]);