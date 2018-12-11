import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesEditComponent } from './opportunities-edit.component';

describe('OpportunitiesEditComponent', () => {
  let component: OpportunitiesEditComponent;
  let fixture: ComponentFixture<OpportunitiesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitiesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
