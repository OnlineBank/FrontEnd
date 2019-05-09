import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "../core/api.service";
import { Card } from '../model/customer.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: any;
  public cards: any;
  public firstName: any;
  public lastName: any;
  public balance: any;
  public water: any;
  public gas: any;
  public electricity: any;
  public x: string;
  public y: string;
  public util: string;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }

    this.apiService.getUsersById()
      .subscribe((data: any) => {
        this.users = data.data.user;
        this.firstName = this.users.firstName;
        this.lastName = this.users.lastName;
       });

      this.apiService.getCard()
      .subscribe((data: any) => {
        this.cards = data.data.card;
        this.balance = this.cards.balance;
       });

  }
  utility(value){
    if(+value === 1)
    { 

    this.apiService.getWater()
    .subscribe((data: any) => {
      this.water = data.data.gas;
       this.x = this.water.debt;
      this.y = this.water.date;
      this.util = "water"
    });
  }
  if(+value === 2)
  { 

  this.apiService.getGas()
  .subscribe((data: any) => {
    this.gas = data.data.gas;
     this.x = this.gas.debt;
    this.y = this.gas.date;
    this.util = "gas"

  });
}
if(+value === 3)
{ 

this.apiService.getElectricity()
.subscribe((data: any) => {
  this.electricity = data.data.electricity;
  console.log(data)
   this.x = this.electricity.debt;
   this.y = this.electricity.date;
   this.util = "electricity"

});
}
  }

  pay(card: Card): void {
    if(this.util === "water")
    {
    this.router.navigate(['pay-water']);
    }
    if(this.util === "gas")
    {
    this.router.navigate(['pay-gas']);
    }
    if(this.util === "electricity")
    {
    this.router.navigate(['pay-electricity']);
    }
  };

}
