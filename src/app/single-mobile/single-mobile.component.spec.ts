import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMobileComponent } from './single-mobile.component';

describe('SingleMobileComponent', () => {
  let component: SingleMobileComponent;
  let fixture: ComponentFixture<SingleMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
