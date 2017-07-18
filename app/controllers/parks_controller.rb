class ParksController < ApplicationController
  before_action :set_park, only: [:show, :edit, :update, :destroy]
  before_action :set_headers
  protect_from_forgery with: :null_session
  

  # GET /parks
  # GET /parks.json
  def index
    puts "555555555555555555555555555555555555555555555555"
    @parks = Park.all
    mypark = Park.last.status
    
    puts mypark.inspect
    puts mypark.to_json
    # return JSON.Array park, :status
    # return park.to_builder.target!
    # ActiveRecord::Base.include_root_in_json = true
    return mypark.to_json
    # return park.as_json
   
    # puts "#{park.to_json}"
  end

  # GET /parks/1
  # GET /parks/1.json
  def show
  end

  # GET /parks/new
  def new
    @park = Park.new
  end

  # GET /parks/1/edit
  def edit
  end

  # POST /parks
  # POST /parks.json
  def create
    @park = Park.new(creation_params)
    # # @park.status = params[:state]
    @park.status = params[:state]
    puts params.inspect
      puts "=================================================="
    respond_to do |format|
      if @park.save
        format.html { redirect_to @park, notice: 'Park was successfully created.' }
        format.json { render :show, status: :created, location: @park }
      else
        format.html { render :new }
        format.json { render json: @park.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /parks/1
  # PATCH/PUT /parks/1.json
  def update
    respond_to do |format|
      if @park.update(park_params)
        format.html { redirect_to @park, notice: 'Park was successfully updated.' }
        format.json { render :show, status: :ok, location: @park }
      else
        format.html { render :edit }
        format.json { render json: @park.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /parks/1
  # DELETE /parks/1.json
  def destroy
    @park.destroy
    respond_to do |format|
      format.html { redirect_to parks_url, notice: 'Park was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_park
      @park = Park.find(params[:id])
    end
    def set_headers
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
      headers['Access-Control-Request-Method'] = '*'
      headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def park_params
      params.require(:park).permit(:status)
    end
    
    def creation_params
      params.permit(:status)
    end
end
