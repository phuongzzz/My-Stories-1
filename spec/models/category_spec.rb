require 'rails_helper'

RSpec.describe Category, type: :model do
  describe "ActiveModel validations" do
    it {should validate_presence_of :name}
  end

  describe "ActiveRecord validations" do
    it {should have_db_column(:name).of_type :string}
    it {should have_db_column(:parent_id).of_type :integer}

    it {should have_many :stories}
  end  
end
