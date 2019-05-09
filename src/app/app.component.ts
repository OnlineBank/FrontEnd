import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './core/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ttq-backoffice';
  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router,private apiService: ApiService) { }

  ngOnInit(){
    this.isLoggedIn$ = this.apiService.isLoggedIn;
  }

  public logout(): void {
    this.apiService.logout();
    window.localStorage.removeItem('token');
    this.router.navigate(['/login']);
  };

  public addCustomer(): void {
    this.router.navigate(['add-customer']);
  };

  public roles(): void {
    this.router.navigate(['roles']);
  };

  public listCustomers(): void {
    this.router.navigate(['user']);
  };
}
