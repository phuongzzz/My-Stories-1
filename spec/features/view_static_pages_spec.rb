require "rails_helper"

RSpec.feature "User can view static pages" do
  before do
    visit "/"
  end

  scenario "display enough link in navbar" do
    expect(page).to have_selector("li", count: 4)
  end

  scenario "display right title" do
    page.find('.navbar-brand').click
    expect(page).to have_title "MyStories"
  end
end
