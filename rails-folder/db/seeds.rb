scott_drew_board = Board.create(title: "Scott & Drew: BFFs")
amanda_drew_board = Board.create(title: "Amanda & Drew: BFFFFFFs")

#seeds for demo
thomas_kim_board = Board.create(title: "Spring 2017 Ready-to-Wear")
kim_sam_board = Board.create(title: "Travel Photos")
kim_carmen_board = Board.create(title: "RuPaul's Drag Race GIFs")
#

scott = User.create(name: "Scott", email: "scott@s.com", password_digest: "$2a$10$MZXVHK8cKhoAbNqTYp6dYusRDBpcFmglP59UskQxklE/Lq0lPuxnq")
drew = User.create(name: "Drew", email: "drew@d.com", password_digest: "$2a$10$MZXVHK8cKhoAbNqTYp6dYusRDBpcFmglP59UskQxklE/Lq0lPuxnq")
amanda = User.create(name: "Amanda", email: "amanda@a.com", password_digest: "$2a$10$MZXVHK8cKhoAbNqTYp6dYusRDBpcFmglP59UskQxklE/Lq0lPuxnq")

#seeds for demo
thomas = User.create(name: "Thomas", email: "thomas@gmail.com", password_digest: "$2a$10$MZXVHK8cKhoAbNqTYp6dYusRDBpcFmglP59UskQxklE/Lq0lPuxnq")
kim = User.create(name: "Kim", email: "kim@gmail.com", password_digest: "$2a$10$MZXVHK8cKhoAbNqTYp6dYusRDBpcFmglP59UskQxklE/Lq0lPuxnq")
sam = User.create(name: "Sam", email: "sam@gmail.com", password_digest: "$2a$10$MZXVHK8cKhoAbNqTYp6dYusRDBpcFmglP59UskQxklE/Lq0lPuxnq")
carmen = User.create(name: "Carmen", email: "carmen@gmail.com", password_digest: "$2a$10$MZXVHK8cKhoAbNqTYp6dYusRDBpcFmglP59UskQxklE/Lq0lPuxnq")

#

amanda_board_connection = UserBoard.create(user_id: amanda.id, board_id: amanda_drew_board.id)
drew_amanda_board_connection = UserBoard.create(user_id: drew.id, board_id: amanda_drew_board.id)

scott_board_connection = UserBoard.create(user_id: scott.id, board_id: scott_drew_board.id)
drew_board_connection = UserBoard.create(user_id: drew.id, board_id: scott_drew_board.id)

#seeds for demo
thomas_kim_board_connection = UserBoard.create(user_id: thomas.id, board_id: thomas_kim_board.id)
kim_thomas_board_connection = UserBoard.create(user_id: kim.id, board_id: thomas_kim_board.id)
kim_sam_board_connection = UserBoard.create(user_id: kim.id, board_id: kim_sam_board.id)
sam_kim_board_connection = UserBoard.create(user_id: sam.id, board_id: kim_sam_board.id)
kim_carmen_board_connection = UserBoard.create(user_id: kim.id, board_id: kim_carmen_board.id)
carmen_kim_board_connection = UserBoard.create(user_id: carmen.id, board_id: kim_carmen_board.id)
#

scott_first_post = Post.create(content: "Hey Drew. Hope you're well.", user_board_id: scott_board_connection.id)
drew_picture_post = Image.create(url: "http://img1.izismile.com/img/img6/20131111/640/old_people_having_a_little_bit_of_fun_640_11.jpg", user_board_id: drew_board_connection.id)
drew_first_post = Post.create(content: "Scott. Hope you're well too.", user_board_id: drew_board_connection.id)
scott_second_post = Post.create(content: "I'm sleepy. Are you?", user_board_id: scott_board_connection.id)
drew_second_post = Post.create(content: "You're a great friend.", user_board_id: drew_board_connection.id)
scott_picture_post = Image.create(url: "http://pleated-jeans.com/wp-content/uploads/2013/12/ch2.jpg", user_board_id: scott_board_connection.id)

amanda_first_post = Post.create(content: "Hey Drew. Wassup.", user_board_id: amanda_board_connection.id)
amanda_picture_post = Image.create(url: "https://media0.giphy.com/media/PeFSCXkkVTw6Q/200_s.gif", user_board_id: amanda_board_connection.id)
drew_third_post = Post.create(content: "Hey Amanda, wassuuuuuuppp.", user_board_id: drew_amanda_board_connection.id)

