import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustApplyComponent } from './cust-apply.component';

describe('CustApplyComponent', () => {
  let component: CustApplyComponent;
  let fixture: ComponentFixture<CustApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustApplyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
