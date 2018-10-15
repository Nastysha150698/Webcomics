class CreateBubbles < ActiveRecord::Migration[5.2]
  def change
    create_table :bubbles do |t|
      t.string :figure
      t.integer :x
      t.integer :y
      t.integer :width
      t.integer :height
      t.integer :border-width
      t.string :border-color
      t.string :background-color
      t.string :shape

      t.timestamps
    end
  end
end
