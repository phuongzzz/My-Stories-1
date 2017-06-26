require "rails_helper"

RSpec.describe Story, type: :model do

  describe "database structure" do
     context "columns" do
       it {should have_db_column(:user_id).of_type(:integer)}
       it {should have_db_column(:name).of_type(:string)}
       it {should have_db_column(:description).of_type(:string)}
       it {should have_db_column(:completed_rate).of_type(:float)}
       it {should have_db_column(:numbers_of_steps).of_type(:integer)}
       it {should have_db_column(:vote).of_type(:integer)}
       it {should have_db_column(:is_public).of_type(:boolean)}
       it {should have_db_column(:due_date).of_type(:datetime)}
     end
   end

  describe "validations" do

    before do
      @sample_story = FactoryGirl.build :story
    end

    it {should validate_presence_of :name}
    it {should validate_presence_of :description}

    it "is invalid if name is blank" do
      @sample_story.name = nil
      expect(@sample_story).to_not be_valid
    end

    it "is invalid if description is blank" do
      @sample_story.description = nil
      expect(@sample_story).to_not be_valid
    end
  end

  describe "associations" do
    it {should have_many :comments}
    it {should have_many :votes}
    it {should have_many :reports}
    it {should have_many :steps}

    it {should belong_to :user}
  end

end
