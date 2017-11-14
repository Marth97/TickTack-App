import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IAuthProvider } from '../providers/i-auth-provider';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = 'LoginPage';

    pages: Array<{ title: string, icon: string, component: any }>;

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                private auth: IAuthProvider,
    ) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Zeiterfassung', icon: 'time', component: 'CaptureTimePage'},
            {title: 'Projekte', icon: 'clipboard', component: 'ProjectsPage'},
            {title: 'Auswertungen', icon: 'stats', component: 'ReportPage'},
            {title: 'Einstellungen', icon: 'build', component: 'SettingsPage'},
            {title: 'Hilfe', icon: 'help-circle', component: 'HelpPage'},
            {title: 'Datenbank-Tests', icon: '', component: 'TestPage'}
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    /**
     * Logout-Funktion
     */
    logout(): void {
        this.auth.logout()
            .then(result => {
                    if (result) {
                        this.nav.setRoot('LoginPage');
                    }
                }
            );
    }
}

