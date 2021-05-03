import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudEvaluationComponent } from './cloud-evaluation.component';

describe('CloudEvaluationComponent', () => {
  let component: CloudEvaluationComponent;
  let fixture: ComponentFixture<CloudEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
