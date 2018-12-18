class AddBorderRadiusToBubble < ActiveRecord::Migration[5.2]
  def change
    add_column :bubbles, :border_radius, :integer
  end
end
