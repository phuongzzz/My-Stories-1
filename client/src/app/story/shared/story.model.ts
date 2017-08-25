export interface IStory {
  id: number,
  name: string,
  description: string,
  picture: any,
  total_vote: number,
  number_of_steps: number,
  is_public: boolean,
  due_date: Date,
  user_id: number,
  steps: IStep[],
  comments: IComment[],
  users_voted: IUserVote[],
  created_at: string
}

export interface IStep {
  id: number,
  name: string,
  content: string,
  completed_rate: number,
  total_vote: number,
  story_id: number,
  sub_steps?: ISubStep[],
  created_at?: string,
  updated_at?: string,
  users_voted: IUserVote[],
  comments: IComment[]
}

export interface ISubStep {
  content: string,
  created_at: string,
  id: number,
  is_completed: boolean,
  name: string,
  picture?: string,
  step_id: number,
  updated_at: string
}

export interface IComment {
  commentable_id: number,
  commentable_type: string,
  content: string,
  created_at?: string,
  id?: number,
  updated_at?: string,
  user_name: string,
  user_id?: number
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
