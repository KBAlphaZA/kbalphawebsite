import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  readonly LocaldbEmail = 'info@kbalpha.co.za';

  readonly LocaldbPassword = 'LiverpoolRocks';

  emailTextBox = '';

  passwordTextBox = '';

  constructor(private localSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  navigateToAdminMain(){

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

    if ( (userEmail === this.LocaldbEmail) && (userPassword === this.LocaldbPassword)){

      grantacces = true;

    }

    console.log(grantacces);

    return grantacces;

  }

}
