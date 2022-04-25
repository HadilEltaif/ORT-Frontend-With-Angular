import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOffreComponent } from './create-offre.component';

describe('CreateOffreComponent', () => {
  let component: CreateOffreComponent;
  let fixture: ComponentFixture<CreateOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
