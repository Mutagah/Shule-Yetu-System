class CreateCohorts < ActiveRecord::Migration[7.0]
  def change
    create_table :cohorts do |t|
      t.integer :year_of_study
      t.integer :semester
      t.integer :course_id

      t.timestamps
    end
  end
end
