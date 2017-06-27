require "rails_helper"

RSpec.feature "User can sign up" do

  before do
    visit "/"
    click_link "Sign up"
  end
  scenario "when entering valid credentials" do
    fill_in "Name", with: "Nam Phuong"
    fill_in "Email", with: "namphuong@gmail.com"
    fill_in "user_password", with: "phuongphuong"
    fill_in "Password confirmation", with: "phuongphuong"
    click_button "Sign up"
    expect(page).to have_content "You have signed up successfully."
  end

  scenario "when entering invalid credentials" do
    fill_in "Name", with: ""
    fill_in "Email", with: "namphuong@gmail.com"
    fill_in "user_password", with: "phuong"
    fill_in "Password confirmation", with: "phuongphuong"
    click_button "Sign up"
    expect(page).to have_selector "div", id: "error_explanation"
  end
end
