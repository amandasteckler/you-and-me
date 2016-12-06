class UserBoard < ApplicationRecord
  belongs_to :user
  belongs_to :board
  has_many :posts
  has_many :images
end
