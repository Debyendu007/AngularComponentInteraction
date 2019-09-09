import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentParentToChildCommComponent } from './component-parent-to-child-comm/component-parent-to-child-comm.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentParentToChildCommComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
