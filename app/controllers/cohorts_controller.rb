class CohortsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :unfound_record
    def index
        render json: Cohort.all, status: :ok
    end

    def show
        cohort = Cohort.find(params[:id])
        render json: cohort, status: :ok
    end

    private

    def unfound_record
        render json:{error: "No cohort has such an id"}, status: :not_found
    end
end
