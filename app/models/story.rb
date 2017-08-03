class Story < ApplicationRecord
  ATTRIBUTES_PARAMS =
    %i(name description is_public due_date category_id picture).freeze

  mount_uploader :picture, PictureUploader

  has_many :comments, as: :commentable
  has_many :votes, as: :voteable, dependent: :destroy
  has_many :reports
  has_many :steps, dependent: :destroy

  belongs_to :user
  belongs_to :category

  lambda_params_category_id = lambda do |params_category_id|
    where category_id: params_category_id
  end

  scope :select_by_category_id, lambda_params_category_id

  validates :name, presence: true
  validates :description, presence: true
  validates :due_date, presence: true
  validates :user, presence: true
  validates :category, presence: true
  validates :is_public, presence: true
end
