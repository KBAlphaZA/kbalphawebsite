import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactyouanimationComponent } from './contactyouanimation.component';

describe('ContactyouanimationComponent', () => {
  let component: ContactyouanimationComponent;
  let fixture: ComponentFixture<ContactyouanimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactyouanimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactyouanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
