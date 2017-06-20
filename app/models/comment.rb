class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :step
  belongs_to :story
end
