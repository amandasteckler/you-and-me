class ImagesController < ApplicationController
  skip_before_action :authenticate_user

  def new
    auth = {
      cloud_name: "dzs7addex",
      api_key:    "881868338744319",
      api_secret: "pR-k06zrut5LasFM8_pnaTkf6HQ"
    }

    myFile = Cloudinary::Uploader.upload(params["file"].tempfile.path, auth)
    render json: {imageUrl: myFile["url"]}
  end

  def create
    image = Image.new(image_params)

    if image.save
      board = Board.find(image.user_board.board.id)
      ordered_posts = OrderedPosts.new.sort_with_user(board)
      render json:
    else
      render json: {error: "You failed"}
    end

  end

  def show
    image = Image.find(params[:id])
    render json: {image: image}
    #what goes here?
  end

  def update
  end

  def delete
  end

  private

  def image_params
    params.require(:image).permit(:url, :user_board_id)
  end

end
