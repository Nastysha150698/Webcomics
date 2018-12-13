class ApplicationController < ActionController::Base
  def objects_quantity(comic)
    (comic.figures.all.count + comic.images.all.count + comic.speeches.all.count)
  end

  def change_z_indexes(model, current_obj, new_z_index, old_z_index)
    if new_z_index < old_z_index
      model.all.each do |m|
        if (m.z_index >= new_z_index) && (m != current_obj) && (m.z_index < old_z_index)
          m.update_attribute(:z_index, m.z_index + 1)
        end
      end
    else
      model.all.each do |m|
        if (m.z_index <= new_z_index) && (m != current_obj) && (m.z_index > old_z_index)
          m.update_attribute(:z_index, m.z_index - 1)
        end
      end
    end
  end

end
