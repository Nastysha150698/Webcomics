class Image < ApplicationRecord
  belongs_to :comics
  belongs_to :frames, optional: true
end
