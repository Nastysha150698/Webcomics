class FixSpeechColorSelector < ActiveRecord::Migration[5.2]
  def change
    rename_column :speeches, :font_color, :color
  end
end
