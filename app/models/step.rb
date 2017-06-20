class Step < ApplicationRecord
  has_many :comment
  has_many :vote

  belongs_to :story
end
