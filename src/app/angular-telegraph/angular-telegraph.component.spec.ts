import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTelegraphComponent } from './angular-telegraph.component';

describe('AngularTelegraphComponent', () => {
  let component: AngularTelegraphComponent;
  let fixture: ComponentFixture<AngularTelegraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTelegraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTelegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
