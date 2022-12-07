import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpharmacistsComponent } from './registerpharmacists.component';

describe('RegisterpharmacistsComponent', () => {
  let component: RegisterpharmacistsComponent;
  let fixture: ComponentFixture<RegisterpharmacistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpharmacistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpharmacistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
