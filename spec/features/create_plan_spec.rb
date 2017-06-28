require "rails_helper"

RSpec.feature "Create new plan", type: :feature do
  let!(:user) {FactoryGirl.create(:user, email: "123456@gmail.com")}

  before do
    login_as user
    visit root_path
    click_link I18n.t("navbar.discover")
  end

  scenario "User create plan" do
    expect(page).to have_selector("a", "Create Plan")
  end

  describe "test form create" do
    before do
      click_link I18n.t("create_plan")
    end

    scenario "display form" do
      expect(page).to have_selector("input[type=submit][value='Create Plan']")
    end

    scenario "valid input" do
      fill_in "story[name]", with: "new plan"
      fill_in "story[description]", with: "create a new plan"
      fill_in "story[steps_attributes][0][content]", with: "step 1"
      fill_in "story[due_date]", with: "2017-06-23T01:00"
      click_button I18n.t("create_plan")
      expect(page).to have_text I18n.t("success_created_plan")
    end

    scenario "missing name" do
      click_button I18n.t("create_plan")
      expect(page).to have_text "Name can't be blank"
    end

    scenario "missing description" do
      fill_in "story[name]", with: "new plan"
      click_button I18n.t("create_plan")
      expect(page).to have_text "Description can't be blank"
    end

    scenario "missing due_date" do
      fill_in "story[name]", with: "new plan"
      fill_in "story[description]", with: "create a new plan"
      click_button I18n.t("create_plan")
      expect(page).to have_text "Due date can't be blank"
    end
  end
end
