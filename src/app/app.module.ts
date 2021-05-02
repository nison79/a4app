import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { DataService } from './services/data.service'

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [BrowserModule, FormsModule ,HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
