class StepService
  def initialize params
    @steps = params[:steps]
    @story = params[:story]
  end

  def perform
    steps.each do |params_step|
      @params = ActionController::Parameters.new(step: params_step)
      @step = story.steps.new steps_params
      
      unless step.save
        step_created_fail
        break
      end
    end
  end

  private

  attr_reader :steps, :story, :params, :step

  def steps_params
    params.require(:step).permit Step::ATTRIBUTES_PARAMS,
      sub_steps_attributes: [:name, :content, :_destroy]
  end

  def step_created_fail
    render json: {
      messages: step.errors.full_messages.to_sentence
    }, status: :unprocessable_entity
  end
end
