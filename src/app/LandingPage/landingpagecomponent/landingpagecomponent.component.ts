import { HostListener, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpagecomponent',
  templateUrl: './landingpagecomponent.component.html',
  styleUrls: ['./landingpagecomponent.component.css']
})



export class LandingpagecomponentComponent implements OnInit {

  constructor() {

    }
  public _innerHeight: any;
  public _innerWidth: number;
  public _innerHeightString: string;

  ngOnInit(): void {}
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this._innerHeight = window.innerHeight;
    this._innerWidth = window.innerWidth;
    var element = document.getElementById("headerImage")
    this._innerHeightString = this._innerHeight.toString() + "px";
    
    //
    // We need to fix the box issue before implmenting the resizing solution
    //

    //element.style.height = this._innerHeightString;
    
  }
}
