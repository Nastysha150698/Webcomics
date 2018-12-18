class Frame < ApplicationRecord
  belongs_to :comic

  validates :comic_id, :x, :y, :width, :height, presence: true
end
