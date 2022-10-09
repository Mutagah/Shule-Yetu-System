class LecturerSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :phone_number, :email_address, :field_of_speciality
  has_many :units,dependent: :destroy
  has_many :cohorts
end
