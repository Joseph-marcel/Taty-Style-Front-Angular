import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStockHistoryComponent } from './get-stock-history.component';

describe('GetStockHistoryComponent', () => {
  let component: GetStockHistoryComponent;
  let fixture: ComponentFixture<GetStockHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetStockHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetStockHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
