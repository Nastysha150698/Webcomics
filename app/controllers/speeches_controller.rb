class SpeechesController < ApplicationController
  before_action :set_speech, only: [:show, :edit, :update, :destroy]

  # GET /speeches
  # GET /speeches.json
  def index
    @speeches = Speech.all
  end

  # GET /speeches/1
  # GET /speeches/1.json
  def show
  end

  # GET /speeches/new
  def new
    @comic = Comic.find(params[:comic_id])
    @speech = @comic.speeches.new
  end

  # GET /speeches/1/edit
  def edit
    @comic = @speech.comic
    @@old_z_index = @speech.z_index
  end

  # POST /speeches
  # POST /speeches.json
  def create
    @comic = Comic.find(params[:comic_id])
    @speech = Speech.new(speech_params)
    @speech.comic_id = params[:comic_id]
    @speech.z_index = objects_quantity(@speech.comic) + 1

    respond_to do |format|
      if @speech.save
        format.json { render json: {speech_id: @speech.id},  status: :ok }
        # format.html { redirect_to @comic, notice: 'Speech was successfully created.' }
        # format.json { render :show, status: :created, location: @speech }
      else
        # format.html { render :new }
        # format.json { render json: @speech.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /speeches/1
  # PATCH/PUT /speeches/1.json
  def update
    @comic = @speech.comic

    respond_to do |format|
      if @speech.update(speech_params)
        format.html { redirect_to @comic, notice: 'Speech was successfully updated.' }
        format.json { render :show, status: :ok, location: @speech }
      else
        format.html { render :edit }
        format.json { render json: @speech.errors, status: :unprocessable_entity }
      end
    end

    @new_z_index = @speech.z_index

    change_z_indexes(@comic.figures, @speech, @new_z_index, @@old_z_index)
    change_z_indexes(@comic.speeches, @speech, @new_z_index, @@old_z_index)
    change_z_indexes(@comic.images, @speech, @new_z_index, @@old_z_index)

  end

  # DELETE /speeches/1
  # DELETE /speeches/1.json
  def destroy
    @speech.destroy
    respond_to do |format|
      format.html { redirect_to @speech.comic, notice: 'Speech was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_speech
      @speech = Speech.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def speech_params
      params.require(:speech).permit(:text, :x, :y, :width, :height, :font_size, :line_height, :color, :background_color, :comic_id, :frame_id, :font_id, :z_index)
    end
end
