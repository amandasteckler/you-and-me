class PostsController < ApplicationController
  def new
    post = Post.new(post_params)
  end

  def create
    post = Post.new(post_params)

    if post.save
    end
  end

  def show
    post = Post.find(params[:id])
  end

  def index
    @posts = Post.all
  end

  def update
  end

  def delete
  end

  private

  def post_params
    params.require(:post).permit(:content, :user_id)

  end
end