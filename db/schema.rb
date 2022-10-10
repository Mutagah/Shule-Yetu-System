# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_09_090005) do
  create_table "cohorts", force: :cascade do |t|
    t.integer "year_of_study"
    t.integer "semester"
    t.integer "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "courses", force: :cascade do |t|
    t.string "course_name"
    t.string "course_level"
    t.integer "course_duration_in_years"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "department_heads", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "phone_number"
    t.string "email_address"
    t.string "field_of_speciality"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lecturers", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "phone_number"
    t.string "email_address"
    t.string "field_of_speciality"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "units", force: :cascade do |t|
    t.string "code"
    t.string "name"
    t.integer "lecturer_id"
    t.integer "cohort_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
