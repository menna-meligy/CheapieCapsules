import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandersComponent } from './demanders.component';

describe('DemandersComponent', () => {
  let component: DemandersComponent;
  let fixture: ComponentFixture<DemandersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
