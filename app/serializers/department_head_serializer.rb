class DepartmentHeadSerializer < ActiveModel::Serializer
  attributes :id,:name,:phone_number, :email_address, :field_of_speciality
end
