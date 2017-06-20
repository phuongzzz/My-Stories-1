require "rails_helper"

RSpec.feature "User can view static pages" do
  before do
    visit "/"
  end

  scenario "display enough link in navbar" do
    expect(page).to have_selector("li", count: 5)
  end

  scenario "display right title" do
    click_link I18n.t("navbar.about")
    expect(page).to have_title "About"

    click_link I18n.t("navbar.discover")
    expect(page).to have_title "Discover"

    click_link I18n.t("navbar.profile")
    expect(page).to have_title "Profile"

    click_link I18n.t("navbar.home")
    expect(page).to have_title "MyStories"

    click_link I18n.t("navbar.help")
    expect(page).to have_title "Help"
  end
end
