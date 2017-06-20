class User < ApplicationRecord
  has_many :relationship
  has_many :comment
  has_many :vote
  has_many :report
  has_many :story
end
