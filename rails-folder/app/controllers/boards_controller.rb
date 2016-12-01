class BoardsController < ApplicationController
  def new
    board = Board.new(board_params)
  end

  def create
    board = Board.new(board_params)
    if board.save
    end
  end

  def show
    board = Board.find(params[:id])
    render json: {board: board}
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
