class Image < ApplicationRecord
  belongs_to :comic
  belongs_to :frame, optional: true

  validates :comic_id, :x, :y, :width, :height, presence: true

  # mount_base64_uploader :image, ImageUploader
  mount_uploader :image, ImageUploader
end
