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
    @song = Song.new(song_params)
    @sample = Sample.new(sample_params)
    if @song.save && @sample.save
      @songssample = SongsSample.new(song: @song, sample: @sample)
    if @songssample.save
      render json: @songssample, status: :created
    else
      render json: @songssample.errors, status: :unprocessable_entity
    end
  end
end

  # PATCH/PUT /songssamples/1
  def update
    @songssample = SongsSample.find(params[:id])
    @songssample.update(songssample_params)
    render json: @songssample
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
    def song_params
      params.require(:song).permit(:name, :artist, :genre, :record_label, :year, :producer_id, :sample_appears)
    end
    def sample_params 
      params.require(:sample).permit(:name, :artist, :genre, :record_label, :year, :producer_id, :sampled_at)
    end 
end
