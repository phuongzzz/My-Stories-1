require "rails_helper"

RSpec.describe User, type: :model do

  describe "database structure" do
     context "columns" do
       it {should have_db_column(:name).of_type(:string)}
       it {should have_db_column(:email).of_type(:string)}
       it {should have_db_column(:is_admin).of_type(:boolean)}
     end
   end

  describe "validations" do
    before do
      @sample_user = FactoryGirl.build :user
    end

    it {should validate_presence_of :name}
    it {should validate_length_of :name}
    it {should validate_presence_of :email}
    it {should validate_length_of :email}
    it {should allow_value("phuong@gmal.com").for(:email)}

    it "invalid if name is blank" do
      @sample_user.name = nil
      expect(@sample_user).to_not be_valid
    end

    it "invalid if name is too long" do
      @sample_user.name = "a" * 61
      expect(@sample_user).to_not be_valid
    end

    it "invalid if email is nil" do
      @sample_user.email = nil
      expect(@sample_user).to_not be_valid
    end

    it "invalid if email is too long" do
      @sample_user.email = "a" * 246 + "@gmail.com"
      expect(@sample_user).to_not be_valid
    end

    it "invalid if email is nil" do
      @sample_user.email = nil
      expect(@sample_user).to_not be_valid
    end

    it "invalid if email is wrong format" do
      invalid_addresses = %w[user@example,com user_at_foo.org user.name@example.
        foo@bar_baz.com foo@bar+baz.com]
      invalid_addresses.each do |invalid_address|
        @sample_user.email = invalid_address
        expect(@sample_user).to_not be_valid
      end
    end

    it "invalid if password is blank" do
      @sample_user.password = nil
      expect(@sample_user).to_not be_valid
    end

    it "invalid if password is too short" do
      @sample_user.password = "a" * 5
      expect(@sample_user).to_not be_valid
    end

    it "invalid if password and password confirmation do not match" do
      @sample_user.password = "a" * 10
      @sample_user.password_confirmation = "b" * 10
      expect(@sample_user).to_not be_valid
    end

    it "invalid if email is duplicate" do
      @sample_user.save
      @duplicate_user = FactoryGirl.build :user
      expect(@duplicate_user).to_not be_valid
    end
  end


  describe "associations" do
    it {should have_many :comments}
    it {should have_many :votes}
    it {should have_many :reports}
    it {should have_many :stories}
  end
end
