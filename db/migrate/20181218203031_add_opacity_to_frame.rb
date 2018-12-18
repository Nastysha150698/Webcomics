class AddOpacityToFrame < ActiveRecord::Migration[5.2]
  def change
    add_column :frames, :opacity, :integer
  end
end
