import { Directive, ViewContainerRef} from '@angular/core';

@Directive({
   selector: '[someView]'
  })

export class ViewDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
