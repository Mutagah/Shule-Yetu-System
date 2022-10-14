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

lecturer1 = Lecturer.create(name: "Christine Anyango", age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Statistics",image_url:"https://image.shutterstock.com/image-photo/asian-senior-male-calculus-professor-260nw-1891943233.jpg", password:"lec1")

lecturer2 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Accounting",image_url:"https://pediaa.com/wp-content/uploads/2016/04/Difference-Between-Lecturer-and-Professor-image-2.jpg",password:"lec2")

lecturer3 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Applied Mathematics",image_url:"https://images.practicaladultinsights.com/slideshow-mobile-small/woman-giving-lecture.jpg",password:"lec3")

lecturer4 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Economics",image_url:"https://us.123rf.com/450wm/lightfieldstudios/lightfieldstudios1903/lightfieldstudios190306033/118631872-beautiful-female-teacher-in-formal-wear-writing-in-notebook-and-looking-at-camera-in-classroom.jpg?ver=6",password:"lec4")

lecturer5 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Multimedia Systems",image_url:"https://www.kenyans.co.ke/files/styles/article_style_mobile/public/images/media/Taita%20Taveta%20University%20Lecturer%20Peter%20Ochieng%20appointed%20for%20a%20role%20at%20Cambridge%20University.jpg?itok=4_R1FYxR",password:"lec5")

lecturer6 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Computer Networks",image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuYpFX43msBV9QwD2onqOifwluVcHnxREdz2EnziUvDAbhiB01efL5WBdiFZ_24qtJTQ&usqp=CAU",password:"lec6")

lecturer7 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Computer/System Programming",image_url:"https://www.alfred.edu/about/community/outreach/_images/scholes-lecture.jpg",password:"lec7")

lecturer8 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Pure Mathematics",image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ60Q5rRqgboujgYfFXtPSpNig1a9w5jK9TEspNzcCOS7YR0517E503qjFiG6d986cJ24&usqp=CAU",password:"lec8")

lecturer9 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Computer Graphics",image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5q_oxvPydUjiEjy70IVwlytXbKJbupxmAsh_eC3Fl65CahGchjZTl5WwShAjGVDAbrQU&usqp=CAU",password:"lec9")

lecturer10 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Database Systems",image_url:"https://media.istockphoto.com/photos/portrait-of-smiling-professor-in-the-amphitheater-picture-id1128666909?k=20&m=1128666909&s=612x612&w=0&h=Kuk_id7fnDBVBW-2SpGjId0wptbUUefyVhM7RzaPeOI=",password:"lec10")

lecturer11 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Internet Application",image_url:"https://media.istockphoto.com/photos/portrait-of-an-attractive-successful-influential-adult-caucasian-or-picture-id1309478236?k=20&m=1309478236&s=612x612&w=0&h=-ej9n6VTbLsdBs7YdXR1R130g1qRjkdn6850KKYbDSY=",password:"lec11")

lecturer12 = Lecturer.create(name: Faker::Name.name, age: rand(30..56), phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality: "Data Structures",image_url:"https://www.koimoi.com/wp-content/new-galleries/2020/04/money-heist-alvaro-morte-had-to-audition-these-many-times-to-bag-the-role-of-professor-in-la-casa-de-papel-001.jpg",password:"lec12")




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

unit11 = Unit.create(code:"STA 201",name:"Probability and Statistics II",lecturer_id: lecturer1.id,cohort_id:cohort6.id)

unit12 = Unit.create(code:"STA 223",name:"Operations Research",lecturer_id: lecturer1.id,cohort_id: cohort6.id)

unit13 = Unit.create(code:"STA 301",name:"Probability and Statistics III",lecturer_id: lecturer1.id,cohort_id: cohort7.id)

unit14 = Unit.create(code:"STA 303",name:"Theory of Estimation",lecturer_id: lecturer1.id,cohort_id: cohort7.id)

unit15 = Unit.create(code:"STA 307",name:"Macro economics",lecturer_id: lecturer4.id,cohort_id: cohort7.id)

unit16 = Unit.create(code:"STA 305",name:"Probability Modelling",lecturer_id: lecturer1.id,cohort_id: cohort7.id)

puts "Seeding Department Head Table"

HOD = DepartmentHead.create(name: "Dr Samuel Mutua", age: rand(30..56),  phone_number: "#{rand(254700000000..254799999999)}", email_address: Faker::Internet.email, field_of_speciality:"Applied Mathematics",password:"applieddaktari")

puts "End of Seeding Database tables"
