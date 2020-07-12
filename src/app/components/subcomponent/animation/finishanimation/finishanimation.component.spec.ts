import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishanimationComponent } from './finishanimation.component';

describe('FinishanimationComponent', () => {
  let component: FinishanimationComponent;
  let fixture: ComponentFixture<FinishanimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishanimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
