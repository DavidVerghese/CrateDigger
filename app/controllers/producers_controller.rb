class ProducersController < ApplicationController
    def index
      @producers = Producer.all
      render json: @producers
    end
    def show
      @producer = Producer.find(params[:id])
      render json: @producer
    end
    def create
      @producer = Producer.new(producer_params)
  
      if @producer.save
        render json: @producer, status: :created
      else
        render json: @producer.errors, status: :unprocessable_entity
      end
    end
    def update
      @producer = Producer.find(params[:id])
      @producer.update(producer_params)
      render json: @producer
    end
    def destroy
      @producer = Producer.find(params[:id])
      @producer.destroy
    end
    private
      def set_producer
        @producer = Producer.find(params[:id])
      end
      def producer_params
        params.require(:producer).permit(:name, :genre, :lifetime, :location)
      end
end