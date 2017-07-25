class Step < ApplicationRecord
  ATTRIBUTES_PARAMS = %i(name content).freeze

  has_many :comments, as: :commentable, dependent: :destroy
  has_many :sub_steps
  has_many :votes, as: :voteable, dependent: :destroy

  accepts_nested_attributes_for :sub_steps, allow_destroy: true

  belongs_to :story

  validates :name, presence: true
  validates :content, presence: true
end
