class Bubble < ApplicationRecord
  belongs_to :comics
  belongs_to :frames, optional: true
end
