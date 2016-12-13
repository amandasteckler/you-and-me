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

      rawImages = board.user_boards.map {|user_board| user_board.images}.flatten
          # [{Post}, {}, {}]
      order_images = rawImages.sort_by {|image|
        image.created_at}.reverse

      ordered_with_user = order_images.map {|image| {id: image.id, url: image.url, userID: image.user_board.user.id, userName: image.user_board.user.name, createAt: image.created_at, type: "image"}}

      render json: {images: ordered_with_user}
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

  def destroy
    board = Board.find(image_params[:board_id])
    Image.delete(params[:id])
    rawImages = board.user_boards.map {|user_board| user_board.images}.flatten
    order_images = rawImages.sort_by {|image| image.created_at}.reverse
    ordered_with_user = order_images.map {|image| {id: image.id, url: image.url, userID: image.user_board.user.id, userName: image.user_board.user.name, createAt: image.created_at, type: "image"}}

    render json: {images: ordered_with_user}
  end

  private

  def image_params
    params.require(:image).permit(:url, :user_board_id, :board_id)
  end

end
