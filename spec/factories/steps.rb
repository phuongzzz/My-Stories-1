FactoryGirl.define do
  factory :step do |f|
    f.story {FactoryGirl.build :story}
    f.content "Learn Rails in 3 months"
  end
end
