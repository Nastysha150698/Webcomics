class AddOpacityToFigure < ActiveRecord::Migration[5.2]
  def change
    add_column :figures, :opacity, :integer
  end
end
