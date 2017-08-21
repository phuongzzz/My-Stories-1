class Api::V1::RelationshipStoriesController < Api::BaseController
  before_action :check_relationship_story, only: :create
  before_action :find_object, only: :destroy
  before_action :find_story, only: :index

  def index
    render json: {
      messages: I18n.t("relationship_stories.story_followers_showed"),
      data: {followers: story.followers}
    }, status: :ok
  end

  def create
    if relationship_story.present?
      story_has_been_followed
    else
      @relationship =
        RelationshipStory
        .new user_id: current_user.id, story_id: params[:story_id]

      if relationship.save
        follow_success
      else
        action_fail
      end
    end
  end

  def destroy
    relationship_story.destroy ? unfollow_success : action_fail
  end

  private

  attr_reader :story, :relationship_story,
    :relationship, :relationship_story

  def find_story
    @story = Story.find_by id: params[:story_id]

    cant_find_story unless story
  end

  def check_relationship_story
    @relationship_story =
      current_user.followed_story.find_by story_id: params[:story_id]
  end

  def story_has_been_followed
    render json: {
      messages: I18n.t("relationship_stories.story_followed")
    }, status: :unprocessable_entity
  end

  def action_fail
    render json: {
      messages: I18n.t("relationship_stories.action_fail")
    }, status: :unprocessable_entity
  end

  def cant_find_user
    render json: {
      messages: I18n.t("relationship_stories.cant_find_story")
    }, status: :unprocessable_entity
  end

  def follow_success
    render json: {
      messages: I18n.t("relationships.follow_success")
    }, status: :ok
  end

  def unfollow_success
    render json: {
      messages: I18n.t("relationships.unfollow_success")
    }, status: :ok
  end
end
