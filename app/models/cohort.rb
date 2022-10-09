class Cohort < ApplicationRecord
    has_many :units
    has_many :lecturers, through: :units
end
