class Api::V1::CategoriesController < Api::BaseController
  skip_before_action :authenticate_user_from_token, only: :index

  def index
    @categories = Category.page(params[:page]).per params[:per_page]
    render json: {
      messages: I18n.t("categories.messages.categories_showed"),
      data: {categories: categories_serializer}
    }, status: :ok
  end

  private

  attr_reader :categories

  def categories_serializer
    Serializers::Categories::CategorySerializer
      .new(object: categories).serializer
  end
end
