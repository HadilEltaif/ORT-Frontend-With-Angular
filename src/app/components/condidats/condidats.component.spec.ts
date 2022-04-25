import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidatsComponent } from './condidats.component';

describe('CondidatsComponent', () => {
  let component: CondidatsComponent;
  let fixture: ComponentFixture<CondidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
