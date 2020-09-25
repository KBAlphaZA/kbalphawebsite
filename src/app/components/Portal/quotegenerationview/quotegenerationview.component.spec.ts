import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotegenerationviewComponent } from './quotegenerationview.component';

describe('QuotegenerationviewComponent', () => {
  let component: QuotegenerationviewComponent;
  let fixture: ComponentFixture<QuotegenerationviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotegenerationviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotegenerationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
