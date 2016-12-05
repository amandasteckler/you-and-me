class SessionsController < ApplicationController

  def create
    user = User.find_by(email: auth_params[:email])
    if user.authenticate(auth_params[:password])
      jwt = Auth.issue({user: user.id})
      # boards = user.boards.map do |board|
      #   {title: board.title}
      # end
      render json: {jwt: jwt, current_user: {user_id: user.id, user_name: user.name.capitalize!, boards: {}}}
    else
      render json: {jwt: "User Not Found"}
    end
  end

  private
    def auth_params
      params.require(:auth).permit(:email, :password)
    end
end
