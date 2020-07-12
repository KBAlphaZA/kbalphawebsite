import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  /*templateUrl: './home.component.html',*/
  template: `<div class="level-right">
                <ng-lottie  width="600px"
                height="600px"
                [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>
              </div>
              `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  options: AnimationOptions = { path: 'https://assets8.lottiefiles.com/private_files/lf30_ZOuB83.json',

                              };

  animationCreated(animationItem: AnimationItem): void{console.log(animationItem); }

  constructor() { }

  ngOnInit(): void {
  }

}
