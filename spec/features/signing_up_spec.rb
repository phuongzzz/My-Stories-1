require "rails_helper"

RSpec.feature "User can sign up" do
  scenario "when entering valid credentials" do
    visit "/"
    click_link "Sign up"
    fill_in "Name", with: "Nam Phuong"
    fill_in "Email", with: "namphuong@gmail.com"
    fill_in "user_password", with: "phuongphuong"
    fill_in "Password confirmation", with: "phuongphuong"
    click_button "Sign up"
    expect(page).to have_content "You have signed up successfully."
  end
end
