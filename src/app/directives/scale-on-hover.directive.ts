import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding,
  Input } from '@angular/core';

@Directive({selector: '[appScaleOnHover]'})

// Eventually for the sake of decoupling, this will have to be used

export class ScaleOnHoverDirective{


  readonly defaultScale = 1;

  readonly scaleFactor = 1.5;

  @HostBinding('style.transform.scale') scale = this.defaultScale;

  @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'scale', this.scaleFactor);
  }


  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'scale', this.defaultScale);
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2){}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(){
    console.log('In the class');
    this.scale = this.defaultScale;
  }
}
