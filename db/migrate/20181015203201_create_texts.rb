class CreateTexts < ActiveRecord::Migration[5.2]
  def change
    create_table :texts do |t|
      t.string :text
      t.integer :x
      t.integer :y
      t.integer :width
      t.integer :height
      t.string :font_family
      t.integer :font_size
      t.string :font_style
      t.string :font_color

      t.timestamps
    end
  end
end
