import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';


import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { HomeComponent } from './home/home.component';
import { HistoryService } from './services/history.service';
import { HistoryComponent } from './history/history.component';
import { HeaderComponent } from './header/header.component'


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    HomeComponent,
    HistoryComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ HistoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
