import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';
import { NewAccountModule } from './components/new-account/new-account.module';

import { HttpClientModule } from '@angular/common/http';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

// In memory database
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatabaseService } from './database/database.service';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './components/login/store/login.effects';
import { UserAccountModule } from './components/user-account/user-account.module';


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
    EffectsModule.forRoot([LoginEffects]),
    StoreModule.forRoot(reducers),
    UserAccountModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
