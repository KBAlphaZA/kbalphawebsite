import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyoupopComponent } from './thankyoupop.component';

describe('ThankyoupopComponent', () => {
  let component: ThankyoupopComponent;
  let fixture: ComponentFixture<ThankyoupopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyoupopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyoupopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
