import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm!: FormGroup;
  passwordVisible: boolean = false;
  constructor(private fb: FormBuilder, private authService: AuthService){
    this.signInForm = this.fb.group({
      name: ['', Validators.required],
      userName : ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['',],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    });
  }
  signIn(){
    if(this.signInForm.valid){
      this.authService.register(this.signInForm.value).subscribe(
        (response:any) => {
          console.log('User registered', response);
          localStorage.setItem('token', response.token);        
        },
        error => {
          console.error('Registration failed', error);
        }
      );
    }
  }
  passwordValidator(){
    console.log(this.signInForm.get('password')?.value);
        
    return /[A-Z]/.test(this.signInForm.get('password')?.value) || /[@*%]/.test(this.signInForm.get('password')?.value);
  }
}
