require "rails_helper"

RSpec.describe Vote, type: :model do

  describe "database structure" do
     context "columns" do
       it {should have_db_column(:user_id).of_type(:integer)}
       it {should have_db_column(:story_id).of_type(:integer)}
       it {should have_db_column(:step_id).of_type(:integer)}
       it {should have_db_column(:vote_value).of_type(:integer)}
     end
   end

   describe "validations" do
    before do
      @sample_vote = FactoryGirl.build :vote
    end

    it "is invalid if vote value is blank" do
      @sample_vote.vote_value = nil
      expect(@sample_vote).to_not be_valid
    end
   end

  describe "associations" do
    it {should belong_to :user}
    it {should belong_to :step}
    it {should belong_to :story}
  end
end
