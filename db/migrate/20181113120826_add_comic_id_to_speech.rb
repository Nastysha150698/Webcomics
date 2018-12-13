class AddComicIdToSpeech < ActiveRecord::Migration[5.2]
  def change
    add_column :speeches, :comic_id, :integer
  end
end
