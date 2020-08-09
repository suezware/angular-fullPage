import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


// added
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@NgModule({
  imports:      [ BrowserModule, AngularFullpageModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
