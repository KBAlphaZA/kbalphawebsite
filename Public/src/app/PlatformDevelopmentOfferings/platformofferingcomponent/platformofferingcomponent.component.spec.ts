import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformofferingcomponentComponent } from './platformofferingcomponent.component';

describe('PlatformofferingcomponentComponent', () => {
  let component: PlatformofferingcomponentComponent;
  let fixture: ComponentFixture<PlatformofferingcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformofferingcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformofferingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
