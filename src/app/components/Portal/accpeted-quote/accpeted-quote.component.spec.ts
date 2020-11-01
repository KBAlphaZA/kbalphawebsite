import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccpetedQuoteComponent } from './accpeted-quote.component';

describe('AccpetedQuoteComponent', () => {
  let component: AccpetedQuoteComponent;
  let fixture: ComponentFixture<AccpetedQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccpetedQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccpetedQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
