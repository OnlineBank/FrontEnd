import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayWaterComponent } from './pay-water.component';

describe('PayWaterComponent', () => {
  let component: PayWaterComponent;
  let fixture: ComponentFixture<PayWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
