import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitParamsComponent } from './debit-params.component';

describe('DebitParamsComponent', () => {
  let component: DebitParamsComponent;
  let fixture: ComponentFixture<DebitParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebitParamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
