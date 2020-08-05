import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRunnersComponent } from './log-runners.component';

describe('LogRunnersComponent', () => {
  let component: LogRunnersComponent;
  let fixture: ComponentFixture<LogRunnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogRunnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogRunnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
