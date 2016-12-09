class OrderedImages

  def sort_with_user(board)
    rawImages = board.user_boards.map {|user_board| user_board.images}.flatten
    # [{Post}, {}, {}]
    order_images = rawImages.sort_by {|image| image.created_at}.reverse

    orderedWithUser = order_images.map {|image|
      {id: image.id, url: image.url, userID: image.user_board.user.id, userName: image.user_board.user.name, createAt: image.created_at, type: "image"}
    }
  end

end
