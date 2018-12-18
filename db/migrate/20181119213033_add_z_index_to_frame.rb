class AddZIndexToFrame < ActiveRecord::Migration[5.2]
  def change
    add_column :frames, :z_index, :integer
  end
end
