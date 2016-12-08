class PostsController < ApplicationController
  skip_before_action :authenticate_user

  def new
    post = Post.new(post_params)
  end

  def create
    post = Post.new(post_params)
    if post.save
      board = Board.find(UserBoard.find(post_params[:user_board_id]).board.id)
      rawPosts = board.user_boards.map {|user_board| user_board.posts}.flatten
      # [{Post}, {}, {}]
      order_posts = rawPosts.sort_by {|post| post.created_at}.reverse
      orderedWithUser = order_posts.map {|post| {id: post.id, content: post.content, userID: post.user_board.user.id, userName: post.user_board.user.name}}

      render json: {posts: orderedWithUser}
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
    post = Post.find(post_params[:id])
    board = Board.find(post_params[:board_id])

    Post.delete(params[:id])

    rawPosts = board.user_boards.map {|user_board| user_board.posts}.flatten
    # [{Post}, {}, {}]
    order_posts = rawPosts.sort_by {|post| post.created_at}.reverse
    orderedWithUser = order_posts.map {|post| {id: post.id, content: post.content, userID: post.user_board.user.id, userName: post.user_board.user.name}}



    render json: {posts: orderedWithUser}

  end

  private

  def post_params
    params.require(:post).permit(:content, :user_board_id, :id, :board_id)

  end
end
