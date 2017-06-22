require "rails_helper"

RSpec.describe Step, type: :model do

  describe "database structure" do
     context "columns" do
       it {should have_db_column(:story_id).of_type(:integer)}
       it {should have_db_column(:content).of_type(:string)}
       it {should have_db_column(:completed_rate).of_type(:integer)}
       it {should have_db_column(:vote).of_type(:integer)}
     end
   end

  describe "validations" do

    before do
      @sample_step = FactoryGirl.create :step
    end

    it {should validate_presence_of :content}

    it "is invalid if content is blank" do
      @sample_step.content = nil
      expect(@sample_step).to_not be_valid
    end
  end

  describe "associations" do
    it {should have_many :comments}
    it {should have_many :votes}

    it {should belong_to :story}
  end

end
