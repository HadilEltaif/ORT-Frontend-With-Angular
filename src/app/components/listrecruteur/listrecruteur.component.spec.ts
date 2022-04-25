import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrecruteurComponent } from './listrecruteur.component';

describe('ListrecruteurComponent', () => {
  let component: ListrecruteurComponent;
  let fixture: ComponentFixture<ListrecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
