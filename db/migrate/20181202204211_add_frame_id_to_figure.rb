class AddFrameIdToFigure < ActiveRecord::Migration[5.2]
  def change
    add_column :figures, :frame_id, :integer
  end
end
