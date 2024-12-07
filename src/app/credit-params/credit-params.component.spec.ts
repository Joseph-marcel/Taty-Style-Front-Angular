import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditParamsComponent } from './credit-params.component';

describe('CreditParamsComponent', () => {
  let component: CreditParamsComponent;
  let fixture: ComponentFixture<CreditParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditParamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
