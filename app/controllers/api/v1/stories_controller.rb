class Api::V1::StoriesController < Api::BaseController
  before_action :find_object, only: %i(show update)
  before_action :find_comments, only: :show
  before_action :find_user, only: :update
  skip_before_action :authenticate_user_from_token, only: :show

  def show
    show_response if story.present?
  end

  def create
    @story = current_user.stories.new stories_params

    if story.save
      save_each_step if params_steps.present?
      created_response_success
    else
      action_fail
    end
  end

  def update
    not_have_permit unless correct_user find_user
    if story.update_attributes stories_params
      update_each_step if params_steps.present?
      update_successfully
    else
      action_fail
    end
  end

  private

  attr_reader :story, :comments, :step

  def find_story
    @story = Story.find_by id: params[:id]
  end

  def find_user
    User.find_by id: story.user_id
  end

  def find_comments
    @comments = Comment.comments_for_story params[:id]
  end

  def stories_params
    params.require(:story).permit Story::ATTRIBUTES_PARAMS
  end

  def save_each_step
    StoryService.new(total_params: params[:story], story: story).save_step
  end

  def update_each_step
    StoryService.new(total_params: params[:story], story: story).update_step
  end

  def params_steps
    params[:story][:step]
  end

  def created_response_success
    render json: {
      messages: I18n.t("stories.messages.stories_created"),
      data: {story: story_serializer}
    }, status: :ok
  end

  def action_fail
    render json: {
      messages: story.errors.full_messages.to_sentence
    }, status: :unprocessable_entity
  end

  def show_response
    render json: {
      messages: I18n.t("stories.messages.stories_showed"),
      data: {story: story_serializer}
    }, status: :ok
  end

  def update_successfully
    render json: {
      messages: I18n.t("stories.messages.update_successfully"),
      data: {story: story_serializer}
    }, status: :ok
  end

  def story_serializer
    Serializers::Story::StorySerializer.new(object: story).serializer
  end
end
