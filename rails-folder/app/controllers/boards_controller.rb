class BoardsController < ApplicationController
  skip_before_action :authenticate_user, only: [:create, :show, :destroy]

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
    # tried ordering when pulling from DB, difficult because selection will be two arrays from users
    board = Board.find(params[:id])
    users = board.users
    posts = OrderedPosts.new.sort_with_user(board)

    rawImages = board.user_boards.map {|user_board| user_board.images}.flatten
    order_images = rawImages.sort_by {|image| image.created_at}.reverse
    imgs_ordered_with_user = order_images.map {|image| {id: image.id, url: image.url, userID: image.user_board.user.id, userName: image.user_board.user.name}}

    render json: {board: {id: board.id, title: board.title, user_boards: board.user_boards, users: users, posts: posts, images: imgs_ordered_with_user}}
  end

  def index
    @boards = Board.all
    render json: {boards: @boards}
  end

  def update
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
