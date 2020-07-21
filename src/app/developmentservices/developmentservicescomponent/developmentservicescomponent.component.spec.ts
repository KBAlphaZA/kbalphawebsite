import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentservicescomponentComponent } from './developmentservicescomponent.component';

describe('DevelopmentservicescomponentComponent', () => {
  let component: DevelopmentservicescomponentComponent;
  let fixture: ComponentFixture<DevelopmentservicescomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentservicescomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentservicescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
