import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './component/login/login.component';
import {RegisterComponent} from './component/register/register.component';
import {ResetpasswordComponent} from './component/resetpassword/resetpassword.component';
import {VerifyComponent} from './component/verify/verify.component';
import {
  HTTP_INTERCEPTORS, HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi
} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CustomerComponent} from './component/customer/customer.component';
import {ProfileComponent} from './component/profile/profile.component';
import {HomeComponent} from './component/home/home.component';
import {CustomersComponent} from './component/customers/customers.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {StatsComponent} from './component/stats/stats.component';
import {TokenInterceptor} from "./interceptor/token.interceptor";
import {provideRouter} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    VerifyComponent,
    CustomerComponent,
    ProfileComponent,
    HomeComponent,
    CustomersComponent,
    NavbarComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
