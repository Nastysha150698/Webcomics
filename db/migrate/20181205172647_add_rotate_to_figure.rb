class AddRotateToFigure < ActiveRecord::Migration[5.2]
  def change
    add_column :figures, :rotate, :integer
  end
end
