class FiguresController < ApplicationController
  before_action :set_figure, only: [:show, :edit, :update, :destroy]

  # GET /figures
  # GET /figures.json
  def index
    @figures = Figure.all
  end

  # GET /figures/1
  # GET /figures/1.json
  def show
  end

  # GET /figures/new
  def new
    @comic = Comic.find(params[:comic_id])
    @figure = @comic.figures.new
    # @figure = Figure.new
  end

  # GET /figures/1/edit
  def edit
    @comic = @figure.comic
  end

  # POST /figures
  # POST /figures.json
  def create
    @figure = Figure.new(figure_params)
    @figure.comic_id = params[:comic_id]

    respond_to do |format|
      if @figure.save
        @comic = @figure.comic
        format.html { redirect_to @comic, notice: 'Figure was successfully created.' }
        format.json { render :show, status: :created, location: @figure }
      else
        format.html { render :new }
        format.json { render json: @figure.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /figures/1
  # PATCH/PUT /figures/1.json
  def update
    @comic = @figure.comic

    respond_to do |format|
      if @figure.update(figure_params)
        format.html { redirect_to @comic, notice: 'Figure was successfully updated.' }
        format.json { render :show, status: :ok, location: @figure }
      else
        format.html { render :edit }
        format.json { render json: @figure.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /figures/1
  # DELETE /figures/1.json
  def destroy
    @figure.destroy
    respond_to do |format|
      format.html { redirect_to figures_url, notice: 'Figure was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_figure
      @figure = Figure.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def figure_params
      params.require(:figure).permit(:figure, :x, :y, :width, :height, :border_width, :border_radius, :border_color, :background_color, :comic_id, :z_index)
    end
end
