import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})

export class LoginComponent implements OnInit {

  readonly LocaldbEmail = 'info@kbalpha';

  readonly LocaldbPassword = 'LiverpoolRocks';

  emailTextBox = ' ';

  passwordTextBox = ' ';

  constructor(private localSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  navigateToAdminMain(){

    console.log('email: ', this.emailTextBox);

    console.log('password: ', this.passwordTextBox);

    // location.href = '/admin/login/adminView';


    if (this.userAuthentication(this.emailTextBox, this.passwordTextBox)){

        location.href = '/admin/login/adminView';
    }
    else{
        this.localSnackBar.open('Not authorized', ' ' , {duration: 4000});
    }

  }

  // The follwing is the temporary authentication system to the portal.
  userAuthentication(userEmail: string, userPassword: string): boolean{

    let grantacces = false;

    if ( userEmail === this.LocaldbEmail && userPassword === this.LocaldbPassword){

      grantacces = true;

    }

    return grantacces;

  }

  onSubmit(f: NgForm){
    console.log(f.value);
  }

}
