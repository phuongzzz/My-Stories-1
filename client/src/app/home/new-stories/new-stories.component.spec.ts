import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStoriesComponent } from './new-stories.component';

describe('NewStoriesComponent', () => {
  let component: NewStoriesComponent;
  let fixture: ComponentFixture<NewStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
