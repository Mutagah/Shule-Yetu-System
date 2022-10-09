class Lecturer < ApplicationRecord
    has_many :units
    has_many :cohort, through: :units
end
