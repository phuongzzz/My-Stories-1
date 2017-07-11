class Api::V1::UsersController < Api::BaseController
  before_action :find_object, only: :show

  def show
    render json: {
      messages: I18n.t("flashs.messages.not_found", model_name: User),
      data: {user: @user}
    }, status: :ok
  end
end
