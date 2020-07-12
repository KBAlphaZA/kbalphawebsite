import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessanimationComponent } from './processanimation.component';

describe('ProcessanimationComponent', () => {
  let component: ProcessanimationComponent;
  let fixture: ComponentFixture<ProcessanimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessanimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
