
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

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

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // InMemoryWebApiModule.forRoot(DatabaseService),
    AngularFireModule.initializeApp(environment.firebase),
    LoginModule,
    RouterModule,
    UserAccountModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
