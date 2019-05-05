class Api::StepsController < ApplicationController

  before_action :deny_access_if_not_logged_in
  
  def index
    @steps = Todo.find(params[:todo_id]).steps
    render json: @steps
  end

  def create
    @step = Step.new(step_params)
    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def update
    @step = Step.find(params[:id])
    @step.update_attributes(step_params)
    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy
    @step = Step.find(params[:id])
    if @step.destroy
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end
  
  private
  def step_params
    params.require(:step).permit(:title, :body, :done, :todo_id)
  end
end