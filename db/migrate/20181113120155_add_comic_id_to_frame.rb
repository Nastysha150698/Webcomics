class AddComicIdToFrame < ActiveRecord::Migration[5.2]
  def change
    add_column :frames, :comic_id, :integer
  end
end
