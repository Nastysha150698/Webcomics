class Speech < ApplicationRecord
  belongs_to :comic
  belongs_to :frame, optional: true
  belongs_to :font, optional: true

  validates :comic_id, :x, :y, :width, :height, presence: true
end
