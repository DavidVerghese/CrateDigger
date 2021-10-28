class SamplesforsongsController < ApplicationController
  def index
    @songs = Song.all
    render json: @songs
  end
  def show
    @song = Song.find(params[:id])
    @song_id = @song.id
    @songssamples = SongsSample.find(params[@song_id])
    render json: @songssamples
  end

end