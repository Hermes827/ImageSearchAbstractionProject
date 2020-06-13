class AddTimeToRecords < ActiveRecord::Migration[6.0]
  def change
    add_column :records, :time, :string
  end
end
