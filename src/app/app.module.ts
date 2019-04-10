import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClockComponent } from './clock/clock.component';
import { MessageComponent } from './message/message.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClockComponent,
    MessageComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
