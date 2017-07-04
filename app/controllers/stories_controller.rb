class StoriesController < ApplicationController
  before_action :load_story, only: [:show, :edit, :update]
  before_action :authorize_story, only: [:edit, :update]

  def index
    @stories = Story.all.order_by_time
  end

  def new
    @story = current_user.stories.new
    @story.steps.build
  end

  def create
    @story = current_user.stories.new story_params

    if @story.save
      flash[:success] = t "success_created_plan"
      redirect_to @story
    else
      flash[:danger] = t "false_created_plan"
      render :new
    end
  end

  def show
    @steps = @story.steps
  end

  def edit; end

  def update
    if @story.update_attributes story_params
      flash[:success] = t "success_updated_plan"
      redirect_to @story
    else
      flash[:danger] = t "failse_updated_plan"
      render :edit
    end
  end

  private

  def story_params
    params.require(:story).permit Story::STORY_PARAMS
  end

  def load_story
    @story = Story.find_by id: params[:id]

    return if @story
    flash[:wanning] = t "story_not_found"
    redirect_to root_path
  end

  def authorize_story
    authorize @story
  end
end
