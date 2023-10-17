import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'app/helpers/validateform';
import { AuthService } from 'app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;
  public message:any;
  constructor(private fb: FormBuilder, 
    private auth: AuthService ,
    private router: Router,
    private toast: NgToastService) { }
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    //  role: ['', Validators.required]
    })
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  onSignup() {
    if (this.signUpForm.valid) {
      // send the obj to Database
      this.auth.signUp(this.signUpForm.value)
      .subscribe({
          next:(res=>{
             this.toast.success({ detail: "SUCCESS", summary: res.message, duration: 5000 });
              this.signUpForm.reset();
              this.router.navigate(['login']);
          })
          ,error:(err=>{
            this.toast.error({ detail: "ERROR", summary: err.error.message, duration: 10000 });
            alert(err?.error.message)
           console.log(err?.error.message);
          })
        })
    } else {
      //throw in the error using toaster and with required files
      ValidateForm.validateAllFormFileds(this.signUpForm);
      
    }
  }

}
