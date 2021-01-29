class SamplesController < ApplicationController
    # GET /samples
    def index
      @samples = Sample.all
  
      render json: @samples
    end
  
    # GET /samples/1
    def show
      @sample = Sample.find(params[:id])
      render json: @sample
    end
  
    # POST /samples
    def create
      @sample = Sample.new(sample_params)
  
      if @sample.save
        render json: @sample, status: :created
      else
        render json: @sample.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /samples/1
    def update
      @sample = Sample.find(params[:id])
      @sample.update(sample_params)
      render json: @sample
    end
  
    # DELETE /samples/1
    def destroy
      @sample = Sample.find(params[:id])
      @sample.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_sample
        @sample = Sample.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def sample_params
        params.require(:sample).permit(:name, :artist, :genre, :record_label, :year, :producer_id, :sampled_at)
      end
end
