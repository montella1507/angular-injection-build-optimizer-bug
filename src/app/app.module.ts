import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestModule } from './test/test.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    TestModule.configure([
      57,
      55
    ])
    ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
