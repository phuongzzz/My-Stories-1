class Api::V1::VotesController < Api::BaseController
  before_action :find_voteable
  before_action :find_vote

  def up_down_vote
    if voteable.present?
      update_vote
    else
      voted_response_fail
    end
  end

  private

  attr_reader :voteable, :vote, :story, :step

  def find_voteable
    @story = Story.find_by id: params[:story_id]
    if story.present?
      @step = Step.find_by id: params_id
      @voteable = step
    else
      @story = Story.find_by id: params_id
      @voteable = story
    end
  end

  def find_vote
    @vote = voteable.votes.find_by user_id: current_user.id if voteable.present?
  end

  def update_vote
    if vote.present?
      change_vote_value
    else
      @vote = voteable.votes.new user_id: current_user.id
      vote.save ? voted_response_successfully : voted_response_fail
    end
  end

  def change_vote_value
    if vote.value == 1
      vote.update_attributes! value: 0
    else
      vote.update_attributes! value: 1
    end
    voted_response_successfully
  end

  def voted_response_successfully
    render json: {
      messages: I18n.t("votes.messages.voted_successfully")
    }, status: :ok
  end

  def voted_response_fail
    render json: {
      messages: I18n.t("votes.messages.voted_fail")
    }, status: :unprocessable_entity
  end

  def params_id
    params[:id]
  end
end
