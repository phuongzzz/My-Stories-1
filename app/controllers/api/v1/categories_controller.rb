class Api::V1::CategoriesController < Api::BaseController
  skip_before_action :authenticate_user_from_token, only: :index
  
  def index
    @categories = Category.all
    render json: {
      messages: I18n.t("categories.messages.categories_showed"),
      data: {categories: categories}
    }, status: :ok
  end

  private

  attr_reader :categories
end
