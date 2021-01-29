class SongsController < ApplicationController
  # GET /songs
  def index
    @songs = Song.all

    render json: @songs
  end

  # GET /songs/1
  def show
    # @song = Song.new(song_params)
    @song = Song.find(params[:id])
    render json: @song
  end

  # POST /songs
  def create
    # @song = Song.new(song_params)
    @song = Song.new(params[:id])

    if @song.save
      render json: @song, status: :created
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /songs/1
  def update
    @song = Song.find(params[:id])
    @song.update(song_params)
    render json: @song

    # if @song.update(song_params)
    #   render json: @song
    # else
    #   render json: @song.errors, status: :unprocessable_entity
    # end
  end

  # DELETE /songs/1
  def destroy
    @song = Song.find(params[:id])
    @song.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song
      @song = Song.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def song_params
      params.require(:song).permit(:name, :artist, :genre, :record_label, :year, :producer_id, :sample_appears)
    end
end