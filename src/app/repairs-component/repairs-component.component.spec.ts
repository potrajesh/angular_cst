import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsComponentComponent } from './repairs-component.component';

describe('RepairsComponentComponent', () => {
  let component: RepairsComponentComponent;
  let fixture: ComponentFixture<RepairsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepairsComponentComponent]
    });
    fixture = TestBed.createComponent(RepairsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
