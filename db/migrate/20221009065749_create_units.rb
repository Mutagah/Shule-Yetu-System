class CreateUnits < ActiveRecord::Migration[7.0]
  def change
    create_table :units do |t|
      t.string :code
      t.string :name
      t.integer :lecturer_id
      t.integer :cohort_id

      t.timestamps
    end
  end
end
