import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatefulComponentComponent } from './components/stateful-component/stateful-component.component';
import { StatelessComponentComponent } from './components/stateless-component/stateless-component.component';

@NgModule({
  declarations: [
    AppComponent,
    StatefulComponentComponent,
    StatelessComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
