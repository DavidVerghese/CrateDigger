class ProducersController < ApplicationController
    # GET /songs
    def index
      @producers = Producer.all
  
      render json: @producers
    end
  
    # GET /producers/1
    def show
      @producer = Producer.new(producer_params)
      # @producer = Producer.find(params[:id])
      render json: @producer
    end
  
    # POST /producers
    def create
      # @producer = Producer.new(producer_params)
      @producer = Producer.new(producer_params)
  
      if @producer.save
        render json: @producer, status: :created
      else
        render json: @producer.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /producers/1
    def update
      if @producer.update(producer_params)
        render json: @producer
      else
        render json: @producer.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /producers/1
    def destroy
      @producer = Producer.find(params[:id])
      @producer.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_producer
        @producer = Producer.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def producer_params
        params.require(:producer).permit(:name, :genre, :lifetime, :location)
      end
end