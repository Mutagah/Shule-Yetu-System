class Unit < ApplicationRecord
    belongs_to :lecturer
    belongs_to :cohort
    validates :name, presence: true
    validates :code, presence: true
end
