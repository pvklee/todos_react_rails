class Api::TodosController < ApplicationController

  before_action :deny_access_if_not_logged_in
  
  def show
    render json: Todo.find(params[:id])
  end

  def index
    @todos = current_user.todos.all
    render json: @todos
  end

  def create
    @todo = current_user.todos.new(todo_params)
    if @todo.save! then
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def update
    @todo = current_user.todos.find(params[:id])
    @todo.update_attributes(todo_params)
    if @todo.save then
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    @todo = current_user.todos.find(params[:id])
    if @todo.destroy then
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end
  
  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done, tag_names: [])
  end
end
