FactoryGirl.define do
  factory :comment do |f|
    f.user {FactoryGirl.create :user}
    f.story {FactoryGirl.create :story}
    f.step {FactoryGirl.create :step}
    f.content "very good example"
  end
end
