import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuildComponent } from './inbuild.component';

describe('InbuildComponent', () => {
  let component: InbuildComponent;
  let fixture: ComponentFixture<InbuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
