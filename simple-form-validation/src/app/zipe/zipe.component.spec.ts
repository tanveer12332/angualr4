import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipeComponent } from './zipe.component';

describe('ZipeComponent', () => {
  let component: ZipeComponent;
  let fixture: ComponentFixture<ZipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
