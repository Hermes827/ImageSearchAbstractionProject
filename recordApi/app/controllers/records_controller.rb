class RecordsController < ApplicationController

  def index
     @records = Record.all
     render json: @records, status: :ok
   end

   def create
     @record = Record.create(record_params)
     render json: @record, status: :ok
   end

   def record_params
     params.require(:record).permit(:term, :date, :time)
   end

end

# def record_params
#   params.require(:record).permit(:term, :date)
# end

# def hello
#   params.require(:record).permit(:term, :date, :time)
# end

# for some reason rails didnt like my original def record_params method, strangely 
# enough it accept the method after I renamed it hello and then when I changed the word
# hello to record_params the method suddenly started working. I have no idea why
# this is
