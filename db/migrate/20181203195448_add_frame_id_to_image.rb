class AddFrameIdToImage < ActiveRecord::Migration[5.2]
  def change
    add_column :images, :frame_id, :integer
  end
end
