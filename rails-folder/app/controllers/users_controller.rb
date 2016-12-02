class UsersController < ApplicationController
  def new
    user = User.new(user_params)
  end

  def create
    user = User.new(user_params)

    if user.save
      jwt = Auth.issue({user_id: user.id})
      render json: {jwt: jwt}
    else
      render json: {error: "user is not unique"}
    end
  end

  def show
    user = User.find(params[:id])

    jwt = Auth.issue({user_id: user.id})
    render json: {jwt: jwt}
  end

  def update
  end

  def delete
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password_digest, :board_id)
  end
end
