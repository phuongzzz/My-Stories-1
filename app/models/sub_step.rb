class SubStep < ApplicationRecord
  belongs_to :step, optional: true

  scope :completed, ->{where is_completed: true}

  validates :name, presence: true
  validates :content, presence: true
end
