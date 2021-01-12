import { HostListener, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platformofferingcomponent',
  templateUrl: './platformofferingcomponent.component.html',
  styleUrls: ['./platformofferingcomponent.component.css']
})
export class PlatformofferingcomponentComponent implements OnInit {

  constructor() { }
  public _innerHeight: any;
  public _innerWidth: number;
  public _innerHeightString: string;

  ngOnInit(): void {}
  @HostListener('window:resize', ['$event'])
  onResize(event) {

    this._innerHeight = window.innerHeight;
    this._innerWidth = window.innerWidth;
    var element = document.getElementById("boxWindow")
    this._innerHeightString = this._innerHeight.toString() + "px";
    
    //element.style.height = this._innerHeightString;
    
  }

}
