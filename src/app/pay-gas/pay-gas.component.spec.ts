import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayGasComponent } from './pay-gas.component';

describe('PayGasComponent', () => {
  let component: PayGasComponent;
  let fixture: ComponentFixture<PayGasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayGasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
