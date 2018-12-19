class Speech < ApplicationRecord
  belongs_to :comic
  belongs_to :frame, optional: true
  belongs_to :font

  validates :comic_id, :text, :x, :y, :width, :height, :font_id, :font_size, :color, presence: true
end
