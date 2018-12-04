class Frame < ApplicationRecord
  belongs_to :comic
<<<<<<< HEAD
  has_many :figures, :images, :speeches
=======
  has_many :figures
  has_many :images
  has_many :speeches
>>>>>>> frames_as_groups

  validates :comic_id, :x, :y, :width, :height, presence: true
end
