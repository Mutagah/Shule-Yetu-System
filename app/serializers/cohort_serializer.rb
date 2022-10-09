class CohortSerializer < ActiveModel::Serializer
  attributes :id, :year_of_study, :semester, :course_id
  has_many :units
end
