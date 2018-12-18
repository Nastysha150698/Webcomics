class AddTextToBubble < ActiveRecord::Migration[5.2]
  def change
    add_column :bubbles, :text, :string
  end
end