#seeds for demo
thomas_first_fashion_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481676617/ucrjp7wrignv6u3hqhw3.jpg", user_board_id: thomas_kim_board_connection.id)
kim_first_fashion_post = Post.create(content: "Gorgeous! I love the newest Alexander McQueen.", user_board_id: kim_thomas_board_connection.id)
kim_first_fashion_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481677695/_CDG0299_qo03ed.jpg", user_board_id: kim_thomas_board_connection.id)
kim_second_fashion_post = Post.create(content: "Have you seen this from Commes des Garcons?", user_board_id: kim_thomas_board_connection.id)
thomas_first_fashion_post = Post.create(content: "Haha, what is he wearing?", user_board_id: thomas_kim_board_connection.id)
kim_third_fashion_post = Post.create(content: "I don't know...", user_board_id: kim_thomas_board_connection.id)
kim_second_fashion_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481678729/_ALE0194_bhvafs.jpg", user_board_id: kim_thomas_board_connection.id)
kim_fourth_fashion_post = Post.create(content: "Okay, but seriously, i like this one from Alexander Wang. Her top is cute, and check out the spiked anklet!", user_board_id: kim_thomas_board_connection.id)
thomas_second_fashion_post = Post.create(content: "Lanvin has my favorite from this season", user_board_id: thomas_kim_board_connection.id)
thomas_second_fashion_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481680500/KIM_0424_k8n3ac.jpg", user_board_id: thomas_kim_board_connection.id)
thomas_third_fashion_post = Post.create(content: "Or these from Kenzo!", user_board_id: thomas_kim_board_connection.id)
thomas_third_fashion_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481681118/KIM_0057_nniify.jpg", user_board_id: thomas_kim_board_connection.id)
thomas_fourth_fashion_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481681154/KIM_0571_n4ecxx.jpg", user_board_id: thomas_kim_board_connection.id)

####

kim_first_travel_post = Post.create(content: "Hey Sam! I took these pictures in the Southwest last week. Let me know what you think!", user_board_id: kim_sam_board_connection.id)
kim_first_travel_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481725391/new-mexico_tln3rc.jpg", user_board_id: kim_sam_board_connection.id)
kim_second_travel_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481725636/death-valley_inzjxi.jpg", user_board_id: kim_sam_board_connection.id)
kim_third_travel_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481725736/mojave_cffxga.jpg", user_board_id: kim_sam_board_connection.id)
kim_fourth_travel_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481729173/711902_pmcm6y.jpg", user_board_id: kim_sam_board_connection.id)
kim_fifth_travel_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481729325/background_gm5b58.jpg", user_board_id: kim_sam_board_connection.id)
kim_sixth_travel_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481729436/Death-Valley-Sand-Dunes_exkmrz.jpg", user_board_id: kim_sam_board_connection.id)
sam_first_travel_post = Post.create(content: "Just got back from Tokyo! Here's some of what I saw.", user_board_id: sam_kim_board_connection.id)
sam_first_travel_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481740020/Tokyo2_700_usi7l5.jpg", user_board_id: sam_kim_board_connection.id)
sam_second_travel_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481739943/j1DWGOB_u5ig4y.jpg", user_board_id: sam_kim_board_connection.id)
sam_third_travel_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481740258/tokyo-09_qeugqy.jpg", user_board_id: sam_kim_board_connection.id)
sam_fourth_travel_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481738928/7240235238_eedb23fb0e_b_hoh5r9.jpg", user_board_id: sam_kim_board_connection.id)
kim_second_travel_post = Post.create(content: "Wow Sam... Those are some great pictures... Are you sure you took them all...?", user_board_id: kim_sam_board_connection.id)

####

kim_first_rupaul_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481738083/latrice_jjtws6.gif", user_board_id: kim_carmen_board_connection.id)
kim_first_rupaul_post = Post.create(content: "When you complain to me about working at Google:", user_board_id: kim_carmen_board_connection.id)
carmen_first_rupaul_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481829725/detox_gdp9xk.gif", user_board_id: carmen_kim_board_connection.id)
carmen_first_rupaul_post = Post.create(content: "When you complain to me about wearing 2-inch heels:", user_board_id: carmen_kim_board_connection.id)
kim_second_rupaul_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481830030/willam_adal8i.gif", user_board_id: kim_carmen_board_connection.id)
kim_second_rupaul_post = Post.create(content: "When my cat tried to sit with you instead of me:", user_board_id: kim_carmen_board_connection.id)
carmen_first_rupaul_image = Image.create(url: "http://res.cloudinary.com/dzs7addex/image/upload/v1481830561/roxxxy_hlc7ua.gif", user_board_id: carmen_kim_board_connection.id)
carmen_first_rupaul_post = Post.create(content: "Me at my last presentation:", user_board_id: carmen_kim_board_connection.id)
