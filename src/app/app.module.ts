import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { CarrosServiceProvider } from '../providers/carros-service/carros-service';
import { NotasPage } from '../pages/notas/notas';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { FrequenciaPage } from '../pages/frequencia/frequencia';
import { AlunosServiceProvider } from '../providers/alunos-service/alunos-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotasPage,
    MensagensPage,
    FrequenciaPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotasPage,
    MensagensPage,
    FrequenciaPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    CarrosServiceProvider,
    AlunosServiceProvider
  ]
})
export class AppModule {}
