class ComicsOnReactController < ApplicationController
  def index
    @comic = Comic.find(1)
  end

  def tune
    comic_id = params[:comic_id]
    figure_id = params[:figure_id]
    width = params[:width]
    height = params[:height]
    x = params[:x]
    y = params[:y]

    comic = Comic.find(comic_id)
    figure = comic.figures.find(figure_id)

    respond_to do |format|
      figure.update_attributes(:width => width, :height => height, :x => x, :y => y)
      format.json { render json: {},  status: :ok }
    end
  end

  def create
    @figure = Figure.new(params[:figure])
    @figure.comic_id = params[:comic_id]

    respond_to do |format|
      @figure.save
      format.json { render json: '',  status: :ok }
    end
  end

  def destroy
    comic_id = params[:comic_id]
    figure_id = params[:figure_id]
    comic = Comic.find(comic_id)
    figure = comic.figures.find(figure_id)

    figure.destroy
    respond_to do |format|
      format.json { render json: {},  status: :ok }
    end
  end

  def figure_params
    params.require(:figure).permit(:figure, :x, :y, :width, :height, :border_width, :border_radius, :border_color, :background_color, :comic_id, :frame_id, :z_index)
  end

end
