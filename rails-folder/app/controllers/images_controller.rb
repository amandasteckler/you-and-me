class ImagesController < ApplicationController
  def new
    image = Image.new(image_params)
  end

  def create
    image = Image.new(image_params)

    if image.save
    end
    #byebug
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
    params.require(:image).permit()
    #what goes here?
  end
end
