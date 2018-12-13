class AddZIndexToSpeeches < ActiveRecord::Migration[5.2]
  def change
    add_column :speeches, :z_index, :integer
  end
end
