import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWaitingComponent } from './dashboard-waiting.component';

describe('DashboardWaitingComponent', () => {
  let component: DashboardWaitingComponent;
  let fixture: ComponentFixture<DashboardWaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWaitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
