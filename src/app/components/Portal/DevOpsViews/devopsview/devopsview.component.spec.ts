import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsviewComponent } from './devopsview.component';

describe('DevopsviewComponent', () => {
  let component: DevopsviewComponent;
  let fixture: ComponentFixture<DevopsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevopsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
