import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindShuttleComponent } from './find-shuttle.component';

describe('FindShuttleComponent', () => {
  let component: FindShuttleComponent;
  let fixture: ComponentFixture<FindShuttleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindShuttleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindShuttleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
