class RelationshipStory < ApplicationRecord
  belongs_to :user
  belongs_to :story

  validates :user, presence: true
  validates :story, presence: true
end
