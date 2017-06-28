require "rails_helper"

RSpec.feature "Edit new plan", type: :feature do
  let!(:user) {FactoryGirl.create(:user, email: "123456@gmail.com")}

  before do
    login_as user
    story = FactoryGirl.create(:story, user: user)
    visit edit_story_path(story.id)
  end

  scenario "successfully updated plan" do
    fill_in "story[name]", with: "new plan"
    click_button I18n.t("edit_plan")
    expect(page).to have_text I18n.t("success_updated_plan")
  end

  scenario "unsuccessfully updated plan" do
    fill_in "story[name]", with: ""
    click_button I18n.t("edit_plan")
    expect(page).to have_text I18n.t("failse_updated_plan")
  end
end
