import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruteurprofileComponent } from './recruteurprofile.component';

describe('RecruteurprofileComponent', () => {
  let component: RecruteurprofileComponent;
  let fixture: ComponentFixture<RecruteurprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruteurprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruteurprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
