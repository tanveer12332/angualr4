import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderFormComponent } from './form-builder-form.component';

describe('FormBuilderFormComponent', () => {
  let component: FormBuilderFormComponent;
  let fixture: ComponentFixture<FormBuilderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
