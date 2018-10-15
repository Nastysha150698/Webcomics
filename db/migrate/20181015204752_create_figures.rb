class CreateFigures < ActiveRecord::Migration[5.2]
  def change
    create_table :figures do |t|
      t.string :figure
      t.integer :x
      t.integer :y
      t.integer :width
      t.integer :height
      t.integer :border_width
      t.string :border_color
      t.string :background_color

      t.timestamps
    end
  end
end
