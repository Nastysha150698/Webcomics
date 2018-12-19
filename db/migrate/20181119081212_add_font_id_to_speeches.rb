class AddFontIdToSpeeches < ActiveRecord::Migration[5.2]
  def change
    add_column :speeches, :font_id, :integer
  end
end
