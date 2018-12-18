class FramesController < ApplicationController
  before_action :set_frame, only: [:show, :edit, :update, :destroy]

  # GET /frames
  # GET /frames.json
  def index
    @frames = Frame.all
  end

  # GET /frames/1
  # GET /frames/1.json
  def show
  end

  # GET /frames/new
  def new
    @comic = Comic.find(params[:comic_id])
    @frame = @comic.frames.new
  end

  # GET /frames/1/edit
  def edit
    @comic = @frame.comic
  end

  # POST /frames
  # POST /frames.json
  def create
    @frame = Frame.new(frame_params)
    @frame.comic_id = params[:comic_id]

    respond_to do |format|
      if @frame.save
        @comic = @frame.comic
        format.html { redirect_to @comic, notice: 'Frame was successfully created.' }
        format.json { render :show, status: :created, location: @frame }
      else
        format.html { render :new }
        format.json { render json: @frame.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /frames/1
  # PATCH/PUT /frames/1.json
  def update
    @comic = @frame.comic

    respond_to do |format|
      if @frame.update(frame_params)
        format.html { redirect_to @comic, notice: 'Frame was successfully updated.' }
        format.json { render :show, status: :ok, location: @frame }
      else
        format.html { render :edit }
        format.json { render json: @frame.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /frames/1
  # DELETE /frames/1.json
  def destroy
    @frame.destroy
    respond_to do |format|
      format.html { redirect_to frames_url, notice: 'Frame was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_frame
      @frame = Frame.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def frame_params
      params.require(:frame).permit(:frame, :x, :y, :width, :height, :border_width, :border_color, :background_color, :comic_id, :rotate, :opacity)
    end
end
