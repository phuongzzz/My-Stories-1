import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryindexComponent } from './storyindex.component';

describe('StoryindexComponent', () => {
  let component: StoryindexComponent;
  let fixture: ComponentFixture<StoryindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
