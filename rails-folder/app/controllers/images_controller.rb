class ImagesController < ApplicationController
  skip_before_action :authenticate_user
  def new
    image = Image.new(image_params)
  end

  def create

    auth = {
      cloud_name: "dzs7addex",
      api_key:    "881868338744319",
      api_secret: "pR-k06zrut5LasFM8_pnaTkf6HQ"
    }

    myFile = Cloudinary::Uploader.upload(params["file"].tempfile.path, auth)
    render json: {imageUrl: myFile["url"]}
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
    # params.require(:image).permit()
  end

end
