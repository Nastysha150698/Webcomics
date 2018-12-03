class Comic < ApplicationRecord
  has_many :bubbles
  has_many :frames
  has_many :images
  has_many :speeches
  has_many :figures
end
