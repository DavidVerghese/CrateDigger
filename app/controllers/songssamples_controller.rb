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
  #   @song_producer = Producer.create(song_producer_params)
  #   @sample_producer = Producer.create(sample_producer_params)
  #   @sample = Sample.new(sample_params)
  #   @sample.producer = @sample_producer
  #   @sample.save
  #   @song = Song.new(song_params)
  #   @song.producer = @song_producer
  #   @song.save

  #   if @song.save && @sample.save
  #     @songssample = SongsSample.new(song: @song, sample: @sample)
  #   if @songssample.save
  #     render json: @songssample, include: [{song: {include: :producer}}, {sample: {include: :producer}}], status: :created
  #   else
  #     render json: @songssample.errors, status: :unprocessable_entity
  #   end
  # end

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
    @songssample.update(songssample_params)
    render json: @songssample



    # @songssample = SongsSample.find(params[:id])
    # @song_id = @songssample.song_id
    # @sample_id = @songssample.sample_id
    # @song = Song.find(@song_id)
    # @song_producer_id = @song.producer_id
    # @song_producer = Producer.find(@song_producer_id)
    # @sample = Sample.find(@sample_id)
    # @sample_producer_id = @sample.producer_id
    # @sample_producer = Producer.find(@sample_producer_id)
    # @song.update(song_params)
    # @sample.update(sample_params)
    # @song_producer.update(song_producer_params)
    # @sample_producer.update(sample_producer_params)
    # @songssample.update(songssample_params)
    # render json: @sample

    # @songssample = SongsSample.find(params[:id])
    # @song_id = @songssample.song_id
    # @song = Song.find(@song_id)
    # @sample_id = @songssample.sample_id
    # @sample = Sample.find(@sample_id)
    # @song.update(song_params)
    # @sample.update(sample_params)

    # @songssample = SongsSample.find(params[:id])
    # if @songssample.update(songssample_params)
    #   render json: @songssample
    # else
    #   render json: @songssample.errors, status: :unprocessable_entity
    # end
    
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
    def song_producer_params
      params.require(:song_producer).permit(:name, :genre, :lifetime, :location, :producer_pic_address)
    end
    def sample_producer_params
      params.require(:sample_producer).permit(:name, :genre, :lifetime, :location, :producer_pic_address)
    end
    def song_params
      #song is the key to sort through the params
      params.require(:song).permit(:name, :artist, :genre, :record_label, :year, :sample_appears, :song_pic_address, :youtube_address)
    end
    def sample_params 
      params.require(:sample).permit(:name, :artist, :genre, :record_label, :year, :producer_id, :sampled_at, :sample_pic_address, :youtube_embed)
    end 
    def songssample_params
      params.require(:songssample).permit(:song_id, :sample_id)
    end
end
