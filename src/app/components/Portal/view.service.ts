import { from } from 'rxjs';
import { Injectable } from '@angular/core';

import { CrmdataviewComponent } from './CRMData/crmdataview/crmdataview.component';
import { FinancesviewComponent } from './Finances/financesview/financesview.component';
import { QuotegenerationviewComponent } from './quotegenerationview/quotegenerationview.component';
import { CurrentprojectsviewComponent } from './CurrentProjects/currentprojectsview/currentprojectsview.component';
import { ViewItem } from './view-item';


@Injectable()
export class ViewService{
  getViews(){
    return[
      new ViewItem(CrmdataviewComponent, {}),

      new ViewItem(FinancesviewComponent, {}),

      new ViewItem(QuotegenerationviewComponent, {}),

      new ViewItem(CurrentprojectsviewComponent, {})
    ];
  }
}
