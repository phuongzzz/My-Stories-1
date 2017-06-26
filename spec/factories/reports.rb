FactoryGirl.define do
  factory :report do |f|
    f.user {FactoryGirl.build :user}
    f.story {FactoryGirl.build :story}
    f.content "Learn Rails in 3 months"
  end
end
