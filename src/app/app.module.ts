import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppCardComponent } from './common/app-card/app-card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, DashboardComponent, AppCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
