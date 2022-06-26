class Users::SessionController < Devise::SessionController
  respond_to :json

  private

  def respond_with(_resource, _opts = {})
    render json: {
      message: 'You are logged in',
      user: current_user,
    }, status: :ok
  end

  def respond_to_on_destroy
    log_out_success && return if current_user

    log_out_failure
  end

  def log_out_success
    render json: {
      message: 'You are logged out',
    }
  end

  def log_out_failure
    render json: {
      message: 'Failed to log out',
    }, status: :unauthorized
  end
end
