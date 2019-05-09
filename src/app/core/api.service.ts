import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Card } from '../model/customer.model';
import { BehaviorSubject } from 'rxjs';
import { Debt } from '../model/Debt.model';

@Injectable()
export class ApiService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    if (localStorage.getItem('token')) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable();
  }
  
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8000/api/';

  userId: string = '8c50eb74ae1a4c0f9f7478db5b45521f';

  waterId: string = "c1bd731d9f394446a1d12e25fd21cc60";

  gasId: string = "ffcba1f43f694c83babe569ddf626ce7";

  electricityId: string = "3996d52748684592862b732914ff2dd4";

  cardId: string  = "44e9d8b3d3174429aa203c57d0bc8e02";

  login(loginPayload) {
    const headers = {
      'Authorization': 'Basic ' + btoa('devglan-client:devglan-secret'),
      'Content-type': 'application/x-www-form-urlencoded'
    }
    this.loggedIn.next(true);

    return this.http.post('http://localhost:8000/' + 'oauth/token', loginPayload, {headers});
  }

  getUsers() {
    this.loggedIn.next(true);
    return this.http.get(this.baseUrl + 'users?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token);
  }

  getUsersById() {
    return this.http.get(this.baseUrl + 'users/' + this.userId + '?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token);
  }

  logout() {
    this.loggedIn.next(false);
    return this.http.get(this.baseUrl + 'logout?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token);
  }

  getCard(){
    return this.http.get(this.baseUrl + 'users/' + this.userId + "/cards/" + this.cardId + '?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token);
  }

  getWater(){
    return this.http.get(this.baseUrl + 'users/' + this.userId + "/waters/" + this.waterId + '?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token);
  }

  getGas(){
    return this.http.get(this.baseUrl + 'users/' + this.userId + "/gases/" + this.gasId + '?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token);
  }

  getElectricity(){
    return this.http.get(this.baseUrl + 'users/' + this.userId + "/electricities/" + this.electricityId + '?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token);
  }

  updateCard(card: Card) {
    return this.http.put(this.baseUrl + 'users/' + this.userId + "/cards/" + this.cardId + '?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token, card);
  }

  updateWater(debt: Debt) {
    return this.http.put(this.baseUrl + 'users/' + this.userId + "/waters/" + this.waterId + '?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token, debt);
  }

  updateGas(debt: Debt) {
    return this.http.put(this.baseUrl + 'users/' + this.userId + "/gases/"  + this.gasId + '?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token, debt);
  }

  updateElectric(debt: Debt) {
    return this.http.put(this.baseUrl + 'users/' + this.userId + "/electricities/"  + this.electricityId + '?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token, debt);
  }
  /*

  updateCustomers(customer: Customers) {
    return this.http.put(this.baseUrl + 'customers/' + customer.id + '?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token, customer);
  }

  getActions() {
    return this.http.get(this.baseUrl + 'roles/actions?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token);
  }

  getScopes() {
    return this.http.get(this.baseUrl + 'roles/actions/scopes?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token);
  }
  
  getRoles() {
    return this.http.get(this.baseUrl + 'roles/system?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token);
  }
  getPermissionsById(id: string) {
    return this.http.get(this.baseUrl + 'roles/' + id + '/default/permissions' + '?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token);
  }

  getCurrencies() {
    return this.http.get(this.baseUrl + 'customers/currencies?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token);
  }

  getLanguages() {
    return this.http.get(this.baseUrl + 'users/languages?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token);
  }

  getGenders() {
    return this.http.get(this.baseUrl + 'users/genders?access_token=' + JSON.parse(window.localStorage.getItem('token')).access_token);
  }*/
}
/*
http://localhost:8000/api/users/{{bank_user_id}}/waters/b3b9ac212e1e4c748e519d400d714e17
http://localhost:8000/api/users/{{bank_user_id}}/electricities/eadd1d2d1ed14a50974ad5150f0710a6
http://localhost:8000/api/users/{{bank_user_id}}/gases/0909f700591b41e195d33a1f72c7df7e
*/
