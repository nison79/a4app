import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule , Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { DataService } from './services/data.service';
import { AboutComponent } from './about/about.component'

const appRoutes: Routes = [
  { path: '', component:UserComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  declarations: [AppComponent, UserComponent, AboutComponent],
  imports: [
    BrowserModule, 
    FormsModule ,
    HttpClientModule , 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
