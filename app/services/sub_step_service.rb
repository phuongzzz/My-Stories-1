class SubStepService
  def initialize params
    @step = params[:step]
    @sub_step = params[:sub_step]
  end

  def perform
    if sub_step.is_completed == true
      sub_step.update_attributes! is_completed: false
    else
      sub_step.update_attributes! is_completed: true
    end
    step.update_attributes! completed_rate: result
  end

  private

  attr_reader :step, :sub_step

  def result
    total_sub_steps.completed.count.to_f / total_sub_steps.count.to_f
  end

  def total_sub_steps
    step.sub_steps
  end
end
