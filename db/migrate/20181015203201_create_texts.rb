class CreateTexts < ActiveRecord::Migration[5.2]
  def change
    create_table :texts do |t|
      t.string :text
      t.integer :x
      t.integer :y
      t.integer :width
      t.integer :height
      t.string :font-family
      t.integer :font-size
      t.string :font-style
      t.string :font-color

      t.timestamps
    end
  end
end
