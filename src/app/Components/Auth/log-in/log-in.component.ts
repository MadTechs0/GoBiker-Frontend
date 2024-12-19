import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm!:FormGroup;
  passwordVisible: boolean = false;
  loginError: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }
  logIn(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(
        (res:any )=> {
          console.log(res) 
          localStorage.setItem('token', res.token);
          this.router.navigate(['/profile']);
        },
        error => {
          if(error.status != 500){
            this.loginError = error.error.message;            
          }
          console.error('Login failed', error);
        }
      );
    }else{
      this.loginForm.markAllAsTouched();
    }
  }
}
