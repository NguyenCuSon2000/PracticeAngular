import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise8Component } from './exercise8.component';

describe('Exercise8Component', () => {
  let component: Exercise8Component;
  let fixture: ComponentFixture<Exercise8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
