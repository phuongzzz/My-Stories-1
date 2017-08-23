class RelationshipStory < ApplicationRecord
  belongs_to :user
  belongs_to :story

  lambda_find_relationship_story = lambda do |user_id, story_id|
    where user_id: user_id, story_id: story_id
  end

  scope :find_relationship_story, lambda_find_relationship_story

  validates :user, presence: true
  validates :story, presence: true
end
