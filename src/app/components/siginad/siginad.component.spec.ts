import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginadComponent } from './siginad.component';

describe('SiginadComponent', () => {
  let component: SiginadComponent;
  let fixture: ComponentFixture<SiginadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiginadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiginadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
