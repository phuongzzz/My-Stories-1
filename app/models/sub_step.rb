class SubStep < ApplicationRecord
  belongs_to :step, optional: true

  validates :name, presence: true
  validates :content, presence: true
end
