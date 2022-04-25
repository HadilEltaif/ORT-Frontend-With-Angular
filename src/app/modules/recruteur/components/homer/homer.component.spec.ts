import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerComponent } from './homer.component';

describe('HomerComponent', () => {
  let component: HomerComponent;
  let fixture: ComponentFixture<HomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
