import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninreComponent } from './signinre.component';

describe('SigninreComponent', () => {
  let component: SigninreComponent;
  let fixture: ComponentFixture<SigninreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
