import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancesviewComponent } from './financesview.component';

describe('FinancesviewComponent', () => {
  let component: FinancesviewComponent;
  let fixture: ComponentFixture<FinancesviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancesviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
