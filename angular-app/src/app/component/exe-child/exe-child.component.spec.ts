import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeChildComponent } from './exe-child.component';

describe('ExeChildComponent', () => {
  let component: ExeChildComponent;
  let fixture: ComponentFixture<ExeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
