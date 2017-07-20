class Api::V1::StepsController < Api::BaseController
  before_action :find_story, only: :create
  before_action :find_object, only: :show
  skip_before_action :authenticate_user_from_token, only: :show

  def show
    if step.present?
      step_showed
    end
  end

  def create
    if story.present?
      @step = story.steps.new steps_params
      step.save ? step_created_success : step_created_fail
    else
      cant_find_story_respone
    end
  end

  private

  attr_reader :step, :story

  def find_story
    @story = Story.find_by id: params[:story_id]
  end

  def steps_params
    params.require(:step).permit Step::ATTRIBUTES_PARAMS,
      sub_steps_attributes: [:name, :content, :_destroy]
  end

  def step_created_success
    render json: {
      messages: I18n.t("steps.messages.created_success"),
      data: {step: step}
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
      data: {step: step, sub_steps: step.sub_steps}
    }, status: :ok
  end
end
