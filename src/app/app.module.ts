import { AppRoutingModule } from 'app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { GlobalMethods } from 'globalMethods';
import { LayoutService } from 'layout.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InnerpageComponent } from './components/innerpage/innerpage.component';
import { ForgotPassword } from './modals/forgot-password';


import { MaterialComponentsModule } from './material-components.module';
import { SignUp } from './modals/sign-up';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    InnerpageComponent,
    ForgotPassword,
    SignUp
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialComponentsModule,
  ],
  providers: [
    GlobalMethods, LayoutService
  ],
  entryComponents: [
    ForgotPassword,
    SignUp
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


