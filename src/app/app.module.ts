import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {IDataProvider} from '../providers/i-data/i-data';
import {MockupProvider} from '../providers/mockup/mockup';
import {ProjectProvider} from '../providers/project/project';

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},

        ProjectProvider,

        MockupProvider,
        {provide: IDataProvider, useClass: MockupProvider},
        MockupProvider,
        ProjectProvider
    ]
})
export class AppModule {
}
