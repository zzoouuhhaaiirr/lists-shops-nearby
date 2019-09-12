import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypreferredshopsComponent } from './mypreferredshops.component';

describe('MypreferredshopsComponent', () => {
  let component: MypreferredshopsComponent;
  let fixture: ComponentFixture<MypreferredshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypreferredshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypreferredshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
