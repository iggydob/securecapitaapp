import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {ResetpasswordComponent} from "./component/resetpassword/resetpassword.component";
import {RegisterComponent} from "./component/register/register.component";
import {VerifyComponent} from "./component/verify/verify.component";
import {CustomerComponent} from "./component/customer/customer.component";
import {ProfileComponent} from "./component/profile/profile.component";
import {CustomersComponent} from "./component/customers/customers.component";
import {HomeComponent} from "./component/home/home.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'resetpassword', component: ResetpasswordComponent},
  {path: 'verify/verify/account/:key', component: VerifyComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', component: HomeComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
