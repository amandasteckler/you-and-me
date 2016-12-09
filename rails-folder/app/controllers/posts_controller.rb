class PostsController < ApplicationController
  skip_before_action :authenticate_user

  def new
    post = Post.new(post_params)
  end

  def create
    post = Post.new(post_params)
    if post.save
      board = Board.find(UserBoard.find(post_params[:user_board_id]).board.id)
      posts = OrderedPosts.new.sort_with_user(board)
      render json: {posts: posts}
    else
      render json: {errors: "post not succesful"}
    end
  end

  def show
    post = Post.find(params[:id])
    render json: {post: post}
  end

  def index
    @posts = Post.all
    render json: {posts: @posts}
  end

  def update
  end

  def destroy
    board = Board.find(post_params[:board_id])
    Post.delete(params[:id])
    orderedWithUser = OrderedPosts.new.sort_with_user(board)
    render json: {posts: orderedWithUser}
  end

  private

  def post_params
    params.require(:post).permit(:content, :user_board_id, :id, :board_id)

  end
end
