class Image < ApplicationRecord
  belongs_to :comic
  # belongs_to :frames, optional: true
  mount_uploader :image, ImageUploader
end
