class Frame < ApplicationRecord
  belongs_to :comic
  has_many :figures

  validates :comic_id, :x, :y, :width, :height, presence: true
end
