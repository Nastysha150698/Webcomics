class AddBorderRadiusToFigure < ActiveRecord::Migration[5.2]
  def change
    add_column :figures, :border_radius, :integer
  end
end
