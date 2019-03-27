import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocionGridComponent } from './pocion-grid.component';

describe('PocionGridComponent', () => {
  let component: PocionGridComponent;
  let fixture: ComponentFixture<PocionGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocionGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
