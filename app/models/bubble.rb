class Bubble < ApplicationRecord
  belongs_to :comics
  belongs_to :frames, optional: true

  validates :comic_id, :x, :y, :width, :height, presence: true
end
