class BoardsController < ApplicationController
  skip_before_action :authenticate_user, only: [:show]

  def new
    board = Board.new(board_params)
  end

  def create
    board = Board.new(board_params)
    # Board.create(board_params)     
    if board.save
    end
  end

  def show
    byebug
    # tried ordering when pulling from DB, difficult because selection will be two arrays from users
    board = Board.find(params[:id])
    users = board.users
    rawPosts = board.user_boards.map {|user_board| user_board.posts}.flatten
    # [{Post}, {}, {}]
    order_posts = rawPosts.sort_by {|post| post.created_at}.reverse
    # JK: this sorting can be done on the AR level, which would make it more performant.

    orderedWithUser = order_posts.map {|post| {post: post, user: post.user_board.user}}
    # JK: Consider using the merge method in ruby.
    render json: {board: {board: board, users: users, user_boards: board.user_boards}, posts: orderedWithUser}
  end

  def index
    @boards = Board.all
    render json: {boards: @boards}
  end

  def update
  end

  def delete
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end
end
