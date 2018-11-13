class AddComicIdToImage < ActiveRecord::Migration[5.2]
  def change
    add_column :images, :comic_id, :integer
  end
end
