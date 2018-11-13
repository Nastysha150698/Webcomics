class BubblesController < ApplicationController
  before_action :set_bubble, only: [:show, :edit, :update, :destroy]

  # GET /bubbles
  # GET /bubbles.json
  def index
    @bubbles = Bubble.all
  end

  # GET /bubbles/1
  # GET /bubbles/1.json
  def show
  end

  # GET /bubbles/new
  def new
    @comic = Comic.find(params[:comic_id])
    @bubble = @comic.bubbles.new
  end

  # GET /bubbles/1/edit
  def edit
    @comic = @bubble.comic
  end

  # POST /bubbles
  # POST /bubbles.json
  def create
    @bubble = Bubble.new(bubble_params)
    @bubble.comic_id = params[:comic_id]

    respond_to do |format|
      if @bubble.save
          @comic = @bubble.comic
        format.html { redirect_to @comic, notice: 'Bubble was successfully created.' }
        format.json { render :show, status: :created, location: @bubble }
      else
        format.html { render :new }
        format.json { render json: @bubble.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /bubbles/1
  # PATCH/PUT /bubbles/1.json
  def update
    respond_to do |format|
      if @bubble.update(bubble_params)
        format.html { redirect_to @comic, notice: 'Bubble was successfully updated.' }
        format.json { render :show, status: :ok, location: @bubble }
      else
        format.html { render :edit }
        format.json { render json: @bubble.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bubbles/1
  # DELETE /bubbles/1.json
  def destroy
    @bubble.destroy
    respond_to do |format|
      format.html { redirect_to bubbles_url, notice: 'Bubble was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bubble
      @bubble = Bubble.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def bubble_params
      params.require(:bubble).permit(:figure, :x, :y, :width, :height, :border_width, :border_color, :background_color, :shape, :comic_id)
    end
end
