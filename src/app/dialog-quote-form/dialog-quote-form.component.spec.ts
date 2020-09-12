import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogQuoteFormComponent } from './dialog-quote-form.component';

describe('DialogQuoteFormComponent', () => {
  let component: DialogQuoteFormComponent;
  let fixture: ComponentFixture<DialogQuoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogQuoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogQuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
