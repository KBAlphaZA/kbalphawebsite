import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financesview',
  templateUrl: './financesview.component.html',
  styleUrls: ['./financesview.component.css']
})


export class FinancesviewComponent implements OnInit {


  pvtCountDownValues: CountDownValue = {
                                          days: new Date().getDate(),
                                          hours: 3453,
                                          minutes: 23423,
                                          seconds: new Date().getSeconds()
                                        };


  constructor() { this.ngOnInit(); }

  ngOnInit(): void {

    const taxReturnDate = new Date(2021, 2, 1);

    const currentDate = new Date();
  }

  startCountDownTimer(taxReturnFillingDueDate: Date){

    const todaysCurrentDate = Date.now();


  }

}

interface CountDownValue{
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

