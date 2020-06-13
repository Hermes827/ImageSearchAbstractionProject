class AddTermToRecords < ActiveRecord::Migration[6.0]
  def change
    add_column :records, :term, :string
  end
end
