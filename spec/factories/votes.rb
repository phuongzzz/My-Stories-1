FactoryGirl.define do
  factory :vote do |f|
    f.user {FactoryGirl.build :user}
    f.story {FactoryGirl.build :story}
    f.step {FactoryGirl.build :step}
    f.vote_value 1
  end
end
