class Frame < ApplicationRecord
  belongs_to :comic
  has_many :figures
  has_many :images
  has_many :speeches

  validates :comic_id, :x, :y, :width, :height, presence: true
end
