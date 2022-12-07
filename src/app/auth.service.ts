import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: Subject<boolean> = new Subject();
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  registerUser(data: any) {
    return this.http.post(`${environment.baseUrl}auth/register`, data);
  }

  loginUser(data: any) {
    return this.http.post<any>(`${environment.baseUrl}auth/login`, data);
  }

  setToken(token: any) {
    this.isAuthenticated.next(true);
    localStorage.setItem('token', token);
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return token !== null;
  }

  getToken() {
    return localStorage.getItem('token')
  }
  getRole() {
    const helper = new JwtHelperService();
    const token:any=this.getToken()
    const decodedToken = helper.decodeToken(token);
   console.log(decodedToken);

   return decodedToken.role

  }



  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated.next(false);
    this.toastr.success('Logout Successfully');
    this.router.navigate(['/login']);
  }
}
