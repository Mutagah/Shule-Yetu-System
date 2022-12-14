class CreateLecturers < ActiveRecord::Migration[7.0]
  def change
    create_table :lecturers do |t|
      t.string :name
      t.integer :age
      t.string :phone_number
      t.string :email_address
      t.string :field_of_speciality
      t.string :image_url
      t.string :password_digest

      t.timestamps
    end
  end
end
