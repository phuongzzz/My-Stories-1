class Story < ApplicationRecord
  has_many :comments
  has_many :votes
  has_many :reports
  has_many :steps

  belongs_to :user

  validates :name, presence: true
  validates :description, presence: true
end
