import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-rigester',
  templateUrl: './rigester.component.html',
  styleUrls: ['./rigester.component.css'],
})
export class RigesterComponent implements OnInit {
  registerForm!: FormGroup;
  isPasswordMatch: boolean = true;
  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      confirmpassword: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required),
    });
  }

  onPasswordCheck(): any {
    console.log(this.registerForm.value.confirmPassword);
    if (this.registerForm.value.confirmPassword !== null) {
      if (
        this.registerForm.value.password !==
        this.registerForm.value.confirmpassword
      ) {
        this.isPasswordMatch = true;
        return this.toastr.error(
          'Password and Confirm Password should be same'
        );
      } else {
        this.isPasswordMatch = false;
      }
    }
  }
  onRegister(): any {

    const { email, password, firstname, role, lastname } =
      this.registerForm.value;

      const isEmail_re =
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
      if(!isEmail_re.test(email)){
        return this.toastr.warning('Email should be in proper format')
      }
    const obj = {
      email,
      password,
      firstname,
      lastname,
      role,
    };
    this.authService.registerUser(obj).subscribe(
      (res) => {
        console.log(res);
        this.toastr.success('User Register Successfully');
        this.router.navigate(['/login']);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.toastr.error(err.error.message);
      }
    );
  }
}
