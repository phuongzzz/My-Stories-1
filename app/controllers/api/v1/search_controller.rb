class Api::V1::SearchController < Api::BaseController
  skip_before_action :authenticate_user_from_token

  def search
    if params[:q].nil?
      @stories = []
      @steps = []
    else
      @stories = Story.search params[:q]
      @steps = Step.search params[:q]
    end
    render json: {
      messages: I18n.t("search_successfully"),
      data: {stories: stories, steps: steps}
    }, status: :ok
  end

  private

  attr_reader :stories, :steps
end
