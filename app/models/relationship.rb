class Relationship < ApplicationRecord
  belongs_to :follower, class_name: User.name
  belongs_to :followed, class_name: User.name

  lambda_find_relationship = lambda do |follower_id, followed_id|
    where follower_id: follower_id, followed_id: followed_id
  end

  scope :find_relationship, lambda_find_relationship

  validates :follower_id, presence: true
  validates :followed_id, presence: true
end
