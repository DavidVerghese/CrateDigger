class SongproducersController < ApplicationController

  def show
    set_producer
    render json: @producer.name
  end

  def update
    set_producer
    @producer.update(producer_params)
    render json: @producer
  end

  private
    def set_producer
      @song = Song.find(params[:id])
      @producer = Producer.find(@song.producer_id)
    end
    def producer_params
     params.require(:producer).permit(:name)
    end
end
