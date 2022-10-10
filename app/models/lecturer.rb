class Lecturer < ApplicationRecord
    has_many :units
    has_many :cohorts, through: :units

    has_secure_password

    validates :name, presence: true
    validates :age, presence: true, numericality: {
        greater_than_or_equal_to: 30,
        less_than_or_equal_to: 58
    }
    validates :phone_number, presence: true
    validates :email_address, presence: true
    validates :field_of_speciality, presence: true
    validates :password, presence: true
end
