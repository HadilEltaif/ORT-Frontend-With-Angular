import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderrComponent } from './headerr.component';

describe('HeaderrComponent', () => {
  let component: HeaderrComponent;
  let fixture: ComponentFixture<HeaderrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
