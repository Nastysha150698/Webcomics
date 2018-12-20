class AddLineHeightToSpeech < ActiveRecord::Migration[5.2]
  def change
    add_column :speeches, :line_height, :integer
  end
end
