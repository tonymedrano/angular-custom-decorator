import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IceCreamDecoratorComponent } from './ice-cream-decorator/ice-cream-decorator.component';

@NgModule({
  declarations: [
    AppComponent,
    IceCreamDecoratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
