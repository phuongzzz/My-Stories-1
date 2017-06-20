class Story < ApplicationRecord
  has_many :comment
  has_many :vote
  has_many :report
  has_many :step

  belongs_to :user
end
