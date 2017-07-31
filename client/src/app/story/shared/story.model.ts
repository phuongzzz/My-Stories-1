export interface IStory {
  id: number,
  name: string,
  description: string,
  imageUrl: string,
  total_vote: number,
  number_of_steps: number,
  is_public: boolean,
  due_date: Date,
  user_id: number,
  steps: IStep[]
}

export interface IStep {
  id: number,
  name: string,
  content: string,
  completed_rate: number,
  total_vote: number,
  story_id: number,
  voters_id: number[],
  sub_steps?: object[]
}
