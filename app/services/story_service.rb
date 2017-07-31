class StoryService
  def initialize params
    @steps = params[:total_params][:step]
    @story = params[:story]
  end

  def save_step
    steps.each do |params_step|
      @params = ActionController::Parameters.new step: params_step
      @step = story.steps.new steps_params

      unless step.save
        created_response_fail
        break
      end
    end
  end

  def update_step
    steps.each do |params_step|
      @step = Step.find_by id: params_step[:id]
      @params = ActionController::Parameters.new step: params_step
      unless step.update_attributes steps_params
        response_fail
        break
      end
    end
  end

  private

  attr_reader :story, :step, :steps, :params

  def steps_params
    params.require(:step).permit Step::ATTRIBUTES_PARAMS,
      sub_steps_attributes: [:id, :name, :content, :_destroy]
  end

  def response_fail
    warden.custom_failure!
    render json: {
      messages: story.errors.full_messages.to_sentence
    }, status: :unprocessable_entity
  end
end
