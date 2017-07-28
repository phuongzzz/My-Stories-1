class Api::V1::StepsController < Api::BaseController
  before_action :find_story, only: [:create, :show]
  before_action :find_object, only: :show
  before_action :find_comments, only: :show
  skip_before_action :authenticate_user_from_token, only: :show

  def show
    if check_include step
      step_showed if step.present?
    else
      render json: {
        messages: I18n.t("steps.messages.step_not_found")
      }, status: :not_found
    end
  end

  def create
    if story.present?
      save_each_step if params_steps.present?
      step_created_success
    else
      cant_find_story_respone
    end
  end

  private

  attr_reader :step, :story, :comments

  def find_story
    @story = Story.find_by id: params[:story_id]
  end

  def check_include step
    if step.story_id == params[:story_id].to_i
      true
    else
      false
    end
  end

  def params_steps
    params[:step]
  end

  def find_comments
    @comments = Comment.comments_for_step params[:id]
  end

  def save_each_step
    StepService.new(steps: params[:step], story: story).perform
  end

  def step_created_success
    render json: {
      messages: I18n.t("steps.messages.created_success"),
      data: {story: story_serializer}
    }, status: :ok
  end

  def step_created_fail
    render json: {
      messages: step.errors.full_messages.to_sentence
    }, status: :unprocessable_entity
  end

  def cant_find_story_respone
    render json: {
      messages: I18n.t("stories.messages.cant_find")
    }, status: :not_found
  end

  def step_showed
    render json: {
      messages: I18n.t("steps.messages.step_showed"),
      data: {step: step_serializer}
    }, status: :ok
  end

  def sub_step_serializer
    Serializers::SubSteps::SubStepsSerializer
      .new(object: step.sub_steps).serializer
  end

  def step_serializer
    Serializers::Step::StepSerializer
      .new(object: step).serializer
  end

  def story_serializer
    Serializers::Story::StorySerializer
      .new(object: story).serializer
  end
end
