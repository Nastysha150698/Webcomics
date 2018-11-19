class Speech < ApplicationRecord
  belongs_to :comic
  belongs_to :frames, optional: true
  belongs_to :font

  validates :comic_id, :text, :x, :y, :width, :height, :font_family, :font_size, :font_color, presence: true
end
