import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormToAddTopicsComponent } from './new-form-to-add-topics.component';

describe('NewFormToAddTopicsComponent', () => {
  let component: NewFormToAddTopicsComponent;
  let fixture: ComponentFixture<NewFormToAddTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormToAddTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormToAddTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
