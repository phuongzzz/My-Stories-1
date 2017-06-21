class User < ApplicationRecord
  has_many :relationships
  has_many :comments
  has_many :votes
  has_many :reports
  has_many :stories

  validates :name, presence: true,
    length: {maximum: 60}
  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  validates :email, presence: true,
    length: {maximum: 255},
    format: {with: VALID_EMAIL_REGEX}
end
