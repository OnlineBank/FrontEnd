import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';
import { first } from "rxjs/operators";


@Component({
  selector: 'app-pay-customer',
  templateUrl: './pay-water.component.html',
  styleUrls: ['./pay-water.component.css']
})
export class PayWaterComponent implements OnInit {

  public editForm: FormGroup;
  public waterForm: FormGroup;
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

    this.waterForm = this.formBuilder.group({
      id: [''],
      debt: ['', Validators.required],
      date: ['', Validators.required]
    });
 this.apiService.getWater()
      .subscribe((data: any) => {
        this.waterForm.setValue(data.data.gas);
        this.debt = data.data.gas.debt;
      });


 
  }

  onSubmit() {
      this.apiService.getCard()
      .subscribe((data: any) => {
        this.card = data.data.card;
        this.balance = this.card.balance;
        if((+this.balance - +this.debt) > 0)
        {
        this.card.balance = +this.card.balance - +this.debt;
        this.waterForm.value.debt = 0;
        this.waterForm.value.date = "     "
        }else{
          this.error = true;
        }
       });

    if(this.error === true)
    {
    alert('Not enough money!');
    return;
    }
    console.log('card',this.card);

    this.apiService.updateWater(this.waterForm.value)
    .pipe(first())
    .subscribe(
      data => {
        alert('water updated successfully.');
      });

   this.apiService.updateCard(this.card)
      .pipe(first())
      .subscribe(
        data => {
          alert('card updated successfully.');
          this.router.navigate(['user']);
        });
  }

}
