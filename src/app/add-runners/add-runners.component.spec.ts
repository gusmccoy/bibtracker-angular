import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRunnersComponent } from './add-runners.component';

describe('AddRunnersComponent', () => {
  let component: AddRunnersComponent;
  let fixture: ComponentFixture<AddRunnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRunnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRunnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
