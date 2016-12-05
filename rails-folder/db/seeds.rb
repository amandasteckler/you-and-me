scott_drew_board = Board.create(title: "Scott & Drew: BFFs")
amanda_drew_board = Board.create(title: "Amanda & Drew: BFFFFFFs")

scott = User.create(name: "Scott", email: "scott@s.com", password_digest: "scott0")
drew = User.create(name: "Drew", email: "drew@d.com", password_digest: "$2a$10$MZXVHK8cKhoAbNqTYp6dYusRDBpcFmglP59UskQxklE/Lq0lPuxnq")
amanda = User.create(name: "Amanda", email: "amanda@a.com", password_digest: "am1")

amanda_board_connection = UserBoard.create(user_id: amanda.id, board_id: amanda_drew_board.id)
drew_amanda_board_connection = UserBoard.create(user_id: drew.id, board_id: amanda_drew_board.id)

scott_board_connection = UserBoard.create(user_id: scott.id, board_id: scott_drew_board.id)
drew_board_connection = UserBoard.create(user_id: drew.id, board_id: scott_drew_board.id)

scott_first_post = Post.create(content: "Hey Drew. Hope you're well.", user_board_id: scott_board_connection.id)
drew_first_post = Post.create(content: "Scott. Hope you're well too.", user_board_id: drew_board_connection.id)
scott_second_post = Post.create(content: "I'm sleepy. Are you?", user_board_id: scott_board_connection.id)
drew_second_post = Post.create(content: "You're a great friend.", user_board_id: drew_board_connection.id)


amanda_first_post = Post.create(content: "Hey Drew. Wassup.", user_board_id: amanda_board_connection.id)
drew_third_post = Post.create(content: "Hey Amanda, wassuuuuuuppp.", user_board_id: drew_amanda_board_connection.id)
