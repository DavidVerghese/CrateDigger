class SongssamplesController < ApplicationController
   # GET /songssamples
   def index
    @songssamples = SongsSample.all

    render json: @songssamples
  end

  # GET /songssamples/1
  def show
    @songssample = SongsSample.find(params[:id])
    render json: @songssample
  end

  # POST /songssamples
  def create
    @songssample = SongsSample.new(songssample_params)

    if @songssample.save
      render json: @songssample, status: :created
    else
      render json: @songssample.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /songssamples/1
  def update
    @songssample = SongsSample.find(params[:id])
    if @songssample.update(songssample_params)
      render json: @songssample
    else
      render json: @songssample.errors, status: :unprocessable_entity
    end
  end

  # DELETE /songssamples/1
  def destroy
    @songssample = SongsSample.find(params[:id])
    @songssample.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_songssample
      @songssample = SongsSample.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def songssample_params
      params.require(:songssample).permit(:song_id, :sample_id)
    end
end
