class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :course_name
      t.string :course_level
      t.integer :course_duration_in_years
      

      t.timestamps
    end
  end
end
