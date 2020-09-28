import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})

export class LoginComponent implements OnInit {

  LocaldbEmail = 'info@kbalpha';

  LocaldbPassword = 'LiverpoolRocks';

  emailTextBox = '';

  passwordTextBox = '';

  constructor(private localSnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  navigateToAdminMain(){

    console.log('in the method', this.emailTextBox);

    if (this.userAuthentication(this.emailTextBox, this.emailTextBox)){

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
