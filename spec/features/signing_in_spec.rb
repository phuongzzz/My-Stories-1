require "rails_helper"

RSpec.feature "Users can sign in" do
  let! :user {FactoryGirl.create :user}

  before do
    visit "/"
    click_link "Sign in"
  end

  scenario "with valid credentials" do
    fill_in "Email", with: user.email
    fill_in "Password", with: user.password
    click_button "Log in"
    expect(page).to have_content "Signed in successfully."
    expect(page).to have_content "hello, #{user.name}"
  end

  scenario "with invalid credentials" do
    fill_in "Email", with: ""
    fill_in "Password", with: "hello"
    click_button "Log in"
    expect(page).to have_content "Invalid Email or password."
  end
end
