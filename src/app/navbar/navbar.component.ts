import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  role = '';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe((res) => {
      this.isAuthenticated = res;
      setTimeout(()=>{
        this.role = this.authService.getRole();
      },500)
    });
    this.isAuthenticated = this.authService.isLoggedIn();
    setTimeout(()=>{
      this.role = this.authService.getRole();
    },500)

  }
  onLogout() {
    this.authService.logout();
  }
}
