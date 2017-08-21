import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThumbnailComponent } from './step-thumbnail.component';

describe('StepThumbnailComponent', () => {
  let component: StepThumbnailComponent;
  let fixture: ComponentFixture<StepThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
