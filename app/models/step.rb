class Step < ApplicationRecord
  has_many :comments
  has_many :votes

  belongs_to :story

  validates :content, presence: true
end
