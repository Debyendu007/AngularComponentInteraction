import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildToParentCommunicationComponent } from './child-to-parent-communication/child-to-parent-communication.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildToParentCommunicationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
