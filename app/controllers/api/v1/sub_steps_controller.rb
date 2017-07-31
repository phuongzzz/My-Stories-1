class Api::V1::SubStepsController < Api::BaseController
  before_action :find_object, only: :update

  def update
    if correct_user sub_step.step.story.user
      update_completed_rate ? update_success : update_fail
    else
      not_have_permit
    end
  end

  private

  attr_reader :sub_step

  def update_completed_rate
    SubStepService.new(step: sub_step.step, sub_step: sub_step).perform
  end

  def update_fail
    render json: {
      messages: I18n.t("sub_steps.messages.update_fail")
    }, status: :unprocessable_entity
  end

  def update_success
    render json: {
      messages: I18n.t("sub_steps.messages.update_successfully"),
      data: {step: sub_step.step}
    }, status: :ok
  end
end
