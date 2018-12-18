class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :image
      t.integer :x
      t.integer :y
      t.integer :width
      t.integer :height

      t.timestamps
    end
  end
end
