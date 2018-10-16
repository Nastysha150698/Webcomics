class AddBackgroundColorToText < ActiveRecord::Migration[5.2]
  def change
    add_column :texts, :background_color, :string
  end
end
