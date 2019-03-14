class ComicsOnReactController < ApplicationController
  def index
    @comic = Comic.find(1)
  end

  def tuneFigure
    comic_id = params[:comic_id]
    figure_id = params[:figure_id]
    width = params[:width]
    height = params[:height]
    x = params[:x]
    y = params[:y]
    background_color = params[:background_color]

    comic = Comic.find(comic_id)
    figure = comic.figures.find(figure_id)

    respond_to do |format|
      figure.update_attributes(:width => width, :height => height, :x => x, :y => y, :background_color => background_color)
      format.json { render json: {},  status: :ok }
    end
  end

  def tuneSpeech
    comic_id = params[:comic_id]
    speech_id = params[:speech_id]
    width = params[:width]
    height = params[:height]
    x = params[:x]
    y = params[:y]
    text = params[:text]

    comic = Comic.find(comic_id)
    speech = comic.speeches.find(speech_id)

    respond_to do |format|
      speech.update_attributes(:width => width, :height => height, :x => x, :y => y, :text => text)
      format.json { render json: {},  status: :ok }
    end
  end

  def tuneImage
    comic_id = params[:comic_id]
    image_id = params[:image_id]
    width = params[:width]
    height = params[:height]
    x = params[:x]
    y = params[:y]

    comic = Comic.find(comic_id)
    image = comic.images.find(image_id)

    respond_to do |format|
      image.update_attributes(:width => width, :height => height, :x => x, :y => y)
      format.json { render json: {},  status: :ok }
    end
  end

  def saveLayersOrder
    comic_id = params[:data][:comic_id]
    figuresIndexes = params[:data][:figuresIndexes]

    comic = Comic.find(comic_id)

    figuresIndexes.each do |id, z_index|
      figure = comic.figures.find(id)
      figure.update_attributes(:z_index => z_index)
      p figure.id, figure.z_index
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
