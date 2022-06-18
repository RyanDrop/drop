import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreUiGenericInputModule } from '@drop/core/ui/generic-input';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreUiGenericInputModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
