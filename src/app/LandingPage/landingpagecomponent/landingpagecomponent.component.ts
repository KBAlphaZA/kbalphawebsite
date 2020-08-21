import { HostListener,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpagecomponent',
  templateUrl: './landingpagecomponent.component.html',
  styleUrls: ['./landingpagecomponent.component.css']
})



export class LandingpagecomponentComponent implements OnInit {

  constructor() { 

    }
  public innerHeight: any;
  public innerWidth: number;

  get myStyles():any{
    return {
      'height': innerHeight
    };
  }

  ngOnInit(): void {}
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
  }
}
