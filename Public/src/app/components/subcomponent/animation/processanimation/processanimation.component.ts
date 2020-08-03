import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-processanimation',
  template:`
  <div>
    <ng-lottie [options]="options"
       width="100px"
      height="100px"
      (animationCreated)="animationCreated($event)">
    </ng-lottie>
   </div>
  `
})
export class ProcessanimationComponent implements OnInit {
  options: AnimationOptions = { path: 'https://assets10.lottiefiles.com/packages/lf20_DVSwGQ.json',};

  animationCreated(animationItem: AnimationItem): void{console.log(animationItem); }
  constructor() { }

  ngOnInit(): void {
  }

}
