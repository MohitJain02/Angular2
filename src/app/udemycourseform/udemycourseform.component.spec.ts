import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemycourseformComponent } from './udemycourseform.component';

describe('UdemycourseformComponent', () => {
  let component: UdemycourseformComponent;
  let fixture: ComponentFixture<UdemycourseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdemycourseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemycourseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
