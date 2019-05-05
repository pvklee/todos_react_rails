class SessionsController < ApplicationController
  before_action :redirect_if_logged_in, only: %i(new create)
  before_action :redirect_if_not_logged_in, only: %i(destroy)

  def new
  end

  def create
    user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
    )
    if user
        log_in(user)
        redirect_to(root_path)
    else
        render json: user.errors.full_messages
    end
  end

  def destroy
    log_out
    render :new
  end
end
