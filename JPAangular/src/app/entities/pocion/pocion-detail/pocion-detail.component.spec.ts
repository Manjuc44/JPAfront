import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocionDetailComponent } from './pocion-detail.component';

describe('PocionDetailComponent', () => {
  let component: PocionDetailComponent;
  let fixture: ComponentFixture<PocionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
