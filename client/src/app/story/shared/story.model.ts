export interface IStory {
  id: number,
  name: string,
  description: string,
  picture: string,
  total_vote: number,
  number_of_steps: number,
  is_public: boolean,
  due_date: Date,
  user_id: number,
  steps: IStep[],
  comments: IComment[],
  users_voted: IUserVote[]
}

export interface IStep {
  id: number,
  name: string,
  content: string,
  completed_rate: number,
  total_vote: number,
  story_id: number,
  voters_id: number[],
  sub_steps?: object[],
  created_at?: string,
  updated_at?: string,
  users_voted: IUserVote[]
}

export interface IComment {
  commentable_id: number,
  commentable_type: string,
  content: string,
  created_at?: string,
  id?: number,
  updated_at?: string,
  user_name: string,
}

export interface IUserVote {
  id: number,
  email?: string,
  name: string,
  avatar?: any,
  created_at?: string,
  updated_at?: string,
  authentication_token?: string
}
