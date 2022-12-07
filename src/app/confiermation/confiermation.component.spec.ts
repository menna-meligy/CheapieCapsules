import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiermationComponent } from './confiermation.component';

describe('ConfiermationComponent', () => {
  let component: ConfiermationComponent;
  let fixture: ComponentFixture<ConfiermationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiermationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiermationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
