import { Component, OnInit, HostListener } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  /*template: `<div class="level-right">
                <ng-lottie  width="600px"
                     height="600px"
                     [options]="options" (animationCreated)="animationCreated($event)">
                </ng-lottie>
              </div>
              `,
*/
              styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   screenHeight: number;
    screenWidth: number;

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {
  }

  // Use directive to listen for screen changes
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?){
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
  }
}
