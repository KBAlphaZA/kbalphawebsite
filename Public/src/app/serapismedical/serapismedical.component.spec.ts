import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerapismedicalComponent } from './serapismedical.component';

describe('SerapismedicalComponent', () => {
  let component: SerapismedicalComponent;
  let fixture: ComponentFixture<SerapismedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerapismedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerapismedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
