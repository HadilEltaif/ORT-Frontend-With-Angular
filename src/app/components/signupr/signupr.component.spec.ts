import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuprComponent } from './signupr.component';

describe('SignuprComponent', () => {
  let component: SignuprComponent;
  let fixture: ComponentFixture<SignuprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignuprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
