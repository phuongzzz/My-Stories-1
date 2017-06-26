FactoryGirl.define do
  factory :user do |f|
    f.name "phuong"
    f.email "phuong@gmail.com"
    f.password "phuongphuong"
    f.password_confirmation "phuongphuong"
  end
end
