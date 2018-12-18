class AddOpacityToImage < ActiveRecord::Migration[5.2]
  def change
    add_column :images, :opacity, :integer
  end
end
