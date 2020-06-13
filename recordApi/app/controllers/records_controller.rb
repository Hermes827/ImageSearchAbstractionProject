class RecordsController < ApplicationController

  def index
     records = Record.all
     render json: records, status: :ok
   end

   def create
     record = Record.create!(record_params)
     render json: record, status: :ok
   end
 ​
   def record_params
     params.require(:record).permit(:term, :date, :time)
   end

end
