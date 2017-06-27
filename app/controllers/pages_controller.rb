class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def show
    if valid_page?
      render "pages/#{params[:page]}"
    else
      render file: "/public/404.html"
    end
  end

  private
  def valid_page?
    File.exist? Pathname.new Rails.root.join("app",
      "views", "pages", "#{params[:page]}.html.erb")
  end
end
