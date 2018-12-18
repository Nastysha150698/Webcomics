class AddOpacityToBubble < ActiveRecord::Migration[5.2]
  def change
    add_column :bubbles, :opacity, :integer
  end
end
