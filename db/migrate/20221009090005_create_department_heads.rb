class CreateDepartmentHeads < ActiveRecord::Migration[7.0]
  def change
    create_table :department_heads do |t|
      t.string :name
      t.integer :age
      t.string :phone_number
      t.string :email_address
      t.string :field_of_speciality

      t.timestamps
    end
  end
end
