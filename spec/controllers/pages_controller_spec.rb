require "rails_helper"

RSpec.describe PagesController, type: :controller do
  describe "GET #show" do
    it "render the home template" do
      get :show, params: {page: "home"}
      expect(response).to render_template("home")
    end
  end

  it "render the profile template" do
    get :show, params: {page: "profile"}
    expect(response).to render_template("profile")
  end

  it "render the about template" do
    get :show, params: {page: "about"}
    expect(response).to render_template("about")
  end

  it "render the help template" do
    get :show, params: {page: "help"}
    expect(response).to render_template("help")
  end

  it "render the discover template" do
    get :show, params: {page: "discover"}
    expect(response).to render_template("discover")
  end

  it "render the 404 template" do
    get :show, params: { page: "phuongphuong" }
    expect(response).to render_template(file: "#{Rails.root}/public/404.html")
  end
end
