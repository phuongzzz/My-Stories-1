class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :story
  belongs_to :step

  validates :vote_value, presence: true
end
