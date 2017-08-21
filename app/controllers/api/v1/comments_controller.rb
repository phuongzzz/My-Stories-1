class Api::V1::CommentsController < Api::BaseController
  before_action :find_object, only: %i(update destroy)
  before_action :find_commentable, only: :create

  def create
    @comment = commentable.comments.new comments_params
    comment.user = current_user
    comment.save ? comment_action_success(created) : comment_action_fail
  end

  def update
    if correct_user comment.user
      if comment.update_attributes comments_params
        comment_action_success updated
      else
        comment_action_fail
      end
    else
      dont_have_permission
    end
  end

  def destroy
    if correct_user comment.user
      if comment.destroy
        comment_action_success destroyed
      else
        comment_action_fail
      end
    else
      dont_have_permission
    end
  end

  private

  attr_reader :comment, :story, :step, :commentable

  def comments_params
    params.require(:comment).permit Comment::ATTRIBUTES_PARAMS
  end

  def find_commentable
    @story = Story.find_by id: params[:story_id]
    @step = Step.find_by id: params[:step_id]
    @commentable =
      if story.present? && step.present?
        step
      else
        story
      end
  end

  def comment_action_success type_action
    render json: {
      messages:
        I18n.t("comments.messages.comment_action_success",
          type: type_action.to_s),
      data: {comment: comment_serializer}
    }, status: :ok
  end

  def comment_action_fail
    render json: {
      messages: comment.errors.full_messages.to_sentence
    }, status: :unprocessable_entity
  end

  def dont_have_permission
    render json: {
      messages: I18n.t("comments.dont_have_permission")
    }, status: :unprocessable_entity
  end

  def params_id
    params[:id]
  end

  def comment_serializer
    Serializers::Comments::CommentSerializer.new(object: comment).serializer
  end
end
