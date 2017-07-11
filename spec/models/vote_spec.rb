require 'rails_helper'

RSpec.describe Vote, type: :model do
  describe "ActiveRecord validations" do
    it {should have_db_column(:voteable_type).of_type :string}
    it {should have_db_column(:voteable_id).of_type :integer}
    it {should have_db_column(:user_id).of_type :integer}

    it {should belong_to :user}
    it {should belong_to :voteable}

    it {should have_db_index :voteable_id}
    it {should have_db_index :user_id}
  end
end
