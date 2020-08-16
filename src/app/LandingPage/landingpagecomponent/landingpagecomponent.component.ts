import { HostListener, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpagecomponent',
  templateUrl: './landingpagecomponent.component.html',
  styleUrls: ['./landingpagecomponent.component.css']
})



export class LandingpagecomponentComponent implements OnInit {

  constructor() { }
  public innerHeight: number;
  public innerWidth: any;
  //public marginBottom: number;
  ngOnInit(): void {
    //this.innerHeight = window.innerHeight;
    //this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.innerHeight = window.innerHeight;
  this.innerWidth = window.innerWidth;
  console.log(innerWidth , "x" , innerHeight);
}

}
