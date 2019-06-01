import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavWrapperComponent } from './sidenav-wrapper.component';

describe('SidenavWrapperComponent', () => {
  let component: SidenavWrapperComponent;
  let fixture: ComponentFixture<SidenavWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
