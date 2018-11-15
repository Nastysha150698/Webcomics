class Figure < ApplicationRecord
  belongs_to :comic
  # belongs_to :frames, optional: true
end
