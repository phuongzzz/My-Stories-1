import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotStoriesComponent } from './hot-stories.component';

describe('HotStoriesComponent', () => {
  let component: HotStoriesComponent;
  let fixture: ComponentFixture<HotStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
