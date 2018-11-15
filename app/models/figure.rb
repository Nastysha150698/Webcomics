class Figure < ApplicationRecord
  belongs_to :comic
  belongs_to :frames, optional: true

  validates :comic_id, :x, :y, :width, :height, presence: true
end
