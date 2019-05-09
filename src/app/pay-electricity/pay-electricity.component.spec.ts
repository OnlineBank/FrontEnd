import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayElectricityComponent } from './pay-electricity.component';

describe('PayElectricityComponent', () => {
  let component: PayElectricityComponent;
  let fixture: ComponentFixture<PayElectricityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayElectricityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
