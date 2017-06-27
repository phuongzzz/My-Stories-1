class Story < ApplicationRecord
  STORY_PARAMS = [:name, :description, :is_public, :due_date,
    steps_attributes: [:id, :content, :_destroy]].freeze

  has_many :comments
  has_many :votes
  has_many :reports
  has_many :steps, dependent: :destroy, inverse_of: :story
  accepts_nested_attributes_for :steps, reject_if: :all_blank,
    allow_destroy: true

  belongs_to :user

  validates :name, presence: true
  validates :description, presence: true
  validates :due_date, presence: true
end
