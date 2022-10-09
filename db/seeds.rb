# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding Database Tables"

field_of_speciality = ["Statistics","Accounting","Applied Mathematics","Economics","Multimedia Systems","Computer Networks","Computer/System Programming","Pure Mathematics","Computer Graphics","Database Systems","Internet Application","Data Structures"]

puts "Seeding Courses table"

course1 = Course.create(course_name: "Bsc(Mathematics and Computer Science)",course_level:"Degree",course_duration_in_years:4)

course2 = Course.create(course_name: "Bsc(Statistics)", course_level:"Degree",course_duration_in_years:4)

puts "Seeding Cohorts table"

cohort1 = Cohort.create(year_of_study:1,semester:1,course_id:course1.id)

cohort2 = Cohort.create(year_of_study:2,semester:1,course_id:course1.id)

cohort3 = Cohort.create(year_of_study:3,semester:1,course_id:course1.id)

cohort4 = Cohort.create(year_of_study:4,semester:1,course_id:course1.id)

cohort5 = Cohort.create(year_of_study:1,semester:1,course_id:course2.id)

cohort6 = Cohort.create(year_of_study:2,semester:1,course_id:course2.id)

cohort7 = Cohort.create(year_of_study:3,semester:1,course_id:course2.id)

cohort8 = Cohort.create(year_of_study:4,semester:1,course_id:course2.id)


puts "Seeding Lecturers table"

lecturer1 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Statistics")

lecturer2 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Accounting")

lecturer3 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", field_of_speciality: "Applied Mathematics")

lecturer4 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Economics")

lecturer5 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Multimedia Systems")

lecturer6 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Computer Networks")

lecturer7 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Computer/System Programming")

lecturer8 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Pure Mathematics")

lecturer9 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Computer Graphics")

lecturer10 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Database Systems")

lecturer11 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Internet Application")

lecturer12 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Data Structures")




puts "Seeding Units table"

unit1 = Unit.create(code:"STA 2103",name:"Principles of Statistics",lecturer_id:lecturer1.id,cohort_id: cohort5.id)

unit2 = Unit.create(code:"HRD 2115",name:"Financial Accounting",lecturer_id: lecturer2.id,cohort_id: cohort3.id)

unit3 = Unit.create(code:"SMA 2320",name:"Analytical Applied Mathematics",lecturer_id: lecturer3.id,cohort_id: cohort3.id)

unit4 = Unit.create(code:"HRD 2103",name:"General Economics",lecturer_id: lecturer4.id, cohort_id: cohort2.id)

unit5 = Unit.create(code:"ICS 2303",name:"Multimedia Systems",lecturer_id: lecturer5.id, cohort_id: cohort4.id)

unit6 = Unit.create(code:"ICS 2306",name:"Computer Networks",lecturer_id: lecturer6.id,cohort_id: cohort3.id)

unit7 = Unit.create(code:"ICS 2104",name:"Object Oriented Programming",lecturer_id: lecturer7.id,cohort_id: cohort1.id)

unit8 = Unit.create(code:"ICS 2301",name:"Real Analysis",lecturer_id: lecturer8.id,cohort_id: cohort3.id)

unit9 = Unit.create(code:"ICS 2311",name:"Computer Graphics",lecturer_id: lecturer9.id,cohort_id:cohort3.id)

unit10 = Unit.create(code:"ICS 2206",name:"Database Management",lecturer_id: lecturer10.id,cohort_id:cohort2.id)

unit11 = Unit.create(code:"STA 201",name:"Probability and Statistics",cohort_id:cohort6.id)

unit12 = Unit.create(code:"STA 223",name:"Operations Research",cohort_id: cohort6.id)

unit13 = Unit.create(code:"STA 301",name:"Probability and Statistics",cohort_id: cohort7.id)

unit14 = Unit.create(code:"STA 303",name:"Theory of Estimation",cohort_id: cohort7.id)

unit15 = Unit.create(code:"STA 307",name:"Macro economics",cohort_id: cohort7.id)

unit16 = Unit.create(code:"STA 305",name:"Probability Modelling",cohort_id: cohort7.id)

puts "Seeding Department Head Table"

HOD = DepartmentHead.create(name: "Dr Samuel Mutua", age: rand(30..56),  phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality:"Applied Mathematics")

puts "End of Seeding Database tables"
