import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';


import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';
import { HistoryService } from './services/history.service';
import { HistoryComponent } from './history/history.component'


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    MessageComponent,
    HomeComponent,
    HistoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ HistoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
