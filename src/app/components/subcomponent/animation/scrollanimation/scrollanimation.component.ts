import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-scrollanimation',
  template: `
  <div id="lottie">
  <ng-lottie [options]="options"
     width="200px"
    height="200px"
    (animationCreated)="animationCreated($event)">
  </ng-lottie>
 </div>
  `,
})
export class ScrollanimationComponent implements OnInit {

  // options: AnimationOptions = { path: '../src/assets/ScrollAnimation.json',};
  options: AnimationOptions = { path: 'https://assets4.lottiefiles.com/packages/lf20_ADqq0Z.json', };

  animationCreated(animationItem: AnimationItem): void{console.log(animationItem); }
  constructor() { }

  ngOnInit(): void {
  }
}
