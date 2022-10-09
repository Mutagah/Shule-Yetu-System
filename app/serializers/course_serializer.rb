class CourseSerializer < ActiveModel::Serializer
  attributes :id, :course_name, :course_level, :course_duration_in_years
  has_many :cohorts
  has_many :units
end
