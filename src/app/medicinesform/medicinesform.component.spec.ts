import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesformComponent } from './medicinesform.component';

describe('MedicinesformComponent', () => {
  let component: MedicinesformComponent;
  let fixture: ComponentFixture<MedicinesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinesformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
