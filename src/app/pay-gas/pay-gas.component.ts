import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';
import { first } from "rxjs/operators";


@Component({
  selector: 'app-pay-gas',
  templateUrl: './pay-gas.component.html',
  styleUrls: ['./pay-gas.component.css']
})
export class PayGasComponent implements OnInit {

  public editForm: FormGroup;
  public gasForm: FormGroup;
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
      this.router.navigate(['user']);
      return;
    }

    this.gasForm = this.formBuilder.group({
      id: [''],
      debt: ['', Validators.required],
      date: ['', Validators.required]
    });
 this.apiService.getGas()
      .subscribe((data: any) => {
        this.gasForm.setValue(data.data.gas);
        this.debt = data.data.gas.debt;
      });

     
  }

  onSubmit() {
    this.apiService.getCard()
    .subscribe((data: any) => {
      this.card = data.data.card;
      this.balance = this.card.balance;
      console.log(this.balance);

      if((+this.balance - +this.debt) > 0)
      {
        console.log(this.card.balance);

      this.card.balance = +this.card.balance - +this.debt;
      this.gasForm.value.debt = 0;
      this.gasForm.value.date = "     "
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

    this.apiService.updateGas(this.gasForm.value)
    .pipe(first())
    .subscribe(
      data => {
        alert('Gas updated successfully.');

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
