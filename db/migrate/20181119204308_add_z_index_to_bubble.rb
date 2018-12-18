class AddZIndexToBubble < ActiveRecord::Migration[5.2]
  def change
    add_column :bubbles, :z_index, :integer
  end
end
