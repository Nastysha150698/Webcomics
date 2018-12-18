class AddComicIdToBubble < ActiveRecord::Migration[5.2]
  def change
    add_column :bubbles, :comic_id, :integer
  end
end
