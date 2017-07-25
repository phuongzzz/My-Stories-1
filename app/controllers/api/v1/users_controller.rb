class Api::V1::UsersController < Api::BaseController
  before_action :find_object, only: :show

  def show
    render json: {
      messages: I18n.t("users.show.success"), data: {user: user_serializer}
    }, status: :ok
  end

  private
  def user_serializer
    Serializers::User::UsersSerializer.new(object: user).serializer
  end
  attr_reader :user
end
