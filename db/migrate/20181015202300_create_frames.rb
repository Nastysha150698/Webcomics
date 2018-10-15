class CreateFrames < ActiveRecord::Migration[5.2]
  def change
    create_table :frames do |t|
      t.integer :x
      t.integer :y
      t.integer :width
      t.integer :height
      t.integer :border-width
      t.string :border-color
      t.string :background-color

      t.timestamps
    end
  end
end
