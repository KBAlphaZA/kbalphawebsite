import { Component, Input, OnDestroy, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ViewItem } from '../../view-item';
import { ViewComponent } from '../../view.component';
import { ViewDirective } from '../../view.directive';
import { ViewService } from '../../view.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  views: ViewItem[];

  selectedItem: string;

  menuitems: Menu[] =  [
    {menuItemText: 'Quotes', menuItemIcon: 'receipt', viewLink: ' '},
    {menuItemText: 'Current Projects', menuItemIcon: 'construction', viewLink: ' '},
    {menuItemText: 'Finances', menuItemIcon: 'attach_money', viewLink: ''},
    {menuItemText: 'CRM', menuItemIcon: 'contacts', viewLink: ''},
    {menuItemText: 'Dev ops', menuItemIcon: 'code', viewLink: ''}
  ];


  constructor() { }

  ngOnInit(): void {
     // goes in the constructor --> private viewService: ViewService
     // this.views = this.viewService.getViews();
  }

}

export interface Menu{
  menuItemText: string;
  menuItemIcon: string;
  viewLink: string;
}
