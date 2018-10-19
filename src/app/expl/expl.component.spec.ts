import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplComponent } from './expl.component';

describe('ExplComponent', () => {
  let component: ExplComponent;
  let fixture: ComponentFixture<ExplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
