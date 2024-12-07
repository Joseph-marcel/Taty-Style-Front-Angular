import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitStockComponent } from './debit-stock.component';

describe('DebitStockComponent', () => {
  let component: DebitStockComponent;
  let fixture: ComponentFixture<DebitStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebitStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
