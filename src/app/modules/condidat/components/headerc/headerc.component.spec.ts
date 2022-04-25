import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercComponent } from './headerc.component';

describe('HeadercComponent', () => {
  let component: HeadercComponent;
  let fixture: ComponentFixture<HeadercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadercComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
