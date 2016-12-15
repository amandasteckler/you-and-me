class BoardsController < ApplicationController
  skip_before_action :authenticate_user, only: [:create, :show, :destroy, :update]

  def new
    board = Board.new(board_params)
  end

  def create
    board = Board.new(title: params[:title])
    user = User.find(params[:user_id])
    other_user_email = params[:other_user_email]
    other_user = User.find_by(email: other_user_email)

    if board.save
      user_board_one = UserBoard.create(user_id: user.id, board_id: board.id)
      user_board_two = UserBoard.create(user_id: other_user.id, board_id: board.id)
    end

    new_user_boards = user.boards.map do |board|
      {title: board.title, id: board.id}
    end

    render json: { boards: new_user_boards }
  end

  def show
    board = Board.find(params[:id])
    users = board.users

    posts = OrderedPosts.new.sort_with_user(board)
    images = OrderedImages.new.sort_with_user(board)

    render json: {board: {id: board.id, title: board.title, user_boards: board.user_boards, users: users, posts: posts, images: images}}

  end

  def index
    @boards = Board.all
    render json: {boards: @boards}
  end

  def update
    board = Board.find(params[:board_id])
    board.update(title: params[:title])
    current_user = User.find(params[:current_user_id])

    users = board.users

    posts = OrderedPosts.new.sort_with_user(board)

    users = board.users.map {|user| {id: user.id, name: user.name}}

    sorted_boards = current_user.boards.sort_by &:created_at

    user_boards = sorted_boards.map do |board|
      {title: board.title, id: board.id}
    end


    render json: {board: {id: board.id, title: board.title, user_boards: board.user_boards, users: users, posts: posts}, boards: user_boards}
  end

  def destroy
    @user = User.find(params[:user_id])
    @board = Board.find(params[:id])
    @board.destroy
    new_boards = @user.boards.map do |board|
      {title: board.title, id: board.id}
    end
    render json: { boards: new_boards }
  end

  private

  def board_params
    params.require(:board).permit(:title)

  end
end
