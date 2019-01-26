import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';
import { NewAccountModule } from './components/new-account/new-account.module';

import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryDbService, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatabaseService } from './database/database.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DatabaseService),
    HttpClientModule,
    LoginModule,
    NewAccountModule,
    StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
