require "rails_helper"

RSpec.describe User, type: :model do
  describe "ActiveModel validations" do
    it {should validate_presence_of :name}
    it {should validate_length_of(:name).is_at_most 60}

    it {should validate_presence_of :email}
    it {should validate_length_of(:email).is_at_most 255}
    %w[user@example,com user_at_foo.org user.name@example.
      foo@bar_baz.com foo@bar+baz.com].each do |invalid_addr|
      it {should_not allow_values(invalid_addr).for :email}
    end
    %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org
      first.last@foo.jp alice+bob@baz.cn].each do |valid_addr|
      it {should allow_values(valid_addr).for :email}
    end

    it {should validate_presence_of :password}
    it {should validate_length_of(:password).is_at_least 6}
    it {should validate_confirmation_of(:password)}
  end

  describe "ActiveRecord validations" do
    it {should have_db_column(:name).of_type :string}
    it {should have_db_column(:email).of_type :string}
    it {should have_db_column(:avatar).of_type :string}
    it {should have_db_column(:encrypted_password).of_type :string}

    it {should have_many :comments}
    it {should have_many :votes}
    it {should have_many :reports}
    it {should have_many :stories}
    it {should have_many :active_relationships}
    it {should have_many :passive_relationships}
    it {should have_many :following}
    it {should have_many :followers}

    it {should have_db_index :email}
    it {should validate_uniqueness_of(:email).case_insensitive}
  end
end
