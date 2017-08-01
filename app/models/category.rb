class Category < ApplicationRecord
  ATTRIBUTES_PARAMS = %i(name parent_id).freeze

  has_many :stories

  validates :name, presence: true
end
