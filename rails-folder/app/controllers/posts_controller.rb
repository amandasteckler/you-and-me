class PostsController < ApplicationController
  skip_before_action :authenticate_user

  def new
    post = Post.new(post_params)
  end

  def create
    post = Post.new(post_params)

    if post.save
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
    Post.delete(params[:id])

    if true
      render json: {success: true, deleted_post_id: params[:id] }
    else
      render json: {success: false}
    end

  end

  private

  def post_params
    params.require(:post).permit(:content, :user_board_id)

  end
end
