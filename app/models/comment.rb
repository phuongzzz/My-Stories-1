class Comment < ApplicationRecord
  ATTRIBUTES_PARAMS = %i(content).freeze
  belongs_to :user
  belongs_to :commentable, polymorphic: true

  lambda_params_stories = lambda do |params_stories_id|
    where(commentable_type: Story.name, commentable_id: params_stories_id)
  end

  lambda_params_steps = lambda do |params_steps_id|
    where(commentable_type: Step.name, commentable_id: params_steps_id)
  end

  scope :comments_for_story, lambda_params_stories
  scope :comments_for_step, lambda_params_steps

  validates :content, presence: true
end
