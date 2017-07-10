class Step < ApplicationRecord
  has_many :comments
  has_many :votes, :voteable, :dependent: :destroy

  belongs_to :story
end
