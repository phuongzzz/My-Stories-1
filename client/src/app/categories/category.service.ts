import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
  getAllCategories() {
    return CATEGORIES;
  }
}

const CATEGORIES = [
  {
    id: 1,
    name: "chinh",
    description: "Story 1 description",
    imageUrl: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/20374252_1930835767128251_8927966816889470358_n.jpg?oh=9d58a3e543021fa2e7be55bcc33f7ed8&oe=59FD7F4E",
    story: {

    }
  }
]
