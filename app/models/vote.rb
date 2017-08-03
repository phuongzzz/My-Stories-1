class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :voteable, polymorphic: true

  lambda_find_vote = lambda do |id, type|
    where voteable_id: id, voteable_type: type, value: 1
  end

  scope :find_total_vote, lambda_find_vote
end
