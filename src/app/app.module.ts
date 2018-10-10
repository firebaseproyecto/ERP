import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { FormloginPage } from '../pages/formlogin/formlogin';
import { DepartamentosPage } from '../pages/departamentos/departamentos';
import { ListadoPage } from '../pages/listado/listado';
import { ListadodetalladoPage } from '../pages/listadodetallado/listadodetallado';
//import { MenulateralPage } from '../pages/menulateral/menulateral';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DatosProvider } from '../providers/datos/datos';
import { IonicStorageModule } from '@ionic/storage';


export const firebaseConfig = {
    apiKey: "AIzaSyDTubo4XxDbY2bKMVOTEs6p8Erf1EP8kyQ",
    authDomain: "erp-crm-0000.firebaseapp.com",
    databaseURL: "https://erp-crm-0000.firebaseio.com",
    projectId: "erp-crm-0000",
    storageBucket: "erp-crm-0000.appspot.com",
    messagingSenderId: "573198817473"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    FormloginPage,
    DepartamentosPage,
    ListadoPage,
    ListadodetalladoPage
    //MenulateralPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    FormloginPage,
    DepartamentosPage,
    ListadoPage,
    ListadodetalladoPage
    //MenulateralPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatosProvider
  ]
})
export class AppModule {}
