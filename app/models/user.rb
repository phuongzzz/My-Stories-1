class User < ApplicationRecord
  acts_as_token_authenticatable

  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i

  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  has_many :active_relationships, class_name: Relationship.name,
    foreign_key: "follower_id", dependent: :destroy
  has_many :passive_relationships, class_name: Relationship.name,
    foreign_key: "followed_id", dependent: :destroy
  has_many :following, through: :active_relationships,
    source: :followed
  has_many :followers, through: :passive_relationships,
    source: :follower
  has_many :comments
  has_many :votes
  has_many :reports
  has_many :stories

  validates :name, presence: true,
    length: {maximum: 60}
  validates :email, presence: true,
    length: {maximum: 255},
    format: {with: VALID_EMAIL_REGEX}

  def generate_new_authentication_token
    token = User.generate_unique_secure_token
    update_attributes authentication_token: token
  end
end
