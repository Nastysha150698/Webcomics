class AddZIndexToImage < ActiveRecord::Migration[5.2]
  def change
    add_column :images, :z_index, :integer
  end
end
