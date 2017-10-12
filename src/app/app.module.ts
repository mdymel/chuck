import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {JokesProvider} from './jokes-provider'
import { HttpModule } from '@angular/http';

export function jokesProviderFactory(provider: JokesProvider) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    JokesProvider, 
    { provide: APP_INITIALIZER, useFactory: jokesProviderFactory, deps: [JokesProvider], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
