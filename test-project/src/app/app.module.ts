import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomeComponentComponent } from './components/some-component/some-component.component';
import { SimpleComponent } from './components/simple/simple.component';
import { InteractiveComponent } from './components/interactive/interactive.component';
import { Practice2Component } from './components/practice2/practice2.component';
import { BasicHookComponent } from './components/basic-hook/basic-hook.component';
import { AsyncAwaitComponent } from './components/async-await/async-await.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeComponentComponent,
    SimpleComponent,
    InteractiveComponent,
    Practice2Component,
    BasicHookComponent,
    AsyncAwaitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
