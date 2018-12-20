class Bubble < ApplicationRecord
  belongs_to :comic
  belongs_to :frames, optional: true
  belongs_to :shape

  validates :comic_id, :x, :y, :shape_id, presence: true
end
