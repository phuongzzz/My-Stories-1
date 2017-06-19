class PagesController < ApplicationController
  def show
    if valid_page?
      render "pages/#{params[:page]}"
    else
      render file: "/public/404.html"
    end
  end

  def valid_page?
    File.exist? Pathname.new(
      Rails.root.join("app", "views", "pages", "#{params[:page]}.html.erb")
    )
  end
end
