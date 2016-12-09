class OrderedPosts

  def sort_with_user(board)
    rawPosts = board.user_boards.map {|user_board| user_board.posts}.flatten
    # [{Post}, {}, {}]
    order_posts = rawPosts.sort_by {|post| post.created_at}.reverse

    orderedWithUser = order_posts.map {|post|
      {id: post.id, content: post.content, userID: post.user_board.user.id, userName: post.user_board.user.name, createAt: post.created_at, type: "text"}
    }
  end

end
