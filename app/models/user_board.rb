class UserBoard < ApplicationRecord
  belongs_to :user
  belongs_to :board
  has_many :posts
end