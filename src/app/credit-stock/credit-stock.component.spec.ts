import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditStockComponent } from './credit-stock.component';

describe('CreditStockComponent', () => {
  let component: CreditStockComponent;
  let fixture: ComponentFixture<CreditStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
