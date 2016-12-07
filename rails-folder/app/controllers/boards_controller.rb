class BoardsController < ApplicationController
  skip_before_action :authenticate_user, only: [:show]

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
    orderedWithUser = order_posts.map {|post| {post: post, user_name: post.user_board.user.name, user_id: post.user_board.user.id}}
    users = board.users.map {|user| {id: user.id, name: user.name}}
    render json: {board: {id: board.id, title: board.title, user_boards: board.user_boards, users: users}}
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
