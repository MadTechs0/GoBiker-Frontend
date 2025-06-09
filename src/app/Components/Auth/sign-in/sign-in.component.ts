import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { AwsService } from 'src/app/Services/aws.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm!: FormGroup;
  passwordVisible: boolean = false;
  selectedFile!: File;
  postImg: string | ArrayBuffer | null = "/assets/Images/default_profile.jpg";
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router, private awsService:AwsService){
    this.signInForm = this.fb.group({
      name: ['', Validators.required],
      userName : ['', [Validators.required, Validators.minLength(4)], [authService.usernameAsyncValidator()]],
      email: ['', [Validators.email, Validators.required]],
      phone: [null,],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    });
  }
  signIn(){
    if(this.signInForm.valid){
      this.authService.register(this.signInForm.value).subscribe(
        async (response:any) => {
          console.log('User registered', response);
          localStorage.setItem('token', response.token);
          try {
            if (this.selectedFile) {
              await this.awsService.uploadImage(response.profileUploadUrl, this.selectedFile);
              console.log('Image uploaded successfully');
            }
            this.router.navigate(['/profile']);
          } catch (error) {
            console.error('Error during image upload', error);
          }
        },
        error => {
          if(error.status == 409){
            this.signInForm.get('email')?.setErrors({duplicateEmail:true});
          }
        }
      );
    }else{
      this.signInForm.markAllAsTouched();
      
    }
  }
  passwordValidator(){        
    return /[A-Z]/.test(this.signInForm.get('password')?.value) || /[@*%]/.test(this.signInForm.get('password')?.value);
  }
  
  onFileSelected(event:any):void{
    this.selectedFile = event.target.files[0];
    if(this.selectedFile){
      const reader = new FileReader();

      reader.onload = () =>{
        this.postImg = reader.result;
      };
    reader.readAsDataURL(this.selectedFile);
    }
  }
  
}
