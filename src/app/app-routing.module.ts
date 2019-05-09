import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './customers/user.component';
 import { PayWaterComponent } from './pay-water/pay-water.component';
import { PayGasComponent } from './pay-gas/pay-gas.component';
import { PayElectricityComponent } from './pay-electricity/pay-electricity.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pay-gas', component: PayGasComponent },
  { path: 'user', component: UserComponent },
  { path: 'pay-water', component: PayWaterComponent },
  { path: 'pay-electricity', component: PayElectricityComponent },
  { path : '', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
