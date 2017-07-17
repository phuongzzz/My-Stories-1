class Api::V1::StoriesController < Api::BaseController
  before_action :user_signed_in?

  def create
    @story = current_user.stories.new stories_params
    if story.save
      created_response_success
    else
      created_response_fail
    end
  end

  private

  attr_reader :story

  def stories_params
    params.require(:story).permit Story::ATTRIBUTES_PARAMS
  end

  def created_response_success
    render json: {
      messages: I18n.t("users.messages.stories_created"),
      data: {story: story}
    }, status: :ok
  end

  def created_response_fail
    warden.custom_failure!
    render json: {
      messages: story.errors.messages,
      data: {}
    }, status: :unprocessable_entity
  end
 
   def stories_params
    params.require(:story).permit Story::ATTRIBUTES_PARAMS
  end
end
