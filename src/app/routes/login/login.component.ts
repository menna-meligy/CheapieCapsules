import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  onLogin(): any {
    this.authService.loginUser(this.loginForm.value).subscribe(
      (res) => {
        console.log(res);
        this.toastr.success('User Login Successfully');
        this.authService.setToken(res.token);
        if (res.role === 'demander') {
          this.router.navigate(['/buyer'])
        }
        else if(res.role ==='supplier'){
          this.router.navigate(['/giver'])
        }
        else{
         this.router.navigate(['/medicineform'])
        }
      },
      (err: HttpErrorResponse) => {
        this.toastr.error(err.error.message);
      }
    );
  }
}
