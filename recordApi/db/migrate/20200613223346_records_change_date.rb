class RecordsChangeDate < ActiveRecord::Migration[6.0]
  def change
    change_column(:records, :date, :string)
  end
end
