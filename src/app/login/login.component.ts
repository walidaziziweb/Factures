import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import ValidateForm from 'app/helpers/validateform';
import { AuthService } from 'app/services/auth.service';
import { UserStoreService } from 'app/services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  type: string = "password";
  isText: boolean = false ;
  eyeIcon: string ="fa-eye-slash";
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
     private auth: AuthService, 
     private router: Router,
     private toast: NgToastService,
     private userStore:UserStoreService){}
  ngOnInit(): void{
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type ="text" : this.type="password";
  }
  onLogin(){
    if(this.loginForm.valid){
      // send the obj to Database
      console.log(this.loginForm.value);

      this.auth.login(this.loginForm.value).subscribe({
          next: (res => {
           // alert(res.message)
            console.log(res.message)
            this.loginForm.reset();
            this.auth.storeToken(res.token);
            const tokenPayload = this.auth.decodedToken();
            this.userStore.setFullNameFormStore(tokenPayload.name);
            this.userStore.setFullNameFormStore(tokenPayload.role);
            this.toast.success({ detail: "SUCCESS", summary: res.message, duration: 5000 });
            this.router.navigate(['dashboard']);

          }),
          error: (err => {
          //  alert("");
            this.toast.error({ detail: "ERROR", summary:err.error.message, duration: 5000 });
            console.log(err);
          })
        })
    }else{
      //throw in the error using toaster and with required files
      ValidateForm.validateAllFormFileds(this.loginForm);
      //alert("your form is invalide")
    }
  }

}
