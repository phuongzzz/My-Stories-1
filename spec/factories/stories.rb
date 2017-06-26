FactoryGirl.define do
  factory :story do |f|
    f.user {FactoryGirl.build :user}
    f.name "Learn Rails in 3 months"
    f.description "How do I learn rails in 3 months"
    f.due_date "2017-06-22 08:17:46.817996"
  end
end
