class AddComicIdToFigure < ActiveRecord::Migration[5.2]
  def change
    add_column :figures, :comic_id, :integer
  end
end
