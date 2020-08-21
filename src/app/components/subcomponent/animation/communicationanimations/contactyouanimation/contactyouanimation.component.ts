import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { animation } from '@angular/animations';

@Component({
  selector: 'app-contactyouanimation',
  template: `
  <div id="contactlottie">
  <ng-lottie [options]="options"
     width="90%"
    height="50%"
    (animationCreated)="animationCreated($event)">
  </ng-lottie>
  `,
  styleUrls: ['./contactyouanimation.component.css']
})
export class ContactyouanimationComponent implements OnInit {

  options: AnimationOptions = {path: 'https://assets3.lottiefiles.com/packages/lf20_IG1Hp6.json' };

  animationCreated(animationItem: AnimationItem): void{console.log(animationItem); }

  constructor() { }

  ngOnInit(): void {
  }

}
