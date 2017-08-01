import { Injectable } from '@angular/core';

@Injectable()
export class StoryService {
  getAllStories() {
    return STORIES;
  }
}

const STORIES = [
  { id: 1, name_user:"chinh", name: "Story 1", description: "Story 1 description", imageUrl: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/20374252_1930835767128251_8927966816889470358_n.jpg?oh=9d58a3e543021fa2e7be55bcc33f7ed8&oe=59FD7F4E"},
  { id: 1, name_user:"chinh", name: "Story 2", description: "Story 1 description", imageUrl: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/20374252_1930835767128251_8927966816889470358_n.jpg?oh=9d58a3e543021fa2e7be55bcc33f7ed8&oe=59FD7F4E"},
  { id: 1, name_user:"chinh", name: "Story 2", description: "Story 1 description", imageUrl: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/20374252_1930835767128251_8927966816889470358_n.jpg?oh=9d58a3e543021fa2e7be55bcc33f7ed8&oe=59FD7F4E"},
  { id: 1, name_user:"chinh", name: "Story 4", description: "Story 1 description", imageUrl: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/20374252_1930835767128251_8927966816889470358_n.jpg?oh=9d58a3e543021fa2e7be55bcc33f7ed8&oe=59FD7F4E"},
  { id: 1, name_user:"chinh", name: "Story 5", description: "Story 1 description", imageUrl: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/20374252_1930835767128251_8927966816889470358_n.jpg?oh=9d58a3e543021fa2e7be55bcc33f7ed8&oe=59FD7F4E"},
  { id: 1, name_user:"chinh", name: "Story 6", description: "Story 1 description", imageUrl: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/20374252_1930835767128251_8927966816889470358_n.jpg?oh=9d58a3e543021fa2e7be55bcc33f7ed8&oe=59FD7F4E"},
]
