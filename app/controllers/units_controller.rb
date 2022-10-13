class UnitsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :unfound_record
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    def index
        render json: Unit.all, status: :ok
    end

    def show
        unit = Unit.find(params[:id])
        render json: unit, status: :ok
    end

    def create 
        unit = Unit.create!(unit_params)
        render json: unit, status: :created
    end

    def update
        unit = Unit.find(params[:id])
        unit.update!(update_unit_params)
        render json: unit, status: :accepted
    end

    private

    def invalid_record
        render json:{error: "Please ensure all inputs are filled"},status: :unprocessable_entity
    end

    def unfound_record
        render json:{error: "No unit has such an id"}, status: :not_found
    end

    def update_unit_params
        params.permit(:lecturer_id)
    end

    def unit_params
            params.permit(:code, :name, :lecturer_id, :cohort_id)
    end
end
