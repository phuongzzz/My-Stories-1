class Api::V1::StoriesController < Api::BaseController
  before_action :user_signed_in?
  before_action :find_object
  before_action :find_comments, only: :show
  skip_before_action :authenticate_user_from_token, only: :show

  def show
    show_response if story.present?
  end

  def create
    @story = current_user.stories.new stories_params
    story.save ? created_response_success : created_response_fail
  end

  private

  attr_reader :story, :comments

  def find_story
    @story = Story.find_by id: params[:id]
  end

  def find_comments
    @comments = Comment.comments_for_story params[:id]
  end

  def stories_params
    params.require(:story).permit Story::ATTRIBUTES_PARAMS
  end

  def created_response_success
    render json: {
      messages: I18n.t("stories.messages.stories_created"),
      data: {story: story}
    }, status: :ok
  end

  def created_response_fail
    warden.custom_failure!
    render json: {
      messages: story.errors.full_messages.to_sentence
    }, status: :unprocessable_entity
  end

  def show_response
    render json: {
      messages: I18n.t("stories.messages.stories_showed"),
      data: {story: story, comments: comments}
    }, status: :ok
  end
end
