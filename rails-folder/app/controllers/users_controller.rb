
class UsersController < ApplicationController
  skip_before_action :authenticate_user

  def new
    user = User.new(user_params)
  end

  def create
    user = User.new(user_params)

    if user.save
      jwt = Auth.issue({user_id: user.id})

      if user.name == user.name.capitalize
        username = user.name
      else
        username = user.name.capitalize
      end

      render json: {jwt: jwt, current_user: {user_id: user.id, user_name: username}}
    else
      render json: {error: "user is not unique"}, status: 404
    end
  end

  def show
    user = User.find(params[:id])

    jwt = Auth.issue({user_id: user.id})
    render json: {jwt: jwt}
  end

  def update
    user = User.find(params[:id])
    user.update(name: params[:name])
    render json: {name: user.name}
  end

  def destroy
    user = User.find(params[:user_id])
    user.destroy
  end

  private

  def user_params
    params.require(:auth).permit(:name, :email, :password)
  end
end
