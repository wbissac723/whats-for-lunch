import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Feature Modules
import { AppRoutingModule } from './routing/app-routing.module';
import { LoginModule } from './components/login/login.module';
import { UserAccountModule } from './components/user-account/user-account.module';

// In memory database
import { DatabaseService } from './database/database.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserNavbarModule } from './components/user-navbar/user-navbar.module';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DatabaseService),
    LoginModule,
    RouterModule,
    UserAccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
