require "rails_helper"

RSpec.feature "User can view static pages" do
  before do
    visit "/"
  end

  scenario "display enough link in navbar" do
    expect(page).to have_selector('li', count: 5)
  end

  scenario "display right title" do
    click_link "About"
    expect(page).to have_title "About"

    click_link "Discover"
    expect(page).to have_title "Discover"

    click_link "Profile"
    expect(page).to have_title "Profile"

    click_link "MyStories"
    expect(page).to have_title "MyStories"

    click_link "Help"
    expect(page).to have_title "Help"
  end
end
