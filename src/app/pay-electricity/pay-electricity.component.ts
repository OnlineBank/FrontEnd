import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';
import { first } from "rxjs/operators";


@Component({
  selector: 'app-pay-customer',
  templateUrl: './pay-electricity.component.html',
  styleUrls: ['./pay-electricity.component.css']
})
export class PayElectricityComponent implements OnInit {

  public editForm: FormGroup;
  public electricityForm: FormGroup;
  public currencies: [];
  public card: any;
  public balance: any;
  public debt: any;
  public error: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.currencies = JSON.parse(localStorage.getItem('currencies'));

    let customerId = window.localStorage.getItem("updateCustomerId");
    if (!customerId) {
      this.router.navigate(['customers']);
      return;
    }

    this.electricityForm = this.formBuilder.group({
      id: [''],
      debt: ['', Validators.required],
      date: ['', Validators.required]
    });
 this.apiService.getElectricity()
      .subscribe((data: any) => {
        this.electricityForm.setValue(data.data.electricity);
        this.debt = data.data.electricity.debt;
      });


  }

  onSubmit() {
    
    this.apiService.getCard()
    .subscribe((data: any) => {
      this.card = data.data.card;
      this.balance = this.card.balance;
      if((+this.balance - +this.debt) > 0)
      {console.log(true)
      this.card.balance = +this.card.balance - +this.debt;
      this.electricityForm.value.debt = 0;
      this.electricityForm.value.date = "     "
      }else{
        console.log(true)
        this.error = true;
      }
     });
     console.log(this.electricityForm.value.debt = 0);
    if(this.error === true)
    {
    alert('Not enough money!');
    return;
    }
    console.log('card',this.card);

    this.apiService.updateElectric(this.electricityForm.value)
    .pipe(first())
    .subscribe(
      data => {
        alert('elrctricity updated successfully.');

        
   this.apiService.updateCard(this.card)
   .pipe(first())
   .subscribe(
     data => {
       alert('card updated successfully.');
       this.router.navigate(['user']);
     });
      });

  }

}
