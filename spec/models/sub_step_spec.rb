require 'rails_helper'

RSpec.describe SubStep, type: :model do
  describe "ActiveModel validations" do
    it {should validate_presence_of :name}
    it {should validate_presence_of :content}
  end

  describe "ActiveRecord validations" do
    it {should have_db_column(:name).of_type :string}
    it {should have_db_column(:content).of_type :text}
    it {should have_db_column(:is_completed).of_type :boolean}
    it {should have_db_column(:step_id).of_type :integer}

    it {should belong_to :step}

    it {should have_db_index :step_id}
  end
end
