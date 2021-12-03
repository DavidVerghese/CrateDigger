class SampleproducersController < ApplicationController

  def update
    set_producer
    @producer.update(producer_params)
    render json: @producer
  end

  private
    def set_producer
      @sample = Sample.find(params[:id])
      @producer = Producer.find(@sample.producer_id)
    end
    def producer_params
     params.require(:producer).permit(:name)
    end
end
