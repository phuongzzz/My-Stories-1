require "rails_helper"

RSpec.describe Report, type: :model do

  describe "database structure" do
     context "columns" do
       it {should have_db_column(:user_id).of_type(:integer)}
       it {should have_db_column(:story_id).of_type(:integer)}
       it {should have_db_column(:content).of_type(:text)}
     end
   end

  describe "validations" do
    before do
      @sample_report = FactoryGirl.create :report
    end

    it {should validate_presence_of :content}

    it "is invalid if content is blank" do
      @sample_report.content = nil
      expect(@sample_report).to_not be_valid
    end
  end

  describe "associations" do
    it {should belong_to :user}
    it {should belong_to :story}
  end
end
