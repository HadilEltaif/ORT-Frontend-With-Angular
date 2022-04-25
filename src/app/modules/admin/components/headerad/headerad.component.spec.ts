import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderadComponent } from './headerad.component';

describe('HeaderadComponent', () => {
  let component: HeaderadComponent;
  let fixture: ComponentFixture<HeaderadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
