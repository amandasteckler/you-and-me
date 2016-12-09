class SessionsController < ApplicationController
skip_before_action :authenticate_user, only: [:create]


  def create
    user = User.find_by(email: auth_params[:email])
    if user.authenticate(auth_params[:password])
      jwt = Auth.issue({user: user.id})
      sorted_boards = user.boards.sort_by &:created_at
      boards = sorted_boards.map do |board|
        {title: board.title, id: board.id}
      end

      if user.name == user.name.capitalize
        username = user.name
      else
        username = user.name.capitalize
      end
      
      render json: {jwt: jwt, current_user: {user_id: user.id, user_name: username, boards: boards}}
    else
      render json: {jwt: "User Not Found"}
    end
  end

  def destroy
  end

  private
    def auth_params
      params.require(:auth).permit(:email, :password)
    end
end
