import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmdataviewComponent } from './crmdataview.component';

describe('CrmdataviewComponent', () => {
  let component: CrmdataviewComponent;
  let fixture: ComponentFixture<CrmdataviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmdataviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmdataviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
