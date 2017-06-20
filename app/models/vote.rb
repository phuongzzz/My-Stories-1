class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :story
  belongs_to :step
end
