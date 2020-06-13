class RemoveTextFromRecords < ActiveRecord::Migration[6.0]
  def change
    remove_column :records, :text, :string
  end
end
