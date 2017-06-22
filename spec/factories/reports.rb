FactoryGirl.define do
  factory :report do |f|
    f.user {FactoryGirl.create :user}
    f.story {FactoryGirl.create :story}
    f.content "Learn Rails in 3 months"
  end
end
