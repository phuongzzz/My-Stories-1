class Api::V1::RelationshipsController < Api::BaseController
  before_action :find_user, only: :index
  before_action :check_relationship, only: :create
  before_action :find_object, only: :destroy

  def index
    show_relationship_user params[:type]
  end

  def create
    if check_relationship.present?
      action_fail
    else
      follow user
      render json: {
        messages: I18n.t("relationships.follow_success")
      }, status: :ok
    end
  end

  def destroy
    relationship.destroy ? unfollow_seccess : action_fail
  end

  private

  attr_reader :user, :relationship, :check_relationship

  def check_relationship
    @check_relationship =
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

  def unfollow_seccess
    render json: {
      messages: I18n.t("relationships.unfollow_success")
    }, status: :ok
  end

  def show_relationship_user type
    render json: {
      messages: I18n.t("relationships.relationship_user_showed"),
      data: {relationship: user.send(type)}
    }, status: :ok
  end

  def follow other_user
    current_user.following << other_user
  end
end
