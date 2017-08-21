class Api::V1::StoriesController < Api::BaseController
  before_action :find_object, only: %i(show update destroy)
  before_action :find_comments, only: :show
  before_action :find_category_name, only: :index
  skip_before_action :authenticate_user_from_token, only: %i(index show)

  def index
    @stories =
      if params_category_id.present?
        Story
          .select_by_category_id(params_category_id)
          .page(params_page).per Settings.per_page
      else
        Story.page(params_page).per Settings.per_page
      end

    render json: {
      messages: I18n.t("stories.messages.stories_showed"),
      data: {stories: index_story_serializer, category: find_category_name}
    }, status: :ok
  end

  def show
    action_successfully if story.present?
  end

  def create
    @story = current_user.stories.new stories_params

    if story.save
      save_each_step if params_steps.present?
      action_successfully
    else
      action_fail
    end
  end

  def update
    if correct_user story.user
      if story.update_attributes stories_params
        update_each_step if params_steps.present?
        action_successfully
      else
        action_fail
      end
    else
      not_have_permit
    end
  end

  def destroy
    if correct_user story.user
      story.destroy!
    else
      not_have_permit
    end
  end

  private

  attr_reader :story, :comments, :step, :stories, :category

  def find_comments
    @comments = Comment.comments_for_story params[:id]
  end

  def find_category_name
    @category = Category.find_by id: params[:category_id]

    return category.name if category.present?
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

  def params_category_id
    params[:category_id]
  end

  def params_page
    params[:page]
  end

  def action_fail
    render json: {
      messages: story.errors.full_messages.to_sentence
    }, status: :unprocessable_entity
  end

  def action_successfully
    story.update_attributes! total_vote:
      Vote.find_total_vote(story.id, story.class).count
    render json: {
      messages: I18n.t("stories.messages.story_showed"),
      data: {story: story_serializer, followed: check_follow}
    }, status: :ok
  end

  def story_serializer
    Serializers::Stories::StorySerializer.new(object: story).serializer
  end

  def index_story_serializer
    Serializers::Stories::StorySerializer.new(object: stories).serializer
  end

  def check_follow
    if current_user.present?
      current_user.following_story.include? story
    else
      false
    end
  end
end
