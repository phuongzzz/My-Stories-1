class Api::V1::SearchController < Api::BaseController
  skip_before_action :authenticate_user_from_token

  def search
    if params_search.present?
      @stories = Story.search params_search
      @steps = Step.search params_search
    else
      @stories = []
      @steps = []
    end

    render json: {
      messages: I18n.t("search_successfully"),
      data: {stories: stories, steps: steps}
    }, status: :ok
  end

  private

  attr_reader :stories, :steps

  def params_search
    params[:q]
  end
end
