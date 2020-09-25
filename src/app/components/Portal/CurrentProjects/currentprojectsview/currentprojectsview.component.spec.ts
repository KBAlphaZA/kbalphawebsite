import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentprojectsviewComponent } from './currentprojectsview.component';

describe('CurrentprojectsviewComponent', () => {
  let component: CurrentprojectsviewComponent;
  let fixture: ComponentFixture<CurrentprojectsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentprojectsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentprojectsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
