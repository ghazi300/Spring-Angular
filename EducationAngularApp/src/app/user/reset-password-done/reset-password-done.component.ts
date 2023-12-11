import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-reset-password-done',
  templateUrl: './reset-password-done.component.html',
  styleUrls: ['./reset-password-done.component.css']
})
export class ResetPasswordDoneComponent {
  constructor(private authService:AuthService,private _router:Router,private toast:ToastrService) {
  }
  form: any={};

  onSubmit(a: NgForm) {
    const { email, otp, password } = this.form;
    this.authService.resertPassword(email,otp,password).subscribe(()=>{
      this.toast.success("password changed succeccefully try to login !" );
      this._router.navigate(['/user/signin']);


    },error => {
      console.log(error);
    });


  }
}
