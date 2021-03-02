import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MessageService } from 'primeng/api';
import { HttpIntercept } from './shared/http-intercept';
import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [MessageService, { provide : HTTP_INTERCEPTORS, useClass : HttpIntercept, multi : true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
