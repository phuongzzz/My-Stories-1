class Step < ApplicationRecord
  has_many :comments
  has_many :votes, as: :voteable, dependent: :destroy

  belongs_to :story

  validates :content, presence: true
end
