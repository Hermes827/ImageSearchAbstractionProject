class AddTimeToRecords < ActiveRecord::Migration[6.0]
  def change
    add_column :records, :time, :float
  end
end
