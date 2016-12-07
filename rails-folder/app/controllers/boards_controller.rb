class BoardsController < ApplicationController
  skip_before_action :authenticate_user, only: [:show, :destroy]

  def new
    board = Board.new(board_params)
  end

  def create
    board = Board.new(board_params)
    if board.save
    end
  end

  def show
    # tried ordering when pulling from DB, difficult because selection will be two arrays from users
    board = Board.find(params[:id])
    users = board.users
    rawPosts = board.user_boards.map {|user_board| user_board.posts}.flatten
    # [{Post}, {}, {}]
    order_posts = rawPosts.sort_by {|post| post.created_at}.reverse
    orderedWithUser = order_posts.map {|post| {id: post.id, content: post.content, userID: post.user_board.user.id, userName: post.user_board.user.name}}
    users = board.users.map {|user| {id: user.id, name: user.name}}
    render json: {board: {id: board.id, title: board.title, user_boards: board.user_boards, users: users, posts: orderedWithUser}}
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
