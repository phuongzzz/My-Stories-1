class Story < ApplicationRecord
  ATTRIBUTES_PARAMS = %i(name description is_public due_date).freeze

  has_many :comments
  has_many :votes, as: :voteable, dependent: :destroy
  has_many :reports
  has_many :steps, dependent: :destroy

  belongs_to :user

  validates :name, presence: true
  validates :description, presence: true
  validates :due_date, presence: true
  validates :user, presence: true
end
