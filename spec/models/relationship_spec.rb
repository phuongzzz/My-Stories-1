require 'rails_helper'

RSpec.describe Relationship, type: :model do
  describe "ActiveModel validations" do
  end

  describe "ActiveRecord validations" do
    it {should have_db_column(:follower_id).of_type :integer}
    it {should have_db_column(:followed_id).of_type :integer}

    it {should belong_to(:follower).class_name User.name}
    it {should belong_to(:followed).class_name User.name}

    it {should have_db_index :follower_id}
    it {should have_db_index :followed_id}
  end
end
