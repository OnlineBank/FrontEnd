import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ApiService} from "./core/api.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './customers/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { PayWaterComponent } from './pay-water/pay-water.component';
import { PayGasComponent } from './pay-gas/pay-gas.component';
import { PayElectricityComponent } from './pay-electricity/pay-electricity.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    PayWaterComponent,
    PayGasComponent,
    PayElectricityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
