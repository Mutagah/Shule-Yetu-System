class Course < ApplicationRecord
    has_many :cohorts
    has_many :units, through: :cohorts
end
