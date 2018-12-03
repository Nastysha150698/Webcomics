class AddFrameIdToSpeech < ActiveRecord::Migration[5.2]
  def change
    add_column :speeches, :frame_id, :integer
  end
end
