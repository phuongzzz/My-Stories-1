FactoryGirl.define do
  factory :step do |f|
    f.story {FactoryGirl.create :story}
    f.content "Learn Rails in 3 months"
  end
end
