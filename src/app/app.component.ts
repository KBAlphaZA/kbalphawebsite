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

  popUpDialog(){
    console.log(DialogQuoteFormComponent.length);
    const dialogRef = this.dialog.open(DialogQuoteFormComponent);
    dialogRef.afterClosed().subscribe(result => {console.log('Dialog result: ${result}'); });
  }
}

