require 'rails_helper'

RSpec.describe Story, type: :model do
  describe "ActiveModel validations" do
    it {should validate_presence_of :name}
    it {should validate_presence_of :user}
    it {should validate_presence_of :description}
    it {should validate_presence_of :due_date}
    it {should validate_presence_of :category}
  end

  describe "ActiveRecord validations" do
    it {should have_db_column(:name).of_type :string}
    it {should have_db_column(:description).of_type :text}
    it {should have_db_column(:total_vote).of_type :integer}
    it {should have_db_column(:is_public).of_type :boolean}
    it {should have_db_column(:due_date).of_type :datetime}
    it {should have_db_column(:user_id).of_type :integer}
    it {should have_db_column(:category_id).of_type :integer}
    it {should have_db_column(:picture).of_type :string}

    it {should have_many :comments}
    it {should have_many(:votes).dependent :destroy}
    it {should have_many :reports}
    it {should have_many(:steps).dependent :destroy}
    it {should belong_to :user}
    it {should belong_to :category}

    it {should have_db_index :user_id}
    it {should have_db_index :category_id}
  end
end
