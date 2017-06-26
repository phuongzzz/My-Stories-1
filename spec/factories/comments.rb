FactoryGirl.define do
  factory :comment do |f|
    f.user {FactoryGirl.build :user}
    f.story {FactoryGirl.build :story}
    f.step {FactoryGirl.build :step}
    f.content "very good example"
  end
end
