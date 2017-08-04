class SubStep < ApplicationRecord
  mount_base64_uploader :picture, PictureUploader

  belongs_to :step, optional: true

  scope :completed, ->{where is_completed: true}

  validates :name, presence: true
  validates :content, presence: true
end
