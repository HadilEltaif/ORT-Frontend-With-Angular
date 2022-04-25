import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteradComponent } from './footerad.component';

describe('FooteradComponent', () => {
  let component: FooteradComponent;
  let fixture: ComponentFixture<FooteradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooteradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooteradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
