import { Injectable } from '@angular/core';

@Injectable()
export class StoryService {
  getAllStories() {
    return STORIES;
  }

  getStory(id: number) {
    return STORIES.find(story => story.id === id)
  }
}

const STORIES = [
  { id: 1, name: "Story 1", description: "Story 1 description", imageUrl: "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/20245991_1927491454129349_8695881823121263491_n.jpg?oh=b6c851c88cdd6b61845f02db00710050&oe=59F8EF63" },
  { id: 2, name: "Story 2", description: "Story 2 description", imageUrl: "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/19875487_1921257118086116_533189366890095691_n.jpg?oh=4e149ed31d63afaf6e1f80fc908da05f&oe=59F54520" },
  { id: 3, name: "Story 3", description: "Story 3 description", imageUrl: "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/19657464_1919332308278597_5193691111643115388_n.jpg?oh=0a5a62a86e64d9803c8311c472657de1&oe=59FB5A10" },
  { id: 4, name: "Story 4", description: "Story 4 description", imageUrl: "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/19059460_1908138622731299_5938846659345776813_n.jpg?oh=4a8229d4793667916dd6d7ff9da01377&oe=5A379896" },
  { id: 5, name: "Story 5", description: "Story 5 description", imageUrl: "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/18765701_1900659010145927_1160420934129052524_n.jpg?oh=404eb707e17ef1758cbf74f7e606640d&oe=5A0520C1" },
]
