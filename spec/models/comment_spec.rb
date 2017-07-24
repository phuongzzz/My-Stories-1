require 'rails_helper'

RSpec.describe Comment, type: :model do
  describe "ActiveModel validations" do
    it {should validate_presence_of :content}
  end

  describe "ActiveRecord validations" do
    it {should have_db_column(:user_id).of_type :integer}
    it {should have_db_column(:commentable_id).of_type :integer}
    it {should have_db_column(:commentable_type).of_type :string}
    it {should have_db_column(:content).of_type :text}

    it {should belong_to :user}

    it {should have_db_index :user_id}
    it {should have_db_index :commentable_id}
  end
end
