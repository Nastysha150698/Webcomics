class Bubble < ApplicationRecord
  belongs_to :comic
  # belongs_to :frame, optional: true

  validates :comic_id, :x, :y, :width, :height, presence: true
end
