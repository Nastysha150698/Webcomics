class AddZIndexToFigure < ActiveRecord::Migration[5.2]
  def change
    add_column :figures, :z_index, :integer
  end
end
