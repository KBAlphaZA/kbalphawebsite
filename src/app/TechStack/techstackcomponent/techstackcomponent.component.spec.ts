import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechstackcomponentComponent } from './techstackcomponent.component';

describe('TechstackcomponentComponent', () => {
  let component: TechstackcomponentComponent;
  let fixture: ComponentFixture<TechstackcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechstackcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechstackcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
