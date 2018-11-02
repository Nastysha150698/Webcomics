class Figure < ApplicationRecord
  belongs_to :comics
  belongs_to :frames, optional: true
end
