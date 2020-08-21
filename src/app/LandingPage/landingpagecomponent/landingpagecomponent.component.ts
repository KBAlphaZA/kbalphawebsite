import { HostListener, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpagecomponent',
  templateUrl: './landingpagecomponent.component.html',
  styleUrls: ['./landingpagecomponent.component.css']
})



export class LandingpagecomponentComponent implements OnInit {

<<<<<<< HEAD
  constructor() { 

    }
  public innerHeight: any;
  public innerWidth: number;

  get myStyles():any{
    return {
      'height': innerHeight
    };
=======
  constructor() { }
  public innerHeight: number;
  public innerWidth: any;
  //public marginBottom: number;
  ngOnInit(): void {
    //this.innerHeight = window.innerHeight;
    //this.innerWidth = window.innerWidth;
>>>>>>> a07a87487be930ce24cce581577da46faacc0e7d
  }

  ngOnInit(): void {}
  @HostListener('window:resize', ['$event'])
  onResize(event) {
<<<<<<< HEAD
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
  }
=======
  this.innerHeight = window.innerHeight;
  this.innerWidth = window.innerWidth;
  console.log(innerWidth , "x" , innerHeight);
}

>>>>>>> a07a87487be930ce24cce581577da46faacc0e7d
}
