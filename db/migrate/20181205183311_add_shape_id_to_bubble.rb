class AddShapeIdToBubble < ActiveRecord::Migration[5.2]
  def change
    add_column :bubbles, :shape_id, :integer
  end
end
