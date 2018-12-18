class Comic < ApplicationRecord
  has_many :bubbles
  has_many :figures
  has_many :frames
  has_many :images
  has_many :speeches
end
