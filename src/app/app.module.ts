import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { IDataProvider } from '../providers/i-data-provider';
import { FirebaseDataProvider } from '../providers/firebase-data';

import { ProjectProvider } from '../providers/project-provider';
import { UserInfoProvider } from '../providers/user-info-provider';

import { IAuthProvider } from '../providers/i-auth-provider';
import { FirebaseAuthProvider } from '../providers/firebase-auth-provider';

import { AngularFireModule } from "angularfire2";
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { CapturedTimeProvider } from '../providers/captured-time-provider';

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),

        AngularFireModule.initializeApp(FIREBASE_CONFIG),
        AngularFireAuthModule,
        AngularFireDatabaseModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},

        FirebaseDataProvider,
        {provide: IDataProvider, useClass: FirebaseDataProvider},
        ProjectProvider,
        UserInfoProvider,
        CapturedTimeProvider,

        FirebaseAuthProvider,
        {provide: IAuthProvider, useClass: FirebaseAuthProvider}

    ]
})
export class AppModule {
}
