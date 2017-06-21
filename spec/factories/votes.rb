FactoryGirl.define do
  factory :vote do |f|
    f.user {FactoryGirl.create :user}
    f.story {FactoryGirl.create :story}
    f.step {FactoryGirl.create :step}
    f.vote_value 1
  end
end
