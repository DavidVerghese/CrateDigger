class SamplesassociatedwithsongsController < ApplicationController
    # you need to add in song id as url parameter
  def show
    # get all the songssample pairs that contain  a certain 
    # song id 
    @songssamples = SongsSample.where(song_id: params[:id])
    # get all the sample ids that are matched to this 
    # song id 
    # @sampleids = @songssamples.pluck(:sample_id)
    # get all the samples based on these sample ids
    # @samples = Sample.where(id: @sampleids)
    # render json: @samples
    render json: @songssamples
  end
end