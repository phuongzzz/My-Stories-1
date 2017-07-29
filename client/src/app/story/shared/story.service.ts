import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class StoryService {
  getStories() {
    const subject = new Subject();
    setTimeout(() => {subject.next(STORIES); subject.complete(); },
      2000);
    return subject;
  }

  getStory(id: number) {
    return STORIES.find(story => story.id === id);
  }
}

const STORIES = [
  {
    id: 1,
    name: 'Phuong Story',
    description: 'This is the first story ever on this system',
    imageUrl: 'https://static.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg',
    total_vote: 5,
    number_of_steps: 5,
    is_public: true,
    due_date: '2017-07-25',
    user_id: 1,
    steps: [
      {
        id: 1,
        name: 'First Step',
        content: 'First Step Content',
        total_vote: 4,
        sub_steps: [
          {
            id: 1,
            name: 'Substep 1',
            content: 'Nhieu vl'
          },
          {
            id: 2,
            name: 'Substep 2',
            content: 'Sao lam the'
          }
        ]
      },
      {
        id: 2,
        name: 'Second Step',
        content: 'Second Step Content',
        total_vote: 6,
        sub_steps: [
          {
            id: 4,
            name: 'Substep 1 cua cai thu 2',
            content: 'Nhieu vl'
          },
          {
            id: 3,
            name: 'Substep 2 cua cai thu 2',
            content: 'Sao lam the, demama'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Phuc Story',
    description: 'This is Phuc Story',
    imageUrl: 'https://i.pinimg.com/originals/63/97/23/639723a34ff2644545e6390d51625b9d.jpg',
    total_vote: 9,
    number_of_steps: 2,
    is_public: true,
    due_date: '2017-07-26',
    user_id: 2,
    steps: [
      {
        id: 3,
        name: 'First Step of Phuc',
        content: 'First Step Content of Phuc',
        total_vote: 9,
        sub_steps: [
          {
            id: 5,
            name: 'Substep 1 cua Phuc',
            content: 'Nhieu vl ra ong a'
          },
          {
            id: 6,
            name: 'Substep 2 cua Phuc',
            content: 'Sao lam the ong ei'
          }
        ]
      },
      {
        id: 4,
        name: 'Second Step cua Phuc',
        content: 'Second Step Content cua Phuc',
        total_vote: 60,
        sub_steps: [
          {
            id: 7,
            name: 'Substep 1 cua cai thu 2 cua Phuc',
            content: 'Nhieu vl, det mo kho vl'
          },
          {
            id: 8,
            name: 'Substep 2 cua cai thu 2 cua Phuc',
            content: 'Sao lam the, demama, dai vkl'
          }
        ]
      }
    ]
  },
]
