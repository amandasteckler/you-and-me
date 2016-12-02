class User < ApplicationRecord
  has_secure_password
  
  has_many :user_boards
  has_many :boards, through: :user_boards
end
