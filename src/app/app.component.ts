import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { DialogQuoteFormComponent } from './dialog-quote-form/dialog-quote-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'kbalphawebsite';

  dialog: MatDialog;

  constructor(public dialogTwo: MatDialog){}

  openForm(){
     //const dialogRef = this.dialogTwo.open(DialogQuoteFormComponent, {height: '80%', width: '90%'});
     location.href='quoteform';
  }
}
