class Image < ApplicationRecord
  belongs_to :user_board
  #need a post_id in images table
  #probably a name and url too, maybe size and type
end
