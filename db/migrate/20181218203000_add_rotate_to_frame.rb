class AddRotateToFrame < ActiveRecord::Migration[5.2]
  def change
    add_column :frames, :rotate, :integer
  end
end
