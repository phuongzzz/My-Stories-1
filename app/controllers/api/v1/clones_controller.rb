class Api::V1::ClonesController < Api::BaseController
  before_action :find_story, only: :create

  def create
    if story.present?
      @story_clone = story.dup
      story_clone.steps = story.steps.dup
      story_clone.user = current_user
      story_clone.save ? clone_successfully : clone_fail
    else
      render json: {
        messages: I18n.t("stories.messages.story_not_found")
      }, status: :not_found
    end
  end

  private

  attr_reader :story, :story_clone

  def find_story
    @story = Story.find_by id: params[:story_id]
  end

  def clone_successfully
    render json: {
      messages: I18n.t("stories.messages.clone_successfully"),
      data: {story: story_serializer}
    }, status: :ok
  end

  def clone_fail
    render json: {
      messages: I18n.t("stories.messages.clone_fail")
    }, status: :unprocessable_entity
  end

  def story_serializer
    Serializers::Stories::StorySerializer.new(object: story_clone).serializer
  end
end
