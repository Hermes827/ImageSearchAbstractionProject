class RecordsChangeTime < ActiveRecord::Migration[6.0]
  def change
    change_column(:records, :time, :string)
  end
end
