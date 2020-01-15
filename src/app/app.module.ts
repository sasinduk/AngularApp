import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DocumentModule } from './documents/document.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DocumentModule, // order matters
    AppRoutingModule // order matters (this one should always follow any other custom modules)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
