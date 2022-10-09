class UnitSerializer < ActiveModel::Serializer
  attributes :id, :code, :name, :lecturer_id, :cohort_id
  belongs_to :cohort
  belongs_to :lecturer
end
