import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaCardComponent } from './raza-card.component';

describe('RazaCardComponent', () => {
  let component: RazaCardComponent;
  let fixture: ComponentFixture<RazaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
