class AddFormIdToBubble < ActiveRecord::Migration[5.2]
  def change
    add_column :bubbles, :form_id, :integer
  end
end
