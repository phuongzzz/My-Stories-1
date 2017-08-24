class User < ApplicationRecord
  acts_as_token_authenticatable

  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  ATTRIBUTES_PARAMS = [:email, :name, :avatar,
    :password, :password_confirmation, :avatar].freeze

  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  mount_base64_uploader :avatar, AvatarUploader

  has_many :active_relationships, class_name: Relationship.name,
    foreign_key: "follower_id", dependent: :destroy
  has_many :passive_relationships, class_name: Relationship.name,
    foreign_key: "followed_id", dependent: :destroy
  has_many :following, through: :active_relationships,
    source: :followed
  has_many :followers, through: :passive_relationships,
    source: :follower
  has_many :followed_story, class_name: RelationshipStory.name,
    dependent: :destroy
  has_many :following_story, through: :followed_story, source: :story
  has_many :comments
  has_many :votes
  has_many :reports
  has_many :stories
  has_many :notifications, as: :notificationable

  lambda_find_user = lambda do |id, type|
    joins(:votes).where votes: {voteable_id: id, voteable_type: type, value: 1}
  end

  scope :find_users_votes, lambda_find_user

  validates :name, presence: true,
    length: {maximum: 60}
  validates :email, presence: true,
    length: {maximum: 255},
    format: {with: VALID_EMAIL_REGEX}

  def generate_new_authentication_token
    token = User.generate_unique_secure_token
    update_attributes authentication_token: token
  end

  def followed_users
    following
  end

  def follower_users
    followers
  end
end
