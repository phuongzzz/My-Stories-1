class Api::V1::RelationshipsController < Api::BaseController
  before_action :find_user
  before_action :find_relationship

  def index
    show_relationship_user params[:type]
  end

  def create
    if relationship.present?
      action_fail
    else
      follow user
      render json: {
        messages: I18n.t("relationships.follow_success")
      }, status: :ok
    end
  end

  def destroy
    relationship.destroy!
    render json: {
      messages: I18n.t("relationships.unfollow_success")
    }, status: :ok
  end

  private

  attr_reader :user, :relationship

  def find_relationship
    @relationship =
      current_user.active_relationships.find_by followed_id: params[:user_id]
  end

  def find_user
    @user = User.find_by id: params[:user_id]
    
    cant_find_user unless user
  end

  def action_fail
    render json: {
      messages: I18n.t("relationships.action_fail")
    }, status: :unprocessable_entity
  end

  def cant_find_user
    render json: {
      messages: I18n.t("relationships.cant_find_user")
    }, status: :unprocessable_entity
  end

  def show_relationship_user type
    render json: {
      messages: I18n.t("relationships.following_user_showed"),
      data: {following_user: user.send(type)}
    }, status: :ok
  end

  def follow other_user
    current_user.following << other_user
  end
end
