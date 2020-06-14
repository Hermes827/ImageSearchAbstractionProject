class RecordsChangeTime < ActiveRecord::Migration[6.0]
  def change
    change_column(:records, :time, :float)
  end
end
