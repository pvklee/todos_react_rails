class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?
    
  def current_user
      @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def log_in(user)
    session[:session_token] = user.session_token
    @current_user = user
  end

  def log_out
    current_user.reset_session_token
    @current_user = nil
    session[:session_token] = nil
  end 

  def logged_in?
    !!current_user
  end

  def redirect_if_logged_in
    redirect_to root_url if logged_in?
  end

  def redirect_if_not_logged_in
    redirect_to new_session_url unless logged_in?
  end

  def deny_access_if_not_logged_in
    unless logged_in?
      render json: ['You must be logged in to do that'], status: :unauthorized
    end
  end
end
