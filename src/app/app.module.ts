import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClockComponent } from './clock/clock.component';
import { MessageComponent } from './message/message.component';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';
import { HistoryService } from './services/history.service'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClockComponent,
    MessageComponent,
    ResultComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ HistoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
