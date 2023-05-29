import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JokeListComponentComponent } from './joke-list-component/joke-list-component.component';
import { JokeFormComponentComponent } from './joke-form-component/joke-form-component.component';
import { JokeComponentComponent } from './joke-component/joke-component.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeListComponentComponent,
    JokeFormComponentComponent,
    JokeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
