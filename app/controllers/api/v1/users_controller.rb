class Api::V1::UsersController < Api::BaseController
  before_action :find_object, only: %i(show update destroy).freeze

  def show
    render json: {
      messages: I18n.t("users.show.success"), data: {user: user_serializer}
    }, status: :ok
  end

  def update
    if correct_user user
      if user.update_attributes user_params
        updated_successfully
      else
        updated_fail
      end
    else
      not_have_permit
    end
  end

  def destroy
    if correct_user user
      user.destroy ? destroy_success : destroy_fail
    else
      not_have_permit
    end
  end

  private

  attr_reader :user, :object

  def user_serializer
    Serializers::User::UsersSerializer.new(object: user).serializer
  end

  def user_params
    params.require(:user).permit User::ATTRIBUTES_PARAMS
  end

  def updated_successfully
    render json: {
      messages: I18n.t("users.update.success"),
      data: {user: user}
    }, status: :ok
  end

  def updated_fail
    render json: {
      messages: I18n.t("users.update.fail")
    }, status: :unprocessable_entity
  end

  def destroy_success
    render json: {
      messages: I18n.t("users.destroy.success")
    }, status: :ok
  end

  def destroy_fail
    render json: {
      messages: I18n.t("users.destroy.fail")
    }, status: :unprocessable_entity
  end
end
