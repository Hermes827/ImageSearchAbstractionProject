class RemoveTimeFromRecords < ActiveRecord::Migration[6.0]
  def change
    remove_column :records, :time, :float
  end
end
