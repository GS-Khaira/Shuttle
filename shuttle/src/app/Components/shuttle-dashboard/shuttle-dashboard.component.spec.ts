import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuttleDashboardComponent } from './shuttle-dashboard.component';

describe('ShuttleDashboardComponent', () => {
  let component: ShuttleDashboardComponent;
  let fixture: ComponentFixture<ShuttleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShuttleDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShuttleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
