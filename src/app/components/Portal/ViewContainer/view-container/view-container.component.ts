import { Component, OnInit, Input, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ViewItem } from '../../view-item';
import { ViewComponent } from '../../view.component';
import { ViewDirective } from '../../view.directive';


@Component({
  selector: 'app-view-container',
  template: `
            <div class="mainContainer">
            <h3>Title of Item selected</h3>
            <ng-template someView></ng-template>
            </div>
  `,
  styleUrls: ['./view-container.component.css']
})
export class ViewContainerComponent implements OnInit, OnDestroy {

  @Input() views: ViewItem[];

  @ViewChild(ViewDirective, {static: true})
  someView: ViewDirective;

  currentViewIndex = -1;

  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
     // this.loadComponent(); Check the documentation with the follwing Url
     //
     this.getViews();
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

  loadComponent(){
    this.currentViewIndex = (this.currentViewIndex + 1) % this.views.length;
    const viewItem = this.views[this.currentViewIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(viewItem.component);

    const viewContainerRef = this.someView.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<ViewComponent>(componentFactory);
    componentRef.instance.data = viewItem.data;
  }

  getViews(){
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
