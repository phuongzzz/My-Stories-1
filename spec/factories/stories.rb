FactoryGirl.define do
  factory :story do |f|
    f.user {FactoryGirl.create :user}
    f.name "Learn Rails in 3 months"
    f.description "How do I learn rails in 3 months"
  end
end
